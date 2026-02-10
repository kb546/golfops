"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "GolfOps saved us at least 15 hours on our annual charity classic. The smart pairings alone were worth it.",
    name: "Sarah Mitchell",
    role: "Tournament Director",
    org: "Hope Foundation Golf Classic",
  },
  {
    quote:
      "Our corporate clients were blown away by the live leaderboard. It made our event feel like a PGA tour stop.",
    name: "David Okonkwo",
    role: "Events Manager",
    org: "Sterling Golf & Country Club",
  },
  {
    quote:
      "Finally, a platform that understands African payment methods. MTN MoMo integration was seamless.",
    name: "Grace Nakamya",
    role: "Charity Organizer",
    org: "Kampala Golf Open",
  },
];

const stats = [
  { value: 500, suffix: "+", label: "Events Managed" },
  { value: 10, suffix: "+", label: "Hours Saved Per Event" },
  { value: 4, suffix: "", label: "Continents" },
  { value: 99.9, suffix: "%", label: "Uptime" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(Math.floor(current * 10) / 10);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {Number.isInteger(value) ? Math.round(display) : display.toFixed(1)}
      {suffix}
    </span>
  );
}

export function SocialProof() {
  return (
    <section className="bg-gradient-dark text-white section-padding">
      <div className="container-marketing">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-20"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-heading">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm text-gray">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-emerald-light uppercase tracking-wider mb-3">
            Loved by organizers
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">
            Don&apos;t take our word for it
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-[var(--radius-md)] p-8 border border-white/10"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-gold text-gold"
                  />
                ))}
              </div>
              <p className="text-sm text-gray leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald/20 flex items-center justify-center text-emerald font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gray">
                      {testimonial.role}, {testimonial.org}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
