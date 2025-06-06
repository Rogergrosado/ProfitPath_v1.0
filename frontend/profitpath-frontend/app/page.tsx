// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white p-6">
      <h1 className="text-4xl font-bold mb-4 text-center">Welcome to ProfitPath</h1>
      <p className="text-lg text-center max-w-xl mb-8">
        A smarter platform for Amazon FBA sellers — track products, analyze shipping, and optimize profits.
      </p>
      <div className="flex gap-4">
        <Link
          href="/login"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Log In
        </Link>
        <Link
          href="/signup"
          className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}
