"use client";

import * as React from "react";
import Link from "next/link";
import { TrendingUp, ArrowRight } from "lucide-react";

export function GrowthBanner() {
  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div className="flex items-start sm:items-center gap-3.5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EEF2FF] text-[#5B5AF7]">
          <TrendingUp className="h-5 w-5" />
        </div>

        <div className="space-y-0.5">
          <h3 className="text-xs sm:text-sm font-bold text-slate-900">
            Keep growing, you&apos;re on the right track.
          </h3>
          <p className="text-[11px] text-slate-500 max-w-xl leading-relaxed">
            More qualified opportunities, better proposals, and consistent
            follow-ups will help you win more clients.
          </p>
        </div>
      </div>

      <div className="shrink-0">
        <Link
          href="/pipeline"
          className="inline-flex items-center gap-1.5 rounded-xl bg-[#5B5AF7] hover:bg-[#4847E5] px-4 py-2 text-xs font-semibold text-white shadow-xs transition-colors whitespace-nowrap"
        >
          <span>View Growth Plan</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}

