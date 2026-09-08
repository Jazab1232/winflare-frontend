import { create } from "zustand";
import {
  ProposalCardItem,
  ProposalStageId,
  ProposalSection,
  ProposalTemplate,
  ProposalLibraryItem,
  ProposalType,
  ProposalActivity,
} from "../types";
import {
  MOCK_PROPOSAL_ITEMS,
  DEFAULT_PROPOSAL_SECTIONS,
} from "../data/mock-proposals";
import { MOCK_TEMPLATES } from "../data/mock-templates";
import { MOCK_LIBRARY_ITEMS } from "../data/mock-library";

interface ProposalsStoreState {
  proposals: ProposalCardItem[];
  templates: ProposalTemplate[];
  libraryItems: ProposalLibraryItem[];

  // Drawer
  drawerProposal: ProposalCardItem | null;
  isDrawerOpen: boolean;
  openDrawer: (proposal: ProposalCardItem) => void;
  closeDrawer: () => void;

  // Generator Modal
  isGeneratorOpen: boolean;
  generatorInitialData: Partial<ProposalCardItem> | null;
  openGenerator: (initialData?: Partial<ProposalCardItem> | null) => void;
  closeGenerator: () => void;

  // Review Modal
  isReviewOpen: boolean;
  reviewProposal: ProposalCardItem | null;
  openReview: (proposal: ProposalCardItem) => void;
  closeReview: () => void;

  // Actions
  addProposal: (proposal: ProposalCardItem) => void;
  updateProposal: (id: string, updates: Partial<ProposalCardItem>) => void;
  updateSection: (proposalId: string, sectionId: string, newContent: string) => void;
  moveStage: (id: string, stageId: ProposalStageId) => void;
  deleteProposal: (id: string) => void;
  addComment: (proposalId: string, content: string) => void;
  applyRecommendationToProposal: (proposalId: string, recommendationId: string) => void;
  createFromTemplate: (templateId: string, company?: string, role?: string) => ProposalCardItem;
  generateNewProposal: (data: {
    company: string;
    role: string;
    budget: string;
    value: number;
    proposalType: ProposalType;
    requirements?: string[];
    jobDescription?: string;
  }) => ProposalCardItem;
}

