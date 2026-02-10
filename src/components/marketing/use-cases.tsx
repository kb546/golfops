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
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-emerald uppercase tracking-wider mb-3">
            Built for every format
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal font-heading">
            Whatever your event, we&apos;ve got you covered
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
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
                className="group block h-full bg-white rounded-[var(--radius-md)] overflow-hidden border border-gray/10 hover:border-emerald/20 hover:shadow-elevated transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={useCase.image}
                    alt={useCase.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-charcoal font-heading mb-3 group-hover:text-forest transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-slate leading-relaxed mb-4">
                    {useCase.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-forest group-hover:gap-3 transition-all">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
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
