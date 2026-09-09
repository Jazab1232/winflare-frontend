import {
  MetricCardItem,
  FunnelStage,
  ConversionRateItem,
  OpportunitySourceItem,
  TemplatePerformanceItem,
  RevenueDataPoint,
  AIInsightItem,
  ClientSpotlightItem,
} from "../types";

export const MOCK_TOP_METRICS_ROW_1: MetricCardItem[] = [
  {
    id: "opps-found",
    title: "Opportunities Found",
    value: "1,284",
    change: "↑ 24%",
    changeType: "increase",
    subtitle: "vs. previous 30 days",
    icon: "search",
  },
  {
    id: "qualified",
    title: "Qualified",
    value: "342",
    change: "↑ 18%",
    changeType: "increase",
    subtitle: "vs. previous 30 days",
    icon: "filter",
  },
  {
    id: "proposals-sent",
    title: "Proposals Sent",
    value: "118",
    change: "↑ 32%",
    changeType: "increase",
    subtitle: "vs. previous 30 days",
    icon: "file-text",
  },
  {
    id: "clients-won",
    title: "Clients Won",
    value: "24",
    change: "↑ 71%",
    changeType: "increase",
    subtitle: "vs. previous 30 days",
    icon: "user",
  },
];

export const MOCK_TOP_METRICS_ROW_2: MetricCardItem[] = [
  {
    id: "win-rate",
    title: "Win Rate",
    value: "20%",
    change: "↑ 6%",
    changeType: "increase",
    subtitle: "vs. previous 30 days",
    icon: "target",
  },
  {
    id: "avg-deal-val",
    title: "Average Deal Value",
    value: "$4,800",
    change: "↑ 12%",
    changeType: "increase",
    subtitle: "vs. previous 30 days",
    icon: "coins",
  },
  {
    id: "rev-generated",
    title: "Revenue Generated",
    value: "$115,000",
    change: "↑ 38%",
    changeType: "increase",
    subtitle: "vs. previous 30 days",
    icon: "dollar",
  },
];

export const MOCK_FUNNEL_STAGES: FunnelStage[] = [
  {
    name: "Opportunities",
    count: 1284,
    rate: "—",
    color: "#818CF8", // light indigo
  },
  {
    name: "Qualified",
    count: 342,
    rate: "27%",
    color: "#6366F1", // indigo
  },
  {
    name: "Pipeline",
    count: 180,
    rate: "53%",
    color: "#4F46E5", // deeper indigo
  },
  {
    name: "Proposals",
    count: 118,
    rate: "34%",
    color: "#4338CA", // violet-indigo
  },
  {
    name: "Interviews",
    count: 44,
    rate: "37%",
    color: "#3730A3", // dark indigo
  },
  {
    name: "Won",
    count: 24,
    rate: "20%",
    color: "#5B5AF7", // Winflare signature purple
  },
];

export const MOCK_CONVERSION_RATES: ConversionRateItem[] = [
  {
    label: "Qualified Rate",
    value: "27%",
    subtext: "1,284 → 342",
  },
  {
    label: "Pipeline Rate",
    value: "53%",
    subtext: "342 → 180",
  },
  {
    label: "Proposal Rate",
    value: "34%",
    subtext: "180 → 118",
  },
  {
    label: "Close Rate",
    value: "20%",
    subtext: "118 → 24",
  },
];

export const MOCK_OPPORTUNITY_SOURCES: OpportunitySourceItem[] = [
  {
    source: "LinkedIn",
    count: 420,
    percentage: 33,
    wonCount: 18,
    color: "#4338CA",
  },
  {
    source: "Indeed",
    count: 342,
    percentage: 27,
    wonCount: 9,
    color: "#3B82F6",
  },
  {
    source: "Wellfound",
    count: 248,
    percentage: 19,
    wonCount: 7,
    color: "#06B6D4",
  },
  {
    source: "Manual Import",
    count: 186,
    percentage: 14,
    wonCount: 5,
    color: "#10B981",
  },
  {
    source: "Others",
    count: 88,
    percentage: 7,
    wonCount: 2,
    color: "#94A3B8",
  },
];

export const MOCK_TEMPLATE_PERFORMANCES: TemplatePerformanceItem[] = [
  {
    name: "Template A",
    winRate: 43,
    color: "#5B5AF7",
  },
  {
    name: "Template B",
    winRate: 21,
    color: "#5B5AF7",
  },
  {
    name: "Template C",
    winRate: 18,
    color: "#5B5AF7",
  },
];

export const MOCK_REVENUE_TREND: RevenueDataPoint[] = [
  { month: "Jan", revenue: 5000, formatted: "$5k" },
  { month: "Feb", revenue: 6500, formatted: "$6.5k" },
  { month: "Mar", revenue: 8500, formatted: "$8.5k" },
  { month: "Apr", revenue: 11000, formatted: "$11k" },
  { month: "May", revenue: 14000, formatted: "$14k" },
  { month: "Jun", revenue: 18400, formatted: "$18.4k" },
];

export const MOCK_AI_INSIGHTS: AIInsightItem[] = [
  {
    id: "insight-1",
    title: "LinkedIn opportunities convert 2.3x better than Indeed.",
    description: "Consider focusing more on LinkedIn for better quality leads.",
    icon: "message",
    iconBg: "bg-[#EEF2FF]",
    iconColor: "text-[#5B5AF7]",
  },
  {
    id: "insight-2",
    title: "Proposals under 700 words win more frequently.",
    description: "Your win rate is 28% higher for shorter proposals.",
    icon: "diamond",
    iconBg: "bg-[#EEF2FF]",
    iconColor: "text-[#5B5AF7]",
  },
  {
    id: "insight-3",
    title: "Your response rate drops after 48 hours.",
    description: "Try following up within 24 hours for better results.",
    icon: "clock",
    iconBg: "bg-[#EEF2FF]",
    iconColor: "text-[#5B5AF7]",
  },
  {
    id: "insight-4",
    title: "SaaS opportunities have the highest close rate.",
    description: "28% close rate vs. 12% for other industries.",
    icon: "target",
    iconBg: "bg-[#EEF2FF]",
    iconColor: "text-[#5B5AF7]",
  },
];

export const MOCK_CLIENT_SPOTLIGHTS: ClientSpotlightItem[] = [
  {
    id: "spotlight-verve",
    tag: "Top Client",
    badge: {
      text: "VIP",
      variant: "vip",
    },
    name: "Verve Labs",
    avatarLetter: "V",
    avatarBg: "bg-[#0F172A]",
    metric: "$18,000 revenue",
  },
  {
    id: "spotlight-acme",
    tag: "Highest Revenue",
    badge: {
      text: "Retainer",
      variant: "retainer",
    },
    name: "Acme Inc",
    avatarLetter: "A",
    avatarBg: "bg-[#3B82F6]",
    metric: "$12,500 revenue",
  },
  {
    id: "spotlight-nova",
    tag: "Longest Relationship",
    name: "Nova Digital",
    avatarLetter: "N",
    avatarBg: "bg-[#E0F2FE] text-sky-700",
    metric: "8 months",
  },
  {
    id: "spotlight-helix",
    tag: "Fastest Closing Client",
    name: "Helix Solutions",
    icon: "zap",
    avatarBg: "bg-[#EEF2FF] text-[#5B5AF7]",
    metric: "7 days",
  },
];

