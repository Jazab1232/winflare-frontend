"use client";

import * as React from "react";
import {
  FileText,
  Clock,
  DollarSign,
  Copy,
  ArrowRight,
  TrendingUp,
  Layers,
  Edit2,
  Eye,
  CheckCircle2,
} from "lucide-react";
import { ProposalTemplate } from "../../types";
import { cn } from "@/lib/utils";

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
  const categoryColors: Record<string, { bg: string; text: string }> = {
    "Web Development": { bg: "bg-blue-50", text: "text-blue-700" },
    "Mobile Apps": { bg: "bg-emerald-50", text: "text-emerald-700" },
    SaaS: { bg: "bg-[#F5F3FF]", text: "text-[#7C3AED]" },
    "UI/UX": { bg: "bg-purple-50", text: "text-purple-700" },
    Marketing: { bg: "bg-amber-50", text: "text-amber-700" },
    Consulting: { bg: "bg-indigo-50", text: "text-indigo-700" },
  };

  const catStyle = categoryColors[template.category] || {
    bg: "bg-slate-100",
    text: "text-slate-700",
  };

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs hover:border-[#DDD6FE] hover:shadow-xs transition-all">
      {/* Top Meta: Category & Win Rate */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span
            className={cn(
              "rounded-full px-2.5 py-0.5 text-[11px] font-bold tracking-wide select-none",
              catStyle.bg,
              catStyle.text
            )}
          >
            {template.category}
          </span>

          <span className="flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
            <TrendingUp className="h-3 w-3" />
            <span>{template.winRate} Win Rate</span>
          </span>
        </div>

        {/* Title & Description */}
        <div>
          <h3 className="text-base font-bold text-slate-900 leading-snug">
            {template.title}
          </h3>
          <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
            {template.description}
          </p>
        </div>

        {/* Structural Blocks Info */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-[11px] text-slate-600">
          <div className="flex items-center gap-1.5">
            <Layers className="h-3.5 w-3.5 text-slate-400" />
            <span>{template.sectionsCount} Sections Included</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-slate-400" />
            <span>{template.timelineDuration}</span>
          </div>
          <div className="flex items-center gap-1.5 col-span-2">
            <DollarSign className="h-3.5 w-3.5 text-slate-400" />
            <span className="font-semibold text-slate-800 truncate">
              {template.pricingModel}
            </span>
          </div>
        </div>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1 pt-1">
          {template.tags.slice(0, 4).map((tag, i) => (
            <span
              key={i}
              className="rounded-md bg-[#F8F8FA] border border-slate-200/60 px-1.5 py-0.5 text-[10px] font-medium text-slate-500"
            >
              {tag}
            </span>
          ))}
          {template.tags.length > 4 && (
            <span className="text-[10px] text-slate-400 pt-0.5">
              +{template.tags.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between pt-5 border-t border-slate-100 mt-4 gap-2">
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => onPreview(template)}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 transition-colors shadow-2xs"
            title="Preview Template"
          >
            <Eye className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={() => onDuplicate(template)}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 transition-colors shadow-2xs"
            title="Duplicate Template"
          >
            <Copy className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={() => onEdit(template)}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 transition-colors shadow-2xs"
            title="Edit Template"
          >
            <Edit2 className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Use Template Action */}
        <button
          type="button"
          onClick={() => onUse(template)}
          className="flex items-center gap-1.5 rounded-xl bg-[#7C3AED] px-3.5 py-1.5 text-xs font-bold text-white hover:bg-[#6D28D9] transition-all shadow-2xs cursor-pointer"
        >
          <span>Use Template</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}

