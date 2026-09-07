"use client";

import * as React from "react";
import { ArrowRight, Workflow } from "lucide-react";
import { MOCK_PIPELINE_STAGES } from "../data/mock-data";
import { PipelineColumn } from "./pipeline-column";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function PipelineBoard() {
  const [filter, setFilter] = React.useState("all");

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-4.5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] select-none">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-3.5 mb-1 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-50 text-[#5B5AF7]">
            <Workflow className="h-4 w-4" />
          </div>
          <h2 className="text-sm font-bold tracking-tight text-slate-900">
            Your Pipeline
          </h2>
        </div>

        {/* Right Filter Tabs & View all link */}
        <div className="flex items-center gap-3">
          <Tabs value={filter} onValueChange={setFilter}>
            <TabsList className="bg-slate-100/80 p-0.5 rounded-lg">
              <TabsTrigger value="all" className="px-3 py-1 text-xs">
                All
              </TabsTrigger>
              <TabsTrigger value="freelance" className="px-3 py-1 text-xs">
                Freelance
              </TabsTrigger>
              <TabsTrigger value="full-time" className="px-3 py-1 text-xs">
                Full-time
              </TabsTrigger>
              <TabsTrigger value="contract" className="px-3 py-1 text-xs">
                Contract
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <button
            type="button"
            className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-[#5B5AF7] hover:text-indigo-700 transition-colors cursor-pointer"
          >
            <span>View all</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* 6 Stage Columns Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-2.5 pt-1 overflow-x-auto">
        {MOCK_PIPELINE_STAGES.map((stage) => (
          <PipelineColumn key={stage.id} stage={stage} />
        ))}
      </div>
    </div>
  );
}

