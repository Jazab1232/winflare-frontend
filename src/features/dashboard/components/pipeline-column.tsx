"use client";

import * as React from "react";
import { ChevronRight, Bookmark, Award, Send, MessageSquare, Calendar, Crown } from "lucide-react";
import { cn } from "@/lib/utils";
import { PipelineStage, ColorTheme } from "../types";
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
    bg: "bg-slate-50/60",
    border: "border-slate-200/60",
    badgeBg: "bg-indigo-50",
    badgeText: "text-indigo-700",
    icon: Bookmark,
  },
  qualified: {
    bg: "bg-slate-50/60",
    border: "border-slate-200/60",
    badgeBg: "bg-purple-50",
    badgeText: "text-purple-700",
    icon: Award,
  },
  applied: {
    bg: "bg-slate-50/60",
    border: "border-slate-200/60",
    badgeBg: "bg-sky-50",
    badgeText: "text-sky-700",
    icon: Send,
  },
  replied: {
    bg: "bg-slate-50/60",
    border: "border-slate-200/60",
    badgeBg: "bg-amber-50",
    badgeText: "text-amber-700",
    icon: MessageSquare,
  },
  interview: {
    bg: "bg-slate-50/60",
    border: "border-slate-200/60",
    badgeBg: "bg-teal-50",
    badgeText: "text-teal-700",
    icon: Calendar,
  },
  won: {
    bg: "bg-slate-50/60",
    border: "border-slate-200/60",
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
        "flex flex-col rounded-2xl border p-2 min-w-[150px] flex-1 select-none",
        theme.bg,
        theme.border
      )}
    >
      {/* Column Header */}
      <div className="flex items-center justify-between px-1.5 py-1 mb-2">
        <div className="flex items-center gap-1.5">
          <span
            className={cn(
              "flex h-4 w-4 items-center justify-center rounded-sm",
              theme.badgeBg,
              theme.badgeText
            )}
          >
            <StageIcon className="h-2.5 w-2.5" />
          </span>
          <span className="text-xs font-bold text-slate-800">{stage.name}</span>
        </div>
        <ChevronRight className="h-3 w-3 text-slate-400" />
      </div>

      {/* Stage Count Banner */}
      <div className="px-1.5 mb-2">
        <span className="text-base font-bold text-slate-800">{stage.count}</span>
      </div>

      {/* Job Cards List */}
      <div className="flex flex-col gap-2">
        {stage.jobs.map((job) => (
          <PipelineJobCard key={job.id} job={job} />
        ))}
      </div>

      {/* Footer / More Link */}
      <div className="mt-2 pt-1 px-1">
        <button
          type="button"
          className="text-[11px] font-medium text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
        >
          + {stage.moreCount} more
        </button>
      </div>
    </div>
  );
}

