import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export interface GuestMessage {
  id: string;
  name: string;
  message: string;
  createdAt: string;
}

// Memory store fallback for environments where filesystem writes are restricted
const memoryMessages: GuestMessage[] = [
  {
    id: 'sample-1',
    name: 'Familia Morales',
    message: '¡Que viva el amor! Les deseamos una vida llena de risas, complicidad y felicidad.',
    createdAt: new Date().toISOString(),
  }
];

const getFilePath = () => {
  // Try writing to data directory or tmp
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    try {
      fs.mkdirSync(dataDir, { recursive: true });
    } catch {
      // fallback
    }
  }
  return path.join(dataDir, 'messages.json');
};

function readMessages(): GuestMessage[] {
  try {
    const filePath = getFilePath();
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(content);
    }
  } catch {
    // fallback to memory
  }
  return memoryMessages;
}

function writeMessages(msgs: GuestMessage[]) {
  try {
    const filePath = getFilePath();
    fs.writeFileSync(filePath, JSON.stringify(msgs, null, 2), 'utf-8');
  } catch {
    // fallback
  }
}

export async function GET() {
  const msgs = readMessages();
  return NextResponse.json(msgs);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, message } = body;

    if (!name || !message || typeof name !== 'string' || typeof message !== 'string') {
      return NextResponse.json({ error: 'Name and message are required' }, { status: 400 });
    }

    const trimmedName = name.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedMessage) {
      return NextResponse.json({ error: 'Name and message cannot be empty' }, { status: 400 });
    }

    const newMessage: GuestMessage = {
      id: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      name: trimmedName,
      message: trimmedMessage,
      createdAt: new Date().toISOString(),
    };

    const currentMessages = readMessages();
    const updatedMessages = [newMessage, ...currentMessages];
    writeMessages(updatedMessages);

    // Keep memory in sync
    memoryMessages.unshift(newMessage);

    return NextResponse.json(newMessage, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save message' }, { status: 500 });
  }
}
