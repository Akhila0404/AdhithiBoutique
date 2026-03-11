export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh] p-8">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-2 border-gray-100 border-t-gray-900 rounded-full animate-spin"></div>
        <p className="text-xs uppercase tracking-widest text-gray-400 font-medium animate-pulse">ADHITHI</p>
      </div>
    </div>
  );
}
