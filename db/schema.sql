-- =============================================================================
-- ESQUEMA DE BASE DE DATOS: MENSAJES PRIVADOS PARA LOS NOVIOS (NEON POSTGRES)
-- =============================================================================

-- 1. Tabla principal para almacenar los mensajes de los invitados
CREATE TABLE IF NOT EXISTS messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Índice para optimizar la consulta cronológica cuando los novios lean o exporten los mensajes
CREATE INDEX IF NOT EXISTS idx_messages_created_at ON messages (created_at ASC);

-- 2. Tabla para control de tasa (Rate Limiting) por hash de IP
-- Privacidad garantizada: almacena exclusivamente un hash criptográfico SHA-256,
-- nunca la dirección IP real en texto plano.
CREATE TABLE IF NOT EXISTS message_rate_limits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  ip_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Índice para verificar en milisegundos los envíos recientes
CREATE INDEX IF NOT EXISTS idx_rate_limits_lookup ON message_rate_limits (ip_hash, created_at DESC);
