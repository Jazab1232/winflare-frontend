"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
  Plus,
  Bell,
  X,
  ArrowRight,
} from "lucide-react";
import { useProposalsStore } from "@/features/proposals/store/proposals-store";
import { TemplateCard } from "@/features/proposals/components/templates/template-card";
import { ProposalTemplate } from "@/features/proposals/types";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export default function ProposalTemplatesPage() {
  const router = useRouter();
  const { templates: storeTemplates, createFromTemplate } = useProposalsStore();

  const [activeCategory, setActiveCategory] = React.useState<string>("All");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [previewTemplate, setPreviewTemplate] = React.useState<ProposalTemplate | null>(null);

  const categories = [
    "All",
    "Web Development",
    "Mobile Apps",
    "SaaS",
    "UI/UX",
    "Marketing",
    "Consulting",
  ];

  // Ensure default templates match the 6 exact cards from screenshot 3
  const defaultTemplates: ProposalTemplate[] = [
    {
      id: "tpl-web",
      title: "Website Redesign",
      category: "Web Development",
      description: "Complete website redesign proposal tailored for high-ticket clients with CMS and SEO scope.",
      sectionsCount: 7,
      timelineDuration: "3–4 weeks",
      pricingModel: "$12,000 Milestone Schedule",
      winRate: "94%",
      timesUsed: 24,
      tags: ["Next.js", "Tailwind", "SEO", "CMS"],
      sections: [
        { id: "s1", title: "Introduction", content: "Warm opening hook tailored to client goals." },
        { id: "s2", title: "Problem", content: "Current bottlenecks in site speed and conversions." },
        { id: "s3", title: "Solution", content: "Modern Next.js responsive web application." },
      ],
      pricingItems: [
        { id: "p1", description: "Design & Scaffolding", quantity: 1, rate: 3600 },
        { id: "p2", description: "Frontend Development", quantity: 1, rate: 4800 },
        { id: "p3", description: "QA & Deployment", quantity: 1, rate: 3600 },
      ],
    },
    {
      id: "tpl-mobile",
      title: "Mobile App Proposal",
      category: "Mobile Apps",
      description: "Cross-platform React Native mobile application proposal with offline sync and auth.",
      sectionsCount: 6,
      timelineDuration: "6–8 weeks",
      pricingModel: "$18,000 Milestone Schedule",
      winRate: "91%",
      timesUsed: 18,
      tags: ["React Native", "iOS", "Android", "Supabase"],
      sections: [
        { id: "s1", title: "Introduction", content: "Mobile application strategy overview." },
        { id: "s2", title: "Architecture", content: "Cross-platform mobile framework." },
      ],
      pricingItems: [
        { id: "p1", description: "Mobile Prototype & UI", quantity: 1, rate: 6000 },
        { id: "p2", description: "API & Offline Sync", quantity: 1, rate: 8000 },
        { id: "p3", description: "Store Submission & QA", quantity: 1, rate: 4000 },
      ],
    },
    {
      id: "tpl-saas",
      title: "SaaS Platform",
      category: "SaaS",
      description: "End-to-end B2B SaaS platform proposal covering multi-tenant auth, billing, and analytics.",
      sectionsCount: 8,
      timelineDuration: "8–12 weeks",
      pricingModel: "$25,000 Milestone Schedule",
      winRate: "89%",
      timesUsed: 15,
      tags: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
      sections: [
        { id: "s1", title: "Introduction", content: "B2B SaaS vision and execution roadmap." },
        { id: "s2", title: "Platform Architecture", content: "Multi-tenant cloud infrastructure." },
      ],
      pricingItems: [
        { id: "p1", description: "Multi-tenant Schema & Auth", quantity: 1, rate: 8000 },
        { id: "p2", description: "Subscription Billing & Stripe", quantity: 1, rate: 9000 },
        { id: "p3", description: "Core Dashboard & Analytics", quantity: 1, rate: 8000 },
      ],
    },
    {
      id: "tpl-uiux",
      title: "UI/UX Design",
      category: "UI/UX",
      description: "Comprehensive product design proposal including user research, wireframes, and design system.",
      sectionsCount: 5,
      timelineDuration: "3–4 weeks",
      pricingModel: "$8,500 Milestone Schedule",
      winRate: "92%",
      timesUsed: 31,
      tags: ["Figma", "Design System", "User Research"],
      sections: [
        { id: "s1", title: "Introduction", content: "Design strategy and brand alignment." },
        { id: "s2", title: "Design Process", content: "Wireframing, prototyping and testing." },
      ],
      pricingItems: [
        { id: "p1", description: "Discovery & User Journey", quantity: 1, rate: 3000 },
        { id: "p2", description: "Figma Component Library", quantity: 1, rate: 5500 },
      ],
    },
    {
      id: "tpl-marketing",
      title: "Digital Marketing",
      category: "Marketing",
      description: "Growth marketing and conversion rate optimization proposal with funnel analytics.",
      sectionsCount: 5,
      timelineDuration: "Monthly Retainer",
      pricingModel: "$4,500 / month",
      winRate: "87%",
      timesUsed: 22,
      tags: ["SEO", "Conversion Rate", "Content Strategy"],
      sections: [
        { id: "s1", title: "Introduction", content: "Growth targets and commercial acquisition." },
        { id: "s2", title: "Acquisition Channels", content: "Organic search, PPC, and funnels." },
      ],
      pricingItems: [
        { id: "p1", description: "SEO & Growth Sprint (Month 1)", quantity: 1, rate: 4500 },
      ],
    },
    {
      id: "tpl-consulting",
      title: "Business Consulting",
      category: "Consulting",
      description: "Strategic advisory and digital transformation roadmap for scaling businesses.",
      sectionsCount: 6,
      timelineDuration: "4–6 weeks",
      pricingModel: "$15,000 Advisory Fee",
      winRate: "95%",
      timesUsed: 19,
      tags: ["Strategy", "Transformation", "Audit"],
      sections: [
        { id: "s1", title: "Introduction", content: "Executive overview and problem diagnosis." },
        { id: "s2", title: "Strategic Roadmap", content: "Operational milestones and deliverables." },
      ],
      pricingItems: [
        { id: "p1", description: "Architecture & Process Audit", quantity: 1, rate: 6000 },
        { id: "p2", description: "Execution Roadmap & Delivery", quantity: 1, rate: 9000 },
      ],
    },
  ];

  const allTemplates = storeTemplates.length > 0 ? storeTemplates : defaultTemplates;

  const filteredTemplates = React.useMemo(() => {
    return allTemplates.filter((tpl) => {
      const matchesCategory =
        activeCategory === "All" || tpl.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        tpl.title.toLowerCase().includes(q) ||
        tpl.description.toLowerCase().includes(q) ||
        tpl.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [allTemplates, activeCategory, searchQuery]);

  const handleUseTemplate = (tpl: ProposalTemplate) => {
    const newProposal = createFromTemplate(tpl.id, "Target Client Corp", tpl.title);
    toast.success(`Created proposal from "${tpl.title}"!`);
    router.push(`/proposals/${newProposal.id}`);
  };

  const handleDuplicate = (tpl: ProposalTemplate) => {
    toast.success(`Duplicated "${tpl.title}" to your custom templates`);
  };

  const handleEdit = (tpl: ProposalTemplate) => {
    toast.info(`Editing template structure for "${tpl.title}"`);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[#FAFBFF]">
      {/* Top Global Header with Search, Bell, Profile */}
      <header className="sticky top-0 z-20 flex h-14 w-full items-center justify-between border-b border-slate-200/80 bg-white px-6 select-none shrink-0">
        <div className="flex items-center gap-2">
          <h1 className="text-sm font-bold text-slate-900 tracking-tight">
            Proposal Templates
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative flex items-center">
            <Search className="absolute left-3 h-3.5 w-3.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search..."
              className="h-8 w-52 rounded-xl border border-slate-200/90 bg-[#F8FAFC] pl-8 pr-9 text-xs text-slate-800 placeholder:text-slate-400 shadow-2xs focus:border-[#5B5AF7] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#5B5AF7]"
            />
            <div className="absolute right-2 flex items-center gap-0.5 rounded border border-slate-200 bg-white px-1 py-0.2 text-[9px] font-medium text-slate-400 select-none">
              <span>⌘</span>
              <span>K</span>
            </div>
          </div>

          <button
            type="button"
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            title="Notifications"
          >
            <Bell className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-2 pl-1 select-none">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120"
              alt="John Doe"
              className="h-8 w-8 rounded-full object-cover border border-slate-200"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-xs font-bold text-slate-900">John Doe</span>
              <span className="text-[11px] text-slate-400">Admin</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6">
        {/* Title Bar Banner */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Templates
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Reusable proposal assets
            </p>
          </div>

          <button
            type="button"
            onClick={() => toast.info("Opening custom template builder...")}
            className="flex items-center gap-1.5 rounded-xl bg-[#5B5AF7] hover:bg-[#4847E5] px-4 py-2 text-xs font-semibold text-white shadow-xs transition-all cursor-pointer"
          >
            <Plus className="h-3.5 w-3.5" />
            <span>Create Template</span>
          </button>
        </div>

        {/* Search Input Box */}
        <div className="relative flex items-center w-full">
          <Search className="absolute left-3.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search templates..."
            className="h-10 w-full rounded-xl border border-slate-200/90 bg-white pl-10 pr-4 text-xs text-slate-800 placeholder:text-slate-400 shadow-2xs focus:border-[#5B5AF7] focus:outline-none focus:ring-1 focus:ring-[#5B5AF7]"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar pb-1">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-xs font-medium whitespace-nowrap transition-all cursor-pointer select-none",
                  isActive
                    ? "bg-[#5B5AF7] text-white shadow-2xs font-semibold"
                    : "bg-white border border-slate-200/80 text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                )}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grid of Templates (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filteredTemplates.map((tpl) => (
            <TemplateCard
              key={tpl.id}
              template={tpl}
              onUse={handleUseTemplate}
              onDuplicate={handleDuplicate}
              onEdit={handleEdit}
              onPreview={(t) => setPreviewTemplate(t)}
            />
          ))}
        </div>
      </div>

      {/* Full Template Preview Modal */}
      {previewTemplate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 sm:p-6">
          <div
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs"
            onClick={() => setPreviewTemplate(null)}
          />
          <div className="relative w-full max-w-3xl max-h-[85vh] rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="space-y-1">
                <span className="rounded-full bg-[#EEF2FF] border border-[#DDD6FE] px-2.5 py-0.5 text-[10px] font-bold text-[#5B5AF7]">
                  {previewTemplate.category}
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  {previewTemplate.title}
                </h3>
              </div>
              <button
                onClick={() => setPreviewTemplate(null)}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar py-6 space-y-6 text-xs">
              <div className="rounded-xl bg-[#F8FAFC] border border-slate-200/80 p-4 space-y-2">
                <p className="text-slate-700 leading-relaxed font-medium">
                  {previewTemplate.description}
                </p>
                <div className="flex items-center gap-4 text-slate-500 pt-1">
                  <span>Duration: <strong>{previewTemplate.timelineDuration}</strong></span>
                  <span>Pricing: <strong>{previewTemplate.pricingModel}</strong></span>
                  <span>Win Rate: <strong className="text-emerald-700">{previewTemplate.winRate}</strong></span>
                </div>
              </div>

              {/* Sections */}
              <div className="space-y-4">
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                  Included Sections ({previewTemplate.sections?.length || 0})
                </h4>
                {(previewTemplate.sections || []).map((sec, idx) => (
                  <div
                    key={sec.id}
                    className="rounded-xl border border-slate-200/80 p-4 space-y-1.5 bg-white"
                  >
                    <span className="font-bold text-slate-900">
                      {idx + 1}. {sec.title}
                    </span>
                    <p className="text-slate-600 whitespace-pre-line leading-relaxed text-[11px]">
                      {sec.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setPreviewTemplate(null)}
                className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Close Preview
              </button>
              <button
                type="button"
                onClick={() => {
                  const tpl = previewTemplate;
                  setPreviewTemplate(null);
                  handleUseTemplate(tpl);
                }}
                className="flex items-center gap-2 rounded-xl bg-[#5B5AF7] px-5 py-2 text-xs font-bold text-white hover:bg-[#4847E5] shadow-xs transition-all cursor-pointer"
              >
                <span>Use This Template</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
