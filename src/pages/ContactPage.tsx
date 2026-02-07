import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Shield, Send, CheckCircle, MessageSquare } from 'lucide-react';
import { AGENT } from '@/data/agent';

export function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [inquiryType, setInquiryType] = useState('buying');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:py-20">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Let's Find Your Perfect Home
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Whether you're buying, selling, or just exploring the market, I'm here to help.
            Reach out and let's start the conversation.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Agent Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-xl font-bold text-white">
                  {AGENT.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">{AGENT.name}</h2>
                  <p className="text-sm text-slate-500">{AGENT.title}</p>
                  <p className="text-xs text-slate-400">{AGENT.brokerageLegalName}</p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <a
                  href={`tel:${AGENT.phone.replace(/[^\d+]/g, '')}`}
                  className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4 transition-all hover:border-emerald-200 hover:bg-emerald-50"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100">
                    <Phone className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Phone</p>
                    <p className="font-semibold text-slate-900">{AGENT.phone}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${AGENT.email}`}
                  className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4 transition-all hover:border-emerald-200 hover:bg-emerald-50"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Email</p>
                    <p className="font-semibold text-slate-900">{AGENT.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100">
                    <MapPin className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Service Area</p>
                    <p className="text-sm font-medium text-slate-700">Greater Toronto Area, Ontario</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                    <Clock className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Availability</p>
                    <p className="text-sm font-medium text-slate-700">Mon–Sat: 9AM – 8PM</p>
                    <p className="text-xs text-slate-500">Sun: By appointment</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 p-3">
                <Shield className="h-4 w-4 flex-shrink-0 text-blue-600" />
                <p className="text-xs text-blue-700">
                  Licensed & regulated by RECO · {AGENT.registrationNumber}
                </p>
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
              <div className="flex items-start gap-3">
                <MessageSquare className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                <div>
                  <h3 className="font-bold text-emerald-900">Quick Response Promise</h3>
                  <p className="mt-1 text-sm text-emerald-700">
                    I respond to all inquiries within 2 hours during business hours.
                    For urgent matters, please call directly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">Send a Message</h2>
              <p className="mt-1 text-sm text-slate-500">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>

              {formSubmitted ? (
                <div className="mt-8 rounded-2xl bg-emerald-50 p-8 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                    <CheckCircle className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-emerald-900">Thank You!</h3>
                  <p className="mt-2 text-emerald-700">
                    Your message has been received. I'll get back to you within 2 hours during business hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 rounded-lg bg-emerald-600 px-6 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  {/* Inquiry Type */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">I'm interested in:</label>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                      {[
                        { value: 'buying', label: 'Buying' },
                        { value: 'selling', label: 'Selling' },
                        { value: 'investing', label: 'Investing' },
                        { value: 'general', label: 'General' },
                      ].map((type) => (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => setInquiryType(type.value)}
                          className={`rounded-lg border px-3 py-2 text-sm font-medium transition-all ${
                            inquiryType === type.value
                              ? 'border-emerald-400 bg-emerald-50 text-emerald-700 ring-1 ring-emerald-400'
                              : 'border-slate-200 text-slate-600 hover:border-slate-300'
                          }`}
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John"
                        className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm transition-colors focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Smith"
                        className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm transition-colors focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm transition-colors focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-semibold text-slate-700">Phone</label>
                      <input
                        type="tel"
                        placeholder="(416) 555-0100"
                        className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm transition-colors focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                      />
                    </div>
                  </div>

                  {(inquiryType === 'buying' || inquiryType === 'investing') && (
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                          Preferred Area
                        </label>
                        <select className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition-colors focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400">
                          <option value="">Select a city...</option>
                          {AGENT.serviceAreas.map((area) => (
                            <option key={area} value={area}>{area}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                          Budget Range
                        </label>
                        <select className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition-colors focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400">
                          <option value="">Select a range...</option>
                          <option value="under500">Under $500,000</option>
                          <option value="500-750">$500,000 – $750,000</option>
                          <option value="750-1m">$750,000 – $1,000,000</option>
                          <option value="1m-1.5m">$1,000,000 – $1,500,000</option>
                          <option value="1.5m-2m">$1,500,000 – $2,000,000</option>
                          <option value="over2m">$2,000,000+</option>
                        </select>
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Tell me about what you're looking for..."
                      className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm transition-colors focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                    />
                  </div>

                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      required
                      id="consent"
                      className="mt-1 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-400"
                    />
                    <label htmlFor="consent" className="text-xs text-slate-500">
                      I consent to being contacted by {AGENT.name} at {AGENT.brokerageLegalName} regarding
                      real estate services. I understand my information will be handled in accordance with the
                      Privacy Policy.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-200 transition-all hover:bg-emerald-700 hover:shadow-xl sm:w-auto"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </button>

                  <p className="text-[10px] text-slate-400">
                    {AGENT.brokerageLegalName} · TRREB Member · Licensed by RECO
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
