"use client";

import * as React from "react";
import {
  Sparkles,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  CalendarCheck,
  CheckCircle2,
  Circle,
  ExternalLink,
  ArrowUp,
} from "lucide-react";
import {
  AiRecommendationItem,
  PipelineHealthItem,
  UpcomingTaskItem,
} from "../types";
import { cn } from "@/lib/utils";

interface PipelineAiCommandCenterProps {
  recommendations: AiRecommendationItem[];
  healthStats: PipelineHealthItem[];
  tasks: UpcomingTaskItem[];
  onTaskToggle?: (taskId: string) => void;
  onRecommendationClick?: (rec: AiRecommendationItem) => void;
  onAttentionClick?: () => void;
}

export function PipelineAiCommandCenter({
  recommendations,
  healthStats,
  tasks,
  onTaskToggle,
  onRecommendationClick,
  onAttentionClick,
}: PipelineAiCommandCenterProps) {
  const [taskList, setTaskList] = React.useState<UpcomingTaskItem[]>(tasks);

  const handleToggle = (id: string) => {
    setTaskList((prev) =>
      prev.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t))
    );
    onTaskToggle?.(id);
  };

  return (
    <aside className="w-[330px] shrink-0 border-l border-slate-200/80 bg-white p-5 select-none overflow-y-auto custom-scrollbar flex flex-col gap-5">
      {/* Header */}
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-indigo-50 text-[#5B5AF7]">
            <Sparkles className="h-3.5 w-3.5" />
          </div>
          <h2 className="text-sm font-bold tracking-tight text-slate-900">
            AI Command Center
          </h2>
        </div>
        <p className="text-[11px] text-slate-500">
          Insights, recommendations and actions to help you win more.
        </p>
      </div>

      {/* Section 1: Needs Attention */}
      <div
        onClick={onAttentionClick}
        className="group relative flex items-center justify-between rounded-xl border border-rose-200/80 bg-[#FFF8F8] p-3 transition-all hover:border-rose-300 hover:shadow-xs cursor-pointer"
      >
        <div className="flex flex-col gap-1 pr-2">
          <div className="flex items-center gap-1.5 text-rose-600">
            <AlertTriangle className="h-3.5 w-3.5" />
            <span className="text-[11px] font-bold">Needs Attention</span>
          </div>
          <h4 className="text-xs font-bold text-slate-800">
            3 Opportunities Need Follow-Up
          </h4>
          <p className="text-[10.5px] text-slate-500 leading-snug">
            These opportunities haven't had any activity in the last 3 days.
          </p>
        </div>
        <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-rose-600 transition-colors shrink-0" />
      </div>

      {/* Section 2: AI Recommendations */}
      <div className="flex flex-col gap-2.5">
        <div>
          <div className="flex items-center gap-1.5">
            <Sparkles className="h-3 w-3 text-[#5B5AF7]" />
            <h3 className="text-xs font-bold text-slate-900">
              AI Recommendations
            </h3>
          </div>
          <p className="text-[10.5px] text-slate-500">
            See what's worth your attention.
          </p>
        </div>

        {/* List */}
        <div className="flex flex-col gap-2">
          {recommendations.map((rec) => (
            <div
              key={rec.id}
              onClick={() => onRecommendationClick?.(rec)}
              className="group flex items-center justify-between rounded-xl border border-slate-200/80 bg-slate-50/40 p-2.5 transition-all hover:bg-white hover:border-indigo-200 hover:shadow-2xs cursor-pointer"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                {/* Logo */}
                <div
                  className={cn(
                    "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-white font-bold text-xs shadow-2xs",
                    rec.logoBg
                  )}
                >
                  {rec.logoLetter}
                </div>

                {/* Info */}
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-800 truncate">
                      {rec.company}
                    </span>
                    <span className="inline-flex items-center gap-0.5 rounded-full border border-emerald-200 bg-emerald-50 px-1.5 py-0.2 text-[9px] font-semibold text-emerald-700">
                      <ArrowUp className="h-2 w-2" />
                      {rec.matchScore}% Match
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-500 truncate">
                    {rec.role}
                  </span>

                  {/* Status chip */}
                  <div className="mt-1">
                    {rec.tagType === "danger" && (
                      <span className="inline-flex items-center gap-1 rounded-md border border-rose-200/70 bg-rose-50 px-1.5 py-0.5 text-[9px] font-semibold text-rose-600">
                        <span className="h-1 w-1 rounded-full bg-rose-500" />
                        {rec.tagText}
                      </span>
                    )}
                    {rec.tagType === "info" && (
                      <span className="inline-flex items-center gap-1 rounded-md border border-blue-200/70 bg-blue-50 px-1.5 py-0.5 text-[9px] font-semibold text-blue-600">
                        <span className="h-1 w-1 rounded-full bg-blue-500" />
                        {rec.tagText}
                      </span>
                    )}
                    {rec.tagType === "warning" && (
                      <span className="inline-flex items-center gap-1 rounded-md border border-amber-200/70 bg-amber-50 px-1.5 py-0.5 text-[9px] font-semibold text-amber-600">
                        <span className="h-1 w-1 rounded-full bg-amber-500" />
                        {rec.tagText}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-[#5B5AF7] transition-colors shrink-0 ml-2" />
            </div>
          ))}
        </div>

        <button
          type="button"
          className="flex items-center gap-1 text-xs font-semibold text-[#5B5AF7] hover:text-indigo-700 transition-colors pt-1 cursor-pointer"
        >
          <span>View all recommendations</span>
          <ArrowRight className="h-3 w-3" />
        </button>
      </div>

      {/* Section 3: Pipeline Health */}
      <div className="flex flex-col gap-2 border-t border-slate-100 pt-4">
        <div>
          <div className="flex items-center gap-1.5">
            <BarChart3 className="h-3 w-3 text-[#5B5AF7]" />
            <h3 className="text-xs font-bold text-slate-900">
              Pipeline Health
            </h3>
          </div>
          <p className="text-[10.5px] text-slate-500">
            Overall performance of your pipeline.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 pt-1">
          {healthStats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col rounded-xl border border-slate-200/80 bg-slate-50/40 p-2.5"
            >
              <span className="text-[10px] font-medium text-slate-400 truncate">
                {stat.label}
              </span>
              <span className="text-sm font-bold text-slate-900 mt-0.5">
                {stat.value}
              </span>
              <div className="flex items-center gap-0.5 text-[10px] font-semibold text-emerald-600 mt-1">
                <ArrowUp className="h-2.5 w-2.5" />
                <span>{stat.change}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 4: Upcoming Tasks */}
      <div className="flex flex-col gap-2.5 border-t border-slate-100 pt-4">
        <div>
          <div className="flex items-center gap-1.5">
            <CalendarCheck className="h-3 w-3 text-[#5B5AF7]" />
            <h3 className="text-xs font-bold text-slate-900">
              Upcoming Tasks
            </h3>
          </div>
          <p className="text-[10.5px] text-slate-500">
            Stay on top of your actions.
          </p>
        </div>

        {/* Task List */}
        <div className="flex flex-col gap-2">
          {taskList.map((task) => (
            <div
              key={task.id}
              onClick={() => handleToggle(task.id)}
              className="flex items-start gap-2.5 rounded-xl border border-slate-200/80 bg-white p-2.5 transition-all hover:bg-slate-50 cursor-pointer"
            >
              <button
                type="button"
                className="mt-0.5 text-slate-400 hover:text-[#5B5AF7] transition-colors"
              >
                {task.isDone ? (
                  <CheckCircle2 className="h-4 w-4 text-[#5B5AF7]" />
                ) : (
                  <Circle className="h-4 w-4" />
                )}
              </button>

              <div className="flex flex-col min-w-0 flex-1">
                <div className="flex items-center gap-1">
                  <span
                    className={cn(
                      "text-xs font-medium text-slate-800 truncate",
                      task.isDone && "line-through text-slate-400"
                    )}
                  >
                    {task.title}
                  </span>
                  <ExternalLink className="h-2.5 w-2.5 text-slate-400 shrink-0" />
                </div>
                <span className="text-[10px] text-slate-400 mt-0.5">
                  {task.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="flex items-center gap-1 text-xs font-semibold text-[#5B5AF7] hover:text-indigo-700 transition-colors pt-1 cursor-pointer"
        >
          <span>View all tasks</span>
          <ArrowRight className="h-3 w-3" />
        </button>
      </div>
    </aside>
  );
}

