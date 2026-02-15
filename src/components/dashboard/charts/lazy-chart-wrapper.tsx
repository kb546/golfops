"use client";

import { Suspense, lazy } from "react";
import { Skeleton } from "../skeleton-loader";

// Lazy load chart components for better performance
const CircularProgressLazy = lazy(() =>
  import("./circular-progress").then((mod) => ({
    default: mod.CircularProgress,
  }))
);

const AreaChartLazy = lazy(() =>
  import("./area-chart").then((mod) => ({ default: mod.AreaChart }))
);

const BarChartLazy = lazy(() =>
  import("./bar-chart").then((mod) => ({ default: mod.BarChart }))
);

const DonutChartLazy = lazy(() =>
  import("./donut-chart").then((mod) => ({ default: mod.DonutChart }))
);

// Wrapper components with loading states
export function CircularProgressWithLoader(
  props: React.ComponentProps<typeof CircularProgressLazy>
) {
  return (
    <Suspense fallback={<Skeleton className="h-40 w-40 rounded-full mx-auto" />}>
      <CircularProgressLazy {...props} />
    </Suspense>
  );
}

export function AreaChartWithLoader(
  props: React.ComponentProps<typeof AreaChartLazy>
) {
  return (
    <Suspense fallback={<Skeleton className={`h-[${props.height || 280}px] w-full`} />}>
      <AreaChartLazy {...props} />
    </Suspense>
  );
}

export function BarChartWithLoader(
  props: React.ComponentProps<typeof BarChartLazy>
) {
  return (
    <Suspense fallback={<Skeleton className={`h-[${props.height || 280}px] w-full`} />}>
      <BarChartLazy {...props} />
    </Suspense>
  );
}

export function DonutChartWithLoader(
  props: React.ComponentProps<typeof DonutChartLazy>
) {
  return (
    <Suspense fallback={<Skeleton className={`h-[${props.height || 250}px] w-full`} />}>
      <DonutChartLazy {...props} />
    </Suspense>
  );
}
