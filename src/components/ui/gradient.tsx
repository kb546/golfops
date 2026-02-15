import { type ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GradientBoxProps {
  children: ReactNode;
  variant?: "primary" | "subtle" | "darkBrand" | "accentGlow" | "soft" | "dark";
  className?: string;
  as?: ElementType;
}

/**
 * GradientBox - Apply logo-based gradients to any element
 *
 * Variants:
 * - primary: Lime to mint gradient (from logo)
 * - subtle: Mint to green gradient
 * - darkBrand: Dark forest gradient
 * - accentGlow: Accent glow for hovers
 * - soft: Soft background gradient
 * - dark: Dark section gradient
 */
export function GradientBox({
  children,
  variant = "primary",
  className,
  as: Component = "div",
}: GradientBoxProps) {
  const gradientClasses = {
    primary: "bg-gradient-primary",
    subtle: "bg-gradient-subtle",
    darkBrand: "bg-gradient-brand",
    accentGlow: "bg-gradient-glow",
    soft: "bg-gradient-soft",
    dark: "bg-gradient-dark",
  };

  return (
    <Component className={cn(gradientClasses[variant], className)}>
      {children}
    </Component>
  );
}

interface GradientTextProps {
  children: ReactNode;
  variant?: "primary" | "subtle";
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

/**
 * GradientText - Apply gradient to text
 *
 * Use sparingly for maximum impact (10% rule)
 * Great for headlines and key phrases
 */
export function GradientText({
  children,
  variant = "primary",
  className,
  as: Component = "span",
}: GradientTextProps) {
  const gradientClass = variant === "primary" ? "text-gradient" : "text-gradient-subtle";

  return (
    <Component className={cn(gradientClass, className)}>
      {children}
    </Component>
  );
}

interface GradientBorderProps {
  children: ReactNode;
  variant?: "primary" | "subtle" | "accentGlow";
  borderWidth?: number;
  className?: string;
  rounded?: "sm" | "md" | "lg" | "xl" | "full";
}

/**
 * GradientBorder - Card/element with gradient border
 *
 * Perfect for highlighting cards and interactive elements
 */
export function GradientBorder({
  children,
  variant = "primary",
  borderWidth = 2,
  className,
  rounded = "md",
}: GradientBorderProps) {
  const gradientStyles = {
    primary: "bg-gradient-primary",
    subtle: "bg-gradient-subtle",
    accentGlow: "bg-gradient-glow",
  };

  const roundedClasses = {
    sm: "rounded-[var(--radius-sm)]",
    md: "rounded-[var(--radius-md)]",
    lg: "rounded-[var(--radius-lg)]",
    xl: "rounded-[var(--radius-xl)]",
    full: "rounded-full",
  };

  return (
    <div
      className={cn(
        "p-[2px]",
        gradientStyles[variant],
        roundedClasses[rounded],
        className
      )}
      style={{ padding: `${borderWidth}px` }}
    >
      <div className={cn("h-full w-full bg-white", roundedClasses[rounded])}>
        {children}
      </div>
    </div>
  );
}

interface GradientOverlayProps {
  direction?: "top" | "bottom" | "left" | "right";
  color?: string;
  opacity?: number;
  className?: string;
}

/**
 * GradientOverlay - Subtle gradient overlay
 *
 * Use for image overlays or section transitions
 */
export function GradientOverlay({
  direction = "bottom",
  color = "#FFFFFF",
  opacity = 100,
  className,
}: GradientOverlayProps) {
  const directions = {
    top: "to bottom",
    bottom: "to top",
    left: "to right",
    right: "to left",
  };

  return (
    <div
      className={cn("absolute inset-0 pointer-events-none", className)}
      style={{
        background: `linear-gradient(${directions[direction]}, ${color} 0%, transparent ${opacity}%)`,
      }}
    />
  );
}

/**
 * Section component with alternating backgrounds (60% neutral foundation)
 */
interface SectionProps {
  children: ReactNode;
  background?: "white" | "cloud" | "mist" | "gradient" | "dark";
  className?: string;
  padding?: boolean;
}

export function Section({
  children,
  background = "white",
  className,
  padding = true,
}: SectionProps) {
  const backgrounds = {
    white: "bg-white",
    cloud: "bg-cloud",
    mist: "bg-mist",
    gradient: "bg-gradient-soft",
    dark: "bg-charcoal text-white",
  };

  return (
    <section
      className={cn(
        backgrounds[background],
        padding && "section-padding",
        className
      )}
    >
      {children}
    </section>
  );
}
