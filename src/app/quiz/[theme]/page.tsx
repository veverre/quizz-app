'use client';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { QuizOption } from '@/components/molecules';

export default function QuizPage() {
  const { theme } = useParams<{ theme: string }>();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  if (!theme) {
    return <div className="p-4">No theme provided.</div>;
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Quiz on "{decodeURIComponent(theme)}"</h1>
      <p className="mb-4">This is a quiz page for the theme: {decodeURIComponent(theme)}</p>

      <QuizOption
        option="Example Option 1"
        isSelected={selectedOption === 'Example Option 1'}
        onClick={(option) => setSelectedOption(option)}
      />
      <QuizOption
        option="Example Option 2"
        isSelected={selectedOption === 'Example Option 2'}
        onClick={(option) => setSelectedOption(option)}
      />
      <QuizOption
        option="Example Option 3"
        isSelected={selectedOption === 'Example Option 3'}
        onClick={(option) => setSelectedOption(option)}
      />
      <QuizOption
        option="Example Option 4"
        isSelected={selectedOption === 'Example Option 4'}
        onClick={(option) => setSelectedOption(option)}
      />
    </main>
  );
}
