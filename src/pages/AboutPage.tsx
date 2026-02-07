import { Link } from 'react-router-dom';
import {
  Award, MapPin, Phone, Mail, Shield, Star, CheckCircle, Users,
  TrendingUp, Home, Building2, ArrowRight, Calendar
} from 'lucide-react';
import { AGENT, RECO_INFO_LINK } from '@/data/agent';
import { MLSDisclaimer } from '@/components/MLSDisclaimer';

export function AboutPage() {
  const stats = [
    { label: 'Years Experience', value: '12+', icon: Calendar },
    { label: 'Happy Clients', value: '500+', icon: Users },
    { label: 'Communities Served', value: `${AGENT.serviceAreas.length}+`, icon: MapPin },
    { label: 'Properties Sold', value: '800+', icon: Home },
  ];

  const milestones = [
    { year: '2012', title: 'Licensed REALTOR®', desc: 'Began career in residential real estate with a focus on the GTA market.' },
    { year: '2015', title: 'Top Producer Award', desc: 'Recognized as a top-producing agent in the brokerage for consistent sales performance.' },
    { year: '2018', title: 'Expanded to York Region', desc: 'Grew service areas to include Markham, Vaughan, and Richmond Hill.' },
    { year: '2020', title: 'Founded HomeKey Realty', desc: 'Established HomeKey Realty Inc. to provide boutique, client-focused real estate services.' },
    { year: '2023', title: 'Chairman\'s Club', desc: 'Achieved Chairman\'s Club status for exceptional client satisfaction and sales volume.' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-300">
                <Award className="h-4 w-4" />
                Licensed Ontario REALTOR®
              </div>
              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Meet {AGENT.name}
              </h1>
              <p className="mt-2 text-lg text-emerald-200">{AGENT.title} · {AGENT.brokerageLegalName}</p>
              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                {AGENT.bio}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-lg hover:bg-emerald-700 transition-all"
                >
                  <Phone className="h-4 w-4" />
                  Get In Touch
                </Link>
                <Link
                  to="/my-listings"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-all"
                >
                  <Building2 className="h-4 w-4" />
                  View My Listings
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="flex h-64 w-64 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 text-7xl font-bold text-white shadow-2xl">
                  {AGENT.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div className="absolute -bottom-4 -right-4 rounded-2xl bg-white p-4 shadow-xl">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-emerald-600" />
                    <div>
                      <p className="text-xs font-semibold text-slate-900">RECO Verified</p>
                      <p className="text-[10px] text-slate-500">{AGENT.registrationNumber}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="-mt-8 relative z-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-lg">
                <stat.icon className="mx-auto h-6 w-6 text-emerald-600" />
                <p className="mt-2 text-2xl font-bold text-slate-900">{stat.value}</p>
                <p className="mt-0.5 text-xs text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Specializations</h2>
            <p className="mt-2 text-slate-500">Focused expertise to serve you best</p>
            <div className="mt-6 space-y-3">
              {AGENT.specializations.map((spec) => (
                <div key={spec} className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50 p-4">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-emerald-600" />
                  <span className="font-medium text-slate-700">{spec}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Service Areas</h2>
            <p className="mt-2 text-slate-500">Communities I serve across the GTA</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {AGENT.serviceAreas.map((area) => (
                <Link
                  key={area}
                  to={`/listings?city=${encodeURIComponent(area)}`}
                  className="flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50 p-4 transition-all hover:border-emerald-200 hover:bg-emerald-50"
                >
                  <MapPin className="h-4 w-4 flex-shrink-0 text-emerald-600" />
                  <span className="text-sm font-medium text-slate-700">{area}</span>
                  <ArrowRight className="ml-auto h-3.5 w-3.5 text-slate-400" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Career Highlights</h2>
            <p className="mt-2 text-slate-500">A track record of success</p>
          </div>
          <div className="mt-10 space-y-8">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                    {m.year.slice(2)}
                  </div>
                  {i < milestones.length - 1 && <div className="mt-2 w-0.5 flex-1 bg-slate-200" />}
                </div>
                <div className="pb-8">
                  <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">{m.year}</p>
                  <h3 className="mt-1 text-lg font-bold text-slate-900">{m.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Why Work With Me</h2>
          <p className="mt-2 text-slate-500">The HomeKey difference</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Star,
              title: 'Personalized Service',
              desc: 'Every client receives one-on-one attention. No hand-offs to assistants — you work directly with me throughout the entire process.',
            },
            {
              icon: TrendingUp,
              title: 'Market Intelligence',
              desc: 'Deep knowledge of GTA micro-markets. I analyze neighbourhood trends to ensure you make the best investment decision.',
            },
            {
              icon: Shield,
              title: 'Full Compliance',
              desc: 'RECO-regulated, TRREB member, and committed to the highest ethical standards in every transaction.',
            },
            {
              icon: Users,
              title: 'Strong Network',
              desc: 'Connections with mortgage brokers, home inspectors, lawyers, and contractors to support your buying journey.',
            },
            {
              icon: Building2,
              title: 'Tech-Forward',
              desc: 'Professional photography, virtual tours, targeted marketing, and a modern digital experience for every listing.',
            },
            {
              icon: Award,
              title: 'Proven Results',
              desc: 'Consistent track record of selling homes at competitive prices with minimal days on market.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100">
                <item.icon className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RECO & Licensing */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-100">
              <Shield className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Licensing & Registration</h3>
              <p className="mt-2 text-sm text-slate-600">
                {AGENT.name} is a licensed {AGENT.title} registered with the Real Estate Council of Ontario (RECO)
                and a member of the Toronto Regional Real Estate Board (TRREB). Registration: {AGENT.registrationNumber}.
              </p>
              <p className="mt-2 text-sm text-slate-600">
                <strong>Brokerage:</strong> {AGENT.brokerageLegalName}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={RECO_INFO_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  <Shield className="h-4 w-4" />
                  Verify on RECO
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MLS Disclaimer */}
      <section className="mx-auto max-w-7xl px-4 pb-8">
        <MLSDisclaimer />
      </section>
    </div>
  );
}
