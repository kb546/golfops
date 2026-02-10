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
        "relative inline-flex shrink-0 items-center overflow-hidden",
        size === "nav" ? "h-12 w-[180px] sm:h-14 sm:w-[210px]" : "h-16 w-[220px] sm:h-20 sm:w-[260px]",
        className
      )}
    >
      <Image
        src="/logo.png"
        alt="GolfOps"
        fill
        sizes={size === "nav" ? "260px" : "320px"}
        className={cn(
          "object-contain object-center",
          size === "nav" ? "scale-[2.2]" : "scale-[2.35]"
        )}
        priority
      />
    </Link>
  );
}
