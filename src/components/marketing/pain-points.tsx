"use client";

import { motion } from "framer-motion";
import { FileSpreadsheet, CreditCard, Users } from "lucide-react";

const painPoints = [
  {
    icon: FileSpreadsheet,
    pain: "Still using spreadsheets?",
    solution: "Smart dashboards replace chaos",
    description:
      "Real-time event dashboards that give you complete visibility into registrations, payments, and player data — no formulas required.",
  },
  {
    icon: CreditCard,
    pain: "Chasing payments manually?",
    solution: "Collect payments in any currency, any method",
    description:
      "Accept Stripe, M-Pesa, MTN MoMo, PayStack, and more. Automatic invoicing, receipts, and payment tracking in one dashboard.",
  },
  {
    icon: Users,
    pain: "Pairing players by hand?",
    solution: "AI builds your foursomes in seconds",
    description:
      "Our smart pairing engine considers handicaps, preferences, and relationships to create perfectly balanced groups automatically.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function PainPoints() {
  return (
    <section className="section-padding bg-cloud">
      <div className="container-marketing">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] font-heading">
            Sound familiar?
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            You shouldn&apos;t need 5 tools, 10 spreadsheets, and a miracle to
            run a golf event.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {painPoints.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.pain}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-[var(--color-surface)] rounded-[var(--radius-lg)] p-10 shadow-card hover:shadow-elevated transition-all duration-300 border border-[var(--color-border-subtle)] hover:border-emerald/30"
              >
                <div
                  className="flex items-center justify-center w-16 h-16 rounded-[var(--radius-md)] mb-6 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.2))',
                    boxShadow: '0 4px 12px rgba(16, 185, 129, 0.15)'
                  }}
                >
                  <Icon className="w-7 h-7 text-emerald group-hover:scale-110 transition-transform duration-300" />
                </div>
                <p className="text-sm font-medium text-error/80 line-through mb-3">
                  {item.pain}
                </p>
                <h3 className="text-2xl font-bold text-[var(--color-text-primary)] font-heading mb-4 leading-tight">
                  {item.solution}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
