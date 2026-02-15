import { forwardRef, ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Button Component - Logo-Driven Design System
 *
 * Variants follow 60-30-10 rule:
 * - Primary (10% accent): Gradient button with logo colors
 * - Secondary (30% brand): Forest green with white text
 * - Tertiary: Outline style
 * - Ghost: Transparent with hover effects
 */

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-0)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Primary: Logo gradient (10% accent - use for main CTAs)
        primary:
          "bg-gradient-primary text-white shadow-glow-lime hover:shadow-glow-lime-hover hover:scale-[1.02] active:scale-100",

        // Secondary: Brand forest (30% brand identity)
        secondary:
          "bg-forest text-white shadow-card hover:bg-forest-deep hover:shadow-elevated hover:scale-[1.02] active:scale-100",

        // Tertiary: Outline with brand colors
        tertiary:
          "border-2 border-lime/40 text-lime bg-transparent hover:bg-lime/10 hover:border-lime hover:scale-[1.02] active:scale-100",

        // Ghost: Transparent with lime accent hover
        ghost:
          "bg-transparent text-[var(--color-text-primary)] hover:bg-lime/10 hover:text-lime transition-colors",

        // Outline: Transparent with light border (for dark sections)
        outline:
          "border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/40 hover:shadow-lg hover:shadow-white/10",

        // Danger: Error state
        danger:
          "bg-error text-white shadow-card hover:bg-error/90 hover:shadow-elevated hover:scale-[1.02] active:scale-100",

        // Success: Success state
        success:
          "bg-success text-white shadow-card hover:bg-success/90 hover:shadow-elevated hover:scale-[1.02] active:scale-100",

        // Link: Text-only button
        link: "text-lime underline-offset-4 hover:underline hover:text-green-accent",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
        xl: "px-10 py-5 text-xl",
        icon: "h-10 w-10 p-0",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
