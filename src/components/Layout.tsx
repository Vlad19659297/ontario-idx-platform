import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Search, Phone, User, MapPin, Shield } from 'lucide-react';
import { AGENT } from '@/data/agent';
import { IDX_DISCLAIMER } from '@/data/agent';
import { cn } from '@/utils/cn';

export function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/listings', label: 'Search Listings', icon: Search },
    { to: '/my-listings', label: 'My Listings', icon: MapPin },
    { to: '/about', label: 'About', icon: User },
    { to: '/contact', label: 'Contact', icon: Phone },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      {/* Top Bar - Brokerage Info (RECO Compliance) */}
      <div className="bg-slate-900 text-xs text-slate-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5">
          <span className="font-medium">{AGENT.brokerageLegalName}</span>
          <div className="flex items-center gap-4">
            <a
              href="https://www.reco.on.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <Shield className="h-3 w-3" />
              RECO Licensed
            </a>
            <span className="hidden sm:inline">|</span>
            <a href={`tel:${AGENT.phone.replace(/[^\d+]/g, '')}`} className="hidden sm:inline hover:text-white transition-colors">
              {AGENT.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-600 to-teal-700 shadow-md">
              <Home className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="text-lg font-bold leading-tight text-slate-900">HomeKey</div>
              <div className="text-[10px] font-medium uppercase tracking-wider text-slate-400">Realty</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  location.pathname === link.to
                    ? 'bg-emerald-50 text-emerald-700'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-emerald-200 transition-all hover:bg-emerald-700 hover:shadow-lg"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 md:hidden"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="border-t border-slate-200 bg-white px-4 py-3 md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium',
                  location.pathname === link.to
                    ? 'bg-emerald-50 text-emerald-700'
                    : 'text-slate-600 hover:bg-slate-100'
                )}
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </Link>
            ))}
            <div className="mt-3 border-t border-slate-100 pt-3">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-lg bg-emerald-600 px-4 py-2.5 text-center text-sm font-semibold text-white"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300">
        {/* Main Footer */}
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid gap-8 md:grid-cols-4">
            {/* Brand */}
            <div className="md:col-span-1">
              <Link to="/" className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600">
                  <Home className="h-4 w-4 text-white" />
                </div>
                <span className="text-lg font-bold text-white">HomeKey Realty</span>
              </Link>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Helping families find their perfect home in the Greater Toronto Area since 2012.
              </p>
              <div className="mt-4 space-y-1 text-sm text-slate-400">
                <p className="font-semibold text-slate-300">{AGENT.name}</p>
                <p>{AGENT.title}</p>
                <p>{AGENT.brokerageLegalName}</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-3 font-semibold text-white">Quick Links</h4>
              <div className="space-y-2 text-sm">
                {navLinks.map((link) => (
                  <Link key={link.to} to={link.to} className="block text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Service Areas */}
            <div>
              <h4 className="mb-3 font-semibold text-white">Service Areas</h4>
              <div className="grid grid-cols-2 gap-1 text-sm">
                {AGENT.serviceAreas.map((area) => (
                  <Link
                    key={area}
                    to={`/listings?city=${encodeURIComponent(area)}`}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {area}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-3 font-semibold text-white">Contact</h4>
              <div className="space-y-2 text-sm text-slate-400">
                <a href={`tel:${AGENT.phone.replace(/[^\d+]/g, '')}`} className="block hover:text-white transition-colors">
                  {AGENT.phone}
                </a>
                <a href={`mailto:${AGENT.email}`} className="block hover:text-white transition-colors">
                  {AGENT.email}
                </a>
                <a
                  href="https://www.reco.on.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 rounded-md border border-slate-700 px-3 py-1.5 text-xs hover:border-slate-500 transition-colors"
                >
                  <Shield className="h-3 w-3" />
                  Verify with RECO
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* IDX Disclaimer & Legal (TRREB Compliance) */}
        <div className="border-t border-slate-800">
          <div className="mx-auto max-w-7xl px-4 py-6">
            <div className="rounded-lg bg-slate-800/50 p-4">
              <p className="text-[11px] leading-relaxed text-slate-500">
                <strong className="text-slate-400">IDX Disclaimer:</strong> {IDX_DISCLAIMER}
              </p>
              <p className="mt-2 text-[11px] leading-relaxed text-slate-500">
                The trademarks REALTOR®, REALTORS®, and the REALTOR® logo are controlled by The Canadian Real Estate
                Association (CREA) and identify real estate professionals who are members of CREA. The trademarks MLS®,
                Multiple Listing Service® and the associated logos are owned by CREA and identify the quality of services
                provided by real estate professionals who are members of CREA.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-slate-500 sm:flex-row">
            <p>© {new Date().getFullYear()} {AGENT.brokerageLegalName}. All rights reserved.</p>
            <div className="flex gap-4">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
              <Link to="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
