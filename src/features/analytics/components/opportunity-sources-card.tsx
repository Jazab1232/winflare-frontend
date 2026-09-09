"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { MOCK_OPPORTUNITY_SOURCES } from "../data/mock-analytics";

export function OpportunitySourcesCard() {
  const [filterType, setFilterType] = React.useState("found");

  // SVG donut metrics
  // Circumference for r=54 is 2 * PI * 54 = 339.292
  const r = 54;
  const c = 2 * Math.PI * r;

  let currentOffset = 0;
  const segments = MOCK_OPPORTUNITY_SOURCES.map((item) => {
    const strokeDasharray = `${(item.percentage / 100) * c} ${c}`;
    const strokeDashoffset = -currentOffset;
    currentOffset += (item.percentage / 100) * c;
    return {
      ...item,
      strokeDasharray,
      strokeDashoffset,
    };
  });

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between pb-4">
        <div>
          <h2 className="text-sm font-bold text-slate-900">
            Opportunity Sources
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Which channels bring the best clients?
          </p>
        </div>

        {/* Dropdown */}
        <div className="relative">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="appearance-none rounded-xl border border-slate-200 bg-white pl-3 pr-7 py-1.5 text-xs font-medium text-slate-700 shadow-2xs hover:bg-slate-50 focus:border-[#5B5AF7] focus:outline-none cursor-pointer"
          >
            <option value="found">Found</option>
            <option value="qualified">Qualified</option>
            <option value="won">Won</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-2 top-2 h-3.5 w-3.5 text-slate-400" />
        </div>
      </div>

      {/* Donut Chart & Breakdown Table */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center pt-2">
        {/* Left: Donut Chart with Center Text */}
        <div className="sm:col-span-5 flex justify-center items-center">
          <div className="relative flex items-center justify-center">
            <svg
              className="w-36 h-36 -rotate-90 transform"
              viewBox="0 0 140 140"
            >
              {segments.map((seg, i) => (
                <circle
                  key={i}
                  cx="70"
                  cy="70"
                  r={r}
                  fill="transparent"
                  stroke={seg.color}
                  strokeWidth="18"
                  strokeDasharray={seg.strokeDasharray}
                  strokeDashoffset={seg.strokeDashoffset}
                  className="transition-all duration-300"
                />
              ))}
            </svg>

            {/* Centered label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center select-none pointer-events-none">
              <span className="text-xl font-black text-slate-900 leading-tight">
                1,284
              </span>
              <span className="text-[10px] font-semibold text-slate-400">
                Total Found
              </span>
            </div>
          </div>
        </div>

        {/* Right: Sources Breakdown Table */}
        <div className="sm:col-span-7 space-y-2.5 text-xs">
          {MOCK_OPPORTUNITY_SOURCES.map((source) => (
            <div
              key={source.source}
              className="flex items-center justify-between gap-2 py-0.5"
            >
              <div className="flex items-center gap-2 min-w-0">
                <span
                  className="h-2.5 w-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: source.color }}
                />
                <span className="font-semibold text-slate-800 truncate">
                  {source.source}
                </span>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 text-right shrink-0">
                <span className="font-bold text-slate-900 w-8">
                  {source.count}
                </span>
                <span className="text-slate-400 text-[11px] w-8">
                  {source.percentage}%
                </span>
                <span className="text-slate-500 font-medium text-[11px] w-12 text-right">
                  {source.wonCount} won
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

