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
        size === "nav" ? "h-12 w-[180px] sm:h-14 sm:w-[210px]" : "h-16 w-[240px] sm:h-20 sm:w-[290px]",
        className
      )}
    >
      <Image
        src="/logo.png"
        alt="GolfOps"
        fill
        sizes={size === "nav" ? "210px" : "290px"}
        className={cn(
          "object-contain object-left",
          size === "nav" ? "scale-[1.45]" : "scale-[1.55]"
        )}
        priority
      />
    </Link>
  );
}
