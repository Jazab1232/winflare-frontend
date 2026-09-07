"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface CompanyLogoProps {
  type: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function CompanyLogo({ type, className, size = "md" }: CompanyLogoProps) {
  const sizeClasses = {
    sm: "h-6 w-6 text-xs",
    md: "h-9 w-9 text-sm",
    lg: "h-11 w-11 text-base",
  };

  switch (type) {
    case "vercel":
      return (
        <div
          className={cn(
            "flex shrink-0 items-center justify-center rounded-full bg-black text-white shadow-xs",
            sizeClasses[size],
            className
          )}
        >
          <svg className="h-[45%] w-[45%]" viewBox="0 0 115 100" fill="currentColor">
            <path d="M57.5 0L115 100H0L57.5 0z" />
          </svg>
        </div>
      );

    case "stripe":
      return (
        <div
          className={cn(
            "flex shrink-0 items-center justify-center rounded-xl bg-[#635BFF] font-bold text-white shadow-xs",
            sizeClasses[size],
            className
          )}
        >
          <span className="italic font-serif font-black text-[110%] -mt-0.5">S</span>
        </div>
      );

    case "notion":
      return (
        <div
          className={cn(
            "flex shrink-0 items-center justify-center rounded-xl bg-black font-bold text-white shadow-xs",
            sizeClasses[size],
            className
          )}
        >
          <span className="font-mono font-black text-[105%]">N</span>
        </div>
      );

    case "revolut":
      return (
        <div
          className={cn(
            "flex shrink-0 items-center justify-center rounded-full bg-black font-black text-white shadow-xs",
            sizeClasses[size],
            className
          )}
        >
          <span className="font-sans font-black tracking-tighter text-[110%]">R</span>
        </div>
      );

    case "github":
      return (
        <div
          className={cn(
            "flex shrink-0 items-center justify-center rounded-full bg-[#24292F] text-white shadow-xs",
            sizeClasses[size],
            className
          )}
        >
          <svg className="h-[55%] w-[55%]" viewBox="0 0 24 24" fill="currentColor">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            />
          </svg>
        </div>
      );

    case "linear":
      return (
        <div
          className={cn(
            "flex shrink-0 items-center justify-center rounded-xl bg-[#5E6AD2] text-white shadow-xs",
            sizeClasses[size],
            className
          )}
        >
          <svg className="h-[55%] w-[55%]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3.2 7.2L7.2 3.2C8.8 1.6 11.4 1.6 13 3.2L20.8 11C22.4 12.6 22.4 15.2 20.8 16.8L16.8 20.8C15.2 22.4 12.6 22.4 11 20.8L3.2 13C1.6 11.4 1.6 8.8 3.2 7.2Z" />
          </svg>
        </div>
      );

    case "turing":
      return (
        <div
          className={cn(
            "flex shrink-0 items-center justify-center rounded-xl bg-[#0B1528] font-bold text-sky-400 shadow-xs",
            sizeClasses[size],
            className
          )}
        >
          <span className="font-mono font-extrabold text-[115%]">T</span>
        </div>
      );

    default:
      return (
        <div
          className={cn(
            "flex shrink-0 items-center justify-center rounded-xl bg-slate-900 font-bold text-white shadow-xs",
            sizeClasses[size],
            className
          )}
        >
          <span>{type.charAt(0).toUpperCase()}</span>
        </div>
      );
  }
}
