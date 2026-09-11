import * as React from "react";
import { Metadata } from "next";
import { DashboardGreeting } from "@/features/dashboard/components/greeting-banner";
import { MetricStatCard } from "@/features/dashboard/components/metric-stat-card";
import { PipelineBoard } from "@/features/dashboard/components/pipeline-board";
import { ProgressCard } from "@/features/dashboard/components/progress-card";
import { RecentActivityCard } from "@/features/dashboard/components/recent-activity-card";
import { AiRecommendationsCard } from "@/features/dashboard/components/ai-recommendations-card";
import { TodaysTasksCard } from "@/features/dashboard/components/todays-tasks-card";
import { AiPromoBanner } from "@/features/dashboard/components/ai-promo-banner";
import { DashboardTagsFooter } from "@/features/dashboard/components/dashboard-tags-footer";
import { MOCK_METRICS } from "@/features/dashboard/data/mock-data";

export const metadata: Metadata = {
  title: "Dashboard | Winflare",
  description: "AI-Powered Acquisition OS Dashboard for high-ticket freelancers and agencies.",
};

export default function DashboardPage() {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Scrollable canvas */}
      <main className="flex-1 overflow-y-auto custom-scrollbar bg-[#FAFBFF] p-6 lg:p-7">
        <div className="mx-auto max-w-[1520px] flex flex-col gap-5">
          {/* 1. Greeting Row */}
          <DashboardGreeting />

          {/* 2. KPI Summary Stat Cards (5) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {MOCK_METRICS.map((stat) => (
              <MetricStatCard key={stat.id} stat={stat} />
            ))}
          </div>

          {/* 3. Main Grid (Left content + Right rail) */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 items-start">
            {/* Left Column */}
            <div className="xl:col-span-8 2xl:col-span-9 flex flex-col gap-5">
              <PipelineBoard />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <ProgressCard />
                <RecentActivityCard />
              </div>
              <DashboardTagsFooter />
            </div>

            {/* Right Rail */}
            <div className="xl:col-span-4 2xl:col-span-3 flex flex-col gap-5">
              <AiRecommendationsCard />
              <TodaysTasksCard />
              <AiPromoBanner />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
