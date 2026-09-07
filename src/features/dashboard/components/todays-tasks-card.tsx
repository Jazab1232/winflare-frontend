"use client";

import * as React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { MOCK_TASKS } from "../data/mock-data";
import { DashboardTask } from "../types";
import { Checkbox } from "@/components/ui/checkbox";

export function TodaysTasksCard() {
  const [tasks, setTasks] = React.useState<DashboardTask[]>(MOCK_TASKS);

  const toggleTask = (taskId: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, completed: !t.completed } : t))
    );
  };

  return (
    <div className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.02)] select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-1 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-[#5B5AF7]" />
          <h3 className="text-sm font-bold tracking-tight text-slate-900">
            Today&apos;s Tasks
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

      {/* Task List */}
      <div className="flex flex-col divide-y divide-slate-100">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between py-2.5 gap-2"
          >
            <div className="flex items-start gap-2.5 min-w-0">
              <div className="pt-0.5">
                <Checkbox
                  checked={task.completed}
                  onCheckedChange={() => toggleTask(task.id)}
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span
                  className={cn(
                    "text-xs font-bold transition-all truncate",
                    task.completed
                      ? "line-through text-slate-400 font-normal"
                      : "text-slate-900"
                  )}
                >
                  {task.title}
                </span>
                <span className="text-[11px] text-slate-400 truncate">
                  {task.subtitle}
                </span>
              </div>
            </div>

            {/* Due Tag */}
            <span
              className={cn(
                "shrink-0 rounded-md border px-2 py-0.5 text-[10px] font-semibold",
                task.dueLabel === "Due now" &&
                  "border-rose-200/80 bg-rose-50 text-rose-600",
                task.dueLabel === "Due today" &&
                  "border-amber-200/80 bg-amber-50 text-amber-600",
                task.dueLabel === "Due tomorrow" &&
                  "border-slate-200 bg-slate-50 text-slate-500"
              )}
            >
              {task.dueLabel}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

