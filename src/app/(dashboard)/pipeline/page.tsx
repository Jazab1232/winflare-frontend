"use client";

import * as React from "react";
import { toast } from "sonner";
import {
  MOCK_SUMMARY_METRICS,
  MOCK_PIPELINE_STAGES,
  MOCK_PIPELINE_ITEMS,
  MOCK_AI_RECOMMENDATIONS,
  MOCK_PIPELINE_HEALTH,
  MOCK_UPCOMING_TASKS,
} from "@/features/pipeline/data/mock-pipeline-data";
import {
  PipelineItem,
  PipelineStageConfig,
  PipelineStageId,
} from "@/features/pipeline/types";
import { useRouter } from "next/navigation";
import { useProposalsStore } from "@/features/proposals/store/proposals-store";
import { PipelineHeader } from "@/features/pipeline/components/pipeline-header";
import { PipelineTitleBar } from "@/features/pipeline/components/pipeline-title-bar";
import { PipelineMetricCards } from "@/features/pipeline/components/pipeline-metric-cards";
import { PipelineKanbanBoard } from "@/features/pipeline/components/pipeline-kanban-board";
import { PipelineListView } from "@/features/pipeline/components/pipeline-list-view";
import { PipelineAiCommandCenter } from "@/features/pipeline/components/pipeline-ai-command-center";
import { PipelineDetailModal } from "@/features/pipeline/components/pipeline-detail-modal";
import { NewOpportunityModal } from "@/features/pipeline/components/new-opportunity-modal";

export default function PipelinePage() {
  const [items, setItems] = React.useState<PipelineItem[]>(MOCK_PIPELINE_ITEMS);
  const [stages, setStages] =
    React.useState<PipelineStageConfig[]>(MOCK_PIPELINE_STAGES);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [viewMode, setViewMode] = React.useState<"board" | "list">("board");
  const [selectedItem, setSelectedItem] = React.useState<PipelineItem | null>(
    null
  );
  const [isDetailOpen, setIsDetailOpen] = React.useState(false);
  const [isNewModalOpen, setIsNewModalOpen] = React.useState(false);
  const [newModalStage, setNewModalStage] =
    React.useState<PipelineStageId>("qualified");

  // Filter items by search query
  const filteredItems = React.useMemo(() => {
    if (!searchQuery.trim()) return items;
    const q = searchQuery.toLowerCase();
    return items.filter(
      (item) =>
        item.company.toLowerCase().includes(q) ||
        item.role.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q)
    );
  }, [items, searchQuery]);

  // Stage order for progression
  const stageOrder: PipelineStageId[] = [
    "qualified",
    "proposal_drafting",
    "applied",
    "interview",
    "negotiation",
    "won",
  ];

  const router = useRouter();
  const { openGenerator } = useProposalsStore();

  const handleOpenDetails = (item: PipelineItem) => {
    setSelectedItem(item);
    setIsDetailOpen(true);
  };

  const handleGenerateProposal = (item: PipelineItem) => {
    openGenerator({
      company: item.company,
      role: item.role,
      budget: item.salary,
    });
    router.push("/proposals");
  };

  const handleViewProposal = (item: PipelineItem) => {
    router.push("/proposals");
  };

  const handleMoveStage = (item: PipelineItem, targetStage?: PipelineStageId) => {
    const nextStage =
      targetStage ||
      stageOrder[
        Math.min(stageOrder.indexOf(item.stageId) + 1, stageOrder.length - 1)
      ];

    setItems((prev) =>
      prev.map((i) => (i.id === item.id ? { ...i, stageId: nextStage } : i))
    );

    if (selectedItem?.id === item.id) {
      setSelectedItem({ ...selectedItem, stageId: nextStage });
    }

    toast.success(`Moved ${item.company} to ${nextStage.replace("_", " ")}`);
  };

  const handleAddOpportunityClick = (stageId: PipelineStageId = "qualified") => {
    setNewModalStage(stageId);
    setIsNewModalOpen(true);
  };

  const handleAddNewItem = (newItem: PipelineItem) => {
    setItems((prev) => [newItem, ...prev]);
    toast.success(`Added ${newItem.role} at ${newItem.company} to pipeline!`);
  };

  const handleExport = () => {
    toast.success("Exporting pipeline opportunities to CSV...");
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[#FAFBFF]">
      {/* 1. Top Header */}
      <PipelineHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onNewOpportunity={() => handleAddOpportunityClick("qualified")}
        onExport={handleExport}
      />

      {/* 2. Main Body Container: Kanban Board + AI Command Center */}
      <div className="flex flex-1 min-h-0 overflow-hidden">
        {/* Left / Center Board Area */}
        <div className="flex flex-1 flex-col min-w-0 overflow-hidden">
          {/* Title and date/filter controls */}
          <PipelineTitleBar
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            onFilterClick={() => toast.info("Filter clicked")}
            onSortClick={() => toast.info("Sort options clicked")}
          />

          {/* 5 Summary Metric Cards */}
          <PipelineMetricCards metrics={MOCK_SUMMARY_METRICS} />

          {/* Kanban Board or List View */}
          {viewMode === "board" ? (
            <PipelineKanbanBoard
              stages={stages}
              items={filteredItems}
              onOpenDetails={handleOpenDetails}
              onGenerateProposal={handleGenerateProposal}
              onViewProposal={handleViewProposal}
              onMoveStage={(item) => handleMoveStage(item)}
              onAddOpportunity={handleAddOpportunityClick}
            />
          ) : (
            <PipelineListView
              stages={stages}
              items={filteredItems}
              onOpenDetails={handleOpenDetails}
              onGenerateProposal={handleGenerateProposal}
              onViewProposal={handleViewProposal}
              onMoveStage={(item) => handleMoveStage(item)}
            />
          )}
        </div>

        {/* Right Sidebar: AI Command Center */}
        <PipelineAiCommandCenter
          recommendations={MOCK_AI_RECOMMENDATIONS}
          healthStats={MOCK_PIPELINE_HEALTH}
          tasks={MOCK_UPCOMING_TASKS}
          onRecommendationClick={(rec) => {
            const matchedItem = items.find((i) => i.company === rec.company);
            if (matchedItem) handleOpenDetails(matchedItem);
            else toast.info(`Viewing details for ${rec.company}`);
          }}
          onAttentionClick={() => {
            toast.info("Viewing 3 opportunities needing attention.");
          }}
          onTaskToggle={(id) => {
            toast.success("Task status updated!");
          }}
        />
      </div>

      {/* Detail Modal */}
      <PipelineDetailModal
        item={selectedItem}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        onMoveStage={(item, newStage) => handleMoveStage(item, newStage)}
        onGenerateProposal={handleGenerateProposal}
      />

      {/* New Opportunity Modal */}
      <NewOpportunityModal
        isOpen={isNewModalOpen}
        initialStageId={newModalStage}
        onClose={() => setIsNewModalOpen(false)}
        onSubmit={handleAddNewItem}
      />
    </div>
  );
}

