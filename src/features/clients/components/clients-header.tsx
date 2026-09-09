"use client";

import * as React from "react";
import { Search, Bell, ChevronDown } from "lucide-react";

interface ClientsHeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export function ClientsHeader({
  searchQuery,
  onSearchChange,
}: ClientsHeaderProps) {
  return (
    <header className="sticky top-0 z-20 flex h-14 w-full items-center justify-between border-b border-slate-200/80 bg-white px-6 select-none shrink-0">
      {/* Search Input Bar */}
      <div className="relative flex w-full max-w-md items-center">
        <Search className="absolute left-3.5 h-4 w-4 text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search clients, companies, projects..."
          className="h-9 w-full rounded-xl border border-slate-200/90 bg-[#F8FAFC] pl-10 pr-12 text-xs text-slate-800 placeholder:text-slate-400 shadow-2xs focus:border-[#5B5AF7] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#5B5AF7]"
        />
        <div className="absolute right-2.5 flex items-center gap-0.5 rounded border border-slate-200 bg-white px-1.5 py-0.5 text-[9px] font-medium text-slate-400 select-none">
          <span>⌘</span>
          <span>K</span>
        </div>
      </div>

      {/* Right Controls: Bell + Profile NT Naveed Tahir */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          title="Notifications"
        >
          <Bell className="h-4 w-4" />
        </button>

        {/* User Profile matching screenshot */}
        <div className="flex items-center gap-2.5 pl-1 cursor-pointer select-none">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0F172A] text-white font-bold text-xs shadow-2xs">
            NT
          </div>
          <span className="text-xs font-bold text-slate-900">
            Naveed Tahir
          </span>
          <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
        </div>
      </div>
    </header>
  );
}
