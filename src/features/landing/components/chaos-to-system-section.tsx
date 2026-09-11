'use client';

import React from 'react';
import { BrandIcon, SectionHeader, ValuePillarCard } from '@/components/shared';
import { MockupSidebar } from './shared';
import {
  ArrowRight,
  Sparkles,
  Search,
  Bell,
  Check,
  X,
  AlertTriangle,
  LayoutDashboard,
  Compass,
  ShieldCheck,
  FileText,
  Columns3,
  MessageSquare,
  Calendar,
  Settings,
  Clock,
  Target,
  BarChart3,
  Shuffle,
  Briefcase,
  Send,
  Trophy,
  PlusCircle,
} from 'lucide-react';

// ==========================================
// Photorealistic Pushpin & Tape for Notes Board
// ==========================================

function PushPin({
  color = 'red',
  className = '',
}: {
  color?: 'red' | 'blue' | 'gold';
  className?: string;
}) {
  const pinGradients = {
    red: { start: '#F87171', end: '#B91C1C', shadow: 'rgba(185,28,28,0.3)' },
    blue: { start: '#818CF8', end: '#4338CA', shadow: 'rgba(67,56,202,0.3)' },
    gold: { start: '#FCD34D', end: '#B45309', shadow: 'rgba(180,83,9,0.3)' },
  };

  const current = pinGradients[color];

  return (
    <div
      className={`absolute -top-3 left-1/2 -translate-x-1/2 z-30 pointer-events-none select-none drop-shadow-[0_2px_4px_${current.shadow}] ${className}`}
    >
      <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
        {/* Contact pin shadow on board */}
        <ellipse cx="9" cy="18" rx="4" ry="1.4" fill="rgba(15,23,42,0.25)" />
        {/* Metal pin needle */}
        <path
          d="M8.2 9.5L9 17.5L9.8 9.5"
          stroke="#94A3B8"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        {/* Rounded Pin Head */}
        <circle cx="9" cy="7" r="5.5" fill={`url(#pin-gradient-${color})`} />
        {/* Glossy specular highlight */}
        <ellipse
          cx="7.2"
          cy="5.2"
          rx="2"
          ry="1.2"
          fill="white"
          fillOpacity="0.65"
        />
        <defs>
          <radialGradient
            id={`pin-gradient-${color}`}
            cx="35%"
            cy="35%"
            r="65%"
          >
            <stop offset="0%" stopColor={current.start} />
            <stop offset="100%" stopColor={current.end} />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function TapeStrip({ className = '' }: { className?: string }) {
  return (
    <div
      className={`absolute -top-2 left-1/2 -translate-x-1/2 h-3.5 w-10 bg-white/75 backdrop-blur-[1px] border-t border-b border-white/90 shadow-[0_1px_3px_rgba(15,23,42,0.08)] pointer-events-none z-20 rotate-[-1deg] ${className}`}
      style={{
        maskImage:
          'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
      }}
    />
  );
}

// ==========================================

export function ChaosToSystemSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-24 bg-[#FAFBFF]">
      <div className="w-full px-4 sm:px-6 lg:px-20">
        {/* ========================================== */}
        {/* Section Header */}
        {/* ========================================== */}
        <SectionHeader
          badgeText="FROM CHAOS TO SYSTEM"
          badgeVariant="violet"
          badgeUppercase={true}
          title={
            <>
              Your client acquisition process <br />
              is <span className="text-[#5B5AF7]">fragmented.</span>
            </>
          }
          subtitle={
            <>
              Jumping between multiple tools, tabs, and spreadsheets wastes your
              time,
              <br className="hidden sm:inline" /> leads to missed opportunities,
              and makes it hard to stay organized.
            </>
          }
        />

        {/* ========================================== */}
        {/* Side-by-Side Comparison Container */}
        {/* ========================================== */}
        <div className="relative mt-12 lg:mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {/* ------------------------------------------ */}
            {/* LEFT CARD: THE CHAOS (Notes Board / Pinboard) */}
            {/* ------------------------------------------ */}
            <div className="relative rounded-[26px] border border-[#E2E8F0] bg-[#FAFBFD] p-6 sm:p-7 flex flex-col justify-between shadow-[0_16px_40px_-12px_rgba(15,23,42,0.06),0_2px_6px_rgba(15,23,42,0.02)] overflow-hidden transition-all duration-300 hover:shadow-[0_20px_48px_-10px_rgba(15,23,42,0.09)]">
              {/* Subtle Notes Board Pin-Grid Texture */}
              <div
                className="absolute inset-0 pointer-events-none opacity-40 z-0"
                style={{
                  backgroundImage:
                    'radial-gradient(#CBD5E1 1.2px, transparent 1.2px)',
                  backgroundSize: '20px 20px',
                }}
              />

              {/* Header */}
              <div className="relative z-10">
                <span className="inline-flex items-center rounded-full bg-[#FFE4E6] px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#E11D48]">
                  THE CHAOS
                </span>
                <h3 className="mt-3 text-xl sm:text-2xl font-bold tracking-tight text-[#0F172A]">
                  Multiple tools. Disconnected workflow.
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  You&apos;re constantly switching between platforms, manually
                  tracking everything, and still missing opportunities.
                </p>
              </div>

              {/* Visual Notes Board Collage with Floating / Pinned Cards */}
              <div className="relative mt-7 min-h-[390px] sm:min-h-[420px] w-full select-none z-10">
                {/* Background Dotted / Dashed Spaghetti Lines */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none z-0"
                  viewBox="0 0 540 390"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 70 C 140 110, 180 120, 230 130 C 270 140, 310 120, 370 70"
                    stroke="#CBD5E1"
                    strokeWidth="1.2"
                    strokeDasharray="4 4"
                    fill="none"
                    opacity="0.6"
                  />
                  <path
                    d="M120 170 C 150 170, 170 200, 230 200 C 270 200, 290 170, 340 170"
                    stroke="#CBD5E1"
                    strokeWidth="1.2"
                    strokeDasharray="4 4"
                    fill="none"
                    opacity="0.6"
                  />
                  <path
                    d="M100 240 C 130 240, 160 270, 210 270 C 240 270, 260 250, 290 250"
                    stroke="#CBD5E1"
                    strokeWidth="1.2"
                    strokeDasharray="4 4"
                    fill="none"
                    opacity="0.5"
                  />
                </svg>

                {/* Hand-Drawn Doodle 1: "New opportunities?" above LinkedIn */}
                <div className="absolute left-[30px] top-[0px] z-10">
                  <span className="font-handwriting text-slate-600 text-sm italic whitespace-nowrap block rotate-[-6deg]">
                    New opportunities?
                  </span>
                  <svg
                    className="w-10 h-7 text-slate-400 -mt-1 ml-4"
                    viewBox="0 0 40 28"
                    fill="none"
                  >
                    <path
                      d="M6 4 C 12 14, 22 18, 30 22"
                      stroke="#94A3B8"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M26 23 L 31 22 L 29 17"
                      stroke="#94A3B8"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Hand-Drawn Doodle 2: "Rewrite again..." above ChatGPT */}
                <div className="absolute right-[45px] top-[0px] z-10 text-right">
                  <span className="font-handwriting text-slate-600 text-sm italic whitespace-nowrap block rotate-[4deg] leading-tight">
                    Rewrite
                    <br />
                    again...
                  </span>
                  <svg
                    className="w-9 h-7 text-slate-400 -mt-0.5 mr-6"
                    viewBox="0 0 36 28"
                    fill="none"
                  >
                    <path
                      d="M28 2 C 22 10, 16 16, 8 20"
                      stroke="#94A3B8"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12 21 L 7 20 L 8 15"
                      stroke="#94A3B8"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Row 1: Floating Pinned Cards (LinkedIn, Indeed, Wellfound, ChatGPT) */}
                <div className="absolute top-[48px] left-0 right-0 flex flex-wrap items-center justify-between gap-2 px-1 z-10">
                  {/* LinkedIn - Floating Hanging Card */}
                  <div className="relative group">
                    <div className="bg-white rounded-xl px-2.5 py-1.5 shadow-[0_8px_18px_-4px_rgba(15,23,42,0.1),0_2px_4px_rgba(15,23,42,0.04)] border border-slate-200/90 flex items-center gap-2 rotate-[-2deg] transition-all duration-300 hover:rotate-0 hover:-translate-y-1.5 hover:shadow-[0_14px_24px_-4px_rgba(15,23,42,0.14)] cursor-pointer">
                      <BrandIcon name="linkedin" className="h-5 w-5 shrink-0" />
                      <div>
                        <p className="text-[11px] font-semibold text-slate-800 leading-none">
                          LinkedIn
                        </p>
                        <p className="text-[9px] text-slate-400 mt-0.5">
                          Find jobs
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Indeed - Floating Hanging Card */}
                  <div className="relative group">
                    <div className="bg-white rounded-xl px-2.5 py-1.5 shadow-[0_8px_18px_-4px_rgba(15,23,42,0.1),0_2px_4px_rgba(15,23,42,0.04)] border border-slate-200/90 flex items-center gap-2 rotate-[1.5deg] transition-all duration-300 hover:rotate-0 hover:-translate-y-1.5 hover:shadow-[0_14px_24px_-4px_rgba(15,23,42,0.14)] cursor-pointer">
                      <BrandIcon name="indeed" className="h-5 w-5 shrink-0" />
                      <div>
                        <p className="text-[11px] font-semibold text-slate-800 leading-none">
                          Indeed
                        </p>
                        <p className="text-[9px] text-slate-400 mt-0.5">
                          Search jobs
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Wellfound - Floating Hanging Card */}
                  <div className="relative group">
                    <div className="bg-white rounded-xl px-2.5 py-1.5 shadow-[0_8px_18px_-4px_rgba(15,23,42,0.1),0_2px_4px_rgba(15,23,42,0.04)] border border-slate-200/90 flex items-center gap-2 rotate-[-1deg] transition-all duration-300 hover:rotate-0 hover:-translate-y-1.5 hover:shadow-[0_14px_24px_-4px_rgba(15,23,42,0.14)] cursor-pointer">
                      <BrandIcon name="wellfound" className="h-5 w-5 shrink-0" />
                      <div>
                        <p className="text-[11px] font-semibold text-slate-800 leading-none">
                          Wellfound
                        </p>
                        <p className="text-[9px] text-slate-400 mt-0.5">
                          Explore startups
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* ChatGPT - Floating Hanging Card */}
                  <div className="relative group">
                    <div className="bg-white rounded-xl px-2.5 py-1.5 shadow-[0_8px_18px_-4px_rgba(15,23,42,0.1),0_2px_4px_rgba(15,23,42,0.04)] border border-slate-200/90 flex items-center gap-2 rotate-[2.5deg] transition-all duration-300 hover:rotate-0 hover:-translate-y-1.5 hover:shadow-[0_14px_24px_-4px_rgba(15,23,42,0.14)] cursor-pointer">
                      <BrandIcon name="openai" className="h-5 w-5 shrink-0" />
                      <div>
                        <p className="text-[11px] font-semibold text-slate-800 leading-none">
                          ChatGPT
                        </p>
                        <p className="text-[9px] text-slate-400 mt-0.5">
                          Write proposals
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hand-Drawn Doodle 3: "Where did I apply?" on left */}
                <div className="absolute left-[6px] top-[148px] z-10">
                  <span className="font-handwriting text-slate-600 text-sm italic whitespace-nowrap block rotate-[-8deg] leading-tight">
                    Where did I<br />
                    apply?
                  </span>
                  <svg
                    className="w-8 h-8 text-slate-400 mt-0.5 ml-2"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M4 8 C 8 16, 16 22, 26 24"
                      stroke="#94A3B8"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M21 26 L 27 24 L 24 19"
                      stroke="#94A3B8"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Hand-Drawn Doodle 4: "Follow up? Did I already send it?" on right */}
                <div className="absolute right-[8px] top-[138px] z-10 text-right">
                  <span className="font-handwriting text-slate-600 text-sm italic whitespace-nowrap block rotate-[5deg] leading-tight">
                    Follow up?
                    <br />
                    Did I already
                    <br />
                    send it?
                  </span>
                  <svg
                    className="w-8 h-8 text-slate-400 mt-0.5 mr-2"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M26 10 C 18 16, 12 20, 4 22"
                      stroke="#94A3B8"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M9 24 L 3 22 L 7 17"
                      stroke="#94A3B8"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Row 2: Floating Cards (Google Sheets, Gmail, Notion) */}
                <div className="absolute top-[130px] left-[70px] right-[80px] flex items-center justify-between gap-2 z-10">
                  {/* Google Sheets */}
                  <div className="relative group">
                    <div className="bg-white rounded-xl px-2.5 py-1.5 shadow-[0_8px_18px_-4px_rgba(15,23,42,0.1),0_2px_4px_rgba(15,23,42,0.04)] border border-slate-200/90 flex items-center gap-2 rotate-[-2deg] transition-all duration-300 hover:rotate-0 hover:-translate-y-1.5 hover:shadow-[0_14px_24px_-4px_rgba(15,23,42,0.14)] cursor-pointer">
                      <BrandIcon name="sheets" className="h-5 w-5 shrink-0" />
                      <div>
                        <p className="text-[11px] font-semibold text-slate-800 leading-none">
                          Google Sheets
                        </p>
                        <p className="text-[9px] text-slate-400 mt-0.5">
                          Track applications
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Gmail */}
                  <div className="relative group">
                    <div className="bg-white rounded-xl px-2.5 py-1.5 shadow-[0_8px_18px_-4px_rgba(15,23,42,0.1),0_2px_4px_rgba(15,23,42,0.04)] border border-slate-200/90 flex items-center gap-2 rotate-[1.5deg] transition-all duration-300 hover:rotate-0 hover:-translate-y-1.5 hover:shadow-[0_14px_24px_-4px_rgba(15,23,42,0.14)] cursor-pointer">
                      <BrandIcon name="gmail" className="h-5 w-5 shrink-0" />
                      <div>
                        <p className="text-[11px] font-semibold text-slate-800 leading-none">
                          Gmail
                        </p>
                        <p className="text-[9px] text-slate-400 mt-0.5">
                          Send emails
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Notion */}
                  <div className="relative group">
                    <div className="bg-white rounded-xl px-2.5 py-1.5 shadow-[0_8px_18px_-4px_rgba(15,23,42,0.1),0_2px_4px_rgba(15,23,42,0.04)] border border-slate-200/90 flex items-center gap-2 rotate-[-1.5deg] transition-all duration-300 hover:rotate-0 hover:-translate-y-1.5 hover:shadow-[0_14px_24px_-4px_rgba(15,23,42,0.14)] cursor-pointer">
                      <BrandIcon name="notion" className="h-5 w-5 shrink-0" />
                      <div>
                        <p className="text-[11px] font-semibold text-slate-800 leading-none">
                          Notion
                        </p>
                        <p className="text-[9px] text-slate-400 mt-0.5">
                          Client notes
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hand-Drawn Doodle 5: "Too many tabs..." bottom-left */}
                <div className="absolute left-[18px] bottom-[18px] z-10">
                  <span className="font-handwriting text-slate-600 text-sm italic whitespace-nowrap block rotate-[-4deg]">
                    Too many tabs...
                  </span>
                  <svg
                    className="w-10 h-6 text-slate-400 mt-0.5 ml-8"
                    viewBox="0 0 40 24"
                    fill="none"
                  >
                    <path
                      d="M4 18 C 16 18, 26 12, 34 4"
                      stroke="#94A3B8"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M28 4 L 35 4 L 35 11"
                      stroke="#94A3B8"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Google Calendar (bottom-left) */}
                <div className="absolute top-[215px] left-[55px] z-10">
                  <div className="bg-white rounded-xl px-2.5 py-1.5 shadow-[0_8px_18px_-4px_rgba(15,23,42,0.1),0_2px_4px_rgba(15,23,42,0.04)] border border-slate-200/90 flex items-center gap-2 rotate-[-1.5deg] transition-all duration-300 hover:rotate-0 hover:-translate-y-1.5 hover:shadow-[0_14px_24px_-4px_rgba(15,23,42,0.14)] cursor-pointer">
                    <BrandIcon name="google-calendar" className="h-5 w-5 shrink-0" />
                    <div>
                      <p className="text-[11px] font-semibold text-slate-800 leading-none">
                        Google Calendar
                      </p>
                      <p className="text-[9px] text-slate-400 mt-0.5">
                        Schedule follow-ups
                      </p>
                    </div>
                  </div>
                </div>

                {/* Yellow Sticky Note on Notes Board with Tape / Pin */}
                <div className="absolute top-[202px] left-[185px] sm:left-[195px] z-10 group">
                  {/* Translucent tape strip at the top */}
                  <TapeStrip className="-top-2.5" />

                  {/* Subtle paper shadow layer underneath */}
                  <div className="absolute inset-0 bg-black/10 rounded-lg blur-[3px] translate-y-2 translate-x-1 rotate-[-3deg]" />

                  {/* Main sticky note paper */}
                  <div className="relative w-[125px] sm:w-[135px] rounded-lg bg-gradient-to-b from-[#FEFCE8] via-[#FEF9C3] to-[#FEF08A] p-3 shadow-[0_10px_20px_-3px_rgba(202,138,4,0.22),0_4px_6px_rgba(0,0,0,0.04)] rotate-[-3.5deg] border border-[#FEF08A] transition-all duration-300 group-hover:rotate-0 group-hover:-translate-y-1.5 group-hover:shadow-[0_16px_28px_-3px_rgba(202,138,4,0.3)]">
                    <div className="space-y-1.5 font-handwriting text-[13px] text-slate-800 leading-snug">
                      <p className="flex items-center gap-1.5 text-slate-700">
                        <Check className="h-3 w-3 text-emerald-600 shrink-0 stroke-[2.5]" />
                        <span>Proposal draft</span>
                      </p>
                      <p className="flex items-center gap-1.5 text-slate-700">
                        <Check className="h-3 w-3 text-emerald-600 shrink-0 stroke-[2.5]" />
                        <span>Update sheet</span>
                      </p>
                      <p className="flex items-center gap-1.5 text-slate-700">
                        <Check className="h-3 w-3 text-emerald-600 shrink-0 stroke-[2.5]" />
                        <span>Reply to client</span>
                      </p>
                      <p className="flex items-center gap-1.5 text-slate-700">
                        <Check className="h-3 w-3 text-emerald-600 shrink-0 stroke-[2.5]" />
                        <span>Follow up in 3 days</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stacked Paper Notes on Board (Red Alert / Pain Points) */}
                <div className="absolute top-[210px] right-[10px] sm:right-[15px] z-10 group">
                  {/* Red Pushpin holding the stack of papers */}
                  <PushPin color="red" className="-top-3" />

                  {/* Fanned Stack Layer 1 (Back paper) */}
                  <div className="absolute inset-0 w-[150px] sm:w-[165px] h-[135px] rounded-lg bg-white border border-slate-200/90 shadow-[0_4px_12px_rgba(0,0,0,0.06)] rotate-[-4deg] translate-x-[-4px] translate-y-[2px]" />

                  {/* Fanned Stack Layer 2 (Middle paper) */}
                  <div className="absolute inset-0 w-[150px] sm:w-[165px] h-[135px] rounded-lg bg-white border border-slate-200/90 shadow-[0_6px_14px_rgba(0,0,0,0.07)] rotate-[5deg] translate-x-[3px] translate-y-[1px]" />

                  {/* Top Layer 3 (Main Alert Note) */}
                  <div className="relative w-[150px] sm:w-[165px] rounded-lg bg-gradient-to-b from-[#FFF5F5] to-[#FFE4E6] p-3 shadow-[0_12px_24px_-4px_rgba(239,68,68,0.18),0_4px_8px_rgba(0,0,0,0.04)] rotate-[1.5deg] border border-[#FECDD3] transition-all duration-300 group-hover:rotate-0 group-hover:-translate-y-1.5 group-hover:shadow-[0_18px_32px_-4px_rgba(239,68,68,0.26)]">
                    <div className="flex items-center gap-1 text-red-500 mb-1.5">
                      <AlertTriangle className="h-3.5 w-3.5 fill-red-500 text-white shrink-0" />
                    </div>
                    <div className="space-y-1.5 font-handwriting text-[13px] text-slate-800 leading-snug">
                      <p className="flex items-center gap-1.5 text-red-700">
                        <X className="h-3 w-3 text-red-500 shrink-0 stroke-[2.5]" />
                        <span>Missed follow-ups</span>
                      </p>
                      <p className="flex items-center gap-1.5 text-red-700">
                        <X className="h-3 w-3 text-red-500 shrink-0 stroke-[2.5]" />
                        <span>Lost opportunities</span>
                      </p>
                      <p className="flex items-center gap-1.5 text-red-700">
                        <X className="h-3 w-3 text-red-500 shrink-0 stroke-[2.5]" />
                        <span>Duplicate proposals</span>
                      </p>
                      <p className="flex items-center gap-1.5 text-red-700">
                        <X className="h-3 w-3 text-red-500 shrink-0 stroke-[2.5]" />
                        <span>Scattered notes</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ------------------------------------------ */}
            {/* MIDDLE ARROW BUTTON */}
            {/* ------------------------------------------ */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 h-11 w-11 items-center justify-center rounded-full bg-white shadow-[0_6px_20px_rgba(91,90,247,0.14),0_2px_6px_rgba(0,0,0,0.06)] border border-[#E0E7FF] text-[#5B5AF7] hover:scale-105 transition-transform">
              <ArrowRight className="h-5 w-5 stroke-[2.4]" />
            </div>

            {/* ------------------------------------------ */}
            {/* RIGHT CARD: WITH WINFLARE (Floating System Canvas) */}
            {/* ------------------------------------------ */}
            <div className="relative rounded-[26px] border border-[#E0E7FF] bg-gradient-to-b from-[#F9FAFD] via-[#F4F7FE] to-[#EDF2FE] p-6 sm:p-7 flex flex-col justify-between shadow-[0_20px_48px_-12px_rgba(91,90,247,0.12),0_2px_8px_rgba(0,0,0,0.03)] overflow-hidden transition-all duration-300 hover:shadow-[0_26px_56px_-10px_rgba(91,90,247,0.16)]">
              {/* Header */}
              <div>
                <span className="inline-flex items-center rounded-full bg-[#E0E7FF] px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#4F46E5]">
                  WITH WINFLARE
                </span>
                <h3 className="mt-3 text-xl sm:text-2xl font-bold tracking-tight text-[#0F172A]">
                  One platform. Complete workflow.
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Find opportunities, qualify leads, create proposals, and
                  manage your pipeline — all in one place.
                </p>
              </div>

              {/* Realistic Floating Winflare Mini-Dashboard Canvas */}
              <div className="mt-6 rounded-2xl border border-slate-200/90 bg-white shadow-[0_16px_36px_-6px_rgba(15,23,42,0.1),0_4px_10px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col md:flex-row text-left transition-all duration-300 hover:shadow-[0_22px_44px_-6px_rgba(15,23,42,0.14)]">
                {/* Mini Sidebar */}
                <MockupSidebar variant="mini" />

                {/* Main Dashboard Area */}
                <div className="flex-1 p-3.5 sm:p-4 bg-white min-w-0 flex flex-col gap-3">
                  {/* Top Bar with Search & Profile */}
                  <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-100">
                    <div className="relative flex items-center">
                      <Search className="absolute left-2 h-3 w-3 text-slate-400" />
                      <input
                        type="text"
                        readOnly
                        placeholder="Search opportunities..."
                        className="w-40 sm:w-52 rounded-md border border-slate-200 bg-slate-50/70 py-1 pl-6 pr-2 text-[10px] text-slate-600 placeholder:text-slate-400 focus:outline-none"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="relative text-slate-400 hover:text-slate-600">
                        <Bell className="h-3.5 w-3.5" />
                        <span className="absolute -top-0.5 -right-0.5 h-1.5 w-1.5 rounded-full bg-[#5B5AF7]" />
                      </button>
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#5B5AF7] text-white text-[9px] font-bold">
                        J
                      </div>
                    </div>
                  </div>

                  {/* Greeting */}
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                      Good morning, Jazab
                    </h4>
                    <p className="text-[10px] text-slate-400">
                      Here&apos;s what&apos;s happening with your client
                      acquisition.
                    </p>
                  </div>

                  {/* Row: 4 Metric Cards + Next Opportunity Card */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 items-stretch">
                    {/* 4 Metric Cards in a 4-Col Grid (7 cols on md) */}
                    <div className="md:col-span-8 grid grid-cols-4 gap-1.5">
                      {/* Metric 1: Opportunities */}
                      <div className="rounded-lg border border-slate-100 bg-[#FAFBFD] p-2 flex flex-col justify-between shadow-[0_2px_6px_rgba(15,23,42,0.03)] hover:shadow-sm transition-shadow">
                        <div className="flex items-center justify-between">
                          <div className="flex h-4 w-4 items-center justify-center rounded bg-purple-100 text-purple-600">
                            <Briefcase className="h-2.5 w-2.5" />
                          </div>
                        </div>
                        <div className="mt-1.5">
                          <div className="text-xs sm:text-sm font-extrabold text-slate-900 leading-none">
                            127
                          </div>
                          <div className="text-[8.5px] text-slate-500 truncate mt-0.5">
                            Opportunities
                          </div>
                          <div className="text-[8px] font-medium text-emerald-600 mt-0.5">
                            ↑ 32%
                          </div>
                        </div>
                      </div>

                      {/* Metric 2: Qualified */}
                      <div className="rounded-lg border border-slate-100 bg-[#FAFBFD] p-2 flex flex-col justify-between shadow-[0_2px_6px_rgba(15,23,42,0.03)] hover:shadow-sm transition-shadow">
                        <div className="flex items-center justify-between">
                          <div className="flex h-4 w-4 items-center justify-center rounded bg-blue-100 text-blue-600">
                            <ShieldCheck className="h-2.5 w-2.5" />
                          </div>
                        </div>
                        <div className="mt-1.5">
                          <div className="text-xs sm:text-sm font-extrabold text-slate-900 leading-none">
                            34
                          </div>
                          <div className="text-[8.5px] text-slate-500 truncate mt-0.5">
                            Qualified
                          </div>
                          <div className="text-[8px] font-medium text-emerald-600 mt-0.5">
                            ↑ 28%
                          </div>
                        </div>
                      </div>

                      {/* Metric 3: Proposals Sent */}
                      <div className="rounded-lg border border-slate-100 bg-[#FAFBFD] p-2 flex flex-col justify-between shadow-[0_2px_6px_rgba(15,23,42,0.03)] hover:shadow-sm transition-shadow">
                        <div className="flex items-center justify-between">
                          <div className="flex h-4 w-4 items-center justify-center rounded bg-indigo-100 text-[#5B5AF7]">
                            <Send className="h-2.5 w-2.5" />
                          </div>
                        </div>
                        <div className="mt-1.5">
                          <div className="text-xs sm:text-sm font-extrabold text-slate-900 leading-none">
                            12
                          </div>
                          <div className="text-[8.5px] text-slate-500 truncate mt-0.5">
                            Proposals Sent
                          </div>
                          <div className="text-[8px] font-medium text-emerald-600 mt-0.5">
                            ↑ 42%
                          </div>
                        </div>
                      </div>

                      {/* Metric 4: Clients Won */}
                      <div className="rounded-lg border border-slate-100 bg-[#FAFBFD] p-2 flex flex-col justify-between shadow-[0_2px_6px_rgba(15,23,42,0.03)] hover:shadow-sm transition-shadow">
                        <div className="flex items-center justify-between">
                          <div className="flex h-4 w-4 items-center justify-center rounded bg-emerald-100 text-emerald-600">
                            <Trophy className="h-2.5 w-2.5" />
                          </div>
                        </div>
                        <div className="mt-1.5">
                          <div className="text-xs sm:text-sm font-extrabold text-slate-900 leading-none">
                            2
                          </div>
                          <div className="text-[8.5px] text-slate-500 truncate mt-0.5">
                            Clients Won
                          </div>
                          <div className="text-[8px] font-medium text-emerald-600 mt-0.5">
                            ↑ 100%
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Next Opportunity Card (5 cols on md) */}
                    <div className="md:col-span-4 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] p-2.5 text-white flex flex-col justify-between shadow-[0_6px_16px_rgba(99,102,241,0.25)] hover:shadow-[0_8px_20px_rgba(99,102,241,0.32)] transition-shadow">
                      <div>
                        <div className="flex items-center gap-1 text-[9px] text-white/80 font-medium">
                          <Sparkles className="h-2.5 w-2.5" />
                          <span>Next Opportunity</span>
                        </div>
                        <h5 className="mt-1 text-[10.5px] font-bold text-white leading-tight">
                          Marketing Automation Setup
                        </h5>
                        <p className="text-[9px] text-white/90 font-medium mt-0.5">
                          $2,000 - $4,000
                        </p>
                      </div>
                      <div className="mt-2">
                        <span className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-0.5 text-[8.5px] font-bold text-[#6366F1] shadow-xs hover:bg-slate-50 transition-colors cursor-pointer">
                          View Details →
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Row: Recent Opportunities Table + Quick Actions */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-3 pt-1 items-start">
                    {/* Recent Opportunities (8 cols on md) */}
                    <div className="md:col-span-8">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[11px] font-bold text-slate-900">
                          Recent Opportunities
                        </span>
                        <span className="text-[9px] font-semibold text-[#5B5AF7] hover:underline cursor-pointer">
                          View all →
                        </span>
                      </div>

                      {/* Opportunities Table */}
                      <div className="border border-slate-100 rounded-lg overflow-hidden text-[9px] shadow-[0_1px_3px_rgba(15,23,42,0.03)]">
                        <div className="grid grid-cols-12 bg-slate-50/80 px-2 py-1 text-slate-400 font-medium">
                          <div className="col-span-5">Client / Project</div>
                          <div className="col-span-3">Budget</div>
                          <div className="col-span-2">Status</div>
                          <div className="col-span-2 text-right">Match</div>
                        </div>

                        {/* Row 1 */}
                        <div className="grid grid-cols-12 items-center px-2 py-1.5 border-t border-slate-100 bg-white hover:bg-slate-50/60 transition-colors">
                          <div className="col-span-5 flex items-center gap-1.5 min-w-0">
                            <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded bg-blue-600 text-white font-bold text-[7px]">
                              D
                            </div>
                            <div className="min-w-0">
                              <p className="font-semibold text-slate-800 truncate leading-none">
                                Frontend Developer Needed
                              </p>
                              <p className="text-[8px] text-slate-400 truncate mt-0.5">
                                TechNova Solutions
                              </p>
                            </div>
                          </div>
                          <div className="col-span-3 text-slate-600 font-medium">
                            $3,000 - $6,000
                          </div>
                          <div className="col-span-2">
                            <span className="rounded-full bg-emerald-50 text-emerald-600 px-1.5 py-0.5 text-[7.5px] font-semibold border border-emerald-200/60">
                              Qualified
                            </span>
                          </div>
                          <div className="col-span-2 text-right font-bold text-emerald-600">
                            92%
                          </div>
                        </div>

                        {/* Row 2 */}
                        <div className="grid grid-cols-12 items-center px-2 py-1.5 border-t border-slate-100 bg-white hover:bg-slate-50/60 transition-colors">
                          <div className="col-span-5 flex items-center gap-1.5 min-w-0">
                            <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded bg-indigo-600 text-white font-bold text-[7px]">
                              F
                            </div>
                            <div className="min-w-0">
                              <p className="font-semibold text-slate-800 truncate leading-none">
                                Full Stack Developer
                              </p>
                              <p className="text-[8px] text-slate-400 truncate mt-0.5">
                                BrightPath Media
                              </p>
                            </div>
                          </div>
                          <div className="col-span-3 text-slate-600 font-medium">
                            $1,500 - $3,000
                          </div>
                          <div className="col-span-2">
                            <span className="rounded-full bg-indigo-50 text-indigo-600 px-1.5 py-0.5 text-[7.5px] font-semibold border border-indigo-200/60">
                              Proposal Sent
                            </span>
                          </div>
                          <div className="col-span-2 text-right font-bold text-emerald-600">
                            87%
                          </div>
                        </div>

                        {/* Row 3 */}
                        <div className="grid grid-cols-12 items-center px-2 py-1.5 border-t border-slate-100 bg-white hover:bg-slate-50/60 transition-colors">
                          <div className="col-span-5 flex items-center gap-1.5 min-w-0">
                            <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded bg-slate-800 text-white font-bold text-[7px]">
                              S
                            </div>
                            <div className="min-w-0">
                              <p className="font-semibold text-slate-800 truncate leading-none">
                                Website Redesign
                              </p>
                              <p className="text-[8px] text-slate-400 truncate mt-0.5">
                                Summit Software
                              </p>
                            </div>
                          </div>
                          <div className="col-span-3 text-slate-600 font-medium">
                            $4,000 - $8,000
                          </div>
                          <div className="col-span-2">
                            <span className="rounded-full bg-amber-50 text-amber-600 px-1.5 py-0.5 text-[7.5px] font-semibold border border-amber-200/60">
                              In Discussion
                            </span>
                          </div>
                          <div className="col-span-2 text-right font-bold text-emerald-600">
                            76%
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Quick Actions (4 cols on md) */}
                    <div className="md:col-span-4">
                      <div className="mb-1.5">
                        <span className="text-[11px] font-bold text-slate-900">
                          Quick Actions
                        </span>
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2 rounded-lg border border-slate-100 bg-[#FAFBFD] px-2.5 py-1.5 text-[9.5px] font-medium text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer shadow-2xs">
                          <Search className="h-3 w-3 text-slate-400 shrink-0" />
                          <span>Search Jobs</span>
                        </div>
                        <div className="flex items-center gap-2 rounded-lg border border-slate-100 bg-[#FAFBFD] px-2.5 py-1.5 text-[9.5px] font-medium text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer shadow-2xs">
                          <FileText className="h-3 w-3 text-slate-400 shrink-0" />
                          <span>Generate Proposal</span>
                        </div>
                        <div className="flex items-center gap-2 rounded-lg border border-slate-100 bg-[#FAFBFD] px-2.5 py-1.5 text-[9.5px] font-medium text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer shadow-2xs">
                          <PlusCircle className="h-3 w-3 text-slate-400 shrink-0" />
                          <span>Add to Pipeline</span>
                        </div>
                        <div className="flex items-center gap-2 rounded-lg border border-slate-100 bg-[#FAFBFD] px-2.5 py-1.5 text-[9.5px] font-medium text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer shadow-2xs">
                          <MessageSquare className="h-3 w-3 text-slate-400 shrink-0" />
                          <span>View Messages</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================== */}
        {/* Bottom 4 Feature Pillars */}
        {/* ========================================== */}
        <div className="mt-14 pt-10 border-t border-slate-200/80">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <ValuePillarCard
              icon={Shuffle}
              title="No more jumping between tabs"
              description="Everything in one place."
              iconBg="bg-[#EDE9FE]"
              iconColor="text-[#5B5AF7]"
            />
            <ValuePillarCard
              icon={Clock}
              title="Save hours of manual work"
              description="Automate the repetitive."
              iconBg="bg-[#E0E7FF]"
              iconColor="text-[#4F46E5]"
            />
            <ValuePillarCard
              icon={Target}
              title="Never miss a follow-up"
              description="Stay on top of every opportunity."
              iconBg="bg-[#F3E8FF]"
              iconColor="text-[#7C3AED]"
            />
            <ValuePillarCard
              icon={BarChart3}
              title="Turn efforts into real clients"
              description="Track. Convert. Grow."
              iconBg="bg-[#EDE9FE]"
              iconColor="text-[#5B5AF7]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
