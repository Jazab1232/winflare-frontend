"use client";

import * as React from "react";
import {
  X,
  Sparkles,
  DollarSign,
  Send,
  CheckCircle2,
  Clock,
  ExternalLink,
} from "lucide-react";
import { ProposalCardItem, ProposalStageId } from "../types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProposalDetailModalProps {
  item: ProposalCardItem | null;
  isOpen: boolean;
  onClose: () => void;
  onMoveStage?: (item: ProposalCardItem, newStage: ProposalStageId) => void;
  onSendProposal?: (item: ProposalCardItem) => void;
}

const STAGES: { id: ProposalStageId; label: string }[] = [
  { id: "draft", label: "Draft" },
  { id: "review", label: "Review" },
  { id: "ready", label: "Ready" },
  { id: "sent", label: "Sent" },
  { id: "won", label: "Won" },
];

export function ProposalDetailModal({
  item,
  isOpen,
  onClose,
  onMoveStage,
  onSendProposal,
}: ProposalDetailModalProps) {
  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-xs p-4 animate-in fade-in-50">
      <div className="relative w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-xl p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Company & Role Header */}
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
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              {item.company}
            </span>
            <h2 className="text-lg font-bold text-slate-900 leading-snug">
              {item.role}
            </h2>
            <div className="mt-1 flex items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                <Sparkles className="h-3 w-3" />
                Score {item.score}
              </span>
              <span className="text-xs font-bold text-slate-700">
                {item.budget}
              </span>
            </div>
          </div>
        </div>

        {/* Stage Status */}
        <div className="mt-5 flex flex-col gap-2">
          <label className="text-xs font-bold text-slate-700">
            Pipeline Stage
          </label>
          <div className="grid grid-cols-5 gap-1.5">
            {STAGES.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => onMoveStage?.(item, s.id)}
                className={cn(
                  "rounded-xl border py-2 px-1 text-xs font-semibold transition-all cursor-pointer text-center",
                  item.stageId === s.id
                    ? "border-[#5B5AF7] bg-indigo-50 text-[#5B5AF7] shadow-2xs"
                    : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                )}
              >
                {s.label}
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
              onSendProposal?.(item);
              onClose();
            }}
            className="rounded-xl bg-[#5B5AF7] hover:bg-[#4847E5] text-xs font-semibold text-white shadow-xs gap-1.5 cursor-pointer"
          >
            <Send className="h-3.5 w-3.5" />
            <span>Send Proposal</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

