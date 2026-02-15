"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const useCases = [
  {
    title: "Charity Tournaments",
    description:
      "Built-in donations, fundraising dashboards, sponsor packages, and tax receipt generation. Raise more, stress less.",
    href: "/charity-tournaments",
    image: "/images/use-cases/trophy-putters.jpg",
    imageAlt: "Golf trophy surrounded by putters on a green — representing tournament competition and winning",
  },
  {
    title: "Corporate Golf Days",
    description:
      "Branded event pages, client-focused pairings, live leaderboards on TV screens, and polished post-event reports.",
    href: "/corporate-events",
    image: "/images/use-cases/clubhouse-sunset.jpg",
    imageAlt: "Packed multi-level clubhouse grandstand at sunset with spectators watching golf",
  },
  {
    title: "Clubs & Associations",
    description:
      "Multi-event management, member databases, recurring templates, season-long leaderboards, and club branding.",
    href: "/clubs-associations",
    image: "/images/use-cases/golfers-on-course.jpg",
    imageAlt: "Group of golfers with bags and carts enjoying a round on a tree-lined course",
  },
];

export function UseCases() {
  return (
    <section className="section-padding bg-white">
      <div className="container-marketing">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-bold text-lime uppercase tracking-widest mb-4">
            Built for every format
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] font-heading max-w-3xl mx-auto leading-tight">
            Whatever your event, we&apos;ve got you covered
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, i) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={useCase.href}
                className="group block h-full bg-[var(--color-surface)] rounded-[var(--radius-lg)] overflow-hidden border border-[var(--color-border-subtle)] hover:border-lime/30 hover:shadow-2xl hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-4 focus-visible:ring-offset-white transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={useCase.image}
                    alt={useCase.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-300" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[var(--color-text-primary)] font-heading mb-4 group-hover:text-lime transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-6">
                    {useCase.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-lime group-hover:gap-4 transition-all">
                    Learn more
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
