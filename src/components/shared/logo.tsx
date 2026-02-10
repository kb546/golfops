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
        "relative inline-flex shrink-0 items-center",
        size === "nav" ? "h-11 w-[150px] sm:h-12 sm:w-[170px]" : "h-14 w-[190px] sm:h-16 sm:w-[220px]",
        className
      )}
    >
      <Image
        src="/logo.png"
        alt="GolfOps"
        fill
        sizes={size === "nav" ? "170px" : "220px"}
        className="object-contain object-left"
        priority
      />
    </Link>
  );
}
