import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-shimmer rounded-[var(--radius-md)] bg-gradient-to-r from-mist via-gray/10 to-mist",
        className
      )}
    />
  );
}

export function SkeletonCard() {
  return (
    <div className="rounded-[var(--radius-lg)] border border-gray/10 bg-white p-5 shadow-soft">
      <div className="flex items-start justify-between mb-4">
        <div className="space-y-2 flex-1">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-6 w-32" />
        </div>
        <Skeleton className="h-10 w-10 rounded-full" />
      </div>
      <div className="space-y-3">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-4/5" />
        <Skeleton className="h-3 w-3/4" />
      </div>
    </div>
  );
}

export function SkeletonMetricCard() {
  return (
    <div className="rounded-[var(--radius-lg)] border border-gray/10 bg-white p-5 shadow-soft">
      <div className="flex items-start justify-between mb-4">
        <Skeleton className="h-10 w-10 rounded-[var(--radius-sm)]" />
        <Skeleton className="h-6 w-6 rounded-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-8 w-28" />
        <Skeleton className="h-3 w-24" />
      </div>
    </div>
  );
}

export function SkeletonChart() {
  return (
    <div className="rounded-[var(--radius-lg)] border border-gray/10 bg-white p-6 shadow-soft">
      <div className="mb-4 space-y-2">
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-3 w-48" />
      </div>
      <Skeleton className="h-64 w-full rounded-[var(--radius-md)]" />
    </div>
  );
}

export function SkeletonTable() {
  return (
    <div className="rounded-[var(--radius-lg)] border border-gray/10 bg-white p-6 shadow-soft">
      <div className="mb-4">
        <Skeleton className="h-5 w-32" />
      </div>
      <div className="space-y-3">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center gap-4">
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-4 w-1/4" />
          </div>
        ))}
      </div>
    </div>
  );
}
