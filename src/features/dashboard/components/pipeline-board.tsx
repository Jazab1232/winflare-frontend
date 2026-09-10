"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Workflow,
  Kanban,
  List,
  ChevronLeft,
  ChevronRight,
  FileText,
  ExternalLink,
  MoreHorizontal,
  Bookmark,
  Award,
  Send,
  MessageSquare,
  Calendar,
  Crown,
} from "lucide-react";
import { MOCK_PIPELINE_STAGES } from "../data/mock-data";
import { PipelineColumn } from "./pipeline-column";
import { cn } from "@/lib/utils";
import { PipelineJob, PipelineStage } from "../types";

// Stage metadata for listings view
const STAGE_CONFIG: Record<
  string,
  { label: string; badge: string; icon: React.ComponentType<{ className?: string }> }
> = {
  saved: {
    label: "Saved",
    badge: "bg-indigo-50 text-indigo-700 border-indigo-200/70",
    icon: Bookmark,
  },
  qualified: {
    label: "Qualified",
    badge: "bg-purple-50 text-purple-700 border-purple-200/70",
    icon: Award,
  },
  applied: {
    label: "Applied",
    badge: "bg-sky-50 text-sky-700 border-sky-200/70",
    icon: Send,
  },
  replied: {
    label: "Replied",
    badge: "bg-amber-50 text-amber-700 border-amber-200/70",
    icon: MessageSquare,
  },
  interview: {
    label: "Interview",
    badge: "bg-teal-50 text-teal-700 border-teal-200/70",
    icon: Calendar,
  },
  won: {
    label: "Won",
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200/70",
    icon: Crown,
  },
};

// Assign contract types to mock jobs for accurate filtering
const CONTRACT_MAPPING: Record<string, "Freelance" | "Full-time" | "Contract"> = {
  s1: "Freelance",
  s2: "Contract",
  s3: "Full-time",
  q1: "Freelance",
  q2: "Full-time",
  q3: "Contract",
  a1: "Contract",
  a2: "Freelance",
  a3: "Full-time",
  r1: "Freelance",
  r2: "Full-time",
  r3: "Contract",
  i1: "Contract",
  i2: "Freelance",
  w1: "Contract",
  w2: "Freelance",
};

