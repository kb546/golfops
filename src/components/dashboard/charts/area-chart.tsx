"use client";

import {
  AreaChart as RechartsAreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface DataPoint {
  name: string;
  value: number;
  [key: string]: string | number;
}

interface AreaChartProps {
  data: DataPoint[];
  dataKey: string;
  xAxisKey?: string;
  height?: number;
  color?: string;
  showGrid?: boolean;
  showTooltip?: boolean;
}

export function AreaChart({
  data,
  dataKey,
  xAxisKey = "name",
  height = 300,
  color = "#84CC16", // lime
  showGrid = true,
  showTooltip = true,
}: AreaChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsAreaChart
        data={data}
        margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
      >
        {showGrid && (
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e4" opacity={0.5} />
        )}
        <XAxis
          dataKey={xAxisKey}
          tick={{ fill: "#64748b", fontSize: 12 }}
          axisLine={{ stroke: "#e5e5e4" }}
        />
        <YAxis
          tick={{ fill: "#64748b", fontSize: 12 }}
          axisLine={{ stroke: "#e5e5e4" }}
          tickFormatter={(value) => `$${value.toLocaleString()}`}
        />
        {showTooltip && (
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #e5e5e4",
              borderRadius: "8px",
              padding: "8px 12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
            labelStyle={{ color: "#0f172a", fontWeight: 600, marginBottom: 4 }}
            itemStyle={{ color: "#64748b", fontSize: 14 }}
            formatter={(value) => value ? [`$${value.toLocaleString()}`, "Revenue"] : ["$0", "Revenue"]}
          />
        )}
        <defs>
          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.3} />
            <stop offset="95%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey={dataKey}
          stroke={color}
          strokeWidth={2}
          fill="url(#colorValue)"
        />
      </RechartsAreaChart>
    </ResponsiveContainer>
  );
}
