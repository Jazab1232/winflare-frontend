"use client";

import * as React from "react";
import {
  FileText,
  MoreHorizontal,
  ChevronRight,
  Bookmark,
  Award,
  Send,
  MessageSquare,
  Calendar,
  Crown,
  Sparkles,
} from "lucide-react";
import { PipelineItem, PipelineStageConfig, PipelineStageId } from "../types";
import { cn } from "@/lib/utils";

interface PipelineListViewProps {
  stages: PipelineStageConfig[];
  items: PipelineItem[];
  onOpenDetails: (item: PipelineItem) => void;
  onGenerateProposal: (item: PipelineItem) => void;
  onViewProposal: (item: PipelineItem) => void;
  onMoveStage: (item: PipelineItem, targetStage?: PipelineStageId) => void;
}

const STAGE_CONFIG: Record<
  string,
  { label: string; badge: string; icon: React.ComponentType<{ className?: string }> }
> = {
  qualified: {
    label: "Qualified",
    badge: "bg-purple-50 text-purple-700 border-purple-200/70",
    icon: Award,
  },
  proposal_drafting: {
    label: "Proposal Drafting",
    badge: "bg-indigo-50 text-indigo-700 border-indigo-200/70",
    icon: Bookmark,
  },
  applied: {
    label: "Applied",
    badge: "bg-sky-50 text-sky-700 border-sky-200/70",
    icon: Send,
  },
  interview: {
    label: "Interview",
    badge: "bg-teal-50 text-teal-700 border-teal-200/70",
    icon: Calendar,
  },
  negotiation: {
    label: "Negotiation",
    badge: "bg-amber-50 text-amber-700 border-amber-200/70",
    icon: MessageSquare,
  },
  won: {
    label: "Won",
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200/70",
    icon: Crown,
  },
};

export function PipelineListView({
  stages,
  items,
  onOpenDetails,
  onGenerateProposal,
  onViewProposal,
  onMoveStage,
}: PipelineListViewProps) {
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 8;

  // Reset page if items count changes drastically
  React.useEffect(() => {
    setCurrentPage(1);
  }, [items.length]);

  const totalPages = Math.ceil(items.length / itemsPerPage) || 1;
  const paginatedItems = React.useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  }, [items, currentPage, itemsPerPage]);

  return (
    <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-4">
      <div className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-2xs">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full min-w-[760px] border-collapse text-left text-xs">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                <th className="py-3.5 pl-4">Opportunity &amp; Company</th>
                <th className="py-3.5 px-3">Stage</th>
                <th className="py-3.5 px-3">Match Score</th>
                <th className="py-3.5 px-3">Value / Budget</th>
                <th className="py-3.5 px-3">Location</th>
                <th className="py-3.5 pr-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {paginatedItems.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-slate-400">
                    No pipeline opportunities match your criteria.
                  </td>
                </tr>
              ) : (
                paginatedItems.map((item) => {
                  const stageCfg = STAGE_CONFIG[item.stageId] || STAGE_CONFIG.qualified;
                  const StageIcon = stageCfg.icon;

                  return (
                    <tr
                      key={item.id}
                      onClick={() => onOpenDetails(item)}
                      className="transition-colors hover:bg-slate-50/80 cursor-pointer group"
                    >
                      {/* Opportunity & Company */}
                      <td className="py-3.5 pl-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-50 font-bold text-[#5B5AF7] text-xs shadow-2xs">
                            {item.company.substring(0, 2).toUpperCase()}
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="font-bold text-slate-900 group-hover:text-[#5B5AF7] transition-colors line-clamp-1">
                              {item.role}
                            </span>
                            <span className="text-[11px] text-slate-400 line-clamp-1">
                              {item.company} &bull; {item.timeline || "Active RFP"}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Stage Badge */}
                      <td className="py-3.5 px-3">
                        <span
                          className={cn(
                            "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold",
                            stageCfg.badge
                          )}
                        >
                          <StageIcon className="h-3 w-3" />
                          <span>{stageCfg.label}</span>
                        </span>
                      </td>

                      {/* Match Score */}
                      <td className="py-3.5 px-3">
                        <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700">
                          {item.matchScore}% match
                        </span>
                      </td>

                      {/* Budget / Value */}
                      <td className="py-3.5 px-3 font-semibold text-slate-800">
                        {item.salary}
                      </td>

                      {/* Location */}
                      <td className="py-3.5 px-3 text-slate-500">
                        {item.location}
                      </td>

                      {/* Actions */}
                      <td className="py-3.5 pr-4 text-right">
                        <div
                          className="inline-flex items-center gap-1.5"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <button
                            type="button"
                            onClick={() => onGenerateProposal(item)}
                            className="inline-flex items-center gap-1 rounded-xl bg-[#5B5AF7] hover:bg-[#4847E5] px-3 py-1.5 text-xs font-semibold text-white shadow-2xs transition-colors cursor-pointer"
                          >
                            <Sparkles className="h-3 w-3" />
                            <span>Proposal</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => onMoveStage(item)}
                            className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                            title="Advance stage"
                          >
                            <span>Move</span>
                            <ChevronRight className="h-3 w-3 text-slate-400" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Bar */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-100 p-4 bg-white">
            <span className="text-[11px] text-slate-400 font-medium">
              Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
              {Math.min(currentPage * itemsPerPage, items.length)} of {items.length} opportunities
            </span>

            <div className="flex items-center gap-1.5 self-end sm:self-auto">
              <button
                type="button"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                className="rounded-lg border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => setCurrentPage(page)}
                  className={cn(
                    "h-7 w-7 rounded-lg text-xs font-semibold transition-colors cursor-pointer",
                    currentPage === page
                      ? "bg-[#5B5AF7] text-white shadow-2xs"
                      : "text-slate-600 hover:bg-slate-100"
                  )}
                >
                  {page}
                </button>
              ))}

              <button
                type="button"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                className="rounded-lg border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

