# Casamiento A & M — Sistema de Mensajes & Libro de Firmas

Este repositorio contiene el sitio web informativo y libro de firmas para la boda de **A & M**, desarrollado con **Next.js (App Router)** y **Neon Postgres** desplegado en **Vercel**.

---

## 🔒 Privacidad de los Mensajes

Los mensajes dejados por los invitados son **estrictamente privados**:
- El sitio web **únicamente escribe** mensajes en la base de datos a través de una **Server Action**.
- **No existe ningún endpoint público (`GET`) ni consulta en el frontend que devuelva los mensajes**.
- Solo los novios tienen acceso para leer y exportar las dedicatorias desde el panel de control de Neon.

---

## 🛠️ Stack Tecnológico

- **Frontend**: Next.js 16 (App Router, React 19), Tailwind CSS, Canvas Confetti.
- **Base de Datos**: Neon Serverless Postgres.
- **Driver de Conexión**: `@neondatabase/serverless`.
- **Validación**: Zod (en el servidor).
- **Protección**: Honeypot anti-bots y control de tasa (Rate Limiting) por hash SHA-256 de IP.

---

## 🚀 Guía de Configuración Paso a Paso

### 1. Crear la Base de Datos en Neon desde Vercel

1. Ingresa a tu proyecto en el panel de **[Vercel](https://vercel.com)**.
2. Ve a la pestaña **Storage** (o **Marketplace**).
3. Selecciona **Neon Serverless Postgres** y haz clic en **Connect** o **Create New Database**.
4. Vercel vinculará automáticamente la variable de entorno `DATABASE_URL` tanto en los entornos de *Production* como de *Preview*.

---

### 2. Ejecutar el Script de Migración (Creación de Tablas)

Tienes dos alternativas sencillas para crear las tablas necesarias:

#### Opción A: Desde el SQL Editor de Neon (Recomendada)
1. En la consola de Neon (o en la sección Storage de Vercel), abre el **SQL Editor**.
2. Copia y pega el contenido del archivo [`db/schema.sql`](./db/schema.sql):

```sql
CREATE TABLE IF NOT EXISTS messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_messages_created_at ON messages (created_at ASC);

CREATE TABLE IF NOT EXISTS message_rate_limits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  ip_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_rate_limits_lookup ON message_rate_limits (ip_hash, created_at DESC);
```

3. Haz clic en **Run** (Ejecutar).

#### Opción B: Mediante script npm en tu terminal local
Si ya tienes `DATABASE_URL` configurada en tu archivo `.env.local`:
```bash
npm run db:migrate
```

---

### 3. Probar en Entorno Local

1. Obtén las variables de entorno de Vercel en tu máquina:
   ```bash
   vercel env pull .env.local
   ```
   *O bien*, crea manualmente un archivo `.env.local` en la raíz del proyecto basándote en `.env.example`:
   ```env
   DATABASE_URL="postgresql://usuario:password@ep-ejemplo.us-east-2.aws.neon.tech/neondb?sslmode=require"
   RATE_LIMIT_SALT="tu-clave-secreta-opcional"
   ```
2. Instala dependencias y corre el servidor de desarrollo:
   ```bash
   npm install
   npm run dev
   ```
3. Abre [http://localhost:3000](http://localhost:3000), dirígete a la pestaña **Firmas** y envía un mensaje de prueba.

---

## 📖 Cómo Leer y Exportar los Mensajes (Para los Novios)

Para leer las dedicatorias recibidas y guardarlas como recuerdo:

1. Ingresa a la consola de **[Neon](https://console.neon.tech)** o accede desde la pestaña **Storage** en Vercel.
2. Abre el **SQL Editor**.
3. Ejecuta la siguiente consulta para ver todos los mensajes ordenados cronológicamente:

```sql
SELECT 
  name AS "Invitado / Familia",
  message AS "Dedicatoria",
  to_char(created_at AT TIME ZONE 'America/Argentina/Buenos_Aires', 'DD/MM/YYYY HH24:MI') AS "Fecha y Hora"
FROM messages
ORDER BY created_at ASC;
```

4. **Exportar a CSV / Excel**:
   - En la esquina superior derecha de la tabla de resultados de Neon, haz clic en el botón **Download as CSV** (o **Export**).
   - ¡Listo! Tendrás un archivo CSV listo para imprimir, encuadernar o conservar para siempre como recuerdo de boda.
