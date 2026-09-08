"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Sparkles,
  Send,
  Eye,
  MoreHorizontal,
  ChevronDown,
  Check,
} from "lucide-react";
import { ProposalCardItem, ProposalStageId } from "../../types";
import { ProposalStatusBadge } from "../proposal-status-badge";
import { cn } from "@/lib/utils";

interface ProposalEditorHeaderProps {
  proposal: ProposalCardItem;
  onUpdateTitle: (title: string) => void;
  onUpdateStage: (stage: ProposalStageId) => void;
  onOpenReview: () => void;
  onSendProposal: () => void;
  onPreview: () => void;
}

export function ProposalEditorHeader({
  proposal,
  onUpdateTitle,
  onUpdateStage,
  onOpenReview,
  onSendProposal,
  onPreview,
}: ProposalEditorHeaderProps) {
  const [isEditingTitle, setIsEditingTitle] = React.useState(false);
  const [title, setTitle] = React.useState(proposal.title || "Acme Website Redesign");
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = React.useState(false);

  React.useEffect(() => {
    if (proposal.title) {
      setTitle(proposal.title);
    }
  }, [proposal.title]);

  const handleTitleSubmit = () => {
    setIsEditingTitle(false);
    if (title.trim()) {
      onUpdateTitle(title.trim());
    } else {
      setTitle(proposal.title);
    }
  };

  const stages: ProposalStageId[] = ["draft", "review", "ready", "sent", "won", "lost"];

  return (
    <header className="sticky top-0 z-30 flex h-14 w-full items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6 select-none shadow-2xs">
      {/* Left: Brand + Back to Proposals + Title & Status */}
      <div className="flex items-center gap-4 min-w-0">
        {/* Winflare Logo */}
        <Link href="/dashboard" className="flex items-center gap-2 pr-2 border-r border-slate-200">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#7C3AED] text-white shadow-2xs">
            <Sparkles className="h-4 w-4" />
          </div>
          <span className="text-base font-bold text-slate-900 tracking-tight">
            Winflare
          </span>
        </Link>

        {/* Back Link */}
        <Link
          href="/proposals"
          className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors pr-3 border-r border-slate-200"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Proposals</span>
        </Link>

        {/* Title, Client & Metadata */}
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-2 min-w-0">
              {isEditingTitle ? (
                <input
                  type="text"
                  autoFocus
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  onBlur={handleTitleSubmit}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleTitleSubmit();
                    if (e.key === "Escape") {
                      setTitle(proposal.title);
                      setIsEditingTitle(false);
                    }
                  }}
                  className="h-6 rounded border border-[#7C3AED] px-1.5 text-xs font-bold text-slate-900 focus:outline-none focus:ring-1 focus:ring-[#7C3AED] min-w-[200px]"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setIsEditingTitle(true)}
                  className="text-xs font-bold text-slate-900 hover:text-[#7C3AED] transition-colors truncate text-left max-w-[220px] md:max-w-xs cursor-pointer"
                  title="Click to edit title"
                >
                  {title}
                </button>
              )}

              {/* Status Badge Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsStatusDropdownOpen(!isStatusDropdownOpen)}
                  className="flex items-center gap-1 cursor-pointer"
                >
                  <ProposalStatusBadge status={proposal.stageId} />
                  <ChevronDown className="h-3 w-3 text-slate-400" />
                </button>

                {isStatusDropdownOpen && (
                  <div className="absolute left-0 top-full mt-1.5 w-36 rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl z-40 space-y-0.5">
                    {stages.map((st) => (
                      <button
                        key={st}
                        type="button"
                        onClick={() => {
                          onUpdateStage(st);
                          setIsStatusDropdownOpen(false);
                        }}
                        className="flex w-full items-center justify-between rounded-lg px-2 py-1.5 text-xs font-semibold capitalize text-slate-700 hover:bg-slate-50 transition-colors"
                      >
                        <ProposalStatusBadge status={st} />
                        {proposal.stageId === st && (
                          <Check className="h-3.5 w-3.5 text-[#7C3AED]" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <span className="font-medium text-slate-600 truncate max-w-[120px]">
                {proposal.company}
              </span>
              <span>•</span>
              <span>Saved 2 minutes ago</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Action Controls */}
      <div className="flex items-center gap-2.5">
        {/* Preview Button */}
        <button
          type="button"
          onClick={onPreview}
          className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-all shadow-2xs cursor-pointer"
        >
          <Eye className="h-3.5 w-3.5 text-slate-500" />
          <span>Preview</span>
        </button>

        {/* More button */}
        <button
          type="button"
          onClick={() => {}}
          className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 transition-all shadow-2xs cursor-pointer"
          title="More options"
        >
          <MoreHorizontal className="h-4 w-4" />
        </button>

        {/* Review Proposal */}
        <button
          type="button"
          onClick={onOpenReview}
          className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-800 hover:border-[#DDD6FE] hover:bg-[#F5F3FF] hover:text-[#7C3AED] transition-all shadow-2xs cursor-pointer"
        >
          <Sparkles className="h-3.5 w-3.5 text-[#7C3AED]" />
          <span>Review Proposal</span>
        </button>

        {/* Send Proposal */}
        <button
          type="button"
          onClick={onSendProposal}
          className="flex items-center gap-1.5 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] px-4 py-1.5 text-xs font-bold text-white shadow-xs transition-all cursor-pointer"
        >
          <span>Send Proposal</span>
          <span className="text-sm leading-none">→</span>
        </button>
      </div>
    </header>
  );
}
