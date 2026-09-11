"use client";

import * as React from "react";
import { toast } from "sonner";
import {
  MOCK_PROPOSAL_METRICS,
  MOCK_PROPOSAL_STAGES,
  MOCK_WINNING_ASSETS,
} from "@/features/proposals/data/mock-proposals";
import { ProposalCardItem, ProposalStageId } from "@/features/proposals/types";
import { useProposalsStore } from "@/features/proposals/store/proposals-store";
import { ProposalsTitleBar } from "@/features/proposals/components/proposals-title-bar";
import { ProposalsMetricCards } from "@/features/proposals/components/proposals-metric-cards";
import { ProposalsTable } from "@/features/proposals/components/proposals-table";
import { ProposalPipelineBoard } from "@/features/proposals/components/proposal-pipeline-board";
import { ProposalDrawer } from "@/features/proposals/components/proposal-drawer";
import { ProposalGeneratorModal } from "@/features/proposals/components/proposal-generator-modal";
import { ProposalReviewModal } from "@/features/proposals/components/proposal-review-modal";
import { WinningAssetsLibrary } from "@/features/proposals/components/winning-assets-library";
import { useRouter } from "next/navigation";

export default function ProposalsPage() {
  const router = useRouter();
  const {
    proposals,
    drawerProposal,
    isDrawerOpen,
    openDrawer,
    closeDrawer,
    isGeneratorOpen,
    generatorInitialData,
    openGenerator,
    closeGenerator,
    isReviewOpen,
    reviewProposal,
    openReview,
    closeReview,
    moveStage,
    deleteProposal,
    addComment,
  } = useProposalsStore();

  const [searchQuery, setSearchQuery] = React.useState("");
  const [viewMode, setViewMode] = React.useState<"table" | "kanban">("table");

  // Search filter across proposals
  const filteredProposals = React.useMemo(() => {
    if (!searchQuery.trim()) return proposals;
    const q = searchQuery.toLowerCase();
    return proposals.filter(
      (item) =>
        item.company.toLowerCase().includes(q) ||
        item.role.toLowerCase().includes(q) ||
        item.budget.toLowerCase().includes(q)
    );
  }, [proposals, searchQuery]);

  const handleSendProposal = (item: ProposalCardItem) => {
    moveStage(item.id, "sent");
    toast.success(`Proposal sent to ${item.company}!`);
  };

  const handleDeleteProposal = (id: string) => {
    deleteProposal(id);
    toast.info("Proposal deleted");
  };

  const handleExport = () => {
    const csvHeader = "ID,Company,Role,Status,Budget,Value,Score,Created,Sent\n";
    const csvRows = proposals
      .map(
        (p) =>
          `"${p.id}","${p.company}","${p.role}","${p.stageId}","${p.budget}",${p.value},${p.score},"${p.createdAt || ""}","${p.sentAt || ""}"`
      )
      .join("\n");
    const blob = new Blob([csvHeader + csvRows], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `winflare-proposals-${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Exported proposals to CSV!");
  };

  return (
    <div className="flex flex-col h-full overflow-hidden bg-[#FAFBFF]">
      {/* Main Scrollable Container */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {/* Title Bar with New Proposal, Templates, Export & View Switcher */}
        <ProposalsTitleBar
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          onTemplatesClick={() => router.push("/proposals/templates")}
          onExportClick={handleExport}
          onNewProposalClick={() => openGenerator()}
        />

        {/* 4 KPI Metric Cards */}
        <div className="pt-6">
          <ProposalsMetricCards metrics={MOCK_PROPOSAL_METRICS} />
        </div>

        {/* View Toggle: Main Table (Default) vs Kanban Board */}
        <div className="px-6 pb-6">
          {viewMode === "table" ? (
            <ProposalsTable
              items={filteredProposals}
              onOpenDrawer={openDrawer}
              onSendProposal={handleSendProposal}
              onDeleteProposal={handleDeleteProposal}
              onReviewProposal={openReview}
            />
          ) : (
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs">
              <ProposalPipelineBoard
                stages={MOCK_PROPOSAL_STAGES}
                items={filteredProposals}
                onOpenProposal={(item) => router.push(`/proposals/${item.id}`)}
                onViewAll={() => setViewMode("table")}
              />
            </div>
          )}
        </div>

        {/* Winning Assets Library Teaser Grid */}
        <div className="px-6 pb-8">
          <WinningAssetsLibrary
            assets={MOCK_WINNING_ASSETS}
            onAssetClick={(asset) => router.push("/proposals/library")}
            onViewAll={() => router.push("/proposals/library")}
          />
        </div>
      </div>

      {/* Slide-in Proposal Details Drawer */}
      <ProposalDrawer
        item={drawerProposal}
        isOpen={isDrawerOpen}
        onClose={closeDrawer}
        onMoveStage={moveStage}
        onAddComment={addComment}
        onSendProposal={handleSendProposal}
        onOpenReview={openReview}
      />

      {/* AI Proposal Generator Modal */}
      <ProposalGeneratorModal
        isOpen={isGeneratorOpen}
        onClose={closeGenerator}
        initialOpportunity={generatorInitialData}
      />

      {/* Proposal Review Score Modal */}
      <ProposalReviewModal
        isOpen={isReviewOpen}
        onClose={closeReview}
        proposal={reviewProposal}
        onSendProposal={handleSendProposal}
      />
    </div>
  );
}
