"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface CircularProgressProps {
  value: number;
  max: number;
  size?: number;
  strokeWidth?: number;
  label?: string;
  color?: string;
}

export function CircularProgress({
  value,
  max,
  size = 120,
  strokeWidth = 12,
  label,
  color = "#84CC16", // lime
}: CircularProgressProps) {
  const percentage = Math.round((value / max) * 100);
  const data = [
    { value: value, color: color },
    { value: max - value, color: "#F5F5F4" }, // mist color
  ];

  return (
    <div className="relative inline-flex items-center justify-center">
      <ResponsiveContainer width={size} height={size}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            startAngle={90}
            endAngle={-270}
            innerRadius={size / 2 - strokeWidth}
            outerRadius={size / 2}
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-charcoal font-heading">
          {percentage}%
        </span>
        {label && (
          <span className="text-xs text-slate mt-0.5">{label}</span>
        )}
      </div>
    </div>
  );
}
