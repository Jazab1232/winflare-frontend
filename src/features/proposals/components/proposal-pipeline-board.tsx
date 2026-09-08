"use client";

import * as React from "react";
import {
  Sparkles,
  ArrowRight,
  LayoutGrid,
  FileText,
  Layers,
  CreditCard,
} from "lucide-react";
import {
  ProposalStageConfig,
  ProposalCardItem,
  ProposalStageId,
} from "../types";
import { ProposalCard } from "./proposal-card";
import { cn } from "@/lib/utils";

interface ProposalPipelineBoardProps {
  stages: ProposalStageConfig[];
  items: ProposalCardItem[];
  onOpenProposal: (item: ProposalCardItem) => void;
  onViewAll?: () => void;
}

export function ProposalPipelineBoard({
  stages,
  items,
  onOpenProposal,
  onViewAll,
}: ProposalPipelineBoardProps) {
  return (
    <div className="flex flex-col gap-3 px-6 pb-4 select-none">
      {/* Header Row */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-sm font-bold tracking-tight text-slate-900">
            Proposal Pipeline
          </h2>
          <p className="text-[11px] text-slate-500">
            Track your proposals from draft to won.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onViewAll}
            className="text-xs font-semibold text-[#5B5AF7] hover:underline cursor-pointer"
          >
            View All
          </button>
          <button
            type="button"
            className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 shadow-2xs hover:bg-slate-50"
          >
            <LayoutGrid className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Board Columns Grid */}
      <div className="flex gap-3 overflow-x-auto pb-2 custom-scrollbar items-start">
        {stages.map((stage) => {
          const stageItems = items.filter((item) => item.stageId === stage.id);

          return (
            <div
              key={stage.id}
              className="flex w-[210px] shrink-0 flex-col rounded-2xl bg-slate-50/50 p-2 border border-slate-200/60"
            >
              {/* Column Header */}
              <div
                className={cn(
                  "flex items-center justify-between rounded-xl px-3 py-1.5 border mb-2",
                  stage.theme.headerBg,
                  stage.theme.headerBorder
                )}
              >
                <span className="text-xs font-bold text-slate-800">
                  {stage.title}
                </span>

                {stage.count !== undefined && (
                  <span
                    className={cn(
                      "flex h-4 min-w-[18px] items-center justify-center rounded-full px-1.5 text-[10px] font-bold shadow-2xs",
                      stage.theme.badgeBg,
                      stage.theme.badgeText
                    )}
                  >
                    {stage.count}
                  </span>
                )}
              </div>

              {/* Cards List */}
              <div className="flex flex-col gap-2">
                {stageItems.map((item) => (
                  <ProposalCard
                    key={item.id}
                    item={item}
                    onOpen={onOpenProposal}
                  />
                ))}
              </div>
            </div>
          );
        })}

        {/* 6th Column: Embedded AI Command Card */}
        <div className="flex w-[210px] shrink-0 flex-col rounded-2xl border border-slate-200/80 bg-white p-3 shadow-2xs">
          <div className="flex items-center gap-1.5 pb-1 text-[#5B5AF7]">
            <Sparkles className="h-3.5 w-3.5" />
            <h3 className="text-xs font-bold text-slate-900">AI Command</h3>
          </div>
          <span className="text-[10px] text-slate-500">
            Top performing content.
          </span>

          <div className="mt-3 flex flex-col gap-2">
            {/* Item 1 */}
            <div className="flex items-start gap-2 rounded-xl border border-slate-100 bg-slate-50/60 p-2 transition-colors hover:bg-slate-100/70 cursor-pointer">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-[#5B5AF7]">
                <FileText className="h-3 w-3" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] font-bold text-slate-800 leading-tight">
                  Winning Introductions
                </span>
                <span className="text-[9.5px] text-slate-400 mt-0.5">
                  Used in 12 won deals
                </span>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-2 rounded-xl border border-slate-100 bg-slate-50/60 p-2 transition-colors hover:bg-slate-100/70 cursor-pointer">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#2563EB]">
                <Layers className="h-3 w-3" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] font-bold text-slate-800 leading-tight">
                  Case Studies
                </span>
                <span className="text-[9.5px] text-slate-400 mt-0.5">
                  Highest conversion rate
                </span>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-2 rounded-xl border border-slate-100 bg-slate-50/60 p-2 transition-colors hover:bg-slate-100/70 cursor-pointer">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-purple-50 text-[#7C3AED]">
                <CreditCard className="h-3 w-3" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] font-bold text-slate-800 leading-tight">
                  Pricing Blocks
                </span>
                <span className="text-[9.5px] text-slate-400 mt-0.5">
                  Most accepted by clients
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

