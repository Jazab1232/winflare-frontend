"use client";

import * as React from "react";
import { MOCK_OPPORTUNITIES } from "@/features/opportunities/data/mock-opportunities";
import { OpportunitiesHeader } from "@/features/opportunities/components/opportunities-header";
import { FilterSidebar } from "@/features/opportunities/components/filter-sidebar";
import { SourceFilterBar } from "@/features/opportunities/components/source-filter-bar";
import { OpportunityCard } from "@/features/opportunities/components/opportunity-card";
import { OpportunityDetailPanel } from "@/features/opportunities/components/opportunity-detail-panel";

export default function OpportunitiesPage() {
  const [searchQuery, setSearchQuery] = React.useState("");
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
    MOCK_OPPORTUNITIES.find((o) => o.id === selectedId) ?? MOCK_OPPORTUNITIES[0];

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

  const filteredOpportunities = MOCK_OPPORTUNITIES.filter((opp) => {
    if (activeSource !== "all" && opp.source !== activeSource) return false;
    if (
      searchQuery.trim() &&
      !opp.role.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !opp.company.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false;
    return true;
  });

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[#FAFBFF]">
      {/* Top Header */}
      <OpportunitiesHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* 3-Pane Body */}
      <div className="flex flex-1 min-h-0 gap-0">
        {/* Pane 1: Left Filter Sidebar */}
        <div className="flex h-full overflow-y-auto custom-scrollbar p-5 border-r border-slate-200/70 w-64 shrink-0 bg-white">
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
          />
        </div>

        {/* Pane 2: Middle Opportunity Feed */}
        <div className="flex flex-1 min-w-0 flex-col overflow-y-auto custom-scrollbar p-5 gap-4 border-r border-slate-200/70">
          {/* Source Filter Bar + Title */}
          <SourceFilterBar
            activeSource={activeSource}
            onSelectSource={setActiveSource}
            totalCount={2847}
          />

          {/* Cards List */}
          <div className="flex flex-col gap-3 pb-4">
            {filteredOpportunities.map((opp) => (
              <OpportunityCard
                key={opp.id}
                item={opp}
                isSelected={opp.id === selectedId}
                onSelect={() => setSelectedId(opp.id)}
                onToggleSave={(e) => {
                  // Toggle save state (mock)
                }}
              />
            ))}
          </div>
        </div>

        {/* Pane 3: Right Detail Drawer */}
        <div className="hidden lg:flex h-full w-[400px] xl:w-[420px] shrink-0 overflow-hidden p-4">
          <OpportunityDetailPanel
            item={selectedItem}
            onClose={() => setSelectedId("")}
            onGenerateProposal={() => {}}
            onSave={() => {}}
            onMoveToPipeline={() => {}}
          />
        </div>
      </div>
    </div>
  );
}

