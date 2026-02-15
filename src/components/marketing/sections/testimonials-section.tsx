"use client";

import { TestimonialCard } from "@/components/ui/testimonial-card";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Switched from Excel spreadsheets to GolfOps. The AI-powered pairings alone saved me 4 hours of work. Never looking back!",
    author: "Mike Thompson",
    title: "Tournament Director, Charity Classic",
    headshot: "/images/testimonials/mike-t.jpg", // You'll need to add actual images
    rating: 5,
  },
  {
    quote: "The platform paid for itself after one event. Registration was seamless, payments were instant, and our participants loved the experience.",
    author: "Sarah Chen",
    title: "Corporate Events Manager, Tech Summit Golf",
    headshot: "/images/testimonials/sarah-c.jpg",
    rating: 5,
  },
  {
    quote: "As a club president, I've tried every tournament platform. GolfOps is the most intuitive and powerful. The live scoring feature is game-changing.",
    author: "James Wilson",
    title: "Club President, Pebble Beach Golf Club",
    headshot: "/images/testimonials/james-w.jpg",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-[var(--color-bg-0)]">
      <div className="container-marketing">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--color-text-primary)] font-heading mb-4">
            Loved by Tournament{" "}
            <span className="text-gradient">Directors</span>
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Join hundreds of organizers who ditched spreadsheets for GolfOps
          </p>
        </motion.div>

        {/* Testimonials Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.author}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
