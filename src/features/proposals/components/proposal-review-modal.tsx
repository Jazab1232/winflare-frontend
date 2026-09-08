"use client";

import * as React from "react";
import {
  X,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Send,
  FileDown,
  Edit3,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { ProposalCardItem } from "../types";
import { useProposalsStore } from "../store/proposals-store";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface ProposalReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  proposal: ProposalCardItem | null;
  onSendProposal?: (item: ProposalCardItem) => void;
}

export function ProposalReviewModal({
  isOpen,
  onClose,
  proposal,
  onSendProposal,
}: ProposalReviewModalProps) {
  const { applyRecommendationToProposal, moveStage } = useProposalsStore();

  const [appliedRecs, setAppliedRecs] = React.useState<Record<string, boolean>>({});

  if (!isOpen || !proposal) return null;

  const currentScore = proposal.score || 89;

  const checks = [
    {
      id: "chk-personalization",
      name: "Personalization",
      score: 92,
      status: "excellent",
      feedback: `Tailored specifically to ${proposal.company}'s tech stack and project needs.`,
    },
    {
      id: "chk-clarity",
      name: "Clarity & Structure",
      score: 95,
      status: "excellent",
      feedback: "Clean section breaks, verifiable deliverables, and transparent milestones.",
    },
    {
      id: "chk-budget",
      name: "Budget & Value Fit",
      score: 88,
      status: "good",
      feedback: `Milestone breakdown aligns well with the posted ${proposal.budget} bracket.`,
    },
    {
      id: "chk-timeline",
      name: "Timeline & Delivery Fit",
      score: 82,
      status: "good",
      feedback: "Realistic 4-week timeline with built-in QA buffers and checkpoint reviews.",
    },
    {
      id: "chk-portfolio",
      name: "Portfolio Relevance",
      score: 85,
      status: "good",
      feedback: "Case studies demonstrate relevant React & Next.js production architecture.",
    },
  ];

  const recommendations = [
    {
      id: "rec-case-study",
      title: "Add FinVault SaaS Case Study",
      description: "Attaching proven multi-tenant Stripe integration metrics will boost credibility.",
      impact: "+5 pts",
    },
    {
      id: "rec-shorten-intro",
      title: "Shorten Introduction",
      description: "Cut introductory opening by 25 words for a punchier, problem-first hook.",
      impact: "+3 pts",
    },
    {
      id: "rec-saas-exp",
      title: "Highlight Enterprise SaaS Experience",
      description: "Explicitly reference seed-to-scale SaaS architecture in the 'Why Me' section.",
      impact: "+4 pts",
    },
  ];

  const handleApplyRec = (recId: string) => {
    applyRecommendationToProposal(proposal.id, recId);
    setAppliedRecs((prev) => ({ ...prev, [recId]: true }));
    toast.success("AI Recommendation applied directly to proposal!");
  };

  const handleSend = () => {
    if (onSendProposal) {
      onSendProposal(proposal);
    } else {
      moveStage(proposal.id, "sent");
      toast.success(`Proposal sent to ${proposal.company}!`);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl transition-all">
        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F5F3FF] text-[#7C3AED] border border-[#DDD6FE]">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Proposal Quality Review
              </h2>
              <p className="text-xs text-slate-500">
                Pre-flight conversion diagnostics for {proposal.company}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="space-y-6 pt-5">
          {/* Top Score Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-[#DDD6FE] bg-gradient-to-r from-[#F5F3FF] to-white p-4">
            <div className="flex items-center gap-4">
              {/* Circular Gauge / Badge */}
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white border border-[#DDD6FE] shadow-sm shrink-0">
                <div className="flex flex-col items-center">
                  <span className="text-xl font-extrabold text-[#7C3AED] leading-none">
                    {currentScore}
                  </span>
                  <span className="text-[9px] font-bold text-slate-400 uppercase mt-0.5">
                    / 100
                  </span>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold text-slate-900">
                    High Conversion Probability
                  </span>
                  <span className="rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5">
                    Ready to Send
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-0.5">
                  This proposal scores in the top 8% of successful proposals in your category.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleSend}
                className="flex items-center gap-1.5 rounded-xl bg-[#7C3AED] px-4 py-2 text-xs font-bold text-white hover:bg-[#6D28D9] shadow-sm transition-all cursor-pointer"
              >
                <Send className="h-3.5 w-3.5" />
                <span>Send Now</span>
              </button>
            </div>
          </div>

          {/* Diagnostic Checks Breakdown */}
          <div>
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">
              Diagnostic Checks
            </h3>
            <div className="space-y-2.5">
              {checks.map((chk) => (
                <div
                  key={chk.id}
                  className="rounded-xl border border-slate-200/80 bg-white p-3 space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">
                      {chk.name}
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[#7C3AED]"
                          style={{ width: `${chk.score}%` }}
                        />
                      </div>
                      <span className="text-xs font-bold text-slate-800 min-w-[28px] text-right">
                        {chk.score}%
                      </span>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-500">{chk.feedback}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Actionable Recommendations */}
          <div>
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">
              AI Recommendations to Maximize Win Rate
            </h3>
            <div className="space-y-2">
              {recommendations.map((rec) => {
                const isApplied = appliedRecs[rec.id];
                return (
                  <div
                    key={rec.id}
                    className={cn(
                      "flex items-center justify-between p-3 rounded-xl border transition-all text-xs",
                      isApplied
                        ? "border-emerald-200 bg-emerald-50/60"
                        : "border-slate-200/80 bg-[#FAFAFA]"
                    )}
                  >
                    <div className="space-y-0.5 pr-3">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900">
                          {rec.title}
                        </span>
                        <span className="rounded bg-[#EDE9FE] text-[#6D28D9] font-bold text-[10px] px-1.5 py-0.5">
                          {rec.impact}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600">
                        {rec.description}
                      </p>
                    </div>

                    <button
                      type="button"
                      disabled={isApplied}
                      onClick={() => handleApplyRec(rec.id)}
                      className={cn(
                        "rounded-lg px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-all cursor-pointer",
                        isApplied
                          ? "bg-emerald-600 text-white cursor-default"
                          : "bg-white border border-[#DDD6FE] text-[#7C3AED] hover:bg-[#F5F3FF]"
                      )}
                    >
                      {isApplied ? "Applied ✓" : "Apply"}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={() => {
                toast.success("Proposal exported to branded PDF document!");
              }}
              className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <FileDown className="h-4 w-4 text-slate-400" />
              <span>Export PDF</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Return to Editor
              </button>
              <button
                type="button"
                onClick={handleSend}
                className="flex items-center gap-2 rounded-xl bg-[#7C3AED] px-5 py-2 text-xs font-bold text-white hover:bg-[#6D28D9] shadow-sm transition-all cursor-pointer"
              >
                <Send className="h-4 w-4" />
                <span>Publish & Send Proposal</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

