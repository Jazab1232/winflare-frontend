"use client";

import * as React from "react";
import { X } from "lucide-react";
import { Sheet } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export interface DetailDrawerTab {
  id: string;
  label: string;
}

export interface DetailDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  badge?: React.ReactNode;
  icon?: React.ReactNode;
  tabs?: DetailDrawerTab[];
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
  actions?: React.ReactNode;
  footer?: React.ReactNode;
  width?: string;
  children: React.ReactNode;
  className?: string;
}

export function DetailDrawer({
  isOpen,
  onClose,
  title,
  subtitle,
  badge,
  icon,
  tabs,
  activeTab,
  onTabChange,
  actions,
  footer,
  width = "w-full sm:max-w-xl md:max-w-2xl",
  children,
  className,
}: DetailDrawerProps) {
  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()} width={width}>
      <div className={cn("flex h-full flex-col bg-white select-none overflow-hidden", className)}>
        {/* Header Bar */}
        <div className="flex items-start justify-between border-b border-slate-100 px-6 py-4 bg-white shrink-0">
          <div className="flex items-center gap-3 min-w-0 pr-4">
            {icon && <div className="shrink-0">{icon}</div>}
            <div className="space-y-0.5 min-w-0">
              {subtitle && (
                <span className="text-[11px] font-medium text-slate-400 block truncate">
                  {subtitle}
                </span>
              )}
              <div className="flex items-center gap-2.5 flex-wrap">
                <h2 className="text-base font-bold text-slate-900 truncate">
                  {title}
                </h2>
                {badge && <div>{badge}</div>}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {actions}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close panel"
              className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Optional Sub-Navigation Tabs */}
        {tabs && tabs.length > 0 && (
          <div className="flex items-center gap-6 px-6 border-b border-slate-100 bg-white text-xs shrink-0 overflow-x-auto custom-scrollbar">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => onTabChange?.(tab.id)}
                  className={cn(
                    "pb-2.5 pt-2 font-medium border-b-2 transition-all cursor-pointer whitespace-nowrap",
                    isActive
                      ? "border-[#5B5AF7] text-[#5B5AF7] font-semibold"
                      : "border-transparent text-slate-500 hover:text-slate-800"
                  )}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Main Scrollable Body */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
          {children}
        </div>

        {/* Optional Sticky Footer */}
        {footer && (
          <div className="border-t border-slate-100 px-6 py-3.5 bg-slate-50/50 flex items-center justify-end gap-2.5 shrink-0">
            {footer}
          </div>
        )}
      </div>
    </Sheet>
  );
}
