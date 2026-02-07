import { Link } from 'react-router-dom';
import { Bed, Bath, Maximize, MapPin, Calendar, Star } from 'lucide-react';
import type { Listing } from '@/types/listing';
import { cn } from '@/utils/cn';

function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 }).format(price);
}

export function ListingCard({ listing, variant = 'grid' }: { listing: Listing; variant?: 'grid' | 'list' }) {
  const isList = variant === 'list';

  return (
    <Link
      to={`/listing/${listing.mlsNumber}`}
      className={cn(
        'group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-lg hover:border-slate-300',
        isList ? 'flex flex-row' : 'flex flex-col'
      )}
    >
      {/* Image */}
      <div className={cn('relative overflow-hidden bg-slate-200', isList ? 'h-48 w-72 flex-shrink-0' : 'aspect-[4/3]')}>
        <img
          src={listing.photos[0]}
          alt={`${listing.address.street}, ${listing.address.city}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Status Badge */}
        <div className="absolute left-3 top-3 flex gap-2">
          <span className="rounded-md bg-emerald-600 px-2 py-0.5 text-xs font-bold text-white shadow-md">
            {listing.status}
          </span>
          {listing.isAgentListing && (
            <span className="flex items-center gap-1 rounded-md bg-amber-500 px-2 py-0.5 text-xs font-bold text-white shadow-md">
              <Star className="h-3 w-3" />
              My Listing
            </span>
          )}
        </div>
        {/* Photo Count */}
        <div className="absolute bottom-3 right-3 rounded-md bg-black/60 px-2 py-0.5 text-xs font-medium text-white backdrop-blur-sm">
          {listing.photos.length} photos
        </div>
      </div>

      {/* Content */}
      <div className={cn('flex flex-1 flex-col p-4', isList && 'justify-center')}>
        {/* Price */}
        <div className="flex items-start justify-between gap-2">
          <p className="text-xl font-bold text-slate-900">{formatPrice(listing.listPrice)}</p>
          {listing.maintenanceFee && (
            <span className="flex-shrink-0 rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500">
              +${listing.maintenanceFee}/mo
            </span>
          )}
        </div>

        {/* Address */}
        <div className="mt-1.5 flex items-start gap-1.5">
          <MapPin className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-slate-400" />
          <div>
            <p className="text-sm font-medium text-slate-700 leading-tight">
              {listing.address.unit ? `${listing.address.unit} - ` : ''}
              {listing.address.street}
            </p>
            <p className="text-xs text-slate-500">
              {listing.address.city}, {listing.address.province} {listing.address.postalCode}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-slate-600">
          <span className="flex items-center gap-1">
            <Bed className="h-4 w-4 text-slate-400" />
            <span className="font-medium">
              {listing.bedrooms}
              {listing.bedroomsPlus ? `+${listing.bedroomsPlus}` : ''}
            </span>
            <span className="text-xs text-slate-400">bed</span>
          </span>
          <span className="flex items-center gap-1">
            <Bath className="h-4 w-4 text-slate-400" />
            <span className="font-medium">{listing.bathrooms}</span>
            <span className="text-xs text-slate-400">bath</span>
          </span>
          {listing.sqft && (
            <span className="flex items-center gap-1">
              <Maximize className="h-4 w-4 text-slate-400" />
              <span className="font-medium">{listing.sqft}</span>
              <span className="text-xs text-slate-400">sqft</span>
            </span>
          )}
        </div>

        {/* Meta */}
        <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3">
          <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
            {listing.propertyType}
          </span>
          <span className="flex items-center gap-1 text-xs text-slate-400">
            <Calendar className="h-3 w-3" />
            {listing.daysOnMarket}d on market
          </span>
        </div>

        {/* MLS Number - Required for TRREB compliance */}
        <p className="mt-2 text-[10px] text-slate-400">MLS® #{listing.mlsNumber}</p>
      </div>
    </Link>
  );
}
