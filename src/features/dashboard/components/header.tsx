"use client";

import * as React from "react";
import { Search, Bell, Sparkles } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-20 flex h-14 w-full items-center justify-between border-b border-slate-200/80 bg-white/95 px-6 backdrop-blur-xs">
      {/* Search Bar */}
      <div className="relative flex w-full max-w-md items-center">
        <Search className="absolute left-3 h-4 w-4 text-slate-400" />
        <input
          type="text"
          placeholder="Search opportunities, companies, contacts..."
          className="h-9 w-full rounded-xl border border-slate-200/90 bg-white pl-9 pr-12 text-xs text-slate-800 placeholder:text-slate-400 shadow-2xs focus:border-[#5B5AF7] focus:outline-none focus:ring-1.5 focus:ring-[#5B5AF7]"
        />
        <div className="absolute right-2.5 flex items-center gap-0.5 rounded-md border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[10px] font-medium text-slate-400 select-none">
          <span>⌘</span>
          <span>K</span>
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-4">
        {/* Notification Bell */}
        <button
          type="button"
          aria-label="Notifications"
          className="relative flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white" />
        </button>

        {/* AI Assistant Pill Button */}
        <button
          type="button"
          className="flex items-center gap-1.5 rounded-full border border-indigo-100 bg-[#F0EEFF] px-3.5 py-1.5 text-xs font-semibold text-[#5B5AF7] transition-all hover:bg-indigo-100/90 active:scale-[0.98] shadow-2xs"
        >
          <Sparkles className="h-3.5 w-3.5 text-[#5B5AF7]" />
          <span>AI Assistant</span>
        </button>

        {/* User Mini Profile */}
        <div className="flex items-center gap-2.5 pl-1 select-none">
          <Avatar className="h-8 w-8 rounded-full border border-slate-200 ring-1 ring-slate-100">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120"
              alt="Jazab Ahmed"
              className="h-full w-full object-cover"
            />
          </Avatar>
          <div className="flex flex-col leading-tight">
            <span className="text-xs font-bold text-slate-800">
              Jazab Ahmed
            </span>
            <span className="text-[11px] text-slate-400">Freelancer</span>
          </div>
        </div>
      </div>
    </header>
  );
}

