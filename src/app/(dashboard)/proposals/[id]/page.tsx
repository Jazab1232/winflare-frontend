"use client";

import * as React from "react";
import { useParams, useRouter } from "next/navigation";
import { useProposalsStore } from "@/features/proposals/store/proposals-store";
import { ProposalEditorHeader } from "@/features/proposals/components/editor/proposal-editor-header";
import { OpportunityContextPanel } from "@/features/proposals/components/editor/opportunity-context-panel";
import { ProposalDocumentBuilder } from "@/features/proposals/components/editor/proposal-document-builder";
import { AiProposalAssistant } from "@/features/proposals/components/editor/ai-proposal-assistant";
import { ProposalReviewModal } from "@/features/proposals/components/proposal-review-modal";
import { ProposalStageId, ProposalPricingItem } from "@/features/proposals/types";
import { toast } from "sonner";
import Link from "next/link";
import { ArrowLeft, FileDown, X } from "lucide-react";

export default function ProposalEditorPage() {
  const params = useParams();
  const router = useRouter();
  const proposalId = params?.id as string;

  const {
    proposals,
    updateProposal,
    updateSection,
    moveStage,
    isReviewOpen,
    openReview,
    closeReview,
  } = useProposalsStore();

  const [isLeftCollapsed, setIsLeftCollapsed] = React.useState(false);
  const [isRightCollapsed, setIsRightCollapsed] = React.useState(false);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = React.useState(false);

  // Locate proposal by id or fallback to Acme proposal or first item
  const proposal = React.useMemo(() => {
    return (
      proposals.find((p) => p.id === proposalId) ||
      proposals.find((p) => p.id === "prop-acme") ||
      proposals[0]
    );
  }, [proposals, proposalId]);

  if (!proposal) {
    return (
      <div className="flex flex-col items-center justify-center h-screen space-y-4 bg-[#FAFBFF]">
        <h2 className="text-lg font-bold text-slate-800">Proposal Not Found</h2>
        <Link
          href="/proposals"
          className="flex items-center gap-2 rounded-xl bg-[#5B5AF7] px-4 py-2 text-xs font-bold text-white hover:bg-[#4847E5]"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Proposals</span>
        </Link>
      </div>
    );
  }

  const handleUpdateTitle = (newTitle: string) => {
    updateProposal(proposal.id, { title: newTitle });
    toast.success("Proposal renamed");
  };

  const handleUpdateStage = (newStage: ProposalStageId) => {
    moveStage(proposal.id, newStage);
    toast.success(`Proposal stage moved to ${newStage.toUpperCase()}`);
  };

  const handleUpdateSection = (sectionId: string, content: string) => {
    updateSection(proposal.id, sectionId, content);
  };

  const handleUpdatePricingItems = (pricingItems: ProposalPricingItem[]) => {
    const totalValue = pricingItems.reduce(
      (sum, it) => sum + (it.quantity || 1) * (it.rate || 0),
      0
    );
    updateProposal(proposal.id, {
      pricingItems,
      value: totalValue,
      budget: `$${totalValue.toLocaleString()} Milestone Scope`,
    });
  };

  const handleSendProposal = () => {
    moveStage(proposal.id, "sent");
    toast.success(`Proposal sent to ${proposal.company}!`);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[#FAFBFF]">
      {/* 1. Proposal Editor Top Header */}
      <ProposalEditorHeader
        proposal={proposal}
        onUpdateTitle={handleUpdateTitle}
        onUpdateStage={handleUpdateStage}
        onOpenReview={() => openReview(proposal)}
        onSendProposal={handleSendProposal}
        onPreview={() => setIsPreviewModalOpen(true)}
      />

      {/* 2. Three-Panel Layout matching user reference image pixel-perfectly */}
      <div className="flex flex-1 min-h-0 overflow-hidden p-4 sm:p-5 lg:p-6 gap-4 sm:gap-5 bg-[#FAFBFF]">
        {/* Left: Opportunity Context Panel (2 distinct cards) */}
        <OpportunityContextPanel
          proposal={proposal}
          isCollapsed={isLeftCollapsed}
          onToggleCollapse={() => setIsLeftCollapsed(!isLeftCollapsed)}
        />

        {/* Center: Proposal Document Editor (with MAXIMUM WIDTH) */}
        <ProposalDocumentBuilder
          proposal={proposal}
          onUpdateSection={handleUpdateSection}
          onUpdatePricingItem={handleUpdatePricingItems}
          onAiOptimizeSection={(secId) => {
            updateSection(
              proposal.id,
              secId,
              `✓ Custom, modern design aligned with your brand\n✓ Next.js 16 high-performance architecture\n✓ Headless CMS integration for effortless content management\n✓ Full SEO and Core Web Vitals optimization\n✓ 100% responsive and accessible across all devices`
            );
          }}
        />

        {/* Right: AI Proposal Assistant */}
        <AiProposalAssistant
          proposal={proposal}
          onUpdateSection={handleUpdateSection}
          onOpenReviewModal={() => openReview(proposal)}
          isCollapsed={isRightCollapsed}
          onToggleCollapse={() => setIsRightCollapsed(!isRightCollapsed)}
        />
      </div>

      {/* 3. Document Full Preview Modal */}
      {isPreviewModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 sm:p-6">
          <div
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs"
            onClick={() => setIsPreviewModalOpen(false)}
          />
          <div className="relative w-full max-w-4xl max-h-[90vh] rounded-2xl border border-slate-200 bg-white p-8 shadow-2xl flex flex-col overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Client Document Preview
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  {proposal.title}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="flex items-center gap-1.5 rounded-xl border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
                >
                  <FileDown className="h-3.5 w-3.5" />
                  <span>Download PDF</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsPreviewModalOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar py-6 space-y-8 text-xs">
              <div className="border-b border-slate-100 pb-6 space-y-3">
                <span className="rounded-full bg-[#EEF2FF] text-[#5B5AF7] px-3 py-1 text-[11px] font-bold">
                  Winflare Client Proposal
                </span>
                <h1 className="text-2xl font-bold text-slate-900">
                  {proposal.title}
                </h1>
                <p className="text-slate-600">
                  Prepared for: <strong>{proposal.company}</strong>
                </p>
              </div>

              {proposal.sections.map((sec, idx) => (
                <div key={sec.id} className="space-y-2">
                  <h4 className="font-bold text-slate-900 text-sm">
                    {sec.title}
                  </h4>
                  <p className="text-slate-700 whitespace-pre-line leading-relaxed">
                    {sec.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-end gap-2 pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setIsPreviewModalOpen(false)}
                className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
              >
                Close Preview
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsPreviewModalOpen(false);
                  handleSendProposal();
                }}
                className="rounded-xl bg-[#5B5AF7] px-5 py-2 text-xs font-bold text-white hover:bg-[#4847E5] cursor-pointer"
              >
                Send Proposal →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. AI Proposal Quality Review Modal */}
      <ProposalReviewModal
        isOpen={isReviewOpen}
        onClose={closeReview}
        proposal={proposal}
        onSendProposal={handleSendProposal}
      />
    </div>
  );
}
