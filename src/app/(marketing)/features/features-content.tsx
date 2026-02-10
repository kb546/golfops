"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  CreditCard,
  Brain,
  Radio,
  Globe,
  Award,
  Sparkles,
  BarChart3,
  UserPlus,
  DollarSign,
  Smartphone,
  Trophy,
  Mail,
  QrCode,
  FileText,
  Palette,
  Search,
  CalendarDays,
  Tv,
  Receipt,
  Users,
  Target,
  PieChart,
  Download,
  Megaphone,
} from "lucide-react";

const featureCategories = [
  {
    id: "registration",
    label: "Registration & Payments",
    icon: UserPlus,
    color: "bg-info/10 text-info",
    description: "Seamless registration with flexible global payment options.",
    features: [
      { icon: CreditCard, title: "Registration Packages", description: "Tiered pricing, early bird, group discounts, and custom packages" },
      { icon: Globe, title: "Global Payment Processing", description: "Stripe, MTN MoMo, M-Pesa, PayStack, Flutterwave — one platform" },
      { icon: Trophy, title: "Add-Ons", description: "Mulligans, raffle tickets, dinner guests, and custom add-ons" },
      { icon: Receipt, title: "Discount & Promo Codes", description: "Create time-limited codes, track usage, and automate discounts" },
      { icon: DollarSign, title: "Offline Payment Tracking", description: "Track checks, cash, and bank transfers alongside digital payments" },
      { icon: FileText, title: "Fee Passthrough", description: "Let registrants cover processing fees with transparent pricing" },
      { icon: Globe, title: "Multi-Currency Support", description: "Accept payments in USD, EUR, GBP, KES, UGX, GHS, and more" },
      { icon: Palette, title: "Custom Registration Forms", description: "Build forms with custom fields, conditional logic, and validations" },
    ],
  },
  {
    id: "pairings",
    label: "Smart Pairings",
    icon: Brain,
    color: "bg-emerald/10 text-emerald",
    description: "AI-powered player matching that creates perfectly balanced foursomes.",
    highlight: true,
    features: [
      { icon: Brain, title: "AI-Powered Pairing Engine", description: "Intelligent algorithm considers multiple factors for optimal groups" },
      { icon: Target, title: "Handicap-Based Matching", description: "Automatically balance groups by skill level for competitive play" },
      { icon: Users, title: "Preference-Based Grouping", description: "Honor play-with requests, avoid conflicts, and respect VIP pairings" },
      { icon: Smartphone, title: "Drag-and-Drop Override", description: "Full manual control with intuitive drag-and-drop interface" },
      { icon: CalendarDays, title: "Shotgun & Tee Time", description: "Assign starting holes and tee times with automatic scheduling" },
      { icon: BarChart3, title: "Flight & Division Management", description: "Create flights by handicap range or custom criteria" },
    ],
  },
  {
    id: "scoring",
    label: "Live Scoring & Leaderboards",
    icon: Radio,
    color: "bg-warning/10 text-warning",
    description: "Real-time scoring and leaderboards on any device.",
    features: [
      { icon: Smartphone, title: "Mobile Score Entry", description: "Players enter scores directly from their smartphones — no app download" },
      { icon: Radio, title: "Real-Time Leaderboards", description: "Instant updates as scores come in, visible to all participants" },
      { icon: Tv, title: "TV / Projector Display Mode", description: "Full-screen leaderboard optimized for clubhouse TVs and projectors" },
      { icon: Trophy, title: "Multiple Formats", description: "Scramble, best ball, shamble, stroke play, stableford, and more" },
      { icon: BarChart3, title: "Net & Gross Scoring", description: "Automatic handicap calculations for both net and gross leaderboards" },
      { icon: Target, title: "Hole-by-Hole Tracking", description: "Complete scorecards with per-hole stats, eagles, birdies, and pars" },
    ],
  },
  {
    id: "sponsors",
    label: "Sponsors & Fundraising",
    icon: Award,
    color: "bg-gold/10 text-gold",
    description: "Maximize sponsorship revenue and fundraising impact.",
    features: [
      { icon: Award, title: "Tiered Sponsor Packages", description: "Gold, Silver, Bronze — or create your own custom tiers with pricing" },
      { icon: Palette, title: "Automatic Logo Placement", description: "Sponsor logos auto-placed on event pages, leaderboards, and emails" },
      { icon: DollarSign, title: "Donation Collection", description: "Accept one-off and recurring donations during and after registration" },
      { icon: PieChart, title: "Fundraising Dashboard", description: "Real-time view of total raised, donor breakdown, and goal progress" },
      { icon: Users, title: "Lead Manager", description: "Track sponsor prospects, communication history, and pipeline value" },
      { icon: Receipt, title: "Tax Receipt Generation", description: "Auto-generate tax-deductible receipts for donors and sponsors" },
    ],
  },
  {
    id: "websites",
    label: "Event Websites",
    icon: Globe,
    color: "bg-forest/10 text-forest",
    description: "Beautiful, branded event pages that convert visitors to registrants.",
    features: [
      { icon: Palette, title: "Beautiful Templates", description: "6+ professionally designed templates ready to customize" },
      { icon: Globe, title: "Custom Domain Support", description: "Use your own domain or a branded GolfOps subdomain" },
      { icon: Palette, title: "Brand Customization", description: "Match your organization's colors, fonts, and logos perfectly" },
      { icon: Smartphone, title: "Mobile-Optimized", description: "Every page looks stunning on phones, tablets, and desktops" },
      { icon: Search, title: "SEO-Optimized", description: "Built-in SEO best practices to help your event get found" },
      { icon: UserPlus, title: "Embedded Registration", description: "Seamless registration flow built right into your event page" },
    ],
  },
  {
    id: "communication",
    label: "Communication",
    icon: Sparkles,
    color: "bg-emerald/10 text-emerald",
    description: "AI-powered emails, automation, and multi-channel messaging.",
    features: [
      { icon: Sparkles, title: "AI Email Drafts", description: "Generate professional emails in seconds with AI, then customize" },
      { icon: Mail, title: "Automated Emails", description: "Confirmation, reminders, day-of instructions, and thank-yous on autopilot" },
      { icon: Megaphone, title: "Bulk Messaging", description: "Segment players by status, package, or custom criteria and message in bulk" },
      { icon: QrCode, title: "QR Code Check-In", description: "Contactless check-in with unique QR codes for each registrant" },
      { icon: FileText, title: "Post-Event Surveys", description: "Collect feedback automatically and measure satisfaction scores" },
      { icon: Mail, title: "Email Templates", description: "Library of pre-built templates for every stage of your event lifecycle" },
    ],
  },
  {
    id: "analytics",
    label: "Analytics & Reporting",
    icon: BarChart3,
    color: "bg-info/10 text-info",
    description: "Data-driven insights to improve every event.",
    features: [
      { icon: PieChart, title: "Real-Time Dashboard", description: "Live overview of registrations, revenue, and key metrics at a glance" },
      { icon: BarChart3, title: "Registration Analytics", description: "Track conversion funnels, peak sign-up times, and drop-off points" },
      { icon: DollarSign, title: "Revenue Reports", description: "Complete financial breakdown by package, payment method, and date" },
      { icon: Trophy, title: "Scoring Statistics", description: "Average scores, hole difficulty analysis, and player performance trends" },
      { icon: Download, title: "Exportable Data", description: "Export any report to CSV, PDF, or Excel for your records and stakeholders" },
      { icon: FileText, title: "Post-Event Recaps", description: "Auto-generated event summaries with key stats and highlights" },
    ],
  },
];

