/* eslint-disable no-console */
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { theme } = await req.json();

  const prompt = `Génère une question de quiz avec 4 options sur le thème suivant : "${theme}". Indique la bonne réponse clairement. Réponds au format JSON en respectant ce typage : type Question = { question: string; options: string[]; answer: string;};`;

  const response = await fetch('http://localhost:11434/api/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'mistral',
      prompt,
    }),
  });

  const reader = response.body?.getReader();
  const decoder = new TextDecoder();
  let done = false;
  let fullText = '';

  while (!done) {
    const { value, done: doneReading } = await reader!.read();
    done = doneReading;
    const chunk = decoder.decode(value);

    for (const line of chunk.split('\n')) {
      try {
        if (line.trim() === '') continue;
        const parsed = JSON.parse(line);
        fullText += parsed.response || '';
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        console.warn('Ligne invalide ignorée :', line);
      }
    }
  }
  const jsonBlock = fullText.match(/{[\s\S]*}/)?.[0] || '{}';

  try {
    const question = JSON.parse(jsonBlock);
    return NextResponse.json({ question });
  } catch (e) {
    console.error('Erreur de parsing Mistral:', e);
    return NextResponse.json({ question: null });
  }
}
