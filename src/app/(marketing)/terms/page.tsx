import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "GolfOps terms of service — the rules and guidelines for using our platform.",
};

export default function TermsPage() {
  return (
    <div className="pt-[72px]">
      <section className="section-padding bg-[var(--color-bg-1)]">
        <div className="container-marketing max-w-3xl rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-8 md:p-12">
          <h1 className="text-4xl font-extrabold text-[var(--color-text-primary)] font-heading mb-2">
            Terms of Service
          </h1>
          <p className="text-sm text-[var(--color-text-muted)] mb-12">Last updated: February 2026</p>

          <div className="space-y-8 text-base text-[var(--color-text-secondary)] leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] font-heading mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing or using GolfOps (&ldquo;the Platform&rdquo;), you agree to be bound by these
                Terms of Service. If you do not agree, please do not use the Platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] font-heading mb-3">2. Account Registration</h2>
              <p>
                To use certain features, you must create an account with accurate and complete
                information. You are responsible for maintaining the security of your account
                credentials and for all activity under your account.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] font-heading mb-3">3. Use of the Platform</h2>
              <p>You agree to use GolfOps only for lawful purposes related to golf event management. You may not:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Use the Platform for any illegal or unauthorized purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the Platform&apos;s operation</li>
                <li>Upload malicious code or content</li>
                <li>Resell or redistribute the Platform without authorization</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] font-heading mb-3">4. Payments & Fees</h2>
              <p>
                Event organizers are responsible for applicable subscription fees and per-player fees
                as outlined on our pricing page. Payment processing fees from third-party providers
                (Stripe, PayStack, etc.) are separate and subject to each provider&apos;s terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] font-heading mb-3">5. Intellectual Property</h2>
              <p>
                The GolfOps platform, including its design, code, and content, is owned by GolfOps
                and protected by intellectual property laws. You retain ownership of your event
                data, content, and branding uploaded to the Platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] font-heading mb-3">6. Limitation of Liability</h2>
              <p>
                GolfOps is provided &ldquo;as is&rdquo; without warranty of any kind. We are not liable for
                any indirect, incidental, or consequential damages arising from your use of the
                Platform. Our total liability is limited to the fees you have paid in the
                preceding 12 months.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] font-heading mb-3">7. Termination</h2>
              <p>
                Either party may terminate at any time. Upon termination, your right to use the
                Platform ceases. We will provide a reasonable period to export your data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] font-heading mb-3">8. Contact</h2>
              <p>
                For questions about these terms, contact us at{" "}
                <a href="mailto:legal@golfops.io" className="text-lime font-semibold hover:underline">
                  legal@golfops.io
                </a>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
