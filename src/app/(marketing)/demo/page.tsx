import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Demo",
  description: "See GolfOps in action. Book a personalized demo with our team to learn how GolfOps can power your next golf event.",
};

export default function DemoPage() {
  return (
    <div className="pt-[72px]">
      <section className="section-padding bg-white">
        <div className="container-marketing max-w-3xl text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-emerald/10 text-emerald mb-6">
            <Calendar className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] font-heading leading-tight">
            See GolfOps in Action
          </h1>
          <p className="mt-6 text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-xl mx-auto">
            Book a personalized demo with our team. We&apos;ll walk you through
            the platform and answer any questions about your specific event needs.
          </p>

          <div className="mt-12 p-8 bg-[var(--color-bg-lighter)] rounded-[var(--radius-md)] border border-gray/10">
            <p className="text-base text-[var(--color-text-secondary)] mb-6">
              Demo scheduling is coming soon. In the meantime, reach out
              directly and we&apos;ll set up a call.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-forest hover:bg-forest-light rounded-[var(--radius-sm)] transition-all shadow-card"
              >
                Contact Us
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-[var(--color-text-primary)] border border-gray/20 hover:bg-light rounded-[var(--radius-sm)] transition-all"
              >
                Or Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
