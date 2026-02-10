"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/shared/logo";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Solutions",
    href: "#",
    children: [
      { label: "Charity Tournaments", href: "/charity-tournaments", description: "Raise more. Stress less." },
      { label: "Corporate Events", href: "/corporate-events", description: "Impress clients, not spreadsheets." },
      { label: "Clubs & Associations", href: "/clubs-associations", description: "Simplify your tournament season." },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-forest/95 backdrop-blur-xl border-b border-white/15 shadow-soft"
          : "bg-forest border-b border-white/10"
      )}
    >
      <nav className="container-marketing flex items-center justify-between h-[96px]">
        <Logo size="nav" />

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {link.children ? (
                <button
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/90 hover:text-mint rounded-[var(--radius-sm)] transition-colors"
                >
                  {link.label}
                  <ChevronDown className={cn(
                    "w-3.5 h-3.5 transition-transform",
                    openDropdown === link.label && "rotate-180"
                  )} />
                </button>
              ) : (
                <Link
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-white/90 hover:text-mint rounded-[var(--radius-sm)] transition-colors"
                >
                  {link.label}
                </Link>
              )}

              {/* Dropdown */}
              <AnimatePresence>
                {link.children && openDropdown === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1 w-72 bg-white rounded-[var(--radius-md)] shadow-elevated border border-light p-2"
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-3 rounded-[var(--radius-sm)] hover:bg-light transition-colors group"
                      >
                        <div className="text-sm font-medium text-charcoal group-hover:text-forest transition-colors">
                          {child.label}
                        </div>
                        <div className="text-xs text-gray mt-0.5">
                          {child.description}
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/login"
            className="px-4 py-2 text-sm font-medium text-white/90 hover:text-mint transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/register"
            className="px-5 py-2.5 text-sm font-semibold text-forest bg-white hover:bg-light rounded-[var(--radius-sm)] transition-colors shadow-soft"
          >
            Get Started Free
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="lg:hidden p-2 text-white hover:text-mint transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-forest-light border-t border-white/10 overflow-hidden"
          >
            <div className="container-marketing py-6 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.children ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === link.label ? null : link.label
                          )
                        }
                        className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-white hover:text-mint rounded-[var(--radius-sm)] transition-colors"
                      >
                        {link.label}
                        <ChevronDown className={cn(
                          "w-4 h-4 transition-transform",
                          openDropdown === link.label && "rotate-180"
                        )} />
                      </button>
                      <AnimatePresence>
                        {openDropdown === link.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 space-y-1 overflow-hidden"
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                onClick={() => setIsMobileOpen(false)}
                                className="block px-4 py-2.5 text-sm text-white/85 hover:text-mint transition-colors"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="block px-4 py-3 text-base font-medium text-white hover:text-mint rounded-[var(--radius-sm)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}

              <div className="pt-4 mt-4 border-t border-white/10 space-y-3">
                <Link
                  href="/login"
                  onClick={() => setIsMobileOpen(false)}
                  className="block w-full px-4 py-3 text-center text-sm font-medium text-white/90 hover:text-mint transition-colors"
                >
                  Log in
                </Link>
                <Link
                  href="/register"
                  onClick={() => setIsMobileOpen(false)}
                  className="block w-full px-5 py-3 text-center text-sm font-semibold text-forest bg-white hover:bg-light rounded-[var(--radius-sm)] transition-colors"
                >
                  Get Started Free
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
