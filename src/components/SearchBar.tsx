import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import type { PropertyType, SearchFilters } from '@/types/listing';
import { cn } from '@/utils/cn';

const PROPERTY_TYPES: PropertyType[] = [
  'Detached',
  'Semi-Detached',
  'Townhouse',
  'Condo Apartment',
  'Condo Townhouse',
  'Link',
  'Multiplex',
  'Vacant Land',
];

const PRICE_RANGES = [
  { label: 'Any', min: undefined, max: undefined },
  { label: 'Under $500K', min: undefined, max: 500000 },
  { label: '$500K - $750K', min: 500000, max: 750000 },
  { label: '$750K - $1M', min: 750000, max: 1000000 },
  { label: '$1M - $1.5M', min: 1000000, max: 1500000 },
  { label: '$1.5M - $2M', min: 1500000, max: 2000000 },
  { label: '$2M+', min: 2000000, max: undefined },
];

interface SearchBarProps {
  onSearch?: (filters: SearchFilters) => void;
  initialFilters?: SearchFilters;
  compact?: boolean;
  showFilters?: boolean;
}

export function SearchBar({ onSearch, initialFilters, compact = false, showFilters: initialShowFilters = false }: SearchBarProps) {
  const navigate = useNavigate();
  const [query, setQuery] = useState(initialFilters?.query || '');
  const [showFilters, setShowFilters] = useState(initialShowFilters);
  const [propertyType, setPropertyType] = useState<PropertyType | ''>(initialFilters?.propertyType || '');
  const [priceRange, setPriceRange] = useState(0);
  const [bedrooms, setBedrooms] = useState<number | undefined>(initialFilters?.bedrooms);
  const [bathrooms, setBathrooms] = useState<number | undefined>(initialFilters?.bathrooms);

  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault();
    const filters: SearchFilters = {
      query: query || undefined,
      propertyType: propertyType || undefined,
      minPrice: PRICE_RANGES[priceRange]?.min,
      maxPrice: PRICE_RANGES[priceRange]?.max,
      bedrooms,
      bathrooms,
    };

    if (onSearch) {
      onSearch(filters);
    } else {
      const params = new URLSearchParams();
      if (filters.query) params.set('q', filters.query);
      if (filters.propertyType) params.set('type', filters.propertyType);
      if (filters.minPrice) params.set('minPrice', String(filters.minPrice));
      if (filters.maxPrice) params.set('maxPrice', String(filters.maxPrice));
      if (filters.bedrooms) params.set('beds', String(filters.bedrooms));
      if (filters.bathrooms) params.set('baths', String(filters.bathrooms));
      navigate(`/listings?${params.toString()}`);
    }
  };

  const clearFilters = () => {
    setQuery('');
    setPropertyType('');
    setPriceRange(0);
    setBedrooms(undefined);
    setBathrooms(undefined);
  };

  const hasActiveFilters = propertyType || priceRange > 0 || bedrooms || bathrooms;

  return (
    <div className={cn('w-full', compact ? '' : 'mx-auto max-w-4xl')}>
      <form onSubmit={handleSearch}>
        {/* Main Search */}
        <div className={cn(
          'flex items-center gap-2 rounded-xl border bg-white shadow-sm transition-shadow focus-within:shadow-md',
          compact ? 'border-slate-200 p-1.5' : 'border-slate-200 p-2'
        )}>
          <div className="relative flex-1">
            <Search className={cn('absolute left-3 top-1/2 -translate-y-1/2 text-slate-400', compact ? 'h-4 w-4' : 'h-5 w-5')} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by city, address, neighbourhood, MLS#..."
              className={cn(
                'w-full rounded-lg border-0 bg-transparent text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-0',
                compact ? 'py-2 pl-9 pr-3 text-sm' : 'py-3 pl-11 pr-4 text-base'
              )}
            />
          </div>
          <button
            type="button"
            onClick={() => setShowFilters(!showFilters)}
            className={cn(
              'flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 transition-colors hover:bg-slate-50',
              compact ? 'py-2 text-xs' : 'py-2.5 text-sm',
              showFilters ? 'bg-slate-100 text-slate-900' : 'text-slate-600',
              hasActiveFilters && 'border-emerald-300 bg-emerald-50 text-emerald-700'
            )}
          >
            <SlidersHorizontal className="h-4 w-4" />
            <span className="hidden sm:inline">Filters</span>
            {hasActiveFilters && (
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-bold text-white">
                {[propertyType, priceRange > 0, bedrooms, bathrooms].filter(Boolean).length}
              </span>
            )}
          </button>
          <button
            type="submit"
            className={cn(
              'rounded-lg bg-emerald-600 font-semibold text-white shadow-sm transition-all hover:bg-emerald-700 hover:shadow-md',
              compact ? 'px-4 py-2 text-sm' : 'px-6 py-2.5 text-base'
            )}
          >
            Search
          </button>
        </div>

        {/* Expanded Filters */}
        {showFilters && (
          <div className="mt-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {/* Property Type */}
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Property Type
                </label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value as PropertyType | '')}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                >
                  <option value="">All Types</option>
                  {PROPERTY_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Price Range
                </label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                >
                  {PRICE_RANGES.map((range, i) => (
                    <option key={i} value={i}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Bedrooms */}
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Bedrooms (min)
                </label>
                <select
                  value={bedrooms || ''}
                  onChange={(e) => setBedrooms(e.target.value ? Number(e.target.value) : undefined)}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                >
                  <option value="">Any</option>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n}+
                    </option>
                  ))}
                </select>
              </div>

              {/* Bathrooms */}
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Bathrooms (min)
                </label>
                <select
                  value={bathrooms || ''}
                  onChange={(e) => setBathrooms(e.target.value ? Number(e.target.value) : undefined)}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                >
                  <option value="">Any</option>
                  {[1, 2, 3, 4].map((n) => (
                    <option key={n} value={n}>
                      {n}+
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {hasActiveFilters && (
              <div className="mt-3 flex justify-end">
                <button
                  type="button"
                  onClick={clearFilters}
                  className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-700 transition-colors"
                >
                  <X className="h-3.5 w-3.5" />
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        )}
      </form>
    </div>
  );
}
