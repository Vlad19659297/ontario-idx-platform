import { Link } from 'react-router-dom';
import { Search, Star, TrendingUp, Users, ArrowRight, Home, Building2, MapPin, Phone, CheckCircle } from 'lucide-react';
import { SearchBar } from '@/components/SearchBar';
import { ListingCard } from '@/components/ListingCard';
import { MLSDisclaimer } from '@/components/MLSDisclaimer';
import { getFeaturedListings, getAgentListings, CITIES } from '@/data/listings';
import { AGENT } from '@/data/agent';

export function HomePage() {
  const featured = getFeaturedListings();
  const agentListings = getAgentListings();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:py-28 lg:py-36">
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-300 backdrop-blur-sm">
              <Star className="h-4 w-4" />
              Trusted Ontario REALTOR® — TRREB Member
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Find Your Dream Home
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                in the Greater Toronto Area
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
              Search active MLS® listings across Toronto, Mississauga, Brampton, Vaughan, Markham, and more.
              Expert guidance from {AGENT.name}, {AGENT.title}.
            </p>
            <div className="mt-8">
              <SearchBar />
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <Home className="h-4 w-4 text-emerald-400" />
                {featured.length + 8}+ Active Listings
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-emerald-400" />
                {AGENT.serviceAreas.length} Communities
              </span>
              <span className="flex items-center gap-1.5">
                <Building2 className="h-4 w-4 text-emerald-400" />
                TRREB IDX Data
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Featured Listings</h2>
            <p className="mt-1 text-slate-500">Handpicked properties in the Greater Toronto Area</p>
          </div>
          <Link
            to="/listings"
            className="hidden items-center gap-1 text-sm font-semibold text-emerald-600 hover:text-emerald-700 sm:flex"
          >
            View all listings
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.slice(0, 6).map((listing) => (
            <ListingCard key={listing.mlsNumber} listing={listing} />
          ))}
        </div>
        <div className="mt-6 text-center sm:hidden">
          <Link
            to="/listings"
            className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-600 hover:text-emerald-700"
          >
            View all listings
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Agent's Own Listings */}
      {agentListings.length > 0 && (
        <section className="border-y border-slate-200 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="mx-auto max-w-7xl px-4 py-16">
            <div className="flex items-end justify-between">
              <div>
                <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                  <Star className="h-3 w-3" />
                  Exclusive
                </div>
                <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{AGENT.name}'s Listings</h2>
                <p className="mt-1 text-slate-600">
                  Properties personally listed by {AGENT.name} at {AGENT.brokerageLegalName}
                </p>
              </div>
              <Link
                to="/my-listings"
                className="hidden items-center gap-1 text-sm font-semibold text-emerald-600 hover:text-emerald-700 sm:flex"
              >
                See all my listings
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {agentListings.slice(0, 3).map((listing) => (
                <ListingCard key={listing.mlsNumber} listing={listing} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Browse by City */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Browse by City</h2>
          <p className="mt-1 text-slate-500">Explore listings in communities across the GTA</p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {CITIES.slice(0, 10).map((city) => (
            <Link
              key={city.slug}
              to={`/listings?city=${encodeURIComponent(city.name)}`}
              className="group relative overflow-hidden rounded-xl shadow-sm transition-all hover:shadow-lg"
            >
              <div className="aspect-[4/3]">
                <img
                  src={city.image}
                  alt={`Real estate in ${city.name}, Ontario`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-lg font-bold text-white">{city.name}</h3>
                <p className="text-xs text-white/70">{city.count} active listings</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Why Work With Us</h2>
            <p className="mt-1 text-slate-500">Your trusted partner in Ontario real estate</p>
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Search,
                title: 'MLS® Access',
                desc: 'Search the latest active listings directly from TRREB\'s IDX feed, updated daily.',
              },
              {
                icon: Users,
                title: 'Local Expertise',
                desc: `Over 12 years serving ${AGENT.serviceAreas.length}+ communities across the Greater Toronto Area.`,
              },
              {
                icon: TrendingUp,
                title: 'Market Knowledge',
                desc: 'Data-driven insights to help you make informed decisions in today\'s market.',
              },
              {
                icon: CheckCircle,
                title: 'RECO Licensed',
                desc: 'Fully licensed and regulated by the Real Estate Council of Ontario.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-100 bg-slate-50 p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100">
                  <item.icon className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="mt-4 font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-700">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Find Your Perfect Home?</h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-emerald-100">
            Whether you're buying your first home or investing in your next property, {AGENT.name} is here to help.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-emerald-700 shadow-lg transition-all hover:bg-emerald-50 hover:shadow-xl"
            >
              <Phone className="h-4 w-4" />
              Contact {AGENT.name}
            </Link>
            <Link
              to="/listings"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-8 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/10"
            >
              <Search className="h-4 w-4" />
              Browse All Listings
            </Link>
          </div>
        </div>
      </section>

      {/* MLS Disclaimer */}
      <section className="mx-auto max-w-7xl px-4 py-8">
        <MLSDisclaimer />
      </section>
    </div>
  );
}