export function FeaturesContent() {
  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="section-padding bg-white">
        <div className="container-marketing text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold text-emerald uppercase tracking-wider mb-3">
              Features
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-charcoal font-heading leading-tight">
              Everything You Need.
              <br />
              <span className="text-gradient">Nothing You Don&apos;t.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate max-w-2xl mx-auto">
              From registration to results — one platform, zero spreadsheets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature image */}
      <section className="container-marketing -mt-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-[var(--radius-lg)] overflow-hidden max-w-4xl mx-auto shadow-elevated"
        >
          <Image
            src="/images/features/chiputt-board.jpg"
            alt="Golf practice putting board with multiple holes and balls"
            width={900}
            height={500}
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </section>

      {/* Feature categories */}
      {featureCategories.map((category, catIndex) => {
        const CatIcon = category.icon;
        return (
          <section
            key={category.id}
            id={category.id}
            className={`section-padding ${catIndex % 2 === 0 ? "bg-white" : "bg-lighter"}`}
          >
            <div className="container-marketing">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-12"
              >
                <div className={`flex items-center justify-center w-12 h-12 rounded-[var(--radius-sm)] ${category.color}`}>
                  <CatIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl md:text-3xl font-bold text-charcoal font-heading">
                      {category.label}
                    </h2>
                    {category.highlight && (
                      <span className="text-xs font-bold text-white bg-emerald px-2.5 py-1 rounded-full uppercase tracking-wider">
                        Differentiator
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-base text-slate">{category.description}</p>
                </div>
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.features.map((feature, i) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className="flex gap-4 p-5 rounded-[var(--radius-md)] bg-white border border-gray/5 hover:border-emerald/20 hover:shadow-card transition-all"
                    >
                      <div className="flex-shrink-0 mt-0.5">
                        <Icon className="w-5 h-5 text-emerald" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-charcoal font-heading mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-slate leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* Bottom CTA */}
      <section className="section-padding bg-gradient-dark text-white">
        <div className="container-marketing text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Ready to see it in action?
            </h2>
            <p className="text-lg text-gray max-w-xl mx-auto mb-8">
              Start free with your first event. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/register"
                className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-forest bg-white hover:bg-light rounded-[var(--radius-sm)] transition-all"
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
    </div>
  );
}
