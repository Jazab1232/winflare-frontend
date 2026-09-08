"use client";

import * as React from "react";
import Link from "next/link";
import { LayoutTemplate, Download, Plus, Library, LayoutGrid, Table } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProposalsTitleBarProps {
  onTemplatesClick?: () => void;
  onExportClick?: () => void;
  onNewProposalClick?: () => void;
  viewMode?: "table" | "kanban";
  onViewModeChange?: (mode: "table" | "kanban") => void;
}

export function ProposalsTitleBar({
  onTemplatesClick,
  onExportClick,
  onNewProposalClick,
  viewMode = "table",
  onViewModeChange,
}: ProposalsTitleBarProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-4 px-6 select-none shrink-0 bg-white border-b border-slate-200/80">
      {/* Title & Subtitle */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2.5">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Proposals
          </h1>
        </div>
        <p className="text-xs text-slate-500 mt-0.5">
          Create, manage and track client proposals.
        </p>
      </div>

      {/* Action Controls */}
      <div className="flex flex-wrap items-center gap-2">
        {/* View Mode Switcher */}
        {onViewModeChange && (
          <div className="flex items-center rounded-xl border border-slate-200 bg-[#F8F8FA] p-0.5 mr-1">
            <button
              type="button"
              onClick={() => onViewModeChange("table")}
              className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-all ${
                viewMode === "table"
                  ? "bg-white text-slate-900 shadow-2xs"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <Table className="h-3.5 w-3.5" />
              <span>Table</span>
            </button>
            <button
              type="button"
              onClick={() => onViewModeChange("kanban")}
              className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-all ${
                viewMode === "kanban"
                  ? "bg-white text-slate-900 shadow-2xs"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <LayoutGrid className="h-3.5 w-3.5" />
              <span>Board</span>
            </button>
          </div>
        )}

        {/* Templates Link */}
        <Link href="/proposals/templates">
          <Button
            variant="outline"
            size="sm"
            className="h-9 rounded-xl border-slate-200 bg-white text-xs font-semibold text-slate-700 shadow-2xs hover:bg-slate-50 gap-1.5 px-3 cursor-pointer"
          >
            <LayoutTemplate className="h-3.5 w-3.5 text-slate-500" />
            <span>Templates</span>
          </Button>
        </Link>

        {/* Library Link */}
        <Link href="/proposals/library">
          <Button
            variant="outline"
            size="sm"
            className="h-9 rounded-xl border-slate-200 bg-white text-xs font-semibold text-slate-700 shadow-2xs hover:bg-slate-50 gap-1.5 px-3 cursor-pointer"
          >
            <Library className="h-3.5 w-3.5 text-slate-500" />
            <span>Library</span>
          </Button>
        </Link>

        {/* Export */}
        <Button
          variant="outline"
          size="sm"
          onClick={onExportClick}
          className="h-9 rounded-xl border-slate-200 bg-white text-xs font-semibold text-slate-700 shadow-2xs hover:bg-slate-50 gap-1.5 px-3 cursor-pointer"
        >
          <Download className="h-3.5 w-3.5 text-slate-500" />
          <span>Export</span>
        </Button>

        {/* + New Proposal */}
        <Button
          variant="default"
          size="sm"
          onClick={onNewProposalClick}
          className="h-9 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-xs font-bold text-white shadow-xs gap-1.5 px-3.5 cursor-pointer"
        >
          <Plus className="h-4 w-4 stroke-[2.5]" />
          <span>New Proposal</span>
        </Button>
      </div>
    </div>
  );
}
