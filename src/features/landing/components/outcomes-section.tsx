'use client';

import React from 'react';
import {
  Search,
  Send,
  Bell,
  Trophy,
  Check,
  FileEdit,
  Quote,
} from 'lucide-react';

export function OutcomesSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28 bg-[#FAFBFF]">
      {/* Ambient Top Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none opacity-60 z-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(221, 214, 254, 0.45), transparent 70%)',
        }}
      />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 max-w-[1340px] mx-auto">
        {/* ========================================== */}
        {/* Section Header */}
        {/* ========================================== */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#EDE9FE]/80 pl-1.5 pr-3 py-1 border border-[#DDD6FE]/70 shadow-[0_1px_2px_rgba(85,54,250,0.05)]">
            <span className="rounded-full bg-white px-2 py-0.5 text-[11px] font-bold text-[#5536FA] shadow-xs">
              07
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#5536FA]">
              OUTCOMES
            </span>
          </div>

          {/* Headline */}
          <h2 className="mt-6 text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-[#030933] leading-[1.15]">
            The Difference Isn’t <br />
            More Opportunities. <br />
            <span className="text-[#5536FA]">It’s What You Do With Them.</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-5 text-sm sm:text-base lg:text-lg text-[#64748B] max-w-xl mx-auto leading-relaxed">
            Winflare helps you move every opportunity forward <br className="hidden sm:inline" />
            from first click to closed client.
          </p>
        </div>

        {/* ========================================== */}
        {/* 4-Step Process Flow with Connected Line */}
        {/* ========================================== */}
        <div className="relative mt-16 lg:mt-20">
          {/* Horizontal Connecting Dashed Line (Desktop) */}
          <div className="hidden lg:block absolute top-[38px] left-[12%] right-[12%] h-0.5 border-t-2 border-dashed border-[#DDD6FE] z-0 pointer-events-none" />

          {/* 4 Steps Grid */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-start">
            {/* ------------------------------------------ */}
            {/* STEP 1: Opportunity Found */}
            {/* ------------------------------------------ */}
            <div className="flex flex-col items-center text-center">
              {/* Node Icon with Overlapping Number Badge */}
              <div className="relative mb-3">
                <div className="flex h-[76px] w-[76px] items-center justify-center rounded-full bg-white border border-[#EDE9FE] shadow-[0_8px_20px_-4px_rgba(99,68,252,0.12)] text-[#5536FA] transition-transform duration-300 hover:scale-105">
                  <Search className="h-7 w-7 stroke-[1.8]" />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-[#4F46E5] px-2.5 py-0.5 text-[11px] font-bold text-white shadow-xs">
                  01
                </div>
              </div>

              {/* Step Title & Subtitle */}
              <h3 className="mt-2 text-base sm:text-lg font-bold text-[#030933]">
                Opportunity Found
              </h3>
              <p className="mt-1 text-xs text-[#64748B] leading-relaxed max-w-[220px] min-h-[36px]">
                Find high-quality opportunities that match your skills and goals.
              </p>

              {/* Preview Card */}
              <div className="mt-5 w-full rounded-2xl border border-slate-100/90 bg-white p-4 sm:p-4.5 text-left shadow-[0_8px_24px_-4px_rgba(15,23,42,0.05),0_1px_3px_rgba(15,23,42,0.02)] transition-all duration-300 hover:shadow-[0_12px_28px_-4px_rgba(15,23,42,0.09)] hover:-translate-y-1 flex flex-col justify-between min-h-[195px]">
                <div>
                  {/* Top Row: LinkedIn Logo & Match */}
                  <div className="flex items-start justify-between">
                    <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#0A66C2] text-white text-xs font-bold font-sans">
                      in
                    </div>
                    <span className="rounded-full bg-[#DCFCE7] px-2 py-0.5 text-[10px] font-bold text-[#16A34A]">
                      95% Match
                    </span>
                  </div>

                  {/* Title & Location */}
                  <div className="mt-2 text-[13px] font-bold text-[#030933] leading-snug">
                    Senior Next.js Developer
                  </div>
                  <div className="text-[10px] text-[#64748B] mt-0.5">
                    Remote • United States
                  </div>

                  {/* Salary & Status */}
                  <div className="mt-2.5 flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#030933]">
                      $ $3,000 – $5,000
                    </span>
                    <span className="rounded-full bg-[#EDE9FE] px-2 py-0.5 text-[10px] font-bold text-[#5536FA]">
                      New
                    </span>
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="mt-3 flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                  <span className="rounded-md bg-slate-50 border border-slate-200/80 px-2 py-0.5 text-[9px] font-medium text-slate-600">
                    Next.js
                  </span>
                  <span className="rounded-md bg-slate-50 border border-slate-200/80 px-2 py-0.5 text-[9px] font-medium text-slate-600">
                    React
                  </span>
                  <span className="rounded-md bg-slate-50 border border-slate-200/80 px-2 py-0.5 text-[9px] font-medium text-slate-600">
                    TypeScript
                  </span>
                  <span className="rounded-md bg-slate-50 border border-slate-200/80 px-2 py-0.5 text-[9px] font-medium text-slate-600">
                    Tailwind
                  </span>
                </div>
              </div>
            </div>

            {/* ------------------------------------------ */}
            {/* STEP 2: Proposal Sent */}
            {/* ------------------------------------------ */}
            <div className="flex flex-col items-center text-center">
              {/* Node Icon with Overlapping Number Badge */}
              <div className="relative mb-3">
                <div className="flex h-[76px] w-[76px] items-center justify-center rounded-full bg-white border border-[#EDE9FE] shadow-[0_8px_20px_-4px_rgba(99,68,252,0.12)] text-[#5536FA] transition-transform duration-300 hover:scale-105">
                  <Send className="h-7 w-7 stroke-[1.8] -rotate-12 translate-x-0.5" />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-[#4F46E5] px-2.5 py-0.5 text-[11px] font-bold text-white shadow-xs">
                  02
                </div>
              </div>

              {/* Step Title & Subtitle */}
              <h3 className="mt-2 text-base sm:text-lg font-bold text-[#030933]">
                Proposal Sent
              </h3>
              <p className="mt-1 text-xs text-[#64748B] leading-relaxed max-w-[220px] min-h-[36px]">
                Create tailored proposals in minutes, not hours.
              </p>

              {/* Preview Card */}
              <div className="mt-5 w-full rounded-2xl border border-slate-100/90 bg-white p-3.5 sm:p-4 text-left shadow-[0_8px_24px_-4px_rgba(15,23,42,0.05),0_1px_3px_rgba(15,23,42,0.02)] transition-all duration-300 hover:shadow-[0_12px_28px_-4px_rgba(15,23,42,0.09)] hover:-translate-y-1 flex flex-col justify-between min-h-[195px]">
                <div>
                  <div className="text-[11px] font-bold text-[#030933] pb-2 border-b border-slate-100">
                    Proposal for Acme Inc.
                  </div>

                  {/* Two-Column Mini Document Layout */}
                  <div className="mt-2 grid grid-cols-12 gap-2 items-start">
                    {/* Left Outline Tabs */}
                    <div className="col-span-4 flex flex-col gap-1 border-r border-slate-100 pr-1.5">
                      <span className="rounded bg-[#EDE9FE] px-1.5 py-0.5 text-[9px] font-bold text-[#5536FA]">
                        Summary
                      </span>
                      <span className="text-[8.5px] text-slate-400 font-medium px-1">
                        Solutions
                      </span>
                      <span className="text-[8.5px] text-slate-400 font-medium px-1">
                        Timeline
                      </span>
                      <span className="text-[8.5px] text-slate-400 font-medium px-1">
                        Pricing
                      </span>
                      <span className="text-[8.5px] text-slate-400 font-medium px-1">
                        Next Steps
                      </span>
                    </div>

                    {/* Right Document Excerpt */}
                    <div className="col-span-8 pl-0.5">
                      <div className="text-[9.5px] font-semibold text-slate-700">
                        Hi Jessica,
                      </div>
                      <p className="text-[8.5px] text-slate-500 leading-tight mt-1">
                        Thank you for sharing the details about your project.
                      </p>
                      <p className="text-[8.5px] text-slate-500 leading-tight mt-1 line-clamp-2">
                        Here&apos;s how we can help you achieve your goals...
                      </p>
                    </div>
                  </div>
                </div>

                {/* Send Proposal Button */}
                <div className="mt-2 flex justify-end">
                  <button className="inline-flex items-center gap-1.5 rounded-lg bg-[#5536FA] px-2.5 py-1 text-[9.5px] font-semibold text-white shadow-xs hover:bg-[#4325E5] transition-colors">
                    <Send className="h-2.5 w-2.5 -rotate-12" />
                    <span>Send Proposal</span>
                  </button>
                </div>
              </div>
            </div>

            {/* ------------------------------------------ */}
            {/* STEP 3: Follow-up Completed */}
            {/* ------------------------------------------ */}
            <div className="flex flex-col items-center text-center">
              {/* Node Icon with Overlapping Number Badge */}
              <div className="relative mb-3">
                <div className="flex h-[76px] w-[76px] items-center justify-center rounded-full bg-white border border-[#EDE9FE] shadow-[0_8px_20px_-4px_rgba(99,68,252,0.12)] text-[#5536FA] transition-transform duration-300 hover:scale-105">
                  <Bell className="h-7 w-7 stroke-[1.8]" />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-[#4F46E5] px-2.5 py-0.5 text-[11px] font-bold text-white shadow-xs">
                  03
                </div>
              </div>

              {/* Step Title & Subtitle */}
              <h3 className="mt-2 text-base sm:text-lg font-bold text-[#030933]">
                Follow-up Completed
              </h3>
              <p className="mt-1 text-xs text-[#64748B] leading-relaxed max-w-[220px] min-h-[36px]">
                Smart reminders help you follow up at the right time, every time.
              </p>

              {/* Preview Card */}
              <div className="mt-5 w-full rounded-2xl border border-slate-100/90 bg-white p-4 sm:p-4.5 text-left shadow-[0_8px_24px_-4px_rgba(15,23,42,0.05),0_1px_3px_rgba(15,23,42,0.02)] transition-all duration-300 hover:shadow-[0_12px_28px_-4px_rgba(15,23,42,0.09)] hover:-translate-y-1 flex flex-col justify-between min-h-[195px]">
                <div>
                  {/* Card Header */}
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EDE9FE] text-[#5536FA] shrink-0">
                      <Bell className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-[#030933] leading-none">
                        Follow-up Reminder
                      </div>
                      <div className="text-[9.5px] font-semibold text-[#5536FA] mt-0.5">
                        Today, 10:00 AM
                      </div>
                    </div>
                  </div>

                  {/* Body Text */}
                  <p className="mt-3 text-[11px] text-slate-600 leading-snug">
                    Follow up with Jessica at Acme Inc, regarding the proposal.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="mt-3 flex items-center gap-2 pt-2 border-t border-slate-100">
                  <button className="flex-1 rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-[9.5px] font-semibold text-slate-700 hover:bg-slate-50 transition-colors text-center">
                    Mark as Done
                  </button>
                  <button className="flex-1 rounded-lg bg-[#5536FA] px-2 py-1.5 text-[9.5px] font-semibold text-white shadow-xs hover:bg-[#4325E5] transition-colors text-center">
                    Send Follow-up
                  </button>
                </div>
              </div>
            </div>

            {/* ------------------------------------------ */}
            {/* STEP 4: Client Won */}
            {/* ------------------------------------------ */}
            <div className="flex flex-col items-center text-center">
              {/* Node Icon with Overlapping Number Badge */}
              <div className="relative mb-3">
                <div className="flex h-[76px] w-[76px] items-center justify-center rounded-full bg-white border border-[#EDE9FE] shadow-[0_8px_20px_-4px_rgba(99,68,252,0.12)] text-[#5536FA] transition-transform duration-300 hover:scale-105">
                  <Trophy className="h-7 w-7 stroke-[1.8]" />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-[#4F46E5] px-2.5 py-0.5 text-[11px] font-bold text-white shadow-xs">
                  04
                </div>
              </div>

              {/* Step Title & Subtitle */}
              <h3 className="mt-2 text-base sm:text-lg font-bold text-[#030933]">
                Client Won
              </h3>
              <p className="mt-1 text-xs text-[#64748B] leading-relaxed max-w-[220px] min-h-[36px]">
                Close more deals and build long-term relationships that grow your business.
              </p>

              {/* Preview Card */}
              <div className="mt-5 w-full rounded-2xl border border-slate-100/90 bg-white p-4 sm:p-4.5 text-left shadow-[0_8px_24px_-4px_rgba(15,23,42,0.05),0_1px_3px_rgba(15,23,42,0.02)] transition-all duration-300 hover:shadow-[0_12px_28px_-4px_rgba(15,23,42,0.09)] hover:-translate-y-1 flex flex-col justify-between min-h-[195px]">
                <div>
                  {/* Client Won Highlight Banner */}
                  <div className="flex items-center gap-2 rounded-xl bg-[#ECFDF5] px-3 py-1.5 text-xs font-bold text-[#059669] border border-[#A7F3D0]/60">
                    <span className="text-sm">🎉</span>
                    <span>Client Won</span>
                  </div>

                  {/* Acme Inc & Price Row */}
                  <div className="mt-3">
                    <div className="text-xs font-bold text-[#030933]">
                      Acme Inc.
                    </div>
                    <div className="mt-1 flex items-center justify-between">
                      <span className="text-sm font-extrabold text-[#059669]">
                        $4,200
                      </span>
                      <span className="rounded-full bg-[#ECFDF5] px-2 py-0.5 text-[9.5px] font-bold text-[#059669] border border-[#A7F3D0]/50">
                        Project Started
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer Date & Add Note */}
                <div className="mt-3 pt-2 border-t border-slate-100">
                  <div className="text-[10px] text-[#94A3B8]">
                    Closed on May 20, 2024
                  </div>
                  <div className="mt-1 flex items-center gap-1 text-[10px] font-semibold text-[#5536FA] cursor-pointer hover:underline">
                    <FileEdit className="h-3 w-3" />
                    <span>Add note</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================== */}
        {/* Bottom Banner Quote Card */}
        {/* ========================================== */}
        <div className="mt-16 rounded-3xl border border-[#DDD6FE]/70 bg-white/80 backdrop-blur-sm p-6 sm:p-8 shadow-[0_10px_32px_-8px_rgba(99,68,252,0.07)] flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
          {/* Quote Icon Bubble */}
          <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-[#EDE9FE] text-[#5536FA] shrink-0 shadow-inner">
            <span className="text-3xl sm:text-4xl font-black font-serif leading-none select-none">
              “
            </span>
          </div>

          {/* Statement with Hand-drawn Underline */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-lg sm:text-xl font-bold text-[#030933] leading-snug">
              The best freelancers and agencies don’t <br className="hidden sm:inline" />
              necessarily find more opportunities.
            </p>
            <div className="mt-1 relative inline-block">
              <span className="text-lg sm:text-xl font-bold text-[#5536FA]">
                They follow through better.
              </span>
              {/* Hand-drawn Purple Accent Underline */}
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 overflow-visible pointer-events-none"
                viewBox="0 0 240 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 2 8 C 65 2, 175 3, 238 9"
                  stroke="#5536FA"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Checklist Points */}
          <div className="flex flex-col gap-2.5 sm:gap-3 shrink-0 self-center lg:self-auto">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#030933]">
              <div className="flex h-5 w-5 items-center justify-center rounded-full border border-[#5536FA] text-[#5536FA] shrink-0">
                <Check className="h-3 w-3 stroke-[2.5]" />
              </div>
              <span>More follow-through</span>
            </div>

            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#030933]">
              <div className="flex h-5 w-5 items-center justify-center rounded-full border border-[#5536FA] text-[#5536FA] shrink-0">
                <Check className="h-3 w-3 stroke-[2.5]" />
              </div>
              <span>Better responses</span>
            </div>

            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#030933]">
              <div className="flex h-5 w-5 items-center justify-center rounded-full border border-[#5536FA] text-[#5536FA] shrink-0">
                <Check className="h-3 w-3 stroke-[2.5]" />
              </div>
              <span>More clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
