"use client";

import * as React from "react";
import {
  Briefcase,
  User,
  CheckSquare,
  FileText,
  Plus,
  ChevronUp,
  ChevronDown,
  Layers,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { ProposalCardItem } from "../../types";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface OpportunityContextPanelProps {
  proposal: ProposalCardItem;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

export function OpportunityContextPanel({
  proposal,
  isCollapsed = false,
  onToggleCollapse,
}: OpportunityContextPanelProps) {
  const [isFullJobDescOpen, setIsFullJobDescOpen] = React.useState(false);
  const [extraContext, setExtraContext] = React.useState<string[]>([]);
  const [isAddingContext, setIsAddingContext] = React.useState(false);
  const [contextInput, setContextInput] = React.useState("");

  const handleAddContextSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contextInput.trim()) return;
    setExtraContext((prev) => [...prev, contextInput.trim()]);
    setContextInput("");
    setIsAddingContext(false);
    toast.success("Additional context saved to proposal!");
  };

  const companyName = proposal.company || "Acme Corporation";
  const roleName = proposal.role || "Website Redesign";
  const contactName = proposal.clientContact?.name || "John Smith";
  const contactRole = "Product Manager";
  const contactEmail = proposal.clientContact?.email || "john@acme.com";
  const budget = proposal.budget || "$15,000 – $20,000";
  const timeline = proposal.opportunityDetails?.timelineExpectation || "6–8 weeks";

  const requirements = proposal.opportunityDetails?.requirements?.length
    ? proposal.opportunityDetails.requirements
    : [
        "Modern SaaS website",
        "Next.js development",
        "CMS integration",
        "Responsive design",
        "SEO optimization",
      ];

  const jobDescription =
    proposal.opportunityDetails?.jobDescription ||
    "We're looking for a modern, high-performance website to showcase our product and drive more trial signups. The site should be fast, responsive and optimized for search engines...";

  if (isCollapsed) {
    return (
      <div className="flex flex-col items-center py-4 px-2 border-r border-slate-200 bg-white select-none">
        <button
          type="button"
          onClick={onToggleCollapse}
          className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors cursor-pointer"
          title="Expand Opportunity"
        >
          <Layers className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <aside className="w-72 lg:w-80 shrink-0 border-r border-slate-200 bg-white flex flex-col h-full overflow-y-auto custom-scrollbar select-none text-xs">
      {/* Top Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <Layers className="h-4 w-4 text-slate-600" />
          <h2 className="text-xs font-bold text-slate-900 tracking-tight">
            Opportunity
          </h2>
        </div>
        {onToggleCollapse && (
          <button
            type="button"
            onClick={onToggleCollapse}
            className="rounded p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            title="Collapse panel"
          >
            <ChevronUp className="h-4 w-4" />
          </button>
        )}
      </div>

      <div className="p-5 space-y-6 flex-1">
        {/* Company Card */}
        <div className="rounded-xl border border-slate-200/80 bg-white p-3.5 shadow-2xs space-y-2">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EDE9FE] text-[#6D28D9] font-bold text-sm shadow-2xs">
              {companyName.slice(0, 2).toUpperCase()}
            </div>
            <div className="flex flex-col min-w-0">
              <h3 className="font-bold text-slate-900 truncate text-xs">
                {companyName}
              </h3>
              <span className="text-[11px] text-slate-500 truncate">
                {roleName}
              </span>
              <div className="pt-0.5">
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span>Qualified</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CLIENT Section */}
        <div className="space-y-2">
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            <User className="h-3.5 w-3.5 text-slate-400" />
            <span>CLIENT</span>
          </div>
          <div className="pl-5 space-y-0.5 text-xs text-slate-700">
            <p className="font-semibold text-slate-900">{companyName}</p>
            <p className="text-slate-600">{contactName}</p>
            <p className="text-slate-400 text-[11px]">{contactRole}</p>
            <a
              href={`mailto:${contactEmail}`}
              className="text-[#7C3AED] hover:underline text-[11px] font-medium block pt-0.5"
            >
              {contactEmail}
            </a>
          </div>
        </div>

        {/* OPPORTUNITY Section */}
        <div className="space-y-2">
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            <Briefcase className="h-3.5 w-3.5 text-slate-400" />
            <span>OPPORTUNITY</span>
          </div>
          <div className="pl-5 space-y-1.5 text-xs">
            <p className="font-semibold text-slate-900">{roleName}</p>
            <div>
              <span className="text-slate-400 text-[11px] block">Budget</span>
              <span className="font-medium text-slate-800">{budget}</span>
            </div>
            <div>
              <span className="text-slate-400 text-[11px] block">Timeline</span>
              <span className="font-medium text-slate-800">{timeline}</span>
            </div>
          </div>
        </div>

        {/* REQUIREMENTS Section */}
        <div className="space-y-2">
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            <CheckSquare className="h-3.5 w-3.5 text-slate-400" />
            <span>REQUIREMENTS</span>
          </div>
          <ul className="pl-5 space-y-1 text-xs text-slate-700">
            {requirements.map((req, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <span className="text-slate-400 leading-none">•</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* JOB DESCRIPTION Section */}
        <div className="space-y-2">
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            <FileText className="h-3.5 w-3.5 text-slate-400" />
            <span>JOB DESCRIPTION</span>
          </div>
          <div className="pl-5 space-y-1 text-xs text-slate-600">
            <p className={cn("leading-relaxed", !isFullJobDescOpen && "line-clamp-3")}>
              {jobDescription}
            </p>
            <button
              type="button"
              onClick={() => setIsFullJobDescOpen(!isFullJobDescOpen)}
              className="text-[#7C3AED] hover:underline text-[11px] font-semibold inline-flex items-center gap-0.5 pt-0.5 cursor-pointer"
            >
              <span>{isFullJobDescOpen ? "Show less ▴" : "View full description ▾"}</span>
            </button>
          </div>
        </div>

        {/* Extra Context items if added */}
        {extraContext.length > 0 && (
          <div className="space-y-1.5 pl-5">
            <span className="text-[10px] font-bold text-slate-400 uppercase">
              Added Notes
            </span>
            {extraContext.map((note, idx) => (
              <div
                key={idx}
                className="rounded-lg bg-[#F8F8FA] border border-slate-200/60 p-2 text-[11px] text-slate-700"
              >
                {note}
              </div>
            ))}
          </div>
        )}

        {/* + Add Context Box */}
        {isAddingContext ? (
          <form onSubmit={handleAddContextSubmit} className="space-y-2 pt-2">
            <textarea
              autoFocus
              rows={3}
              value={contextInput}
              onChange={(e) => setContextInput(e.target.value)}
              placeholder="Type client note, requirement or constraint..."
              className="w-full rounded-xl border border-[#7C3AED] p-2.5 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-[#7C3AED]"
            />
            <div className="flex items-center justify-end gap-1.5">
              <button
                type="button"
                onClick={() => setIsAddingContext(false)}
                className="rounded-lg border border-slate-200 px-2.5 py-1 text-[11px] font-medium text-slate-600 hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-lg bg-[#7C3AED] px-3 py-1 text-[11px] font-bold text-white hover:bg-[#6D28D9]"
              >
                Save
              </button>
            </div>
          </form>
        ) : (
          <button
            type="button"
            onClick={() => setIsAddingContext(true)}
            className="w-full rounded-xl border border-dashed border-slate-300 hover:border-[#7C3AED] hover:bg-[#F5F3FF]/40 p-3.5 text-left transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#7C3AED]">
              <Plus className="h-3.5 w-3.5" />
              <span>Add Context</span>
            </div>
            <p className="text-[11px] text-slate-400 mt-1 leading-relaxed group-hover:text-slate-500">
              Add client preferences, meeting notes, additional requirements, etc.
            </p>
          </button>
        )}
      </div>
    </aside>
  );
}
