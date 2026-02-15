"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface LogoProps {
  className?: string;
  size?: "nav" | "footer" | "mobile";
  variant?: "auto" | "primary" | "white" | "solid";
  showText?: boolean; // Show full logo or just mark
}

const logoPaths = {
  type: {
    primary: { svg: "/Golf_Ops_Logo/SVG/Logo_Type_1.svg", png: "/Golf_Ops_Logo/PNG/Logo_Type_1.png" },
    white: { svg: "/Golf_Ops_Logo/SVG/Logo_Type_2.svg", png: "/Golf_Ops_Logo/PNG/Logo_Type_2.png" },
    solid: { svg: "/Golf_Ops_Logo/SVG/Logo_Type_3.svg", png: "/Golf_Ops_Logo/PNG/Logo_Type_3.png" },
  },
  mark: {
    primary: { svg: "/Golf_Ops_Logo/SVG/Logo_Mark_1.svg", png: "/Golf_Ops_Logo/PNG/Logo_Mark_1.png" },
    white: { svg: "/Golf_Ops_Logo/SVG/Logo_Mark_2.svg", png: "/Golf_Ops_Logo/PNG/Logo_Mark_2.png" },
    solid: { svg: "/Golf_Ops_Logo/SVG/Logo_Mark_3.svg", png: "/Golf_Ops_Logo/PNG/Logo_Mark_3.png" },
  },
} as const;

/**
 * Smart Logo Component - Auto-selects appropriate variant
 *
 * Features:
 * - Auto-detects background color (light/dark)
 * - Responsive sizing based on breakpoints
 * - SVG format from new logo assets
 * - Optimized for performance
 *
 * Variants:
 * - Primary: Gradient logo for light backgrounds
 * - White: White logo for dark backgrounds
 * - Solid: Single-color for print/special cases
 * - Auto: Automatically selects based on context
 */
export function Logo({
  className,
  size = "nav",
  variant = "auto",
  showText = true,
}: LogoProps) {
  const [isMobile, setIsMobile] = useState(false);
  // Default to PNG for better compatibility across browsers
  const [assetMode, setAssetMode] = useState<"svg" | "png" | "fallback">("png");

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const resolvedVariant = variant === "auto" ? "primary" : variant;

  // Determine which logo variant to use
  const getLogoAsset = () => {
    // For mobile, always use logo mark (icon only)
    if (size === "mobile" || (isMobile && size === "nav")) {
      if (resolvedVariant === "white") return logoPaths.mark.white;
      if (resolvedVariant === "solid") return logoPaths.mark.solid;
      return logoPaths.mark.primary;
    }

    // If showText is false, use logo mark regardless of size
    if (!showText) {
      if (resolvedVariant === "white") return logoPaths.mark.white;
      if (resolvedVariant === "solid") return logoPaths.mark.solid;
      return logoPaths.mark.primary;
    }

    // Full logo with text
    if (resolvedVariant === "white") return logoPaths.type.white;
    if (resolvedVariant === "solid") return logoPaths.type.solid;
    return logoPaths.type.primary;
  };

  // Determine dimensions based on size and whether showing text
  const getDimensions = () => {
    const useMark = size === "mobile" || (isMobile && size === "nav") || !showText;

    if (useMark) {
      // Logo mark dimensions
      return {
        width: size === "mobile" ? 40 : 48,
        height: size === "mobile" ? 40 : 48,
        maxHeight: size === "mobile" ? "40px" : "48px",
      };
    }

    // Full logo dimensions
    if (size === "footer") {
      return {
        width: 240,
        height: 80,
        maxHeight: "64px",
      };
    }

    // Nav size (reduced by half for appropriate scale)
    return {
      width: 55,
      height: 18,
      maxHeight: "20px",
    };
  };

  const dimensions = getDimensions();
  const logoAsset = getLogoAsset();
  const fallbackTextColor = resolvedVariant === "white" ? "text-white" : "text-lime";

  useEffect(() => {
    // Use PNG for reliability (can switch to SVG later if needed)
    setAssetMode("png");
  }, [resolvedVariant, size, isMobile, showText]);

  return (
    <Link
      href="/"
      aria-label="GolfOps Home"
      className={cn(
        "inline-flex shrink-0 items-center transition-opacity hover:opacity-80",
        className
      )}
    >
      {assetMode === "fallback" ? (
        <span className={cn("text-xl font-bold tracking-tight font-heading", fallbackTextColor)}>GolfOps</span>
      ) : (
        <img
          src={assetMode === "svg" ? logoAsset.svg : logoAsset.png}
          alt="GolfOps - Run Smarter Golf Events"
          width={dimensions.width}
          height={dimensions.height}
          className={cn(
            "block h-auto w-auto object-contain",
            size === "nav" && "max-h-10 sm:max-h-11",
            size === "footer" && "max-h-14 sm:max-h-16",
            size === "mobile" && "max-h-10",
            resolvedVariant === "white" && "drop-shadow-[0_0_10px_rgba(132,204,22,0.28)]"
          )}
          style={{ maxHeight: dimensions.maxHeight }}
          loading="eager"
          decoding="async"
          onError={() => setAssetMode((current) => (current === "svg" ? "png" : "fallback"))}
        />
      )}
    </Link>
  );
}

/**
 * Logo Mark Component - Icon only version
 */
export function LogoMark({
  className,
  variant = "primary",
  size = 48,
}: {
  className?: string;
  variant?: "primary" | "white" | "solid";
  size?: number;
}) {
  // Default to PNG for better compatibility across browsers
  const [assetMode, setAssetMode] = useState<"svg" | "png" | "fallback">("png");
  const asset = variant === "white"
    ? logoPaths.mark.white
    : variant === "solid"
      ? logoPaths.mark.solid
      : logoPaths.mark.primary;
  const fallbackColor = variant === "white" ? "bg-white" : "bg-forest";

  useEffect(() => {
    // Use PNG for reliability
    setAssetMode("png");
  }, [variant, size]);

  return (
    <div className={cn("inline-flex shrink-0 items-center", className)}>
      {assetMode === "fallback" ? (
        <span
          aria-label="GolfOps"
          className={cn("inline-block rounded-full", fallbackColor)}
          style={{ width: size, height: size }}
        />
      ) : (
        <img
          src={assetMode === "svg" ? asset.svg : asset.png}
          alt="GolfOps"
          width={size}
          height={size}
          className="h-auto w-auto object-contain"
          loading="eager"
          decoding="async"
          onError={() => setAssetMode((current) => (current === "svg" ? "png" : "fallback"))}
        />
      )}
    </div>
  );
}
