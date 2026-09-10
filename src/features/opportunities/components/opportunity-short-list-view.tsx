"use client";

import * as React from "react";
import { Bookmark, Sparkles, MapPin, ExternalLink, ArrowRight } from "lucide-react";
import { OpportunityItem } from "../types";
import { CompanyLogo } from "./company-logo";
import { cn } from "@/lib/utils";

interface OpportunityShortListViewProps {
  items: OpportunityItem[];
  selectedId?: string;
  onSelect: (item: OpportunityItem) => void;
  onGenerateProposal?: (item: OpportunityItem) => void;
  onToggleSave?: (item: OpportunityItem) => void;
}

export function OpportunityShortListView({
  items,
  selectedId,
  onSelect,
  onGenerateProposal,
  onToggleSave,
}: OpportunityShortListViewProps) {
  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-2xs">
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full min-w-[760px] border-collapse text-left text-xs">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/50 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              <th className="py-3.5 pl-4">Opportunity &amp; Company</th>
              <th className="py-3.5 px-3">Source</th>
              <th className="py-3.5 px-3">Match Score</th>
              <th className="py-3.5 px-3">Rate / Budget</th>
              <th className="py-3.5 px-3">Type &amp; Experience</th>
              <th className="py-3.5 px-3">Location</th>
              <th className="py-3.5 pr-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {items.map((item) => {
              const isSelected = selectedId === item.id;
              return (
                <tr
                  key={item.id}
                  onClick={() => onSelect(item)}
                  className={cn(
                    "transition-colors hover:bg-slate-50/80 cursor-pointer group",
                    isSelected && "bg-[#EEF2FF]/40 font-medium"
                  )}
                >
                  {/* Opportunity & Company */}
                  <td className="py-3 pl-4">
                    <div className="flex items-center gap-3">
                      <CompanyLogo type={item.logoType} size="sm" />
                      <div className="flex flex-col min-w-0">
                        <span className="font-bold text-slate-900 group-hover:text-[#5B5AF7] transition-colors line-clamp-1">
                          {item.role}
                        </span>
                        <span className="text-[11px] text-slate-400 line-clamp-1">
                          {item.company} &bull; {item.postedTime}
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* Source */}
                  <td className="py-3 px-3">
                    <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-600">
                      {item.source}
                    </span>
                  </td>

                  {/* Match Score */}
                  <td className="py-3 px-3">
                    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[11px] font-bold text-emerald-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      {item.matchScore}%
                    </span>
                  </td>

                  {/* Rate / Budget */}
                  <td className="py-3 px-3 font-semibold text-slate-900">
                    {item.salary}
                  </td>

                  {/* Type & Experience */}
                  <td className="py-3 px-3 text-slate-500">
                    {item.jobType} &bull; {item.experienceLevel}
                  </td>

                  {/* Location */}
                  <td className="py-3 px-3 text-slate-500">
                    <div className="flex items-center gap-1 text-slate-500">
                      <MapPin className="h-3 w-3 text-slate-400 shrink-0" />
                      <span>{item.location}</span>
                    </div>
                  </td>

                  {/* Action */}
                  <td className="py-3 pr-4 text-right">
                    <div
                      className="inline-flex items-center gap-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        type="button"
                        onClick={() => onGenerateProposal?.(item)}
                        className="inline-flex items-center gap-1 rounded-xl bg-[#5B5AF7] hover:bg-[#4847E5] px-3 py-1.5 text-xs font-semibold text-white shadow-2xs transition-colors cursor-pointer"
                      >
                        <Sparkles className="h-3 w-3" />
                        <span>Proposal</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => onToggleSave?.(item)}
                        className="p-1.5 text-slate-400 hover:text-[#5B5AF7] transition-colors cursor-pointer"
                        title={item.isSaved ? "Saved" : "Save opportunity"}
                      >
                        <Bookmark
                          className={cn(
                            "h-4 w-4",
                            item.isSaved
                              ? "fill-[#5B5AF7] text-[#5B5AF7]"
                              : "text-slate-400"
                          )}
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

