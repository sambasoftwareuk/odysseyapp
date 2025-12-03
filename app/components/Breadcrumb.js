"use client";

import { useRouter } from "next/navigation";

export default function Breadcrumb({ currentPage = "" }) {
  const router = useRouter();

  return (
    <nav className="mb-4 flex items-center gap-2 text-sm text-white/80">
      <button
        onClick={() => router.push("/")}
        className="flex items-center gap-1 transition-all hover:text-white active:scale-95 cursor-pointer"
        aria-label="Ana sayfaya dön"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        <span>Ana Sayfa</span>
      </button>
      {currentPage && (
        <>
          <span className="text-white/50">/</span>
          <span className="text-white">{currentPage}</span>
        </>
      )}
    </nav>
  );
}
