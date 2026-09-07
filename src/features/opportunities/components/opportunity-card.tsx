"use client";

import * as React from "react";
import { Bookmark, Globe2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { OpportunityItem } from "../types";
import { CompanyLogo } from "./company-logo";

interface OpportunityCardProps {
  item: OpportunityItem;
  isSelected?: boolean;
  onSelect?: () => void;
  onToggleSave?: (e: React.MouseEvent) => void;
}

export function OpportunityCard({
  item,
  isSelected,
  onSelect,
  onToggleSave,
}: OpportunityCardProps) {
  return (
    <div
      onClick={onSelect}
      className={cn(
        "group relative flex flex-col gap-2 rounded-2xl p-4 transition-all cursor-pointer select-none",
        isSelected
          ? "border-2 border-[#5B5AF7] bg-white shadow-md"
          : "border border-slate-200/80 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-slate-300 hover:shadow-xs"
      )}
    >
      {/* Top Row: Logo, Title, Match Badge & Bookmark */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 min-w-0">
          <CompanyLogo type={item.logoType} size="md" />
          <div className="flex flex-col min-w-0">
            <span className="text-xs font-semibold text-slate-500">
              {item.company}
            </span>
            <h3 className="text-sm font-bold text-slate-900 truncate group-hover:text-[#5B5AF7] transition-colors">
              {item.role}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {/* Match Score Badge */}
          <span className="inline-flex items-center rounded-full border border-emerald-200/80 bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-700">
            {item.matchScore}% Match
          </span>

          {/* Bookmark Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleSave?.(e);
            }}
            aria-label="Save opportunity"
            className="p-1 text-slate-400 hover:text-slate-700 transition-colors"
          >
            <Bookmark
              className={cn(
                "h-4 w-4",
                item.isSaved
                  ? "fill-[#5B5AF7] text-[#5B5AF7]"
                  : "text-slate-400"
              )}
            />
          </button>
        </div>
      </div>

      {/* Meta Row: Company • Location • Salary • Job Type + Timestamp */}
      <div className="flex items-center justify-between text-xs text-slate-500 pt-0.5">
        <div className="flex items-center gap-1.5 truncate">
          <span>{item.company}</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Globe2 className="h-3 w-3 text-slate-400" />
            {item.location}
          </span>
          <span>•</span>
          <span className="font-medium text-slate-700">{item.salary}</span>
          <span>•</span>
          <span>{item.jobType}</span>
        </div>
        <span className="shrink-0 text-[11px] text-slate-400 ml-2">
          {item.postedTime}
        </span>
      </div>

      {/* Tags Row */}
      <div className="flex flex-wrap items-center gap-1.5 pt-1">
        {item.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-slate-200/90 bg-slate-50/70 px-2.5 py-0.5 text-[11px] font-medium text-slate-600"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
