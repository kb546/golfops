"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export interface StatCounterProps {
  value: number;
  suffix?: string; // e.g., "+", "%", "K"
  prefix?: string; // e.g., "$"
  label: string;
  duration?: number; // Animation duration in ms
  className?: string;
}

export function StatCounter({
  value,
  suffix = "",
  prefix = "",
  label,
  duration = 2000,
  className,
}: StatCounterProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;

    const animation = animate(count, value, {
      duration: duration / 1000,
      ease: "easeOut",
    });

    hasAnimated.current = true;

    return animation.stop;
  }, [count, value, duration]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className={cn("text-center", className)}
    >
      {/* Counter */}
      <div className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading">
        <span className="text-gradient">
          {prefix}
          <motion.span>{rounded}</motion.span>
          {suffix}
        </span>
      </div>

      {/* Label */}
      <p className="mt-3 text-base md:text-lg text-white/90 font-medium">
        {label}
      </p>
    </motion.div>
  );
}
