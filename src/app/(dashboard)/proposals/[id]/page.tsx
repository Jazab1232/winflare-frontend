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
import {
  ArrowLeft,
  CheckCircle2,
  Eye,
  Sparkles,
  Send,
  X,
  FileDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

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

  // Locate proposal by id or fallback to default
  const proposal = React.useMemo(() => {
    return proposals.find((p) => p.id === proposalId) || proposals[0];
  }, [proposals, proposalId]);

  if (!proposal) {
    return (
      <div className="flex flex-col items-center justify-center h-screen space-y-4 bg-[#FAFAFA]">
        <h2 className="text-lg font-bold text-slate-800">Proposal Not Found</h2>
        <Link
          href="/proposals"
          className="flex items-center gap-2 rounded-xl bg-[#7C3AED] px-4 py-2 text-xs font-bold text-white hover:bg-[#6D28D9]"
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
    <div className="flex flex-col h-screen overflow-hidden bg-[#FAFAFA]">
      {/* 1. Proposal Editor Top Header */}
      <ProposalEditorHeader
        proposal={proposal}
        onUpdateTitle={handleUpdateTitle}
        onUpdateStage={handleUpdateStage}
        onOpenReview={() => openReview(proposal)}
        onSendProposal={handleSendProposal}
        onPreview={() => setIsPreviewModalOpen(true)}
      />

      {/* 2. Three-Panel Layout matching user reference image */}
      <div className="flex flex-1 min-h-0 overflow-hidden">
        {/* Left: Opportunity Context Panel */}
        <OpportunityContextPanel
          proposal={proposal}
          isCollapsed={isLeftCollapsed}
          onToggleCollapse={() => setIsLeftCollapsed(!isLeftCollapsed)}
        />

        {/* Center: Enhanced Notion-style Proposal Document Builder */}
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

        {/* Right: Winflare AI Proposal Assistant */}
        <AiProposalAssistant
          proposal={proposal}
          onUpdateSection={handleUpdateSection}
          onOpenReviewModal={() => openReview(proposal)}
          isCollapsed={isRightCollapsed}
          onToggleCollapse={() => setIsRightCollapsed(!isRightCollapsed)}
        />
      </div>

      {/* 3. Bottom Fixed Floating Status Bar (From Reference Image) */}
      <footer className="sticky bottom-0 z-30 flex h-14 w-full items-center justify-between border-t border-slate-200 bg-white px-6 select-none shadow-xs">
        {/* Left: Auto-save indicator */}
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <CheckCircle2 className="h-4 w-4 text-emerald-500" />
          <span>Auto-saved 2 minutes ago</span>
        </div>

        {/* Center: Proposal Readiness Progress Bar */}
        <div className="hidden md:flex items-center gap-3 text-xs">
          <span className="text-slate-500 font-medium">Proposal Readiness</span>
          <div className="h-2 w-44 rounded-full bg-slate-100 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#7C3AED] to-[#A855F7]"
              style={{ width: "92%" }}
            />
          </div>
          <span className="font-bold text-slate-800">92%</span>
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => setIsPreviewModalOpen(true)}
            className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-all shadow-2xs cursor-pointer"
          >
            <Eye className="h-3.5 w-3.5 text-slate-500" />
            <span>Preview</span>
          </button>

          <button
            type="button"
            onClick={() => openReview(proposal)}
            className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-800 hover:border-[#DDD6FE] hover:bg-[#F5F3FF] hover:text-[#7C3AED] transition-all shadow-2xs cursor-pointer"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#7C3AED]" />
            <span>Review Proposal</span>
          </button>

          <button
            type="button"
            onClick={handleSendProposal}
            className="flex items-center gap-1.5 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] px-4 py-1.5 text-xs font-bold text-white shadow-xs transition-all cursor-pointer"
          >
            <span>Send Proposal</span>
            <span className="text-sm leading-none">→</span>
          </button>
        </div>
      </footer>

      {/* 4. Document Full Preview Modal */}
      {isPreviewModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 sm:p-6">
          <div
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs"
            onClick={() => setIsPreviewModalOpen(false)}
          />
          <div className="relative w-full max-w-4xl max-h-[90vh] rounded-2xl border border-slate-200 bg-white p-8 shadow-2xl flex flex-col overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase">
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
                  className="flex items-center gap-1.5 rounded-xl border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50"
                >
                  <FileDown className="h-3.5 w-3.5" />
                  <span>Download PDF</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsPreviewModalOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar py-6 space-y-8 text-xs">
              <div className="border-b border-slate-100 pb-6 space-y-3">
                <span className="rounded-full bg-[#F5F3FF] text-[#7C3AED] px-3 py-1 text-[11px] font-bold">
                  Winflare Client Proposal
                </span>
                <h1 className="text-2xl font-bold text-slate-900">
                  A modern website for a bigger tomorrow
                </h1>
                <p className="text-slate-600">
                  Prepared for: <strong>{proposal.company}</strong>
                </p>
              </div>

              {proposal.sections.map((sec, idx) => (
                <div key={sec.id} className="space-y-2">
                  <h4 className="font-bold text-slate-900 text-sm">
                    {String(idx + 1).padStart(2, "0")}. {sec.title}
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
                className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                Close Preview
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsPreviewModalOpen(false);
                  handleSendProposal();
                }}
                className="rounded-xl bg-[#7C3AED] px-5 py-2 text-xs font-bold text-white hover:bg-[#6D28D9]"
              >
                Send Proposal →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 5. AI Proposal Quality Review Modal */}
      <ProposalReviewModal
        isOpen={isReviewOpen}
        onClose={closeReview}
        proposal={proposal}
        onSendProposal={handleSendProposal}
      />
    </div>
  );
}
