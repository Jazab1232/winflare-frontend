"use client";

import * as React from "react";
import {
  Sparkles,
  ArrowRight,
  Send,
  FileEdit,
  ExternalLink,
  Briefcase,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { MOCK_RECOMMENDATIONS } from "../data/mock-data";
import { AiRecommendation } from "../types";

function getRecommendationIcon(type: AiRecommendation["iconType"]) {
  switch (type) {
    case "doc-bolt":
      return { icon: Briefcase, bg: "bg-indigo-50", color: "text-[#5B5AF7]" };
    case "message-send":
      return { icon: Send, bg: "bg-sky-50", color: "text-sky-600" };
    case "file-generate":
      return { icon: FileEdit, bg: "bg-amber-50", color: "text-amber-600" };
    case "portfolio-view":
      return { icon: ExternalLink, bg: "bg-teal-50", color: "text-teal-600" };
  }
}

export function AiRecommendationsCard() {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.02)] select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-1 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-[#5B5AF7]" />
          <h3 className="text-sm font-bold tracking-tight text-slate-900">
            AI Recommendations
          </h3>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-1 text-xs font-semibold text-[#5B5AF7] hover:text-indigo-700 transition-colors cursor-pointer"
        >
          <span>View all</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* List of items */}
      <div className="flex flex-col divide-y divide-slate-100">
        {MOCK_RECOMMENDATIONS.map((rec) => {
          const config = getRecommendationIcon(rec.iconType);
          const Icon = config.icon;

          return (
            <div
              key={rec.id}
              className="flex items-center justify-between py-2.5 gap-2"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div
                  className={cn(
                    "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg shadow-2xs",
                    config.bg,
                    config.color
                  )}
                >
                  <Icon className="h-3.5 w-3.5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-bold text-slate-900 truncate">
                    {rec.title}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-slate-400 truncate">
                    <span className="font-semibold text-emerald-600">
                      {rec.matchScore}% match
                    </span>
                    <span>•</span>
                    <span>{rec.salary}</span>
                    <span>•</span>
                    <span>{rec.locationType}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                className={cn(
                  "h-7 shrink-0 rounded-lg px-3 text-xs font-semibold transition-all cursor-pointer",
                  rec.actionVariant === "primary"
                    ? "bg-[#5B5AF7] text-white hover:bg-[#4847E5] shadow-xs"
                    : "border border-indigo-100 bg-[#F0EEFF] text-[#5B5AF7] hover:bg-indigo-100"
                )}
              >
                {rec.actionText}
              </button>
            </div>
          );
        })}
      </div>

      {/* Purple banner at bottom */}
      <div className="mt-3 rounded-xl border border-indigo-100 bg-[#F6F5FF] p-2.5 flex items-center justify-between transition-colors hover:bg-[#EFEAFF] cursor-pointer">
        <div className="flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5 text-[#5B5AF7] shrink-0" />
          <span className="text-xs font-medium text-slate-700">
            AI found <strong className="text-[#5B5AF7]">12 more</strong> matching opportunities for you
          </span>
        </div>
        <ArrowRight className="h-3.5 w-3.5 text-[#5B5AF7] shrink-0 ml-1" />
      </div>
    </div>
  );
}

