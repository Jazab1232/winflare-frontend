"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  X,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Briefcase,
  Building2,
  Clock,
  DollarSign,
  Layers,
  Wand2,
  FileCheck,
} from "lucide-react";
import { ProposalType, ProposalCardItem } from "../types";
import { useProposalsStore } from "../store/proposals-store";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface ProposalGeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialOpportunity?: Partial<ProposalCardItem> | null;
}

export function ProposalGeneratorModal({
  isOpen,
  onClose,
  initialOpportunity,
}: ProposalGeneratorModalProps) {
  const router = useRouter();
  const { generateNewProposal } = useProposalsStore();

  const [step, setStep] = React.useState<"config" | "generating" | "complete">("config");
  const [proposalType, setProposalType] = React.useState<ProposalType>("fixed_price");
  const [company, setCompany] = React.useState(initialOpportunity?.company || "NextGen Health");
  const [role, setRole] = React.useState(initialOpportunity?.role || "Senior Full Stack Engineer");
  const [budget, setBudget] = React.useState(initialOpportunity?.budget || "$6,500 Fixed Scope");
  const [tone, setTone] = React.useState<"consultative" | "technical" | "concise">("technical");
  const [requirements, setRequirements] = React.useState("Next.js 16, TypeScript, Supabase, Tailwind CSS, Stripe Billing");
  const [jobDescription, setJobDescription] = React.useState(
    "Need a senior engineer to architect and ship our core patient analytics dashboard with multi-tenant auth and Stripe billing."
  );

  const [generatedProposalId, setGeneratedProposalId] = React.useState<string | null>(null);
  const [generationStep, setGenerationStep] = React.useState(0);

  // Sync initial opportunity when passed
  React.useEffect(() => {
    if (initialOpportunity) {
      if (initialOpportunity.company) setCompany(initialOpportunity.company);
      if (initialOpportunity.role) setRole(initialOpportunity.role);
      if (initialOpportunity.budget) setBudget(initialOpportunity.budget);
    }
  }, [initialOpportunity]);

  if (!isOpen) return null;

  const generationSteps = [
    "Analyzing client requirements and industry signals...",
    "Drafting high-conversion problem statement & architecture...",
    "Structuring verifiable milestone timeline & pricing schedule...",
    "Attaching highest-match case studies & portfolio proof...",
    "Running automated proposal review score check (89/100)...",
  ];

  const handleStartGeneration = () => {
    setStep("generating");
    setGenerationStep(0);

    const interval = setInterval(() => {
      setGenerationStep((prev) => {
        if (prev < generationSteps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          // Complete and create proposal
          const numericValue = parseInt(budget.replace(/[^0-9]/g, "")) || 6500;
          const newProp = generateNewProposal({
            company,
            role,
            budget,
            value: numericValue,
            proposalType,
            requirements: requirements.split(",").map((s) => s.trim()),
            jobDescription,
          });
          setGeneratedProposalId(newProp.id);
          setStep("complete");
          return prev;
        }
      });
    }, 600);
  };

  const handleOpenInEditor = () => {
    if (generatedProposalId) {
      onClose();
      router.push(`/proposals/${generatedProposalId}`);
      toast.success(`Proposal for ${company} ready in editor!`);
    }
  };

  const types: Array<{ id: ProposalType; label: string; desc: string }> = [
    { id: "freelance", label: "Freelance", desc: "Direct contract execution" },
    { id: "agency", label: "Agency", desc: "Full-team scoped delivery" },
    { id: "consulting", label: "Consulting", desc: "Advisory & architectural direction" },
    { id: "fixed_price", label: "Fixed Price", desc: "Milestone-backed deliverables" },
    { id: "hourly", label: "Hourly", desc: "Sprint / ongoing weekly capacity" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity"
        onClick={() => {
          if (step !== "generating") onClose();
        }}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl transition-all">
        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F5F3FF] text-[#7C3AED] border border-[#DDD6FE]">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Generate Winning Proposal
              </h2>
              <p className="text-xs text-slate-500">
                AI crafts a personalized, client-ready proposal in seconds
              </p>
            </div>
          </div>

          {step !== "generating" && (
            <button
              onClick={onClose}
              className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Step 1: Configuration Form */}
        {step === "config" && (
          <div className="space-y-5 pt-5">
            {/* Proposal Type Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                1. Proposal Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {types.map((t) => {
                  const isSelected = proposalType === t.id;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setProposalType(t.id)}
                      className={cn(
                        "flex flex-col items-start p-3 rounded-xl border text-left transition-all cursor-pointer",
                        isSelected
                          ? "border-[#7C3AED] bg-[#F5F3FF] text-[#7C3AED] shadow-2xs"
                          : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-[#F8F8FA]"
                      )}
                    >
                      <span className="text-xs font-bold">{t.label}</span>
                      <span className="text-[10px] text-slate-400 leading-tight mt-0.5">
                        {t.desc}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Opportunity Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Company / Client Name
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. Acme Corp"
                  className="w-full h-9 rounded-lg border border-slate-200 bg-white px-3 text-xs text-slate-900 focus:border-[#7C3AED] focus:outline-none focus:ring-1 focus:ring-[#7C3AED]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Target Role / Project Title
                </label>
                <input
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="e.g. Senior Frontend Architect"
                  className="w-full h-9 rounded-lg border border-slate-200 bg-white px-3 text-xs text-slate-900 focus:border-[#7C3AED] focus:outline-none focus:ring-1 focus:ring-[#7C3AED]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Target Budget / Rate
                </label>
                <input
                  type="text"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder="e.g. $5,000 Project or $85/hr"
                  className="w-full h-9 rounded-lg border border-slate-200 bg-white px-3 text-xs text-slate-900 focus:border-[#7C3AED] focus:outline-none focus:ring-1 focus:ring-[#7C3AED]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  AI Persuasion Tone
                </label>
                <select
                  value={tone}
                  onChange={(e) => setTone(e.target.value as any)}
                  className="w-full h-9 rounded-lg border border-slate-200 bg-white px-3 text-xs text-slate-900 focus:border-[#7C3AED] focus:outline-none focus:ring-1 focus:ring-[#7C3AED]"
                >
                  <option value="technical">Technical & Authoritative</option>
                  <option value="consultative">Consultative & Value-First</option>
                  <option value="concise">Fast, Punchy & Direct</option>
                </select>
              </div>
            </div>

            {/* Tech Requirements & Job Notes */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Required Skills & Tech Stack (comma separated)
              </label>
              <input
                type="text"
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                placeholder="Next.js, TypeScript, Supabase, Tailwind CSS"
                className="w-full h-9 rounded-lg border border-slate-200 bg-white px-3 text-xs text-slate-900 focus:border-[#7C3AED] focus:outline-none focus:ring-1 focus:ring-[#7C3AED]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Job Context / Client Problem
              </label>
              <textarea
                rows={2}
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Paste client job post or summary..."
                className="w-full rounded-lg border border-slate-200 bg-white p-2.5 text-xs text-slate-900 focus:border-[#7C3AED] focus:outline-none focus:ring-1 focus:ring-[#7C3AED]"
              />
            </div>

            {/* CTAs */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleStartGeneration}
                className="flex items-center gap-2 rounded-xl bg-[#7C3AED] px-5 py-2 text-xs font-bold text-white hover:bg-[#6D28D9] shadow-sm hover:shadow transition-all cursor-pointer"
              >
                <Sparkles className="h-4 w-4" />
                <span>Generate Proposal Draft</span>
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Generating State */}
        {step === "generating" && (
          <div className="py-12 flex flex-col items-center justify-center text-center space-y-6">
            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5F3FF] border border-[#DDD6FE] text-[#7C3AED] animate-pulse">
              <Wand2 className="h-8 w-8 animate-spin text-[#7C3AED]" style={{ animationDuration: "3s" }} />
            </div>

            <div className="space-y-2 max-w-md">
              <h3 className="text-base font-bold text-slate-900">
                Generating Tailored Proposal for {company}
              </h3>
              <p className="text-xs text-slate-500">
                {generationSteps[generationStep]}
              </p>
            </div>

            {/* Step Indicators */}
            <div className="w-full max-w-md space-y-2 text-left">
              {generationSteps.map((s, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "flex items-center gap-2.5 text-xs transition-opacity duration-300",
                    idx < generationStep
                      ? "text-emerald-700 font-semibold"
                      : idx === generationStep
                      ? "text-[#7C3AED] font-bold"
                      : "text-slate-300"
                  )}
                >
                  {idx < generationStep ? (
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  ) : (
                    <div
                      className={cn(
                        "h-4 w-4 rounded-full border border-current flex items-center justify-center text-[10px] shrink-0",
                        idx === generationStep && "bg-[#EDE9FE]"
                      )}
                    >
                      {idx + 1}
                    </div>
                  )}
                  <span className="truncate">{s}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Complete State */}
        {step === "complete" && (
          <div className="py-10 flex flex-col items-center justify-center text-center space-y-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#DCFCE7] text-[#15803D] border border-[#BBF7D0]">
              <FileCheck className="h-8 w-8" />
            </div>

            <div className="space-y-1">
              <h3 className="text-base font-bold text-slate-900">
                Proposal Generated Successfully!
              </h3>
              <p className="text-xs text-slate-500 max-w-md">
                All 9 core sections tailored to {company}&apos;s requirements with an initial AI Quality Score of <strong className="text-emerald-700">89/100</strong>.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200/80 bg-[#F8F8FA] p-4 text-left w-full max-w-md text-xs space-y-1.5">
              <div className="flex justify-between">
                <span className="text-slate-500">Target Client:</span>
                <span className="font-bold text-slate-900">{company}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Role:</span>
                <span className="font-medium text-slate-800">{role}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Structure:</span>
                <span className="font-medium text-slate-800">9 Rich Sections + Milestone Pricing</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Done
              </button>
              <button
                type="button"
                onClick={handleOpenInEditor}
                className="flex items-center gap-2 rounded-xl bg-[#7C3AED] px-6 py-2.5 text-xs font-bold text-white hover:bg-[#6D28D9] shadow-sm transition-all cursor-pointer"
              >
                <span>Open in Proposal Editor</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

