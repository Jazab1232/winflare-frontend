"use client";

import * as React from "react";
import { X, Check, Edit2 } from "lucide-react";
import { ProposalCardItem } from "../types";
import { useProposalsStore } from "../store/proposals-store";
import { toast } from "sonner";

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
  const { moveStage } = useProposalsStore();

  if (!isOpen || !proposal) return null;

  const score = proposal.score || 89;

  const checks = [
    { name: "Personalization", score: 92 },
    { name: "Clarity", score: 88 },
    { name: "Budget Fit", score: 84 },
    { name: "Timeline Fit", score: 90 },
    { name: "Portfolio Relevance", score: 86 },
  ];

  const recommendations = [
    "Add a case study to build more credibility.",
    "Shorten the introduction (currently a bit long).",
    "Mention your SaaS experience (highly relevant).",
  ];

  const handleSend = () => {
    if (onSendProposal) {
      onSendProposal(proposal);
    } else {
      moveStage(proposal.id, "sent");
      toast.success(`Proposal sent to ${proposal.company}!`);
    }
    onClose();
  };

  const handleSaveDraft = () => {
    toast.success("Proposal draft saved successfully!");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card (Exact match to Screen 6) */}
      <div className="relative w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl transition-all space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <h2 className="text-lg font-bold text-slate-900 tracking-tight">
            Proposal Review
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Top Split Section: Donut Score & Checks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Left: Donut Gauge + Score Title */}
          <div className="flex items-center gap-5">
            {/* SVG Donut Ring */}
            <div className="relative h-24 w-24 shrink-0 flex items-center justify-center">
              <svg className="h-full w-full -rotate-90" viewBox="0 0 36 36">
                {/* Background Ring */}
                <path
                  className="text-slate-100"
                  strokeWidth="3.5"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                {/* Score Ring */}
                <path
                  className="text-[#5B5AF7]"
                  strokeDasharray={`${score}, 100`}
                  strokeLinecap="round"
                  strokeWidth="3.5"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-sm font-bold text-slate-900">
                  {score}/100
                </span>
              </div>
            </div>

            {/* Score Text */}
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-slate-900">
                Proposal Score
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Great! This proposal is well-structured and compelling.
              </p>
            </div>
          </div>

          {/* Right: Checks List */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-slate-800">
              Checks
            </h4>
            <div className="space-y-1.5 text-xs">
              {checks.map((c, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-slate-700">
                    <Check className="h-3.5 w-3.5 text-emerald-600 stroke-[2.5]" />
                    <span>{c.name}</span>
                  </div>
                  <span className="font-semibold text-emerald-600 text-xs">
                    {c.score}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Recommendations Section */}
        <div className="space-y-2 pt-2 border-t border-slate-100">
          <h4 className="text-xs font-semibold text-slate-800">
            Recommendations
          </h4>
          <ul className="space-y-1.5 text-xs text-slate-600">
            {recommendations.map((rec, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-amber-500 font-bold leading-none mt-0.5">•</span>
                <span>{rec}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Actions matching screenshot 6 */}
        <div className="flex items-center justify-end gap-2.5 pt-4 border-t border-slate-100">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-all shadow-2xs cursor-pointer"
          >
            <Edit2 className="h-3 w-3 text-slate-400" />
            <span>Edit</span>
          </button>

          <button
            type="button"
            onClick={handleSaveDraft}
            className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-all shadow-2xs cursor-pointer"
          >
            Save Draft
          </button>

          <button
            type="button"
            onClick={handleSend}
            className="rounded-xl bg-[#5B5AF7] hover:bg-[#4847E5] px-5 py-2 text-xs font-semibold text-white shadow-xs transition-all cursor-pointer"
          >
            Send Proposal
          </button>
        </div>
      </div>
    </div>
  );
}
