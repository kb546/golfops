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
        width={44}
        height={44}
        className="h-11 w-11 object-contain"
        priority
      />
    </Link>
  );
}
