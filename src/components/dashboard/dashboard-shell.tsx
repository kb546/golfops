"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutGrid,
  Users,
  Trophy,
  CreditCard,
  Briefcase,
  MessageSquare,
  Search,
  Bell,
} from "lucide-react";

const navItems = [
  { href: "/dashboard", label: "Overview", icon: LayoutGrid },
  { href: "/dashboard/pairings", label: "Pairings", icon: Users },
  { href: "/dashboard/scoring", label: "Scoring", icon: Trophy },
  { href: "/dashboard/payments", label: "Payments", icon: CreditCard },
  { href: "/dashboard/sponsors", label: "Sponsors", icon: Briefcase },
  { href: "/dashboard/communications", label: "Comms", icon: MessageSquare },
];

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const deckMode = searchParams.get("deck") === "1";

  return (
    <div className={cn("min-h-screen text-charcoal", deckMode ? "bg-gradient-soft" : "bg-cloud")}>
      <div className={cn("mx-auto flex", deckMode ? "max-w-[1380px] px-3 py-3 md:px-6 md:py-6" : "max-w-[1500px]")}>
        <aside className={cn(
          "hidden min-h-screen w-72 border-r border-gray/10 bg-white px-5 py-6 lg:block",
          deckMode && "min-h-0 rounded-l-[var(--radius-lg)] border-r border-gray/10"
        )}>
          <div className="mb-8 px-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lime">GolfOps Admin</p>
            <h1 className="mt-2 text-2xl font-bold font-heading">Command Center</h1>
            {deckMode ? <p className="mt-1 text-xs text-slate">Presentation Mode</p> : null}
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-[var(--radius-sm)] px-3 py-2.5 text-sm font-medium transition-colors",
                    active
                      ? "bg-forest text-white"
                      : "text-slate hover:bg-mist hover:text-charcoal"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </aside>

        <div className={cn("flex-1", deckMode && "overflow-hidden rounded-r-[var(--radius-lg)] border border-gray/10 bg-white shadow-modal")}>
          <header className="sticky top-0 z-30 border-b border-gray/10 bg-white/95 px-4 py-4 backdrop-blur md:px-6">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 rounded-[var(--radius-sm)] border border-gray/15 bg-white px-3 py-2 text-sm text-slate w-full max-w-md">
                  <Search className="h-4 w-4" />
                  <span>Search events, players, sponsors...</span>
                </div>
                {deckMode ? (
                  <span className="hidden rounded-full border border-lime/30 bg-lime/10 px-3 py-1 text-xs font-semibold text-lime lg:inline-flex">
                    Deck Capture
                  </span>
                ) : null}
              </div>
              <div className="flex items-center gap-2">
                <button className="rounded-[var(--radius-sm)] border border-gray/15 p-2 text-slate hover:bg-mist">
                  <Bell className="h-4 w-4" />
                </button>
                <div className="rounded-full bg-forest px-3 py-1.5 text-xs font-semibold text-white">BK</div>
              </div>
            </div>
          </header>

          <main className="px-4 py-6 md:px-6 md:py-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
