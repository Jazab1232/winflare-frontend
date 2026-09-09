"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import { MOCK_CLIENT_SPOTLIGHTS } from "../data/mock-analytics";
import { cn } from "@/lib/utils";

export function ClientAnalyticsCard() {
  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-sm font-bold text-slate-900">Client Analytics</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Understand your clients and revenue contribution.
          </p>
        </div>

        <Link
          href="/clients"
          className="inline-flex items-center gap-1 text-xs font-semibold text-[#5B5AF7] hover:underline"
        >
          <span>View All Clients</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* 4 Client Spotlight Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {MOCK_CLIENT_SPOTLIGHTS.map((item) => (
          <div
            key={item.id}
            className="rounded-xl border border-slate-200/70 bg-[#FAFBFF] p-3.5 flex flex-col justify-between space-y-3"
          >
            {/* Top Row: Tag & Badge */}
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-medium text-slate-400">
                {item.tag}
              </span>

              {item.badge && (
                <span
                  className={cn(
                    "rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider",
                    item.badge.variant === "vip"
                      ? "bg-amber-50 text-amber-700 border border-amber-200/80"
                      : "bg-emerald-50 text-emerald-700 border border-emerald-200/80"
                  )}
                >
                  {item.badge.text}
                </span>
              )}
            </div>

            {/* Bottom Row: Avatar + Name + Metric */}
            <div className="flex items-center gap-2.5">
              {item.icon === "zap" ? (
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EEF2FF] text-[#5B5AF7] shadow-2xs">
                  <Zap className="h-4 w-4 fill-current" />
                </div>
              ) : (
                <div
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-bold text-xs shadow-2xs text-white",
                    item.avatarBg
                  )}
                >
                  {item.avatarLetter}
                </div>
              )}

              <div className="min-w-0">
                <span className="font-bold text-slate-900 text-xs truncate block leading-tight">
                  {item.name}
                </span>
                <span className="text-[11px] text-slate-400 font-medium block mt-0.5 truncate">
                  {item.metric}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

