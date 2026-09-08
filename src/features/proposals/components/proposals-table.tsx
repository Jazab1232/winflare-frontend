"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ExternalLink,
  MoreHorizontal,
  Edit3,
  Eye,
  Send,
  Trash2,
  ArrowUpDown,
  Search,
  Sparkles,
  Filter,
} from "lucide-react";
import { ProposalCardItem, ProposalStageId } from "../types";
import { ProposalStatusBadge } from "./proposal-status-badge";
import { cn } from "@/lib/utils";

interface ProposalsTableProps {
  items: ProposalCardItem[];
  onOpenDrawer: (item: ProposalCardItem) => void;
  onSendProposal: (item: ProposalCardItem) => void;
  onDeleteProposal: (id: string) => void;
  onReviewProposal?: (item: ProposalCardItem) => void;
}

export function ProposalsTable({
  items,
  onOpenDrawer,
  onSendProposal,
  onDeleteProposal,
  onReviewProposal,
}: ProposalsTableProps) {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = React.useState<"all" | ProposalStageId>("all");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [sortField, setSortField] = React.useState<"value" | "createdAt" | "score">("createdAt");
  const [sortAsc, setSortAsc] = React.useState(false);

  // Status counts
  const counts = React.useMemo(() => {
    const c: Record<string, number> = {
      all: items.length,
      draft: 0,
      review: 0,
      ready: 0,
      sent: 0,
      won: 0,
      lost: 0,
    };
    items.forEach((item) => {
      if (c[item.stageId] !== undefined) {
        c[item.stageId]++;
      }
    });
    return c;
  }, [items]);

  // Filtering
  const filtered = React.useMemo(() => {
    return items.filter((item) => {
      const matchesFilter =
        activeFilter === "all" ? true : item.stageId === activeFilter;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.company.toLowerCase().includes(q) ||
        item.role.toLowerCase().includes(q) ||
        item.budget.toLowerCase().includes(q);
      return matchesFilter && matchesSearch;
    });
  }, [items, activeFilter, searchQuery]);

  // Sorting
  const sorted = React.useMemo(() => {
    return [...filtered].sort((a, b) => {
      let comparison = 0;
      if (sortField === "value") {
        comparison = (a.value || 0) - (b.value || 0);
      } else if (sortField === "score") {
        comparison = (a.score || 0) - (b.score || 0);
      } else {
        comparison = (a.createdAt || "").localeCompare(b.createdAt || "");
      }
      return sortAsc ? comparison : -comparison;
    });
  }, [filtered, sortField, sortAsc]);

  const toggleSort = (field: "value" | "createdAt" | "score") => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(false);
    }
  };

  const tabs: Array<{ id: "all" | ProposalStageId; label: string }> = [
    { id: "all", label: "All Proposals" },
    { id: "draft", label: "Draft" },
    { id: "review", label: "Review" },
    { id: "ready", label: "Ready" },
    { id: "sent", label: "Sent" },
    { id: "won", label: "Won" },
    { id: "lost", label: "Lost" },
  ];

  return (
    <div className="flex flex-col rounded-2xl border border-slate-200/80 bg-white shadow-xs overflow-hidden">
      {/* Table Toolbar & Status Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200/80 px-4 py-3 gap-3 bg-white">
        {/* Status Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto custom-scrollbar pb-1 sm:pb-0">
          {tabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            const count = counts[tab.id] || 0;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={cn(
                  "flex items-center gap-1.5 whitespace-nowrap rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-all cursor-pointer",
                  isActive
                    ? "bg-[#F5F3FF] text-[#7C3AED] shadow-2xs"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                )}
              >
                <span>{tab.label}</span>
                <span
                  className={cn(
                    "flex h-4 min-w-[16px] items-center justify-center rounded-full px-1 text-[10px] font-bold",
                    isActive
                      ? "bg-[#7C3AED] text-white"
                      : "bg-slate-100 text-slate-500"
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search in Table */}
        <div className="relative flex items-center min-w-[200px] sm:w-64">
          <Search className="absolute left-2.5 h-3.5 w-3.5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter proposals..."
            className="h-8 w-full rounded-lg border border-slate-200 bg-[#F8F8FA] pl-8 pr-3 text-xs text-slate-800 placeholder:text-slate-400 focus:border-[#7C3AED] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#7C3AED]"
          />
        </div>
      </div>

      {/* Main Table Structure */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs text-slate-700">
          {/* Table Header */}
          <thead className="border-b border-slate-200/80 bg-[#F8F8FA] text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
            <tr>
              <th scope="col" className="px-5 py-3 min-w-[180px]">
                Client
              </th>
              <th scope="col" className="px-4 py-3 min-w-[200px]">
                Opportunity
              </th>
              <th scope="col" className="px-4 py-3 min-w-[110px]">
                Status
              </th>
              <th
                scope="col"
                className="px-4 py-3 min-w-[100px] cursor-pointer select-none hover:text-slate-800"
                onClick={() => toggleSort("createdAt")}
              >
                <div className="flex items-center gap-1">
                  <span>Created</span>
                  <ArrowUpDown className="h-3 w-3" />
                </div>
              </th>
              <th scope="col" className="px-4 py-3 min-w-[100px]">
                Sent
              </th>
              <th
                scope="col"
                className="px-4 py-3 min-w-[110px] cursor-pointer select-none hover:text-slate-800"
                onClick={() => toggleSort("value")}
              >
                <div className="flex items-center gap-1">
                  <span>Value</span>
                  <ArrowUpDown className="h-3 w-3" />
                </div>
              </th>
              <th
                scope="col"
                className="px-4 py-3 min-w-[80px] cursor-pointer select-none hover:text-slate-800"
                onClick={() => toggleSort("score")}
              >
                <div className="flex items-center gap-1">
                  <span>Score</span>
                  <ArrowUpDown className="h-3 w-3" />
                </div>
              </th>
              <th scope="col" className="px-4 py-3 text-right min-w-[120px]">
                Actions
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-slate-100 bg-white">
            {sorted.length === 0 ? (
              <tr>
                <td colSpan={8} className="px-5 py-12 text-center text-slate-400">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <p className="text-sm font-medium text-slate-600">
                      No proposals found
                    </p>
                    <p className="text-xs text-slate-400">
                      Try adjusting your status filter or search keywords
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              sorted.map((item) => (
                <tr
                  key={item.id}
                  onClick={() => router.push(`/proposals/${item.id}`)}
                  className="group hover:bg-[#F8F8FA] transition-colors cursor-pointer"
                >
                  {/* Client */}
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white font-bold text-xs shadow-2xs",
                          item.logoBg || "bg-slate-900"
                        )}
                      >
                        {item.logoLetter || item.company.slice(0, 1)}
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="font-bold text-slate-900 group-hover:text-[#7C3AED] transition-colors truncate">
                          {item.company}
                        </span>
                        <span className="text-[11px] text-slate-400 truncate">
                          {item.clientContact?.name || "Direct Client"}
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* Opportunity */}
                  <td className="px-4 py-3.5">
                    <div className="flex flex-col min-w-0">
                      <span className="font-semibold text-slate-800 truncate">
                        {item.role}
                      </span>
                      <span className="text-[11px] text-slate-400 truncate max-w-[240px]">
                        {item.title}
                      </span>
                    </div>
                  </td>

                  {/* Status */}
                  <td className="px-4 py-3.5">
                    <ProposalStatusBadge status={item.stageId} />
                  </td>

                  {/* Created */}
                  <td className="px-4 py-3.5 text-[12px] text-slate-600 whitespace-nowrap">
                    {item.createdAt || item.timeInfo}
                  </td>

                  {/* Sent */}
                  <td className="px-4 py-3.5 text-[12px] text-slate-600 whitespace-nowrap">
                    {item.sentAt ? (
                      <span className="text-slate-800 font-medium">
                        {item.sentAt}
                      </span>
                    ) : (
                      <span className="text-slate-400 italic">—</span>
                    )}
                  </td>

                  {/* Value */}
                  <td className="px-4 py-3.5">
                    <div className="flex flex-col">
                      <span className="font-bold text-slate-900">
                        ${item.value.toLocaleString()}
                      </span>
                      <span className="text-[10px] text-slate-400">
                        {item.proposalType === "hourly" ? "/ hour" : "fixed price"}
                      </span>
                    </div>
                  </td>

                  {/* Score */}
                  <td className="px-4 py-3.5">
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        onReviewProposal?.(item);
                      }}
                      className={cn(
                        "inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-bold transition-all cursor-pointer hover:scale-105",
                        item.score >= 90
                          ? "bg-[#DCFCE7] text-[#15803D]"
                          : item.score >= 80
                          ? "bg-[#EDE9FE] text-[#6D28D9]"
                          : "bg-[#FEF3C7] text-[#92400E]"
                      )}
                      title="Click to view full AI quality review score breakdown"
                    >
                      <Sparkles className="h-2.5 w-2.5" />
                      <span>{item.score}/100</span>
                    </div>
                  </td>

                  {/* Actions */}
                  <td
                    className="px-4 py-3.5 text-right whitespace-nowrap"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex items-center justify-end gap-1">
                      {/* Open Editor */}
                      <Link
                        href={`/proposals/${item.id}`}
                        className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-[#F5F3FF] hover:border-[#DDD6FE] hover:text-[#7C3AED] transition-all shadow-2xs"
                        title="Edit Proposal"
                      >
                        <Edit3 className="h-3.5 w-3.5" />
                      </Link>

                      {/* Quick Details Drawer */}
                      <button
                        onClick={() => onOpenDrawer(item)}
                        className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all shadow-2xs"
                        title="View Proposal Drawer"
                      >
                        <Eye className="h-3.5 w-3.5" />
                      </button>

                      {/* Send Button if Ready / Review */}
                      {item.stageId !== "sent" && item.stageId !== "won" && (
                        <button
                          onClick={() => onSendProposal(item)}
                          className="flex h-7 w-7 items-center justify-center rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-all shadow-2xs"
                          title="Send Proposal"
                        >
                          <Send className="h-3.5 w-3.5" />
                        </button>
                      )}

                      {/* Delete */}
                      <button
                        onClick={() => onDeleteProposal(item.id)}
                        className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-400 hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600 transition-all shadow-2xs"
                        title="Delete Proposal"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Table Footer Summary */}
      <div className="flex items-center justify-between border-t border-slate-200/80 px-5 py-2.5 bg-[#F8F8FA] text-[11px] text-slate-500">
        <span>
          Showing <strong className="text-slate-800">{sorted.length}</strong> of{" "}
          <strong className="text-slate-800">{items.length}</strong> proposals
        </span>
        <div className="flex items-center gap-4">
          <span>
            Total Pipeline Value:{" "}
            <strong className="text-slate-900">
              ${sorted.reduce((acc, p) => acc + (p.value || 0), 0).toLocaleString()}
            </strong>
          </span>
        </div>
      </div>
    </div>
  );
}

