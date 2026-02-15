"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CTASection() {
  return (
    <section className="bg-gradient-brand text-white section-padding relative overflow-hidden">
      {/* Background pattern - More prominent */}
      <div className="absolute inset-0 opacity-[0.08]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #a7f46e 1px, transparent 0)`,
        backgroundSize: '48px 48px',
      }} />

      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />

      <div className="container-marketing relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-heading leading-tight">
            Your next golf event
            <br />
            deserves better tools.
          </h2>
          <p className="mt-8 text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of organizers who ditched spreadsheets for GolfOps.
            Book a demo, then launch with a tailored plan.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-12">
            <Link
              href="/demo"
              className={cn(buttonVariants({ variant: "primary", size: "xl" }), "group shadow-2xl hover:shadow-lime/20")}
            >
              Book a Demo
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/pricing"
              className={cn(buttonVariants({ variant: "outline", size: "xl" }))}
            >
              See Pricing
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
