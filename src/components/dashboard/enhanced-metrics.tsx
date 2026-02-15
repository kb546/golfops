"use client";

import { CircularProgress, BarChart } from "./charts";
import { TrendingUp, TrendingDown, Minus, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface CircularMetricCardProps {
  label: string;
  value: number;
  max: number;
  color?: string;
  subtitle?: string;
}

export function CircularMetricCard({
  label,
  value,
  max,
  color = "#84CC16",
  subtitle,
}: CircularMetricCardProps) {
  return (
    <article className="rounded-[var(--radius-lg)] border border-gray/10 bg-white p-6 shadow-soft hover:shadow-card transition-all duration-300">
      <p className="text-sm font-semibold text-charcoal mb-4">{label}</p>
      <div className="flex items-center justify-between">
        <CircularProgress value={value} max={max} color={color} size={100} />
        <div className="text-right">
          <p className="text-2xl font-bold text-charcoal font-heading">
            {value.toLocaleString()}
          </p>
          <p className="text-sm text-slate">of {max.toLocaleString()}</p>
          {subtitle && (
            <p className="text-xs text-slate mt-1">{subtitle}</p>
          )}
        </div>
      </div>
    </article>
  );
}

interface BarMetricCardProps {
  label: string;
  data: Array<{ name: string; value: number }>;
  color?: string;
  height?: number;
}

export function BarMetricCard({
  label,
  data,
  color = "#84CC16",
  height = 150,
}: BarMetricCardProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <article className="rounded-[var(--radius-lg)] border border-gray/10 bg-white p-6 shadow-soft hover:shadow-card transition-all duration-300">
      <div className="flex items-baseline justify-between mb-4">
        <p className="text-sm font-semibold text-charcoal">{label}</p>
        <p className="text-2xl font-bold text-charcoal font-heading">
          {total.toLocaleString()}
        </p>
      </div>
      <BarChart
        data={data}
        height={height}
        color={color}
        showGrid={false}
        showTooltip={false}
      />
    </article>
  );
}

interface CountdownCardProps {
  label: string;
  days: number;
  subtitle: string;
  progress?: number;
}

export function CountdownCard({
  label,
  days,
  subtitle,
  progress = 75,
}: CountdownCardProps) {
  return (
    <article className="rounded-[var(--radius-lg)] border border-gray/10 bg-gradient-to-br from-lime/5 to-emerald/5 p-6 shadow-soft hover:shadow-card transition-all duration-300 border-lime/20">
      <p className="text-sm font-semibold text-charcoal mb-2">{label}</p>
      <div className="flex items-center gap-3 mb-4">
        <Clock className="w-8 h-8 text-lime" />
        <div>
          <p className="text-4xl font-bold text-lime font-heading">{days}</p>
          <p className="text-xs text-slate">days remaining</p>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-xs">
          <span className="text-slate">{subtitle}</span>
          <span className="font-semibold text-charcoal">{progress}%</span>
        </div>
        <div className="h-2 w-full rounded-full bg-white/50">
          <div
            className="h-2 rounded-full bg-gradient-primary"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </article>
  );
}

interface TrendMetricCardProps {
  label: string;
  value: string;
  trend: "up" | "down" | "flat";
  delta: string;
  icon?: React.ReactNode;
}

export function TrendMetricCard({
  label,
  value,
  trend,
  delta,
  icon,
}: TrendMetricCardProps) {
  const trendColor =
    trend === "up"
      ? "text-success"
      : trend === "down"
        ? "text-error"
        : "text-slate";

  const TrendIcon =
    trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : Minus;

  return (
    <article className="rounded-[var(--radius-lg)] border border-gray/10 bg-white p-6 shadow-soft hover:shadow-card transition-all duration-300">
      <div className="flex items-start justify-between mb-3">
        <p className="text-sm font-semibold text-slate">{label}</p>
        {icon && <div className="text-lime">{icon}</div>}
      </div>
      <p className="text-3xl font-bold text-charcoal font-heading mb-3">
        {value}
      </p>
      <div className={cn("flex items-center gap-1 text-sm font-medium", trendColor)}>
        <TrendIcon className="w-4 h-4" />
        <span>{delta}</span>
      </div>
    </article>
  );
}
