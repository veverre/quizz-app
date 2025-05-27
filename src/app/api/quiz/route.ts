import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { theme } = await req.json();

    const questions = [
      {
        question: `Which of these is a character from ${theme}?`,
        options: ['Yoda', 'Spiderman', 'Harry Potter', 'Shrek'],
        answer: 'Yoda',
      },
      {
        question: `When was the first ${theme} movie released?`,
        options: ['1977', '1980', '1999', '2005'],
        answer: '1977',
      },
    ];

    return NextResponse.json({ questions }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
