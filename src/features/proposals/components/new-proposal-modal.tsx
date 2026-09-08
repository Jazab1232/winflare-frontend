"use client";

import * as React from "react";
import { X, Plus } from "lucide-react";
import { ProposalCardItem, ProposalStageId } from "../types";
import { DEFAULT_PROPOSAL_SECTIONS } from "../data/mock-proposals";
import { Button } from "@/components/ui/button";

interface NewProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (newItem: ProposalCardItem) => void;
}

export function NewProposalModal({
  isOpen,
  onClose,
  onSubmit,
}: NewProposalModalProps) {
  const [company, setCompany] = React.useState("");
  const [role, setRole] = React.useState("");
  const [budget, setBudget] = React.useState("$5,000 Project");
  const [stageId, setStageId] = React.useState<ProposalStageId>("draft");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!company.trim() || !role.trim()) return;

    const numericValue = parseInt(budget.replace(/[^0-9]/g, "")) || 5000;
    const newItem: ProposalCardItem = {
      id: `prop-${Date.now()}`,
      title: `${role.trim()} Architecture & Execution`,
      stageId,
      company: company.trim(),
      role: role.trim(),
      budget: budget.trim() || "$5,000 Project",
      value: numericValue,
      score: Math.floor(Math.random() * 20) + 75,
      badges: [{ label: "High Value", type: "value" }],
      createdAt: new Date().toISOString().slice(0, 10),
      timeInfo: "Created just now",
      logoLetter: company.trim().charAt(0).toUpperCase(),
      logoBg: "bg-[#7C3AED]",
      proposalType: "fixed_price",
      sections: DEFAULT_PROPOSAL_SECTIONS.map((s) => ({
        ...s,
        content: s.content.replace(/Verve Labs/g, company.trim()),
      })),
    };

    onSubmit(newItem);
    setCompany("");
    setRole("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-xs p-4 animate-in fade-in-50">
      <div className="relative w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-xl p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="text-lg font-bold text-slate-900">Create New Proposal</h2>
        <p className="text-xs text-slate-500 mt-0.5">
          Draft a tailored proposal for your client or project.
        </p>

        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3.5">
          <div>
            <label className="text-xs font-semibold text-slate-700">
              Company Name
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Verve Labs"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="mt-1 h-9 w-full rounded-xl border border-slate-200 px-3 text-xs text-slate-800 placeholder:text-slate-400 focus:border-[#5B5AF7] focus:outline-none focus:ring-1.5 focus:ring-[#5B5AF7]/20"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700">
              Role / Project Scope
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Senior Frontend Developer"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="mt-1 h-9 w-full rounded-xl border border-slate-200 px-3 text-xs text-slate-800 placeholder:text-slate-400 focus:border-[#5B5AF7] focus:outline-none focus:ring-1.5 focus:ring-[#5B5AF7]/20"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-slate-700">
                Budget
              </label>
              <input
                type="text"
                placeholder="$5,000 Project"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="mt-1 h-9 w-full rounded-xl border border-slate-200 px-3 text-xs text-slate-800 placeholder:text-slate-400 focus:border-[#5B5AF7] focus:outline-none focus:ring-1.5 focus:ring-[#5B5AF7]/20"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700">
                Initial Stage
              </label>
              <select
                value={stageId}
                onChange={(e) => setStageId(e.target.value as ProposalStageId)}
                className="mt-1 h-9 w-full rounded-xl border border-slate-200 bg-white px-2.5 text-xs text-slate-800 focus:border-[#5B5AF7] focus:outline-none focus:ring-1.5 focus:ring-[#5B5AF7]/20 cursor-pointer"
              >
                <option value="draft">Draft</option>
                <option value="review">Review</option>
                <option value="ready">Ready</option>
                <option value="sent">Sent</option>
                <option value="won">Won</option>
              </select>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-end gap-2.5 border-t border-slate-100 pt-3.5">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={onClose}
              className="rounded-xl border-slate-200 text-xs font-medium cursor-pointer"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="default"
              size="sm"
              className="rounded-xl bg-[#5B5AF7] hover:bg-[#4847E5] text-xs font-semibold text-white shadow-xs gap-1.5 px-3.5 cursor-pointer"
            >
              <Plus className="h-4 w-4" />
              <span>Create Proposal</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

