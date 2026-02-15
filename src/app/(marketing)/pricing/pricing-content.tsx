"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight, HelpCircle } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const tiers = [
  {
    name: "Starter",
    price: "$99",
    period: "",
    description: "Best for smaller tournaments starting to modernize operations.",
    features: [
      "1 event",
      "Up to 24 players",
      "Event website",
      "Registration page",
      "Basic payments (Stripe)",
      "Email support",
    ],
    cta: "Book a Demo",
    href: "/demo",
    popular: false,
  },
  {
    name: "Pro",
    price: "$249",
    period: "/event",
    description: "Everything you need for professional tournament management.",
    features: [
      "Unlimited events",
      "Up to 144 players",
      "All Starter features",
      "Smart Pairings (AI)",
      "AI email drafts",
      "Sponsor management",
      "Add-ons & promo codes",
      "Priority support",
    ],
    cta: "Book a Demo",
    href: "/demo",
    popular: true,
  },
  {
    name: "Premium",
    price: "$499",
    period: "/event",
    description: "Advanced features for high-profile events and organizations.",
    features: [
      "Unlimited events",
      "Unlimited players",
      "All Pro features",
      "Live scoring & leaderboards",
      "TV display mode",
      "Custom domain",
      "Advanced analytics",
      "SMS notifications",
      "Phone support",
    ],
    cta: "Book a Demo",
    href: "/demo",
    popular: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large organizations and associations.",
    features: [
      "Unlimited everything",
      "All Premium features",
      "White-label branding",
      "API access",
      "Dedicated account manager",
      "Custom payment providers",
      "SLA guarantee",
      "Custom onboarding",
    ],
    cta: "Contact Sales",
    href: "/contact",
    popular: false,
  },
];

const faqs = [
  {
    question: "What payment methods do you support?",
    answer:
      "We support Stripe (cards globally), PayStack (Nigeria, Ghana, South Africa, Kenya), Flutterwave (30+ African countries), MTN MoMo (Uganda, Rwanda, Ghana, Cameroon), and M-Pesa (Kenya, Tanzania). You can enable multiple providers for a single event.",
  },
  {
    question: "How do trials and onboarding work?",
    answer:
      "GolfOps is sold as a B2B package. We offer guided demos plus pilot rollouts based on your event volume, sponsor workflows, and support needs.",
  },
  {
    question: "What happens after my event?",
    answer:
      "Your event data, reports, and analytics remain accessible in your dashboard indefinitely. You can export all data at any time. There are no storage fees for past events.",
  },
  {
    question: "Do you offer nonprofit discounts?",
    answer:
      "Yes! Registered nonprofits and charitable organizations receive 25% off Pro and Premium plans. Contact our team with your organization details to activate the discount.",
  },
  {
    question: "Can I use my own payment provider?",
    answer:
      "Enterprise customers can integrate custom payment providers. Pro and Premium plans support all our standard providers. Contact sales for custom payment integration needs.",
  },
  {
    question: "How does the per-player fee work?",
    answer:
      "A $3 per-player fee applies to paid plans. This covers platform infrastructure, scoring, and support. You can optionally pass this fee to registrants so it shows as a transparent line item during checkout.",
  },
];

export function PricingContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="section-padding bg-[var(--color-bg-1)]">
        <div className="container-marketing text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold text-emerald uppercase tracking-wider mb-3">
              Pricing
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--color-text-light)] font-heading leading-tight">
              Simple Pricing.
              <br />
              <span className="text-gradient">Powerful Events.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-[var(--color-text-light-secondary)] max-w-2xl mx-auto">
              Talk to sales for tailored pricing. No hidden fees.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="container-marketing -mt-4 pb-20">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              tabIndex={0}
              className={cn(
                "relative flex h-full flex-col rounded-[var(--radius-md)] border p-8 transition-all",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-1)]",
                tier.popular
                  ? "border-emerald bg-[var(--color-surface-2)] shadow-elevated lg:scale-[1.02]"
                  : "border-[var(--color-border-subtle)] bg-[var(--color-surface)] hover:shadow-card"
              )}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="gold" size="lg" className="uppercase tracking-wider">
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-[var(--color-text-primary)] font-heading">
                  {tier.name}
                </h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-[var(--color-text-primary)] font-heading">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-base text-[var(--color-text-secondary)]">{tier.period}</span>
                  )}
                </div>
                <p className="mt-3 text-sm text-[var(--color-text-secondary)]">{tier.description}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-emerald flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[var(--color-text-secondary)]">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={tier.href}
                className={cn(
                  "block w-full text-center py-3 px-6 rounded-[var(--radius-sm)] text-sm font-semibold transition-all",
                  tier.popular
                    ? "bg-gradient-primary text-white hover:shadow-glow-lime-hover shadow-glow-lime"
                    : "border border-[var(--color-border-subtle)] bg-[var(--color-surface-2)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-2)]"
                )}
              >
                {tier.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Per-player note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-8 space-y-1"
        >
          <p className="text-sm text-[var(--color-text-secondary)]">
            Per-player fee: <strong>$3/player</strong> (organizer can pass to registrant)
          </p>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Payment processing: Standard provider rates apply
          </p>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-[var(--color-bg-2)]">
        <div className="container-marketing max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-light)] font-heading">
              Frequently asked questions
            </h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="bg-[var(--color-surface)] rounded-[var(--radius-md)] border border-[var(--color-border-subtle)] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex items-center justify-between w-full p-6 text-left"
                  aria-expanded={openFaq === i}
                >
                  <span className="text-base font-semibold text-[var(--color-text-primary)] font-heading pr-4">
                    {faq.question}
                  </span>
                  <HelpCircle
                    className={cn(
                      "w-5 h-5 text-[var(--color-text-secondary)] flex-shrink-0 transition-transform",
                      openFaq === i && "rotate-180 text-emerald"
                    )}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 -mt-2">
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-gradient-dark text-white">
        <div className="container-marketing text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Roll out with confidence.
            </h2>
            <p className="text-lg text-[var(--color-text-light-secondary)] max-w-xl mx-auto mb-8">
              Get a tailored package, onboarding support, and a plan built for your tournament operations.
            </p>
            <Link
              href="/demo"
              className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-primary hover:shadow-glow-lime-hover rounded-[var(--radius-sm)] transition-all shadow-glow-lime"
            >
              Book a Demo
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
