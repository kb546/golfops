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
import { HeadlineBlock } from "@/components/marketing/sections";

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
    color: "bg-mint-fresh/10 text-green-accent",
  },
  {
    icon: Radio,
    title: "Live Scoring",
    description: "Real-time leaderboards on any device",
    detail:
      "Players enter scores on their phones. Spectators follow live leaderboards. Display results on TV screens at the clubhouse.",
    color: "bg-lime/10 text-lime",
  },
  {
    icon: CreditCard,
    title: "Global Payments",
    description: "Stripe, M-Pesa, MoMo, PayStack — one dashboard",
    detail:
      "Accept payments via card, mobile money, or bank transfer. Automatic currency conversion and unified reporting.",
    color: "bg-green/10 text-green-accent",
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
    color: "bg-forest/10 text-green-accent",
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
    <section className="section-padding bg-cloud">
      <div className="container-marketing">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <HeadlineBlock
            eyebrow="Everything you need"
            title="One platform. Every tool."
            subtitle="From the first registration to the final scorecard, GolfOps handles every aspect of your event."
            align="center"
          />
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
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-[var(--color-surface)] rounded-[var(--radius-lg)] p-8 border border-[var(--color-border-subtle)] hover:border-lime/30 hover:shadow-elevated transition-all duration-300"
              >
                <div
                  className={`flex items-center justify-center w-16 h-16 rounded-[var(--radius-md)] ${feature.color} mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text-primary)] font-heading mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm font-semibold text-lime mb-3">
                  {feature.description}
                </p>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
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
