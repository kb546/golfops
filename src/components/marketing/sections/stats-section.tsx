"use client";

import { StatCounter } from "@/components/ui/stat-counter";
import { motion } from "framer-motion";

export function StatsSection() {
  return (
    <section className="section-padding bg-gradient-brand relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-lime) 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="container-marketing relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-heading">
            Trusted by Organizers{" "}
            <span className="text-lime">Worldwide</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          <StatCounter
            value={500}
            suffix="+"
            label="Events Managed"
            duration={2000}
          />
          <StatCounter
            value={50000}
            suffix="+"
            label="Participants Registered"
            duration={2500}
          />
          <StatCounter
            value={98}
            suffix="%"
            label="Customer Satisfaction"
            duration={2000}
          />
        </div>

        {/* Optional: Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-white/80 text-sm">
            Operating in 15+ countries across 4 continents
          </p>
        </motion.div>
      </div>
    </section>
  );
}
