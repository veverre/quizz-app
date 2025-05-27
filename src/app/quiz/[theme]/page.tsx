'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { QuizQuestion } from '@/components/organisms';

type Question = {
  question: string;
  options: string[];
  answer: string;
};

export default function QuizPageWithTheme() {
  const { theme } = useParams<{ theme: string }>();
  const [question, setQuestion] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const res = await fetch('/api/quiz', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ theme }),
        });

        if (!res.ok) throw new Error('Failed to fetch');

        const data = await res.json();
        setQuestion(data.question || []);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestion();
  }, [theme]);

  const handleVerifyResponse = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`You selected: ${selectedOption}`);
    // TODO: Implement response verification logic
  };

  if (!theme) {
    return <div className="p-4">No theme provided.</div>;
  }
  if (loading) return <p>Loading quiz...</p>;
  if (error) return <p>Failed to load questions.</p>;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Quiz on "{decodeURIComponent(theme)}"</h1>
      <p className="mb-4">This is a quiz page for the theme: {decodeURIComponent(theme)}</p>
      <form onSubmit={handleVerifyResponse} className="p-4">
        <QuizQuestion
          question={question.question}
          options={question.options}
          selectedOption={selectedOption}
          onOptionSelect={option => setSelectedOption(option)}
        />
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit Answer
        </button>
      </form>
    </main>
  );
}
