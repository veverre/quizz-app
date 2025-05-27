'use client';
import { useState } from 'react';

export default function Home() {
  const [theme, setTheme] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!theme) return;
    window.location.href = `/quiz/${encodeURIComponent(theme)}`;
  };
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1>Welcome mate !</h1>
      <p>This is a simple Next.js quiz application using AI.</p>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full max-w-md">
        <label>
          Feel free to enter a quiz theme :
          <input
            name="quiz-theme"
            value={theme}
            onChange={e => setTheme(e.target.value)}
            type="text"
            className="border border-gray-300 rounded p-2"
            placeholder="Enter quiz theme here..."
          />
        </label>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Launch the quiz !
        </button>
      </form>
    </main>
  );
}
