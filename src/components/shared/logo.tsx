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
        "relative inline-flex shrink-0 items-center overflow-visible",
        size === "nav" ? "h-12 w-[190px] sm:w-[220px]" : "h-16 w-[250px] sm:w-[300px]",
        className
      )}
    >
      <Image
        src="/logo.png"
        alt="GolfOps"
        fill
        sizes={size === "nav" ? "220px" : "300px"}
        className={cn(
          "object-contain object-left origin-left",
          size === "nav" ? "scale-[2.4]" : "scale-[2.65]"
        )}
        priority
      />
    </Link>
  );
}
