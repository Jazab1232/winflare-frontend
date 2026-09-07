"use client";

import * as React from "react";
import { Sparkles, Globe2, Compass } from "lucide-react";
import {
  MOCK_SKILLS,
  MOCK_COUNTRY_STATS,
  MOCK_INDUSTRIES,
} from "../data/mock-data";

export function DashboardTagsFooter() {
  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.02)] select-none">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
        {/* Section 1: Top Skills */}
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
            <Sparkles className="h-3.5 w-3.5 text-[#5B5AF7]" />
            <span>Top Skills</span>
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            {MOCK_SKILLS.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-200/80 bg-slate-50/70 px-2.5 py-1 text-[11px] font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:border-slate-300 cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Section 2: Top Countries */}
        <div className="flex flex-col gap-2.5 pt-4 lg:pt-0 lg:pl-6">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
            <Globe2 className="h-3.5 w-3.5 text-[#5B5AF7]" />
            <span>Top Countries</span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {MOCK_COUNTRY_STATS.map((country) => (
              <div
                key={country.code}
                className="flex items-center gap-1.5 text-xs text-slate-700"
              >
                <span className="text-sm leading-none">{country.flag}</span>
                <span className="text-[11px] font-medium text-slate-800">
                  {country.name}
                </span>
                <span className="text-[10px] text-slate-400 font-semibold">
                  {country.count}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Top Industries */}
        <div className="flex flex-col gap-2.5 pt-4 lg:pt-0 lg:pl-6">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
            <Compass className="h-3.5 w-3.5 text-[#5B5AF7]" />
            <span>Top Industries</span>
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            {MOCK_INDUSTRIES.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-slate-200/80 bg-slate-50/70 px-2.5 py-1 text-[11px] font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:border-slate-300 cursor-pointer"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

