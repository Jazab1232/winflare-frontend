'use client';

import React from 'react';
import {
  TrendingUp,
  Clock,
  Target,
  Eye,
  Zap,
  Search,
  User,
  FileText,
  MessageSquare,
  Crown,
  Globe,
  Users,
  Plus,
  BarChart2,
} from 'lucide-react';
import { WinflareLogo } from './navbar';

// ============================================================================
// OUTCOMES SECTION
// Pixel-perfect implementation based on the Winflare acquisition OS funnel mockup.
// Features:
// 1. Multiple source light packets (LinkedIn, Indeed, Websites, Referrals, etc.)
//    simultaneously converge into the central Winflare Hub.
// 2. Winflare Hub unifies them and emits a SINGLE brilliant light dot that
//    flows sequentially through each pipeline stage.
// 3. Each stage card illuminates with a custom glow as the dot passes through it.
// 4. Zero gaps between arrows and cards, with the chevron button removed.
// ============================================================================

export function OutcomesSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28 bg-[#FAFBFF]">
      {/* CSS Keyframe Animations: 100% Pure CSS Synchronization (9s Linear Cycle) */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* 5 Source Curves Dots (0.00s - 1.44s = 0% - 16.0%) */
        @keyframes outcomesCurveDots {
          0% {
            offset-distance: 0%;
            opacity: 0;
          }
          1.5% {
            opacity: 1;
          }
          15.0% {
            opacity: 1;
          }
          16.0%, 100% {
            offset-distance: 100%;
            opacity: 0;
          }
        }
        .outcomes-curve-dot1,
        .outcomes-curve-dot2,
        .outcomes-curve-dot3,
        .outcomes-curve-dot4,
        .outcomes-curve-dot5 {
          animation: outcomesCurveDots 9s infinite linear;
        }

        /* Winflare Hub Glow (1.44s - 2.25s = 16.0% - 25.0%) */
        @keyframes outcomesWinflareGlow {
          0%, 16.0%, 25.0%, 100% {
            border-color: #F1F5F9;
            box-shadow: 0 12px 36px -6px rgba(99,102,241,0.18), 0 2px 8px rgba(15,23,42,0.03);
            transform: translateY(0);
          }
          17.5%, 21.5% {
            border-color: #818CF8;
            box-shadow: 0 0 28px rgba(99,102,241,0.45), 0 12px 36px -6px rgba(99,102,241,0.25);
            transform: translateY(-2px);
          }
        }
        .outcomes-winflare-glow { animation: outcomesWinflareGlow 9s infinite linear; }

        /* Arrow 1 Dot: Winflare -> Card 1 (1.98s - 2.70s = 22.0% - 30.0%) */
        @keyframes outcomesDotArrow1 {
          0%, 22.0% {
            transform: translateX(0px);
            opacity: 0;
          }
          22.3% {
            opacity: 1;
          }
          29.7% {
            opacity: 1;
          }
          30.0%, 100% {
            transform: translateX(36px);
            opacity: 0;
          }
        }
        .outcomes-dot-arrow1 { animation: outcomesDotArrow1 9s infinite linear; }

        /* Card 1: Opportunities Glow (2.70s - 3.60s = 30.0% - 40.0%) */
        @keyframes outcomesCard1Glow {
          0%, 30.0%, 40.0%, 100% {
            border-color: #F1F5F9;
            box-shadow: 0 4px 16px rgba(15,23,42,0.03);
            transform: translateY(0);
          }
          31.5%, 36.0% {
            border-color: #38BDF8;
            box-shadow: 0 0 24px rgba(56,189,248,0.5), 0 8px 24px rgba(56,189,248,0.18);
            transform: translateY(-2px);
          }
        }
        .outcomes-card1-glow { animation: outcomesCard1Glow 9s infinite linear; }

        /* Arrow 2 Dot: Card 1 -> Card 2 (3.33s - 3.96s = 37.0% - 44.0%) */
        @keyframes outcomesDotArrow2 {
          0%, 37.0% {
            transform: translateX(0px);
            opacity: 0;
          }
          37.3% {
            opacity: 1;
          }
          43.7% {
            opacity: 1;
          }
          44.0%, 100% {
            transform: translateX(28px);
            opacity: 0;
          }
        }
        .outcomes-dot-arrow2 { animation: outcomesDotArrow2 9s infinite linear; }

        /* Card 2: Qualified Glow (3.96s - 4.86s = 44.0% - 54.0%) */
        @keyframes outcomesCard2Glow {
          0%, 44.0%, 54.0%, 100% {
            border-color: #F1F5F9;
            box-shadow: 0 4px 16px rgba(15,23,42,0.03);
            transform: translateY(0);
          }
          45.5%, 50.0% {
            border-color: #818CF8;
            box-shadow: 0 0 24px rgba(99,102,241,0.5), 0 8px 24px rgba(99,102,241,0.18);
            transform: translateY(-2px);
          }
        }
        .outcomes-card2-glow { animation: outcomesCard2Glow 9s infinite linear; }

        /* Arrow 3 Dot: Card 2 -> Card 3 (4.59s - 5.22s = 51.0% - 58.0%) */
        @keyframes outcomesDotArrow3 {
          0%, 51.0% {
            transform: translateX(0px);
            opacity: 0;
          }
          51.3% {
            opacity: 1;
          }
          57.7% {
            opacity: 1;
          }
          58.0%, 100% {
            transform: translateX(28px);
            opacity: 0;
          }
        }
        .outcomes-dot-arrow3 { animation: outcomesDotArrow3 9s infinite linear; }

        /* Card 3: Proposals Glow (5.22s - 6.12s = 58.0% - 68.0%) */
        @keyframes outcomesCard3Glow {
          0%, 58.0%, 68.0%, 100% {
            border-color: #F1F5F9;
            box-shadow: 0 4px 16px rgba(15,23,42,0.03);
            transform: translateY(0);
          }
          59.5%, 64.0% {
            border-color: #A855F7;
            box-shadow: 0 0 24px rgba(168,85,247,0.5), 0 8px 24px rgba(168,85,247,0.18);
            transform: translateY(-2px);
          }
        }
        .outcomes-card3-glow { animation: outcomesCard3Glow 9s infinite linear; }

        /* Arrow 4 Dot: Card 3 -> Card 4 (5.85s - 6.48s = 65.0% - 72.0%) */
        @keyframes outcomesDotArrow4 {
          0%, 65.0% {
            transform: translateX(0px);
            opacity: 0;
          }
          65.3% {
            opacity: 1;
          }
          71.7% {
            opacity: 1;
          }
          72.0%, 100% {
            transform: translateX(28px);
            opacity: 0;
          }
        }
        .outcomes-dot-arrow4 { animation: outcomesDotArrow4 9s infinite linear; }

        /* Card 4: Conversations Glow (6.48s - 7.38s = 72.0% - 82.0%) */
        @keyframes outcomesCard4Glow {
          0%, 72.0%, 82.0%, 100% {
            border-color: #F1F5F9;
            box-shadow: 0 4px 16px rgba(15,23,42,0.03);
            transform: translateY(0);
          }
          73.5%, 78.0% {
            border-color: #C084FC;
            box-shadow: 0 0 24px rgba(192,132,252,0.5), 0 8px 24px rgba(192,132,252,0.18);
            transform: translateY(-2px);
          }
        }
        .outcomes-card4-glow { animation: outcomesCard4Glow 9s infinite linear; }

        /* Arrow 5 Dot: Card 4 -> Card 5 (7.11s - 7.74s = 79.0% - 86.0%) */
        @keyframes outcomesDotArrow5 {
          0%, 79.0% {
            transform: translateX(0px);
            opacity: 0;
          }
          79.3% {
            opacity: 1;
          }
          85.7% {
            opacity: 1;
          }
          86.0%, 100% {
            transform: translateX(28px);
            opacity: 0;
          }
        }
        .outcomes-dot-arrow5 { animation: outcomesDotArrow5 9s infinite linear; }

        /* Card 5: Clients Won Celebration Glow (7.74s - 8.64s = 86.0% - 96.0%) */
        @keyframes outcomesCard5Glow {
          0%, 86.0%, 96.0%, 100% {
            border-color: #F1F5F9;
            box-shadow: 0 4px 16px rgba(15,23,42,0.03);
            transform: translateY(0);
          }
          87.5%, 93.0% {
            border-color: #F59E0B;
            box-shadow: 0 0 28px rgba(245,158,11,0.55), 0 8px 24px rgba(245,158,11,0.22);
            transform: translateY(-2px);
          }
        }
        .outcomes-card5-glow { animation: outcomesCard5Glow 9s infinite linear; }

        /* Revenue Growth Card (7.92s - 8.82s = 88.0% - 98.0%) */
        @keyframes outcomesRevCardGlow {
          0%, 88.0%, 98.0%, 100% {
            border-color: #F1F5F9;
            box-shadow: 0 10px 30px rgba(15,23,42,0.06), 0 2px 6px rgba(15,23,42,0.02);
            transform: translateY(0);
          }
          90.0%, 95.0% {
            border-color: #34D399;
            box-shadow: 0 0 28px rgba(52,211,153,0.45), 0 10px 30px rgba(52,211,153,0.22);
            transform: translateY(-2px);
          }
        }
        .outcomes-revcard-glow { animation: outcomesRevCardGlow 9s infinite linear; }
      `}} />

      {/* Ambient Top & Center Radial Glows */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[420px] pointer-events-none opacity-50 z-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(221, 214, 254, 0.45), transparent 70%)',
        }}
      />
      <div
        className="absolute top-[400px] left-[35%] -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] pointer-events-none opacity-30 z-0 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(165, 180, 252, 0.35) 0%, rgba(224, 231, 255, 0.15) 50%, transparent 70%)',
        }}
      />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 max-w-[1340px] mx-auto">
        {/* ========================================== */}
        {/* Section Header */}
        {/* ========================================== */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#EDE9FE]/80 px-3.5 py-1 border border-[#DDD6FE]/70 shadow-[0_1px_2px_rgba(85,54,250,0.05)]">
            {/* Sunburst Icon */}
            <svg
              className="w-3.5 h-3.5 text-[#5536FA]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <circle cx="12" cy="12" r="3" fill="currentColor" />
              <line x1="12" y1="2" x2="12" y2="5" />
              <line x1="12" y1="19" x2="12" y2="22" />
              <line x1="2" y1="12" x2="5" y2="12" />
              <line x1="19" y1="12" x2="22" y2="12" />
              <line x1="4.93" y1="4.93" x2="7.05" y2="7.05" />
              <line x1="16.95" y1="16.95" x2="19.07" y2="19.07" />
              <line x1="4.93" y1="19.07" x2="7.05" y2="16.95" />
              <line x1="16.95" y1="7.05" x2="19.07" y2="4.93" />
            </svg>
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#5536FA]">
              THE OUTCOME
            </span>
          </div>

          {/* Headline */}
          <h2 className="mt-6 text-3xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight text-[#0F172A] leading-[1.12]">
            More clients. Less chaos. <br />
            <span className="text-[#6366F1]">Real business </span>
            <span className="text-[#4F46E5]">growth.</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-sm sm:text-base lg:text-[17px] text-[#64748B] max-w-2xl mx-auto leading-relaxed font-normal">
            Winflare helps you find the right opportunities, streamline your workflow,{' '}
            <br className="hidden sm:inline" />
            and turn consistent effort into predictable revenue.
          </p>
        </div>

        {/* ========================================== */}
        {/* Main Pipeline Flow Diagram */}
        {/* ========================================== */}
        <div className="relative mt-24 lg:mt-28 w-full max-w-[1300px] mx-auto overflow-x-auto lg:overflow-visible pb-12 pt-16 scrollbar-none">
          <div className="min-w-[1120px] lg:min-w-0 w-full relative">
            {/* SVG Defs for Light Dot Glow & Acquisition OS Arrowhead Marker */}
            <svg className="absolute w-0 h-0 pointer-events-none">
              <defs>
                <marker
                  id="outcomes-arrow-head"
                  viewBox="0 0 8 8"
                  refX="7"
                  refY="4"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 1 1 L 7 4 L 1 7 z" fill="#8B8AFF" />
                </marker>

                <filter
                  id="outcomes-dot-glow"
                  x="-50%"
                  y="-50%"
                  width="200%"
                  height="200%"
                >
                  <feGaussianBlur stdDeviation="1.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
            </svg>

            {/* ------------------------------------------ */}
            {/* FLOATING TOP-RIGHT: Revenue Growth Card & Handwriting Note */}
            {/* (Positioned cleanly above cards with zero overlap) */}
            {/* ------------------------------------------ */}
             <div className="mb-3 pl-0.5 w-[205px] sm:w-[210px]">
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#0F172A]">
                    YOUR SOURCES, UNIFIED
                  </div>
                  <p className="text-[11px] text-[#64748B] leading-snug mt-0.5">
                    Find opportunities from multiple channels automatically — all in one place.
                  </p>
                </div>
            <div className="absolute -top-[118px] right-0 flex items-center gap-3.5 z-20 pointer-events-auto">
              {/* Revenue Growth Card */}
              <div className="outcomes-revcard-glow w-[230px] rounded-2xl bg-white border border-slate-100 p-3.5 transition-all duration-300">
                {/* Header Row */}
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <BarChart2 className="w-3.5 h-3.5 text-[#5536FA] stroke-[2.2]" />
                    <span className="text-[11.5px] font-bold text-[#0F172A]">
                      Revenue Growth
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-md bg-[#ECFDF5] text-[#059669] text-[9.5px] font-bold border border-[#A7F3D0]/50">
                    ↑ 312%
                  </span>
                </div>

                {/* Stat + Sparkline */}
                <div className="mt-2 flex items-end justify-between">
                  <div>
                    <div className="text-xl font-black text-[#0F172A] tracking-tight leading-none">
                      $48,750
                    </div>
                    <div className="text-[9.5px] text-[#64748B] font-medium mt-1">
                      Total revenue from won clients
                    </div>
                  </div>

                  {/* Area Sparkline */}
                  <div className="w-20 h-8 relative">
                    <svg viewBox="0 0 96 36" className="w-full h-full overflow-visible">
                      <defs>
                        <linearGradient id="revGrowthGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#818CF8" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#C7D2FE" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M 0 30 C 20 28, 35 22, 50 18 C 65 14, 78 8, 96 4 L 96 36 L 0 36 Z"
                        fill="url(#revGrowthGrad)"
                      />
                      <path
                        d="M 0 30 C 20 28, 35 22, 50 18 C 65 14, 78 8, 96 4"
                        fill="none"
                        stroke="#6366F1"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Hand-drawn Arrow & Note: Next to Revenue Growth Card */}
              <div className="flex items-center gap-1.5 pointer-events-none select-none pl-1">
                <svg
                  width="36"
                  height="30"
                  viewBox="0 0 36 30"
                  fill="none"
                  className="overflow-visible text-[#6366F1] shrink-0"
                >
                  <path
                    d="M 4 24 C 12 20, 20 14, 26 6"
                    stroke="#6366F1"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 17 4 L 26 6 L 24 14"
                    stroke="#6366F1"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="font-handwriting text-[13.5px] text-[#6366F1] font-bold leading-tight -rotate-3 whitespace-nowrap">
                  <div>More clients.</div>
                  <div>More revenue.</div>
                </div>
              </div>
            </div>

            {/* ------------------------------------------ */}
            {/* THE MAIN UNIFIED PIPELINE ROW */}
            {/* (Zero gaps: connected seamlessly from sources into cards) */}
            {/* ------------------------------------------ */}
            <div className="flex items-center w-full">
              {/* LEFT GROUP: Sources Header + (5 Pills + Precision Connected Curves) */}
              <div className="flex flex-col shrink-0">
                {/* Header */}
               

                {/* 5 Pills & Curves: Exact Height Alignment (222px) */}
                <div className="flex items-center">
                  {/* 5 Source Pills */}
                  <div className="flex flex-col gap-2 w-[205px] sm:w-[210px] shrink-0">
                    {/* 1. LinkedIn */}
                    <div className="group flex items-center justify-between h-[38px] rounded-2xl bg-white px-3 border border-slate-100 shadow-[0_3px_12px_rgba(15,23,42,0.03)] transition-all duration-200 hover:shadow-md hover:border-indigo-100">
                      <div className="flex items-center gap-2">
                        <div className="flex h-5 w-5 items-center justify-center rounded bg-[#0A66C2] text-white text-[11px] font-bold font-sans shadow-xs">
                          in
                        </div>
                        <div>
                          <div className="text-[11.5px] font-bold text-[#0F172A] leading-tight">
                            LinkedIn
                          </div>
                          <div className="text-[9px] text-[#64748B] leading-none mt-0.5">
                            Jobs & companies
                          </div>
                        </div>
                      </div>
                      <Plus className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#5536FA] transition-colors" />
                    </div>

                    {/* 2. Indeed */}
                    <div className="group flex items-center justify-between h-[38px] rounded-2xl bg-white px-3 border border-slate-100 shadow-[0_3px_12px_rgba(15,23,42,0.03)] transition-all duration-200 hover:shadow-md hover:border-indigo-100">
                      <div className="flex items-center gap-2">
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#2164F3] text-white text-[11px] font-serif font-bold shadow-xs">
                          i
                        </div>
                        <div>
                          <div className="text-[11.5px] font-bold text-[#0F172A] leading-tight">
                            Indeed
                          </div>
                          <div className="text-[9px] text-[#64748B] leading-none mt-0.5">
                            Job listings
                          </div>
                        </div>
                      </div>
                      <Plus className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#5536FA] transition-colors" />
                    </div>

                    {/* 3. Company Websites */}
                    <div className="group flex items-center justify-between h-[38px] rounded-2xl bg-white px-3 border border-slate-100 shadow-[0_3px_12px_rgba(15,23,42,0.03)] transition-all duration-200 hover:shadow-md hover:border-indigo-100">
                      <div className="flex items-center gap-2">
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#EEF2FF] text-[#4F46E5] shadow-xs">
                          <Globe className="w-3 h-3" />
                        </div>
                        <div>
                          <div className="text-[11.5px] font-bold text-[#0F172A] leading-tight">
                            Company Websites
                          </div>
                          <div className="text-[9px] text-[#64748B] leading-none mt-0.5">
                            Careers page
                          </div>
                        </div>
                      </div>
                      <Plus className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#5536FA] transition-colors" />
                    </div>

                    {/* 4. Referrals */}
                    <div className="group flex items-center justify-between h-[38px] rounded-2xl bg-white px-3 border border-slate-100 shadow-[0_3px_12px_rgba(15,23,42,0.03)] transition-all duration-200 hover:shadow-md hover:border-indigo-100">
                      <div className="flex items-center gap-2">
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#EDE9FE] text-[#5536FA] shadow-xs">
                          <Users className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-[11.5px] font-bold text-[#0F172A] leading-tight">
                            Referrals
                          </div>
                          <div className="text-[9px] text-[#64748B] leading-none mt-0.5">
                            Network & connections
                          </div>
                        </div>
                      </div>
                      <Plus className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#5536FA] transition-colors" />
                    </div>

                    {/* 5. + More Sources */}
                    <div className="group flex items-center justify-between h-[38px] rounded-2xl bg-white px-3 border border-slate-100 shadow-[0_3px_12px_rgba(15,23,42,0.03)] transition-all duration-200 hover:shadow-md hover:border-indigo-100">
                      <div className="flex items-center gap-2">
                        <div className="flex h-5 w-5 items-center justify-center rounded-lg bg-[#F3E8FF] text-[#7C3AED] shadow-xs">
                          <FileText className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-[11.5px] font-bold text-[#0F172A] leading-tight">
                            + More Sources
                          </div>
                          <div className="text-[9px] text-[#64748B] leading-none mt-0.5">
                            and automation
                          </div>
                        </div>
                      </div>
                      <Plus className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#5536FA] transition-colors" />
                    </div>
                  </div>

                  {/* Animated Bézier Curves: ALL 5 Sources Simultaneously Emit Moving Light Dots */}
                  <div className="w-[90px] h-[222px] shrink-0 relative pointer-events-none">
                    <svg
                      className="w-full h-full overflow-visible"
                      viewBox="0 0 90 222"
                      fill="none"
                    >
                      {/* Curve 1: LinkedIn -> Winflare Hub */}
                      <path
                        d="M 0 19 C 50 19, 55 79, 90 79"
                        stroke="#8B8AFF"
                        strokeWidth="1.6"
                        strokeDasharray="4 4"
                        markerEnd="url(#outcomes-arrow-head)"
                      />
                      {/* Curve 2: Indeed -> Winflare Hub */}
                      <path
                        d="M 0 65 C 50 65, 55 95, 90 95"
                        stroke="#8B8AFF"
                        strokeWidth="1.6"
                        strokeDasharray="4 4"
                        markerEnd="url(#outcomes-arrow-head)"
                      />
                      {/* Curve 3: Company Websites -> Winflare Hub */}
                      <path
                        d="M 0 111 C 45 111, 55 111, 90 111"
                        stroke="#8B8AFF"
                        strokeWidth="1.6"
                        strokeDasharray="4 4"
                        markerEnd="url(#outcomes-arrow-head)"
                      />
                      {/* Curve 4: Referrals -> Winflare Hub */}
                      <path
                        d="M 0 157 C 50 157, 55 127, 90 127"
                        stroke="#8B8AFF"
                        strokeWidth="1.6"
                        strokeDasharray="4 4"
                        markerEnd="url(#outcomes-arrow-head)"
                      />
                      {/* Curve 5: + More Sources -> Winflare Hub */}
                      <path
                        d="M 0 203 C 50 203, 55 143, 90 143"
                        stroke="#8B8AFF"
                        strokeWidth="1.6"
                        strokeDasharray="4 4"
                        markerEnd="url(#outcomes-arrow-head)"
                      />
                    </svg>

                    {/* CSS Synchronized Moving Light Dots (0.00s - 1.44s) */}
                    {/* Dot 1: LinkedIn */}
                    <div
                      className="absolute left-0 top-0 w-0 h-0 pointer-events-none outcomes-curve-dot1"
                      style={{
                        offsetPath: 'path("M 0 19 C 50 19, 55 79, 90 79")',
                        offsetRotate: '0deg',
                        offsetAnchor: '0 0',
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="-10 -10 20 20"
                        className="overflow-visible"
                        style={{ position: 'absolute', left: -10, top: -10 }}
                      >
                        <circle
                          r="2.8"
                          fill="#5B5AF7"
                          opacity="0.75"
                          filter="url(#outcomes-dot-glow)"
                        />
                        <circle r="1.6" fill="#FFFFFF" />
                      </svg>
                    </div>

                    {/* Dot 2: Indeed */}
                    <div
                      className="absolute left-0 top-0 w-0 h-0 pointer-events-none outcomes-curve-dot2"
                      style={{
                        offsetPath: 'path("M 0 65 C 50 65, 55 95, 90 95")',
                        offsetRotate: '0deg',
                        offsetAnchor: '0 0',
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="-10 -10 20 20"
                        className="overflow-visible"
                        style={{ position: 'absolute', left: -10, top: -10 }}
                      >
                        <circle
                          r="2.8"
                          fill="#5B5AF7"
                          opacity="0.75"
                          filter="url(#outcomes-dot-glow)"
                        />
                        <circle r="1.6" fill="#FFFFFF" />
                      </svg>
                    </div>

                    {/* Dot 3: Company Websites */}
                    <div
                      className="absolute left-0 top-0 w-0 h-0 pointer-events-none outcomes-curve-dot3"
                      style={{
                        offsetPath: 'path("M 0 111 C 45 111, 55 111, 90 111")',
                        offsetRotate: '0deg',
                        offsetAnchor: '0 0',
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="-10 -10 20 20"
                        className="overflow-visible"
                        style={{ position: 'absolute', left: -10, top: -10 }}
                      >
                        <circle
                          r="2.8"
                          fill="#5B5AF7"
                          opacity="0.75"
                          filter="url(#outcomes-dot-glow)"
                        />
                        <circle r="1.6" fill="#FFFFFF" />
                      </svg>
                    </div>

                    {/* Dot 4: Referrals */}
                    <div
                      className="absolute left-0 top-0 w-0 h-0 pointer-events-none outcomes-curve-dot4"
                      style={{
                        offsetPath: 'path("M 0 157 C 50 157, 55 127, 90 127")',
                        offsetRotate: '0deg',
                        offsetAnchor: '0 0',
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="-10 -10 20 20"
                        className="overflow-visible"
                        style={{ position: 'absolute', left: -10, top: -10 }}
                      >
                        <circle
                          r="2.8"
                          fill="#5B5AF7"
                          opacity="0.75"
                          filter="url(#outcomes-dot-glow)"
                        />
                        <circle r="1.6" fill="#FFFFFF" />
                      </svg>
                    </div>

                    {/* Dot 5: + More Sources */}
                    <div
                      className="absolute left-0 top-0 w-0 h-0 pointer-events-none outcomes-curve-dot5"
                      style={{
                        offsetPath: 'path("M 0 203 C 50 203, 55 143, 90 143")',
                        offsetRotate: '0deg',
                        offsetAnchor: '0 0',
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="-10 -10 20 20"
                        className="overflow-visible"
                        style={{ position: 'absolute', left: -10, top: -10 }}
                      >
                        <circle
                          r="2.8"
                          fill="#5B5AF7"
                          opacity="0.75"
                          filter="url(#outcomes-dot-glow)"
                        />
                        <circle r="1.6" fill="#FFFFFF" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* CENTER: Winflare Hub Card (All 5 streams unite here, pulsing at 1.0s - 1.4s) */}
              <div className="relative shrink-0 flex items-center">
                {/* Purple radial ambient glow */}
                <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-[#DDD6FE]/60 via-[#EDE9FE]/50 to-transparent blur-xl pointer-events-none" />

                {/* Winflare Card */}
                <div className="outcomes-winflare-glow relative z-10 w-[140px] sm:w-[146px] h-[144px] rounded-3xl bg-white border border-slate-100 flex flex-col items-center justify-center p-3 text-center transition-all duration-300 hover:scale-[1.02]">
                  <WinflareLogo className="w-10 h-10 drop-shadow-sm" />
                  <div className="mt-2 text-[17px] font-black text-[#0F172A] tracking-tight">
                    Winflare
                  </div>
                  <div className="text-[10px] font-medium text-[#64748B] mt-0.5 leading-tight">
                    Your Client Acquisition OS
                  </div>
                </div>
              </div>

              {/* Continuous Arrow from Winflare directly into Opportunities (Chevron removed) */}
              {/* THE UNIFIED SINGLE DOT emerges here at Step 1 (1.26s - 1.68s = 21.0% - 28.0%) */}
              <div className="w-[36px] h-[144px] shrink-0 relative flex items-center justify-center">
                <svg width="36" height="14" viewBox="0 0 36 14" className="w-full overflow-visible">
                  <path
                    d="M 0 7 L 36 7"
                    stroke="#8B8AFF"
                    strokeWidth="1.6"
                    strokeDasharray="4 4"
                    markerEnd="url(#outcomes-arrow-head)"
                  />
                </svg>

                {/* CSS Synchronized Moving Light Dot (1.98s - 2.70s) */}
                <div className="absolute left-0 top-1/2 w-0 h-0 pointer-events-none outcomes-dot-arrow1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="-10 -10 20 20"
                    className="overflow-visible"
                    style={{ position: 'absolute', left: -10, top: -10 }}
                  >
                    <circle
                      r="2.8"
                      fill="#5B5AF7"
                      opacity="0.75"
                      filter="url(#outcomes-dot-glow)"
                    />
                    <circle r="1.6" fill="#FFFFFF" />
                  </svg>
                </div>
              </div>

              {/* RIGHT: The 5 Pipeline Cards (Zero-Gap Connectors + Responsive Full-Span Flow) */}
              <div className="flex-1 flex items-center min-w-0">
                {/* Card 1: Opportunities (Glows at 28.0% - 38.0% = 1.68s - 2.28s) */}
                <div className="outcomes-card1-glow flex-1 min-w-[110px] max-w-[145px] h-[144px] rounded-2xl bg-white border border-slate-100 p-3 flex flex-col justify-between transition-all duration-200">
                  <div>
                    <div className="inline-flex p-1.5 rounded-xl bg-[#E0F2FE] text-[#0284C7]">
                      <Search className="w-3.5 h-3.5 stroke-[2.2]" />
                    </div>
                    <div className="text-[11px] font-medium text-[#64748B] mt-2">
                      Opportunities
                    </div>
                    <div className="text-xl font-bold text-[#0F172A] leading-tight mt-0.5">
                      127
                    </div>
                    <div className="text-[10px] font-semibold text-[#16A34A] flex items-center gap-0.5 mt-0.5">
                      ↑ 312%
                    </div>
                  </div>

                  <div className="w-full h-5 mt-1">
                    <svg viewBox="0 0 80 20" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="spkShared" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#818CF8" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#C7D2FE" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M 0 17 C 20 18, 35 15, 50 12 C 65 9, 72 5, 80 3 L 80 20 L 0 20 Z"
                        fill="url(#spkShared)"
                      />
                      <path
                        d="M 0 17 C 20 18, 35 15, 50 12 C 65 9, 72 5, 80 3"
                        fill="none"
                        stroke="#6366F1"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Connector 1 -> 2: Touching Card 1 & Card 2 Borders */}
                {/* THE SINGLE DOT travels here at Step 2 (2.10s - 2.52s = 35.0% - 42.0%) */}
                <div className="w-[28px] h-[144px] shrink-0 relative flex items-center justify-center">
                  <svg width="28" height="14" viewBox="0 0 28 14" className="w-full overflow-visible">
                    <path
                      d="M 0 7 L 28 7"
                      stroke="#8B8AFF"
                      strokeWidth="1.6"
                      strokeDasharray="4 4"
                      markerEnd="url(#outcomes-arrow-head)"
                    />
                  </svg>

                  {/* CSS Synchronized Moving Light Dot (3.33s - 3.96s) */}
                  <div className="absolute left-0 top-1/2 w-0 h-0 pointer-events-none outcomes-dot-arrow2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="-10 -10 20 20"
                      className="overflow-visible"
                      style={{ position: 'absolute', left: -10, top: -10 }}
                    >
                      <circle
                        r="2.8"
                        fill="#5B5AF7"
                        opacity="0.75"
                        filter="url(#outcomes-dot-glow)"
                      />
                      <circle r="1.6" fill="#FFFFFF" />
                    </svg>
                  </div>
                </div>

                {/* Card 2: Qualified (Glows at 42.0% - 52.0% = 2.52s - 3.12s) */}
                <div className="outcomes-card2-glow flex-1 min-w-[110px] max-w-[145px] h-[144px] rounded-2xl bg-white border border-slate-100 p-3 flex flex-col justify-between transition-all duration-200">
                  <div>
                    <div className="inline-flex p-1.5 rounded-xl bg-[#EEF2FF] text-[#4F46E5]">
                      <User className="w-3.5 h-3.5 stroke-[2.2]" />
                    </div>
                    <div className="text-[11px] font-medium text-[#64748B] mt-2">
                      Qualified
                    </div>
                    <div className="text-xl font-bold text-[#0F172A] leading-tight mt-0.5">
                      34
                    </div>
                    <div className="text-[10px] font-semibold text-[#16A34A] flex items-center gap-0.5 mt-0.5">
                      ↑ 189%
                    </div>
                  </div>

                  <div className="w-full h-5 mt-1">
                    <svg viewBox="0 0 80 20" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                      <path
                        d="M 0 18 C 22 17, 40 14, 55 10 C 68 7, 74 4, 80 3 L 80 20 L 0 20 Z"
                        fill="url(#spkShared)"
                      />
                      <path
                        d="M 0 18 C 22 17, 40 14, 55 10 C 68 7, 74 4, 80 3"
                        fill="none"
                        stroke="#6366F1"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Connector 2 -> 3: Touching Card 2 & Card 3 Borders */}
                {/* THE SINGLE DOT travels here at Step 3 (2.94s - 3.36s = 49.0% - 56.0%) */}
                <div className="w-[28px] h-[144px] shrink-0 relative flex items-center justify-center">
                  <svg width="28" height="14" viewBox="0 0 28 14" className="w-full overflow-visible">
                    <path
                      d="M 0 7 L 28 7"
                      stroke="#8B8AFF"
                      strokeWidth="1.6"
                      strokeDasharray="4 4"
                      markerEnd="url(#outcomes-arrow-head)"
                    />
                  </svg>

                  {/* CSS Synchronized Moving Light Dot (4.59s - 5.22s) */}
                  <div className="absolute left-0 top-1/2 w-0 h-0 pointer-events-none outcomes-dot-arrow3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="-10 -10 20 20"
                      className="overflow-visible"
                      style={{ position: 'absolute', left: -10, top: -10 }}
                    >
                      <circle
                        r="2.8"
                        fill="#5B5AF7"
                        opacity="0.75"
                        filter="url(#outcomes-dot-glow)"
                      />
                      <circle r="1.6" fill="#FFFFFF" />
                    </svg>
                  </div>
                </div>

                {/* Card 3: Proposals (Glows at 56.0% - 66.0% = 3.36s - 3.96s) */}
                <div className="outcomes-card3-glow flex-1 min-w-[110px] max-w-[145px] h-[144px] rounded-2xl bg-white border border-slate-100 p-3 flex flex-col justify-between transition-all duration-200">
                  <div>
                    <div className="inline-flex p-1.5 rounded-xl bg-[#F3E8FF] text-[#7C3AED]">
                      <FileText className="w-3.5 h-3.5 stroke-[2.2]" />
                    </div>
                    <div className="text-[11px] font-medium text-[#64748B] mt-2">
                      Proposals
                    </div>
                    <div className="text-xl font-bold text-[#0F172A] leading-tight mt-0.5">
                      12
                    </div>
                    <div className="text-[10px] font-semibold text-[#16A34A] flex items-center gap-0.5 mt-0.5">
                      ↑ 140%
                    </div>
                  </div>

                  <div className="w-full h-5 mt-1">
                    <svg viewBox="0 0 80 20" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                      <path
                        d="M 0 18 C 20 16, 42 15, 55 10 C 68 7, 72 4, 80 3 L 80 20 L 0 20 Z"
                        fill="url(#spkShared)"
                      />
                      <path
                        d="M 0 18 C 20 16, 42 15, 55 10 C 68 7, 72 4, 80 3"
                        fill="none"
                        stroke="#6366F1"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Connector 3 -> 4: Touching Card 3 & Card 4 Borders */}
                {/* THE SINGLE DOT travels here at Step 4 (3.78s - 4.20s = 63.0% - 70.0%) */}
                <div className="w-[28px] h-[144px] shrink-0 relative flex items-center justify-center">
                  <svg width="28" height="14" viewBox="0 0 28 14" className="w-full overflow-visible">
                    <path
                      d="M 0 7 L 28 7"
                      stroke="#8B8AFF"
                      strokeWidth="1.6"
                      strokeDasharray="4 4"
                      markerEnd="url(#outcomes-arrow-head)"
                    />
                  </svg>

                  {/* CSS Synchronized Moving Light Dot (5.85s - 6.48s) */}
                  <div className="absolute left-0 top-1/2 w-0 h-0 pointer-events-none outcomes-dot-arrow4">
                    <svg
                      width="20"
                      height="20"
                      viewBox="-10 -10 20 20"
                      className="overflow-visible"
                      style={{ position: 'absolute', left: -10, top: -10 }}
                    >
                      <circle
                        r="2.8"
                        fill="#5B5AF7"
                        opacity="0.75"
                        filter="url(#outcomes-dot-glow)"
                      />
                      <circle r="1.6" fill="#FFFFFF" />
                    </svg>
                  </div>
                </div>

                {/* Card 4: Conversations (Glows at 70.0% - 80.0% = 4.20s - 4.80s) */}
                <div className="outcomes-card4-glow flex-1 min-w-[110px] max-w-[145px] h-[144px] rounded-2xl bg-white border border-slate-100 p-3 flex flex-col justify-between transition-all duration-200">
                  <div>
                    <div className="inline-flex p-1.5 rounded-xl bg-[#F5F3FF] text-[#6D28D9]">
                      <MessageSquare className="w-3.5 h-3.5 stroke-[2.2]" />
                    </div>
                    <div className="text-[11px] font-medium text-[#64748B] mt-2">
                      Conversations
                    </div>
                    <div className="text-xl font-bold text-[#0F172A] leading-tight mt-0.5">
                      5
                    </div>
                    <div className="text-[10px] font-semibold text-[#16A34A] flex items-center gap-0.5 mt-0.5">
                      ↑ 120%
                    </div>
                  </div>

                  <div className="w-full h-5 mt-1">
                    <svg viewBox="0 0 80 20" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                      <path
                        d="M 0 18 C 25 18, 45 14, 60 10 C 70 7, 75 4, 80 3 L 80 20 L 0 20 Z"
                        fill="url(#spkShared)"
                      />
                      <path
                        d="M 0 18 C 25 18, 45 14, 60 10 C 70 7, 75 4, 80 3"
                        fill="none"
                        stroke="#6366F1"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Connector 4 -> 5: Touching Card 4 & Card 5 Borders */}
                {/* THE SINGLE DOT travels here at Step 5 (4.62s - 5.04s = 77.0% - 84.0%) */}
                <div className="w-[28px] h-[144px] shrink-0 relative flex items-center justify-center">
                  <svg width="28" height="14" viewBox="0 0 28 14" className="w-full overflow-visible">
                    <path
                      d="M 0 7 L 28 7"
                      stroke="#8B8AFF"
                      strokeWidth="1.6"
                      strokeDasharray="4 4"
                      markerEnd="url(#outcomes-arrow-head)"
                    />
                  </svg>

                  {/* CSS Synchronized Moving Light Dot (7.11s - 7.74s) */}
                  <div className="absolute left-0 top-1/2 w-0 h-0 pointer-events-none outcomes-dot-arrow5">
                    <svg
                      width="20"
                      height="20"
                      viewBox="-10 -10 20 20"
                      className="overflow-visible"
                      style={{ position: 'absolute', left: -10, top: -10 }}
                    >
                      <circle
                        r="2.8"
                        fill="#5B5AF7"
                        opacity="0.75"
                        filter="url(#outcomes-dot-glow)"
                      />
                      <circle r="1.6" fill="#FFFFFF" />
                    </svg>
                  </div>
                </div>

                {/* Card 5: Clients Won (Celebration Glow at 84.0% - 94.0% = 5.04s - 5.64s) */}
                <div className="outcomes-card5-glow flex-1 min-w-[110px] max-w-[145px] h-[144px] rounded-2xl bg-white border border-slate-100 p-3 flex flex-col justify-between transition-all duration-200">
                  <div>
                    <div className="inline-flex p-1.5 rounded-xl bg-[#FEF3C7] text-[#D97706]">
                      <Crown className="w-3.5 h-3.5 stroke-[2.2]" />
                    </div>
                    <div className="text-[11px] font-medium text-[#64748B] mt-2">
                      Clients Won
                    </div>
                    <div className="text-xl font-bold text-[#0F172A] leading-tight mt-0.5">
                      2
                    </div>
                    <div className="text-[10px] font-semibold text-[#16A34A] flex items-center gap-0.5 mt-0.5">
                      ↑ 100%
                    </div>
                  </div>

                  <div className="w-full h-5 mt-1">
                    <svg viewBox="0 0 80 20" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                      <path
                        d="M 0 19 C 20 18, 45 15, 60 11 C 70 8, 75 5, 80 4 L 80 20 L 0 20 Z"
                        fill="url(#spkShared)"
                      />
                      <path
                        d="M 0 19 C 20 18, 45 15, 60 11 C 70 8, 75 5, 80 4"
                        fill="none"
                        stroke="#6366F1"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================== */}
        {/* Bottom 5 Value Pillars / Outcome Columns */}
        {/* ========================================== */}
        <div className="mt-20 lg:mt-24 pt-12 border-t border-slate-100/90 w-full max-w-[1300px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-0 items-start">
            {/* 1. More Clients */}
            <div className="flex flex-col items-center text-center lg:px-4 lg:border-r lg:border-slate-100">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ECFDF5] text-[#059669] shadow-xs">
                <TrendingUp className="h-5 w-5 stroke-[2.2]" />
              </div>
              <h3 className="mt-3.5 text-sm sm:text-[15px] font-bold text-[#0F172A]">
                More Clients
              </h3>
              <p className="mt-1 text-xs text-[#64748B] leading-relaxed max-w-[190px]">
                Turn more opportunities into paying customers.
              </p>
              <div className="mt-3.5 inline-flex items-center gap-1 rounded-full bg-[#F0FDF4] px-2.5 py-1 text-[10.5px] font-semibold text-[#16A34A] border border-[#DCFCE7]">
                ↑ 2-5x more clients
              </div>
            </div>

            {/* 2. Less Busywork */}
            <div className="flex flex-col items-center text-center lg:px-4 lg:border-r lg:border-slate-100">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F0F9FF] text-[#0284C7] shadow-xs">
                <Clock className="h-5 w-5 stroke-[2.2]" />
              </div>
              <h3 className="mt-3.5 text-sm sm:text-[15px] font-bold text-[#0F172A]">
                Less Busywork
              </h3>
              <p className="mt-1 text-xs text-[#64748B] leading-relaxed max-w-[190px]">
                Automate searching, qualification and follow-ups.
              </p>
              <div className="mt-3.5 inline-flex items-center gap-1 rounded-full bg-[#F0F9FF] px-2.5 py-1 text-[10.5px] font-semibold text-[#0284C7] border border-[#E0F2FE]">
                ↓ 12+ hours saved weekly
              </div>
            </div>

            {/* 3. Higher Conversion */}
            <div className="flex flex-col items-center text-center lg:px-4 lg:border-r lg:border-slate-100">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FAF5FF] text-[#7C3AED] shadow-xs">
                <Target className="h-5 w-5 stroke-[2.2]" />
              </div>
              <h3 className="mt-3.5 text-sm sm:text-[15px] font-bold text-[#0F172A]">
                Higher Conversion
              </h3>
              <p className="mt-1 text-xs text-[#64748B] leading-relaxed max-w-[190px]">
                Send better proposals and start more conversations.
              </p>
              <div className="mt-3.5 inline-flex items-center gap-1 rounded-full bg-[#FAF5FF] px-2.5 py-1 text-[10.5px] font-semibold text-[#7C3AED] border border-[#F3E8FF]">
                ↑ Up to 3x higher conversion
              </div>
            </div>

            {/* 4. Complete Visibility */}
            <div className="flex flex-col items-center text-center lg:px-4 lg:border-r lg:border-slate-100">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EEF2FF] text-[#4F46E5] shadow-xs">
                <Eye className="h-5 w-5 stroke-[2.2]" />
              </div>
              <h3 className="mt-3.5 text-sm sm:text-[15px] font-bold text-[#0F172A]">
                Complete Visibility
              </h3>
              <p className="mt-1 text-xs text-[#64748B] leading-relaxed max-w-[190px]">
                Track every opportunity from discovery to close.
              </p>
              <div className="mt-3.5 inline-flex items-center gap-1 rounded-full bg-[#EEF2FF] px-2.5 py-1 text-[10.5px] font-semibold text-[#4F46E5] border border-[#E0E7FF]">
                + 100% pipeline visibility
              </div>
            </div>

            {/* 5. Compound Growth */}
            <div className="flex flex-col items-center text-center lg:px-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ECFDF5] text-[#059669] shadow-xs">
                <Zap className="h-5 w-5 stroke-[2.2]" />
              </div>
              <h3 className="mt-3.5 text-sm sm:text-[15px] font-bold text-[#0F172A]">
                Compound Growth
              </h3>
              <p className="mt-1 text-xs text-[#64748B] leading-relaxed max-w-[190px]">
                Small improvements lead to big results over time.
              </p>
              <div className="mt-3.5 inline-flex items-center gap-1 rounded-full bg-[#F0FDF4] px-2.5 py-1 text-[10.5px] font-semibold text-[#16A34A] border border-[#DCFCE7]">
                ↑ growing, predictable pipeline
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
