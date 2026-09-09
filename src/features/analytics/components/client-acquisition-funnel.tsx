"use client";

import * as React from "react";
import {
  MOCK_FUNNEL_STAGES,
  MOCK_CONVERSION_RATES,
} from "../data/mock-analytics";
import { cn } from "@/lib/utils";

export function ClientAcquisitionFunnel() {
  const [viewType, setViewType] = React.useState<"funnel" | "trend">("funnel");

  // Trapezoid dimensions for 6 tiers (centered at x = 80 in viewBox 160 x 220)
  // Height per tier = 28, gap = 6
  const tiers = [
    { topW: 140, botW: 124, y: 4, h: 28, color: "#818CF8" },
    { topW: 120, botW: 104, y: 38, h: 28, color: "#6366F1" },
    { topW: 100, botW: 84, y: 72, h: 28, color: "#4F46E5" },
    { topW: 80, botW: 66, y: 106, h: 28, color: "#4338CA" },
    { topW: 62, botW: 48, y: 140, h: 28, color: "#3730A3" },
    { topW: 44, botW: 32, y: 174, h: 28, color: "#5B5AF7" },
  ];

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs">
      {/* Header with Title & Funnel/Trend Toggle */}
      <div className="flex items-center justify-between pb-4">
        <div>
          <h2 className="text-sm font-bold text-slate-900">
            Client Acquisition Funnel
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Track how opportunities turn into paying clients.
          </p>
        </div>

        <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50/60 p-0.5">
          <button
            type="button"
            onClick={() => setViewType("funnel")}
            className={cn(
              "rounded-lg px-3 py-1 text-xs font-semibold transition-all cursor-pointer",
              viewType === "funnel"
                ? "bg-[#5B5AF7] text-white shadow-2xs"
                : "text-slate-500 hover:text-slate-800"
            )}
          >
            Funnel
          </button>
          <button
            type="button"
            onClick={() => setViewType("trend")}
            className={cn(
              "rounded-lg px-3 py-1 text-xs font-semibold transition-all cursor-pointer",
              viewType === "trend"
                ? "bg-[#5B5AF7] text-white shadow-2xs"
                : "text-slate-500 hover:text-slate-800"
            )}
          >
            Trend
          </button>
        </div>
      </div>

      {/* Funnel Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">
        {/* Left Side: SVG Funnel + Stage Values */}
        <div className="md:col-span-8 flex items-center gap-5">
          {/* SVG Funnel graphic */}
          <div className="w-36 sm:w-44 shrink-0">
            <svg
              viewBox="0 0 160 210"
              className="w-full h-auto drop-shadow-2xs"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {tiers.map((t, idx) => {
                const cx = 80;
                const x1 = cx - t.topW / 2;
                const x2 = cx + t.topW / 2;
                const x3 = cx + t.botW / 2;
                const x4 = cx - t.botW / 2;
                const y1 = t.y;
                const y2 = t.y + t.h;

                return (
                  <path
                    key={idx}
                    d={`M ${x1} ${y1} L ${x2} ${y1} L ${x3} ${y2} L ${x4} ${y2} Z`}
                    fill={t.color}
                    rx="4"
                    className="transition-all hover:opacity-90"
                  />
                );
              })}
            </svg>
          </div>

          {/* Stage Details Column */}
          <div className="flex-1 flex flex-col justify-between h-[210px] py-1 text-xs">
            {MOCK_FUNNEL_STAGES.map((stage) => (
              <div
                key={stage.name}
                className="flex items-center justify-between gap-2"
              >
                <div>
                  <span className="text-slate-500 text-[11px] block">
                    {stage.name}
                  </span>
                  <span className="font-bold text-slate-900 text-sm">
                    {stage.count.toLocaleString()}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-slate-400 text-xs font-semibold">
                    {stage.rate}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Conversion Rates */}
        <div className="md:col-span-4 border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6 flex flex-col justify-between">
          <span className="text-xs font-bold text-slate-900 block pb-2">
            Conversion Rates
          </span>

          <div className="space-y-3.5 flex-1 flex flex-col justify-around">
            {MOCK_CONVERSION_RATES.map((rate) => (
              <div
                key={rate.label}
                className="flex items-center justify-between"
              >
                <div>
                  <span className="text-[11px] font-semibold text-slate-700 block">
                    {rate.label}
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    {rate.subtext}
                  </span>
                </div>
                <span className="text-sm font-bold text-slate-900">
                  {rate.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

