"use client";

import * as React from "react";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SearchInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  showShortcut?: boolean;
  className?: string;
}

export function SearchInput({
  value,
  onChange,
  placeholder = "Search...",
  showShortcut = true,
  className,
  ...props
}: SearchInputProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Global ⌘K / Ctrl+K keyboard shortcut to focus input
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className={cn("relative flex w-full items-center", className)}>
      <Search className="absolute left-3.5 h-4 w-4 text-slate-400 shrink-0 pointer-events-none" />
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-9 w-full rounded-xl border border-slate-200/90 bg-[#F8FAFC] pl-9 pr-14 text-xs text-slate-800 placeholder:text-slate-400 shadow-2xs transition-all focus:border-[#5B5AF7] focus:bg-white focus:outline-none focus:ring-1.5 focus:ring-[#5B5AF7]/20"
        {...props}
      />
      {value ? (
        <button
          type="button"
          onClick={() => onChange("")}
          className="absolute right-2.5 flex h-5 w-5 items-center justify-center rounded-md text-slate-400 hover:bg-slate-200 hover:text-slate-600 transition-colors"
          title="Clear search"
        >
          <X className="h-3 w-3" />
        </button>
      ) : showShortcut ? (
        <div className="absolute right-2.5 flex items-center gap-0.5 rounded-md border border-slate-200 bg-white px-1.5 py-0.5 text-[9px] font-semibold text-slate-400 select-none shadow-2xs">
          <span>⌘</span>
          <span>K</span>
        </div>
      ) : null}
    </div>
  );
}