export const useProposalsStore = create<ProposalsStoreState>((set, get) => ({
  proposals: MOCK_PROPOSAL_ITEMS,
  templates: MOCK_TEMPLATES,
  libraryItems: MOCK_LIBRARY_ITEMS,

  // Drawer
  drawerProposal: null,
  isDrawerOpen: false,
  openDrawer: (proposal) => set({ drawerProposal: proposal, isDrawerOpen: true }),
  closeDrawer: () => set({ isDrawerOpen: false }),

  // Generator
  isGeneratorOpen: false,
  generatorInitialData: null,
  openGenerator: (initialData = null) =>
    set({ isGeneratorOpen: true, generatorInitialData: initialData }),
  closeGenerator: () => set({ isGeneratorOpen: false, generatorInitialData: null }),

  // Review Modal
  isReviewOpen: false,
  reviewProposal: null,
  openReview: (proposal) => set({ isReviewOpen: true, reviewProposal: proposal }),
  closeReview: () => set({ isReviewOpen: false }),

  // Actions
  addProposal: (proposal) =>
    set((state) => ({ proposals: [proposal, ...state.proposals] })),

  updateProposal: (id, updates) =>
    set((state) => {
      const updatedList = state.proposals.map((p) =>
        p.id === id ? { ...p, ...updates } : p
      );
      const updatedDrawer =
        state.drawerProposal?.id === id
          ? { ...state.drawerProposal, ...updates }
          : state.drawerProposal;
      const updatedReview =
        state.reviewProposal?.id === id
          ? { ...state.reviewProposal, ...updates }
          : state.reviewProposal;
      return {
        proposals: updatedList,
        drawerProposal: updatedDrawer,
        reviewProposal: updatedReview,
      };
    }),

  updateSection: (proposalId, sectionId, newContent) =>
    set((state) => {
      const updatedList = state.proposals.map((p) => {
        if (p.id !== proposalId) return p;
        const newSections = p.sections.map((sec) =>
          sec.id === sectionId
            ? { ...sec, content: newContent, lastEdited: "Just now" }
            : sec
        );
        return { ...p, sections: newSections };
      });
      const updatedDrawer =
        state.drawerProposal?.id === proposalId
          ? {
              ...state.drawerProposal,
              sections: state.drawerProposal.sections.map((sec) =>
                sec.id === sectionId
                  ? { ...sec, content: newContent, lastEdited: "Just now" }
                  : sec
              ),
            }
          : state.drawerProposal;
      return { proposals: updatedList, drawerProposal: updatedDrawer };
    }),

  moveStage: (id, stageId) =>
    set((state) => {
      const updatedList = state.proposals.map((p) =>
        p.id === id
          ? {
              ...p,
              stageId,
              timeInfo:
                stageId === "sent"
                  ? "Sent just now"
                  : stageId === "won"
                  ? "Won just now"
                  : `Updated to ${stageId}`,
              sentAt: stageId === "sent" ? new Date().toISOString().slice(0, 10) : p.sentAt,
              activities: [
                {
                  id: "act-" + Date.now(),
                  title: `Status changed to ${stageId.toUpperCase()}`,
                  description: `Proposal moved to ${stageId} stage`,
                  timestamp: "Just now",
                  iconType: (stageId === "won" ? "win" : stageId === "sent" ? "send" : "edit") as ProposalActivity["iconType"],
                },
                ...(p.activities || []),
              ],
            }
          : p
      );
      const updatedDrawer =
        state.drawerProposal?.id === id
          ? updatedList.find((p) => p.id === id) || null
          : state.drawerProposal;
      return { proposals: updatedList, drawerProposal: updatedDrawer };
    }),

  deleteProposal: (id) =>
    set((state) => ({
      proposals: state.proposals.filter((p) => p.id !== id),
      isDrawerOpen: state.drawerProposal?.id === id ? false : state.isDrawerOpen,
      drawerProposal: state.drawerProposal?.id === id ? null : state.drawerProposal,
    })),

  addComment: (proposalId, content) =>
    set((state) => {
      const newComment = {
        id: "comm-" + Date.now(),
        author: "Naveed Tahir",
        avatar: "NT",
        content,
        timestamp: "Just now",
      };
      const updatedList = state.proposals.map((p) =>
        p.id === proposalId
          ? {
              ...p,
              comments: [newComment, ...(p.comments || [])],
            }
          : p
      );
      const updatedDrawer =
        state.drawerProposal?.id === proposalId
          ? updatedList.find((p) => p.id === proposalId) || null
          : state.drawerProposal;
      return { proposals: updatedList, drawerProposal: updatedDrawer };
    }),

  applyRecommendationToProposal: (proposalId, recommendationId) =>
    set((state) => {
      const updatedList = state.proposals.map((p) => {
        if (p.id !== proposalId) return p;
        let newSections = [...p.sections];
        let newScore = Math.min(98, p.score + 5);

        if (recommendationId === "rec-case-study" || recommendationId.includes("case")) {
          // Append case study to portfolio section
          newSections = newSections.map((sec) =>
            sec.id === "portfolio"
              ? {
                  ...sec,
                  content:
                    sec.content +
                    "\n• FinVault SaaS: Integrated multi-tenant billing & Stripe webhook reconciliation with 99.99% uptime, saving $180k/yr.",
                  lastEdited: "Just now",
                }
              : sec
          );
        } else if (recommendationId.includes("shorten") || recommendationId.includes("intro")) {
          newSections = newSections.map((sec) =>
            sec.id === "intro"
              ? {
                  ...sec,
                  content:
                    "Hello,\n\nI reviewed your requirements for Verve Labs. Speed-to-market, clean architecture, and high conversion are top priorities.\n\nWith 6+ years shipping 30+ production React/Next.js systems, I can lead this project to launch in 4 weeks with zero technical debt.",
                  lastEdited: "Just now",
                }
              : sec
          );
        } else if (recommendationId.includes("saas") || recommendationId.includes("experience")) {
          newSections = newSections.map((sec) =>
            sec.id === "whyme"
              ? {
                  ...sec,
                  content:
                    sec.content +
                    "\n• Proven B2B SaaS architecture: Shipped 5 venture-backed platforms from seed to Series A scale.",
                  lastEdited: "Just now",
                }
              : sec
          );
        }

        return {
          ...p,
          score: newScore,
          sections: newSections,
          activities: [
            {
              id: "act-" + Date.now(),
              title: "AI Recommendation Applied",
              description: `Applied optimization: Score boosted to ${newScore}/100`,
              timestamp: "Just now",
              iconType: "ai" as ProposalActivity["iconType"],
            },
            ...(p.activities || []),
          ],
        };
      });

      const updatedDrawer =
        state.drawerProposal?.id === proposalId
          ? updatedList.find((p) => p.id === proposalId) || null
          : state.drawerProposal;

      return { proposals: updatedList, drawerProposal: updatedDrawer };
    }),

  createFromTemplate: (templateId, company = "New Client Corp", role = "Full Stack Engineer") => {
    const tpl = get().templates.find((t) => t.id === templateId) || get().templates[0];
    const newId = `prop-${Date.now().toString().slice(-4)}`;
    const newProp: ProposalCardItem = {
      id: newId,
      title: `${role} — ${tpl.title}`,
      stageId: "draft",
      company,
      role,
      budget: tpl.pricingModel,
      value: 8500,
      score: 86,
      createdAt: new Date().toISOString().slice(0, 10),
      timeInfo: "Created just now",
      logoLetter: company.slice(0, 1).toUpperCase(),
      logoBg: "bg-[#7C3AED]",
      proposalType: "fixed_price",
      clientContact: {
        name: "Acquisition Team",
        email: `contact@${company.toLowerCase().replace(/\s+/g, "")}.com`,
      },
      opportunityDetails: {
        jobDescription: `Created using Winflare Template: ${tpl.title}`,
        requirements: tpl.tags,
        matchScore: 92,
        timelineExpectation: tpl.timelineDuration,
      },
      sections: tpl.sections.map((s) => ({ ...s })),
      pricingItems: tpl.pricingItems.map((p) => ({ ...p })),
      activities: [
        {
          id: "act-create",
          title: "Created from Template",
          description: `Loaded ${tpl.title}`,
          timestamp: "Just now",
          iconType: "create",
        },
      ],
      versions: [
        {
          version: "v1.0",
          label: `Created from ${tpl.title}`,
          timestamp: "Just now",
          author: "Naveed Tahir",
        },
      ],
    };

    set((state) => ({ proposals: [newProp, ...state.proposals] }));
    return newProp;
  },

  generateNewProposal: ({ company, role, budget, value, proposalType, requirements = [], jobDescription = "" }) => {
    const newId = `prop-${Date.now().toString().slice(-4)}`;
    const sections: ProposalSection[] = DEFAULT_PROPOSAL_SECTIONS.map((sec) => {
      let content = sec.content.replace(/Verve Labs/g, company).replace(/Senior Frontend Developer/g, role);
      if (sec.id === "pricing" && budget) {
        content = `Total Investment: ${budget}\n\nStructured across 3 key milestones with clear sign-off criteria and 30-day post-launch warranty included.`;
      }
      return {
        ...sec,
        content,
        isAiGenerated: true,
        lastEdited: "Just now",
      };
    });

    const newProposal: ProposalCardItem = {
      id: newId,
      title: `${role} Architecture & Execution`,
      stageId: "draft",
      company,
      role,
      budget,
      value: value || 5000,
      score: 89,
      createdAt: new Date().toISOString().slice(0, 10),
      timeInfo: "Created just now",
      logoLetter: company.slice(0, 1).toUpperCase() || "W",
      logoBg: "bg-[#7C3AED]",
      proposalType,
      clientContact: {
        name: `${company} Hiring Lead`,
        email: `hiring@${company.toLowerCase().replace(/\s+/g, "")}.com`,
      },
      opportunityDetails: {
        jobDescription: jobDescription || `Direct opportunity for ${role} at ${company}`,
        requirements: requirements.length > 0 ? requirements : ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        matchScore: 93,
        timelineExpectation: "3-4 Weeks",
      },
      sections,
      pricingItems: [
        { id: "pi-1", description: "Architecture Blueprint & Kickoff", quantity: 1, rate: Math.round(value * 0.3) },
        { id: "pi-2", description: "Core Feature Engineering & Integration", quantity: 1, rate: Math.round(value * 0.45) },
        { id: "pi-3", description: "Testing, Deployment & Handover", quantity: 1, rate: Math.round(value * 0.25) },
      ],
      activities: [
        {
          id: "act-" + Date.now(),
          title: "AI Proposal Generated",
          description: `Custom proposal compiled for ${company}`,
          timestamp: "Just now",
          iconType: "ai",
        },
      ],
      versions: [
        {
          version: "v1.0",
          label: "Initial AI Generated Draft",
          timestamp: "Just now",
          author: "Winflare AI Engine",
        },
      ],
    };

    set((state) => ({ proposals: [newProposal, ...state.proposals] }));
    return newProposal;
  },
}));
