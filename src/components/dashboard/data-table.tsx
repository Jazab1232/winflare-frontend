"use client";

import * as React from "react";
import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { SearchInput } from "./search-input";
import { Pagination, PaginationProps } from "./pagination";
import { EmptyState } from "./empty-state";

export interface ColumnDef<T> {
  key: string;
  header: string | React.ReactNode;
  cell: (item: T, index: number) => React.ReactNode;
  sortable?: boolean;
  align?: "left" | "center" | "right";
  className?: string;
  width?: string;
}

export interface DataTableTab {
  id: string;
  label: string;
  count?: number;
}

export interface DataTableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  keyExtractor: (item: T, index: number) => string;
  selectedId?: string;
  onRowClick?: (item: T) => void;
  isLoading?: boolean;
  emptyTitle?: string;
  emptyDescription?: string;
  emptyAction?: {
    label: string;
    onClick: () => void;
  };
  // Status filter tabs
  tabs?: DataTableTab[];
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
  // Toolbar search
  searchPlaceholder?: string;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  // Sorting
  sortField?: string;
  sortAsc?: boolean;
  onSort?: (field: string) => void;
  // Extra right-side toolbar controls
  toolbarActions?: React.ReactNode;
  // Table footer or pagination
  pagination?: Omit<PaginationProps, "className">;
  footerSummary?: React.ReactNode;
  className?: string;
}

export function DataTable<T>({
  data,
  columns,
  keyExtractor,
  selectedId,
  onRowClick,
  emptyTitle = "No records found",
  emptyDescription = "Try adjusting your filters or search keywords.",
  emptyAction,
  tabs,
  activeTab,
  onTabChange,
  searchPlaceholder = "Filter records...",
  searchValue,
  onSearchChange,
  sortField,
  sortAsc,
  onSort,
  toolbarActions,
  pagination,
  footerSummary,
  className,
}: DataTableProps<T>) {
  const hasToolbar = (tabs && tabs.length > 0) || onSearchChange !== undefined || toolbarActions;

  return (
    <div
      className={cn(
        "flex flex-col rounded-2xl border border-slate-200/80 bg-white shadow-2xs overflow-hidden",
        className
      )}
    >
      {/* Optional Toolbar Row: Tabs + Search + Extra Controls */}
      {hasToolbar && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200/80 px-4 py-3 gap-3 bg-white select-none">
          {/* Status Tabs */}
          {tabs && tabs.length > 0 ? (
            <div className="flex items-center gap-1 overflow-x-auto custom-scrollbar pb-1 sm:pb-0">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => onTabChange?.(tab.id)}
                    className={cn(
                      "flex items-center gap-1.5 whitespace-nowrap rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-all cursor-pointer",
                      isActive
                        ? "bg-[#F5F3FF] text-[#5B5AF7] shadow-2xs"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    )}
                  >
                    <span>{tab.label}</span>
                    {tab.count !== undefined && (
                      <span
                        className={cn(
                          "flex h-4 min-w-[16px] items-center justify-center rounded-full px-1 text-[10px] font-bold",
                          isActive
                            ? "bg-[#5B5AF7] text-white"
                            : "bg-slate-100 text-slate-500"
                        )}
                      >
                        {tab.count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          ) : (
            <div />
          )}

          {/* Right Controls: Search + Actions */}
          <div className="flex items-center gap-3">
            {onSearchChange !== undefined && (
              <div className="w-full sm:w-64">
                <SearchInput
                  value={searchValue || ""}
                  onChange={onSearchChange}
                  placeholder={searchPlaceholder}
                  showShortcut={false}
                />
              </div>
            )}
            {toolbarActions}
          </div>
        </div>
      )}

      {/* Main Table Structure */}
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full text-left text-xs text-slate-700 border-collapse">
          {/* Table Header */}
          <thead className="border-b border-slate-200/80 bg-slate-50/60 text-[11px] font-bold text-slate-400 uppercase tracking-wider select-none">
            <tr>
              {columns.map((col) => {
                const isSorted = sortField === col.key;
                const canSort = col.sortable && onSort;

                return (
                  <th
                    key={col.key}
                    scope="col"
                    style={{ width: col.width }}
                    onClick={() => canSort && onSort(col.key)}
                    className={cn(
                      "py-3.5 px-4 font-bold",
                      col.align === "right" && "text-right",
                      col.align === "center" && "text-center",
                      canSort && "cursor-pointer hover:text-slate-700 transition-colors",
                      col.className
                    )}
                  >
                    <div
                      className={cn(
                        "inline-flex items-center gap-1.5",
                        col.align === "right" && "justify-end w-full",
                        col.align === "center" && "justify-center w-full"
                      )}
                    >
                      <span>{col.header}</span>
                      {col.sortable && (
                        <span className="text-slate-400">
                          {isSorted ? (
                            sortAsc ? (
                              <ArrowUp className="h-3 w-3 text-[#5B5AF7]" />
                            ) : (
                              <ArrowDown className="h-3 w-3 text-[#5B5AF7]" />
                            )
                          ) : (
                            <ArrowUpDown className="h-3 w-3" />
                          )}
                        </span>
                      )}
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-slate-100 bg-white">
            {data.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="p-8">
                  <EmptyState
                    title={emptyTitle}
                    description={emptyDescription}
                    action={emptyAction}
                    className="border-0 bg-transparent p-4 shadow-none"
                  />
                </td>
              </tr>
            ) : (
              data.map((item, rowIdx) => {
                const rowKey = keyExtractor(item, rowIdx);
                const isSelected = selectedId !== undefined && selectedId === rowKey;

                return (
                  <tr
                    key={rowKey}
                    onClick={() => onRowClick?.(item)}
                    className={cn(
                      "group transition-colors",
                      onRowClick && "cursor-pointer hover:bg-slate-50/80",
                      isSelected && "bg-[#EEF2FF]/40 font-medium"
                    )}
                  >
                    {columns.map((col) => (
                      <td
                        key={`${rowKey}-${col.key}`}
                        className={cn(
                          "py-3.5 px-4",
                          col.align === "right" && "text-right",
                          col.align === "center" && "text-center",
                          col.className
                        )}
                      >
                        {col.cell(item, rowIdx)}
                      </td>
                    ))}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Optional Table Footer / Summary / Pagination */}
      {footerSummary && (
        <div className="flex items-center justify-between border-t border-slate-200/80 px-5 py-2.5 bg-slate-50/60 text-[11px] text-slate-500 select-none">
          {footerSummary}
        </div>
      )}

      {pagination && (
        <div className="px-5 pb-2">
          <Pagination {...pagination} />
        </div>
      )}
    </div>
  );
}
