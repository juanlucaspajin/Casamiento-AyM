import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { neon } from '@neondatabase/serverless';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cargar .env.local si existe
const envPath = path.resolve(__dirname, '../.env.local');
if (fs.existsSync(envPath)) {
  const content = fs.readFileSync(envPath, 'utf8');
  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx !== -1) {
      const key = trimmed.slice(0, eqIdx).trim();
      const val = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, '');
      if (!process.env[key]) {
        process.env[key] = val;
      }
    }
  }
}

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  console.error('❌ Error: DATABASE_URL no encontrada en las variables de entorno ni en .env.local');
  process.exit(1);
}

async function runMigration() {
  console.log('⏳ Conectando a Neon Postgres y aplicando migración...');
  const sql = neon(databaseUrl);
  const schemaPath = path.resolve(__dirname, '../db/schema.sql');
  const schemaSql = fs.readFileSync(schemaPath, 'utf8');

  // Ejecutar el script SQL
  await sql(schemaSql);
  console.log('✅ Migración ejecutada con éxito. Las tablas `messages` y `message_rate_limits` están listas.');
}

runMigration().catch((err) => {
  console.error('❌ Error ejecutando la migración:', err);
  process.exit(1);
});
