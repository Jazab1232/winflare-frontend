"use client";

import * as React from "react";
import {
  Globe,
  ChevronDown,
  LayoutGrid,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SourceFilterBarProps {
  activeSource: string;
  onSelectSource: (source: string) => void;
  totalCount?: number;
}

export function SourceFilterBar({
  activeSource,
  onSelectSource,
  totalCount = 2847,
}: SourceFilterBarProps) {
  const sources = [
    { id: "all", label: "All Sources", count: "12.4k" },
    { id: "linkedin", label: "LinkedIn", icon: "in" },
    { id: "indeed", label: "Indeed", icon: "indeed" },
    { id: "company", label: "Company Websites", icon: "globe" },
  ];

  return (
    <div className="flex flex-col gap-3.5 select-none">
      {/* Title & Subtitle */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Opportunities
        </h1>
        <p className="text-xs text-slate-500 mt-0.5">
          Discover and qualify the best opportunities from multiple sources.
        </p>
      </div>

      {/* Source Filter Chips & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
        {/* Source Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {/* All Sources Pill */}
          <button
            type="button"
            onClick={() => onSelectSource("all")}
            className={cn(
              "flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer shadow-2xs",
              activeSource === "all"
                ? "bg-[#5B5AF7] text-white"
                : "border border-slate-200/90 bg-white text-slate-700 hover:bg-slate-50"
            )}
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>All Sources</span>
            <span
              className={cn(
                "rounded-full px-1.5 py-0.2 text-[10px]",
                activeSource === "all"
                  ? "bg-white/25 text-white"
                  : "bg-slate-100 text-slate-600"
              )}
            >
              12.4k
            </span>
          </button>

          {/* LinkedIn Pill */}
          <button
            type="button"
            onClick={() => onSelectSource("LinkedIn")}
            className={cn(
              "flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer shadow-2xs",
              activeSource === "LinkedIn"
                ? "border-[#5B5AF7] bg-[#F0EEFF] text-[#5B5AF7]"
                : "border-slate-200/90 bg-white text-slate-700 hover:bg-slate-50"
            )}
          >
            <div className="flex h-3.5 w-3.5 items-center justify-center rounded-xs bg-[#0A66C2] text-[9px] font-bold text-white leading-none">
              in
            </div>
            <span>LinkedIn</span>
          </button>

          {/* Indeed Pill */}
          <button
            type="button"
            onClick={() => onSelectSource("Indeed")}
            className={cn(
              "flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer shadow-2xs",
              activeSource === "Indeed"
                ? "border-[#5B5AF7] bg-[#F0EEFF] text-[#5B5AF7]"
                : "border-slate-200/90 bg-white text-slate-700 hover:bg-slate-50"
            )}
          >
            <div className="h-2.5 w-2.5 rounded-full bg-[#003A9B]" />
            <span>Indeed</span>
          </button>

          {/* Company Websites Pill */}
          <button
            type="button"
            onClick={() => onSelectSource("Company Websites")}
            className={cn(
              "flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer shadow-2xs",
              activeSource === "Company Websites"
                ? "border-[#5B5AF7] bg-[#F0EEFF] text-[#5B5AF7]"
                : "border-slate-200/90 bg-white text-slate-700 hover:bg-slate-50"
            )}
          >
            <Globe className="h-3.5 w-3.5 text-slate-500" />
            <span>Company Websites</span>
          </button>

          {/* + More ▾ */}
          <button
            type="button"
            className="flex items-center gap-1 rounded-full border border-slate-200/90 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 shadow-2xs cursor-pointer"
          >
            <span>+ More</span>
            <ChevronDown className="h-3 w-3 text-slate-400" />
          </button>
        </div>

        {/* Right Controls: Sort & Layout */}
        <div className="flex items-center gap-2">
          {/* Sort Dropdown */}
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-xl border border-slate-200/90 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 shadow-2xs cursor-pointer"
          >
            <span>Most Relevant</span>
            <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
          </button>

          {/* Layout Toggle */}
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200/90 bg-white text-slate-600 hover:bg-slate-50 shadow-2xs cursor-pointer"
          >
            <LayoutGrid className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Showing count indicator */}
      <div className="text-xs font-medium text-slate-500 pt-1">
        Showing 1–10 of {totalCount.toLocaleString()} opportunities
      </div>
    </div>
  );
}
