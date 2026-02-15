"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface Logo {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface LogoCloudProps {
  title?: string;
  logos: Logo[];
  className?: string;
  grayscale?: boolean; // Make logos grayscale with color on hover
}

export function LogoCloud({
  title,
  logos,
  className,
  grayscale = true,
}: LogoCloudProps) {
  return (
    <div className={cn("", className)}>
      {title && (
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-10"
        >
          {title}
        </motion.h3>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center"
      >
        {logos.map((logo, index) => (
          <motion.div
            key={logo.alt}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={cn(
              "relative transition-all duration-300",
              grayscale && "grayscale hover:grayscale-0 opacity-60 hover:opacity-100"
            )}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width || 120}
              height={logo.height || 40}
              className="h-auto w-auto max-h-10 object-contain"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
