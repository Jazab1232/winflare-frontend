export type PipelineStageId =
  | "qualified"
  | "proposal_drafting"
  | "applied"
  | "interview"
  | "negotiation"
  | "won";

export type PriorityLevel = "high" | "medium" | "low";

export interface PipelineItem {
  id: string;
  stageId: PipelineStageId;
  company: string;
  role: string;
  companyUrl?: string;
  logoLetter: string;
  logoBg: string;
  matchScore: number;
  salary: string;
  location: string;
  priority: PriorityLevel;
  timeAgo: string;
  extraTime?: string;
  deadline?: string;
}

export interface PipelineStageConfig {
  id: PipelineStageId;
  title: string;
  count: number;
  theme: {
    headerBg: string;
    headerBorder: string;
    badgeBg: string;
    badgeText: string;
    iconColor: string;
  };
}

export interface PipelineSummaryMetric {
  id: string;
  title: string;
  count: number;
  trendText: string;
  isPositive: boolean;
  theme: "purple" | "blue" | "indigo" | "violet" | "amber";
  sparkline: number[];
}

export interface AiRecommendationItem {
  id: string;
  company: string;
  role: string;
  logoLetter: string;
  logoBg: string;
  matchScore: number;
  tagText: string;
  tagType: "danger" | "info" | "warning";
}

export interface PipelineHealthItem {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
}

export interface UpcomingTaskItem {
  id: string;
  title: string;
  company: string;
  time: string;
  isDone: boolean;
}

