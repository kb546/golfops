import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "default" | "white";
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn("inline-flex items-center", className)}>
      <Image
        src="/logo.png"
        alt="GolfOps"
        width={320}
        height={96}
        className="h-10 w-32 object-contain sm:h-12 sm:w-40 md:h-14 md:w-44"
        priority
      />
    </Link>
  );
}
