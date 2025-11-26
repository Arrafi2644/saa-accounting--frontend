"use client";

import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6">
      <h1 className="text-[8rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-500 animate-pulse">
        404
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold mb-3">
        Oops! Page not found
      </h2>

      <p className="text-gray-400 text-center max-w-md mb-8">
        The page you’re looking for doesn’t exist or has been moved. Let’s get you back on track!
      </p>

      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-medium hover:from-indigo-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-pink-500/20"
      >
        Go Home
      </Link>

      <div className="mt-16 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-gray-400"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  );
}
