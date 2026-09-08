export type ProposalStageId = "draft" | "review" | "ready" | "sent" | "won" | "lost";

export type ProposalPriority = "high" | "medium" | "low";

export type ProposalType = "freelance" | "agency" | "consulting" | "fixed_price" | "hourly";

export interface ProposalBadge {
  label: string;
  type: "value" | "review" | "high" | "medium" | "low";
}

export interface ProposalSection {
  id: string;
  title: string;
  subtitle?: string;
  content: string;
  isAiGenerated?: boolean;
  lastEdited?: string;
}

export interface ProposalPricingItem {
  id: string;
  description: string;
  quantity: number;
  rate: number;
  unit?: string;
}

export interface ProposalComment {
  id: string;
  author: string;
  avatar?: string;
  content: string;
  timestamp: string;
}

export interface ProposalActivity {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  iconType: "create" | "ai" | "edit" | "score" | "send" | "win";
}

export interface ProposalVersion {
  version: string;
  label: string;
  timestamp: string;
  author: string;
}

export interface ProposalCardItem {
  id: string;
  title: string;
  stageId: ProposalStageId;
  company: string;
  role: string;
  budget: string; // e.g. "$5,000 Project"
  value: number; // numeric value in USD, e.g. 5000
  score: number; // e.g. 89
  priority?: ProposalPriority;
  badges?: ProposalBadge[];
  createdAt: string;
  sentAt?: string;
  timeInfo: string; // e.g. "Created 2 days ago" or "Sent 2 days ago"
  statusBadge?: string;
  statusType?: "awaiting" | "hired" | "lost";
  logoLetter: string;
  logoBg: string;
  proposalType: ProposalType;
  
  // Rich details for editor, drawer & generation
  clientContact?: {
    name: string;
    email: string;
    companySize?: string;
    location?: string;
    timezone?: string;
  };
  opportunityDetails?: {
    jobDescription: string;
    requirements: string[];
    matchScore: number;
    timelineExpectation?: string;
  };
  sections: ProposalSection[];
  pricingItems?: ProposalPricingItem[];
  versions?: ProposalVersion[];
  comments?: ProposalComment[];
  activities?: ProposalActivity[];
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

export interface ProposalTemplate {
  id: string;
  title: string;
  category: "Web Development" | "Mobile Apps" | "SaaS" | "UI/UX" | "Marketing" | "Consulting";
  description: string;
  sectionsCount: number;
  winRate: string;
  timesUsed: number;
  timelineDuration: string;
  pricingModel: string;
  tags: string[];
  sections: ProposalSection[];
  pricingItems: ProposalPricingItem[];
}

export interface ProposalLibraryItem {
  id: string;
  category: "introductions" | "case_studies" | "testimonials" | "pricing" | "faqs" | "services";
  title: string;
  content: string;
  tags: string[];
  timesUsed: number;
  winRateBoost?: string;
}

export interface ProposalReviewCheck {
  id: string;
  name: string;
  score: number;
  maxScore: number;
  status: "excellent" | "good" | "warning";
  feedback: string;
}

export interface ProposalReviewRecommendation {
  id: string;
  title: string;
  description: string;
  impact: string;
  applied?: boolean;
}

export interface ProposalReviewData {
  proposalId: string;
  overallScore: number;
  checks: ProposalReviewCheck[];
  recommendations: ProposalReviewRecommendation[];
}

export interface AiChatMessage {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: string;
  appliedSectionId?: string;
  suggestedContent?: string;
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

