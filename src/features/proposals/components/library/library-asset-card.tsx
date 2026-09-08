"use client";

import * as React from "react";
import {
  Copy,
  Check,
  TrendingUp,
  FileText,
  Image,
  MessageSquare,
  Tag,
  HelpCircle,
  Briefcase,
  Sparkles,
} from "lucide-react";
import { ProposalLibraryItem } from "../../types";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface LibraryAssetCardProps {
  item: ProposalLibraryItem;
  onInsert?: (item: ProposalLibraryItem) => void;
}

export function LibraryAssetCard({ item, onInsert }: LibraryAssetCardProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(item.content);
    setCopied(true);
    toast.success("Snippet copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const categoryLabels: Record<string, { label: string; icon: any; color: string }> = {
    introductions: {
      label: "Winning Introduction",
      icon: FileText,
      color: "bg-[#F5F3FF] text-[#7C3AED]",
    },
    case_studies: {
      label: "Case Study",
      icon: Image,
      color: "bg-blue-50 text-blue-700",
    },
    testimonials: {
      label: "Testimonial",
      icon: MessageSquare,
      color: "bg-emerald-50 text-emerald-700",
    },
    pricing: {
      label: "Pricing Package",
      icon: Tag,
      color: "bg-purple-50 text-purple-700",
    },
    faqs: {
      label: "FAQ",
      icon: HelpCircle,
      color: "bg-amber-50 text-amber-700",
    },
    services: {
      label: "Service Description",
      icon: Briefcase,
      color: "bg-indigo-50 text-indigo-700",
    },
  };

  const cat = categoryLabels[item.category] || categoryLabels.introductions;
  const Icon = cat.icon;

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs hover:border-[#DDD6FE] hover:shadow-xs transition-all">
      {/* Top Header */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span
              className={cn(
                "flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-bold select-none",
                cat.color
              )}
            >
              <Icon className="h-3 w-3" />
              <span>{cat.label}</span>
            </span>
          </div>

          {item.winRateBoost && (
            <span className="flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
              <TrendingUp className="h-3 w-3" />
              <span>{item.winRateBoost}</span>
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-sm font-bold text-slate-900 leading-snug">
          {item.title}
        </h3>

        {/* Content Box */}
        <div className="rounded-xl border border-slate-200/60 bg-[#F8F8FA] p-3 text-xs text-slate-700 font-mono leading-relaxed max-h-36 overflow-y-auto custom-scrollbar whitespace-pre-line">
          {item.content}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 pt-1">
          {item.tags.map((t, i) => (
            <span
              key={i}
              className="rounded-md bg-white border border-slate-200/80 px-1.5 py-0.5 text-[10px] font-medium text-slate-500"
            >
              #{t}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Controls */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-4 text-xs">
        <span className="text-[11px] text-slate-400">
          Used in <strong>{item.timesUsed}</strong> proposals
        </span>

        <div className="flex items-center gap-2">
          {onInsert && (
            <button
              type="button"
              onClick={() => onInsert(item)}
              className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer"
            >
              Insert
            </button>
          )}

          <button
            type="button"
            onClick={handleCopy}
            className={cn(
              "flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold transition-all shadow-2xs cursor-pointer",
              copied
                ? "bg-emerald-600 text-white"
                : "bg-[#F5F3FF] border border-[#DDD6FE] text-[#7C3AED] hover:bg-[#EDE9FE]"
            )}
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>Copy Snippet</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

