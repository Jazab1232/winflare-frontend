"use client";

import * as React from "react";
import {
  X,
  ExternalLink,
  MapPin,
  Sparkles,
  DollarSign,
  Briefcase,
  CheckCircle,
  Clock,
  ArrowRight,
} from "lucide-react";
import { PipelineItem, PipelineStageId } from "../types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PipelineDetailModalProps {
  item: PipelineItem | null;
  isOpen: boolean;
  onClose: () => void;
  onMoveStage?: (item: PipelineItem, newStage: PipelineStageId) => void;
  onGenerateProposal?: (item: PipelineItem) => void;
}

const STAGES_LIST: { id: PipelineStageId; label: string }[] = [
  { id: "qualified", label: "Qualified" },
  { id: "proposal_drafting", label: "Proposal Drafting" },
  { id: "applied", label: "Applied" },
  { id: "interview", label: "Interview" },
  { id: "negotiation", label: "Negotiation" },
  { id: "won", label: "Won" },
];

export function PipelineDetailModal({
  item,
  isOpen,
  onClose,
  onMoveStage,
  onGenerateProposal,
}: PipelineDetailModalProps) {
  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-xs p-4 animate-in fade-in-50">
      <div className="relative w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-xl p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Top: Company Avatar & Role */}
        <div className="flex items-start gap-3.5 pr-8">
          <div
            className={cn(
              "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white font-bold text-lg shadow-xs",
              item.logoBg
            )}
          >
            {item.logoLetter}
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5 text-slate-500 text-xs">
              <span>{item.company}</span>
              <ExternalLink className="h-3 w-3" />
            </div>
            <h2 className="text-lg font-bold text-slate-900 leading-snug">
              {item.role}
            </h2>
            <div className="mt-1 flex items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                <Sparkles className="h-3 w-3" />
                {item.matchScore}% Match
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs font-medium text-slate-600">
                {item.priority.toUpperCase()} PRIORITY
              </span>
            </div>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="mt-5 grid grid-cols-2 gap-3 rounded-xl border border-slate-100 bg-slate-50/60 p-3">
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-slate-400" />
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400">Compensation</span>
              <span className="text-xs font-bold text-slate-800">
                {item.salary}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-slate-400" />
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400">Work Model</span>
              <span className="text-xs font-bold text-slate-800">
                {item.location}
              </span>
            </div>
          </div>
        </div>

        {/* Change Stage Selector */}
        <div className="mt-5 flex flex-col gap-2">
          <label className="text-xs font-bold text-slate-700">
            Current Stage
          </label>
          <div className="grid grid-cols-3 gap-2">
            {STAGES_LIST.map((stage) => (
              <button
                key={stage.id}
                type="button"
                onClick={() => onMoveStage?.(item, stage.id)}
                className={cn(
                  "rounded-xl border py-2 px-2.5 text-xs font-semibold transition-all cursor-pointer text-center",
                  item.stageId === stage.id
                    ? "border-[#5B5AF7] bg-indigo-50 text-[#5B5AF7] shadow-2xs"
                    : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                )}
              >
                {stage.label}
              </button>
            ))}
          </div>
        </div>

        {/* Actions Footer */}
        <div className="mt-6 flex items-center justify-end gap-2.5 border-t border-slate-100 pt-4">
          <Button
            variant="outline"
            size="sm"
            onClick={onClose}
            className="rounded-xl border-slate-200 text-xs font-medium cursor-pointer"
          >
            Close
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={() => {
              onGenerateProposal?.(item);
              onClose();
            }}
            className="rounded-xl bg-[#5B5AF7] hover:bg-[#4847E5] text-xs font-semibold text-white shadow-xs gap-1.5 cursor-pointer"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Generate Proposal</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

