'use server';

import crypto from 'crypto';
import { headers } from 'next/headers';
import { z } from 'zod';
import { sql } from '@/lib/db';

export type MessageActionState = {
  success: boolean;
  error?: string;
};

// Esquema de validación estricto con Zod
const messageSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, 'Por favor, ingresa tu nombre.')
    .max(60, 'El nombre no puede tener más de 60 caracteres.'),
  message: z
    .string()
    .trim()
    .min(1, 'Por favor, escribe un mensaje.')
    .max(1000, 'El mensaje no puede tener más de 1000 caracteres.'),
});

// Función para obtener y hashear la IP del cliente (privacidad garantizada)
async function getClientIpHash(): Promise<string> {
  try {
    const headerList = await headers();
    const forwardedFor = headerList.get('x-forwarded-for');
    const realIp = headerList.get('x-real-ip');
    const rawIp = forwardedFor?.split(',')[0].trim() || realIp || '127.0.0.1';
    
    // Hash SHA-256 con salt para nunca exponer ni guardar la IP original
    const salt = process.env.RATE_LIMIT_SALT || 'casamiento-aym-salt';
    return crypto.createHash('sha256').update(rawIp + salt).digest('hex');
  } catch {
    return 'anonymous-hash';
  }
}

/**
 * Server Action para guardar mensajes privados de los invitados.
 * - Validación exhaustiva con Zod
 * - Protección silenciosa contra bots mediante Honeypot
 * - Límite de frecuencia (Rate Limit): máx 5 mensajes por 10 minutos por IP
 * - Inserción SQL 100% parametrizada (sin concatenaciones)
 * - NUNCA expone datos de la tabla al cliente
 */
export async function submitMessageAction(
  prevState: MessageActionState,
  formData: FormData
): Promise<MessageActionState> {
  try {
    // 1. Detección de Bots con Honeypot
    // El campo "website" está oculto visualmente; si viene lleno, es un bot.
    const honeypot = formData.get('website');
    if (typeof honeypot === 'string' && honeypot.trim().length > 0) {
      // Respondemos éxito simulado para neutralizar al bot sin tocar la base de datos
      return { success: true };
    }

    // 2. Extracción y Validación de Datos
    const rawName = formData.get('name');
    const rawMessage = formData.get('message');

    const validationResult = messageSchema.safeParse({
      name: typeof rawName === 'string' ? rawName : '',
      message: typeof rawMessage === 'string' ? rawMessage : '',
    });

    if (!validationResult.success) {
      const firstError = validationResult.error.issues[0]?.message || 'Datos inválidos.';
      return { success: false, error: firstError };
    }

    const { name, message } = validationResult.data;

    // 3. Rate Limiting por Hash de IP (Máximo 5 envíos en 10 minutos)
    const ipHash = await getClientIpHash();

    const rateLimitCheck = await sql`
      SELECT count(*)::int as count 
      FROM message_rate_limits 
      WHERE ip_hash = ${ipHash} 
        AND created_at > now() - interval '10 minutes'
    `;

    const recentSubmissions = Number(rateLimitCheck[0]?.count || 0);
    if (recentSubmissions >= 5) {
      return {
        success: false,
        error: 'Has enviado varios mensajes recientemente. Por favor, aguarda unos minutos para enviar otro.',
      };
    }

    // 4. Registro del intento de envío para el rate limiting
    await sql`
      INSERT INTO message_rate_limits (ip_hash)
      VALUES (${ipHash})
    `;

    // 5. Inserción parametrizada segura del mensaje
    await sql`
      INSERT INTO messages (name, message)
      VALUES (${name}, ${message})
    `;

    return { success: true };
  } catch (error) {
    console.error('Error al persistir el mensaje:', error);
    return {
      success: false,
      error: 'Hubo un inconveniente al guardar tu mensaje. Por favor, intenta de nuevo.',
    };
  }
}
