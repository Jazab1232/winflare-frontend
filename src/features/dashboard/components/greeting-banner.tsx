"use client";

import * as React from "react";
import { Calendar as CalendarIcon, ChevronDown } from "lucide-react";

export function DashboardGreeting() {
  return (
    <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-2 select-none">
      {/* Left Column: Greeting & Headline */}
      <div className="flex flex-col">
        <span className="text-xs font-medium text-slate-500 flex items-center gap-1.5">
          Good morning, Jazab <span className="inline-block animate-wave">👋</span>
        </span>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 mt-0.5">
          Here&apos;s your week at a glance.
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          We found <span className="font-semibold text-slate-700">48</span> new opportunities, and you&apos;ve already applied to <span className="font-semibold text-slate-700">12</span> this week.
        </p>
      </div>

      {/* Motivational Note with Curved Doodle Arrow */}
      <div className="hidden lg:flex items-center gap-3 relative pb-2 self-center">
        <div className="flex flex-col text-center font-handwriting text-[#5B5AF7] leading-tight rotate-[-2deg]">
          <span className="text-base font-bold">Keep going!</span>
          <span className="text-xs opacity-90">
            You&apos;re closer to your goals<br />than you think.
          </span>
        </div>
        {/* Curved hand-drawn arrow pointing up-right */}
        <svg
          className="w-10 h-10 text-[#5B5AF7] -mt-2 -ml-1 transform rotate-6"
          viewBox="0 0 50 50"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M 8,36 C 18,34 32,28 38,12" />
          <path d="M 28,12 L 38,12 L 38,22" />
        </svg>
      </div>

      {/* Right Column: Date Range Picker */}
      <div className="flex items-center">
        <button
          type="button"
          className="flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white px-3.5 py-2 text-xs font-medium text-slate-700 shadow-2xs transition-colors hover:bg-slate-50 cursor-pointer"
        >
          <CalendarIcon className="h-3.5 w-3.5 text-slate-400" />
          <span>May 12 – May 18, 2025</span>
          <ChevronDown className="h-3.5 w-3.5 text-slate-400 ml-1" />
        </button>
      </div>
    </div>
  );
}

