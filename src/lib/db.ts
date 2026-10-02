import { neon, NeonQueryFunction } from '@neondatabase/serverless';

let cachedSql: NeonQueryFunction<false, false> | null = null;

export function getSql(): NeonQueryFunction<false, false> {
  if (cachedSql) return cachedSql;
  const url = process.env.STORAGE_WEDDING_DATABASE_URL;
  if (!url) {
    throw new Error(
      'DATABASE_URL no está configurada. Asegúrate de configurar la variable de entorno en Vercel o en tu archivo .env.local.'
    );
  }
  cachedSql = neon(url);
  return cachedSql;
}

/**
 * Tagged template para consultas SQL parametrizadas directas con Neon.
 * Se inicializa bajo demanda para permitir que el build estático de Next.js
 * funcione aun si DATABASE_URL solo está presente en tiempo de ejecución.
 */
export const sql: NeonQueryFunction<false, false> = ((
  strings: TemplateStringsArray,
  ...values: unknown[]
) => {
  const runner = getSql();
  return runner(strings, ...values);
}) as NeonQueryFunction<false, false>;
