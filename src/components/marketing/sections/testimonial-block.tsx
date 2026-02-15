import { cn } from "@/lib/utils";

interface TestimonialBlockProps {
  quote: string;
  author: string;
  role: string;
  org?: string;
  className?: string;
}

export function TestimonialBlock({
  quote,
  author,
  role,
  org,
  className,
}: TestimonialBlockProps) {
  return (
    <figure
      className={cn(
        "rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-8 shadow-card",
        className
      )}
    >
      <blockquote className="text-lg leading-relaxed text-[var(--color-text-primary)] md:text-xl">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6">
        <p className="text-sm font-semibold text-lime">{author}</p>
        <p className="text-sm text-[var(--color-text-secondary)]">
          {role}
          {org ? `, ${org}` : ""}
        </p>
      </figcaption>
    </figure>
  );
}
