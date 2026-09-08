"use client";

import * as React from "react";
import Link from "next/link";
import {
  X,
  Edit3,
  Send,
  Sparkles,
  ExternalLink,
  Clock,
  MessageSquare,
  History,
  FileText,
  DollarSign,
  User,
  Calendar,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { ProposalCardItem, ProposalStageId } from "../types";
import { ProposalStatusBadge } from "./proposal-status-badge";
import { cn } from "@/lib/utils";

interface ProposalDrawerProps {
  item: ProposalCardItem | null;
  isOpen: boolean;
  onClose: () => void;
  onMoveStage: (id: string, stage: ProposalStageId) => void;
  onAddComment: (proposalId: string, text: string) => void;
  onSendProposal: (item: ProposalCardItem) => void;
  onOpenReview?: (item: ProposalCardItem) => void;
}

export function ProposalDrawer({
  item,
  isOpen,
  onClose,
  onMoveStage,
  onAddComment,
  onSendProposal,
  onOpenReview,
}: ProposalDrawerProps) {
  const [commentText, setCommentText] = React.useState("");
  const [activeTab, setActiveTab] = React.useState<"timeline" | "versions" | "comments">("timeline");

  if (!isOpen || !item) return null;

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    onAddComment(item.id, commentText);
    setCommentText("");
  };

  const stages: ProposalStageId[] = ["draft", "review", "ready", "sent", "won", "lost"];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-2xs transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <aside className="w-screen max-w-md bg-white border-l border-slate-200 shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-250">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-200/80 px-6 py-4 bg-[#F8F8FA]">
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-xl text-white font-bold text-sm shadow-2xs",
                  item.logoBg || "bg-[#7C3AED]"
                )}
              >
                {item.logoLetter || item.company.slice(0, 1)}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider truncate">
                  {item.company}
                </span>
                <h2 className="text-sm font-bold text-slate-900 truncate">
                  {item.role}
                </h2>
              </div>
            </div>

            <button
              onClick={onClose}
              className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-200/60 hover:text-slate-700 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6">
            {/* Status Selector & Value Bar */}
            <div className="rounded-xl border border-slate-200/80 bg-[#FAFAFA] p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500">
                  Current Status
                </span>
                <ProposalStatusBadge status={item.stageId} />
              </div>

              {/* Status Pill Buttons */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {stages.map((stage) => {
                  const isCurrent = item.stageId === stage;
                  return (
                    <button
                      key={stage}
                      onClick={() => onMoveStage(item.id, stage)}
                      className={cn(
                        "rounded-md px-2 py-1 text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer",
                        isCurrent
                          ? "bg-[#7C3AED] text-white shadow-2xs"
                          : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      )}
                    >
                      {stage}
                    </button>
                  );
                })}
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-200/60">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">
                    Proposal Value
                  </span>
                  <p className="text-base font-bold text-slate-900">
                    ${item.value?.toLocaleString() || "5,000"}
                  </p>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">
                    AI Quality Score
                  </span>
                  <button
                    onClick={() => onOpenReview?.(item)}
                    className="flex items-center gap-1.5 text-base font-bold text-[#7C3AED] hover:underline cursor-pointer"
                  >
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>{item.score}/100</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Client & Opportunity Info */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Client Information
              </h3>
              <div className="rounded-xl border border-slate-200/80 p-3.5 bg-white space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-600">
                  <span className="text-slate-400">Contact</span>
                  <span className="font-semibold text-slate-800">
                    {item.clientContact?.name || "Hiring Lead"}
                  </span>
                </div>
                <div className="flex items-center justify-between text-slate-600">
                  <span className="text-slate-400">Email</span>
                  <span className="text-slate-800">
                    {item.clientContact?.email || "team@client.com"}
                  </span>
                </div>
                <div className="flex items-center justify-between text-slate-600">
                  <span className="text-slate-400">Location</span>
                  <span className="text-slate-800">
                    {item.clientContact?.location || "Remote / US"}
                  </span>
                </div>
                <div className="flex items-center justify-between text-slate-600">
                  <span className="text-slate-400">Posted Budget</span>
                  <span className="font-semibold text-emerald-700">
                    {item.budget}
                  </span>
                </div>
              </div>
            </div>

            {/* Opportunity Context Highlights */}
            {item.opportunityDetails && (
              <div className="space-y-2">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Target Requirements
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {item.opportunityDetails.requirements.map((req, i) => (
                    <span
                      key={i}
                      className="rounded-md border border-slate-200 bg-[#F8F8FA] px-2 py-0.5 text-[11px] font-medium text-slate-700"
                    >
                      {req}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Tabs: Timeline | Versions | Comments */}
            <div className="space-y-3">
              <div className="flex border-b border-slate-200">
                <button
                  onClick={() => setActiveTab("timeline")}
                  className={cn(
                    "flex-1 pb-2 text-xs font-bold text-center border-b-2 transition-all cursor-pointer",
                    activeTab === "timeline"
                      ? "border-[#7C3AED] text-[#7C3AED]"
                      : "border-transparent text-slate-500 hover:text-slate-800"
                  )}
                >
                  Activity Timeline
                </button>
                <button
                  onClick={() => setActiveTab("versions")}
                  className={cn(
                    "flex-1 pb-2 text-xs font-bold text-center border-b-2 transition-all cursor-pointer",
                    activeTab === "versions"
                      ? "border-[#7C3AED] text-[#7C3AED]"
                      : "border-transparent text-slate-500 hover:text-slate-800"
                  )}
                >
                  Version History
                </button>
                <button
                  onClick={() => setActiveTab("comments")}
                  className={cn(
                    "flex-1 pb-2 text-xs font-bold text-center border-b-2 transition-all cursor-pointer",
                    activeTab === "comments"
                      ? "border-[#7C3AED] text-[#7C3AED]"
                      : "border-transparent text-slate-500 hover:text-slate-800"
                  )}
                >
                  Comments ({item.comments?.length || 0})
                </button>
              </div>

              {/* Tab Content: Timeline */}
              {activeTab === "timeline" && (
                <div className="space-y-3 pt-1">
                  {(item.activities || [
                    {
                      id: "def-1",
                      title: "Proposal Created",
                      description: "Draft generated via Winflare engine",
                      timestamp: item.timeInfo,
                      iconType: "create",
                    },
                  ]).map((act) => (
                    <div key={act.id} className="flex items-start gap-3 text-xs">
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F5F3FF] text-[#7C3AED]">
                        <Clock className="h-3 w-3" />
                      </div>
                      <div className="flex flex-col min-w-0 flex-1">
                        <span className="font-semibold text-slate-900">
                          {act.title}
                        </span>
                        <span className="text-[11px] text-slate-500">
                          {act.description}
                        </span>
                        <span className="text-[10px] text-slate-400">
                          {act.timestamp}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Tab Content: Versions */}
              {activeTab === "versions" && (
                <div className="space-y-2 pt-1">
                  {(item.versions || [
                    {
                      version: "v1.0",
                      label: "Initial Version",
                      timestamp: item.timeInfo,
                      author: "System",
                    },
                  ]).map((v, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between rounded-lg border border-slate-200/80 bg-white p-2.5 text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <span className="rounded bg-[#EDE9FE] px-1.5 py-0.5 text-[10px] font-bold text-[#6D28D9]">
                          {v.version}
                        </span>
                        <div className="flex flex-col">
                          <span className="font-semibold text-slate-800">
                            {v.label}
                          </span>
                          <span className="text-[10px] text-slate-400">
                            by {v.author} • {v.timestamp}
                          </span>
                        </div>
                      </div>
                      <Link
                        href={`/proposals/${item.id}`}
                        className="text-[11px] font-semibold text-[#7C3AED] hover:underline"
                      >
                        Restore
                      </Link>
                    </div>
                  ))}
                </div>
              )}

              {/* Tab Content: Comments */}
              {activeTab === "comments" && (
                <div className="space-y-3 pt-1">
                  <div className="space-y-2">
                    {(item.comments || []).map((comm) => (
                      <div
                        key={comm.id}
                        className="rounded-xl border border-slate-200/80 bg-[#FAFAFA] p-3 text-xs space-y-1"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-slate-900">
                            {comm.author}
                          </span>
                          <span className="text-[10px] text-slate-400">
                            {comm.timestamp}
                          </span>
                        </div>
                        <p className="text-slate-600">{comm.content}</p>
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleCommentSubmit} className="flex gap-2">
                    <input
                      type="text"
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      placeholder="Add an internal note or comment..."
                      className="flex-1 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-800 placeholder:text-slate-400 focus:border-[#7C3AED] focus:outline-none focus:ring-1 focus:ring-[#7C3AED]"
                    />
                    <button
                      type="submit"
                      className="rounded-lg bg-[#7C3AED] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#6D28D9] transition-colors"
                    >
                      Post
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="border-t border-slate-200 px-6 py-4 bg-white flex items-center gap-3">
            <Link
              href={`/proposals/${item.id}`}
              className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-[#7C3AED] px-4 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-[#6D28D9] transition-all"
            >
              <Edit3 className="h-4 w-4" />
              <span>Open in Proposal Editor</span>
            </Link>

            {item.stageId !== "sent" && item.stageId !== "won" && (
              <button
                onClick={() => onSendProposal(item)}
                className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-all shadow-2xs"
              >
                <Send className="h-4 w-4 text-slate-500" />
                <span>Send</span>
              </button>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}

