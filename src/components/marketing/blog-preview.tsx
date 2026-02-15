"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

const posts = [
  {
    title: "How to Plan a Charity Golf Tournament: The Complete 2026 Guide",
    excerpt:
      "Everything you need to know about organizing a successful charity golf event — from budgeting to scoring.",
    category: "Tournament Planning",
    readTime: "8 min read",
    slug: "charity-golf-tournament-guide-2026",
    image: "/images/blog/putters-overhead.jpg",
    imageAlt: "Overhead view of colorful golf putters arranged around a putting hole",
  },
  {
    title: "Golf Tournament Pairings: Why Smart Matching Makes Better Events",
    excerpt:
      "Discover how AI-powered pairing algorithms create more competitive and enjoyable golf tournaments.",
    category: "Smart Pairings",
    readTime: "5 min read",
    slug: "smart-golf-pairings-guide",
    image: "/images/blog/woman-putting.jpg",
    imageAlt: "Woman lining up a putt on a well-maintained putting green with flag",
  },
  {
    title: "Accepting Mobile Money at Golf Events: A Guide for African Tournaments",
    excerpt:
      "How to integrate M-Pesa, MTN MoMo, and other mobile payment methods into your golf event workflow.",
    category: "Payments",
    readTime: "6 min read",
    slug: "mobile-money-golf-events-africa",
    image: "/images/hero/fairway-ball.jpg",
    imageAlt: "Golf ball resting on a pristine fairway with blurred spectators in the background",
  },
];

export function BlogPreview() {
  return (
    <section className="section-padding bg-[var(--color-bg-lighter)]">
      <div className="container-marketing">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <p className="text-sm font-semibold text-lime uppercase tracking-wider mb-3">
              From the blog
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] font-heading">
              Insights for organizers
            </h2>
          </div>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-lime hover:text-lime-light transition-colors"
          >
            View all posts
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group block h-full bg-[var(--color-surface)] rounded-[var(--radius-lg)] overflow-hidden border border-[var(--color-border-subtle)] hover:shadow-2xl hover:border-emerald/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent group-hover:from-black/50 transition-all duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-lime bg-lime/10 px-3 py-1 rounded-full border border-lime/20 shadow-sm">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-[var(--color-text-secondary)] font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-text-primary)] font-heading mb-2 group-hover:text-lime transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
