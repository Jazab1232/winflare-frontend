"use client";

import * as React from "react";
import { Calendar, ChevronDown, Filter, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PipelineTitleBarProps {
  onFilterClick?: () => void;
  onSortClick?: () => void;
}

export function PipelineTitleBar({
  onFilterClick,
  onSortClick,
}: PipelineTitleBarProps) {
  const [selectedRange, setSelectedRange] = React.useState("Last 30 days");
  const [isRangeOpen, setIsRangeOpen] = React.useState(false);

  const ranges = ["Last 7 days", "Last 30 days", "Last 90 days", "This Year"];

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-4 px-6 select-none shrink-0">
      {/* Title & Subtitle */}
      <div className="flex flex-col">
        <h1 className="text-xl font-bold tracking-tight text-slate-900">
          Pipeline
        </h1>
        <p className="text-xs text-slate-500 mt-0.5">
          Track every opportunity from discovery to signed client.
        </p>
      </div>

      {/* Action Controls on Right */}
      <div className="flex items-center gap-2.5">
        {/* Date Filter Dropdown */}
        <div className="relative">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsRangeOpen(!isRangeOpen)}
            className="h-8.5 rounded-xl border-slate-200 bg-white text-xs font-medium text-slate-700 shadow-2xs hover:bg-slate-50 gap-2 px-3 cursor-pointer"
          >
            <Calendar className="h-3.5 w-3.5 text-slate-500" />
            <span>{selectedRange}</span>
            <ChevronDown className="h-3 w-3 text-slate-400" />
          </Button>

          {isRangeOpen && (
            <div className="absolute right-0 top-10 z-30 w-36 rounded-xl border border-slate-200 bg-white p-1 shadow-lg">
              {ranges.map((range) => (
                <button
                  key={range}
                  type="button"
                  onClick={() => {
                    setSelectedRange(range);
                    setIsRangeOpen(false);
                  }}
                  className={`flex w-full items-center rounded-lg px-2.5 py-1.5 text-xs transition-colors text-left cursor-pointer ${
                    selectedRange === range
                      ? "bg-indigo-50 font-semibold text-[#5B5AF7]"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Filter Button */}
        <Button
          variant="outline"
          size="sm"
          onClick={onFilterClick}
          className="h-8.5 rounded-xl border-slate-200 bg-white text-xs font-medium text-slate-700 shadow-2xs hover:bg-slate-50 gap-1.5 px-3 cursor-pointer"
        >
          <Filter className="h-3.5 w-3.5 text-slate-500" />
          <span>Filter</span>
        </Button>

        {/* Sort Button */}
        <Button
          variant="outline"
          size="sm"
          onClick={onSortClick}
          className="h-8.5 rounded-xl border-slate-200 bg-white text-xs font-medium text-slate-700 shadow-2xs hover:bg-slate-50 gap-1.5 px-3 cursor-pointer"
        >
          <SlidersHorizontal className="h-3.5 w-3.5 text-slate-500" />
          <span>Sort</span>
        </Button>
      </div>
    </div>
  );
}

