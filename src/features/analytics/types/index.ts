export interface MetricCardItem {
  id: string;
  title: string;
  value: string;
  change: string;
  changeType: "increase" | "decrease" | "neutral";
  subtitle: string;
  icon: string;
}

export interface FunnelStage {
  name: string;
  count: number;
  rate?: string;
  dropoffRate?: string;
  color: string;
}

export interface ConversionRateItem {
  label: string;
  value: string;
  subtext: string;
}

export interface OpportunitySourceItem {
  source: string;
  count: number;
  percentage: number;
  wonCount: number;
  color: string;
}

export interface TemplatePerformanceItem {
  name: string;
  winRate: number;
  color: string;
}

export interface RevenueDataPoint {
  month: string;
  revenue: number;
  formatted: string;
}

export interface AIInsightItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  iconBg: string;
  iconColor: string;
}

export interface ClientSpotlightItem {
  id: string;
  tag: string;
  badge?: {
    text: string;
    variant: "vip" | "retainer";
  };
  name: string;
  avatarLetter?: string;
  avatarBg?: string;
  icon?: string;
  metric: string;
}

