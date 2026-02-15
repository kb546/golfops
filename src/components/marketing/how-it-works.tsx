"use client";

import { motion } from "framer-motion";
import { PlusCircle, Palette, LayoutDashboard, Zap } from "lucide-react";

const steps = [
  {
    icon: PlusCircle,
    step: "01",
    title: "Create Your Event",
    description:
      "Set up your tournament in under 5 minutes. AI assists with package pricing, format selection, and event details.",
  },
  {
    icon: Palette,
    step: "02",
    title: "Customize & Share",
    description:
      "Brand your event page, configure registration packages, set payment methods, and share your unique event link.",
  },
  {
    icon: LayoutDashboard,
    step: "03",
    title: "Manage Everything",
    description:
      "Smart pairings, payment tracking, sponsor management, and automated communication — all from one dashboard.",
  },
  {
    icon: Zap,
    step: "04",
    title: "Go Live",
    description:
      "Real-time mobile scoring, live leaderboards on any device, instant results, and beautiful post-event reports.",
  },
];

export function HowItWorks() {
  return (
    <section className="section-padding bg-[var(--color-bg-lighter)]">
      <div className="container-marketing">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-lime uppercase tracking-wider mb-3">
            How it works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] font-heading">
            From setup to scorecard in 4 steps
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            No training needed. No onboarding calls. Just create, customize, and go.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-[2px] bg-emerald/20" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative text-center"
              >
                {/* Step circle */}
                <div className="relative mx-auto mb-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[var(--color-surface)] border-2 border-emerald/20 flex items-center justify-center shadow-card relative z-10">
                    <Icon className="w-7 h-7 text-emerald" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-forest text-white text-xs font-bold flex items-center justify-center z-20 shadow-soft">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[var(--color-text-primary)] font-heading mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
