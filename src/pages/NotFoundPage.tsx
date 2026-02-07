import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-slate-100">
        <Home className="h-12 w-12 text-slate-400" />
      </div>
      <h1 className="mt-6 text-4xl font-bold text-slate-900">Page Not Found</h1>
      <p className="mt-3 text-lg text-slate-500">
        Sorry, the page you're looking for doesn't exist or may have been moved.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-emerald-700 transition-all"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        <Link
          to="/listings"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all"
        >
          <Search className="h-4 w-4" />
          Search Listings
        </Link>
      </div>
    </div>
  );
}
