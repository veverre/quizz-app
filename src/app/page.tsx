import { ThemeInput } from '@/components/organisms';
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1>Welcome mate !</h1>
      <p>This is a simple Next.js quiz application using AI.</p>
      <ThemeInput />
    </main>
  );
}
