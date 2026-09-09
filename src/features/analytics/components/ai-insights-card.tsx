"use client";

import * as React from "react";
import {
  Sparkles,
  ChevronRight,
  ArrowRight,
  FileText,
  Clock,
  Target,
} from "lucide-react";
import { AIInsightItem } from "../types";
import { MOCK_AI_INSIGHTS } from "../data/mock-analytics";
import { cn } from "@/lib/utils";

interface AIInsightsCardProps {
  insights?: AIInsightItem[];
}

function getInsightIcon(id: string) {
  switch (id) {
    case "insight-1":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      );
    case "insight-2":
      return <FileText className="h-4 w-4" />;
    case "insight-3":
      return <Clock className="h-4 w-4" />;
    case "insight-4":
      return <Target className="h-4 w-4" />;
    default:
      return <Sparkles className="h-4 w-4" />;
  }
}

export function AIInsightsCard({
  insights = MOCK_AI_INSIGHTS,
}: AIInsightsCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs h-full">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[#5B5AF7]" />
            <h2 className="text-sm font-bold text-slate-900">AI Insights</h2>
          </div>

          <div className="flex items-center gap-1 rounded-full bg-[#EEF2FF] px-2.5 py-0.5 text-[10px] font-semibold text-[#5B5AF7]">
            <Sparkles className="h-2.5 w-2.5" />
            <span>Powered by AI</span>
          </div>
        </div>

        {/* List of Insights */}
        <div className="divide-y divide-slate-100">
          {insights.map((item) => (
            <div
              key={item.id}
              className="py-3.5 group cursor-pointer flex items-start gap-3 hover:bg-slate-50/60 rounded-xl px-1.5 transition-colors"
            >
              {/* Icon */}
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#EEF2FF] text-[#5B5AF7] mt-0.5">
                {getInsightIcon(item.id)}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 pr-1">
                <div className="flex items-start justify-between gap-1">
                  <p className="text-xs font-bold text-slate-900 leading-tight group-hover:text-[#5B5AF7] transition-colors">
                    {item.title}
                  </p>
                  <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-[#5B5AF7] shrink-0 mt-0.5 transition-colors" />
                </div>
                <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="pt-4 border-t border-slate-100 mt-2">
        <button
          type="button"
          className="w-full flex items-center justify-center gap-1.5 rounded-xl border border-slate-200/90 bg-white py-2 text-xs font-semibold text-[#5B5AF7] hover:bg-slate-50 transition-colors cursor-pointer shadow-2xs"
        >
          <span>View All Insights</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}

