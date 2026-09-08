"use client";

import * as React from "react";
import { FileText, Send, Trophy, Target, ArrowUp } from "lucide-react";
import { ProposalSummaryMetric } from "../types";
import { cn } from "@/lib/utils";

interface ProposalsMetricCardsProps {
  metrics: ProposalSummaryMetric[];
}

const ICONS_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  total_proposals: FileText,
  sent: Send,
  won: Trophy,
  win_rate: Target,
};

const THEME_STYLES = {
  blue: {
    iconBg: "bg-[#EEF2FF]",
    iconColor: "text-[#5B5AF7]",
    strokeColor: "#6366F1",
  },
  cyan: {
    iconBg: "bg-[#E0F2FE]",
    iconColor: "text-[#0284C7]",
    strokeColor: "#38BDF8",
  },
  amber: {
    iconBg: "bg-[#FEF3C7]",
    iconColor: "text-[#D97706]",
    strokeColor: "#10B981", // In screenshot, Won has green curve!
  },
  purple: {
    iconBg: "bg-[#F3E8FF]",
    iconColor: "text-[#7C3AED]",
    strokeColor: "#8B5CF6",
  },
};

function generateSmoothPath(points: number[], width = 90, height = 28): string {
  if (!points || points.length === 0) return "";
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

export function ProposalsMetricCards({ metrics }: ProposalsMetricCardsProps) {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 px-6 pb-4 select-none shrink-0">
      {metrics.map((metric) => {
        const theme = THEME_STYLES[metric.theme] || THEME_STYLES.blue;
        const Icon = ICONS_MAP[metric.id] || FileText;
        const sparklinePath = generateSmoothPath(metric.sparkline);

        return (
          <div
            key={metric.id}
            className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-4 shadow-2xs transition-shadow hover:shadow-xs"
          >
            {/* Top Row: Icon & Title */}
            <div className="flex items-center gap-2.5">
              <div
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-xl",
                  theme.iconBg,
                  theme.iconColor
                )}
              >
                <Icon className="h-4 w-4" />
              </div>
              <span className="text-xs font-semibold text-slate-700">
                {metric.title}
              </span>
            </div>

            {/* Value */}
            <div className="mt-2.5 flex items-baseline justify-between">
              <span className="text-2xl font-bold tracking-tight text-slate-900">
                {metric.count}
              </span>
            </div>

            {/* Bottom Row: Trend & Sparkline */}
            <div className="mt-1 flex items-end justify-between">
              <div className="flex items-center gap-1 text-[11px] font-medium text-emerald-600">
                <ArrowUp className="h-3 w-3 stroke-[2.5]" />
                <span>{metric.trendText}</span>
              </div>

              {/* Sparkline Curve */}
              <div className="h-6 w-24">
                <svg
                  viewBox="0 0 90 28"
                  className="h-full w-full overflow-visible"
                  fill="none"
                >
                  <path
                    d={sparklinePath}
                    stroke={theme.strokeColor}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

