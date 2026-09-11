import * as React from "react";
import {
  Calendar,
  ChevronDown,
  Filter,
  SlidersHorizontal,
  Kanban,
  List,
  Plus,
  Download,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PageHeader } from "@/components/dashboard";

interface PipelineTitleBarProps {
  onFilterClick?: () => void;
  onSortClick?: () => void;
  viewMode?: "board" | "list";
  onViewModeChange?: (mode: "board" | "list") => void;
  onNewOpportunity?: () => void;
  onExport?: () => void;
  isAiOpen?: boolean;
  onToggleAi?: () => void;
}

export function PipelineTitleBar({
  onFilterClick,
  onSortClick,
  viewMode = "board",
  onViewModeChange,
  onNewOpportunity,
  onExport,
  isAiOpen = false,
  onToggleAi,
}: PipelineTitleBarProps) {
  const [selectedRange, setSelectedRange] = React.useState("Last 30 days");
  const [isRangeOpen, setIsRangeOpen] = React.useState(false);

  const ranges = ["Last 7 days", "Last 30 days", "Last 90 days", "This Year"];

  return (
    <div className="py-4 px-6 select-none shrink-0">
      <PageHeader
        title="Pipeline"
        description="Track every opportunity from discovery to signed client."
        actions={
          <div className="flex items-center gap-2.5">
            {/* AI Command Center Toggle */}
            {onToggleAi && (
              <Button
                variant="outline"
                size="sm"
                onClick={onToggleAi}
                className={cn(
                  "h-9 rounded-xl border-slate-200/90 text-xs font-semibold shadow-2xs gap-1.5 px-3 cursor-pointer transition-all",
                  isAiOpen
                    ? "bg-[#EEF2FF] text-[#5B5AF7] border-[#C7D2FE]"
                    : "text-slate-700 hover:bg-slate-50"
                )}
                title={isAiOpen ? "Hide AI Command Center" : "Show AI Command Center"}
              >
                <Sparkles className="h-3.5 w-3.5 text-[#5B5AF7]" />
                <span className="hidden sm:inline">AI Command Center</span>
                <span className="sm:hidden">AI</span>
                <span className="flex h-4 min-w-[16px] items-center justify-center rounded-full bg-[#5B5AF7] px-1 text-[10px] font-bold text-white">
                  3
                </span>
              </Button>
            )}

            {/* Export */}
            {onExport && (
              <Button
                variant="outline"
                size="sm"
                onClick={onExport}
                className="h-9 rounded-xl border-slate-200/90 text-xs font-semibold text-slate-700 shadow-2xs hover:bg-slate-50 gap-1.5 px-3 cursor-pointer"
              >
                <Download className="h-3.5 w-3.5 text-slate-500" />
                <span>Export</span>
              </Button>
            )}

            {/* New Opportunity */}
            {onNewOpportunity && (
              <Button
                variant="default"
                size="sm"
                onClick={onNewOpportunity}
                className="h-9 rounded-xl bg-[#5B5AF7] hover:bg-[#4847E5] text-xs font-semibold text-white shadow-xs gap-1.5 px-3.5 cursor-pointer"
              >
                <Plus className="h-4 w-4 stroke-[2.5]" />
                <span>New Opportunity</span>
              </Button>
            )}
          </div>
        }
      >
        <div className="flex items-center justify-between gap-3 pt-1 flex-wrap">
          {/* View Mode Toggle: Board vs List */}
          {onViewModeChange ? (
            <div className="flex items-center rounded-xl border border-slate-200 bg-white p-0.5 shadow-2xs">
              <button
                type="button"
                onClick={() => onViewModeChange("board")}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-colors cursor-pointer",
                  viewMode === "board"
                    ? "bg-[#EEF2FF] text-[#5B5AF7]"
                    : "text-slate-500 hover:text-slate-900"
                )}
              >
                <Kanban className="h-3.5 w-3.5" />
                <span>Board</span>
              </button>
              <button
                type="button"
                onClick={() => onViewModeChange("list")}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-colors cursor-pointer",
                  viewMode === "list"
                    ? "bg-[#EEF2FF] text-[#5B5AF7]"
                    : "text-slate-500 hover:text-slate-900"
                )}
              >
                <List className="h-3.5 w-3.5" />
                <span>List</span>
              </button>
            </div>
          ) : <div />}

          <div className="relative flex items-center gap-2.5">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsRangeOpen(!isRangeOpen)}
              className="h-8.5 rounded-xl border-slate-200 bg-white text-xs font-medium text-slate-700 shadow-2xs hover:bg-slate-50 gap-2 px-3 cursor-pointer"
            >
              <Calendar className="h-3.5 w-3.5 text-slate-500" />
              <span>{selectedRange}</span>
              <ChevronDown className="h-3 w-3 text-slate-400" />
            </Button>

            {isRangeOpen && (
              <div className="absolute left-0 top-10 z-30 w-36 rounded-xl border border-slate-200 bg-white p-1 shadow-lg">
                {ranges.map((range) => (
                  <button
                    key={range}
                    type="button"
                    onClick={() => {
                      setSelectedRange(range);
                      setIsRangeOpen(false);
                    }}
                    className={`flex w-full items-center rounded-lg px-2.5 py-1.5 text-xs transition-colors text-left cursor-pointer ${
                      selectedRange === range
                        ? "bg-indigo-50 font-semibold text-[#5B5AF7]"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            )}

            {/* Filter Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={onFilterClick}
              className="h-8.5 rounded-xl border-slate-200 bg-white text-xs font-medium text-slate-700 shadow-2xs hover:bg-slate-50 gap-1.5 px-3 cursor-pointer"
            >
              <Filter className="h-3.5 w-3.5 text-slate-500" />
              <span>Filter</span>
            </Button>

            {/* Sort Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={onSortClick}
              className="h-8.5 rounded-xl border-slate-200 bg-white text-xs font-medium text-slate-700 shadow-2xs hover:bg-slate-50 gap-1.5 px-3 cursor-pointer"
            >
              <SlidersHorizontal className="h-3.5 w-3.5 text-slate-500" />
              <span>Sort</span>
            </Button>
          </div>
        </div>
      </PageHeader>
    </div>
  );
}


