/**
 * URL del álbum compartido de Google Fotos.
 * Se lee de forma segura desde la variable de entorno NEXT_PUBLIC_GOOGLE_PHOTOS_URL
 * para que no quede guardada en el repositorio de Git.
 *
 * Puedes configurarla en:
 * - Tu archivo local .env.local
 * - Las variables de entorno de Vercel (Environment Variables)
 */
export const GOOGLE_PHOTOS_ALBUM_URL =
  process.env.NEXT_PUBLIC_GOOGLE_PHOTOS_URL?.trim() || '';
