import { cn } from "@/lib/utils";

interface HeadlineBlockProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function HeadlineBlock({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: HeadlineBlockProps) {
  const isCentered = align === "center";

  return (
    <div
      className={cn(
        "space-y-4",
        isCentered ? "mx-auto max-w-3xl text-center" : "max-w-3xl text-left",
        className
      )}
    >
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-wider text-lime">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold font-heading text-[var(--color-text-primary)] md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="text-base leading-relaxed text-[var(--color-text-secondary)] md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
