import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen my-auto">

      <Link href="/app/dashboard" className="text-center">
        <h1 className="text-3xl font-bold underline hover:text-blue-900">Go to Dashboard</h1>
      </Link>
    </main>
  );
}
