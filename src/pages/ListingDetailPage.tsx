import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft, Bed, Bath, Maximize, MapPin, Calendar, Star, Car, Thermometer,
  Wind, Home, Building2, Ruler, DollarSign, Phone, Mail, ChevronLeft, ChevronRight,
  Share2, Heart, Info
} from 'lucide-react';
import { getListingByMls } from '@/data/listings';
import { AGENT } from '@/data/agent';
import { MLSDisclaimer } from '@/components/MLSDisclaimer';
import { cn } from '@/utils/cn';

function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 }).format(price);
}

export function ListingDetailPage() {
  const { mlsNumber } = useParams<{ mlsNumber: string }>();
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const listing = mlsNumber ? getListingByMls(mlsNumber) : undefined;

  if (!listing) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Listing Not Found</h1>
        <p className="mt-2 text-slate-500">This listing may no longer be active or the MLS® number may be incorrect.</p>
        <Link to="/listings" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700">
          <ArrowLeft className="h-4 w-4" />
          Back to Listings
        </Link>
      </div>
    );
  }

  const nextPhoto = () => setCurrentPhoto((p) => (p + 1) % listing.photos.length);
  const prevPhoto = () => setCurrentPhoto((p) => (p - 1 + listing.photos.length) % listing.photos.length);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const details = [
    { label: 'Property Type', value: listing.propertyType, icon: Home },
    { label: 'Building Type', value: listing.buildingType, icon: Building2 },
    { label: 'Bedrooms', value: `${listing.bedrooms}${listing.bedroomsPlus ? ` + ${listing.bedroomsPlus}` : ''}`, icon: Bed },
    { label: 'Bathrooms', value: listing.bathrooms, icon: Bath },
    { label: 'Size', value: listing.sqft ? `${listing.sqft} sqft` : 'N/A', icon: Maximize },
    { label: 'Lot Size', value: listing.lotSize || 'N/A', icon: Ruler },
    { label: 'Parking', value: listing.parkingSpaces ? `${listing.parkingSpaces} (${listing.garageType})` : 'N/A', icon: Car },
    { label: 'Year Built', value: listing.yearBuilt || 'N/A', icon: Calendar },
    { label: 'Heating', value: listing.heating || 'N/A', icon: Thermometer },
    { label: 'Cooling', value: listing.cooling || 'N/A', icon: Wind },
    { label: 'Basement', value: listing.basement || 'N/A', icon: Home },
    { label: 'Taxes', value: listing.taxes ? `${formatPrice(listing.taxes)} (${listing.taxYear})` : 'N/A', icon: DollarSign },
  ];

  return (
    <div>
      {/* Breadcrumb */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Link to="/" className="hover:text-emerald-600">Home</Link>
            <span>/</span>
            <Link to="/listings" className="hover:text-emerald-600">Listings</Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">{listing.address.street}</span>
          </div>
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="relative bg-slate-900">
        <div className="mx-auto max-w-7xl">
          <div className="relative aspect-[16/9] sm:aspect-[21/9]">
            <img
              src={listing.photos[currentPhoto]}
              alt={`${listing.address.street} - Photo ${currentPhoto + 1}`}
              className="h-full w-full object-cover"
            />
            {/* Nav Arrows */}
            {listing.photos.length > 1 && (
              <>
                <button
                  onClick={prevPhoto}
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextPhoto}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
            {/* Photo Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-4 py-1.5 text-sm text-white backdrop-blur-sm">
              {currentPhoto + 1} / {listing.photos.length}
            </div>
            {/* Badges */}
            <div className="absolute left-4 top-4 flex gap-2">
              <span className="rounded-lg bg-emerald-600 px-3 py-1 text-sm font-bold text-white shadow-lg">
                {listing.status}
              </span>
              {listing.isAgentListing && (
                <span className="flex items-center gap-1 rounded-lg bg-amber-500 px-3 py-1 text-sm font-bold text-white shadow-lg">
                  <Star className="h-3.5 w-3.5" />
                  My Listing
                </span>
              )}
            </div>
          </div>
          {/* Thumbnail Strip */}
          {listing.photos.length > 1 && (
            <div className="flex gap-1 overflow-x-auto p-2 bg-slate-900">
              {listing.photos.map((photo, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPhoto(i)}
                  className={cn(
                    'h-16 w-24 flex-shrink-0 overflow-hidden rounded-md transition-all',
                    i === currentPhoto ? 'ring-2 ring-emerald-500 opacity-100' : 'opacity-50 hover:opacity-80'
                  )}
                >
                  <img src={photo} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-slate-900">{formatPrice(listing.listPrice)}</h1>
                  {listing.maintenanceFee && (
                    <p className="text-sm text-slate-500">+ ${listing.maintenanceFee}/month maintenance fee</p>
                  )}
                </div>
                <div className="flex gap-2">
                  <button className="rounded-lg border border-slate-200 p-2.5 text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-colors">
                    <Heart className="h-5 w-5" />
                  </button>
                  <button className="rounded-lg border border-slate-200 p-2.5 text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-colors">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="mt-3 flex items-start gap-2">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                <div>
                  <p className="text-lg font-semibold text-slate-800">
                    {listing.address.unit ? `${listing.address.unit} - ` : ''}
                    {listing.address.street}
                  </p>
                  <p className="text-slate-500">
                    {listing.address.city}, {listing.address.province} {listing.address.postalCode}
                    {listing.address.neighbourhood && ` · ${listing.address.neighbourhood}`}
                  </p>
                </div>
              </div>
              <p className="mt-2 text-xs text-slate-400">MLS® #{listing.mlsNumber}</p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { icon: Bed, label: 'Bedrooms', value: `${listing.bedrooms}${listing.bedroomsPlus ? `+${listing.bedroomsPlus}` : ''}` },
                { icon: Bath, label: 'Bathrooms', value: listing.bathrooms },
                { icon: Maximize, label: 'Size', value: listing.sqft || 'N/A' },
                { icon: Car, label: 'Parking', value: listing.parkingSpaces || 'N/A' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                  <stat.icon className="mx-auto h-5 w-5 text-emerald-600" />
                  <p className="mt-2 text-lg font-bold text-slate-900">{stat.value}</p>
                  <p className="text-xs text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div>
              <h2 className="text-xl font-bold text-slate-900">About This Property</h2>
              <p className="mt-3 leading-relaxed text-slate-600">{listing.description}</p>
            </div>

            {/* Features */}
            {listing.features.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-slate-900">Key Features</h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {listing.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-600"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Property Details Table */}
            <div>
              <h2 className="text-xl font-bold text-slate-900">Property Details</h2>
              <div className="mt-3 grid gap-0 sm:grid-cols-2 rounded-xl border border-slate-200 overflow-hidden">
                {details.map((detail, i) => (
                  <div
                    key={detail.label}
                    className={cn(
                      'flex items-center gap-3 px-4 py-3',
                      i % 2 === 0 ? 'bg-white' : 'bg-slate-50',
                      'border-b border-slate-100 last:border-0'
                    )}
                  >
                    <detail.icon className="h-4 w-4 flex-shrink-0 text-slate-400" />
                    <span className="text-sm text-slate-500">{detail.label}</span>
                    <span className="ml-auto text-sm font-medium text-slate-900">{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Listing Brokerage Attribution (TRREB Required) */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs text-slate-500">
                <strong className="text-slate-600">Listing Brokerage:</strong> {listing.listBrokerage}
              </p>
              <p className="mt-1 text-xs text-slate-500">
                <strong className="text-slate-600">Listing Agent:</strong> {listing.listAgent}
              </p>
              <p className="mt-1 text-xs text-slate-500">
                <strong className="text-slate-600">Listed:</strong> {new Date(listing.listDate).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}
                {' · '}{listing.daysOnMarket} days on market
              </p>
            </div>

            {/* MLS Disclaimer */}
            <MLSDisclaimer />
          </div>

          {/* Sidebar - Contact */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
              {/* Agent Card */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-2xl font-bold text-white">
                    {AGENT.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-slate-900">{AGENT.name}</h3>
                  <p className="text-sm text-slate-500">{AGENT.title}</p>
                  <p className="text-xs text-slate-400">{AGENT.brokerageLegalName}</p>
                </div>
                <div className="mt-4 space-y-2">
                  <a
                    href={`tel:${AGENT.phone.replace(/[^\d+]/g, '')}`}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    {AGENT.phone}
                  </a>
                  <a
                    href={`mailto:${AGENT.email}?subject=Inquiry about MLS ${listing.mlsNumber}`}
                    className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    Email Agent
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-bold text-slate-900">Interested in This Property?</h3>
                <p className="mt-1 text-sm text-slate-500">Send a message and we'll get back to you quickly.</p>
                {formSubmitted ? (
                  <div className="mt-4 rounded-lg bg-emerald-50 p-4 text-center">
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                      <Info className="h-5 w-5 text-emerald-600" />
                    </div>
                    <p className="mt-2 font-semibold text-emerald-800">Message Sent!</p>
                    <p className="mt-1 text-sm text-emerald-600">We'll be in touch shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="mt-4 space-y-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email Address *"
                      className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                    />
                    <textarea
                      rows={3}
                      required
                      defaultValue={`Hi, I'm interested in the property at ${listing.address.street}, ${listing.address.city} (MLS® #${listing.mlsNumber}). Please provide more information.`}
                      className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                    />
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 transition-colors"
                    >
                      Send Message
                    </button>
                    <p className="text-[10px] text-slate-400">
                      By submitting, you agree to be contacted about this property by {AGENT.brokerageLegalName}.
                    </p>
                  </form>
                )}
              </div>

              {/* Mortgage Calculator */}
              <MortgageEstimate price={listing.listPrice} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MortgageEstimate({ price }: { price: number }) {
  const downPayment = price * 0.2;
  const principal = price - downPayment;
  const monthlyRate = 0.055 / 12;
  const numPayments = 25 * 12;
  const monthly = (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="font-bold text-slate-900">Estimated Monthly Payment</h3>
      <p className="mt-0.5 text-xs text-slate-400">Based on 20% down, 5.5% rate, 25yr amortization</p>
      <div className="mt-4 text-center">
        <p className="text-3xl font-bold text-emerald-600">{formatPrice(Math.round(monthly))}</p>
        <p className="text-sm text-slate-500">/month</p>
      </div>
      <div className="mt-4 space-y-2 text-sm">
        <div className="flex justify-between text-slate-500">
          <span>Purchase Price</span>
          <span className="font-medium text-slate-700">{formatPrice(price)}</span>
        </div>
        <div className="flex justify-between text-slate-500">
          <span>Down Payment (20%)</span>
          <span className="font-medium text-slate-700">{formatPrice(downPayment)}</span>
        </div>
        <div className="flex justify-between text-slate-500">
          <span>Mortgage Amount</span>
          <span className="font-medium text-slate-700">{formatPrice(principal)}</span>
        </div>
      </div>
      <p className="mt-3 text-[10px] text-slate-400">
        This is an estimate only. Actual payments may vary. Contact a mortgage professional for accurate calculations.
      </p>
    </div>
  );
}
