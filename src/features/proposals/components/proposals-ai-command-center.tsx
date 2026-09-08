"use client";

import * as React from "react";
import {
  Sparkles,
  AlertTriangle,
  ArrowRight,
  Clock,
  BarChart3,
  Trophy,
  FileText,
  Layers,
  CreditCard,
  ArrowUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AiSuggestionItem } from "../types";

interface ProposalsAiCommandCenterProps {
  suggestions: AiSuggestionItem[];
  onApplySuggestion?: (sug: AiSuggestionItem) => void;
  onCreateFollowUp?: () => void;
  onNeedsAttentionClick?: () => void;
  onAssetClick?: (title: string) => void;
}

export function ProposalsAiCommandCenter({
  suggestions,
  onApplySuggestion,
  onCreateFollowUp,
  onNeedsAttentionClick,
  onAssetClick,
}: ProposalsAiCommandCenterProps) {
  return (
    <aside className="w-[330px] shrink-0 border-l border-slate-200/80 bg-white p-5 select-none overflow-y-auto custom-scrollbar flex flex-col gap-4.5">
      {/* Header */}
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-indigo-50 text-[#5B5AF7]">
            <Sparkles className="h-3.5 w-3.5" />
          </div>
          <h2 className="text-sm font-bold tracking-tight text-slate-900">
            AI Command Center
          </h2>
        </div>
        <p className="text-[11px] text-slate-500">
          Insights, recommendations and actions to help you win more.
        </p>
      </div>

      {/* 1. Needs Attention */}
      <div
        onClick={onNeedsAttentionClick}
        className="group flex items-center justify-between rounded-xl border border-rose-200/80 bg-[#FFF8F8] p-3 transition-all hover:border-rose-300 hover:shadow-xs cursor-pointer"
      >
        <div className="flex flex-col gap-0.5 pr-2">
          <div className="flex items-center gap-1.5 text-rose-600">
            <AlertTriangle className="h-3.5 w-3.5" />
            <span className="text-[11px] font-bold">Needs Attention</span>
          </div>
          <h4 className="text-xs font-bold text-slate-800">
            3 proposals need review
          </h4>
          <p className="text-[10.5px] text-slate-500 leading-snug">
            Verve Labs, Acme Inc and 1 more proposal needs your review.
          </p>
        </div>
        <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-rose-600 transition-colors shrink-0" />
      </div>

      {/* 2. AI Suggestions */}
      <div className="flex flex-col gap-2">
        <div>
          <div className="flex items-center gap-1.5">
            <Sparkles className="h-3 w-3 text-[#5B5AF7]" />
            <h3 className="text-xs font-bold text-slate-900">
              AI Suggestions
            </h3>
          </div>
          <p className="text-[10.5px] text-slate-500">
            See what's worth your attention.
          </p>
        </div>

        {suggestions.map((sug) => (
          <div
            key={sug.id}
            className="group flex flex-col gap-2.5 rounded-xl border border-slate-200/80 bg-slate-50/40 p-3 transition-all hover:bg-white hover:border-indigo-200 hover:shadow-2xs"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-slate-900 text-white font-bold text-xs">
                  V
                </div>
                <span className="text-xs font-bold text-slate-900">
                  {sug.title}
                </span>
              </div>
              <span className="inline-flex items-center gap-0.5 rounded-full border border-emerald-200 bg-emerald-50 px-1.5 py-0.2 text-[9px] font-semibold text-emerald-700 shrink-0">
                <ArrowUp className="h-2 w-2" />
                {sug.potentialText}
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-[10.5px] text-slate-500">
              <span className="font-semibold text-slate-700">
                Score: {sug.score}
              </span>
            </div>

            <p className="text-[11px] text-slate-600 leading-snug">
              {sug.recommendationText}
            </p>

            <div className="flex items-center justify-between pt-1">
              <Button
                variant="default"
                size="sm"
                onClick={() => onApplySuggestion?.(sug)}
                className="h-7 rounded-xl bg-[#5B5AF7] hover:bg-[#4847E5] text-xs font-semibold text-white px-3 cursor-pointer"
              >
                Apply Suggestion
              </Button>
              <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-[#5B5AF7] transition-colors" />
            </div>
          </div>
        ))}
      </div>

      {/* 3. Follow Ups */}
      <div className="flex flex-col gap-2 rounded-xl border border-slate-200/80 bg-slate-50/40 p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-slate-700">
            <Clock className="h-3.5 w-3.5 text-indigo-500" />
            <h4 className="text-xs font-bold text-slate-900">Follow Ups</h4>
          </div>
          <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
        </div>

        <div>
          <span className="text-xs font-semibold text-slate-800">
            3 sent proposals need follow up
          </span>
          <p className="text-[10.5px] text-slate-500 mt-0.5">
            No response for 5+ days.
          </p>
        </div>

        <div className="pt-1">
          <Button
            variant="outline"
            size="sm"
            onClick={onCreateFollowUp}
            className="h-7 rounded-xl border-slate-200 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-50 px-3 cursor-pointer"
          >
            Create Follow-Up
          </Button>
        </div>
      </div>

      {/* 4. Performance (Radial Donut Gauges) */}
      <div className="flex flex-col gap-2 border-t border-slate-100 pt-3.5">
        <div className="flex items-center gap-1.5">
          <BarChart3 className="h-3.5 w-3.5 text-[#5B5AF7]" />
          <h3 className="text-xs font-bold text-slate-900">Performance</h3>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-1">
          {/* Gauge 1: Avg Score 88 */}
          <div className="flex items-center gap-2.5 rounded-xl border border-slate-200/80 bg-slate-50/40 p-2.5">
            <div className="relative flex h-11 w-11 shrink-0 items-center justify-center">
              <svg className="h-full w-full -rotate-90" viewBox="0 0 36 36">
                <circle
                  cx="18"
                  cy="18"
                  r="15"
                  className="stroke-slate-200"
                  strokeWidth="3"
                  fill="none"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="15"
                  className="stroke-[#5B5AF7]"
                  strokeWidth="3"
                  strokeDasharray="94.2"
                  strokeDashoffset={94.2 * (1 - 0.88)}
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
              <span className="absolute text-[11px] font-bold text-slate-800">
                88
              </span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] font-medium text-slate-500 leading-tight">
                Avg. Proposal Score
              </span>
              <div className="flex items-center gap-0.5 text-[10px] font-semibold text-emerald-600 mt-0.5">
                <ArrowUp className="h-2.5 w-2.5" />
                <span>6%</span>
              </div>
            </div>
          </div>

          {/* Gauge 2: Win Rate 33% */}
          <div className="flex items-center gap-2.5 rounded-xl border border-slate-200/80 bg-slate-50/40 p-2.5">
            <div className="relative flex h-11 w-11 shrink-0 items-center justify-center">
              <svg className="h-full w-full -rotate-90" viewBox="0 0 36 36">
                <circle
                  cx="18"
                  cy="18"
                  r="15"
                  className="stroke-slate-200"
                  strokeWidth="3"
                  fill="none"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="15"
                  className="stroke-[#8B5CF6]"
                  strokeWidth="3"
                  strokeDasharray="94.2"
                  strokeDashoffset={94.2 * (1 - 0.33)}
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
              <span className="absolute text-[10px] font-bold text-slate-800">
                33%
              </span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] font-medium text-slate-500 leading-tight">
                Win Rate
              </span>
              <div className="flex items-center gap-0.5 text-[10px] font-semibold text-emerald-600 mt-0.5">
                <ArrowUp className="h-2.5 w-2.5" />
                <span>4%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Winning Assets */}
      <div className="flex flex-col gap-2 border-t border-slate-100 pt-3.5">
        <div className="flex items-center gap-1.5">
          <Trophy className="h-3.5 w-3.5 text-[#5B5AF7]" />
          <div>
            <h3 className="text-xs font-bold text-slate-900">
              Winning Assets
            </h3>
            <p className="text-[10px] text-slate-400">Top performing content</p>
          </div>
        </div>

        <div className="flex flex-col gap-1.5 pt-1">
          <div
            onClick={() => onAssetClick?.("Winning Introductions")}
            className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/40 p-2 hover:bg-slate-100/70 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-indigo-50 text-[#5B5AF7]">
                <FileText className="h-3 w-3" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-slate-800">
                  Winning Introductions
                </span>
                <span className="text-[9.5px] text-slate-400">
                  Used in 12 won deals
                </span>
              </div>
            </div>
            <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
          </div>

          <div
            onClick={() => onAssetClick?.("Case Studies")}
            className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/40 p-2 hover:bg-slate-100/70 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-blue-50 text-[#2563EB]">
                <Layers className="h-3 w-3" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-slate-800">
                  Case Studies
                </span>
                <span className="text-[9.5px] text-slate-400">
                  Highest conversion rate
                </span>
              </div>
            </div>
            <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
          </div>

          <div
            onClick={() => onAssetClick?.("Pricing Blocks")}
            className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/40 p-2 hover:bg-slate-100/70 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-purple-50 text-[#7C3AED]">
                <CreditCard className="h-3 w-3" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-slate-800">
                  Pricing Blocks
                </span>
                <span className="text-[9.5px] text-slate-400">
                  Most accepted by clients
                </span>
              </div>
            </div>
            <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
          </div>
        </div>
      </div>
    </aside>
  );
}

