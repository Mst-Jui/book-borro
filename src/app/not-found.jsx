import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-white px-6">
      <div className="max-w-2xl w-full text-center">

        {/* Animated 404 Header */}
        <div className="relative mb-8">
          <h1
            className="text-[10rem] md:text-[15rem] font-black leading-none text-orange-500 opacity-10 select-none animate-pulse"
          >
            404
          </h1>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Lost in Space?
            </h2>
            <p className="mt-4 text-slate-500 text-lg max-w-sm mx-auto leading-relaxed">
              The page you are looking for doesn't exist or has been moved to another galaxy.
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Link
            href="/"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-white font-bold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-xl shadow-orange-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Go Back Home
          </Link>
        </div>

        {/* Decorative elements */}
        <div className="mt-20 flex justify-center gap-8 opacity-40">
          <div className="h-2 w-2 rounded-full bg-slate-300"></div>
          <div className="h-2 w-2 rounded-full bg-slate-300"></div>
          <div className="h-2 w-2 rounded-full bg-slate-300"></div>
        </div>
      </div>
    </main>
  );
}