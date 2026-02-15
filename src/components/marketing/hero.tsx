"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-white pt-[72px]">
      {/* Subtle background pattern with parallax */}
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-lime) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
          y: y,
        }}
      />

      <motion.div className="container-marketing relative" style={{ opacity }}>
        <div className="flex flex-col items-center text-center py-24 md:py-32 lg:py-40">
          {/* Badge - Premium styling with gold accent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-lime/10 to-emerald/10 text-lime rounded-full text-sm font-semibold mb-10 border border-lime/30 shadow-lg shadow-lime/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime"></span>
              </span>
              Now onboarding pilot partners
            </div>
          </motion.div>

          {/* Headline - Larger and more dramatic */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-[var(--color-text-primary)] leading-[1.05] max-w-5xl font-heading"
          >
            Run Smarter Golf Events.{" "}
            <span className="text-gradient bg-clip-text">Anywhere in the World.</span>
          </motion.h1>

          {/* Subheadline - Larger for better hierarchy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 text-xl md:text-2xl text-[var(--color-text-secondary)] max-w-3xl leading-relaxed"
          >
            The all-in-one platform for registration, pairings, live scoring,
            payments, and communication &mdash; powered by AI.
          </motion.p>

          {/* CTAs - Larger and more prominent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-5 mt-12"
          >
            <Link
              href="/demo"
              className={cn(buttonVariants({ variant: "primary", size: "xl" }), "group shadow-xl hover:shadow-2xl")}
            >
              Book a Demo
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: "tertiary", size: "xl" }), "group")}
            >
              <Play className="w-5 h-5" />
              Contact Sales
            </Link>
          </motion.div>

          {/* Trust bar */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 text-sm text-[var(--color-text-secondary)]"
          >
            Trusted by tournament organizers across 4 continents
          </motion.p>

          {/* Hero image — Tournament scene - Premium styling */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-20 w-full max-w-6xl"
          >
            <div className="relative rounded-[var(--radius-xl)] overflow-hidden shadow-2xl border border-gray/20">
              <Image
                src="/images/hero/tournament-crowd.jpg"
                alt="Professional golf tournament with excited spectators watching a golfer tee off at a coastal course"
                width={1200}
                height={675}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Enhanced gradient overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
              {/* Dashboard preview overlay - More premium */}
              <div className="absolute inset-x-4 md:inset-x-16 bottom-8 md:bottom-12">
                <div className="bg-white/98 backdrop-blur-xl rounded-[var(--radius-lg)] shadow-2xl border border-white/20 p-5 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-error" />
                      <div className="w-3 h-3 rounded-full bg-warning" />
                      <div className="w-3 h-3 rounded-full bg-success" />
                    </div>
                    <span className="text-xs md:text-sm text-[var(--color-text-muted)] font-semibold">GolfOps Dashboard</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: "Events", value: "12" },
                      { label: "Revenue", value: "$24.5k" },
                      { label: "Players", value: "486" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="p-3 md:p-4 rounded-[var(--radius-md)] bg-gradient-to-br from-lime/5 to-emerald/5 border border-lime/10 shadow-sm"
                      >
                        <p className="text-lg md:text-2xl font-extrabold text-[var(--color-text-primary)] font-heading">
                          {stat.value}
                        </p>
                        <p className="text-[10px] md:text-xs text-[var(--color-text-secondary)] font-medium mt-0.5">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
