"use client";

import * as React from "react";
import {
  Search,
  Bell,
  FileText,
  Layers,
  MessageSquare,
  Tag,
  HelpCircle,
  Briefcase,
  ChevronRight,
  Copy,
  Check,
  X,
  Plus,
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { PageHeader } from "@/components/dashboard";

interface LibraryCategoryCard {
  id: string;
  title: string;
  countText: string;
  icon: React.ComponentType<{ className?: string }>;
  categoryKey: string;
  snippets: Array<{ title: string; text: string }>;
}

export default function ProposalLibraryPage() {
  const [activeFilter, setActiveFilter] = React.useState<string>("All");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState<LibraryCategoryCard | null>(null);
  const [copiedId, setCopiedId] = React.useState<string | null>(null);

  const filters = [
    "All",
    "Introductions",
    "Case Studies",
    "Testimonials",
    "Pricing Packages",
    "FAQs",
    "Service Descriptions",
  ];

  const categories: LibraryCategoryCard[] = [
    {
      id: "cat-1",
      title: "Winning Introductions",
      countText: "12 items",
      categoryKey: "Introductions",
      icon: FileText,
      snippets: [
        {
          title: "High-Growth B2B SaaS Hook",
          text: "We specialize in engineering modern, high-performing web platforms that convert visitors into recurring pipeline and fuel sustainable revenue growth.",
        },
        {
          title: "Direct & Concise Executive Opener",
          text: "Thank you for considering our team. We've reviewed your technical requirements and assembled a lean, milestone-backed delivery schedule.",
        },
      ],
    },
    {
      id: "cat-2",
      title: "Case Studies",
      countText: "8 items",
      categoryKey: "Case Studies",
      icon: Layers,
      snippets: [
        {
          title: "FinTech Platform 34% Conversion Uplift",
          text: "Re-architected core user onboarding on Next.js 16, decreasing page load by 68% and raising demo bookings by 34% in 90 days.",
        },
        {
          title: "Healthcare SaaS HIPAA Portal",
          text: "Delivered enterprise patient dashboard under 6 weeks with zero security findings and 99.99% uptime.",
        },
      ],
    },
    {
      id: "cat-3",
      title: "Testimonials",
      countText: "10 items",
      categoryKey: "Testimonials",
      icon: MessageSquare,
      snippets: [
        {
          title: "Acme Inc. VP of Product",
          text: "“Winflare delivered our web app 10 days ahead of schedule with immaculate code quality and daily async visibility.”",
        },
        {
          title: "Verve Labs Founder",
          text: "“The best development experience we've had. Fast, responsive, and deeply invested in our commercial outcomes.”",
        },
      ],
    },
    {
      id: "cat-4",
      title: "Pricing Packages",
      countText: "6 items",
      categoryKey: "Pricing Packages",
      icon: Tag,
      snippets: [
        {
          title: "3-Stage Deliverable Milestone Schedule",
          text: "30% Kickoff & UX Architecture • 40% Core Frontend & CMS • 30% QA & Production Cutover with 30-Day Warranty.",
        },
        {
          title: "Dedicated Sprint Retainer",
          text: "$6,000 / bi-weekly sprint including full stack engineering, PR reviews, and dedicated Slack channel.",
        },
      ],
    },
    {
      id: "cat-5",
      title: "FAQs",
      countText: "14 items",
      categoryKey: "FAQs",
      icon: HelpCircle,
      snippets: [
        {
          title: "How do you handle scope changes?",
          text: "Any new requirement is scoped into an isolated add-on milestone with clear hours and cost before work begins.",
        },
        {
          title: "What happens after project handoff?",
          text: "All proposals include a complimentary 30-day warranty guaranteeing instant bug resolution and system stability.",
        },
      ],
    },
    {
      id: "cat-6",
      title: "Service Descriptions",
      countText: "9 items",
      categoryKey: "Service Descriptions",
      icon: Briefcase,
      snippets: [
        {
          title: "Headless CMS Architecture",
          text: "Custom Sanity / Strapi CMS integration allowing non-technical marketing staff to create landing pages effortlessly.",
        },
        {
          title: "Core Web Vitals Optimization",
          text: "End-to-end audits ensuring 95+ Google PageSpeed scores, sub-second LCP, and flawless Core Web Vitals.",
        },
      ],
    },
  ];

  const filteredCategories = React.useMemo(() => {
    return categories.filter((cat) => {
      const matchesFilter =
        activeFilter === "All" ||
        cat.categoryKey.toLowerCase() === activeFilter.toLowerCase();
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        cat.title.toLowerCase().includes(q) ||
        cat.snippets.some(
          (s) =>
            s.title.toLowerCase().includes(q) ||
            s.text.toLowerCase().includes(q)
        );
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  const handleCopySnippet = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    toast.success("Copied snippet to clipboard!");
    setTimeout(() => setCopiedId(null), 1500);
  };

  return (
    <div className="flex flex-col h-full overflow-hidden bg-[#FAFBFF]">
      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6">
        {/* Universal Page Header */}
        <PageHeader
          title="Proposal Library"
          description="Store successful content and reusable assets"
        />

        {/* Search Input Box */}
        <div className="relative flex items-center w-full">
          <Search className="absolute left-3.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search library..."
            className="h-10 w-full rounded-xl border border-slate-200/90 bg-white pl-10 pr-4 text-xs text-slate-800 placeholder:text-slate-400 shadow-2xs focus:border-[#5B5AF7] focus:outline-none focus:ring-1 focus:ring-[#5B5AF7]"
          />
        </div>

        {/* Filter Pills matching screenshot */}
        <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar pb-1">
          {filters.map((f) => {
            const isActive = activeFilter === f;
            return (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-xs font-medium whitespace-nowrap transition-all cursor-pointer select-none",
                  isActive
                    ? "bg-[#5B5AF7] text-white shadow-2xs font-semibold"
                    : "bg-white border border-slate-200/80 text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                )}
              >
                {f}
              </button>
            );
          })}
        </div>

        {/* 6 Grid Cards (3 columns x 2 rows matching screenshot 4) */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filteredCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                onClick={() => setSelectedCategory(cat)}
                className="flex items-center justify-between rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs hover:border-[#5B5AF7]/40 hover:shadow-xs transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  {/* Purple squircle icon */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EEF2FF] text-[#5B5AF7] group-hover:scale-105 transition-transform shadow-2xs">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Title & Count */}
                  <div className="flex flex-col">
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#5B5AF7] transition-colors">
                      {cat.title}
                    </h3>
                    <span className="text-xs text-slate-400 mt-0.5">
                      {cat.countText}
                    </span>
                  </div>
                </div>

                {/* Right Arrow */}
                <div className="p-1 rounded-lg text-slate-400 group-hover:text-[#5B5AF7] group-hover:translate-x-0.5 transition-all">
                  <ChevronRight className="h-4 w-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Snippet Details Modal */}
      {selectedCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 sm:p-6">
          <div
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs"
            onClick={() => setSelectedCategory(null)}
          />
          <div className="relative w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#EEF2FF] text-[#5B5AF7]">
                  <selectedCategory.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    {selectedCategory.title}
                  </h3>
                  <span className="text-xs text-slate-400">
                    {selectedCategory.countText} available to insert
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedCategory(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-3 max-h-[60vh] overflow-y-auto custom-scrollbar pr-1">
              {selectedCategory.snippets.map((snip, idx) => {
                const sId = `${selectedCategory.id}-${idx}`;
                const isCopied = copiedId === sId;
                return (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-200/80 bg-[#FAFBFF] p-4 space-y-2 hover:border-[#5B5AF7]/40 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900">
                        {snip.title}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopySnippet(sId, snip.text)}
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#5B5AF7] hover:underline cursor-pointer"
                      >
                        {isCopied ? (
                          <>
                            <Check className="h-3 w-3" />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3 w-3" />
                            <span>Copy Snippet</span>
                          </>
                        )}
                      </button>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {snip.text}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-end pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setSelectedCategory(null)}
                className="rounded-xl bg-[#5B5AF7] px-5 py-2 text-xs font-bold text-white hover:bg-[#4847E5] cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
