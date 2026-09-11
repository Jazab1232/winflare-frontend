"use client";

import * as React from "react";
import { LucideIcon, Inbox } from "lucide-react";
import { cn } from "@/lib/utils";

export interface EmptyStateProps {
  icon?: LucideIcon;
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
    icon?: LucideIcon;
  };
  className?: string;
  children?: React.ReactNode;
}

export function EmptyState({
  icon: Icon = Inbox,
  title,
  description,
  action,
  className,
  children,
}: EmptyStateProps) {
  const ActionIcon = action?.icon;

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-white p-12 text-center select-none",
        className
      )}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF0FF] text-[#5B5AF7] mb-3 shadow-2xs">
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="text-sm font-bold text-slate-800 tracking-tight">
        {title}
      </h3>

      {description && (
        <p className="text-xs text-slate-400 mt-1 max-w-sm leading-relaxed">
          {description}
        </p>
      )}

      {action && (
        <button
          type="button"
          onClick={action.onClick}
          className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-[#5B5AF7] hover:bg-[#4847E5] px-4 py-2 text-xs font-semibold text-white shadow-2xs transition-all cursor-pointer active:scale-[0.98]"
        >
          {ActionIcon && <ActionIcon className="h-3.5 w-3.5" />}
          <span>{action.label}</span>
        </button>
      )}

      {children}
    </div>
  );
}
