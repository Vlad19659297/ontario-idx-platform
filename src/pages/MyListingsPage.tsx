import { getAgentListings } from '@/data/listings';
import { AGENT } from '@/data/agent';
import { ListingCard } from '@/components/ListingCard';
import { MLSDisclaimer } from '@/components/MLSDisclaimer';
import { Star, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export function MyListingsPage() {
  const listings = getAgentListings();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      {/* Header */}
      <div className="mb-8 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 p-8 text-white sm:p-12">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 text-2xl font-bold backdrop-blur-sm">
            {AGENT.name.split(' ').map((n) => n[0]).join('')}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold sm:text-3xl">{AGENT.name}'s Listings</h1>
              <Star className="h-5 w-5 text-amber-300" />
            </div>
            <p className="mt-1 text-emerald-100">{AGENT.title} · {AGENT.brokerageLegalName}</p>
            <p className="mt-2 text-sm text-emerald-200">
              {listings.length} active listing{listings.length !== 1 ? 's' : ''} · Exclusively represented
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-emerald-700 shadow-lg hover:bg-emerald-50 transition-colors"
          >
            <Phone className="h-4 w-4" />
            Contact Me
          </Link>
        </div>
      </div>

      {/* Listings Grid */}
      {listings.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((listing) => (
            <ListingCard key={listing.mlsNumber} listing={listing} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-slate-200 bg-white p-12 text-center">
          <p className="text-lg font-semibold text-slate-700">No active listings at this time</p>
          <p className="mt-1 text-sm text-slate-500">Check back soon for new listings.</p>
        </div>
      )}

      {/* MLS Disclaimer */}
      <div className="mt-8">
        <MLSDisclaimer />
      </div>
    </div>
  );
}
