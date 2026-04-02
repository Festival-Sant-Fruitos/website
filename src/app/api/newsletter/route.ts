import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = body.email?.toLowerCase().trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Email no vàlid' }, { status: 400 });
    }

    const filePath = path.join(process.cwd(), 'data', 'subscribers.json');

    let subscribers: string[] = [];
    try {
      const data = await fs.readFile(filePath, 'utf-8');
      subscribers = JSON.parse(data);
    } catch {
      // File doesn't exist yet
    }

    if (!subscribers.includes(email)) {
      subscribers.push(email);
      await fs.mkdir(path.join(process.cwd(), 'data'), { recursive: true });
      await fs.writeFile(filePath, JSON.stringify(subscribers, null, 2));
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Error del servidor' }, { status: 500 });
  }
}
