"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Clock } from "lucide-react";
import { useState } from "react";

export function ContactContent() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-[72px]">
      <section className="section-padding bg-white">
        <div className="container-marketing">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left — Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm font-semibold text-emerald uppercase tracking-wider mb-3">
                Contact us
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-charcoal font-heading leading-tight">
                Let&apos;s talk about your event
              </h1>
              <p className="mt-6 text-lg text-slate leading-relaxed">
                Whether you&apos;re planning your first tournament or your
                fiftieth, we&apos;d love to hear from you. Drop us a message
                and we&apos;ll get back to you quickly.
              </p>

              <div className="mt-12 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-[var(--radius-sm)] bg-emerald/10 text-emerald flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal font-heading">Email</p>
                    <p className="text-sm text-slate">hello@golfops.io</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-[var(--radius-sm)] bg-emerald/10 text-emerald flex-shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal font-heading">Live Chat</p>
                    <p className="text-sm text-slate">Available Mon–Fri, 9am–6pm EST</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-[var(--radius-sm)] bg-emerald/10 text-emerald flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal font-heading">Response Time</p>
                    <p className="text-sm text-slate">Usually within 2 hours during business hours</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-lighter rounded-[var(--radius-md)]">
                  <div className="w-16 h-16 rounded-full bg-emerald/10 text-emerald flex items-center justify-center mb-6">
                    <Mail className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal font-heading mb-2">
                    Message sent!
                  </h3>
                  <p className="text-slate">
                    We&apos;ll get back to you within 2 hours during business hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-5 bg-lighter p-8 rounded-[var(--radius-md)] border border-gray/10"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1.5">
                        First name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 text-sm border border-gray/20 rounded-[var(--radius-sm)] bg-white focus:outline-none focus:ring-2 focus:ring-emerald/30 focus:border-emerald transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1.5">
                        Last name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 text-sm border border-gray/20 rounded-[var(--radius-sm)] bg-white focus:outline-none focus:ring-2 focus:ring-emerald/30 focus:border-emerald transition-all"
                        placeholder="Smith"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 text-sm border border-gray/20 rounded-[var(--radius-sm)] bg-white focus:outline-none focus:ring-2 focus:ring-emerald/30 focus:border-emerald transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1.5">
                      Organization
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 text-sm border border-gray/20 rounded-[var(--radius-sm)] bg-white focus:outline-none focus:ring-2 focus:ring-emerald/30 focus:border-emerald transition-all"
                      placeholder="Your club or organization"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1.5">
                      How can we help?
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-3 text-sm border border-gray/20 rounded-[var(--radius-sm)] bg-white focus:outline-none focus:ring-2 focus:ring-emerald/30 focus:border-emerald transition-all resize-none"
                      placeholder="Tell us about your event or ask us a question..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 px-6 text-sm font-semibold text-white bg-forest hover:bg-forest-light rounded-[var(--radius-sm)] transition-all shadow-card hover:shadow-elevated"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
