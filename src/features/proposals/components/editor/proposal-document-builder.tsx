"use client";

import * as React from "react";
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
  ListTodo,
  Heading1,
  Heading2,
  Heading3,
  Link as LinkIcon,
  Image as ImageIcon,
  Table as TableIcon,
  Sparkles,
  MoreHorizontal,
  Check,
  Plus,
  Trash2,
  Copy,
  Wand2,
} from "lucide-react";
import { ProposalCardItem, ProposalSection, ProposalPricingItem } from "../../types";
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
  onUpdatePricingItem,
  onAiOptimizeSection,
}: ProposalDocumentBuilderProps) {
  const [activeTab, setActiveTab] = React.useState<string>("sec-intro");
  const [activeFormat, setActiveFormat] = React.useState<string>("Normal text");
  const [pricingItems, setPricingItems] = React.useState<ProposalPricingItem[]>(
    proposal.pricingItems || [
      { id: "p1", description: "Design System & Figma Architecture", quantity: 1, rate: 4500 },
      { id: "p2", description: "Next.js Frontend & CMS Integration", quantity: 1, rate: 8500 },
      { id: "p3", description: "SEO, Performance Audits & Domain Launch", quantity: 1, rate: 3500 },
    ]
  );

  // Default sections mapped to the screenshot format
  const sectionsList = React.useMemo(() => {
    if (proposal.sections && proposal.sections.length >= 6) {
      return proposal.sections;
    }
    return [
      {
        id: "sec-intro",
        title: "Introduction",
        content:
          "Hi John,\n\nThank you for the opportunity to propose our services for Acme Corporation's website redesign. We're excited about the potential to help you build a modern, high-performing website that not only looks great but also drives measurable business results.\n\nBased on our conversation and the details you shared, we've put together a tailored proposal that aligns with your goals, timeline, and budget.",
      },
      {
        id: "sec-needs",
        title: "Understanding Your Needs",
        content:
          "Acme Corporation is looking to modernize its website to better showcase its product, improve user engagement, and increase trial signups. The new site should be fast, responsive, and optimized for search engines, with a clean and modern design that reflects your brand's innovative approach.",
      },
      {
        id: "sec-solution",
        title: "Proposed Solution",
        content:
          "We propose a modern, scalable website built with Next.js, featuring:\n\n✓ Custom, modern design aligned with your brand\n✓ CMS integration for easy content management\n✓ Performance optimization for speed and SEO\n✓ Fully responsive across all devices\n✓ Analytics and conversion funnel tracking",
      },
      {
        id: "sec-timeline",
        title: "Timeline & Milestones",
        content:
          "Phase 1 (Weeks 1–2): Discovery, Wireframes & Design System\nPhase 2 (Weeks 3–4): High-Fidelity UI & Next.js Scaffold\nPhase 3 (Weeks 5–6): CMS Integration & Content Migration\nPhase 4 (Weeks 7–8): QA Testing, SEO Audits & Production Cutover",
      },
      {
        id: "sec-pricing",
        title: "Investment & Pricing",
        content:
          "Total Estimated Investment: $15,000 – $20,000 USD\n\nPayment Schedule:\n• 30% upon project kickoff and architecture approval\n• 40% upon completion of core UI components and CMS setup\n• 30% upon final launch, testing, and 30-day warranty",
      },
      {
        id: "sec-whyme",
        title: "Why Winflare",
        content:
          "• Shipped 35+ high-growth B2B SaaS web applications with proven conversion uplifts.\n• 100% on-time delivery record with sub-second PageSpeed optimization.\n• Seamless daily Slack updates and dedicated staging environments for transparent progress.",
      },
      {
        id: "sec-closing",
        title: "Next Steps",
        content:
          "Ready to begin next Monday. Let's schedule a 15-minute kickoff call to review the design tokens and introduce our lead engineers.\n\nBest regards,\nThe Winflare Team",
      },
    ];
  }, [proposal.sections]);

  const handlePricingChange = (
    id: string,
    field: "description" | "quantity" | "rate",
    value: string | number
  ) => {
    const updated = pricingItems.map((item) => {
      if (item.id !== id) return item;
      return {
        ...item,
        [field]: field === "description" ? value : Number(value) || 0,
      };
    });
    setPricingItems(updated);
    onUpdatePricingItem?.(updated);
  };

  const handleAddPricingItem = () => {
    const newItem: ProposalPricingItem = {
      id: "p-" + Date.now(),
      description: "Additional Deliverable / Scope Addon",
      quantity: 1,
      rate: 2000,
    };
    const updated = [...pricingItems, newItem];
    setPricingItems(updated);
    onUpdatePricingItem?.(updated);
  };

  const handleDeletePricingItem = (id: string) => {
    const updated = pricingItems.filter((i) => i.id !== id);
    setPricingItems(updated);
    onUpdatePricingItem?.(updated);
  };

  const calculatedTotal = pricingItems.reduce(
    (sum, i) => sum + (i.quantity || 1) * (i.rate || 0),
    0
  );

  const scrollToSection = (secId: string) => {
    setActiveTab(secId);
    const element = document.getElementById(secId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="flex-1 bg-[#F8F8FA] flex flex-col h-full overflow-hidden">
      {/* Sticky Rich Formatting Toolbar */}
      <div className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-200 bg-white px-6 py-2 shadow-2xs gap-3 select-none">
        <div className="flex items-center gap-1.5 flex-wrap">
          {/* Format Dropdown */}
          <div className="relative">
            <select
              value={activeFormat}
              onChange={(e) => setActiveFormat(e.target.value)}
              className="h-8 rounded-lg border border-slate-200 bg-white pl-2.5 pr-6 text-xs font-semibold text-slate-700 hover:bg-slate-50 focus:outline-none focus:border-[#7C3AED] cursor-pointer"
            >
              <option value="Normal text">Normal text</option>
              <option value="Heading 1">Heading 1</option>
              <option value="Heading 2">Heading 2</option>
              <option value="Heading 3">Heading 3</option>
            </select>
          </div>

          <div className="h-4 w-px bg-slate-200 mx-1" />

          {/* Inline Styling Buttons */}
          <button
            type="button"
            className="flex h-7 w-7 items-center justify-center rounded-md text-slate-600 hover:bg-[#F5F3FF] hover:text-[#7C3AED] transition-colors"
            title="Bold (Ctrl+B)"
          >
            <Bold className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            className="flex h-7 w-7 items-center justify-center rounded-md text-slate-600 hover:bg-[#F5F3FF] hover:text-[#7C3AED] transition-colors"
            title="Italic (Ctrl+I)"
          >
            <Italic className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            className="flex h-7 w-7 items-center justify-center rounded-md text-slate-600 hover:bg-[#F5F3FF] hover:text-[#7C3AED] transition-colors"
            title="Underline (Ctrl+U)"
          >
            <Underline className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            className="flex h-7 w-7 items-center justify-center rounded-md text-slate-600 hover:bg-[#F5F3FF] hover:text-[#7C3AED] transition-colors"
            title="Strikethrough"
          >
            <Strikethrough className="h-3.5 w-3.5" />
          </button>

          <div className="h-4 w-px bg-slate-200 mx-1" />

          {/* Alignments */}
          <button
            type="button"
            className="flex h-7 w-7 items-center justify-center rounded-md text-slate-600 hover:bg-[#F5F3FF] hover:text-[#7C3AED] transition-colors"
            title="Align Left"
          >
            <AlignLeft className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            className="flex h-7 w-7 items-center justify-center rounded-md text-slate-600 hover:bg-[#F5F3FF] hover:text-[#7C3AED] transition-colors"
            title="Align Center"
          >
            <AlignCenter className="h-3.5 w-3.5" />
          </button>

          <div className="h-4 w-px bg-slate-200 mx-1" />

          {/* Lists */}
          <button
            type="button"
            className="flex h-7 w-7 items-center justify-center rounded-md text-slate-600 hover:bg-[#F5F3FF] hover:text-[#7C3AED] transition-colors"
            title="Bulleted List"
          >
            <List className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            className="flex h-7 w-7 items-center justify-center rounded-md text-slate-600 hover:bg-[#F5F3FF] hover:text-[#7C3AED] transition-colors"
            title="Numbered List"
          >
            <ListOrdered className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            className="flex h-7 w-7 items-center justify-center rounded-md text-slate-600 hover:bg-[#F5F3FF] hover:text-[#7C3AED] transition-colors"
            title="Task Checkbox List"
          >
            <ListTodo className="h-3.5 w-3.5" />
          </button>

          <div className="h-4 w-px bg-slate-200 mx-1" />

          {/* Insert Media & Link */}
          <button
            type="button"
            onClick={() => toast.info("Insert link dialog")}
            className="flex h-7 w-7 items-center justify-center rounded-md text-slate-600 hover:bg-[#F5F3FF] hover:text-[#7C3AED] transition-colors"
            title="Insert Link"
          >
            <LinkIcon className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={() => toast.info("Upload/insert image dialog")}
            className="flex h-7 w-7 items-center justify-center rounded-md text-slate-600 hover:bg-[#F5F3FF] hover:text-[#7C3AED] transition-colors"
            title="Insert Image"
          >
            <ImageIcon className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={() => toast.info("Insert table dialog")}
            className="flex h-7 w-7 items-center justify-center rounded-md text-slate-600 hover:bg-[#F5F3FF] hover:text-[#7C3AED] transition-colors"
            title="Insert Table"
          >
            <TableIcon className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Scrollable Paper Workspace Canvas */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-6 sm:p-10">
        <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 sm:p-12 shadow-xs space-y-8">
          {/* Document Top Header (matching user image) */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[#7C3AED]" />
              <span className="text-sm font-bold text-slate-900 tracking-tight">
                Winflare
              </span>
            </div>
            <span className="text-[11px] text-slate-400 font-medium tracking-wide">
              Professional Web Solutions for Modern Businesses
            </span>
          </div>

          {/* Document Cover Title & Hero Section */}
          <div className="space-y-4">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
              Website Redesign Proposal
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              A modern website
              <br />
              for a bigger tomorrow
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed max-w-xl">
              We help forward-thinking companies build modern, high-performing websites
              that drive engagement, create opportunities and fuel growth.
            </p>

            {/* Hero Image Banner (Glass Office Building from reference image) */}
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 shadow-2xs mt-4">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1400"
                alt="Modern architecture"
                className="h-52 sm:h-64 w-full object-cover"
              />
            </div>
          </div>

          {/* Section Navigation Pills (Matching horizontal pill bar in image) */}
          <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar py-2 border-y border-slate-100 text-xs">
            {sectionsList.map((sec) => {
              const isSelected = activeTab === sec.id;
              return (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => scrollToSection(sec.id)}
                  className={cn(
                    "rounded-lg px-2.5 py-1 text-[11px] font-semibold whitespace-nowrap transition-all cursor-pointer",
                    isSelected
                      ? "bg-[#F5F3FF] text-[#7C3AED] shadow-2xs"
                      : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                  )}
                >
                  {sec.title}
                </button>
              );
            })}
          </div>

          {/* Structured Document Section Blocks */}
          <div className="space-y-8 pt-2">
            {sectionsList.map((sec, idx) => {
              const isPricingSection =
                sec.id === "sec-pricing" || sec.title.toLowerCase().includes("pricing") || sec.title.toLowerCase().includes("investment");

              return (
                <div
                  key={sec.id}
                  id={sec.id}
                  className="group rounded-2xl border border-transparent hover:border-slate-200/80 p-4 transition-all scroll-mt-16 relative"
                >
                  {/* Section Header */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      {/* Number Pill (01, 02, 03) */}
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#F5F3FF] text-[#7C3AED] text-xs font-bold shadow-2xs">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <h2 className="text-base font-bold text-slate-900">
                        {sec.title}
                      </h2>
                    </div>

                    {/* Action buttons (··· and ✨) */}
                    <div className="flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                      <button
                        type="button"
                        onClick={() => toast.info(`Options for ${sec.title}`)}
                        className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer"
                        title="Section options"
                      >
                        <MoreHorizontal className="h-3.5 w-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          onAiOptimizeSection?.(sec.id);
                          toast.success(`Winflare AI optimizing ${sec.title}...`);
                        }}
                        className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#DDD6FE] bg-[#F5F3FF] text-[#7C3AED] hover:bg-[#EDE9FE] transition-colors shadow-2xs cursor-pointer"
                        title="AI optimize this section"
                      >
                        <Sparkles className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Section Content Editor */}
                  <textarea
                    rows={Math.max(3, sec.content.split("\n").length + 1)}
                    value={sec.content}
                    onChange={(e) => onUpdateSection(sec.id, e.target.value)}
                    placeholder={`Write ${sec.title.toLowerCase()}...`}
                    className="w-full resize-y rounded-xl border border-transparent p-2 text-sm text-slate-700 leading-relaxed placeholder:text-slate-300 transition-all hover:border-slate-200 focus:border-[#7C3AED] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#7C3AED]"
                  />

                  {/* Pricing line item interactive widget for the Pricing/Investment section */}
                  {isPricingSection && (
                    <div className="mt-4 rounded-xl border border-slate-200/80 bg-[#FAFAFA] p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                          Scope & Milestone Schedule
                        </span>
                        <button
                          type="button"
                          onClick={handleAddPricingItem}
                          className="flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-2xs"
                        >
                          <Plus className="h-3 w-3" />
                          <span>Add Milestone</span>
                        </button>
                      </div>

                      <div className="space-y-2">
                        {pricingItems.map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center gap-2 rounded-lg border border-slate-200/80 bg-white p-2.5 text-xs"
                          >
                            <input
                              type="text"
                              value={item.description}
                              onChange={(e) =>
                                handlePricingChange(item.id, "description", e.target.value)
                              }
                              placeholder="Milestone description"
                              className="flex-1 bg-transparent px-2 py-0.5 font-medium text-slate-800 focus:outline-none"
                            />
                            <div className="flex items-center gap-1 w-28">
                              <span className="text-slate-400 text-xs">$</span>
                              <input
                                type="number"
                                value={item.rate}
                                onChange={(e) =>
                                  handlePricingChange(item.id, "rate", e.target.value)
                                }
                                className="w-20 rounded border border-slate-200 px-2 py-0.5 text-right text-xs font-bold text-slate-900 focus:outline-none focus:border-[#7C3AED]"
                              />
                            </div>
                            <button
                              type="button"
                              onClick={() => handleDeletePricingItem(item.id)}
                              className="rounded p-1 text-slate-400 hover:text-rose-600 transition-colors"
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between border-t border-slate-200 pt-3 px-2">
                        <span className="text-xs font-bold text-slate-700">
                          Total Investment:
                        </span>
                        <span className="text-base font-extrabold text-[#7C3AED]">
                          ${calculatedTotal.toLocaleString()} USD
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
