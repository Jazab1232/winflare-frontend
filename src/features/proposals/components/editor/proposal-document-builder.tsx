"use client";

import * as React from "react";
import {
  Bold,
  Italic,
  Underline,
  Link2,
  List,
  ListOrdered,
  AlignLeft,
  AlignCenter,
  Image as ImageIcon,
  MoreHorizontal,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { ProposalCardItem, ProposalPricingItem } from "../../types";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface ProposalDocumentBuilderProps {
  proposal: ProposalCardItem;
  onUpdateSection: (sectionId: string, content: string) => void;
  onUpdatePricingItem?: (items: ProposalPricingItem[]) => void;
  onAiOptimizeSection?: (sectionId: string) => void;
}

export function ProposalDocumentBuilder({
  proposal,
  onUpdateSection,
}: ProposalDocumentBuilderProps) {
  const [activeTab, setActiveTab] = React.useState<string>("sec-1");
  const [selectedFormat, setSelectedFormat] = React.useState<string>("Normal");

  // Sections list with 7 numbered tabs matching screenshot
  const sections = React.useMemo(() => {
    if (proposal.sections && proposal.sections.length >= 7) {
      return proposal.sections;
    }
    return [
      {
        id: "sec-1",
        title: "1. Introduction",
        content:
          "Hello Sarah,\n\nThank you for considering us for your website redesign project. We're excited about the opportunity to work with Acme Inc. and help you build a modern, high-performing website that drives real business results.\n\nAt Winflare, we specialize in creating beautiful, functional websites that not only look great but also generate leads and grow your business. Our team has helped multiple companies like yours transform their online presence and achieve measurable results.\n\nWe've carefully reviewed your requirements and put together a tailored proposal that addresses your goals, timeline, and budget. We're confident that our solution will exceed your expectations and deliver long-term value.\n\nWe look forward to the opportunity to discuss this further.\n\nBest regards,\nThe Winflare Team",
      },
      {
        id: "sec-2",
        title: "2. Problem",
        content:
          "Acme Inc.'s current website is experiencing outdated navigation flows, slow page loads on mobile devices, and a lack of clear conversion funnels for inbound leads. These friction points prevent visitors from understanding your core offerings and booking demos.",
      },
      {
        id: "sec-3",
        title: "3. Solution",
        content:
          "We will engineer a high-performance Next.js web platform tailored specifically to Acme Inc.'s brand guidelines:\n• Sleek, modern UI/UX designed in Figma with high conversion patterns\n• Modular headless CMS integration allowing your marketing team to publish landing pages in minutes\n• Sub-second Core Web Vitals optimization ensuring 95+ PageSpeed scores\n• Built-in analytics and lead-capture pipelines",
      },
      {
        id: "sec-4",
        title: "4. Timeline",
        content:
          "Week 1: UX Wireframing, Brand Design Tokens & Client Alignment\nWeek 2: High-Fidelity UI Prototyping & CMS Architecture\nWeek 3: Next.js Frontend Development & Content Migration\nWeek 4: Performance Audits, Cross-Browser QA & Production Launch",
      },
      {
        id: "sec-5",
        title: "5. Deliverables",
        content:
          "1. Production-ready Next.js web application deployed on Vercel\n2. Complete Figma design system and component library\n3. Headless CMS dashboard with video training documentation\n4. 30-day post-launch warranty with dedicated priority support",
      },
      {
        id: "sec-6",
        title: "6. Pricing",
        content:
          "Total Investment: $12,000 USD\n\nMilestone Breakdown:\n• Milestone 1 (30% - $3,600): Design Sign-off & Architecture Scaffold\n• Milestone 2 (40% - $4,800): Complete Frontend Build & CMS Integration\n• Milestone 3 (30% - $3,600): QA Testing, SEO Verification & Domain Cutover",
      },
      {
        id: "sec-7",
        title: "7. Why Me",
        content:
          "• 8+ years delivering enterprise-grade web applications with measurable ROI\n• Proven track record of boosting conversion rates by an average of 34%\n• Transparent, proactive communication with daily async updates and dedicated staging links",
      },
    ];
  }, [proposal.sections]);

  const activeSection = sections.find((s) => s.id === activeTab) || sections[0];

  return (
    <main className="flex-1 min-w-0 h-full flex flex-col rounded-2xl border border-slate-200/80 bg-white shadow-2xs overflow-hidden">
      {/* 1. Horizontal Section Tabs Bar */}
      <div className="flex items-center gap-6 overflow-x-auto custom-scrollbar border-b border-slate-100 px-6 pt-3 select-none bg-white shrink-0">
        {sections.map((sec) => {
          const isActive = activeTab === sec.id;
          return (
            <button
              key={sec.id}
              type="button"
              onClick={() => setActiveTab(sec.id)}
              className={cn(
                "pb-2.5 px-0.5 text-xs font-medium whitespace-nowrap transition-all border-b-2 cursor-pointer",
                isActive
                  ? "text-[#5B5AF7] border-[#5B5AF7] font-semibold"
                  : "text-slate-500 border-transparent hover:text-slate-800"
              )}
            >
              {sec.title}
            </button>
          );
        })}
        <button
          type="button"
          onClick={() => toast.info("More sections")}
          className="pb-2.5 px-1 text-slate-400 hover:text-slate-600 transition-colors"
          title="More sections"
        >
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>

      {/* 2. Rich Text Formatting Toolbar */}
      <div className="flex items-center gap-1 px-6 py-2 border-b border-slate-100 bg-white select-none shrink-0 flex-wrap text-slate-600">
        {/* Format selector */}
        <div className="relative">
          <button
            type="button"
            className="flex items-center gap-1.5 h-7 px-2.5 rounded-lg border border-slate-200/90 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <span>{selectedFormat}</span>
            <ChevronDown className="h-3 w-3 text-slate-400" />
          </button>
        </div>

        <div className="h-4 w-px bg-slate-200 mx-1.5" />

        {/* Basic formatting buttons */}
        <button
          type="button"
          className="h-7 w-7 flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer font-bold text-xs"
          title="Bold"
        >
          <Bold className="h-3.5 w-3.5" />
        </button>

        <button
          type="button"
          className="h-7 w-7 flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
          title="Italic"
        >
          <Italic className="h-3.5 w-3.5" />
        </button>

        <button
          type="button"
          className="h-7 w-7 flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
          title="Underline"
        >
          <Underline className="h-3.5 w-3.5" />
        </button>

        <button
          type="button"
          className="h-7 w-7 flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
          title="Insert Link"
        >
          <Link2 className="h-3.5 w-3.5" />
        </button>

        <div className="h-4 w-px bg-slate-200 mx-1.5" />

        {/* Lists & Alignment */}
        <button
          type="button"
          className="h-7 w-7 flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
          title="Bulleted List"
        >
          <List className="h-3.5 w-3.5" />
        </button>

        <button
          type="button"
          className="h-7 w-7 flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
          title="Numbered List"
        >
          <ListOrdered className="h-3.5 w-3.5" />
        </button>

        <button
          type="button"
          className="h-7 w-7 flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
          title="Align Left"
        >
          <AlignLeft className="h-3.5 w-3.5" />
        </button>

        <button
          type="button"
          className="h-7 w-7 flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
          title="Align Center"
        >
          <AlignCenter className="h-3.5 w-3.5" />
        </button>

        <button
          type="button"
          onClick={() => toast.info("Image upload dialog")}
          className="h-7 w-7 flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
          title="Insert Image"
        >
          <ImageIcon className="h-3.5 w-3.5" />
        </button>

        <button
          type="button"
          className="h-7 w-7 flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
          title="More options"
        >
          <MoreHorizontal className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* 3. Document Canvas with MAXIMUM WIDTH */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-6 sm:p-8 lg:p-10 w-full">
        <div className="w-full max-w-5xl mx-auto flex flex-col space-y-6">
          {/* Document Header Logo & Tagline */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#5B5AF7] text-white shadow-2xs font-black text-xs">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                  <path d="m3 7 4 10 5-8 5 8 4-10" />
                </svg>
              </div>
              <span className="text-sm font-bold text-slate-900 tracking-tight">
                Winflare
              </span>
            </div>
            <span className="text-[11px] text-slate-400 font-normal">
              Better Proposals. Bigger Opportunities.
            </span>
          </div>

          {/* Active Section Title */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              {activeSection.title}
            </h2>
          </div>

          {/* Editable Document Body Text */}
          <div className="space-y-4">
            <textarea
              rows={Math.max(8, activeSection.content.split("\n").length + 2)}
              value={activeSection.content}
              onChange={(e) => onUpdateSection(activeSection.id, e.target.value)}
              placeholder="Write section content..."
              className="w-full resize-y rounded-xl border border-transparent hover:border-slate-200 focus:border-[#5B5AF7] p-2 text-xs sm:text-sm text-slate-700 leading-relaxed focus:bg-white focus:outline-none transition-all"
            />
          </div>

          {/* Featured Visual Media Banner Card (Pixel-Perfect match to screenshot) */}
          <div className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm relative mt-4 bg-[#11131F] flex flex-col md:flex-row">
            {/* Left Dark Content Area */}
            <div className="p-6 sm:p-8 md:w-1/2 flex flex-col justify-center space-y-4 text-white z-10">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#5B5AF7] text-white font-black text-xs">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                    <path d="m3 7 4 10 5-8 5 8 4-10" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-white tracking-tight">
                  Winflare
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                Great websites
                <br />
                create great
                <br />
                opportunities.
              </h3>

              <div className="space-y-1 text-xs text-slate-300 font-normal">
                <p>Modern design. Better performance.</p>
                <p>Real business growth.</p>
              </div>
            </div>

            {/* Right Laptop Mockup Graphic */}
            <div className="md:w-1/2 relative min-h-[220px] md:min-h-[260px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200"
                alt="Modern laptop desk website mockup"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              {/* Subtle vignette gradient blend */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#11131F] via-transparent to-transparent md:block hidden" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
