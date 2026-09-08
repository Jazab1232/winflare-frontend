export type ProposalStageId = "draft" | "review" | "ready" | "sent" | "won";

export type ProposalPriority = "high" | "medium" | "low";

export interface ProposalBadge {
  label: string;
  type: "value" | "review" | "high" | "medium" | "low";
}

export interface ProposalCardItem {
  id: string;
  stageId: ProposalStageId;
  company: string;
  role: string;
  budget: string; // e.g. "$5,000 Project"
  score: number;
  priority?: ProposalPriority;
  badges?: ProposalBadge[];
  timeInfo: string; // e.g. "Created 2 days ago" or "Sent 2 days ago" or "Won 1 day ago"
  statusBadge?: string; // e.g. "Awaiting Reply" or "Client Hired"
  statusType?: "awaiting" | "hired";
  logoLetter: string;
  logoBg: string;
}

export interface ProposalStageConfig {
  id: ProposalStageId;
  title: string;
  count?: number;
  theme: {
    headerBg: string;
    headerBorder: string;
    badgeBg: string;
    badgeText: string;
  };
}

export interface ProposalSummaryMetric {
  id: string;
  title: string;
  count: string | number;
  trendText: string;
  isPositive: boolean;
  theme: "blue" | "cyan" | "amber" | "purple";
  sparkline: number[];
}

export interface WinningAssetItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: "FileText" | "Image" | "Tag" | "MessageSquare";
  iconColor: string;
  iconBg: string;
}

export interface AiSuggestionItem {
  id: string;
  title: string;
  company: string;
  score: number;
  potentialText: string;
  recommendationText: string;
}

