"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { PipelineJob } from "../types";

interface PipelineJobCardProps {
  job: PipelineJob;
}

export function PipelineJobCard({ job }: PipelineJobCardProps) {
  return (
    <div className="group relative flex flex-col gap-1.5 rounded-xl border border-slate-200/70 bg-white p-2.5 shadow-2xs transition-all hover:border-slate-300 hover:shadow-xs cursor-pointer select-none">
      {/* Title & Company Avatar */}
      <div className="flex items-start gap-2">
        <div
          className={cn(
            "flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-[9px] font-bold mt-0.5 shadow-2xs",
            job.avatarBg,
            job.avatarColor
          )}
        >
          {job.companyShort}
        </div>
        <div className="flex flex-col min-w-0">
          <h4 className="text-xs font-bold text-slate-900 truncate group-hover:text-[#5B5AF7] transition-colors">
            {job.title}
          </h4>
          <span className="text-[11px] text-slate-400 truncate">
            {job.company} • {job.salary} • {job.locationType}
          </span>
        </div>
      </div>

      {/* Match Score Badge */}
      <div className="flex items-center pt-0.5">
        <span className="inline-flex items-center rounded-full border border-emerald-200/60 bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
          {job.matchScore}% match
        </span>
      </div>
    </div>
  );
}

