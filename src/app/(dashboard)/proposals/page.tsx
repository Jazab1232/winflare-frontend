"use client";

import * as React from "react";
import { toast } from "sonner";
import {
  MOCK_PROPOSAL_METRICS,
  MOCK_PROPOSAL_STAGES,
  MOCK_PROPOSAL_ITEMS,
  MOCK_WINNING_ASSETS,
  MOCK_AI_SUGGESTIONS,
} from "@/features/proposals/data/mock-proposals";
import {
  ProposalCardItem,
  ProposalStageConfig,
  ProposalStageId,
  AiSuggestionItem,
} from "@/features/proposals/types";
import { ProposalsHeader } from "@/features/proposals/components/proposals-header";
import { ProposalsTitleBar } from "@/features/proposals/components/proposals-title-bar";
import { ProposalsMetricCards } from "@/features/proposals/components/proposals-metric-cards";
import { ProposalPipelineBoard } from "@/features/proposals/components/proposal-pipeline-board";
import { WinningAssetsLibrary } from "@/features/proposals/components/winning-assets-library";
import { ProposalsAiCommandCenter } from "@/features/proposals/components/proposals-ai-command-center";
import { ProposalDetailModal } from "@/features/proposals/components/proposal-detail-modal";
import { NewProposalModal } from "@/features/proposals/components/new-proposal-modal";

export default function ProposalsPage() {
  const [items, setItems] = React.useState<ProposalCardItem[]>(MOCK_PROPOSAL_ITEMS);
  const [stages, setStages] =
    React.useState<ProposalStageConfig[]>(MOCK_PROPOSAL_STAGES);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedItem, setSelectedItem] = React.useState<ProposalCardItem | null>(
    null
  );
  const [isDetailOpen, setIsDetailOpen] = React.useState(false);
  const [isNewModalOpen, setIsNewModalOpen] = React.useState(false);

  // Filter items by search query
  const filteredItems = React.useMemo(() => {
    if (!searchQuery.trim()) return items;
    const q = searchQuery.toLowerCase();
    return items.filter(
      (item) =>
        item.company.toLowerCase().includes(q) ||
        item.role.toLowerCase().includes(q) ||
        item.budget.toLowerCase().includes(q)
    );
  }, [items, searchQuery]);

  const handleOpenProposal = (item: ProposalCardItem) => {
    setSelectedItem(item);
    setIsDetailOpen(true);
  };

  const handleMoveStage = (
    item: ProposalCardItem,
    newStage: ProposalStageId
  ) => {
    setItems((prev) =>
      prev.map((i) => (i.id === item.id ? { ...i, stageId: newStage } : i))
    );
    if (selectedItem?.id === item.id) {
      setSelectedItem({ ...selectedItem, stageId: newStage });
    }
    toast.success(`Moved proposal for ${item.company} to ${newStage.toUpperCase()}`);
  };

  const handleSendProposal = (item: ProposalCardItem) => {
    handleMoveStage(item, "sent");
    toast.success(`Proposal sent to ${item.company}!`);
  };

  const handleApplySuggestion = (sug: AiSuggestionItem) => {
    toast.success(`Applied AI recommendation: SaaS case study added to ${sug.company} proposal!`);
  };

  const handleCreateFollowUp = () => {
    toast.info("Generated 3 automated follow-up drafts for pending proposals.");
  };

  const handleAddProposal = (newItem: ProposalCardItem) => {
    setItems((prev) => [newItem, ...prev]);
    toast.success(`Created proposal for ${newItem.company}!`);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[#FAFBFF]">
      {/* 1. Top Header */}
      <ProposalsHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* 2. Main Body Container */}
      <div className="flex flex-1 min-h-0 overflow-hidden">
        {/* Scrollable Left / Center Board Area */}
        <div className="flex flex-1 flex-col min-w-0 overflow-y-auto custom-scrollbar">
          {/* Title & Action Bar */}
          <ProposalsTitleBar
            onTemplatesClick={() => toast.info("Opening proposal templates library...")}
            onExportClick={() => toast.success("Exporting proposals to CSV...")}
            onNewProposalClick={() => setIsNewModalOpen(true)}
          />

          {/* 4 Summary Metric Cards */}
          <ProposalsMetricCards metrics={MOCK_PROPOSAL_METRICS} />

          {/* Proposal Pipeline Kanban Board */}
          <ProposalPipelineBoard
            stages={stages}
            items={filteredItems}
            onOpenProposal={handleOpenProposal}
            onViewAll={() => toast.info("Viewing all proposals list")}
          />

          {/* Winning Assets Library Grid */}
          <WinningAssetsLibrary
            assets={MOCK_WINNING_ASSETS}
            onAssetClick={(asset) => toast.info(`Viewing asset: ${asset.title}`)}
            onViewAll={() => toast.info("Viewing all winning assets")}
          />
        </div>

        {/* Right Sidebar: AI Command Center */}
        <ProposalsAiCommandCenter
          suggestions={MOCK_AI_SUGGESTIONS}
          onApplySuggestion={handleApplySuggestion}
          onCreateFollowUp={handleCreateFollowUp}
          onNeedsAttentionClick={() =>
            toast.info("Viewing 3 proposals needing review.")
          }
          onAssetClick={(title) => toast.info(`Opening ${title} details`)}
        />
      </div>

      {/* Detail Viewer Modal */}
      <ProposalDetailModal
        item={selectedItem}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        onMoveStage={handleMoveStage}
        onSendProposal={handleSendProposal}
      />

      {/* New Proposal Modal */}
      <NewProposalModal
        isOpen={isNewModalOpen}
        onClose={() => setIsNewModalOpen(false)}
        onSubmit={handleAddProposal}
      />
    </div>
  );
}

