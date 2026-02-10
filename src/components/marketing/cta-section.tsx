"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="bg-gradient-dark text-white section-padding relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="container-marketing relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-heading leading-tight">
            Your next golf event
            <br />
            deserves better tools.
          </h2>
          <p className="mt-6 text-lg text-gray max-w-xl mx-auto">
            Join hundreds of organizers who ditched spreadsheets for GolfOps.
            Start free, upgrade when you&apos;re ready.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link
              href="/register"
              className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-forest bg-white hover:bg-light rounded-[var(--radius-sm)] transition-all shadow-card hover:shadow-elevated"
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
  );
}
