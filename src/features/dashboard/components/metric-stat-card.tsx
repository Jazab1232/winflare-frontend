"use client";

import * as React from "react";
import { Search, Check, MessageSquare, Inbox, Crown, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { MetricStat, ColorTheme } from "../types";

interface MetricStatCardProps {
  stat: MetricStat;
}

const THEME_CONFIG: Record<
  ColorTheme,
  {
    iconBg: string;
    iconColor: string;
    strokeColor: string;
    gradientFrom: string;
  }
> = {
  purple: {
    iconBg: "bg-indigo-50",
    iconColor: "text-[#5B5AF7]",
    strokeColor: "#5B5AF7",
    gradientFrom: "#5B5AF7",
  },
  green: {
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-500",
    strokeColor: "#10B981",
    gradientFrom: "#10B981",
  },
  blue: {
    iconBg: "bg-sky-50",
    iconColor: "text-sky-500",
    strokeColor: "#0EA5E9",
    gradientFrom: "#0EA5E9",
  },
  pink: {
    iconBg: "bg-fuchsia-50",
    iconColor: "text-fuchsia-500",
    strokeColor: "#D946EF",
    gradientFrom: "#D946EF",
  },
  amber: {
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
    strokeColor: "#F59E0B",
    gradientFrom: "#F59E0B",
  },
  teal: {
    iconBg: "bg-teal-50",
    iconColor: "text-teal-500",
    strokeColor: "#14B8A6",
    gradientFrom: "#14B8A6",
  },
};

function getIcon(name: MetricStat["iconName"]) {
  switch (name) {
    case "Search":
      return Search;
    case "Check":
      return Check;
    case "MessageSquare":
      return MessageSquare;
    case "Inbox":
      return Inbox;
    case "Crown":
      return Crown;
    default:
      return Search;
  }
}

// Generate smooth SVG path from numerical data
function createSvgPath(points: number[], width = 90, height = 30): string {
  if (!points.length) return "";
  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min || 1;

  const stepX = width / (points.length - 1);
  const coords = points.map((val, idx) => {
    const x = idx * stepX;
    const y = height - ((val - min) / range) * (height - 6) - 3;
    return { x, y };
  });

  return coords.reduce((acc, point, i, arr) => {
    if (i === 0) return `M ${point.x},${point.y}`;
    const prev = arr[i - 1];
    const cpX1 = prev.x + (point.x - prev.x) / 2;
    const cpX2 = cpX1;
    return `${acc} C ${cpX1},${prev.y} ${cpX2},${point.y} ${point.x},${point.y}`;
  }, "");
}

export function MetricStatCard({ stat }: MetricStatCardProps) {
  const IconComponent = getIcon(stat.iconName);
  const config = THEME_CONFIG[stat.theme] || THEME_CONFIG.purple;
  const pathD = createSvgPath(stat.sparkline);

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all hover:shadow-md hover:border-slate-300 select-none">
      {/* Top row: Icon and Title */}
      <div className="flex items-center gap-2.5">
        <div
          className={cn(
            "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg shadow-2xs",
            config.iconBg,
            config.iconColor
          )}
        >
          <IconComponent className="h-4 w-4" />
        </div>
        <span className="text-xs font-medium text-slate-700 truncate">
          {stat.title}
        </span>
      </div>

      {/* Bottom row: Value, Trend and Sparkline */}
      <div className="flex items-end justify-between mt-3">
        <div className="flex flex-col">
          <div className="text-2xl font-bold tracking-tight text-slate-900">
            {stat.value}
          </div>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="flex items-center text-[11px] font-semibold text-emerald-600">
              <span className="mr-0.5">↑</span>
              {stat.changePercent}
            </span>
            <span className="text-[10px] text-slate-400 font-normal">
              {stat.period}
            </span>
          </div>
        </div>

        {/* Mini Sparkline Chart */}
        <div className="w-[88px] h-[30px] flex items-center justify-end overflow-hidden pb-1">
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 90 30"
            preserveAspectRatio="none"
          >
            <path
              d={pathD}
              fill="none"
              stroke={config.strokeColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

