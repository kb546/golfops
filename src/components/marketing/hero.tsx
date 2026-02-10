"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-[72px]">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-forest) 1px, transparent 0)`,
        backgroundSize: '32px 32px',
      }} />

      <div className="container-marketing relative">
        <div className="flex flex-col items-center text-center py-20 md:py-28 lg:py-32">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald/10 text-emerald rounded-full text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald"></span>
              </span>
              Now accepting early access signups
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-charcoal leading-[1.1] max-w-4xl font-heading"
          >
            Run Smarter Golf Events.{" "}
            <span className="text-gradient">Anywhere in the World.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-slate max-w-2xl leading-relaxed"
          >
            The all-in-one platform for registration, pairings, live scoring,
            payments, and communication &mdash; powered by AI.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-10"
          >
            <Link
              href="/register"
              className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-forest hover:bg-forest-light rounded-[var(--radius-sm)] transition-all shadow-card hover:shadow-elevated"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/demo"
              className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-charcoal bg-white hover:bg-light border border-gray/20 rounded-[var(--radius-sm)] transition-all"
            >
              <Play className="w-4 h-4 text-forest" />
              Book a Demo
            </Link>
          </motion.div>

          {/* Trust bar */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 text-sm text-gray"
          >
            Trusted by tournament organizers across 4 continents
          </motion.p>

          {/* Hero image — Tournament scene */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-16 w-full max-w-5xl"
          >
            <div className="relative rounded-[var(--radius-lg)] overflow-hidden shadow-modal border border-gray/10">
              <Image
                src="/images/hero/tournament-crowd.jpg"
                alt="Professional golf tournament with excited spectators watching a golfer tee off at a coastal course"
                width={1200}
                height={675}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
              {/* Dashboard preview overlay */}
              <div className="absolute inset-x-4 md:inset-x-12 bottom-6 md:bottom-10">
                <div className="bg-white/95 backdrop-blur-sm rounded-[var(--radius-md)] shadow-elevated border border-gray/10 p-4 md:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-error/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-warning/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-success/60" />
                    </div>
                    <span className="text-[10px] md:text-xs text-gray font-medium">GolfOps Dashboard</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Events", value: "12" },
                      { label: "Revenue", value: "$24.5k" },
                      { label: "Players", value: "486" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="p-2 md:p-3 rounded-[var(--radius-sm)] bg-lighter border border-gray/10"
                      >
                        <p className="text-sm md:text-xl font-bold text-charcoal font-heading">
                          {stat.value}
                        </p>
                        <p className="text-[9px] md:text-xs text-gray">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
