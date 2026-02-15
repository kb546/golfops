"use client";

import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

interface DataPoint {
  name: string;
  value: number;
  [key: string]: string | number;
}

interface BarChartProps {
  data: DataPoint[];
  dataKey?: string;
  xAxisKey?: string;
  height?: number;
  color?: string;
  colors?: string[];
  showGrid?: boolean;
  showTooltip?: boolean;
  horizontal?: boolean;
}

const COLORS = ["#84CC16", "#10B981", "#3B82F6", "#F59E0B", "#8B5CF6"];

export function BarChart({
  data,
  dataKey = "value",
  xAxisKey = "name",
  height = 300,
  color = "#84CC16", // lime
  colors,
  showGrid = true,
  showTooltip = true,
  horizontal = false,
}: BarChartProps) {
  const chartColors = colors || COLORS;

  if (horizontal) {
    return (
      <ResponsiveContainer width="100%" height={height}>
        <RechartsBarChart
          data={data}
          layout="vertical"
          margin={{ top: 10, right: 30, left: 20, bottom: 0 }}
        >
          {showGrid && (
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e4" opacity={0.5} />
          )}
          <XAxis type="number" tick={{ fill: "#64748b", fontSize: 12 }} />
          <YAxis
            dataKey={xAxisKey}
            type="category"
            tick={{ fill: "#64748b", fontSize: 12 }}
            width={100}
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
            />
          )}
          <Bar dataKey={dataKey} radius={[0, 4, 4, 0]}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={chartColors[index % chartColors.length]}
              />
            ))}
          </Bar>
        </RechartsBarChart>
      </ResponsiveContainer>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsBarChart
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
          />
        )}
        <Bar dataKey={dataKey} radius={[4, 4, 0, 0]}>
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={chartColors[index % chartColors.length]}
            />
          ))}
        </Bar>
      </RechartsBarChart>
    </ResponsiveContainer>
  );
}
