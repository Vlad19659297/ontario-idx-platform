import { AGENT, IDX_DISCLAIMER, MLS_DISCLAIMER } from '@/data/agent';

export function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">Terms of Use</h1>
      <p className="mt-2 text-sm text-slate-500">
        Last updated: {new Date().toLocaleDateString('en-CA')}
      </p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-slate-600">
        <section>
          <h2 className="text-lg font-bold text-slate-900">1. Acceptance of Terms</h2>
          <p className="mt-2">
            By accessing and using this website operated by {AGENT.brokerageLegalName}, you agree to
            comply with and be bound by these Terms of Use. If you do not agree, please do not use this website.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900">2. MLS® Data Terms of Use</h2>
          <p className="mt-2">{IDX_DISCLAIMER}</p>
          <p className="mt-2">{MLS_DISCLAIMER}</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900">3. Permitted Use</h2>
          <p className="mt-2">The listing information on this website may be used only for:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Identifying properties you may be interested in purchasing</li>
            <li>Personal, non-commercial research purposes</li>
          </ul>
          <p className="mt-2">You may NOT:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Copy, redistribute, or retransmit any listing data</li>
            <li>Use automated tools to scrape, extract, or download listing data</li>
            <li>Use the data for any commercial purpose other than purchasing property</li>
            <li>Frame, mirror, or incorporate this website or its data into another website</li>
            <li>Attempt to access sold data, price history, or other restricted information</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900">4. Accuracy of Information</h2>
          <p className="mt-2">
            While we strive to ensure accuracy, listing information is provided by the Toronto Regional
            Real Estate Board (TRREB) and is deemed reliable but not guaranteed. Listing information may
            change without notice. {AGENT.brokerageLegalName} is not responsible for errors or omissions
            in listing data provided by TRREB or participating brokerages.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900">5. Intellectual Property</h2>
          <p className="mt-2">
            The trademarks REALTOR®, REALTORS®, and the REALTOR® logo are controlled by The Canadian
            Real Estate Association (CREA) and identify real estate professionals who are members of CREA.
            The trademarks MLS®, Multiple Listing Service® and the associated logos are owned by CREA
            and identify the quality of services provided by real estate professionals who are members of CREA.
          </p>
          <p className="mt-2">
            All other content on this website, including text, graphics, logos, and images, is the property
            of {AGENT.brokerageLegalName} and is protected by Canadian copyright laws.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900">6. No Professional Advice</h2>
          <p className="mt-2">
            Content on this website is for informational purposes only and does not constitute professional
            real estate, legal, financial, or tax advice. The mortgage calculator and any financial
            estimates provided are approximations only. Always consult qualified professionals before
            making any real estate decisions.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900">7. Limitation of Liability</h2>
          <p className="mt-2">
            To the maximum extent permitted by law, {AGENT.brokerageLegalName} shall not be liable for
            any indirect, incidental, special, or consequential damages arising from your use of this
            website or reliance on any information provided herein.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900">8. Governing Law</h2>
          <p className="mt-2">
            These Terms of Use are governed by and construed in accordance with the laws of the Province
            of Ontario and the federal laws of Canada applicable therein.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900">9. Contact</h2>
          <p className="mt-2">
            For questions about these Terms of Use, contact:
          </p>
          <div className="mt-2 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="font-semibold text-slate-900">{AGENT.brokerageLegalName}</p>
            <p>Email: {AGENT.email}</p>
            <p>Phone: {AGENT.phone}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
