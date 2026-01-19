"use client";

import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-linear-to-br from-[#002047] via-gray-800 to-[#002047] text-white px-6">
      <h2 className="text-[8rem] font-extrabold text-transparent bg-clip-text bg-linear-to-r from-[#59c4ee] to-[#4c5db3] animate-pulse">
        404
      </h2>

      <h2 className="text-2xl md:text-3xl font-semibold mb-3">
        Oops! Page not found
      </h2>

      <p className="text-gray-400 text-center max-w-md mb-8">
        The page you’re looking for doesn’t exist or has been moved. Let’s get you back on track!
      </p>

      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-linear-to-r from-[#59c4ee] to-[#4c5db3] text-white font-medium hover:from-[#4c5db3] hover:to-[#59c4ee] transition-all shadow-lg hover:shadow-[#4c5db3]"
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
