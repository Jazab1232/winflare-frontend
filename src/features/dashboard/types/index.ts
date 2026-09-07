import { LucideIcon } from "lucide-react";

export type ColorTheme =
  | "purple"
  | "green"
  | "blue"
  | "pink"
  | "amber"
  | "teal";

export interface MetricStat {
  id: string;
  title: string;
  value: string;
  changePercent: string;
  isPositive: boolean;
  period: string;
  theme: ColorTheme;
  sparkline: number[];
  iconName: "Search" | "Check" | "MessageSquare" | "Inbox" | "Crown";
}

export interface PipelineJob {
  id: string;
  title: string;
  company: string;
  companyShort: string;
  avatarBg: string;
  avatarColor: string;
  salary: string;
  locationType: "Remote" | "On-site" | "Hybrid" | string;
  matchScore: number;
  stageId: "saved" | "qualified" | "applied" | "replied" | "interview" | "won";
}

export interface PipelineStage {
  id: "saved" | "qualified" | "applied" | "replied" | "interview" | "won";
  name: string;
  count: number;
  moreCount: number;
  theme: ColorTheme;
  jobs: PipelineJob[];
}

export interface AiRecommendation {
  id: string;
  title: string;
  company: string;
  salary: string;
  locationType: string;
  matchScore: number;
  actionText: "Apply" | "Send" | "Generate" | "View";
  actionVariant: "primary" | "ghost";
  iconType: "doc-bolt" | "message-send" | "file-generate" | "portfolio-view";
}

export interface DashboardTask {
  id: string;
  title: string;
  subtitle: string;
  dueLabel: "Due now" | "Due today" | "Due tomorrow";
  completed: boolean;
}

export interface RecentActivity {
  id: string;
  title: string;
  subtitle: string;
  timeAgo: string;
  iconType: "applied" | "replied" | "proposal" | "found" | "won";
}

export interface ProgressSummaryMetric {
  id: string;
  title: string;
  value: string;
  changePercent: string;
  iconName: "Search" | "Send" | "MessageCircle" | "Crown";
}

export interface CountryStat {
  code: string;
  name: string;
  flag: string;
  count: number;
}

