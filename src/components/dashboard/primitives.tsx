import { cn } from "@/lib/utils";

export function DashboardPageTitle({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-col gap-4 md:mb-8 md:flex-row md:items-end md:justify-between">
      <div>
        <h1 className="text-3xl font-bold text-charcoal font-heading">{title}</h1>
        <p className="mt-1 text-sm text-slate">{subtitle}</p>
      </div>
      {action ? <div>{action}</div> : null}
    </div>
  );
}

export function Panel({
  title,
  subtitle,
  children,
  className,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("rounded-[var(--radius-md)] border border-gray/10 bg-white p-5 shadow-soft", className)}>
      <div className="mb-4">
        <h2 className="text-base font-semibold text-charcoal">{title}</h2>
        {subtitle ? <p className="text-xs text-slate mt-0.5">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}

export function MetricCard({
  label,
  value,
  delta,
  trend,
}: {
  label: string;
  value: string;
  delta: string;
  trend: "up" | "down" | "flat";
}) {
  const tone = trend === "up" ? "text-success" : trend === "down" ? "text-error" : "text-slate";
  return (
    <article className="rounded-[var(--radius-md)] border border-gray/10 bg-white p-5 shadow-soft">
      <p className="text-xs font-medium uppercase tracking-[0.12em] text-slate">{label}</p>
      <p className="mt-2 text-3xl font-bold text-charcoal font-heading">{value}</p>
      <p className={cn("mt-2 text-sm font-medium", tone)}>{delta}</p>
    </article>
  );
}

export function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-2 w-full rounded-full bg-mist">
      <div
        className="h-2 rounded-full bg-gradient-primary"
        style={{ width: `${Math.max(2, Math.min(100, value))}%` }}
      />
    </div>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const style =
    status === "Live" || status === "Sent"
      ? "bg-green/15 text-green-accent border-green/30"
      : status === "Upcoming" || status === "Scheduled"
        ? "bg-info/12 text-info border-info/25"
        : status === "Draft"
          ? "bg-warning/12 text-warning border-warning/25"
          : "bg-mist text-slate border-gray/20";

  return (
    <span className={cn("inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold", style)}>
      {status}
    </span>
  );
}
