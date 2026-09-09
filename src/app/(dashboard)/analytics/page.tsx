"use client";

import * as React from "react";
import { Calendar, ChevronDown } from "lucide-react";
import { AnalyticsHeader } from "@/features/analytics/components/analytics-header";
import { KpiMetricCards } from "@/features/analytics/components/kpi-metric-cards";
import { AIInsightsCard } from "@/features/analytics/components/ai-insights-card";
import { ClientAcquisitionFunnel } from "@/features/analytics/components/client-acquisition-funnel";
import { OpportunitySourcesCard } from "@/features/analytics/components/opportunity-sources-card";
import { ProposalPerformanceCard } from "@/features/analytics/components/proposal-performance-card";
import { RevenueAnalyticsCard } from "@/features/analytics/components/revenue-analytics-card";
import { ClientAnalyticsCard } from "@/features/analytics/components/client-analytics-card";
import { GrowthBanner } from "@/features/analytics/components/growth-banner";
import { cn } from "@/lib/utils";

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = React.useState<"7D" | "30D" | "90D" | "1Y" | "custom">("30D");
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-[#FAFBFF] text-slate-900">
      {/* 1. Sticky Top Navigation Header */}
      <AnalyticsHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* 2. Main Scrollable Dashboard Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6">
        {/* Title Bar & Date Range Selector */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Analytics
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Understand what&apos;s driving more clients and revenue.
            </p>
          </div>

          <div className="flex items-center gap-3 select-none flex-wrap">
            {/* Last 30 Days Dropdown */}
            <div className="relative">
              <button
                type="button"
                className="flex items-center gap-2 rounded-xl border border-slate-200/90 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-2xs hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <Calendar className="h-3.5 w-3.5 text-slate-400" />
                <span>Last 30 Days</span>
                <ChevronDown className="h-3 w-3 text-slate-400 ml-0.5" />
              </button>
            </div>

            {/* Time range segmented pills: 7D | 30D | 90D | 1Y | Custom */}
            <div className="flex items-center rounded-xl border border-slate-200/90 bg-white p-0.5 shadow-2xs">
              {(["7D", "30D", "90D", "1Y"] as const).map((range) => (
                <button
                  key={range}
                  type="button"
                  onClick={() => setTimeRange(range)}
                  className={cn(
                    "rounded-lg px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer",
                    timeRange === range
                      ? "bg-[#5B5AF7] text-white shadow-2xs"
                      : "text-slate-600 hover:text-slate-900"
                  )}
                >
                  {range}
                </button>
              ))}

              <button
                type="button"
                onClick={() => setTimeRange("custom")}
                className={cn(
                  "flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-all cursor-pointer",
                  timeRange === "custom"
                    ? "bg-[#5B5AF7] text-white shadow-2xs"
                    : "text-slate-600 hover:text-slate-900"
                )}
              >
                <span>Custom</span>
                <ChevronDown className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Section 1: Top Area with 2-Column Split (Left 3/4 KPIs + Funnel & Sources, Right 1/4 AI Insights) */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
          {/* Left / Middle: 75% width */}
          <div className="xl:col-span-9 space-y-6">
            {/* Row 1 & 2: Top KPI Metric Cards */}
            <KpiMetricCards />

            {/* Row 3: Client Acquisition Funnel + Opportunity Sources */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7">
                <ClientAcquisitionFunnel />
              </div>
              <div className="lg:col-span-5">
                <OpportunitySourcesCard />
              </div>
            </div>
          </div>

          {/* Right: AI Insights Stack (spans full height of top section) */}
          <div className="xl:col-span-3 h-full">
            <AIInsightsCard />
          </div>
        </div>

        {/* Section 2: Proposal Performance & Revenue Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5">
            <ProposalPerformanceCard />
          </div>
          <div className="lg:col-span-7">
            <RevenueAnalyticsCard />
          </div>
        </div>

        {/* Section 3: Bottom Row - Client Analytics (Left) & Growth Banner (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8">
            <ClientAnalyticsCard />
          </div>
          <div className="lg:col-span-4">
            <GrowthBanner />
          </div>
        </div>
      </div>
    </div>
  );
}

