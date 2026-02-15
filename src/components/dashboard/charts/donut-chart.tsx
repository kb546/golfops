"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

interface DataPoint {
  name: string;
  value: number;
  color?: string;
}

interface DonutChartProps {
  data: DataPoint[];
  height?: number;
  innerRadius?: number;
  outerRadius?: number;
  showLegend?: boolean;
  showTooltip?: boolean;
  colors?: string[];
}

const DEFAULT_COLORS = ["#84CC16", "#10B981", "#3B82F6", "#F59E0B", "#8B5CF6"];

export function DonutChart({
  data,
  height = 250,
  innerRadius = 60,
  outerRadius = 90,
  showLegend = true,
  showTooltip = true,
  colors = DEFAULT_COLORS,
}: DonutChartProps) {
  // Use custom colors from data if provided, otherwise use default colors
  const enrichedData = data.map((item, index) => ({
    ...item,
    fill: item.color || colors[index % colors.length],
  }));

  const renderLegend = (props: any) => {
    const { payload } = props;
    return (
      <div className="flex flex-col gap-2 mt-4">
        {payload.map((entry: any, index: number) => (
          <div key={`legend-${index}`} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-sm"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-xs text-slate">
              {entry.value}: {entry.payload.value.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={height}>
      <PieChart>
        {showTooltip && (
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #e5e5e4",
              borderRadius: "8px",
              padding: "8px 12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
            formatter={(value) => value ? value.toLocaleString() : "0"}
          />
        )}
        <Pie
          data={enrichedData}
          cx="50%"
          cy="50%"
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          paddingAngle={2}
          dataKey="value"
        >
          {enrichedData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Pie>
        {showLegend && <Legend content={renderLegend} />}
      </PieChart>
    </ResponsiveContainer>
  );
}
