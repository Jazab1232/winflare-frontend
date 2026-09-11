"use client";

import * as React from "react";
import { LucideIcon, ArrowUp, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type MetricCardTheme = "purple" | "blue" | "green" | "amber" | "teal" | "pink" | "indigo";

export interface MetricCardTrend {
  value: string;
  isPositive?: boolean;
  period?: string;
}

export interface MetricCardProps {
  id?: string;
  title: string;
  value: string | number;
  trend?: MetricCardTrend;
  icon: LucideIcon;
  theme?: MetricCardTheme;
  sparkline?: number[];
  onClick?: () => void;
  className?: string;
}

const THEME_STYLES: Record<
  MetricCardTheme,
  {
    iconBg: string;
    iconColor: string;
    strokeColor: string;
  }
> = {
  purple: {
    iconBg: "bg-indigo-50",
    iconColor: "text-[#5B5AF7]",
    strokeColor: "#5B5AF7",
  },
  blue: {
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
    strokeColor: "#0284C7",
  },
  green: {
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    strokeColor: "#10B981",
  },
  amber: {
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    strokeColor: "#F59E0B",
  },
  teal: {
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    strokeColor: "#14B8A6",
  },
  pink: {
    iconBg: "bg-fuchsia-50",
    iconColor: "text-fuchsia-600",
    strokeColor: "#D946EF",
  },
  indigo: {
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    strokeColor: "#4F46E5",
  },
};

/**
 * Generates a smooth cubic Bezier SVG path string from an array of numbers
 */
export function createSmoothSparkline(
  points?: number[],
  width = 84,
  height = 26
): string {
  if (!points || points.length < 2) return "";
  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min || 1;

  const coords = points.map((val, idx) => {
    const x = (idx / (points.length - 1)) * width;
    const y = height - ((val - min) / range) * (height - 6) - 3;
    return [x, y];
  });

  let path = `M ${coords[0][0]},${coords[0][1]}`;
  for (let i = 0; i < coords.length - 1; i++) {
    const p0 = coords[i === 0 ? 0 : i - 1];
    const p1 = coords[i];
    const p2 = coords[i + 1];
    const p3 = coords[i + 2] || p2;

    const cp1x = p1[0] + (p2[0] - p0[0]) / 6;
    const cp1y = p1[1] + (p2[1] - p0[1]) / 6;
    const cp2x = p2[0] - (p3[0] - p1[0]) / 6;
    const cp2y = p2[1] - (p3[1] - p1[1]) / 6;

    path += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${p2[0]},${p2[1]}`;
  }

  return path;
}

export function MetricCard({
  title,
  value,
  trend,
  icon: Icon,
  theme = "purple",
  sparkline,
  onClick,
  className,
}: MetricCardProps) {
  const styles = THEME_STYLES[theme] || THEME_STYLES.purple;
  const sparklinePath = sparkline ? createSmoothSparkline(sparkline) : "";
  const isPositive = trend?.isPositive !== false;

  return (
    <div
      onClick={onClick}
      className={cn(
        "relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-4 shadow-2xs transition-all select-none hover:shadow-xs hover:border-slate-300",
        onClick && "cursor-pointer active:scale-[0.99]",
        className
      )}
    >
      {/* Top row: Icon and Title */}
      <div className="flex items-center gap-2.5">
        <div
          className={cn(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl shadow-2xs",
            styles.iconBg,
            styles.iconColor
          )}
        >
          <Icon className="h-4 w-4" />
        </div>
        <span className="text-xs font-semibold text-slate-700 truncate">
          {title}
        </span>
      </div>

      {/* Middle row: Large Value */}
      <div className="mt-2.5 flex items-baseline justify-between">
        <span className="text-2xl font-bold tracking-tight text-slate-900">
          {value}
        </span>
      </div>

      {/* Bottom row: Trend badge and Sparkline */}
      <div className="mt-1 flex items-end justify-between min-h-[26px]">
        {trend ? (
          <div className="flex items-center gap-1.5">
            <span
              className={cn(
                "flex items-center gap-0.5 text-[11px] font-semibold",
                isPositive ? "text-emerald-600" : "text-rose-600"
              )}
            >
              {isPositive ? (
                <ArrowUp className="h-3 w-3 stroke-[2.5]" />
              ) : (
                <ArrowDown className="h-3 w-3 stroke-[2.5]" />
              )}
              <span>{trend.value}</span>
            </span>
            {trend.period && (
              <span className="text-[10px] text-slate-400 font-normal">
                {trend.period}
              </span>
            )}
          </div>
        ) : (
          <div />
        )}

        {/* Optional Sparkline Chart */}
        {sparklinePath && (
          <div className="h-6 w-20 shrink-0">
            <svg
              viewBox="0 0 84 26"
              className="h-full w-full overflow-visible"
              fill="none"
            >
              <path
                d={sparklinePath}
                stroke={styles.strokeColor}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

export function MetricCardGroup({
  children,
  columns = 4,
  className,
}: {
  children: React.ReactNode;
  columns?: 3 | 4 | 5;
  className?: string;
}) {
  const colClass =
    columns === 5
      ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
      : columns === 3
      ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";

  return (
    <div className={cn("grid gap-4", colClass, className)}>
      {children}
    </div>
  );
}
