"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  itemName?: string;
  onPageChange: (page: number) => void;
  className?: string;
}

export function Pagination({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  itemName = "items",
  onPageChange,
  className,
}: PaginationProps) {
  if (totalItems === 0 || totalPages <= 1) return null;

  const safePage = Math.min(Math.max(1, currentPage), totalPages);
  const startItem = (safePage - 1) * itemsPerPage + 1;
  const endItem = Math.min(safePage * itemsPerPage, totalItems);

  // Generate page numbers to show (with max 5 visible or full range)
  const getPageNumbers = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    if (safePage <= 4) {
      return [1, 2, 3, 4, 5, "...", totalPages];
    }
    if (safePage >= totalPages - 3) {
      return [1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }
    return [1, "...", safePage - 1, safePage, safePage + 1, "...", totalPages];
  };

  const pages = getPageNumbers();

  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-200/80 pt-4 pb-2 select-none",
        className
      )}
    >
      <span className="text-xs text-slate-400 font-medium">
        Showing {startItem} to {endItem} of {totalItems} {itemName}
      </span>

      <div className="flex items-center gap-1.5 self-end sm:self-auto">
        <button
          type="button"
          disabled={safePage === 1}
          onClick={() => onPageChange(Math.max(safePage - 1, 1))}
          className="rounded-lg border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shadow-2xs"
        >
          Previous
        </button>

        {pages.map((p, idx) => {
          if (p === "...") {
            return (
              <span
                key={`ellipsis-${idx}`}
                className="flex h-7 w-7 items-center justify-center text-xs text-slate-400 font-bold"
              >
                ...
              </span>
            );
          }

          const pageNumber = p as number;
          const isSelected = safePage === pageNumber;

          return (
            <button
              key={pageNumber}
              type="button"
              onClick={() => onPageChange(pageNumber)}
              className={cn(
                "h-7 w-7 rounded-lg text-xs font-semibold transition-colors cursor-pointer shadow-2xs",
                isSelected
                  ? "bg-[#5B5AF7] text-white"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
              )}
            >
              {pageNumber}
            </button>
          );
        })}

        <button
          type="button"
          disabled={safePage === totalPages}
          onClick={() => onPageChange(Math.min(safePage + 1, totalPages))}
          className="rounded-lg border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shadow-2xs"
        >
          Next
        </button>
      </div>
    </div>
  );
}
