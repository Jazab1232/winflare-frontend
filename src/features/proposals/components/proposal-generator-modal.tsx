"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  X,
  User,
  Users,
  Briefcase,
  FileCheck,
  Clock,
  Loader2,
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

  const [selectedType, setSelectedType] = React.useState<ProposalType>("freelance");
  const [isGenerating, setIsGenerating] = React.useState(false);

  if (!isOpen) return null;

  const proposalTypes = [
    {
      id: "freelance" as ProposalType,
      title: "Freelance",
      subtitle: "For individual projects and short-term work",
      icon: User,
    },
    {
      id: "agency" as ProposalType,
      title: "Agency",
      subtitle: "For agency services and team projects",
      icon: Users,
    },
    {
      id: "consulting" as ProposalType,
      title: "Consulting",
      subtitle: "For strategy and advisory services",
      icon: Briefcase,
    },
    {
      id: "fixed_price" as ProposalType,
      title: "Fixed Price",
      subtitle: "For defined scope and deliverables",
      icon: FileCheck,
    },
    {
      id: "hourly" as ProposalType,
      title: "Hourly",
      subtitle: "For time-based services",
      icon: Clock,
    },
  ];

  const handleGenerate = () => {
    setIsGenerating(true);

    setTimeout(() => {
      const company = initialOpportunity?.company || "Acme Inc.";
      const role = initialOpportunity?.role || "Website Redesign";
      const budget = initialOpportunity?.budget || "$10,000 – $15,000";

      const newProp = generateNewProposal({
        company,
        role,
        budget,
        value: 12000,
        proposalType: selectedType,
        requirements: [
          "Modern, fast, and responsive website with CMS integration.",
          "Need SEO optimization and modern UI/UX design.",
        ],
        jobDescription:
          "We're looking for a complete website redesign to improve our online presence, showcase our services, and generate more leads.",
      });

      setIsGenerating(false);
      onClose();
      router.push(`/proposals/${newProp.id}`);
      toast.success(`Proposal generated successfully for ${company}!`);
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card (Exact match to Screen 5) */}
      <div className="relative w-full max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl transition-all space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Generate Proposal
            </h2>
            <p className="text-xs text-slate-500">
              Choose the type of proposal you want to create. AI will generate a tailored draft based on your selection.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Proposal Type Label */}
        <div className="space-y-3">
          <label className="block text-xs font-semibold text-slate-800">
            Proposal Type
          </label>

          {/* 5 Option Cards in a Row */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {proposalTypes.map((type) => {
              const isSelected = selectedType === type.id;
              const Icon = type.icon;
              return (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setSelectedType(type.id)}
                  className={cn(
                    "flex flex-col justify-between p-4 rounded-2xl text-left transition-all cursor-pointer min-h-[140px]",
                    isSelected
                      ? "border-2 border-[#5B5AF7] bg-[#F7F6FF] shadow-xs"
                      : "border border-slate-200 bg-white hover:border-slate-300 hover:bg-[#FAFBFF]"
                  )}
                >
                  {/* Icon */}
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EEF2FF] text-[#5B5AF7] shadow-2xs mb-4">
                    <Icon className="h-4 w-4" />
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1">
                    <h3 className="text-xs font-bold text-slate-900">
                      {type.title}
                    </h3>
                    <p className="text-[10px] text-slate-400 leading-tight">
                      {type.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Modal Footer Actions (Right-aligned matching screenshot 5) */}
        <div className="flex items-center justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={onClose}
            disabled={isGenerating}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleGenerate}
            disabled={isGenerating}
            className="flex items-center gap-2 rounded-xl bg-[#5B5AF7] hover:bg-[#4847E5] px-5 py-2 text-xs font-semibold text-white shadow-xs transition-all cursor-pointer disabled:opacity-50"
          >
            {isGenerating ? (
              <>
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
                <span>Generating...</span>
              </>
            ) : (
              <span>Generate Proposal</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
