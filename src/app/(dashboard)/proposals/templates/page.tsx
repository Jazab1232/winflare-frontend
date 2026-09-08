"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Search,
  Plus,
  LayoutTemplate,
  X,
  CheckCircle2,
  Sparkles,
  Layers,
  ArrowRight,
} from "lucide-react";
import { useProposalsStore } from "@/features/proposals/store/proposals-store";
import { TemplateCard } from "@/features/proposals/components/templates/template-card";
import { ProposalTemplate } from "@/features/proposals/types";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export default function ProposalTemplatesPage() {
  const router = useRouter();
  const { templates, createFromTemplate } = useProposalsStore();

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

  const filteredTemplates = React.useMemo(() => {
    return templates.filter((tpl) => {
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
  }, [templates, activeCategory, searchQuery]);

  const handleUseTemplate = (tpl: ProposalTemplate) => {
    const newProposal = createFromTemplate(tpl.id, "Target Client Corp", tpl.title.split(" ")[0] + " Project");
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
    <div className="flex flex-col h-screen overflow-hidden bg-[#FAFAFA]">
      {/* Top Header */}
      <header className="sticky top-0 z-20 flex h-14 w-full items-center justify-between border-b border-slate-200/80 bg-white px-6 select-none">
        <div className="flex items-center gap-3">
          <Link
            href="/proposals"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors shadow-2xs"
            title="Back to proposals"
          >
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <div className="flex items-center gap-2">
            <LayoutTemplate className="h-4 w-4 text-[#7C3AED]" />
            <h1 className="text-sm font-bold text-slate-900">
              Proposal Templates
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => toast.info("Opening custom template builder...")}
            className="flex items-center gap-1.5 rounded-xl bg-[#7C3AED] px-3.5 py-1.5 text-xs font-bold text-white hover:bg-[#6D28D9] transition-all shadow-xs cursor-pointer"
          >
            <Plus className="h-3.5 w-3.5" />
            <span>Create Template</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6">
        {/* Title Bar Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              High-Converting Proposal Templates
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Battle-tested frameworks with structured deliverables, pricing blocks, and case studies.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative flex items-center min-w-[240px]">
            <Search className="absolute left-3 h-3.5 w-3.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search templates or tech..."
              className="h-9 w-full rounded-xl border border-slate-200 bg-white pl-9 pr-3 text-xs text-slate-800 placeholder:text-slate-400 focus:border-[#7C3AED] focus:outline-none focus:ring-1 focus:ring-[#7C3AED]"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto custom-scrollbar pb-1">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-xl px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-all cursor-pointer select-none",
                  isActive
                    ? "bg-[#7C3AED] text-white shadow-2xs"
                    : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                )}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grid of Templates */}
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
                <span className="rounded-full bg-[#F5F3FF] border border-[#DDD6FE] px-2.5 py-0.5 text-[10px] font-bold text-[#7C3AED]">
                  {previewTemplate.category}
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  {previewTemplate.title}
                </h3>
              </div>
              <button
                onClick={() => setPreviewTemplate(null)}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar py-6 space-y-6 text-xs">
              <div className="rounded-xl bg-[#F8F8FA] border border-slate-200/80 p-4 space-y-2">
                <p className="text-slate-700 leading-relaxed font-medium">
                  {previewTemplate.description}
                </p>
                <div className="flex items-center gap-4 text-slate-500 pt-1">
                  <span>Duration: <strong>{previewTemplate.timelineDuration}</strong></span>
                  <span>Pricing: <strong>{previewTemplate.pricingModel}</strong></span>
                  <span>Win Rate: <strong className="text-emerald-700">{previewTemplate.winRate}</strong></span>
                </div>
              </div>

              {/* Sections Breakdown */}
              <div className="space-y-4">
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                  Included Sections ({previewTemplate.sections.length})
                </h4>
                {previewTemplate.sections.map((sec, idx) => (
                  <div
                    key={sec.id}
                    className="rounded-xl border border-slate-200/80 p-4 space-y-1.5 bg-white"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900">
                        {idx + 1}. {sec.title}
                      </span>
                    </div>
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
                className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
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
                className="flex items-center gap-2 rounded-xl bg-[#7C3AED] px-5 py-2 text-xs font-bold text-white hover:bg-[#6D28D9] shadow-sm transition-all"
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

