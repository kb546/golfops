import { ReactNode, HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Badge Component - Logo-Driven Design System
 *
 * Small labels for status, categories, or highlights
 * Uses logo colors strategically for brand consistency
 */

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full font-medium transition-all",
  {
    variants: {
      variant: {
        // Primary: Logo gradient (use sparingly for premium features)
        gradient: "bg-gradient-primary text-forest-deep shadow-glow-lime",

        // Brand colors (30%)
        forest: "bg-forest text-white",
        emerald: "bg-emerald text-white",

        // Accent colors (10%)
        lime: "bg-lime/10 text-lime border border-lime/20",
        mint: "bg-mint-fresh/10 text-green-accent border border-mint-fresh/20",
        green: "bg-green/10 text-green-accent border border-green/20",

        // Premium gold variants
        gold: "bg-gradient-gold text-[var(--color-bg-0)] shadow-lg shadow-gold/30 font-semibold", // Solid gold gradient with glow
        "gold-outline": "bg-gold/10 text-gold border border-gold/40 shadow-sm", // Outline version

        // Neutral (60%)
        default: "bg-mist text-slate border border-gray/10",
        outline: "border border-gray/30 text-slate bg-transparent",

        // Status colors
        success: "bg-success/10 text-success border border-success/20",
        warning: "bg-warning/10 text-warning border border-warning/20",
        error: "bg-error/10 text-error border border-error/20",
        info: "bg-info/10 text-info border border-info/20",
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        md: "px-3 py-1 text-sm",
        lg: "px-4 py-1.5 text-base",
      },
      interactive: {
        true: "cursor-pointer hover:opacity-80 active:scale-95",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      interactive: false,
    },
  }
);

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  children: ReactNode;
  icon?: ReactNode;
  onRemove?: () => void;
}

export function Badge({
  className,
  variant,
  size,
  interactive,
  children,
  icon,
  onRemove,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        badgeVariants({ variant, size, interactive: interactive || !!onRemove }),
        className
      )}
      {...props}
    >
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {onRemove && (
        <button
          onClick={onRemove}
          className="inline-flex shrink-0 hover:opacity-70 transition-opacity"
          aria-label="Remove"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M9 3L3 9M3 3l6 6" />
          </svg>
        </button>
      )}
    </span>
  );
}

/**
 * Pulse Badge - Animated badge for live/active states
 */
export function PulseBadge({
  children,
  variant = "mint",
  size = "md",
  className,
  ...props
}: BadgeProps) {
  return (
    <Badge
      variant={variant}
      size={size}
      className={cn("relative", className)}
      {...props}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-current" />
      </span>
      {children}
    </Badge>
  );
}

/**
 * Count Badge - For notification counts
 */
export function CountBadge({
  count,
  max = 99,
  variant = "gradient",
  size = "sm",
  className,
  ...props
}: {
  count: number;
  max?: number;
  variant?: BadgeProps["variant"];
  size?: BadgeProps["size"];
  className?: string;
}) {
  const displayCount = count > max ? `${max}+` : count;

  return (
    <Badge
      variant={variant}
      size={size}
      className={cn("min-w-[20px] justify-center", className)}
      {...props}
    >
      {displayCount}
    </Badge>
  );
}

/**
 * Category Badge - Pre-styled for categories/tags
 */
export function CategoryBadge({
  children,
  color = "default",
  className,
  ...props
}: {
  children: ReactNode;
  color?: "default" | "lime" | "mint" | "green" | "gold";
  className?: string;
}) {
  return (
    <Badge
      variant={color}
      size="sm"
      interactive
      className={cn("", className)}
      {...props}
    >
      {children}
    </Badge>
  );
}
