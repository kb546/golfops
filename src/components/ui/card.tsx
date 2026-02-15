import { ReactNode, HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Card Component - Logo-Driven Design System
 *
 * Variants:
 * - default: Clean white card with subtle shadow
 * - gradient-border: Card with logo gradient border
 * - hover-glow: Card with gradient glow on hover
 * - elevated: Card with stronger elevation
 */

const cardVariants = cva(
  "rounded-[var(--radius-md)] transition-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-[var(--color-surface)] border border-[var(--color-border-subtle)] shadow-card hover:shadow-elevated",
        elevated: "bg-[var(--color-surface)] shadow-elevated hover:shadow-modal",
        ghost: "bg-transparent border border-[var(--color-border-subtle)] hover:bg-[var(--color-bg-2)]",
        gradientBorder: "p-[2px] bg-gradient-primary",
        hoverGlow: "bg-[var(--color-surface)] border border-[var(--color-border-subtle)] shadow-card hover:shadow-glow-lime hover:border-lime/20",
      },
      padding: {
        none: "",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
        xl: "p-10",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "md",
    },
  }
);

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  children: ReactNode;
}

export function Card({
  className,
  variant,
  padding,
  children,
  ...props
}: CardProps) {
  // Special handling for gradient border variant
  if (variant === "gradientBorder") {
    return (
      <div className={cn(cardVariants({ variant: "gradientBorder" }), className)} {...props}>
        <div className={cn("h-full w-full bg-[var(--color-surface)] rounded-[var(--radius-md)]", padding === "sm" && "p-4", padding === "md" && "p-6", padding === "lg" && "p-8", padding === "xl" && "p-10")}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(cardVariants({ variant, padding }), className)}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * Card Header - For card titles and descriptions
 */
export function CardHeader({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mb-4", className)} {...props}>
      {children}
    </div>
  );
}

/**
 * Card Title
 */
export function CardTitle({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-xl font-bold text-[var(--color-text-primary)] font-heading", className)}
      {...props}
    >
      {children}
    </h3>
  );
}

/**
 * Card Description
 */
export function CardDescription({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-sm text-[var(--color-text-secondary)] mt-2", className)} {...props}>
      {children}
    </p>
  );
}

/**
 * Card Content - Main content area
 */
export function CardContent({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  );
}

/**
 * Card Footer - For actions or metadata
 */
export function CardFooter({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mt-6 pt-4 border-t border-[var(--color-border-subtle)]", className)} {...props}>
      {children}
    </div>
  );
}

/**
 * Feature Card - Pre-styled card for features section
 */
export function FeatureCard({
  icon,
  title,
  description,
  className,
  ...props
}: {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <Card variant="hoverGlow" className={cn("group", className)} {...props}>
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-[var(--radius-sm)] bg-gradient-primary mb-4 group-hover:shadow-glow-lime transition-all">
        <div className="text-forest-deep">{icon}</div>
      </div>
      <CardTitle className="mb-2">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </Card>
  );
}

/**
 * Stat Card - For displaying statistics
 */
export function StatCard({
  label,
  value,
  trend,
  icon,
  className,
  ...props
}: {
  label: string;
  value: string | number;
  trend?: "up" | "down" | "neutral";
  icon?: ReactNode;
  className?: string;
}) {
  const trendColors = {
    up: "text-success",
    down: "text-error",
    neutral: "text-gray",
  };

  return (
    <Card variant="elevated" className={cn("", className)} {...props}>
      <div className="flex items-start justify-between mb-2">
        <p className="text-sm text-[var(--color-text-secondary)] font-medium">{label}</p>
        {icon && <div className="text-lime">{icon}</div>}
      </div>
      <p className="text-3xl font-extrabold text-[var(--color-text-primary)] font-heading">
        {value}
      </p>
      {trend && (
        <p className={cn("text-xs mt-2", trendColors[trend])}>
          {trend === "up" && "↑ Increasing"}
          {trend === "down" && "↓ Decreasing"}
          {trend === "neutral" && "→ Stable"}
        </p>
      )}
    </Card>
  );
}