export function PipelineBoard() {
  const [filter, setFilter] = React.useState<"all" | "freelance" | "full-time" | "contract">("all");
  const [viewMode, setViewMode] = React.useState<"board" | "listings">("board");
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 5;
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  // Reset page on filter change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  // Scroll controls for Board view
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -280 : 280;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Filter jobs according to contract type
  const filterJob = (job: PipelineJob) => {
    if (filter === "all") return true;
    const contract = CONTRACT_MAPPING[job.id] || "Freelance";
    return contract.toLowerCase() === filter.toLowerCase();
  };

  const filteredStages: PipelineStage[] = MOCK_PIPELINE_STAGES.map((stage) => {
    const jobs = stage.jobs.filter(filterJob);
    return {
      ...stage,
      jobs,
      count: filter === "all" ? stage.count : jobs.length,
    };
  });

  // Flat list of all jobs for Listings view
  const allJobs = React.useMemo(() => {
    return MOCK_PIPELINE_STAGES.flatMap((stage) =>
      stage.jobs.map((job) => ({
        ...job,
        contractType: CONTRACT_MAPPING[job.id] || "Contract",
        stageName: stage.name,
      }))
    ).filter((job) => {
      if (filter === "all") return true;
      return job.contractType.toLowerCase() === filter.toLowerCase();
    });
  }, [filter]);

  const totalPages = Math.ceil(allJobs.length / itemsPerPage);
  const paginatedJobs = React.useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return allJobs.slice(start, start + itemsPerPage);
  }, [allJobs, currentPage, itemsPerPage]);

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs select-none space-y-4">
      {/* Header with Title, View Switcher & Filters */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3.5 pb-3 border-b border-slate-100">
        {/* Left Title & Badge */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#EEF0FF] text-[#5B5AF7]">
            <Workflow className="h-4 w-4 stroke-[2.2]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-bold tracking-tight text-slate-900">
                Your Pipeline
              </h2>
              <span className="rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px] font-bold text-slate-500">
                {allJobs.length} active
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              Track opportunities across qualification and proposal stages.
            </p>
          </div>
        </div>

        {/* Right Controls: Filter Pills + View Switcher + View all */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Type Filter Pills */}
          <div className="flex items-center rounded-xl border border-slate-200/90 bg-slate-50/70 p-1">
            {(["all", "freelance", "full-time", "contract"] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setFilter(t)}
                className={cn(
                  "rounded-lg px-2.5 py-1 text-xs font-semibold capitalize transition-all cursor-pointer",
                  filter === t
                    ? "bg-[#5B5AF7] text-white shadow-2xs"
                    : "text-slate-500 hover:text-slate-900"
                )}
              >
                {t}
              </button>
            ))}
          </div>

          {/* View Switcher Toggle: Board vs Listings */}
          <div className="inline-flex items-center rounded-xl border border-slate-200/90 bg-slate-50/70 p-1">
            <button
              type="button"
              onClick={() => setViewMode("board")}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold transition-all cursor-pointer",
                viewMode === "board"
                  ? "bg-white text-[#5B5AF7] shadow-2xs"
                  : "text-slate-500 hover:text-slate-900"
              )}
            >
              <Kanban className="h-3.5 w-3.5" />
              <span>Board</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("listings")}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold transition-all cursor-pointer",
                viewMode === "listings"
                  ? "bg-white text-[#5B5AF7] shadow-2xs"
                  : "text-slate-500 hover:text-slate-900"
              )}
            >
              <List className="h-3.5 w-3.5" />
              <span>Listings</span>
            </button>
          </div>

          {/* View All Link */}
          <Link
            href="/pipeline"
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#5B5AF7] hover:text-indigo-700 transition-colors"
          >
            <span>View all</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      {/* Main View Area */}
      {viewMode === "board" ? (
        /* 1. Board (Kanban) View with Horizontal Scroll & Non-compressed Columns */
        <div className="relative group">
          {/* Left / Right Scroll Helper Controls */}
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="absolute left-1 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 border border-slate-200 text-slate-600 shadow-md backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity hover:bg-slate-50 hover:text-slate-900 cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="absolute right-1 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 border border-slate-200 text-slate-600 shadow-md backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity hover:bg-slate-50 hover:text-slate-900 cursor-pointer"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          {/* Horizontally scrollable row with comfortable width for each column */}
          <div
            ref={scrollContainerRef}
            className="flex gap-3 overflow-x-auto custom-scrollbar pb-3 pt-1 -mx-1 px-1 scroll-smooth"
          >
            {filteredStages.map((stage) => (
              <PipelineColumn key={stage.id} stage={stage} />
            ))}
          </div>
        </div>
      ) : (
        /* 2. Listings (Table) View for easy reading and bulk tracking */
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full min-w-[700px] border-collapse text-left">
            <thead>
              <tr className="border-b border-slate-100 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                <th className="pb-3 pl-3">Opportunity &amp; Company</th>
                <th className="pb-3">Stage</th>
                <th className="pb-3">Match Score</th>
                <th className="pb-3">Estimated Value</th>
                <th className="pb-3">Work Type</th>
                <th className="pb-3 pr-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {paginatedJobs.map((job) => {
                const stageCfg = STAGE_CONFIG[job.stageId] || STAGE_CONFIG.saved;
                const StageIcon = stageCfg.icon;

                return (
                  <tr
                    key={job.id}
                    className="transition-colors hover:bg-slate-50/70 group"
                  >
                    {/* Opportunity & Company */}
                    <td className="py-3 pl-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={cn(
                            "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold shadow-2xs",
                            job.avatarBg,
                            job.avatarColor
                          )}
                        >
                          {job.companyShort}
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="font-bold text-slate-900 group-hover:text-[#5B5AF7] transition-colors">
                            {job.title}
                          </span>
                          <span className="text-[11px] text-slate-400">
                            {job.company} &bull; {job.locationType}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Stage Badge */}
                    <td className="py-3">
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
                    <td className="py-3">
                      <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[11px] font-bold text-emerald-700">
                        {job.matchScore}% match
                      </span>
                    </td>

                    {/* Salary / Value */}
                    <td className="py-3 font-semibold text-slate-800">
                      {job.salary}
                    </td>

                    {/* Work Type */}
                    <td className="py-3">
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600">
                        {job.contractType}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="py-3 pr-3 text-right">
                      <div className="inline-flex items-center gap-1.5">
                        <Link
                          href={`/proposals?lead=${encodeURIComponent(job.id)}`}
                          className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-[#5B5AF7] shadow-2xs hover:bg-[#EEF0FF] hover:border-[#5B5AF7] transition-colors"
                        >
                          <FileText className="h-3.5 w-3.5" />
                          <span>Draft Proposal</span>
                        </Link>
                        <button
                          type="button"
                          className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors cursor-pointer"
                          title="More options"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-100 pt-3.5 px-3">
              <span className="text-[11px] text-slate-400">
                Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                {Math.min(currentPage * itemsPerPage, allJobs.length)} of {allJobs.length} opportunities
              </span>

              <div className="flex items-center gap-1.5 self-end sm:self-auto">
                <button
                  type="button"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  className="rounded-lg border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
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
                  className="rounded-lg border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
