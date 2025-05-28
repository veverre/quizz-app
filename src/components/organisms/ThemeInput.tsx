'use client';

import { useState } from 'react';
export default function ThemeInput({ compact = false }: { compact?: boolean }) {
  const [theme, setTheme] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!theme) return;
    window.location.href = `/quiz/${encodeURIComponent(theme)}`;
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full max-w-md">
      <input
        name="quiz-theme"
        value={theme}
        onChange={e => setTheme(e.target.value)}
        type="text"
        className="border border-gray-300 rounded p-2"
        placeholder="Enter quiz theme here..."
      />
      {!compact && (
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Launch the quiz !
        </button>
      )}
    </form>
  );
}
