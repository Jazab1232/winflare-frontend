"use client";

import * as React from "react";
import { LayoutTemplate, Download, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProposalsTitleBarProps {
  onTemplatesClick?: () => void;
  onExportClick?: () => void;
  onNewProposalClick?: () => void;
}

export function ProposalsTitleBar({
  onTemplatesClick,
  onExportClick,
  onNewProposalClick,
}: ProposalsTitleBarProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-4 px-6 select-none shrink-0">
      {/* Title & Subtitle */}
      <div className="flex flex-col">
        <h1 className="text-xl font-bold tracking-tight text-slate-900">
          Proposals
        </h1>
        <p className="text-xs text-slate-500 mt-0.5">
          Create, manage and track winning proposals.
        </p>
      </div>

      {/* Action Controls */}
      <div className="flex items-center gap-2.5">
        {/* Templates */}
        <Button
          variant="outline"
          size="sm"
          onClick={onTemplatesClick}
          className="h-9 rounded-xl border-slate-200 bg-white text-xs font-semibold text-slate-700 shadow-2xs hover:bg-slate-50 gap-1.5 px-3 cursor-pointer"
        >
          <LayoutTemplate className="h-3.5 w-3.5 text-slate-500" />
          <span>Templates</span>
        </Button>

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
          className="h-9 rounded-xl bg-[#5B5AF7] hover:bg-[#4847E5] text-xs font-semibold text-white shadow-xs gap-1.5 px-3.5 cursor-pointer"
        >
          <Plus className="h-4 w-4 stroke-[2.5]" />
          <span>New Proposal</span>
        </Button>
      </div>
    </div>
  );
}

