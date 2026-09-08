"use client";

import * as React from "react";
import { Search, RefreshCw, Bell, ChevronDown } from "lucide-react";

interface ProposalsHeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export function ProposalsHeader({
  searchQuery,
  onSearchChange,
}: ProposalsHeaderProps) {
  const [isSyncing, setIsSyncing] = React.useState(false);

  const handleSync = () => {
    setIsSyncing(true);
    setTimeout(() => setIsSyncing(false), 900);
  };

  return (
    <header className="sticky top-0 z-20 flex h-16 w-full items-center justify-between border-b border-slate-200/80 bg-white px-6 select-none shrink-0">
      {/* Search Input Bar */}
      <div className="relative flex w-full max-w-xl items-center">
        <Search className="absolute left-3.5 h-4 w-4 text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search proposals, clients, companies, skills..."
          className="h-10 w-full rounded-xl border border-slate-200/90 bg-white pl-10 pr-12 text-xs text-slate-800 placeholder:text-slate-400 shadow-2xs focus:border-[#5B5AF7] focus:outline-none focus:ring-1.5 focus:ring-[#5B5AF7]/20 transition-all"
        />
        <div className="absolute right-3 flex items-center gap-0.5 rounded-md border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[10px] font-medium text-slate-400 select-none">
          <span>⌘</span>
          <span>K</span>
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-4">
        {/* Sync Sources */}
        <button
          type="button"
          onClick={handleSync}
          className="flex items-center gap-2.5 rounded-lg px-2 py-1 text-left transition-colors hover:bg-slate-50 cursor-pointer"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
            <RefreshCw
              className={`h-3.5 w-3.5 ${isSyncing ? "animate-spin" : ""}`}
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xs font-semibold text-slate-800">
              Sync Sources
            </span>
            <span className="text-[10px] text-slate-400">
              Last sync: 12m ago
            </span>
          </div>
        </button>

        {/* Notification Bell */}
        <button
          type="button"
          className="relative flex h-8 w-8 items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors cursor-pointer"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white" />
        </button>

        {/* User Mini Profile */}
        <div className="flex items-center gap-2 pl-1 cursor-pointer">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white font-bold text-xs shadow-2xs">
            NT
          </div>
          <span className="text-xs font-bold text-slate-800">
            Naveed Tahir
          </span>
          <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
        </div>
      </div>
    </header>
  );
}

