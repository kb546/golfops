"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  Users,
  Trophy,
  Palette,
  Megaphone,
  BarChart3,
  Repeat,
} from "lucide-react";

const features = [
  { icon: CalendarDays, title: "Multi-Event Management", description: "Manage your full tournament calendar from one dashboard. Weekly medals, monthly competitions, annual championships." },
  { icon: Users, title: "Member Database & Handicaps", description: "Maintain your membership roster with integrated handicap tracking that updates after every round." },
  { icon: Repeat, title: "Recurring Event Templates", description: "Set up templates for weekly events and clone them in one click. Save hours of repetitive setup." },
  { icon: Trophy, title: "Season-Long Leaderboards", description: "Track cumulative standings across multiple events. Points-based or scoring-based season rankings." },
  { icon: Palette, title: "Club Branding on Every Page", description: "Your club's logo, colors, and identity on every event page, email, and leaderboard." },
  { icon: Megaphone, title: "Bulk Communication Tools", description: "Email your entire membership, specific groups, or individual players with one-click segmented messaging." },
];

export function ClubsContent() {
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
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald/10 text-emerald rounded-full text-xs font-semibold mb-6">
                <Building2 className="w-3.5 h-3.5" /> For Clubs & Associations
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-charcoal font-heading leading-tight">
                Your Club&apos;s Tournament Season,{" "}
                <span className="text-gradient">Simplified</span>
              </h1>
              <p className="mt-6 text-lg text-slate leading-relaxed">
                Run weekly competitions, member events, and inter-club
                tournaments — all from one platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  href="/register"
                  className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-forest hover:bg-forest-light rounded-[var(--radius-sm)] transition-all shadow-card"
                >
                  Get Started
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
            >
              <div className="rounded-[var(--radius-lg)] overflow-hidden shadow-elevated">
                <Image
                  src="/images/use-cases/golfers-on-course.jpg"
                  alt="Golfers with bags and carts on a tree-lined course"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-lighter">
        <div className="container-marketing">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal font-heading">
              Built for the way clubs actually operate
            </h2>
            <p className="mt-4 text-lg text-slate max-w-2xl mx-auto">
              From weekly medals to the annual championship, GolfOps handles
              your full competition calendar.
            </p>
          </motion.div>
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
                  className="p-6 bg-white rounded-[var(--radius-md)] border border-gray/5 hover:shadow-card transition-all"
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

      {/* Season management highlight */}
      <section className="section-padding bg-white">
        <div className="container-marketing">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <BarChart3 className="w-10 h-10 text-emerald mb-4" />
              <h2 className="text-3xl font-bold text-charcoal font-heading mb-4">
                Season-long standings, updated automatically
              </h2>
              <p className="text-base text-slate leading-relaxed mb-6">
                No more manual Excel updates after every competition. GolfOps
                automatically aggregates scores across events to maintain
                accurate season-long standings for every division and flight.
              </p>
              <ul className="space-y-3">
                {[
                  "Points-based or stroke-based season rankings",
                  "Automatic handicap adjustments after each round",
                  "Multiple divisions and flights",
                  "Embeddable leaderboard widget for your club website",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald mt-2 flex-shrink-0" />
                    <span className="text-sm text-slate">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="rounded-[var(--radius-lg)] overflow-hidden shadow-elevated">
                <Image
                  src="/images/hero/titleist-closeup.jpg"
                  alt="Titleist golf ball near the hole on a putting green"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
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
              Simplify your club&apos;s competition season
            </h2>
            <p className="text-lg text-gray max-w-xl mx-auto mb-8">
              From weekly medals to the annual championship. One platform.
            </p>
            <Link
              href="/register"
              className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-forest bg-white hover:bg-light rounded-[var(--radius-sm)] transition-all"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
