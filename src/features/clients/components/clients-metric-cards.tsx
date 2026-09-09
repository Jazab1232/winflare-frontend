"use client";

import * as React from "react";
import { Users, Folder, DollarSign, TrendingUp } from "lucide-react";
import { ClientSummaryMetrics } from "../types";

interface ClientsMetricCardsProps {
  metrics: ClientSummaryMetrics;
}

export function ClientsMetricCards({ metrics }: ClientsMetricCardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* 1. Total Clients */}
      <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs space-y-3 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EEF2FF] text-[#5B5AF7]">
            <Users className="h-4 w-4" />
          </div>
          <span className="text-xs text-slate-400">
            <Users className="h-3.5 w-3.5" />
          </span>
        </div>

        <div>
          <span className="text-xs font-medium text-slate-500 block">
            Total Clients
          </span>
          <p className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
            {metrics.totalClients.count}
          </p>
        </div>

        <div className="pt-1">
          <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
            {metrics.totalClients.trend}
          </span>
        </div>
      </div>

      {/* 2. Active Projects */}
      <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs space-y-3 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EEF2FF] text-[#5B5AF7]">
            <Folder className="h-4 w-4" />
          </div>
          <span className="text-xs text-slate-400">
            <Folder className="h-3.5 w-3.5" />
          </span>
        </div>

        <div>
          <span className="text-xs font-medium text-slate-500 block">
            Active Projects
          </span>
          <p className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
            {metrics.activeProjects.count}
          </p>
        </div>

        <div className="pt-1">
          <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
            {metrics.activeProjects.trend}
          </span>
        </div>
      </div>

      {/* 3. Monthly Revenue */}
      <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs space-y-3 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
            <DollarSign className="h-4 w-4" />
          </div>
          <span className="text-xs text-slate-400">
            ↑
          </span>
        </div>

        <div>
          <span className="text-xs font-medium text-slate-500 block">
            Monthly Revenue
          </span>
          <p className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
            ${metrics.monthlyRevenue.count.toLocaleString()}
          </p>
        </div>

        <div className="pt-1">
          <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
            {metrics.monthlyRevenue.trend}
          </span>
        </div>
      </div>

      {/* 4. Lifetime Revenue */}
      <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs space-y-3 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EEF2FF] text-[#5B5AF7]">
            <TrendingUp className="h-4 w-4" />
          </div>
          <span className="text-xs text-slate-400">
            <TrendingUp className="h-3.5 w-3.5" />
          </span>
        </div>

        <div>
          <span className="text-xs font-medium text-slate-500 block">
            Lifetime Revenue
          </span>
          <p className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
            ${metrics.lifetimeRevenue.count.toLocaleString()}
          </p>
        </div>

        <div className="pt-1">
          <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
            {metrics.lifetimeRevenue.trend}
          </span>
        </div>
      </div>
    </div>
  );
}
