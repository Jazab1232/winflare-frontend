"use client";

import * as React from "react";
import { Eye, Copy, Edit2, ArrowRight } from "lucide-react";
import { ProposalTemplate } from "../../types";

interface TemplateCardProps {
  template: ProposalTemplate;
  onUse: (template: ProposalTemplate) => void;
  onDuplicate: (template: ProposalTemplate) => void;
  onEdit: (template: ProposalTemplate) => void;
  onPreview: (template: ProposalTemplate) => void;
}

export function TemplateCard({
  template,
  onUse,
  onDuplicate,
  onEdit,
  onPreview,
}: TemplateCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-4 shadow-2xs hover:border-[#5B5AF7]/40 hover:shadow-xs transition-all group">
      {/* Top Document Preview Thumbnail matching screenshot */}
      <div
        onClick={() => onPreview(template)}
        className="relative h-44 w-full rounded-xl bg-[#F8FAFC] border border-slate-200/60 p-3 overflow-hidden cursor-pointer flex flex-col justify-between select-none"
      >
        {/* Document Sheet Mockup */}
        <div className="bg-white rounded-lg border border-slate-200/80 shadow-2xs p-3.5 h-full flex flex-col space-y-2">
          {/* Mini Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
            <div className="flex items-center gap-1">
              <div className="h-2.5 w-2.5 rounded bg-[#5B5AF7]" />
              <div className="h-1.5 w-10 rounded-full bg-slate-300" />
            </div>
            <div className="h-1 w-14 rounded-full bg-slate-200" />
          </div>

          {/* Mini Title & Skeleton Lines */}
          <div className="space-y-1.5 pt-1">
            <div className="h-2.5 w-24 rounded bg-slate-800 font-bold" />
            <div className="h-1.5 w-full rounded-full bg-slate-200" />
            <div className="h-1.5 w-5/6 rounded-full bg-slate-200" />
            <div className="h-1.5 w-4/6 rounded-full bg-slate-200" />
          </div>

          {/* Mini visual block */}
          <div className="mt-auto h-8 rounded-md bg-[#181824] flex items-center px-2">
            <div className="h-2 w-12 rounded bg-[#5B5AF7]" />
          </div>
        </div>

        {/* Hover / Preview Badge */}
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center gap-1 rounded-full bg-[#5B5AF7] text-white px-2 py-0.5 text-[10px] font-semibold shadow-2xs opacity-90 group-hover:opacity-100 transition-opacity">
            <Eye className="h-2.5 w-2.5" />
            <span>Preview</span>
          </span>
        </div>
      </div>

      {/* Title & Category Subtitle */}
      <div className="pt-3 pb-2">
        <h3 className="text-sm font-bold text-slate-900 tracking-tight leading-snug">
          {template.title}
        </h3>
        <p className="text-xs text-slate-400 font-medium mt-0.5">
          {template.category}
        </p>
      </div>

      {/* Action Buttons Row: Use, Duplicate, Edit */}
      <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
        {/* Primary 'Use' button */}
        <button
          type="button"
          onClick={() => onUse(template)}
          className="flex-1 rounded-xl bg-[#5B5AF7] hover:bg-[#4847E5] text-white py-1.5 text-xs font-semibold shadow-2xs transition-all cursor-pointer text-center"
        >
          Use
        </button>

        {/* Duplicate button */}
        <button
          type="button"
          onClick={() => onDuplicate(template)}
          className="flex-1 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 py-1.5 text-xs font-semibold shadow-2xs transition-all cursor-pointer text-center"
        >
          Duplicate
        </button>

        {/* Edit button */}
        <button
          type="button"
          onClick={() => onEdit(template)}
          className="flex-1 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 py-1.5 text-xs font-semibold shadow-2xs transition-all cursor-pointer text-center"
        >
          Edit
        </button>
      </div>
    </div>
  );
}
