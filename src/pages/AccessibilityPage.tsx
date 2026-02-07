import { AGENT } from '@/data/agent';

export function AccessibilityPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">Accessibility Statement</h1>
      <p className="mt-2 text-sm text-slate-500">
        Last updated: {new Date().toLocaleDateString('en-CA')}
      </p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-slate-600">
        <section>
          <h2 className="text-lg font-bold text-slate-900">Our Commitment</h2>
          <p className="mt-2">
            {AGENT.brokerageLegalName} is committed to ensuring digital accessibility for people with
            disabilities. We are continually improving the user experience for everyone and applying the
            relevant accessibility standards.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900">Standards</h2>
          <p className="mt-2">
            We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA and comply
            with the Accessibility for Ontarians with Disabilities Act (AODA) and the Ontario Human Rights Code.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900">Measures We Take</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Semantic HTML structure for screen reader compatibility</li>
            <li>Sufficient colour contrast ratios</li>
            <li>Keyboard-navigable interface</li>
            <li>Alt text for images</li>
            <li>Responsive design for various devices and screen sizes</li>
            <li>Clear and consistent navigation</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900">Alternative Formats</h2>
          <p className="mt-2">
            If you need information about our listings or services in an alternative format, please contact
            us and we will make every effort to accommodate your needs.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900">Feedback</h2>
          <p className="mt-2">
            We welcome your feedback on the accessibility of this website. If you encounter any barriers
            or have suggestions for improvement, please contact us:
          </p>
          <div className="mt-2 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="font-semibold text-slate-900">{AGENT.brokerageLegalName}</p>
            <p>Email: {AGENT.email}</p>
            <p>Phone: {AGENT.phone}</p>
          </div>
          <p className="mt-2">
            We aim to respond to accessibility feedback within 2 business days.
          </p>
        </section>
      </div>
    </div>
  );
}
