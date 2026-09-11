"use client";

import * as React from "react";
import {
  Target,
  FileText,
  Send,
  Users,
  Handshake,
  Trophy,
  Plus,
} from "lucide-react";
import {
  PipelineStageConfig,
  PipelineItem,
  PipelineStageId,
} from "../types";
import { PipelineCard } from "./pipeline-card";
import { cn } from "@/lib/utils";

interface PipelineKanbanBoardProps {
  stages: PipelineStageConfig[];
  items: PipelineItem[];
  onOpenDetails: (item: PipelineItem) => void;
  onGenerateProposal: (item: PipelineItem) => void;
  onViewProposal: (item: PipelineItem) => void;
  onMoveStage: (item: PipelineItem) => void;
  onAddOpportunity: (stageId: PipelineStageId) => void;
}

const STAGE_ICONS: Record<
  PipelineStageId,
  React.ComponentType<{ className?: string }>
> = {
  qualified: Target,
  proposal_drafting: FileText,
  applied: Send,
  interview: Users,
  negotiation: Handshake,
  won: Trophy,
};

export function PipelineKanbanBoard({
  stages,
  items,
  onOpenDetails,
  onGenerateProposal,
  onViewProposal,
  onMoveStage,
  onAddOpportunity,
}: PipelineKanbanBoardProps) {
  return (
    <div className="overflow-x-auto px-6 pb-8 custom-scrollbar">
      <div className="flex gap-4 min-w-[1400px] items-start">
        {stages.map((stage) => {
          const StageIcon = STAGE_ICONS[stage.id] || Target;
          const stageItems = items.filter((item) => item.stageId === stage.id);

          return (
            <div
              key={stage.id}
              className="flex w-[230px] shrink-0 flex-col rounded-2xl bg-slate-50/50 p-2 border border-slate-200/60 select-none"
            >
              {/* Column Header */}
              <div
                className={cn(
                  "flex items-center justify-between rounded-xl px-3 py-2 border mb-2.5",
                  stage.theme.headerBg,
                  stage.theme.headerBorder
                )}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={cn(
                      "flex h-5 w-5 items-center justify-center rounded-full bg-white/90 shadow-2xs",
                      stage.theme.iconColor
                    )}
                  >
                    <StageIcon className="h-3 w-3" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">
                    {stage.title}
                  </span>
                </div>

                {/* Badge Count */}
                <span
                  className={cn(
                    "flex h-5 min-w-[20px] items-center justify-center rounded-full px-1.5 text-[11px] font-bold shadow-2xs",
                    stage.theme.badgeBg,
                    stage.theme.badgeText
                  )}
                >
                  {stage.count}
                </span>
              </div>

              {/* Cards List */}
              <div className="flex flex-col gap-2.5">
                {stageItems.map((item) => (
                  <PipelineCard
                    key={item.id}
                    item={item}
                    onOpenDetails={onOpenDetails}
                    onGenerateProposal={onGenerateProposal}
                    onViewProposal={onViewProposal}
                    onMoveStage={onMoveStage}
                  />
                ))}
              </div>

              {/* Add Opportunity Button */}
              <button
                type="button"
                onClick={() => onAddOpportunity(stage.id)}
                className="mt-2.5 flex w-full items-center justify-center gap-1.5 rounded-xl border border-dashed border-slate-200/90 bg-white/60 py-2 text-xs font-medium text-slate-500 hover:border-indigo-300 hover:bg-white hover:text-[#5B5AF7] transition-all cursor-pointer shadow-2xs"
              >
                <Plus className="h-3.5 w-3.5" />
                <span>Add Opportunity</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

