"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  headshot: string;
  rating?: number; // 1-5 stars (optional)
  className?: string;
}

export function TestimonialCard({
  quote,
  author,
  title,
  headshot,
  rating,
  className,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      tabIndex={0}
      className={cn(
        "group relative bg-[var(--color-surface)] border border-[var(--color-border-subtle)] rounded-[var(--radius-lg)] p-8",
        "hover:border-lime/30 hover:shadow-glow-lime",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-0)]",
        "transition-all duration-300",
        className
      )}
    >
      {/* Gold quote icon */}
      <div className="absolute -top-4 left-8">
        <div className="bg-gradient-gold p-3 rounded-full shadow-elevated">
          <Quote className="w-5 h-5 text-[var(--color-bg-0)]" />
        </div>
      </div>

      {/* Quote */}
      <blockquote className="mt-6 mb-6">
        <p className="text-lg text-[var(--color-text-primary)] leading-relaxed italic">
          "{quote}"
        </p>
      </blockquote>

      {/* Rating (if provided) */}
      {rating && (
        <div className="flex items-center gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={cn(
                "w-4 h-4",
                i < rating ? "text-gold fill-gold" : "text-[var(--color-text-muted)] fill-current"
              )}
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      )}

      {/* Author info */}
      <div className="flex items-center gap-4 pt-4 border-t border-[var(--color-border-subtle)]">
        <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-lime/20 group-hover:ring-lime/40 transition-all">
          <Image
            src={headshot}
            alt={author}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-semibold text-[var(--color-text-primary)] font-heading">
            {author}
          </p>
          <p className="text-sm text-[var(--color-text-secondary)]">
            {title}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
