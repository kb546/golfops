/**
 * GolfOps UI Component Library
 *
 * Centralized exports for all UI components
 * Based on logo-driven 60-30-10 design system
 */

// Button components
export { Button, buttonVariants } from "./button";
export type { ButtonProps } from "./button";

// Card components
export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  FeatureCard,
  StatCard,
} from "./card";
export type { CardProps } from "./card";

// Badge components
export {
  Badge,
  PulseBadge,
  CountBadge,
  CategoryBadge,
} from "./badge";
export type { BadgeProps } from "./badge";

// Gradient utilities
export {
  GradientBox,
  GradientText,
  GradientBorder,
  GradientOverlay,
  Section,
} from "./gradient";

// Week 2: Premium Components
export { TestimonialCard } from "./testimonial-card";
export type { TestimonialCardProps } from "./testimonial-card";

export { StatCounter } from "./stat-counter";
export type { StatCounterProps } from "./stat-counter";

export { LogoCloud } from "./logo-cloud";
export type { LogoCloudProps, Logo } from "./logo-cloud";
