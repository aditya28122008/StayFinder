"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 dark:bg-[#0f172a] dark:text-white px-6 text-center">
      <h1 className="text-6xl font-bold text-blue-600 dark:text-cyan-400 mb-4">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
        Oops! The page you&apos;re looking for doesn’t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white px-6 py-2 rounded-full shadow-md transition"
      >
        Go to Home
      </Link>
    </main>
  );
}
