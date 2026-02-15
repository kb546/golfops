import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-12 px-4 text-center",
        className
      )}
    >
      {Icon && (
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-mist text-slate">
          <Icon className="h-8 w-8" />
        </div>
      )}
      <h3 className="mb-2 text-lg font-semibold text-charcoal font-heading">
        {title}
      </h3>
      <p className="mb-6 max-w-md text-sm text-slate leading-relaxed">
        {description}
      </p>
      {action && (
        <button
          onClick={action.onClick}
          className="rounded-[var(--radius-sm)] bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-forest-deep shadow-glow-lime hover:shadow-glow-lime-hover transition-all"
        >
          {action.label}
        </button>
      )}
    </div>
  );
}
