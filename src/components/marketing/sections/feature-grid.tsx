import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureGridItem {
  icon: LucideIcon;
  title: string;
  description: string;
  detail?: string;
  accentClassName?: string;
}

interface FeatureGridProps {
  items: FeatureGridItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}

const columnsMap: Record<NonNullable<FeatureGridProps["columns"]>, string> = {
  2: "grid sm:grid-cols-2 gap-6",
  3: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
  4: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6",
};

export function FeatureGrid({ items, columns = 3, className }: FeatureGridProps) {
  return (
    <div className={cn(columnsMap[columns], className)}>
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <article
            key={item.title}
            className="group rounded-[var(--radius-md)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-6 transition-all hover:border-lime/30 hover:shadow-glow-lime"
          >
            <div
              className={cn(
                "mb-4 flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] bg-lime/10 text-lime",
                item.accentClassName
              )}
            >
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold font-heading text-[var(--color-text-primary)]">
              {item.title}
            </h3>
            <p className="mt-2 text-sm font-medium text-lime">{item.description}</p>
            {item.detail ? (
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {item.detail}
              </p>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
