"use client";

import * as React from "react";
import {
  Search,
  Filter,
  FileText,
  User,
  Target,
  Coins,
  DollarSign,
} from "lucide-react";
import { MetricCardItem } from "../types";
import {
  MOCK_TOP_METRICS_ROW_1,
  MOCK_TOP_METRICS_ROW_2,
} from "../data/mock-analytics";

interface KpiMetricCardsProps {
  row1Metrics?: MetricCardItem[];
  row2Metrics?: MetricCardItem[];
}

function getIconComponent(iconName: string) {
  switch (iconName) {
    case "search":
      return Search;
    case "filter":
      return Filter;
    case "file-text":
      return FileText;
    case "user":
      return User;
    case "target":
      return Target;
    case "coins":
      return Coins;
    case "dollar":
      return DollarSign;
    default:
      return Search;
  }
}

function MetricCard({ metric }: { metric: MetricCardItem }) {
  const Icon = getIconComponent(metric.icon);

  return (
    <div className="flex items-start gap-3.5 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-2xs">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EEF2FF] text-[#5B5AF7]">
        <Icon className="h-4 w-4" />
      </div>

      <div className="flex flex-col min-w-0">
        <span className="text-[11px] font-medium text-slate-500 truncate">
          {metric.title}
        </span>
        <span className="text-xl font-bold text-slate-900 tracking-tight mt-0.5">
          {metric.value}
        </span>
        <div className="flex items-center gap-1 mt-1">
          <span className="text-xs font-semibold text-emerald-600">
            {metric.change}
          </span>
          <span className="text-[10px] text-slate-400 font-normal truncate">
            {metric.subtitle}
          </span>
        </div>
      </div>
    </div>
  );
}

export function KpiMetricCards({
  row1Metrics = MOCK_TOP_METRICS_ROW_1,
  row2Metrics = MOCK_TOP_METRICS_ROW_2,
}: KpiMetricCardsProps) {
  return (
    <div className="space-y-4">
      {/* Row 1: 4 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {row1Metrics.map((metric) => (
          <MetricCard key={metric.id} metric={metric} />
        ))}
      </div>

      {/* Row 2: 3 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {row2Metrics.map((metric) => (
          <MetricCard key={metric.id} metric={metric} />
        ))}
      </div>
    </div>
  );
}

