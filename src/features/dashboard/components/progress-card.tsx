"use client";

import * as React from "react";
import {
  TrendingUp,
  ChevronDown,
  Search,
  Send,
  MessageCircle,
  Crown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { MOCK_PROGRESS_METRICS } from "../data/mock-data";

function getMetricIcon(name: string) {
  switch (name) {
    case "Search":
      return { icon: Search, bg: "bg-indigo-50", color: "text-[#5B5AF7]" };
    case "Send":
      return { icon: Send, bg: "bg-sky-50", color: "text-sky-600" };
    case "MessageCircle":
      return { icon: MessageCircle, bg: "bg-blue-50", color: "text-blue-600" };
    case "Crown":
      return { icon: Crown, bg: "bg-amber-50", color: "text-amber-600" };
    default:
      return { icon: Search, bg: "bg-indigo-50", color: "text-[#5B5AF7]" };
  }
}

export function ProgressCard() {
  // Chart points: Jan (8), Feb (12), Mar (24), Apr (18), May (30)
  // ViewBox: 0 0 280 120
  // Y-coords (height 120, max 40):
  // 40 => y: 15, 30 => y: 38, 20 => y: 65, 10 => y: 92, 0 => y: 115
  // X-coords: Jan (20), Feb (75), Mar (135), Apr (195), May (255)
  // Values:
  // Jan = 10 -> y = 92
  // Feb = 14 -> y = 82
  // Mar = 26 -> y = 48
  // Apr = 20 -> y = 65
  // May = 32 -> y = 32

  return (
    <div className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-4.5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-50 text-[#5B5AF7]">
            <TrendingUp className="h-4 w-4" />
          </div>
          <h3 className="text-sm font-bold tracking-tight text-slate-900">
            Your Progress
          </h3>
        </div>

        {/* Timeframe Dropdown */}
        <button
          type="button"
          className="flex items-center gap-1.5 rounded-lg border border-slate-200/80 bg-white px-2.5 py-1 text-xs font-medium text-slate-600 hover:bg-slate-50 cursor-pointer shadow-2xs"
        >
          <span>All time</span>
          <ChevronDown className="h-3 w-3 text-slate-400" />
        </button>
      </div>

      {/* Body: Split into Chart on Left + Metrics on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
        {/* Left: Custom SVG Area/Line Chart */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div className="relative h-40 w-full flex">
            {/* Y-Axis Labels */}
            <div className="flex flex-col justify-between text-[10px] text-slate-400 pr-2 select-none h-[115px] pt-1">
              <span>40</span>
              <span>30</span>
              <span>20</span>
              <span>10</span>
              <span>0</span>
            </div>

            {/* SVG Chart Canvas */}
            <div className="relative flex-1 h-full">
              <svg
                viewBox="0 0 260 115"
                className="w-full h-[115px] overflow-visible"
                preserveAspectRatio="none"
              >
                <defs>
                  {/* Soft Purple Gradient Fill */}
                  <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Horizontal grid lines */}
                <line x1="0" y1="12" x2="260" y2="12" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="0" y1="38" x2="260" y2="38" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="0" y1="65" x2="260" y2="65" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="0" y1="92" x2="260" y2="92" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="0" y1="114" x2="260" y2="114" stroke="#E2E8F0" strokeWidth="1" />

                {/* Filled Area */}
                <path
                  d="M 15,92 C 45,86 55,80 75,82 C 105,85 115,48 135,48 C 165,48 175,65 195,65 C 220,65 235,32 255,32 L 255,114 L 15,114 Z"
                  fill="url(#chartFill)"
                />

                {/* Purple Line Curve */}
                <path
                  d="M 15,92 C 45,86 55,80 75,82 C 105,85 115,48 135,48 C 165,48 175,65 195,65 C 220,65 235,32 255,32"
                  fill="none"
                  stroke="#5B5AF7"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Peak point marker on May */}
                <circle cx="255" cy="32" r="4.5" fill="#5B5AF7" stroke="#FFFFFF" strokeWidth="2.5" />
              </svg>

              {/* Tooltip Badge "Won 12" pinned above peak May point */}
              <div className="absolute -top-3 right-0 -translate-x-1/4 rounded-full bg-[#5B5AF7] px-2.5 py-0.5 text-[11px] font-bold text-white shadow-md select-none">
                Won 12
              </div>

              {/* X-Axis Month Labels */}
              <div className="flex justify-between text-[10px] font-medium text-slate-400 pt-2 px-2">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Summary Metrics Column */}
        <div className="lg:col-span-5 flex flex-col divide-y divide-slate-100 pl-0 lg:pl-3 border-t lg:border-t-0 lg:border-l border-slate-100">
          {MOCK_PROGRESS_METRICS.map((metric) => {
            const config = getMetricIcon(metric.iconName);
            const Icon = config.icon;

            return (
              <div
                key={metric.id}
                className="flex items-center justify-between py-2 gap-2"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <div
                    className={cn(
                      "flex h-6 w-6 shrink-0 items-center justify-center rounded-md shadow-2xs",
                      config.bg,
                      config.color
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[11px] font-medium text-slate-500 truncate">
                      {metric.title}
                    </span>
                    <span className="text-sm font-bold text-slate-900 leading-tight">
                      {metric.value}
                    </span>
                  </div>
                </div>

                <span className="shrink-0 text-xs font-semibold text-emerald-600">
                  ↑ {metric.changePercent.replace("+", "")}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

