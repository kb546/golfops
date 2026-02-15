"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Palette,
  Award,
  Brain,
  Tv,
  Mail,
  BarChart3,
  CheckCircle,
  XCircle,
} from "lucide-react";

const comparison = [
  { old: "Finalized pairings at midnight", new: "AI builds pairings in seconds" },
  { old: "Sponsors buried in a PDF", new: "Dynamic sponsor showcase page" },
  { old: "Manual score tallying at the 19th hole", new: "Real-time live leaderboard" },
  { old: "Registration data in 5 spreadsheets", new: "One unified dashboard" },
  { old: "No professional event presence", new: "Stunning branded event website" },
];

const features = [
  { icon: Palette, title: "Custom-Branded Event Websites", description: "Your logo, your colors, your domain. Create a professional event presence in minutes." },
  { icon: Award, title: "Professional Sponsor Showcase", description: "Tiered sponsor packages with auto-placed logos, descriptions, and click-through links." },
  { icon: Brain, title: "Smart Client-Focused Pairings", description: "Pair by handicap, client relationship, department, or custom preferences with AI." },
  { icon: Tv, title: "Live Leaderboards on TV Screens", description: "Full-screen display mode optimized for clubhouse TVs and conference projectors." },
  { icon: Mail, title: "Automated Corporate Communication", description: "AI-drafted invitations, reminders, and follow-ups with professional polish." },
  { icon: BarChart3, title: "Clean Post-Event Reporting", description: "Beautiful reports with registration stats, scoring data, and sponsor ROI metrics." },
];

export function CorporateContent() {
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
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-info/10 text-info rounded-full text-xs font-semibold mb-6">
                <Briefcase className="w-3.5 h-3.5" /> For Corporate Events
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] font-heading leading-tight">
                Professional Golf Events{" "}
                <span className="text-gradient">Without the Headache</span>
              </h1>
              <p className="mt-6 text-lg text-[var(--color-text-secondary)] leading-relaxed">
                From branded event pages to instant leaderboards — impress
                clients and partners, not spreadsheets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  href="/demo"
                  className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-forest hover:bg-forest-light rounded-[var(--radius-sm)] transition-all shadow-card"
                >
                  Plan Your Corporate Event
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-[var(--color-text-primary)] border border-gray/20 hover:bg-light rounded-[var(--radius-sm)] transition-all"
                >
                  Book a Demo
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="rounded-[var(--radius-lg)] overflow-hidden shadow-elevated">
                <Image
                  src="/images/use-cases/clubhouse-sunset.jpg"
                  alt="Packed clubhouse grandstand at sunset during a professional golf event"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section-padding bg-[var(--color-bg-lighter)]">
        <div className="container-marketing max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] font-heading">
              The Old Way vs. The GolfOps Way
            </h2>
          </motion.div>
          <div className="space-y-3">
            {comparison.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="flex items-center gap-3 p-4 bg-white rounded-[var(--radius-sm)] border border-error/10">
                  <XCircle className="w-5 h-5 text-error/50 flex-shrink-0" />
                  <span className="text-sm text-[var(--color-text-secondary)] line-through">{item.old}</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-[var(--radius-sm)] border border-emerald/20">
                  <CheckCircle className="w-5 h-5 text-emerald flex-shrink-0" />
                  <span className="text-sm text-[var(--color-text-primary)] font-medium">{item.new}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="container-marketing">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, i) => {
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
                  <h3 className="text-base font-bold text-[var(--color-text-primary)] font-heading mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-dark text-white">
        <div className="container-marketing text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Impress your clients. Not your spreadsheet.
            </h2>
            <p className="text-lg text-[var(--color-text-light-secondary)] max-w-xl mx-auto mb-8">
              Join corporate event planners who trust GolfOps to deliver
              flawless golf days.
            </p>
            <Link
              href="/demo"
              className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-primary hover:shadow-glow-lime-hover rounded-[var(--radius-sm)] transition-all shadow-glow-lime"
            >
              Get Started
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
