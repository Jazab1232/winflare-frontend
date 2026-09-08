"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Search,
  Plus,
  Library,
  X,
  FileText,
  Image,
  MessageSquare,
  Tag,
  HelpCircle,
  Briefcase,
  Sparkles,
} from "lucide-react";
import { useProposalsStore } from "@/features/proposals/store/proposals-store";
import { LibraryAssetCard } from "@/features/proposals/components/library/library-asset-card";
import { ProposalLibraryItem } from "@/features/proposals/types";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export default function ProposalLibraryPage() {
  const { libraryItems } = useProposalsStore();

  const [activeCategory, setActiveCategory] = React.useState<string>("all");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [isAddModalOpen, setIsAddModalOpen] = React.useState(false);

  // New asset form state
  const [newTitle, setNewTitle] = React.useState("");
  const [newCategory, setNewCategory] = React.useState<ProposalLibraryItem["category"]>("introductions");
  const [newContent, setNewContent] = React.useState("");
  const [newTags, setNewTags] = React.useState("");

  const categories = [
    { id: "all", label: "All Content" },
    { id: "introductions", label: "Winning Introductions" },
    { id: "case_studies", label: "Case Studies" },
    { id: "testimonials", label: "Testimonials" },
    { id: "pricing", label: "Pricing Packages" },
    { id: "faqs", label: "FAQs" },
    { id: "services", label: "Service Descriptions" },
  ];

  const filteredItems = React.useMemo(() => {
    return libraryItems.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.content.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [libraryItems, activeCategory, searchQuery]);

  const handleAddSnippet = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) {
      toast.error("Please provide both title and snippet content.");
      return;
    }

    const newItem: ProposalLibraryItem = {
      id: "lib-" + Date.now(),
      category: newCategory,
      title: newTitle,
      content: newContent,
      tags: newTags
        ? newTags.split(",").map((t) => t.trim())
        : ["Custom", "Proven"],
      timesUsed: 1,
      winRateBoost: "+15% Win Rate",
    };

    useProposalsStore.setState((state) => ({
      libraryItems: [newItem, ...state.libraryItems],
    }));

    toast.success(`Added "${newTitle}" to Winflare Knowledge Base!`);
    setIsAddModalOpen(false);
    setNewTitle("");
    setNewContent("");
    setNewTags("");
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
            <Library className="h-4 w-4 text-[#7C3AED]" />
            <h1 className="text-sm font-bold text-slate-900">
              Proposal Library & Knowledge Base
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => setIsAddModalOpen(true)}
            className="flex items-center gap-1.5 rounded-xl bg-[#7C3AED] px-3.5 py-1.5 text-xs font-bold text-white hover:bg-[#6D28D9] transition-all shadow-xs cursor-pointer"
          >
            <Plus className="h-3.5 w-3.5" />
            <span>Add Snippet</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6">
        {/* Title Bar Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Winning Content Knowledge Base
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              High-converting hooks, case studies, pricing structures, and testimonials to supercharge your proposals.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative flex items-center min-w-[240px]">
            <Search className="absolute left-3 h-3.5 w-3.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search library snippets or tags..."
              className="h-9 w-full rounded-xl border border-slate-200 bg-white pl-9 pr-3 text-xs text-slate-800 placeholder:text-slate-400 focus:border-[#7C3AED] focus:outline-none focus:ring-1 focus:ring-[#7C3AED]"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto custom-scrollbar pb-1">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "rounded-xl px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-all cursor-pointer select-none",
                  isActive
                    ? "bg-[#7C3AED] text-white shadow-2xs"
                    : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                )}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Assets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filteredItems.map((item) => (
            <LibraryAssetCard
              key={item.id}
              item={item}
              onInsert={(it) => {
                navigator.clipboard.writeText(it.content);
                toast.success(`Copied "${it.title}"! Paste into your Proposal Editor.`);
              }}
            />
          ))}
        </div>
      </div>

      {/* Add Snippet Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 sm:p-6">
          <div
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs"
            onClick={() => setIsAddModalOpen(false)}
          />
          <div className="relative w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-900">
                Add Winning Asset to Library
              </h3>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleAddSnippet} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Asset Title
                </label>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Enterprise Fintech Security Hook"
                  className="w-full h-9 rounded-lg border border-slate-200 px-3 text-slate-900 focus:border-[#7C3AED] focus:outline-none focus:ring-1 focus:ring-[#7C3AED]"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Category
                </label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value as any)}
                  className="w-full h-9 rounded-lg border border-slate-200 px-3 text-slate-900 focus:border-[#7C3AED] focus:outline-none focus:ring-1 focus:ring-[#7C3AED]"
                >
                  <option value="introductions">Winning Introductions</option>
                  <option value="case_studies">Case Studies</option>
                  <option value="testimonials">Testimonials</option>
                  <option value="pricing">Pricing Packages</option>
                  <option value="faqs">FAQs</option>
                  <option value="services">Service Descriptions</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Snippet Content
                </label>
                <textarea
                  rows={4}
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  placeholder="Paste your proven copy, case study or pricing schedule..."
                  className="w-full rounded-lg border border-slate-200 p-2.5 text-slate-900 focus:border-[#7C3AED] focus:outline-none focus:ring-1 focus:ring-[#7C3AED]"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Tags (comma separated)
                </label>
                <input
                  type="text"
                  value={newTags}
                  onChange={(e) => setNewTags(e.target.value)}
                  placeholder="Fintech, High Conversion, Next.js"
                  className="w-full h-9 rounded-lg border border-slate-200 px-3 text-slate-900 focus:border-[#7C3AED] focus:outline-none focus:ring-1 focus:ring-[#7C3AED]"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-[#7C3AED] px-5 py-2 text-xs font-bold text-white hover:bg-[#6D28D9] transition-all shadow-sm"
                >
                  Save to Knowledge Base
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

