"use client";

import * as React from "react";
import { ArrowRight, Sparkles, Clock, CheckCircle2 } from "lucide-react";
import { ProposalCardItem } from "../types";
import { cn } from "@/lib/utils";

interface ProposalCardProps {
  item: ProposalCardItem;
  onOpen: (item: ProposalCardItem) => void;
}

export function ProposalCard({ item, onOpen }: ProposalCardProps) {
  const isSentOrWon = item.stageId === "sent" || item.stageId === "won";

  return (
    <div
      onClick={() => onOpen(item)}
      className="group relative flex flex-col gap-2.5 rounded-xl border border-slate-200/80 bg-white p-3 shadow-2xs transition-all hover:border-indigo-200 hover:shadow-xs cursor-pointer select-none"
    >
      {/* Top: Avatar & Company & Role */}
      <div className="flex items-start gap-2.5">
        <div
          className={cn(
            "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-white font-bold text-xs shadow-2xs",
            item.logoBg
          )}
        >
          {item.logoLetter}
        </div>

        <div className="flex flex-col min-w-0 flex-1">
          <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider truncate">
            {item.company}
          </span>
          <h3 className="text-xs font-bold text-slate-800 leading-tight truncate group-hover:text-[#5B5AF7] transition-colors">
            {item.role}
          </h3>
        </div>
      </div>

      {/* Badges Row (if any) */}
      {item.badges && item.badges.length > 0 && (
        <div className="flex flex-wrap items-center gap-1.5">
          {item.badges.map((badge, idx) => {
            if (badge.type === "value") {
              return (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 rounded-full border border-indigo-100 bg-[#EEF2FF] px-2 py-0.5 text-[9.5px] font-semibold text-[#5B5AF7]"
                >
                  <Sparkles className="h-2.5 w-2.5" />
                  <span>{badge.label}</span>
                </span>
              );
            }
            if (badge.type === "review") {
              return (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-[9.5px] font-semibold text-amber-700"
                >
                  <span className="h-1 w-1 rounded-full bg-amber-500" />
                  <span>{badge.label}</span>
                </span>
              );
            }
            if (badge.type === "high") {
              return (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 rounded-full border border-rose-200 bg-rose-50 px-2 py-0.5 text-[9.5px] font-semibold text-rose-600"
                >
                  <span className="h-1 w-1 rounded-full bg-rose-500" />
                  <span>{badge.label}</span>
                </span>
              );
            }
            if (badge.type === "medium") {
              return (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-[9.5px] font-semibold text-amber-600"
                >
                  <span className="h-1 w-1 rounded-full bg-amber-500" />
                  <span>{badge.label}</span>
                </span>
              );
            }
            return (
              <span
                key={idx}
                className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[9.5px] font-semibold text-slate-600"
              >
                <span className="h-1 w-1 rounded-full bg-slate-400" />
                <span>{badge.label}</span>
              </span>
            );
          })}
        </div>
      )}

      {/* Budget & Score */}
      <div className="flex items-center justify-between pt-0.5">
        <span className="text-xs font-bold text-slate-800">
          {item.budget}
        </span>

        {/* Circular score */}
        <div className="flex items-center gap-1">
          <div className="relative flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400 bg-emerald-50">
            <div className="h-2.5 w-2.5 rounded-full border-2 border-emerald-500 border-t-transparent animate-spin-reverse" />
          </div>
          <span className="text-[10px] font-bold text-slate-700">
            Score {item.score}
          </span>
        </div>
      </div>

      {/* Time & Status Badge */}
      <div className="flex flex-col gap-1.5 border-t border-slate-100 pt-2 text-[10px] text-slate-400">
        <div className="flex items-center justify-between">
          <span>{item.timeInfo}</span>
        </div>

        {item.statusBadge && (
          <div className="mt-0.5">
            {item.statusType === "awaiting" && (
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50/90 px-2 py-0.5 text-[9.5px] font-bold text-emerald-700">
                <Clock className="h-2.5 w-2.5" />
                <span>{item.statusBadge}</span>
              </span>
            )}
            {item.statusType === "hired" && (
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50/90 px-2 py-0.5 text-[9.5px] font-bold text-emerald-700">
                <CheckCircle2 className="h-2.5 w-2.5 text-emerald-600" />
                <span>{item.statusBadge}</span>
              </span>
            )}
          </div>
        )}
      </div>

      {/* Action link */}
      <div className="pt-0.5">
        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#5B5AF7] group-hover:text-indigo-700 transition-colors">
          <span>{isSentOrWon ? "View Details" : "Open Proposal"}</span>
          <ArrowRight className="h-3 w-3" />
        </span>
      </div>
    </div>
  );
}

