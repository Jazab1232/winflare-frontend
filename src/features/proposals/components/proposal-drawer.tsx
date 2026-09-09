"use client";

import * as React from "react";
import {
  X,
  Check,
  Send,
} from "lucide-react";
import { ProposalCardItem, ProposalStageId } from "../types";
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
  onAddComment,
}: ProposalDrawerProps) {
  const [commentText, setCommentText] = React.useState("");
  const [activeTab, setActiveTab] = React.useState<"details" | "versions" | "comments" | "activity">("details");

  if (!isOpen || !item) return null;

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    onAddComment(item.id, commentText);
    setCommentText("");
  };

  const timelineSteps = [
    { label: "Draft", date: "Aug 20, 2026", isCompleted: true, isActive: true },
    { label: "Review", date: "Aug 21, 2026", isCompleted: false, isActive: false },
    { label: "Ready", date: "Aug 21, 2026", isCompleted: false, isActive: false },
    { label: "Sent", date: "Aug 22, 2026", isCompleted: false, isActive: false },
    { label: "Client Replied", date: "-", isCompleted: false, isActive: false },
    { label: "Won", date: "-", isCompleted: false, isActive: false },
  ];

  const comments = item.comments?.length
    ? item.comments
    : [
        {
          id: "c1",
          author: "John Doe",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120",
          timestamp: "Aug 21, 2026 10:24 AM",
          content: "Added new pricing section.",
        },
        {
          id: "c2",
          author: "Sarah Lee",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120",
          timestamp: "Aug 22, 2026 11:02 AM",
          content: "Looks great! Sending to client now.",
        },
      ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-2xs transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 right-0 flex max-w-full pl-6 sm:pl-10">
        <aside className="w-screen max-w-2xl bg-white border-l border-slate-200 shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-250 select-none">
          {/* Header */}
          <div className="flex items-start justify-between border-b border-slate-100 px-6 py-4 bg-white">
            <div className="space-y-1">
              <span className="text-[11px] font-medium text-slate-400 block">
                Proposal Details
              </span>
              <div className="flex items-center gap-2.5">
                <h2 className="text-lg font-bold text-slate-900">
                  {item.title || "Website Redesign Proposal"}
                </h2>
                <span className="rounded-full bg-[#EEF2FF] text-[#5B5AF7] border border-[#DDD6FE] px-2.5 py-0.5 text-xs font-semibold">
                  Draft
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Sub-Navigation Tabs matching screenshot 7 */}
          <div className="flex items-center gap-6 px-6 border-b border-slate-100 bg-white text-xs">
            {(["details", "versions", "comments", "activity"] as const).map((tab) => {
              const label =
                tab === "details"
                  ? "Details"
                  : tab === "versions"
                  ? "Version History"
                  : tab === "comments"
                  ? "Comments"
                  : "Activity";
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "pb-2.5 pt-1.5 font-medium border-b-2 transition-all cursor-pointer",
                    isActive
                      ? "border-[#5B5AF7] text-[#5B5AF7] font-semibold"
                      : "border-transparent text-slate-500 hover:text-slate-800"
                  )}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Body Content (Two columns matching screenshot 7) */}
          <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
            {activeTab === "details" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs">
                {/* Left Column: Key Details & Status Timeline */}
                <div className="space-y-6">
                  {/* Key Details Rows */}
                  <div className="space-y-3">
                    <div className="flex justify-between border-b border-slate-100 pb-2">
                      <span className="text-slate-400 font-medium">Client</span>
                      <span className="font-bold text-slate-900">{item.company || "Acme Inc."}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-2">
                      <span className="text-slate-400 font-medium">Opportunity</span>
                      <span className="font-semibold text-slate-800">{item.role || "Website Redesign"}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-2">
                      <span className="text-slate-400 font-medium">Value</span>
                      <span className="font-bold text-slate-900">${(item.value || 12000).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-2">
                      <span className="text-slate-400 font-medium">Created</span>
                      <span className="text-slate-700">Aug 20, 2026</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-2">
                      <span className="text-slate-400 font-medium">Sent</span>
                      <span className="text-slate-700">Aug 22, 2026</span>
                    </div>
                  </div>

                  {/* Status Timeline */}
                  <div className="space-y-3 pt-2">
                    <h3 className="text-xs font-semibold text-slate-800">
                      Status Timeline
                    </h3>
                    <div className="relative pl-5 space-y-4">
                      {/* Vertical connecting line */}
                      <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-slate-200" />

                      {timelineSteps.map((step, idx) => (
                        <div key={idx} className="relative flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            {/* Circle dot */}
                            <div
                              className={cn(
                                "absolute -left-5 h-3.5 w-3.5 rounded-full border-2 bg-white flex items-center justify-center",
                                step.isActive
                                  ? "border-[#5B5AF7] bg-[#5B5AF7]"
                                  : "border-slate-300"
                              )}
                            >
                              {step.isActive && (
                                <div className="h-1.5 w-1.5 rounded-full bg-white" />
                              )}
                            </div>
                            <span
                              className={cn(
                                "font-medium",
                                step.isActive ? "text-slate-900 font-semibold" : "text-slate-600"
                              )}
                            >
                              {step.label}
                            </span>
                          </div>
                          <span className="text-[11px] text-slate-400">
                            {step.date}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Comments feed matching screenshot 7 */}
                <div className="flex flex-col justify-between space-y-4 border-l border-slate-100 sm:pl-6">
                  <div className="space-y-4">
                    <h3 className="text-xs font-semibold text-slate-800">
                      Comments
                    </h3>

                    {/* Comments List */}
                    <div className="space-y-4">
                      {comments.map((c) => (
                        <div key={c.id} className="flex items-start gap-2.5">
                          <img
                            src={
                              typeof c.avatar === "string" && c.avatar.startsWith("http")
                                ? c.avatar
                                : "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120"
                            }
                            alt={c.author}
                            className="h-7 w-7 rounded-full object-cover border border-slate-200 shrink-0"
                          />
                          <div className="flex flex-col space-y-0.5 min-w-0">
                            <div className="flex items-center gap-1.5">
                              <span className="font-bold text-slate-900 text-xs">
                                {c.author}
                              </span>
                            </div>
                            <span className="text-[10px] text-slate-400">
                              {c.timestamp}
                            </span>
                            <p className="text-xs text-slate-700 pt-0.5 leading-relaxed">
                              {c.content}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Add comment box */}
                  <form onSubmit={handleCommentSubmit} className="relative pt-4">
                    <input
                      type="text"
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      placeholder="Add a comment..."
                      className="h-9 w-full rounded-xl border border-slate-200 bg-white pl-3 pr-9 text-xs text-slate-800 placeholder:text-slate-400 focus:border-[#5B5AF7] focus:outline-none focus:ring-1 focus:ring-[#5B5AF7]"
                    />
                    <button
                      type="submit"
                      disabled={!commentText.trim()}
                      className="absolute right-1.5 top-5 p-1 rounded-lg text-[#5B5AF7] hover:bg-[#EEF2FF] disabled:opacity-40 transition-all cursor-pointer"
                    >
                      <Send className="h-3.5 w-3.5" />
                    </button>
                  </form>
                </div>
              </div>
            )}

            {activeTab === "versions" && (
              <div className="space-y-3 text-xs">
                <div className="rounded-xl border border-slate-200 p-3 flex justify-between items-center">
                  <div>
                    <span className="font-bold text-slate-900 block">v1.2 (Current)</span>
                    <span className="text-slate-400 text-[11px]">Saved Today at 02:00 PM by Winflare AI</span>
                  </div>
                  <span className="text-xs font-semibold text-emerald-600">Active</span>
                </div>
                <div className="rounded-xl border border-slate-200 p-3 flex justify-between items-center">
                  <div>
                    <span className="font-bold text-slate-900 block">v1.0 (Initial Draft)</span>
                    <span className="text-slate-400 text-[11px]">Saved Aug 20, 2026 by John Doe</span>
                  </div>
                  <button className="text-xs font-semibold text-[#5B5AF7] hover:underline">Restore</button>
                </div>
              </div>
            )}

            {activeTab === "comments" && (
              <div className="space-y-3 text-xs">
                {comments.map((c) => (
                  <div key={c.id} className="p-3 rounded-xl bg-[#F8FAFC] border border-slate-200/80 space-y-1">
                    <div className="flex justify-between">
                      <span className="font-bold text-slate-900">{c.author}</span>
                      <span className="text-[10px] text-slate-400">{c.timestamp}</span>
                    </div>
                    <p className="text-slate-700">{c.content}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "activity" && (
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span>Proposal Created</span>
                  <span className="text-slate-400 text-[11px]">Aug 20, 2026</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span>AI Polish Completed</span>
                  <span className="text-slate-400 text-[11px]">Aug 21, 2026</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span>Milestone Pricing Updated</span>
                  <span className="text-slate-400 text-[11px]">Aug 22, 2026</span>
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
