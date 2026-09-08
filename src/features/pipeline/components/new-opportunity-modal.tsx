"use client";

import * as React from "react";
import { X, Plus, Sparkles } from "lucide-react";
import { PipelineItem, PipelineStageId, PriorityLevel } from "../types";
import { Button } from "@/components/ui/button";

interface NewOpportunityModalProps {
  isOpen: boolean;
  initialStageId?: PipelineStageId;
  onClose: () => void;
  onSubmit: (newItem: PipelineItem) => void;
}

export function NewOpportunityModal({
  isOpen,
  initialStageId = "qualified",
  onClose,
  onSubmit,
}: NewOpportunityModalProps) {
  const [company, setCompany] = React.useState("");
  const [role, setRole] = React.useState("");
  const [salary, setSalary] = React.useState("$70k - $95k");
  const [location, setLocation] = React.useState("Remote");
  const [priority, setPriority] = React.useState<PriorityLevel>("high");
  const [stageId, setStageId] = React.useState<PipelineStageId>(initialStageId);

  React.useEffect(() => {
    if (isOpen) {
      setStageId(initialStageId);
    }
  }, [isOpen, initialStageId]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!company.trim() || !role.trim()) return;

    const newItem: PipelineItem = {
      id: `opp-${Date.now()}`,
      stageId,
      company: company.trim(),
      role: role.trim(),
      logoLetter: company.trim().charAt(0).toUpperCase(),
      logoBg: "bg-[#4F46E5]",
      matchScore: Math.floor(Math.random() * 15) + 85,
      salary: salary.trim() || "$60k - $80k",
      location: location.trim() || "Remote",
      priority,
      timeAgo: "Just now",
    };

    onSubmit(newItem);
    setCompany("");
    setRole("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-xs p-4 animate-in fade-in-50">
      <div className="relative w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-xl p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="text-lg font-bold text-slate-900">
          Add New Opportunity
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">
          Enter details to add an opportunity into your active pipeline.
        </p>

        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3.5">
          <div>
            <label className="text-xs font-semibold text-slate-700">
              Company Name
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Verve Labs"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="mt-1 h-9 w-full rounded-xl border border-slate-200 px-3 text-xs text-slate-800 placeholder:text-slate-400 focus:border-[#5B5AF7] focus:outline-none focus:ring-1.5 focus:ring-[#5B5AF7]/20"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700">
              Job Title / Role
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Senior Frontend Developer"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="mt-1 h-9 w-full rounded-xl border border-slate-200 px-3 text-xs text-slate-800 placeholder:text-slate-400 focus:border-[#5B5AF7] focus:outline-none focus:ring-1.5 focus:ring-[#5B5AF7]/20"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-slate-700">
                Salary Range
              </label>
              <input
                type="text"
                placeholder="$70k - $100k"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                className="mt-1 h-9 w-full rounded-xl border border-slate-200 px-3 text-xs text-slate-800 placeholder:text-slate-400 focus:border-[#5B5AF7] focus:outline-none focus:ring-1.5 focus:ring-[#5B5AF7]/20"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700">
                Location Model
              </label>
              <input
                type="text"
                placeholder="Remote"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="mt-1 h-9 w-full rounded-xl border border-slate-200 px-3 text-xs text-slate-800 placeholder:text-slate-400 focus:border-[#5B5AF7] focus:outline-none focus:ring-1.5 focus:ring-[#5B5AF7]/20"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-slate-700">
                Priority
              </label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value as PriorityLevel)}
                className="mt-1 h-9 w-full rounded-xl border border-slate-200 bg-white px-2.5 text-xs text-slate-800 focus:border-[#5B5AF7] focus:outline-none focus:ring-1.5 focus:ring-[#5B5AF7]/20 cursor-pointer"
              >
                <option value="high">High Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="low">Low Priority</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700">
                Initial Stage
              </label>
              <select
                value={stageId}
                onChange={(e) => setStageId(e.target.value as PipelineStageId)}
                className="mt-1 h-9 w-full rounded-xl border border-slate-200 bg-white px-2.5 text-xs text-slate-800 focus:border-[#5B5AF7] focus:outline-none focus:ring-1.5 focus:ring-[#5B5AF7]/20 cursor-pointer"
              >
                <option value="qualified">Qualified</option>
                <option value="proposal_drafting">Proposal Drafting</option>
                <option value="applied">Applied</option>
                <option value="interview">Interview</option>
                <option value="negotiation">Negotiation</option>
                <option value="won">Won</option>
              </select>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-end gap-2.5 border-t border-slate-100 pt-3.5">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={onClose}
              className="rounded-xl border-slate-200 text-xs font-medium cursor-pointer"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="default"
              size="sm"
              className="rounded-xl bg-[#5B5AF7] hover:bg-[#4847E5] text-xs font-semibold text-white shadow-xs gap-1.5 px-3.5 cursor-pointer"
            >
              <Plus className="h-4 w-4" />
              <span>Add to Pipeline</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

