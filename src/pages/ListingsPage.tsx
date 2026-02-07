import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Grid3X3, List, SlidersHorizontal } from 'lucide-react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { SearchBar } from '@/components/SearchBar';
import { ListingCard } from '@/components/ListingCard';
import { MLSDisclaimer } from '@/components/MLSDisclaimer';
import { searchListings } from '@/data/listings';
import type { SearchFilters } from '@/types/listing';
import { cn } from '@/utils/cn';

export function ListingsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<SearchFilters['sortBy']>('date_desc');

  const filters: SearchFilters = useMemo(() => ({
    query: searchParams.get('q') || undefined,
    city: searchParams.get('city') || undefined,
    propertyType: (searchParams.get('type') as SearchFilters['propertyType']) || undefined,
    minPrice: searchParams.get('minPrice') ? Number(searchParams.get('minPrice')) : undefined,
    maxPrice: searchParams.get('maxPrice') ? Number(searchParams.get('maxPrice')) : undefined,
    bedrooms: searchParams.get('beds') ? Number(searchParams.get('beds')) : undefined,
    bathrooms: searchParams.get('baths') ? Number(searchParams.get('baths')) : undefined,
    sortBy,
  }), [searchParams, sortBy]);

  const { listings, total } = useMemo(() => searchListings(filters), [filters]);

  const handleSearch = (newFilters: SearchFilters) => {
    const params = new URLSearchParams();
    if (newFilters.query) params.set('q', newFilters.query);
    if (newFilters.city) params.set('city', newFilters.city);
    if (newFilters.propertyType) params.set('type', newFilters.propertyType);
    if (newFilters.minPrice) params.set('minPrice', String(newFilters.minPrice));
    if (newFilters.maxPrice) params.set('maxPrice', String(newFilters.maxPrice));
    if (newFilters.bedrooms) params.set('beds', String(newFilters.bedrooms));
    if (newFilters.bathrooms) params.set('baths', String(newFilters.bathrooms));
    setSearchParams(params);
  };

  const activeFilterCount = [
    filters.query,
    filters.city,
    filters.propertyType,
    filters.minPrice || filters.maxPrice,
    filters.bedrooms,
    filters.bathrooms,
  ].filter(Boolean).length;

  const title = filters.city
    ? `Real Estate Listings in ${filters.city}, Ontario`
    : filters.propertyType
    ? `${filters.propertyType} for Sale in Ontario`
    : 'All Active MLS® Listings';

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">{title}</h1>
        <p className="mt-1 text-sm text-slate-500">
          Showing {total} active {total === 1 ? 'listing' : 'listings'}
          {filters.city ? ` in ${filters.city}` : ' across the GTA'}
          {activeFilterCount > 0 && ` · ${activeFilterCount} filter${activeFilterCount > 1 ? 's' : ''} applied`}
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <SearchBar
          compact
          onSearch={handleSearch}
          initialFilters={filters}
          showFilters={activeFilterCount > 0}
        />
      </div>

      {/* Toolbar */}
      <div className="mb-4 flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-2">
        <span className="text-sm font-medium text-slate-600">{total} results</span>
        <div className="flex items-center gap-3">
          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SearchFilters['sortBy'])}
            className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600 focus:border-emerald-400 focus:outline-none"
          >
            <option value="date_desc">Newest First</option>
            <option value="date_asc">Oldest First</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
          </select>
          {/* View Toggle */}
          <div className="hidden sm:flex items-center rounded-lg border border-slate-200">
            <button
              onClick={() => setViewMode('grid')}
              className={cn(
                'rounded-l-lg p-1.5 transition-colors',
                viewMode === 'grid' ? 'bg-slate-100 text-slate-900' : 'text-slate-400 hover:text-slate-600'
              )}
            >
              <Grid3X3 className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={cn(
                'rounded-r-lg p-1.5 transition-colors',
                viewMode === 'list' ? 'bg-slate-100 text-slate-900' : 'text-slate-400 hover:text-slate-600'
              )}
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Results */}
      {listings.length > 0 ? (
        <div
          className={cn(
            viewMode === 'grid'
              ? 'grid gap-6 sm:grid-cols-2 lg:grid-cols-3'
              : 'space-y-4'
          )}
        >
          {listings.map((listing) => (
            <ListingCard key={listing.mlsNumber} listing={listing} variant={viewMode} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-slate-200 bg-white p-12 text-center">
          <SlidersHorizontal className="mx-auto h-12 w-12 text-slate-300" />
          <h3 className="mt-4 text-lg font-semibold text-slate-700">No listings found</h3>
          <p className="mt-1 text-sm text-slate-500">
            Try adjusting your search criteria or removing some filters.
          </p>
          <button
            onClick={() => setSearchParams(new URLSearchParams())}
            className="mt-4 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* MLS Disclaimer */}
      <div className="mt-8">
        <MLSDisclaimer />
      </div>
    </div>
  );
}
