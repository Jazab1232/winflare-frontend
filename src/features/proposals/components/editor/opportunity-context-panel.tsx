"use client";

import * as React from "react";
import {
  Building2,
  User,
  Compass,
  Calendar,
  Clock,
  Check,
  X,
  ChevronRight,
} from "lucide-react";
import { ProposalCardItem } from "../../types";

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
  const companyName = proposal.company || "Acme Inc.";
  const roleName = proposal.role || "Web Development";
  const contactName = proposal.clientContact?.name || "Sarah Johnson";
  const contactEmail = proposal.clientContact?.email || "sarah@acmeinc.com";
  const budget = proposal.budget || "$10,000 – $15,000";
  const timeline = proposal.opportunityDetails?.timelineExpectation || "3–4 weeks";

  const requirementsText =
    proposal.opportunityDetails?.requirements?.join(" ") ||
    "Modern, fast, and responsive website with CMS integration. Need SEO optimization and modern UI/UX design.";

  const jobDescription =
    proposal.opportunityDetails?.jobDescription ||
    "We're looking for a complete website redesign to improve our online presence, showcase our services, and generate more leads. The site should be fast, mobile-friendly, and easy to manage.";

  // Collapsed state: full height sleek vertical bar
  if (isCollapsed) {
    return (
      <aside
        onClick={onToggleCollapse}
        className="w-12 shrink-0 h-full rounded-2xl border border-slate-200/80 bg-white shadow-2xs flex flex-col items-center justify-between py-5 cursor-pointer hover:border-[#5B5AF7]/50 hover:bg-[#FAFBFF] transition-all group select-none"
        title="Expand Opportunity Context"
      >
        <div className="flex flex-col items-center gap-3">
          <div className="p-2 rounded-xl bg-[#EEF2FF] text-[#5B5AF7] group-hover:scale-105 transition-transform">
            <Building2 className="h-4 w-4" />
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center my-4">
          <span className="text-[11px] font-semibold text-slate-500 group-hover:text-[#5B5AF7] tracking-wider uppercase [writing-mode:vertical-rl] rotate-180 transition-colors">
            Opportunity Context
          </span>
        </div>

        <div className="p-1 rounded-lg text-slate-400 group-hover:text-[#5B5AF7] group-hover:translate-x-0.5 transition-all">
          <ChevronRight className="h-4 w-4" />
        </div>
      </aside>
    );
  }

  return (
    <aside className="w-64 sm:w-72 lg:w-80 shrink-0 flex flex-col gap-4 h-full overflow-y-auto custom-scrollbar select-none pr-1">
      {/* Card 1: Opportunity Context */}
      <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs space-y-4">
        {/* Header with Title and Close 'X' Button */}
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-900">
            Opportunity Context
          </h3>
          {onToggleCollapse && (
            <button
              type="button"
              onClick={onToggleCollapse}
              className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              title="Close Opportunity Context"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        {/* Company Avatar + Name + Qualified Badge */}
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#4F46E5] text-white font-bold text-sm shadow-2xs">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M12 2L2 19.5h20L12 2zm0 4.5l6.5 11.5H5.5L12 6.5z"/>
            </svg>
          </div>
          <div className="flex flex-col min-w-0 space-y-1">
            <h4 className="font-bold text-slate-900 text-xs truncate">
              {companyName}
            </h4>
            <span className="text-[11px] text-slate-400 truncate">
              acmeinc.com
            </span>
            <div>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                <Check className="h-3 w-3 stroke-[3]" />
                <span>Qualified</span>
              </span>
            </div>
          </div>
        </div>

        {/* Role */}
        <div className="space-y-1">
          <span className="text-[11px] font-medium text-slate-400 block">
            Role
          </span>
          <p className="text-xs font-semibold text-slate-800">
            {roleName}
          </p>
        </div>

        {/* Budget */}
        <div className="space-y-1">
          <span className="text-[11px] font-medium text-slate-400 block">
            Budget
          </span>
          <p className="text-xs font-semibold text-slate-800">
            {budget}
          </p>
        </div>

        {/* Requirements */}
        <div className="space-y-1">
          <span className="text-[11px] font-medium text-slate-400 block">
            Requirements
          </span>
          <p className="text-xs text-slate-600 leading-relaxed">
            {requirementsText}
          </p>
        </div>

        {/* Job Description */}
        <div className="space-y-1">
          <span className="text-[11px] font-medium text-slate-400 block">
            Job Description
          </span>
          <p className="text-xs text-slate-600 leading-relaxed">
            {jobDescription}
          </p>
        </div>
      </div>

      {/* Card 2: Key Details */}
      <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs space-y-4">
        <h3 className="text-sm font-bold text-slate-900">
          Key Details
        </h3>

        <div className="space-y-3.5">
          {/* Client */}
          <div className="flex items-start gap-3">
            <div className="p-1.5 rounded-lg bg-[#EEF2FF] text-[#5B5AF7] shrink-0 mt-0.5">
              <Building2 className="h-3.5 w-3.5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] text-slate-400 font-medium">Client</span>
              <span className="text-xs font-semibold text-slate-800">{companyName}</span>
            </div>
          </div>

          {/* Contact */}
          <div className="flex items-start gap-3">
            <div className="p-1.5 rounded-lg bg-[#EEF2FF] text-[#5B5AF7] shrink-0 mt-0.5">
              <User className="h-3.5 w-3.5" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[11px] text-slate-400 font-medium">Contact</span>
              <span className="text-xs font-semibold text-slate-800">{contactName}</span>
              <span className="text-[11px] text-slate-400 mt-0.5">{contactEmail}</span>
            </div>
          </div>

          {/* Opportunity */}
          <div className="flex items-start gap-3">
            <div className="p-1.5 rounded-lg bg-[#EEF2FF] text-[#5B5AF7] shrink-0 mt-0.5">
              <Compass className="h-3.5 w-3.5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] text-slate-400 font-medium">Opportunity</span>
              <span className="text-xs font-semibold text-slate-800">{roleName}</span>
            </div>
          </div>

          {/* Budget Range */}
          <div className="flex items-start gap-3">
            <div className="p-1.5 rounded-lg bg-[#EEF2FF] text-[#5B5AF7] shrink-0 mt-0.5">
              <Calendar className="h-3.5 w-3.5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] text-slate-400 font-medium">Budget Range</span>
              <span className="text-xs font-semibold text-slate-800">{budget}</span>
            </div>
          </div>

          {/* Timeline */}
          <div className="flex items-start gap-3">
            <div className="p-1.5 rounded-lg bg-[#EEF2FF] text-[#5B5AF7] shrink-0 mt-0.5">
              <Clock className="h-3.5 w-3.5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] text-slate-400 font-medium">Timeline</span>
              <span className="text-xs font-semibold text-slate-800">{timeline}</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
