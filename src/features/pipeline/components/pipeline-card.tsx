"use client";

import * as React from "react";
import { ExternalLink, MapPin, Sparkles, CheckCircle, MoreHorizontal } from "lucide-react";
import { PipelineItem } from "../types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PipelineCardProps {
  item: PipelineItem;
  onOpenDetails: (item: PipelineItem) => void;
  onGenerateProposal?: (item: PipelineItem) => void;
  onViewProposal?: (item: PipelineItem) => void;
  onMoveStage?: (item: PipelineItem) => void;
}

export function PipelineCard({
  item,
  onOpenDetails,
  onGenerateProposal,
  onViewProposal,
  onMoveStage,
}: PipelineCardProps) {
  const isQualifiedOrDraft =
    item.stageId === "qualified" || item.stageId === "proposal_drafting";
  const isApplied = item.stageId === "applied";
  const isInterviewOrNegotiation =
    item.stageId === "interview" || item.stageId === "negotiation";
  const isWon = item.stageId === "won";

  return (
    <div
      onClick={() => onOpenDetails(item)}
      className="group relative flex flex-col gap-2.5 rounded-xl border border-slate-200/80 bg-white p-3 shadow-2xs transition-all hover:border-indigo-200 hover:shadow-xs cursor-pointer select-none"
    >
      {/* Top: Avatar & Company & Title */}
      <div className="flex items-start gap-2.5">
        {/* Company Avatar */}
        <div
          className={cn(
            "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-white font-bold text-xs shadow-2xs",
            item.logoBg
          )}
        >
          {item.logoLetter}
        </div>

        {/* Info */}
        <div className="flex flex-col min-w-0 flex-1">
          <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider truncate">
            {item.company}
          </span>
          <h3 className="text-xs font-bold text-slate-800 leading-tight truncate group-hover:text-[#5B5AF7] transition-colors">
            {item.role}
          </h3>
        </div>
      </div>

      {/* External Link */}
      <div className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-slate-600 transition-colors">
        <span>{item.company}</span>
        <ExternalLink className="h-2.5 w-2.5" />
      </div>

      {/* Match Score Badge */}
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200/70 bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span>{item.matchScore}% Match</span>
        </span>
      </div>

      {/* Salary & Location */}
      <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium">
        <span>{item.salary}</span>
        <span className="text-slate-300">•</span>
        <div className="flex items-center gap-0.5">
          <MapPin className="h-3 w-3 text-slate-400" />
          <span>{item.location}</span>
        </div>
      </div>

      {/* Priority Tag */}
      <div>
        {item.priority === "high" && (
          <span className="inline-flex items-center gap-1 rounded-full border border-rose-200/80 bg-rose-50 px-2 py-0.5 text-[10px] font-semibold text-rose-600">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
            <span>High Priority</span>
          </span>
        )}
        {item.priority === "medium" && (
          <span className="inline-flex items-center gap-1 rounded-full border border-amber-200/80 bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-600">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            <span>Medium Priority</span>
          </span>
        )}
        {item.priority === "low" && (
          <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
            <span>Low Priority</span>
          </span>
        )}
      </div>

      {/* Time & Sub-status */}
      <div className="flex items-center justify-between border-t border-slate-100 pt-2 text-[10px] text-slate-400">
        <span>{item.timeAgo}</span>
        {item.extraTime ? (
          <span>{item.extraTime}</span>
        ) : (
          <MoreHorizontal className="h-3 w-3 text-slate-300" />
        )}
      </div>

      {/* Action Buttons Row */}
      <div
        className="flex items-center gap-1.5 pt-0.5"
        onClick={(e) => e.stopPropagation()}
      >
        {isQualifiedOrDraft && (
          <>
            <Button
              variant="default"
              size="sm"
              onClick={() => onGenerateProposal?.(item)}
              className="h-7 flex-1 rounded-lg bg-[#5B5AF7] hover:bg-[#4847E5] text-white text-[11px] font-semibold px-2 shadow-2xs cursor-pointer"
            >
              Generate Proposal
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onOpenDetails(item)}
              className="h-7 rounded-lg border-slate-200 bg-white text-slate-700 hover:bg-slate-50 text-[11px] font-medium px-2 shadow-2xs cursor-pointer"
            >
              Open Details
            </Button>
          </>
        )}

        {isApplied && (
          <>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onViewProposal?.(item)}
              className="h-7 flex-1 rounded-lg border-indigo-100 bg-[#EEF2FF] hover:bg-indigo-100 text-[#5B5AF7] text-[11px] font-semibold px-2 cursor-pointer"
            >
              View Proposal
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onOpenDetails(item)}
              className="h-7 rounded-lg border-slate-200 bg-white text-slate-700 hover:bg-slate-50 text-[11px] font-medium px-2 shadow-2xs cursor-pointer"
            >
              Open Details
            </Button>
          </>
        )}

        {isInterviewOrNegotiation && (
          <>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onOpenDetails(item)}
              className="h-7 flex-1 rounded-lg border-slate-200 bg-white text-slate-700 hover:bg-slate-50 text-[11px] font-medium px-2 shadow-2xs cursor-pointer"
            >
              View Details
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onMoveStage?.(item)}
              className="h-7 flex-1 rounded-lg border-slate-200 bg-white text-slate-700 hover:bg-slate-50 text-[11px] font-medium px-2 shadow-2xs cursor-pointer"
            >
              Move Stage
            </Button>
          </>
        )}

        {isWon && (
          <div className="flex w-full items-center justify-center gap-1 rounded-lg border border-emerald-200/80 bg-emerald-50/80 py-1 text-[11px] font-bold text-emerald-700">
            <CheckCircle className="h-3.5 w-3.5 text-emerald-600" />
            <span>Client Won</span>
          </div>
        )}
      </div>
    </div>
  );
}

