"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Building2,
  Search,
  Bell,
  Send,
  MoreHorizontal,
  ChevronDown,
  Check,
} from "lucide-react";
import { ProposalCardItem, ProposalStageId } from "../../types";
import { toast } from "sonner";
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
  const [title, setTitle] = React.useState(proposal.title || "Website Redesign Proposal");
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
      setTitle(proposal.title || "Website Redesign Proposal");
    }
  };

  const stages: ProposalStageId[] = ["draft", "review", "ready", "sent", "won", "lost"];

  const handleSave = () => {
    toast.success("Proposal saved successfully!");
  };

  return (
    <header className="sticky top-0 z-30 flex flex-col w-full bg-white border-b border-slate-200/80 px-6 py-3 select-none shrink-0 gap-3">
      {/* Top Global Bar Row: Search + Bell + User Profile John Doe */}
      <div className="flex items-center justify-between">
        <Link
          href="/proposals"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to Proposals</span>
        </Link>

        {/* Right Search, Bell, Profile */}
        <div className="flex items-center gap-4">
          {/* Search bar */}
          <div className="relative flex items-center">
            <Search className="absolute left-3 h-3.5 w-3.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search..."
              className="h-8 w-52 rounded-xl border border-slate-200/90 bg-[#F8FAFC] pl-8 pr-9 text-xs text-slate-800 placeholder:text-slate-400 shadow-2xs focus:border-[#5B5AF7] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#5B5AF7]"
            />
            <div className="absolute right-2 flex items-center gap-0.5 rounded border border-slate-200 bg-white px-1 py-0.2 text-[9px] font-medium text-slate-400 select-none">
              <span>⌘</span>
              <span>K</span>
            </div>
          </div>

          {/* Bell Icon */}
          <button
            type="button"
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            title="Notifications"
          >
            <Bell className="h-4 w-4" />
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-2 pl-1 select-none">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120"
              alt="John Doe"
              className="h-8 w-8 rounded-full object-cover border border-slate-200"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-xs font-bold text-slate-900">John Doe</span>
              <span className="text-[11px] text-slate-400">Admin</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Proposal Header Row */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Left: Proposal Title + Status Badge */}
        <div className="flex items-center gap-3">
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
                  setTitle(proposal.title || "Website Redesign Proposal");
                  setIsEditingTitle(false);
                }
              }}
              className="h-9 rounded-lg border border-[#5B5AF7] px-2 text-xl font-bold text-slate-900 focus:outline-none focus:ring-1 focus:ring-[#5B5AF7] min-w-[280px]"
            />
          ) : (
            <h1
              onClick={() => setIsEditingTitle(true)}
              className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight cursor-pointer hover:text-[#5B5AF7] transition-colors"
              title="Click to edit title"
            >
              {title}
            </h1>
          )}

          {/* Draft Status Badge */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsStatusDropdownOpen(!isStatusDropdownOpen)}
              className="inline-flex items-center gap-1 rounded-full bg-[#EEF2FF] text-[#5B5AF7] border border-[#DDD6FE]/80 px-2.5 py-0.5 text-xs font-semibold hover:bg-[#E0E7FF] transition-colors cursor-pointer"
            >
              <span>◇</span>
              <span className="capitalize">{proposal.stageId || "Draft"}</span>
              <ChevronDown className="h-3 w-3 opacity-60" />
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
                    <span className="capitalize">{st}</span>
                    {proposal.stageId === st && (
                      <Check className="h-3.5 w-3.5 text-[#5B5AF7]" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right: Quick Metadata Info + Action Buttons */}
        <div className="flex items-center gap-6">
          {/* Metadata Info Pills */}
          <div className="hidden lg:flex items-center gap-5">
            {/* Client */}
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EEF2FF] text-[#5B5AF7]">
                <Building2 className="h-4 w-4" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xs font-bold text-slate-900">
                  {proposal.company || "Acme Inc."}
                </span>
                <span className="text-[11px] text-slate-400 font-medium">
                  Client
                </span>
              </div>
            </div>

            <div className="h-7 w-px bg-slate-200/80" />

            {/* Opportunity */}
            <div className="flex flex-col leading-tight">
              <span className="text-xs font-bold text-slate-900">
                {proposal.role || "Website Redesign"}
              </span>
              <span className="text-[11px] text-slate-400 font-medium">
                Opportunity
              </span>
            </div>

            <div className="h-7 w-px bg-slate-200/80" />

            {/* Estimated Value */}
            <div className="flex flex-col leading-tight">
              <span className="text-xs font-bold text-slate-900">
                ${(proposal.value || 12000).toLocaleString()}
              </span>
              <span className="text-[11px] text-slate-400 font-medium">
                Estimated Value
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2.5">
            {/* Save */}
            <button
              type="button"
              onClick={handleSave}
              className="rounded-xl border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-all shadow-2xs cursor-pointer"
            >
              Save
            </button>

            {/* Preview */}
            <button
              type="button"
              onClick={onPreview}
              className="rounded-xl border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-all shadow-2xs cursor-pointer"
            >
              Preview
            </button>

            {/* Send Proposal */}
            <button
              type="button"
              onClick={onSendProposal}
              className="flex items-center gap-1.5 rounded-xl bg-[#5B5AF7] hover:bg-[#4847E5] px-4 py-1.5 text-xs font-semibold text-white shadow-xs transition-all cursor-pointer"
            >
              <Send className="h-3.5 w-3.5" />
              <span>Send Proposal</span>
            </button>

            {/* More */}
            <button
              type="button"
              onClick={onOpenReview}
              className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 transition-all shadow-2xs cursor-pointer"
              title="More options"
            >
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
