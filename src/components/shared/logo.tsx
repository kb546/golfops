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
        size === "nav" ? "h-16 w-[230px] sm:h-[4.5rem] sm:w-[260px]" : "h-20 w-[280px] sm:h-24 sm:w-[320px]",
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
          size === "nav" ? "scale-[2.7]" : "scale-[3]"
        )}
        priority
      />
    </Link>
  );
}
