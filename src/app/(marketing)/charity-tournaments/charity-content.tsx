"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Heart,
  DollarSign,
  BarChart3,
  Mail,
  Receipt,
  Award,
  FileSpreadsheet,
  CreditCard,
  Eye,
  Send,
  Layers,
} from "lucide-react";

const painPoints = [
  { icon: FileSpreadsheet, text: "Tracking donations in spreadsheets" },
  { icon: CreditCard, text: "Chasing sponsor payments for weeks" },
  { icon: Eye, text: "No visibility into total raised until the event is over" },
  { icon: Send, text: "Sending thank-you emails one by one" },
  { icon: Layers, text: "Juggling 5+ tools for one event" },
];

const solutions = [
  { icon: DollarSign, title: "Built-in Donation Collection", description: "Accept donations during registration and as standalone — card, bank transfer, M-Pesa, or mobile money." },
  { icon: Award, title: "Tiered Sponsor Packages", description: "Create Gold, Silver, Bronze packages with online checkout. Auto-place logos on event pages." },
  { icon: BarChart3, title: "Real-Time Fundraising Dashboard", description: "See total raised, donor breakdown, and goal progress live — share with your board in real-time." },
  { icon: Mail, title: "AI-Drafted Thank-You Emails", description: "Generate personalized thank-you notes and tax receipts automatically after every donation." },
  { icon: Receipt, title: "Tax Receipt Generation", description: "Auto-generate tax-deductible receipts for every donor and sponsor with your organization details." },
  { icon: Heart, title: "Everything in One Place", description: "Registration, payments, pairings, scoring, sponsors, communication — finally, one dashboard." },
];

export function CharityContent() {
  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="section-padding bg-white">
        <div className="container-marketing">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-error/10 text-error rounded-full text-xs font-semibold mb-6">
                <Heart className="w-3.5 h-3.5" /> For Charity Events
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-charcoal font-heading leading-tight">
                Raise More. Stress Less.{" "}
                <span className="text-gradient">Focus on Your Cause.</span>
              </h1>
              <p className="mt-6 text-lg text-slate leading-relaxed">
                The all-in-one platform for charity golf events — registration,
                donations, sponsors, and scoring in one beautiful dashboard.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  href="/register"
                  className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-forest hover:bg-forest-light rounded-[var(--radius-sm)] transition-all shadow-card"
                >
                  Start Your Charity Event
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-charcoal border border-gray/20 hover:bg-light rounded-[var(--radius-sm)] transition-all"
                >
                  Book a Demo
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-[var(--radius-lg)] overflow-hidden shadow-elevated">
                <Image
                  src="/images/use-cases/trophy-putters.jpg"
                  alt="Golf trophy surrounded by putters on a putting green"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="section-padding bg-lighter">
        <div className="container-marketing">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal font-heading">
              Sound familiar?
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {painPoints.map((point, i) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex items-center gap-3 p-4 bg-white rounded-[var(--radius-md)] border border-gray/10"
                >
                  <Icon className="w-5 h-5 text-error/60 flex-shrink-0" />
                  <span className="text-sm text-slate">{point.text}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="section-padding bg-white">
        <div className="container-marketing">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal font-heading">
              With GolfOps, you get:
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="p-6 rounded-[var(--radius-md)] bg-lighter border border-gray/5 hover:shadow-card transition-all"
                >
                  <Icon className="w-8 h-8 text-emerald mb-4" />
                  <h3 className="text-base font-bold text-charcoal font-heading mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global payments callout */}
      <section className="section-padding bg-gradient-dark text-white">
        <div className="container-marketing text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Accept donations via card, bank transfer, M-Pesa, or mobile money
            </h2>
            <p className="text-lg text-gray mb-8">
              Reach donors wherever they are. GolfOps supports more payment
              methods than any other golf event platform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/register"
                className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-forest bg-white hover:bg-light rounded-[var(--radius-sm)] transition-all"
              >
                Get Started Free
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white border border-white/20 hover:bg-white/10 rounded-[var(--radius-sm)] transition-all"
              >
                See Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
