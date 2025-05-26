'use client';
import { useParams } from 'next/navigation';

export default function QuizPage() {
  const { theme } = useParams<{ theme: string }>();

  if (!theme) {
    return <div className="p-4">No theme provided.</div>;
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Quiz on "{decodeURIComponent(theme)}"</h1>
      <p className="mb-4">This is a quiz page for the theme: {decodeURIComponent(theme)}</p>
      {/* Here you can add your quiz component or logic */}
    </main>
  );
}
