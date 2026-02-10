import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "default" | "white";
}

export function Logo({ className, variant = "default" }: LogoProps) {
  const isDefault = variant === "default";

  return (
    <Link href="/" className={cn("flex items-center gap-2.5 group", className)}>
      <span
        className={cn(
          "inline-flex h-9 w-9 items-center justify-center transition-transform group-hover:scale-105",
          isDefault ? "text-forest" : "text-emerald-light"
        )}
        aria-hidden="true"
      >
        <svg viewBox="0 0 64 64" className="h-9 w-9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="31" cy="31" r="25" fill="currentColor" />
          <path d="M19.5 23.5L33.5 36.2H25.2V46.8C25.2 47.6 25.9 48.2 26.7 48.2H28.3V52.5H20.4V47.2H22C22.9 47.2 23.6 46.5 23.6 45.7V30.8L19.5 27.2V23.5Z" fill={isDefault ? "#0B261B" : "#FFFFFF"} />
          <ellipse cx="31" cy="53.4" rx="18.2" ry="4.6" fill="currentColor" />
          <ellipse cx="31" cy="53.4" rx="4.6" ry="1.9" fill={isDefault ? "#0B261B" : "#FFFFFF"} />
        </svg>
      </span>
      <span
        className={cn(
          "text-xl font-bold tracking-tight font-heading",
          isDefault ? "text-charcoal" : "text-white"
        )}
      >
        Golf<span className={isDefault ? "text-forest" : "text-emerald-light"}>Ops</span>
      </span>
    </Link>
  );
}
