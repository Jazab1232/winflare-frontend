"use client";

import * as React from "react";
import { ChevronRight, Bookmark, Award, Send, MessageSquare, Calendar, Crown } from "lucide-react";
import { cn } from "@/lib/utils";
import { PipelineStage } from "../types";
import { PipelineJobCard } from "./pipeline-job-card";

interface PipelineColumnProps {
  stage: PipelineStage;
}

const STAGE_THEME: Record<
  PipelineStage["id"],
  {
    bg: string;
    border: string;
    badgeBg: string;
    badgeText: string;
    icon: React.ComponentType<{ className?: string }>;
  }
> = {
  saved: {
    bg: "bg-slate-50/70",
    border: "border-slate-200/80",
    badgeBg: "bg-indigo-50",
    badgeText: "text-indigo-700",
    icon: Bookmark,
  },
  qualified: {
    bg: "bg-slate-50/70",
    border: "border-slate-200/80",
    badgeBg: "bg-purple-50",
    badgeText: "text-purple-700",
    icon: Award,
  },
  applied: {
    bg: "bg-slate-50/70",
    border: "border-slate-200/80",
    badgeBg: "bg-sky-50",
    badgeText: "text-sky-700",
    icon: Send,
  },
  replied: {
    bg: "bg-slate-50/70",
    border: "border-slate-200/80",
    badgeBg: "bg-amber-50",
    badgeText: "text-amber-700",
    icon: MessageSquare,
  },
  interview: {
    bg: "bg-slate-50/70",
    border: "border-slate-200/80",
    badgeBg: "bg-teal-50",
    badgeText: "text-teal-700",
    icon: Calendar,
  },
  won: {
    bg: "bg-slate-50/70",
    border: "border-slate-200/80",
    badgeBg: "bg-emerald-50",
    badgeText: "text-emerald-700",
    icon: Crown,
  },
};

export function PipelineColumn({ stage }: PipelineColumnProps) {
  const theme = STAGE_THEME[stage.id] || STAGE_THEME.saved;
  const StageIcon = theme.icon;

  return (
    <div
      className={cn(
        "flex flex-col rounded-2xl border p-3 w-[230px] sm:w-[250px] shrink-0 select-none shadow-2xs",
        theme.bg,
        theme.border
      )}
    >
      {/* Column Header */}
      <div className="flex items-center justify-between px-1 py-0.5 mb-1.5">
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "flex h-5 w-5 items-center justify-center rounded-md shadow-2xs",
              theme.badgeBg,
              theme.badgeText
            )}
          >
            <StageIcon className="h-3 w-3" />
          </span>
          <span className="text-xs font-bold text-slate-800">{stage.name}</span>
        </div>
        <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
      </div>

      {/* Stage Count Banner */}
      <div className="px-1 mb-2.5 flex items-baseline gap-1.5">
        <span className="text-lg font-black text-slate-900">{stage.count}</span>
        <span className="text-[11px] font-medium text-slate-400">leads</span>
      </div>

      {/* Job Cards List */}
      <div className="flex flex-col gap-2.5">
        {stage.jobs.map((job) => (
          <PipelineJobCard key={job.id} job={job} />
        ))}
      </div>

      {/* Footer / More Link */}
      {stage.moreCount > 0 && (
        <div className="mt-2.5 pt-1.5 px-1 border-t border-slate-200/50">
          <button
            type="button"
            className="text-[11px] font-semibold text-[#5B5AF7] hover:underline transition-colors cursor-pointer"
          >
            + {stage.moreCount} more
          </button>
        </div>
      )}
    </div>
  );
}
