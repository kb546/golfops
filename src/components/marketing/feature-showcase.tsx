"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Brain,
  Radio,
  CreditCard,
  Award,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Event Websites",
    description: "Beautiful, branded event pages in minutes",
    detail:
      "Choose from stunning templates, customize colors and branding, and publish a professional event page your sponsors will love.",
    color: "bg-info/10 text-info",
  },
  {
    icon: Brain,
    title: "Smart Pairings",
    description: "AI-powered foursomes by handicap & preference",
    detail:
      "Our intelligent engine considers skill levels, player preferences, and relationships to create balanced, enjoyable groups.",
    color: "bg-emerald/10 text-emerald",
  },
  {
    icon: Radio,
    title: "Live Scoring",
    description: "Real-time leaderboards on any device",
    detail:
      "Players enter scores on their phones. Spectators follow live leaderboards. Display results on TV screens at the clubhouse.",
    color: "bg-warning/10 text-warning",
  },
  {
    icon: CreditCard,
    title: "Global Payments",
    description: "Stripe, M-Pesa, MoMo, PayStack — one dashboard",
    detail:
      "Accept payments via card, mobile money, or bank transfer. Automatic currency conversion and unified reporting.",
    color: "bg-error/10 text-error",
  },
  {
    icon: Award,
    title: "Sponsor Management",
    description: "Tiered packages with automatic logo placement",
    detail:
      "Create sponsor tiers, track payments, auto-place logos on event pages, and generate ROI reports for your partners.",
    color: "bg-gold/10 text-gold",
  },
  {
    icon: Sparkles,
    title: "AI Communication",
    description: "Draft emails, send reminders, automate follow-ups",
    detail:
      "AI-generated email drafts, automated confirmation sequences, and smart scheduling so you never miss a touchpoint.",
    color: "bg-forest/10 text-forest",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
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

export function FeatureShowcase() {
  return (
    <section className="section-padding bg-white">
      <div className="container-marketing">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-emerald uppercase tracking-wider mb-3">
            Everything you need
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal font-heading">
            One platform. Every tool.
          </h2>
          <p className="mt-4 text-lg text-slate max-w-2xl mx-auto">
            From the first registration to the final scorecard, GolfOps handles
            every aspect of your event.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="group relative bg-white rounded-[var(--radius-md)] p-8 border border-gray/10 hover:border-emerald/20 hover:shadow-elevated transition-all"
              >
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-[var(--radius-sm)] ${feature.color} mb-5`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-charcoal font-heading mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm font-medium text-forest mb-2">
                  {feature.description}
                </p>
                <p className="text-sm text-slate leading-relaxed">
                  {feature.detail}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
