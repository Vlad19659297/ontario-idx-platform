import { AGENT } from '@/data/agent';

export function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
      <p className="mt-2 text-sm text-slate-500">
        Last updated: {new Date().toLocaleDateString('en-CA')}
      </p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-slate-600">
        <section>
          <h2 className="text-lg font-bold text-slate-900">1. Introduction</h2>
          <p className="mt-2">
            {AGENT.brokerageLegalName} ("we", "us", or "our") is committed to protecting your personal
            information and your right to privacy. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you visit our website and use our real estate services.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900">2. Information We Collect</h2>
          <p className="mt-2">We may collect information that you voluntarily provide to us, including:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Name, email address, and phone number when you submit a contact form</li>
            <li>Property preferences and search criteria</li>
            <li>Communications you send to us</li>
            <li>Information provided during the course of a real estate transaction</li>
          </ul>
          <p className="mt-2">We may automatically collect certain information, including:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Browser type and version</li>
            <li>IP address and general location data</li>
            <li>Pages visited and time spent on our website</li>
            <li>Referring website or source</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900">3. How We Use Your Information</h2>
          <p className="mt-2">We use personal information for purposes including:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Responding to your inquiries and providing real estate services</li>
            <li>Sending you property listings matching your criteria</li>
            <li>Facilitating real estate transactions</li>
            <li>Improving our website and services</li>
            <li>Complying with legal obligations (including RECO and TRREB requirements)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900">4. MLS® Data</h2>
          <p className="mt-2">
            Property listing data displayed on this website is provided by the Toronto Regional Real Estate
            Board (TRREB) through its IDX data feed. This data is intended solely for consumers' personal,
            non-commercial use and may not be used for any purpose other than to identify prospective properties
            consumers may be interested in purchasing. We do not sell, export, or redistribute MLS® data.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900">5. Information Sharing</h2>
          <p className="mt-2">
            We do not sell your personal information. We may share your information with:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Service providers who assist in operating our website and business</li>
            <li>Legal and regulatory authorities when required by law</li>
            <li>TRREB and RECO for compliance and regulatory purposes</li>
            <li>Other parties involved in a real estate transaction with your consent</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900">6. Data Retention</h2>
          <p className="mt-2">
            We retain personal information only for as long as necessary to fulfill the purposes for which
            it was collected, or as required by applicable laws and regulations. Real estate transaction
            records are retained as required by RECO.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900">7. Your Rights</h2>
          <p className="mt-2">
            Under applicable Canadian privacy laws, you have the right to:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Access your personal information held by us</li>
            <li>Request correction of inaccurate information</li>
            <li>Withdraw consent for future communications</li>
            <li>Request deletion of your personal information (subject to legal requirements)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900">8. Contact</h2>
          <p className="mt-2">
            For questions about this Privacy Policy or to exercise your rights, please contact:
          </p>
          <div className="mt-2 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="font-semibold text-slate-900">{AGENT.name}</p>
            <p>{AGENT.brokerageLegalName}</p>
            <p>Email: {AGENT.email}</p>
            <p>Phone: {AGENT.phone}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
