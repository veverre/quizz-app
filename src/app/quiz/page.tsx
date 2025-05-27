import Link from 'next/link'

export default function QuizPageNoTheme() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-4">
            <h1 className="text-2xl font-bold mb-4">Quiz Page</h1>
            <p className="mb-4">This is a quiz page. Please select a theme to start.</p>
            <p className="text-gray-500">No theme provided.</p>
            <Link href="/" className="mt-4 text-blue-600 hover:underline">
                Go back to Home to select a theme
            </Link>
        </main>
    );
}