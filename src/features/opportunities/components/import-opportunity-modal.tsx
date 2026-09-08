"use client";

import * as React from "react";
import {
  ArrowLeft,
  X,
  FileText,
  Link2,
  Sparkles,
  Check,
  Lightbulb,
  Shield,
  MapPin,
  Clock,
  ArrowRight,
  Loader2,
  Bookmark,
  ExternalLink,
  Briefcase,
  AlertTriangle,
  TrendingUp,
  Trash2,
  Compass,
  DollarSign,
  Wallet,
} from "lucide-react";
import { CompanyLogo } from "./company-logo";
import { OpportunityItem } from "../types";

interface ImportOpportunityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onImportSuccess?: (opportunity: OpportunityItem) => void;
  onGenerateProposal?: (opportunity: OpportunityItem) => void;
}

export function ImportOpportunityModal({
  isOpen,
  onClose,
  onImportSuccess,
  onGenerateProposal,
}: ImportOpportunityModalProps) {
  const [currentStep, setCurrentStep] = React.useState<1 | 2>(1);
  const [inputType, setInputType] = React.useState<"paste" | "url">("paste");
  const [jobText, setJobText] = React.useState("");
  const [jobUrl, setJobUrl] = React.useState("");
  const [isAnalyzing, setIsAnalyzing] = React.useState(false);

  // Close on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Reset state when closed
  React.useEffect(() => {
    if (!isOpen) {
      setCurrentStep(1);
      setJobText("");
      setJobUrl("");
      setIsAnalyzing(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setCurrentStep(2);
    }, 1100);
  };

  const createOpportunityItem = (): OpportunityItem => {
    return {
      id: `imported-${Date.now()}`,
      company: "Verve Labs",
      role: "Senior Frontend Developer",
      logoType: "vercel",
      logoBg: "bg-black",
      logoColor: "text-white",
      location: "Remote",
      salary: "$70k – $100k",
      jobType: "Full-time",
      postedTime: "2h ago",
      matchScore: 96,
      skills: ["React", "Next.js", "TypeScript", "Remote"],
      isSaved: true,
      source: "Company Websites",
      aboutRole:
        jobText.trim() ||
        "Senior Frontend Developer at Verve Labs. Lead modern frontend architecture using React, Next.js, and TypeScript for high-growth SaaS applications.",
      aiMatch: {
        overall: 96,
        techStack: 100,
        experience: 94,
        budget: 92,
        location: 100,
        roleFit: 96,
      },
      whyMatches: [
        "React (3+ years experience)",
        "Next.js (2+ years experience)",
        "TypeScript (strong match)",
        "SaaS experience (relevant)",
        "Remote work (preferred)",
      ],
      missingSkills: ["GraphQL", "AWS"],
    };
  };

  const handleSaveToPipeline = () => {
    const opp = createOpportunityItem();
    onImportSuccess?.(opp);
    onClose();
  };

  const handleGenerateProposalClick = () => {
    const opp = createOpportunityItem();
    onImportSuccess?.(opp);
    onGenerateProposal?.(opp);
    onClose();
  };

  const handleDiscard = () => {
    setCurrentStep(1);
    setJobText("");
    setJobUrl("");
    onClose();
  };

  const canAnalyze =
    inputType === "paste" ? jobText.trim().length > 0 : jobUrl.trim().length > 0;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/45 backdrop-blur-[2px] transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* ========================================================================= */}
      {/* STEP 1: IMPORT OPPORTUNITY INPUT FORM & PROMO CARD                        */}
      {/* ========================================================================= */}
      {currentStep === 1 && (
        <div className="relative z-10 flex w-full max-w-5xl flex-col overflow-hidden rounded-2xl md:rounded-3xl bg-white shadow-2xl border border-slate-200/80 animate-in zoom-in-95 duration-200 lg:flex-row max-h-[90vh]">
          {/* Left Column: Form & Stepper */}
          <div className="flex flex-1 flex-col overflow-y-auto custom-scrollbar p-6 md:p-8 bg-white lg:max-w-[56%]">
            {/* Top navigation */}
            <div className="flex items-center justify-between pb-5">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Opportunities</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="lg:hidden rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Title and Icon */}
            <div className="flex items-center gap-3.5 pb-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F0EFFF] border border-[#DEDCFF] text-[#5B5AF7] shadow-xs">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                  Import Opportunity
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Paste a job description or URL, and let AI analyze it for you.
                </p>
              </div>
            </div>

            {/* Stepper Indicator */}
            <div className="flex items-center gap-3 pb-6 border-b border-slate-100">
              {/* Step 1 */}
              <div className="flex items-center gap-2.5">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#5B5AF7] text-white text-xs font-bold">
                  1
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-xs font-semibold text-slate-900">
                    Add Job Details
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Paste description or URL
                  </span>
                </div>
              </div>

              {/* Stepper Connector */}
              <div className="mx-2 h-px flex-1 bg-slate-200" />

              {/* Step 2 */}
              <div className="flex items-center gap-2.5">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-slate-300 text-slate-400 text-xs font-medium">
                  2
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-xs font-semibold text-slate-500">
                    Review & Save
                  </span>
                  <span className="text-[11px] text-slate-400">
                    View analysis and add to pipeline
                  </span>
                </div>
              </div>
            </div>

            {/* Step 1 Form Content */}
            <div className="flex flex-col flex-1 pt-6 space-y-5">
              {/* Input Type Selector / Tabs */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-2">
                  Paste Job Description or URL
                </label>
                <div className="grid grid-cols-2 gap-2 rounded-xl border border-slate-200/90 p-1 bg-slate-50/60">
                  <button
                    type="button"
                    onClick={() => setInputType("paste")}
                    className={`flex items-center justify-center gap-2 rounded-lg py-2 text-xs font-semibold transition-all cursor-pointer ${
                      inputType === "paste"
                        ? "bg-white text-[#5B5AF7] border border-[#5B5AF7]/30 shadow-xs"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    <FileText className="h-4 w-4" />
                    <span>Paste Job Description</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setInputType("url")}
                    className={`flex items-center justify-center gap-2 rounded-lg py-2 text-xs font-semibold transition-all cursor-pointer ${
                      inputType === "url"
                        ? "bg-white text-[#5B5AF7] border border-[#5B5AF7]/30 shadow-xs"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    <Link2 className="h-4 w-4" />
                    <span>Import URL</span>
                  </button>
                </div>
              </div>

              {/* Textarea or URL input */}
              {inputType === "paste" ? (
                <div className="relative flex flex-col">
                  <textarea
                    value={jobText}
                    onChange={(e) => setJobText(e.target.value.slice(0, 10000))}
                    placeholder="Paste the complete job description here... (e.g. from LinkedIn, Indeed, company website, etc.)"
                    rows={6}
                    className="w-full rounded-xl border border-slate-200 p-3.5 text-xs text-slate-800 placeholder:text-slate-400 focus:border-[#5B5AF7] focus:outline-none focus:ring-1.5 focus:ring-[#5B5AF7]/20 transition-all resize-none shadow-2xs leading-relaxed"
                  />
                  <div className="mt-1 flex justify-end">
                    <span className="text-[11px] font-medium text-slate-400">
                      {jobText.length}/10000
                    </span>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col space-y-2">
                  <div className="relative flex items-center">
                    <Link2 className="absolute left-3.5 h-4 w-4 text-slate-400" />
                    <input
                      type="url"
                      value={jobUrl}
                      onChange={(e) => setJobUrl(e.target.value)}
                      placeholder="https://www.linkedin.com/jobs/view/... or any job posting URL"
                      className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 text-xs text-slate-800 placeholder:text-slate-400 focus:border-[#5B5AF7] focus:outline-none focus:ring-1.5 focus:ring-[#5B5AF7]/20 transition-all shadow-2xs"
                    />
                  </div>
                  <span className="text-[11px] text-slate-400">
                    Supports job listings from LinkedIn, Indeed, Glassdoor, and direct company career pages.
                  </span>
                </div>
              )}

              {/* Tips for better results callout */}
              <div className="rounded-xl border border-blue-100 bg-[#F4F7FF] p-3.5">
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="h-4 w-4 text-[#5B5AF7]" />
                  <span className="text-xs font-semibold text-slate-800">
                    Tips for better results
                  </span>
                </div>
                <ul className="space-y-1.5 pl-0.5">
                  <li className="flex items-start gap-2 text-[11px] text-slate-600">
                    <Check className="h-3.5 w-3.5 text-[#5B5AF7] shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>
                      Paste the <strong className="font-semibold text-slate-800">full job description</strong> (not just the title)
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-[11px] text-slate-600">
                    <Check className="h-3.5 w-3.5 text-[#5B5AF7] shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>
                      Include <strong className="font-semibold text-slate-800">company name and location</strong> if available
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-[11px] text-slate-600">
                    <Check className="h-3.5 w-3.5 text-[#5B5AF7] shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>
                      You can also paste a <strong className="font-semibold text-slate-800">job URL</strong> (LinkedIn, Indeed, etc.)
                    </span>
                  </li>
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleAnalyze}
                  disabled={!canAnalyze || isAnalyzing}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#5B5AF7] hover:bg-[#4847E5] disabled:opacity-50 disabled:cursor-not-allowed text-white py-3 px-4 text-xs font-semibold shadow-xs transition-all cursor-pointer"
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Analyzing Job with AI...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4 text-white/90" />
                      <span>Analyze Opportunity</span>
                      <ArrowRight className="h-4 w-4 text-white/90 ml-0.5" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: AI Value Proposition & Live Preview Card */}
          <div className="relative flex flex-1 flex-col justify-between overflow-y-auto custom-scrollbar bg-gradient-to-br from-[#F8FAFF] via-[#F4F7FF] to-[#ECF2FF] p-6 md:p-8 border-t lg:border-t-0 lg:border-l border-slate-150">
            {/* Top Close Button (Desktop) */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="hidden lg:flex absolute top-6 right-6 h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:text-slate-700 hover:bg-white/60 transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Heading and badge */}
            <div className="pr-8">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-purple-100/70 border border-purple-200/50 px-2.5 py-0.5 text-[11px] font-semibold text-[#5B5AF7]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>AI Powered</span>
              </div>

              <h3 className="mt-3 text-lg md:text-xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Turn any job listing into a qualified opportunity — in seconds.
              </h3>

              <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                Our AI will analyze the job, extract key details, calculate your
                match score, and help you take the next step.
              </p>
            </div>

            {/* AI Result Card Mockup with Sparkles around it */}
            <div className="relative my-6">
              {/* Decorative sparkles */}
              <div className="absolute -top-3 -right-1 text-purple-300 pointer-events-none select-none">
                ✦
              </div>
              <div className="absolute top-1/2 -left-3 text-indigo-300 text-xs pointer-events-none select-none">
                ✦
              </div>
              <div className="absolute -bottom-2 -right-2 text-indigo-300 text-sm pointer-events-none select-none">
                ✦
              </div>

              {/* Inner Floating Preview Card */}
              <div className="relative rounded-2xl bg-white p-4.5 shadow-md border border-slate-200/70 space-y-3.5">
                {/* Card Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2.5">
                    <CompanyLogo type="vercel" size="sm" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 leading-tight">
                        Frontend Developer
                      </h4>
                      <span className="text-[11px] text-slate-400 font-medium">
                        Vercel
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 border border-emerald-200/50">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>96% Match</span>
                  </div>
                </div>

                {/* Meta tags */}
                <div className="flex items-center gap-3 text-[10px] text-slate-500">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-slate-400" />
                    Remote
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    $70k – $100k
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3 text-slate-400" />
                    Full-time
                  </span>
                </div>

                {/* 3 Metric Score Gauges */}
                <div className="grid grid-cols-3 gap-2">
                  {/* 1: Match Score Circular Gauge */}
                  <div className="flex flex-col items-center justify-center rounded-xl bg-[#F8FAFD] border border-slate-100 p-2.5">
                    <div className="relative flex h-10 w-10 items-center justify-center">
                      <svg className="h-10 w-10 -rotate-90 transform" viewBox="0 0 36 36">
                        <path
                          className="text-slate-200"
                          strokeWidth="3.2"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                          className="text-[#0D9488]"
                          strokeDasharray="96, 100"
                          strokeWidth="3.2"
                          strokeLinecap="round"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                      <span className="absolute text-[11px] font-extrabold text-slate-900">
                        96%
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-medium mt-1">
                      Match Score
                    </span>
                  </div>

                  {/* 2: Win Probability */}
                  <div className="flex flex-col items-center justify-center rounded-xl bg-[#F8FAFD] border border-slate-100 p-2.5">
                    <div className="flex h-10 items-center justify-center">
                      <span className="text-base font-extrabold text-slate-900">
                        78%
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-medium mt-1">
                      Win Probability
                    </span>
                  </div>

                  {/* 3: Budget Fit */}
                  <div className="flex flex-col items-center justify-center rounded-xl bg-[#F8FAFD] border border-slate-100 p-2.5">
                    <div className="flex h-10 items-center justify-center">
                      <span className="rounded-md bg-purple-100/70 px-2 py-0.5 text-xs font-bold text-[#5B5AF7]">
                        High
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-medium mt-1">
                      Budget Fit
                    </span>
                  </div>
                </div>

                {/* Why It Matches */}
                <div>
                  <span className="block text-[11px] font-bold text-slate-800 mb-1.5">
                    Why It Matches
                  </span>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-slate-700">
                    <span className="inline-flex items-center gap-1">
                      <Check className="h-3 w-3 text-emerald-600 stroke-[3]" />
                      React
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Check className="h-3 w-3 text-emerald-600 stroke-[3]" />
                      Next.js
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Check className="h-3 w-3 text-emerald-600 stroke-[3]" />
                      TypeScript
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Check className="h-3 w-3 text-emerald-600 stroke-[3]" />
                      Remote
                    </span>
                  </div>
                </div>

                {/* Missing Skills */}
                <div>
                  <span className="block text-[11px] font-bold text-slate-800 mb-1.5">
                    Missing Skills (Optional)
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600">
                      GraphQL
                    </span>
                    <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600">
                      AWS
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Callout Banner */}
            <div className="flex items-center gap-2.5 rounded-xl border border-blue-100/80 bg-blue-50/50 p-3">
              <Shield className="h-4 w-4 shrink-0 text-[#5B5AF7]" />
              <span className="text-[11px] text-slate-600 leading-snug">
                Same powerful analysis as our AI crawler — now for jobs you find
                yourself.
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* STEP 2: FULL OPPORTUNITY ANALYSIS POPUP (SCREENSHOT 2)                    */}
      {/* ========================================================================= */}
      {currentStep === 2 && (
        <div className="relative z-10 flex w-full max-w-4xl flex-col overflow-hidden rounded-2xl md:rounded-3xl bg-white shadow-2xl border border-slate-200/80 animate-in zoom-in-95 duration-200 max-h-[92vh]">
          {/* Top Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200/80 bg-white">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50/90 border border-purple-100 text-[#5B5AF7]">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900 tracking-tight">
                  Opportunity Analysis
                </h2>
                <p className="text-xs text-slate-500">
                  AI-powered analysis of the job you imported.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 border border-indigo-100/90 px-3 py-1 text-xs font-semibold text-[#5B5AF7]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Imported Manually</span>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="rounded-lg p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Scrollable Body */}
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {/* Job Summary Banner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 py-4.5 border-b border-slate-100 bg-white">
              <div className="flex items-start gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black text-white shadow-xs mt-0.5">
                  <svg className="h-[45%] w-[45%]" viewBox="0 0 115 100" fill="currentColor">
                    <path d="M57.5 0L115 100H0L57.5 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Senior Frontend Developer
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1 font-semibold text-slate-700">
                      Verve Labs
                      <ExternalLink className="h-3 w-3 text-slate-400" />
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-slate-400" />
                      Remote
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="inline-flex items-center gap-1">
                      <DollarSign className="h-3 w-3 text-slate-400" />
                      $70k – $100k
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="inline-flex items-center gap-1">
                      <Briefcase className="h-3 w-3 text-slate-400" />
                      Full-time
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start sm:items-end shrink-0">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600 border border-emerald-200/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span>96% Match</span>
                </div>
                <span className="text-[11px] text-slate-400 mt-1">
                  Analyzed 2m ago
                </span>
              </div>
            </div>

            {/* 4 Score Metric Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 px-6 py-4 border-b border-slate-100 bg-white">
              {/* Metric 1: Match Score */}
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200/80 p-3 bg-white shadow-2xs">
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center">
                  <svg className="h-12 w-12 -rotate-90 transform" viewBox="0 0 36 36">
                    <path
                      className="text-slate-100"
                      strokeWidth="3.2"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-[#0D9488]"
                      strokeDasharray="96, 100"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <span className="absolute text-xs font-extrabold text-slate-900">
                    96%
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-900">
                    Match Score
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-600">
                    Excellent Fit
                  </span>
                </div>
              </div>

              {/* Metric 2: Win Probability */}
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200/80 p-3 bg-white shadow-2xs">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-extrabold text-slate-900 leading-tight">
                    82%
                  </span>
                  <span className="text-[10px] text-slate-500">
                    Win Probability
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-600">
                    High
                  </span>
                </div>
              </div>

              {/* Metric 3: Budget Fit */}
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200/80 p-3 bg-white shadow-2xs">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                  <Compass className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-extrabold text-slate-900 leading-tight">
                    High
                  </span>
                  <span className="text-[10px] text-slate-500">
                    Budget Fit
                  </span>
                  <span className="text-[11px] font-semibold text-slate-600">
                    $70k – $100k
                  </span>
                </div>
              </div>

              {/* Metric 4: Overall Fit */}
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200/80 p-3 bg-white shadow-2xs">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-[#5B5AF7]">
                  <Shield className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-extrabold text-slate-900 leading-tight">
                    Strong
                  </span>
                  <span className="text-[10px] text-slate-500">
                    Overall Fit
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-600">
                    Recommended
                  </span>
                </div>
              </div>
            </div>

            {/* Main Content 2-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 p-6 bg-white">
              {/* Left Column: Why It Matches, Missing Skills, Budget Analysis */}
              <div className="md:col-span-7 space-y-4">
                {/* 1: Why It Matches */}
                <div className="rounded-2xl border border-slate-200/80 p-4.5 bg-white shadow-2xs space-y-3">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                      <Check className="h-4 w-4 stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">
                        Why It Matches
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        Key skills and experience that align with your profile.
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2 pt-1">
                    {[
                      "React (3+ years experience)",
                      "Next.js (2+ years experience)",
                      "TypeScript (strong match)",
                      "SaaS experience (relevant)",
                      "Remote work (preferred)",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-xs text-slate-700">
                        <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0 stroke-[3]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 2: Missing Skills (Optional) */}
                <div className="rounded-2xl border border-slate-200/80 p-4.5 bg-white shadow-2xs space-y-3">
                  <div className="flex items-center gap-2.5">
                    <AlertTriangle className="h-4 w-4 text-amber-500" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">
                        Missing Skills (Optional)
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        Skills to consider improving.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <span className="rounded-lg bg-rose-50 border border-rose-100 px-3 py-1 text-xs font-medium text-rose-600">
                      GraphQL
                    </span>
                    <span className="rounded-lg bg-rose-50 border border-rose-100 px-3 py-1 text-xs font-medium text-rose-600">
                      AWS
                    </span>
                  </div>
                </div>

                {/* 3: Budget Analysis */}
                <div className="rounded-2xl border border-slate-200/80 p-4.5 bg-white shadow-2xs space-y-3">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <Wallet className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">
                        Budget Analysis
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        How the job budget aligns with your expectations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/70 p-3.5">
                    <div className="flex items-center gap-4">
                      <div>
                        <span className="block text-[10px] text-slate-400">
                          Expected Rate
                        </span>
                        <span className="text-sm font-bold text-slate-900">
                          $50/hr
                        </span>
                        <span className="block text-[10px] text-slate-400">
                          (based on your profile)
                        </span>
                      </div>

                      <span className="text-sm font-bold text-slate-300">+</span>

                      <div>
                        <span className="block text-[10px] text-slate-400">
                          Job Budget
                        </span>
                        <span className="text-sm font-bold text-slate-900">
                          $60k – $100k
                        </span>
                        <span className="block text-[10px] text-slate-400">
                          (~$60-75/hr)
                        </span>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600 border border-emerald-200/50">
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                      Excellent Fit
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: AI Recommendation & Job Details */}
              <div className="md:col-span-5 space-y-4">
                {/* 1: AI Recommendation Card */}
                <div className="rounded-2xl border border-[#DCE4FA] bg-[#F5F8FF] p-4.5 space-y-3">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#5B5AF7]">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>AI Recommendation</span>
                  </div>

                  <div>
                    <h5 className="text-xs font-bold text-slate-900">
                      Strong opportunity!
                    </h5>
                    <p className="text-[11px] text-slate-600 leading-relaxed mt-1">
                      This role matches 96% with your profile. The budget aligns
                      with your expected rate, and your portfolio contains
                      similar SaaS projects. We recommend applying within 24
                      hours to increase your chances.
                    </p>
                  </div>

                  <ul className="space-y-1.5 pt-1 border-t border-indigo-100/60">
                    {[
                      "High budget fit",
                      "Your tech stack matches well",
                      "Portfolio aligns with requirements",
                      "Good long-term potential",
                    ].map((rec) => (
                      <li key={rec} className="flex items-center gap-2 text-[11px] text-slate-700 font-medium">
                        <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0 stroke-[3]" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 2: Job Details Key-Value Card */}
                <div className="rounded-2xl border border-slate-200/80 p-4.5 bg-white shadow-2xs space-y-3">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-slate-500" />
                    <h4 className="text-xs font-bold text-slate-900">
                      Job Details
                    </h4>
                  </div>

                  <div className="divide-y divide-slate-100 text-xs">
                    <div className="flex items-center justify-between py-2">
                      <span className="text-slate-400">Position</span>
                      <span className="font-semibold text-slate-900">
                        Senior Frontend Developer
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-2">
                      <span className="text-slate-400">Company</span>
                      <span className="inline-flex items-center gap-1 font-semibold text-slate-800">
                        Verve Labs
                        <ExternalLink className="h-3 w-3 text-slate-400" />
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-2">
                      <span className="text-slate-400">Location</span>
                      <span className="font-semibold text-slate-800">Remote</span>
                    </div>

                    <div className="flex items-center justify-between py-2">
                      <span className="text-slate-400">Salary Range</span>
                      <span className="font-semibold text-slate-800">
                        $70k – $100k
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-2">
                      <span className="text-slate-400">Employment Type</span>
                      <span className="font-semibold text-slate-800">Full-time</span>
                    </div>

                    <div className="flex items-center justify-between py-2">
                      <span className="text-slate-400">Posted</span>
                      <span className="font-semibold text-slate-800">2h ago</span>
                    </div>

                    <div className="flex items-center justify-between py-2">
                      <span className="text-slate-400">Source</span>
                      <span className="inline-flex items-center gap-1 font-semibold text-[#5B5AF7]">
                        <Compass className="h-3.5 w-3.5" />
                        Manual Import
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200/80 bg-white">
            {/* Discard Button */}
            <button
              type="button"
              onClick={handleDiscard}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200/90 bg-white px-4 py-2 text-xs font-semibold text-slate-600 shadow-2xs hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <Trash2 className="h-3.5 w-3.5 text-slate-400" />
              <span>Discard</span>
            </button>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleSaveToPipeline}
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200/90 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-2xs hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <Bookmark className="h-3.5 w-3.5 text-slate-500" />
                <span>Save to Pipeline</span>
              </button>

              <button
                type="button"
                onClick={handleGenerateProposalClick}
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#5B5AF7] hover:bg-[#4847E5] px-4 py-2 text-xs font-semibold text-white shadow-xs transition-colors cursor-pointer"
              >
                <Sparkles className="h-3.5 w-3.5 text-white/90" />
                <span>Generate Proposal</span>
                <ArrowRight className="h-3.5 w-3.5 text-white/90" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
