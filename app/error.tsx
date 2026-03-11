'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 text-center bg-white">
      <h2 className="text-2xl font-serif mb-4">Something went wrong</h2>
      <p className="text-gray-500 text-sm mb-8 leading-relaxed max-w-[280px]">
        We encountered an error while loading this page. Please try again.
      </p>
      <button
        onClick={() => reset()}
        className="px-8 py-3 bg-gray-900 text-white text-xs uppercase tracking-widest hover:bg-black transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
