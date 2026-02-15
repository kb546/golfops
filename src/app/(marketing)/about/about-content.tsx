"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Globe, Lightbulb, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Organizer-First",
    description: "Every feature solves a real problem. We don't build fluff — we build tools that save you hours.",
  },
  {
    icon: Globe,
    title: "Global by Design",
    description: "Built for every market, not just one. Multi-currency, multi-language, multi-payment from day one.",
  },
  {
    icon: Lightbulb,
    title: "Beautifully Simple",
    description: "Powerful doesn't mean complicated. We obsess over making complex workflows feel effortless.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "We build what organizers actually need. Every feature request gets read, considered, and often shipped.",
  },
];

const stats = [
  { value: "500+", label: "Events Managed" },
  { value: "15+", label: "Countries" },
  { value: "$2M+", label: "Raised for Charity" },
  { value: "10+", label: "Hours Saved Per Event" },
];

export function AboutContent() {
  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="section-padding bg-[var(--color-bg-1)]">
        <div className="container-marketing">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm font-semibold text-emerald uppercase tracking-wider mb-3">
                About us
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--color-text-light)] font-heading leading-tight">
                Built by People Who{" "}
                <span className="text-gradient">Run Golf Events</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-[var(--color-text-light-secondary)] leading-relaxed max-w-2xl">
                We&apos;ve been in the weeds — juggling spreadsheets, chasing
                payments, and pairing foursomes at midnight. GolfOps exists so
                you never have to.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-[var(--color-bg-2)]">
        <div className="container-marketing">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-light)] font-heading mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-base text-[var(--color-text-light-secondary)] leading-relaxed">
                <p>
                  GolfOps started the way most great tools do — out of pure
                  frustration. Our founders had organized dozens of charity golf
                  tournaments and corporate events across Africa, Europe, and
                  North America.
                </p>
                <p>
                  Every single time, it was the same story: five different
                  spreadsheets for registration, frantic WhatsApp messages about
                  pairings, payment confirmations lost in email threads, and
                  sponsors wondering where their logos ended up.
                </p>
                <p>
                  We looked at the existing tools — most were built for the US
                  market, accepted only credit cards, and treated pairing as an
                  afterthought. None of them worked for the organizers we knew in
                  Kampala, Nairobi, Lagos, or Accra.
                </p>
                <p className="font-semibold text-[var(--color-text-light)]">
                  So we built GolfOps — a platform that works everywhere, accepts
                  every payment method, and makes the hard parts of event
                  management feel effortless.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-[var(--radius-lg)] overflow-hidden shadow-elevated">
                <Image
                  src="/images/use-cases/golfers-on-course.jpg"
                  alt="Group of golfers enjoying a round on a tree-lined golf course"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-[var(--radius-md)] bg-emerald/10 -z-10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gold/10 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-gradient-dark text-white">
        <div className="container-marketing text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-sm font-semibold text-emerald-light uppercase tracking-wider mb-3">
              Our Mission
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-heading">
              Make golf events effortless for organizers worldwide
            </h2>
            <p className="mt-6 text-lg text-[var(--color-text-light-secondary)]">
              Whether you&apos;re running a 24-player charity scramble in
              Kampala or a 288-player corporate classic in Connecticut, you
              deserve tools that just work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-[var(--color-bg-1)]">
        <div className="container-marketing">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-light)] font-heading">
              Our Values
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center w-14 h-14 mx-auto rounded-full bg-emerald/10 text-emerald mb-5">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-text-light)] font-heading mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-light-secondary)] leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-[var(--color-bg-2)]">
        <div className="container-marketing">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-extrabold text-[var(--color-text-light)] font-heading">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-[var(--color-text-light-secondary)]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team placeholder */}
      <section className="section-padding bg-[var(--color-bg-1)]">
        <div className="container-marketing text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-light)] font-heading mb-4">
              The Team
            </h2>
            <p className="text-lg text-[var(--color-text-light-secondary)] max-w-2xl mx-auto mb-12">
              A small, focused team of golfers, engineers, and designers
              passionate about making events better.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Coming Soon", role: "Founder & CEO" },
              { name: "Coming Soon", role: "CTO" },
              { name: "Coming Soon", role: "Head of Design" },
              { name: "Coming Soon", role: "Head of Growth" },
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="w-24 h-24 mx-auto rounded-full bg-[var(--color-surface)] border-2 border-[var(--color-border-subtle)] flex items-center justify-center mb-4">
                  <span className="text-2xl text-[var(--color-text-light-secondary)]">?</span>
                </div>
                <p className="font-semibold text-[var(--color-text-light)] font-heading">{member.name}</p>
                <p className="text-sm text-[var(--color-text-light-secondary)]">{member.role}</p>
              </motion.div>
            ))}
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
              Join us on the mission
            </h2>
            <p className="text-lg text-[var(--color-text-light-secondary)] max-w-xl mx-auto mb-8">
              Start running smarter golf events today.
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
