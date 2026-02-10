import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "nav" | "footer";
}

export function Logo({ className, size = "nav" }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex shrink-0 items-center",
        className
      )}
    >
      <Image
        src="/logo.png"
        alt="GolfOps"
        width={size === "nav" ? 220 : 300}
        height={size === "nav" ? 64 : 88}
        sizes={size === "nav" ? "220px" : "300px"}
        className={cn(
          "h-auto w-auto max-w-none object-contain",
          size === "nav" ? "max-h-12 sm:max-h-14" : "max-h-16 sm:max-h-20"
        )}
        priority
      />
    </Link>
  );
}
