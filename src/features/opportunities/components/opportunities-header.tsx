"use client";

import * as React from "react";
import { Search, RefreshCw, Bookmark, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface OpportunitiesHeaderProps {
  searchQuery?: string;
  onSearchChange?: (val: string) => void;
  onNewSearch?: () => void;
  onSavedSearches?: () => void;
}

export function OpportunitiesHeader({
  searchQuery = "",
  onSearchChange,
  onNewSearch,
  onSavedSearches,
}: OpportunitiesHeaderProps) {
  const [isSyncing, setIsSyncing] = React.useState(false);

  const handleSync = () => {
    setIsSyncing(true);
    setTimeout(() => setIsSyncing(false), 800);
  };

  return (
    <header className="sticky top-0 z-20 flex h-14 w-full items-center justify-between border-b border-slate-200/80 bg-white/95 px-6 backdrop-blur-xs select-none">
      {/* Search Input Bar */}
      <div className="relative flex w-full max-w-lg items-center">
        <Search className="absolute left-3 h-4 w-4 text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange?.(e.target.value)}
          placeholder="Search opportunities, job titles, companies, skills..."
          className="h-9 w-full rounded-xl border border-slate-200/90 bg-white pl-9 pr-12 text-xs text-slate-800 placeholder:text-slate-400 shadow-2xs focus:border-[#5B5AF7] focus:outline-none focus:ring-1.5 focus:ring-[#5B5AF7]"
        />
        <div className="absolute right-2.5 flex items-center gap-0.5 rounded-md border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[10px] font-medium text-slate-400 select-none">
          <span>⌘</span>
          <span>K</span>
        </div>
      </div>

      {/* Action Controls on Right */}
      <div className="flex items-center gap-4">
        {/* Sync Sources Indicator */}
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
              Last sync 12m ago
            </span>
          </div>
        </button>

        {/* Saved Searches Button */}
        <Button
          variant="outline"
          size="sm"
          onClick={onSavedSearches}
          className="h-9 rounded-xl border-slate-200/90 text-xs font-semibold text-slate-700 shadow-2xs hover:bg-slate-50 gap-1.5"
        >
          <Bookmark className="h-3.5 w-3.5 text-slate-500" />
          <span>Saved Searches</span>
        </Button>

        {/* New Search Button */}
        <Button
          variant="default"
          size="sm"
          onClick={onNewSearch}
          className="h-9 rounded-xl bg-[#5B5AF7] hover:bg-[#4847E5] text-xs font-semibold text-white shadow-xs gap-1.5 px-3.5"
        >
          <Plus className="h-4 w-4 stroke-[2.5]" />
          <span>New Search</span>
        </Button>
      </div>
    </header>
  );
}
