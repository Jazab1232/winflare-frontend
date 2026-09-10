"use client";

import * as React from "react";
import { MOCK_OPPORTUNITIES } from "@/features/opportunities/data/mock-opportunities";
import { OpportunitiesHeader } from "@/features/opportunities/components/opportunities-header";
import { FilterSidebar } from "@/features/opportunities/components/filter-sidebar";
import { SourceFilterBar } from "@/features/opportunities/components/source-filter-bar";
import { OpportunityCard } from "@/features/opportunities/components/opportunity-card";
import { OpportunityDetailPanel } from "@/features/opportunities/components/opportunity-detail-panel";
import { ImportOpportunityModal } from "@/features/opportunities/components/import-opportunity-modal";
import { OpportunityShortListView } from "@/features/opportunities/components/opportunity-short-list-view";
import { OpportunityItem } from "@/features/opportunities/types";
import { Filter } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export default function OpportunitiesPage() {
  const [opportunities, setOpportunities] =
    React.useState<OpportunityItem[]>(MOCK_OPPORTUNITIES);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [isImportModalOpen, setIsImportModalOpen] = React.useState(false);
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);
  const [isDetailOpen, setIsDetailOpen] = React.useState(true);
  const [selectedId, setSelectedId] = React.useState<string>(
    MOCK_OPPORTUNITIES[0].id
  );
  const [activeSource, setActiveSource] = React.useState("all");
  const [viewMode, setViewMode] = React.useState<"card" | "detailed" | "short">("detailed");
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 8;

  // Filter state
  const [selectedJobTypes, setSelectedJobTypes] = React.useState<string[]>(["Full-time"]);
  const [selectedExperience, setSelectedExperience] = React.useState<string[]>(["mid"]);
  const [selectedSkills, setSelectedSkills] = React.useState<string[]>(["React", "Next.js"]);
  const [selectedLocations, setSelectedLocations] = React.useState<string[]>(["Remote"]);

  const selectedItem =
    opportunities.find((o) => o.id === selectedId) ?? opportunities[0];

  const handleImportSuccess = (newOpp: OpportunityItem) => {
    setOpportunities((prev) => [newOpp, ...prev]);
    setSelectedId(newOpp.id);
    toast.success(`${newOpp.role} at ${newOpp.company} saved to pipeline!`);
  };

  const handleGenerateProposal = (newOpp: OpportunityItem) => {
    toast.success(`Generating tailored proposal for ${newOpp.role}...`);
  };

  const toggle = <T extends string>(
    list: T[],
    setter: React.Dispatch<React.SetStateAction<T[]>>,
    value: T
  ) => {
    setter((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleClearAll = () => {
    setSelectedJobTypes([]);
    setSelectedExperience([]);
    setSelectedSkills([]);
    setSelectedLocations([]);
  };

  // Reset pagination on filter change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [
    searchQuery,
    activeSource,
    selectedJobTypes,
    selectedExperience,
    selectedSkills,
    selectedLocations,
    viewMode,
  ]);

  const filteredOpportunities = React.useMemo(() => {
    return opportunities.filter((opp) => {
      if (activeSource !== "all" && opp.source !== activeSource) return false;
      if (
        searchQuery.trim() &&
        !opp.role.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !opp.company.toLowerCase().includes(searchQuery.toLowerCase())
      )
        return false;
      return true;
    });
  }, [opportunities, activeSource, searchQuery]);

  const totalPages = Math.ceil(filteredOpportunities.length / itemsPerPage) || 1;
  const paginatedOpportunities = React.useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredOpportunities.slice(start, start + itemsPerPage);
  }, [filteredOpportunities, currentPage, itemsPerPage]);

  const activeFilterCount =
    selectedJobTypes.length +
    selectedExperience.length +
    selectedSkills.length +
    selectedLocations.length;

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[#FAFBFF]">
      {/* Top Header */}
      <OpportunitiesHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onImportOpportunity={() => setIsImportModalOpen(true)}
      />

      {/* Import Opportunity Modal */}
      <ImportOpportunityModal
        isOpen={isImportModalOpen}
        onClose={() => setIsImportModalOpen(false)}
        onImportSuccess={handleImportSuccess}
        onGenerateProposal={handleGenerateProposal}
      />

      {/* 3-Pane Body */}
      <div className="flex flex-1 min-h-0 gap-0">
        {/* Pane 1: Left Filter Sidebar / Collapsed Funnel Rail */}
        {isFilterOpen ? (
          <div className="flex h-full overflow-y-auto custom-scrollbar p-5 border-r border-slate-200/80 w-64 shrink-0 bg-white transition-all duration-200 shadow-sm z-10">
            <FilterSidebar
              className="w-full border-0 shadow-none p-0 bg-transparent"
              selectedJobTypes={selectedJobTypes}
              onToggleJobType={(v) => toggle(selectedJobTypes, setSelectedJobTypes, v)}
              selectedExperience={selectedExperience}
              onToggleExperience={(v) => toggle(selectedExperience, setSelectedExperience, v)}
              selectedSkills={selectedSkills}
              onToggleSkill={(v) => toggle(selectedSkills, setSelectedSkills, v)}
              selectedLocations={selectedLocations}
              onToggleLocation={(v) => toggle(selectedLocations, setSelectedLocations, v)}
              onClearAll={handleClearAll}
              onClose={() => setIsFilterOpen(false)}
            />
          </div>
        ) : (
          <div className="flex h-full w-14 shrink-0 flex-col items-center border-r border-slate-200/80 bg-white py-5 px-2 select-none transition-all duration-200">
            <button
              type="button"
              onClick={() => setIsFilterOpen(true)}
              title="Open filters"
              aria-label="Open filters"
              className="group relative flex h-10 w-10 items-center justify-center rounded-xl bg-[#F4F3FF] border border-[#E0DEFF] text-[#5B5AF7] hover:bg-[#ECE9FE] transition-all cursor-pointer shadow-2xs"
            >
              <Filter className="h-4 w-4 transition-transform group-hover:scale-110" />
              {activeFilterCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#5B5AF7] text-[10px] font-bold text-white shadow-xs">
                  {activeFilterCount}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => setIsFilterOpen(true)}
              className="text-xs font-semibold text-slate-400 hover:text-[#5B5AF7] cursor-pointer mt-5 rotate-90 whitespace-nowrap tracking-wider transition-colors"
            >
              Filters
            </button>
          </div>
        )}

        {/* Pane 2: Middle Opportunity Feed (Expands smoothly) */}
        <div className="flex flex-1 min-w-0 flex-col overflow-y-auto custom-scrollbar p-6 gap-4 bg-[#FAFBFF]">
          {/* Source Filter Bar + Title */}
          <SourceFilterBar
            activeSource={activeSource}
            onSelectSource={setActiveSource}
            totalCount={2847}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
          />

          {/* View Mode Rendering: Card, Detailed, or Short List */}
          {paginatedOpportunities.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-white p-12 text-center my-auto">
              <p className="text-sm font-semibold text-slate-700">No opportunities found</p>
              <p className="text-xs text-slate-400 mt-0.5">Try clearing filters or search query.</p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveSource("all");
                  handleClearAll();
                }}
                className="mt-4 text-xs font-semibold text-[#5B5AF7] hover:underline"
              >
                Clear all filters
              </button>
            </div>
          ) : viewMode === "card" ? (
            /* 1. Card Grid View */
            <div
              className={cn(
                "grid gap-4 pb-6",
                isDetailOpen
                  ? "grid-cols-1 md:grid-cols-2"
                  : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              )}
            >
              {paginatedOpportunities.map((opp) => (
                <OpportunityCard
                  key={opp.id}
                  item={opp}
                  isSelected={isDetailOpen && opp.id === selectedId}
                  onSelect={() => {
                    setSelectedId(opp.id);
                    setIsDetailOpen(true);
                  }}
                  onToggleSave={() => {}}
                />
              ))}
            </div>
          ) : viewMode === "short" ? (
            /* 2. Short List (Compact Table) View */
            <div className="pb-6">
              <OpportunityShortListView
                items={paginatedOpportunities}
                selectedId={selectedId}
                onSelect={(opp) => {
                  setSelectedId(opp.id);
                  setIsDetailOpen(true);
                }}
                onGenerateProposal={handleGenerateProposal}
                onToggleSave={(opp) => {
                  toast.success(`Updated saved state for ${opp.role}`);
                }}
              />
            </div>
          ) : (
            /* 3. Detailed List View (Vertical Stack Feed + Right Drawer) */
            <div className="flex flex-col gap-3.5 pb-6">
              {paginatedOpportunities.map((opp) => (
                <OpportunityCard
                  key={opp.id}
                  item={opp}
                  isSelected={isDetailOpen && opp.id === selectedId}
                  onSelect={() => {
                    setSelectedId(opp.id);
                    setIsDetailOpen(true);
                  }}
                  onToggleSave={() => {}}
                />
              ))}
            </div>
          )}

          {/* Pagination Controls */}
          {filteredOpportunities.length > 0 && totalPages > 1 && (
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-200/80 pt-4 pb-4 mt-auto">
              <span className="text-xs text-slate-400 font-medium">
                Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                {Math.min(currentPage * itemsPerPage, filteredOpportunities.length)} of{" "}
                {filteredOpportunities.length} opportunities
              </span>

              <div className="flex items-center gap-1.5 self-end sm:self-auto">
                <button
                  type="button"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  className="rounded-lg border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shadow-2xs"
                >
                  Previous
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => setCurrentPage(page)}
                    className={cn(
                      "h-7 w-7 rounded-lg text-xs font-semibold transition-colors cursor-pointer",
                      currentPage === page
                        ? "bg-[#5B5AF7] text-white shadow-2xs"
                        : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 shadow-2xs"
                    )}
                  >
                    {page}
                  </button>
                ))}

                <button
                  type="button"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                  className="rounded-lg border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shadow-2xs"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Pane 3: Right Detail Drawer (Clean, Uncluttered, Collapsible) */}
        {isDetailOpen && selectedItem && (
          <div className="hidden lg:flex h-full w-[440px] xl:w-[480px] shrink-0 overflow-hidden border-l border-slate-200/80 bg-white transition-all duration-200">
            <OpportunityDetailPanel
              item={selectedItem}
              onClose={() => setIsDetailOpen(false)}
              onGenerateProposal={() => handleGenerateProposal(selectedItem)}
              onSave={() => {
                toast.success(`Saved ${selectedItem.role} at ${selectedItem.company}`);
              }}
              onMoveToPipeline={() => {
                toast.success(`Moved ${selectedItem.role} to pipeline`);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

