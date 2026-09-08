"use client";

import * as React from "react";
import { MOCK_OPPORTUNITIES } from "@/features/opportunities/data/mock-opportunities";
import { OpportunitiesHeader } from "@/features/opportunities/components/opportunities-header";
import { FilterSidebar } from "@/features/opportunities/components/filter-sidebar";
import { SourceFilterBar } from "@/features/opportunities/components/source-filter-bar";
import { OpportunityCard } from "@/features/opportunities/components/opportunity-card";
import { OpportunityDetailPanel } from "@/features/opportunities/components/opportunity-detail-panel";
import { ImportOpportunityModal } from "@/features/opportunities/components/import-opportunity-modal";
import { OpportunityItem } from "@/features/opportunities/types";
import { Filter } from "lucide-react";
import { toast } from "sonner";

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

  const filteredOpportunities = opportunities.filter((opp) => {
    if (activeSource !== "all" && opp.source !== activeSource) return false;
    if (
      searchQuery.trim() &&
      !opp.role.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !opp.company.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false;
    return true;
  });

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
          />

          {/* Cards List */}
          <div className="flex flex-col gap-3.5 pb-6">
            {filteredOpportunities.map((opp) => (
              <OpportunityCard
                key={opp.id}
                item={opp}
                isSelected={isDetailOpen && opp.id === selectedId}
                onSelect={() => {
                  setSelectedId(opp.id);
                  setIsDetailOpen(true);
                }}
                onToggleSave={(e) => {
                  // Toggle save state (mock)
                }}
              />
            ))}
          </div>
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

