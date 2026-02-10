import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "GolfOps privacy policy — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-[72px]">
      <section className="section-padding bg-white">
        <div className="container-marketing max-w-3xl">
          <h1 className="text-4xl font-extrabold text-charcoal font-heading mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray mb-12">Last updated: February 2026</p>

          <div className="space-y-8 text-base text-slate leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-charcoal font-heading mb-3">1. Information We Collect</h2>
              <p>
                We collect information you provide directly, including your name, email address,
                organization details, and event data when you create an account or register for events.
                We also collect usage data such as pages visited, features used, and device information
                to improve our platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-charcoal font-heading mb-3">2. How We Use Your Information</h2>
              <p>We use collected information to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Provide, operate, and maintain the GolfOps platform</li>
                <li>Process registrations and payments for your events</li>
                <li>Send transactional emails (confirmations, receipts, reminders)</li>
                <li>Improve our services and develop new features</li>
                <li>Communicate platform updates and new features</li>
                <li>Provide customer support</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-charcoal font-heading mb-3">3. Payment Data</h2>
              <p>
                GolfOps does not store credit card numbers or sensitive payment data directly.
                All payment processing is handled by our PCI-compliant payment partners
                (Stripe, PayStack, Flutterwave, MTN MoMo, M-Pesa). We only store transaction
                references and metadata necessary for your event management.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-charcoal font-heading mb-3">4. Data Sharing</h2>
              <p>
                We do not sell your personal data. We share data only with service providers
                necessary to operate the platform (hosting, email delivery, payment processing)
                and as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-charcoal font-heading mb-3">5. Data Retention</h2>
              <p>
                We retain your account and event data for as long as your account is active.
                You may request deletion of your data at any time by contacting us at
                privacy@golfops.io.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-charcoal font-heading mb-3">6. Security</h2>
              <p>
                We implement industry-standard security measures including encryption in transit
                (TLS), encryption at rest, access controls, and regular security audits to
                protect your data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-charcoal font-heading mb-3">7. Contact</h2>
              <p>
                For privacy-related questions or data requests, contact us at{" "}
                <a href="mailto:privacy@golfops.io" className="text-forest font-semibold hover:underline">
                  privacy@golfops.io
                </a>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
