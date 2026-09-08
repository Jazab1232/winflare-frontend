"use client";

import * as React from "react";
import {
  X,
  MapPin,
  DollarSign,
  Briefcase,
  Clock,
  Sparkles,
  Bookmark,
  GitBranch,
  MoreHorizontal,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { OpportunityItem } from "../types";
import { CompanyLogo } from "./company-logo";
import { Button } from "@/components/ui/button";

interface OpportunityDetailPanelProps {
  item: OpportunityItem;
  onClose?: () => void;
  onSave?: () => void;
  onGenerateProposal?: () => void;
  onMoveToPipeline?: () => void;
}

export function OpportunityDetailPanel({
  item,
  onClose,
  onSave,
  onGenerateProposal,
  onMoveToPipeline,
}: OpportunityDetailPanelProps) {
  const [activeTab, setActiveTab] = React.useState<
    "overview" | "company" | "requirements" | "ai-match" | "activity"
  >("overview");

  // Donut chart calculation
  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (item.aiMatch.overall / 100) * circumference;

  return (
    <div className="flex h-full flex-col bg-white select-none overflow-hidden">
      {/* Scrollable Content Container */}
      <div className="flex-1 overflow-y-auto p-5 custom-scrollbar flex flex-col gap-4">
        {/* Top Row: Company Info & Close */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <CompanyLogo type={item.logoType} size="md" />
            <span className="text-base font-bold text-slate-900">
              {item.company}
            </span>
            <span className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
              Company
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200/80 bg-emerald-50 px-2 py-0.5 text-xs font-bold text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              {item.matchScore}% Match
            </span>
          </div>

          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Title */}
        <div>
          <h2 className="text-xl font-bold tracking-tight text-slate-900">
            {item.role}
          </h2>
        </div>

        {/* Meta Line */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5 text-slate-400" />
            {item.location}
          </span>
          <span className="flex items-center gap-1">
            <DollarSign className="h-3.5 w-3.5 text-slate-400" />
            {item.salary}
          </span>
          <span className="flex items-center gap-1">
            <Briefcase className="h-3.5 w-3.5 text-slate-400" />
            {item.jobType}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5 text-slate-400" />
            {item.postedTime}
          </span>
        </div>

        {/* Skills Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          {item.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-lg border border-slate-200/80 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Top Action Buttons */}
        <div className="flex items-center gap-2 pt-1">
          <Button
            variant="default"
            size="sm"
            onClick={onGenerateProposal}
            className="flex-1 rounded-xl bg-[#5B5AF7] hover:bg-[#4847E5] text-xs font-bold text-white shadow-xs gap-1.5 h-9 cursor-pointer"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Generate Proposal</span>
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={onSave}
            className="rounded-xl border-slate-200/90 text-xs font-semibold text-slate-700 hover:bg-slate-50 gap-1.5 h-9 px-3 cursor-pointer shadow-2xs"
          >
            <Bookmark className="h-3.5 w-3.5 text-slate-500" />
            <span>Save</span>
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={onMoveToPipeline}
            className="rounded-xl border-slate-200/90 text-xs font-semibold text-slate-700 hover:bg-slate-50 gap-1.5 h-9 px-3 cursor-pointer shadow-2xs"
          >
            <GitBranch className="h-3.5 w-3.5 text-slate-500" />
            <span>Move to Pipeline</span>
          </Button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-6 border-b border-slate-100 text-xs font-semibold text-slate-500 pt-1">
          {[
            { id: "overview", label: "Overview" },
            { id: "company", label: "Company" },
            { id: "requirements", label: "Requirements" },
            { id: "ai-match", label: "AI Match" },
            { id: "activity", label: "Activity" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as any)}
              className={cn(
                "pb-2.5 transition-colors relative cursor-pointer",
                activeTab === tab.id
                  ? "text-[#5B5AF7] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#5B5AF7]"
                  : "hover:text-slate-900"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Section: About the Role */}
        <div className="flex flex-col gap-1.5 pt-1">
          <h3 className="text-xs font-bold text-slate-900">About the Role</h3>
          <p className="text-xs leading-relaxed text-slate-600">
            {item.aboutRole}
          </p>
        </div>

        {/* Section: AI Match Score */}
        <div className="flex flex-col gap-2.5 pt-2 border-t border-slate-100">
          <h3 className="text-xs font-bold text-slate-900">AI Match Score</h3>

          <div className="flex items-center gap-6">
            {/* Donut Progress Gauge */}
            <div className="flex flex-col items-center">
              <div className="relative flex h-24 w-24 items-center justify-center">
                <svg className="h-full w-full -rotate-90 transform" viewBox="0 0 80 80">
                  {/* Background Track */}
                  <circle
                    cx="40"
                    cy="40"
                    r={radius}
                    className="stroke-slate-100"
                    strokeWidth="7"
                    fill="transparent"
                  />
                  {/* Active Progress */}
                  <circle
                    cx="40"
                    cy="40"
                    r={radius}
                    stroke="#10B981"
                    strokeWidth="7"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    fill="transparent"
                  />
                </svg>
                <div className="absolute flex flex-col items-center justify-center text-center">
                  <span className="text-base font-extrabold text-slate-900">
                    {item.aiMatch.overall}%
                  </span>
                  <span className="text-[10px] font-medium text-slate-400">
                    Match
                  </span>
                </div>
              </div>
              <span className="text-[11px] font-medium text-slate-400 mt-1">
                Overall Match
              </span>
            </div>

            {/* Breakdown List */}
            <div className="flex flex-1 flex-col gap-2">
              {[
                { label: "Tech Stack Match", value: item.aiMatch.techStack },
                { label: "Experience Match", value: item.aiMatch.experience },
                { label: "Budget Match", value: item.aiMatch.budget },
                { label: "Location Match", value: item.aiMatch.location },
                { label: "Role Fit", value: item.aiMatch.roleFit },
              ].map((m) => (
                <div
                  key={m.label}
                  className="flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span className="text-slate-600">{m.label}</span>
                  </div>
                  <span className="font-bold text-slate-900">{m.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section: Why This Matches */}
        <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
          <h3 className="text-xs font-bold text-slate-900">Why This Matches</h3>
          <div className="flex flex-col gap-1.5">
            {item.whyMatches.map((reason, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span>{reason}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Missing Skills (Optional) */}
        <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
          <h3 className="text-xs font-bold text-slate-900">
            Missing Skills (Optional)
          </h3>
          <div className="flex flex-wrap items-center gap-1.5">
            {item.missingSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-xs font-medium text-slate-500"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky Bottom Action Buttons */}
      <div className="flex items-center gap-2 p-4 border-t border-slate-100 bg-white">
        <Button
          variant="default"
          size="sm"
          onClick={onGenerateProposal}
          className="flex-1 rounded-xl bg-[#5B5AF7] hover:bg-[#4847E5] text-xs font-bold text-white shadow-xs gap-1.5 h-9"
        >
          <Sparkles className="h-3.5 w-3.5" />
          <span>Generate Proposal</span>
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={onSave}
          className="rounded-xl border-slate-200/90 text-xs font-semibold text-slate-700 hover:bg-slate-50 gap-1.5 h-9 px-3"
        >
          <Bookmark className="h-3.5 w-3.5 text-slate-500" />
          <span>Save</span>
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={onMoveToPipeline}
          className="rounded-xl border-slate-200/90 text-xs font-semibold text-slate-700 hover:bg-slate-50 gap-1.5 h-9 px-3"
        >
          <GitBranch className="h-3.5 w-3.5 text-slate-500" />
          <span>Move to Pipeline</span>
        </Button>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200/90 text-slate-500 hover:bg-slate-50 cursor-pointer"
        >
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
