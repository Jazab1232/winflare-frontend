"use client";

import * as React from "react";
import {
  Activity,
  ArrowRight,
  Send,
  MessageSquare,
  FileText,
  Search,
  Crown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { MOCK_RECENT_ACTIVITY } from "../data/mock-data";
import { RecentActivity } from "../types";

function getActivityConfig(type: RecentActivity["iconType"]) {
  switch (type) {
    case "applied":
      return { icon: Send, bg: "bg-sky-50", color: "text-sky-600" };
    case "replied":
      return { icon: MessageSquare, bg: "bg-amber-50", color: "text-amber-600" };
    case "proposal":
      return { icon: FileText, bg: "bg-purple-50", color: "text-purple-600" };
    case "found":
      return { icon: Search, bg: "bg-indigo-50", color: "text-[#5B5AF7]" };
    case "won":
      return { icon: Crown, bg: "bg-emerald-50", color: "text-emerald-600" };
  }
}

export function RecentActivityCard() {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-4.5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-1 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
            <Activity className="h-4 w-4" />
          </div>
          <h3 className="text-sm font-bold tracking-tight text-slate-900">
            Recent Activity
          </h3>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-1 text-xs font-semibold text-[#5B5AF7] hover:text-indigo-700 transition-colors cursor-pointer"
        >
          <span>View all</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Activity Timeline List */}
      <div className="flex flex-col divide-y divide-slate-100">
        {MOCK_RECENT_ACTIVITY.map((item) => {
          const config = getActivityConfig(item.iconType);
          const Icon = config.icon;

          return (
            <div
              key={item.id}
              className="flex items-center justify-between py-2.5 gap-2"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div
                  className={cn(
                    "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg shadow-2xs",
                    config.bg,
                    config.color
                  )}
                >
                  <Icon className="h-3.5 w-3.5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-bold text-slate-900 truncate">
                    {item.title}
                  </span>
                  <span className="text-[11px] text-slate-400 truncate">
                    {item.subtitle}
                  </span>
                </div>
              </div>

              {/* Timestamp */}
              <span className="shrink-0 text-[10px] text-slate-400 font-medium">
                {item.timeAgo}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

