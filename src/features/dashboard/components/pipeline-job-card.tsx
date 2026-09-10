"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { PipelineJob } from "../types";

interface PipelineJobCardProps {
  job: PipelineJob & { contractType?: string };
}

export function PipelineJobCard({ job }: PipelineJobCardProps) {
  return (
    <div className="group relative flex flex-col gap-2 rounded-xl border border-slate-200/80 bg-white p-3 shadow-2xs transition-all hover:border-[#5B5AF7]/40 hover:shadow-xs cursor-pointer select-none">
      {/* Title & Company Avatar */}
      <div className="flex items-start gap-2.5">
        <div
          className={cn(
            "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[10px] font-bold mt-0.5 shadow-2xs",
            job.avatarBg,
            job.avatarColor
          )}
        >
          {job.companyShort}
        </div>
        <div className="flex flex-col min-w-0 flex-1">
          <h4
            className="text-xs font-bold text-slate-900 group-hover:text-[#5B5AF7] transition-colors leading-snug break-words"
            title={job.title}
          >
            {job.title}
          </h4>
          <span className="text-[11px] text-slate-500 truncate mt-0.5 font-medium">
            {job.company} &bull; <span className="text-slate-700 font-semibold">{job.salary}</span>
          </span>
        </div>
      </div>

      {/* Bottom row: Match badge & Location */}
      <div className="flex items-center justify-between pt-1.5 border-t border-slate-100 text-[11px]">
        <span className="inline-flex items-center rounded-full border border-emerald-200/70 bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
          {job.matchScore}% match
        </span>
        <span className="text-[10px] font-medium text-slate-400">
          {job.locationType}
        </span>
      </div>
    </div>
  );
}
