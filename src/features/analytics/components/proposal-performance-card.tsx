"use client";

import * as React from "react";
import { ChevronDown, Crown } from "lucide-react";
import { MOCK_TEMPLATE_PERFORMANCES } from "../data/mock-analytics";

export function ProposalPerformanceCard() {
  const [templateFilter, setTemplateFilter] = React.useState("all");

  // Gauge for 78 score
  const r = 24;
  const c = 2 * Math.PI * r;
  const score = 78;
  const strokeDashoffset = c - (score / 100) * c;

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-sm font-bold text-slate-900">
            Proposal Performance
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            What&apos;s working in your proposals?
          </p>
        </div>

        <div className="relative">
          <select
            value={templateFilter}
            onChange={(e) => setTemplateFilter(e.target.value)}
            className="appearance-none rounded-xl border border-slate-200 bg-white pl-3 pr-7 py-1.5 text-xs font-medium text-slate-700 shadow-2xs hover:bg-slate-50 focus:border-[#5B5AF7] focus:outline-none cursor-pointer"
          >
            <option value="all">All Templates</option>
            <option value="template-a">Template A</option>
            <option value="template-b">Template B</option>
            <option value="template-c">Template C</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-2 top-2 h-3.5 w-3.5 text-slate-400" />
        </div>
      </div>

      {/* 3 Metric Sub-Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* Metric 1: Avg Proposal Score with circular ring */}
        <div className="flex items-center gap-3 rounded-xl border border-slate-200/70 bg-[#FAFBFF] p-3">
          <div className="relative flex items-center justify-center shrink-0">
            <svg className="w-12 h-12 -rotate-90" viewBox="0 0 56 56">
              <circle
                cx="28"
                cy="28"
                r={r}
                fill="transparent"
                stroke="#E2E8F0"
                strokeWidth="5"
              />
              <circle
                cx="28"
                cy="28"
                r={r}
                fill="transparent"
                stroke="#5B5AF7"
                strokeWidth="5"
                strokeDasharray={c}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute text-xs font-black text-slate-900">
              {score}
            </span>
          </div>

          <div className="min-w-0">
            <span className="text-[11px] font-semibold text-slate-600 block leading-tight">
              Avg. Proposal Score
            </span>
            <span className="text-[10px] font-semibold text-emerald-600 block mt-0.5">
              ↑ 14%
            </span>
            <span className="text-[9px] text-slate-400 block truncate">
              vs. previous 30 days
            </span>
          </div>
        </div>

        {/* Metric 2: Proposal Win Rate */}
        <div className="rounded-xl border border-slate-200/70 bg-[#FAFBFF] p-3 flex flex-col justify-between">
          <span className="text-[11px] font-semibold text-slate-600 block">
            Proposal Win Rate
          </span>
          <div className="py-0.5">
            <span className="text-xl font-bold text-slate-900">34%</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[10px] font-semibold text-emerald-600">
              ↑ 9%
            </span>
            <span className="text-[9px] text-slate-400 truncate">
              vs. previous 30 days
            </span>
          </div>
        </div>

        {/* Metric 3: Best Performing Template */}
        <div className="rounded-xl border border-slate-200/70 bg-[#FAFBFF] p-3 flex flex-col justify-between">
          <span className="text-[11px] font-semibold text-slate-600 block">
            Best Performing Template
          </span>
          <div className="flex items-center gap-1.5 py-0.5">
            <Crown className="h-4 w-4 text-amber-500 fill-amber-500 shrink-0" />
            <span className="text-sm font-bold text-slate-900 truncate">
              Template A
            </span>
          </div>
          <span className="text-[10px] text-slate-500 font-medium">
            43% win rate
          </span>
        </div>
      </div>

      {/* Bottom: Template Performance Bars */}
      <div className="space-y-2.5 pt-1">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-900">
            Template Performance
          </span>
          <button
            type="button"
            className="text-[11px] font-semibold text-[#5B5AF7] hover:underline cursor-pointer"
          >
            View All Templates
          </button>
        </div>

        <div className="space-y-2 text-xs">
          {MOCK_TEMPLATE_PERFORMANCES.map((tmpl) => (
            <div
              key={tmpl.name}
              className="flex items-center justify-between gap-3"
            >
              <span className="text-[11px] text-slate-500 w-20 shrink-0">
                {tmpl.name}
              </span>

              {/* Progress bar container */}
              <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#5B5AF7] rounded-full transition-all duration-500"
                  style={{ width: `${tmpl.winRate}%` }}
                />
              </div>

              <span className="text-[11px] font-semibold text-slate-700 w-8 text-right shrink-0">
                {tmpl.winRate}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

