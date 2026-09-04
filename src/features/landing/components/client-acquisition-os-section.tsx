import React from 'react';
import {
  Sparkles,
  FileText,
  GitPullRequest,
  Users,
  CalendarDays,
  BarChart2,
  LayoutGrid,
  Layers,
  Target,
} from 'lucide-react';
import { WinflareLogo } from './navbar';

export function ClientAcquisitionOsSection() {
  return (
    <section className="relative overflow-hidden py-20 bg-[#FAFBFF]">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#EFEBFF] px-4 py-1.5 text-xs font-semibold text-[#5B5AF7]">
            <Sparkles className="h-3.5 w-3.5 fill-[#5B5AF7] text-[#5B5AF7]" />
            <span>Your Client Acquisition OS</span>
          </div>

          {/* Main Headline */}
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-[#0F172A] sm:text-5xl lg:text-[48px] lg:leading-[1.15]">
            Your next client is
            <br />
            hidden across{' '}
            <span className="text-[#5B5AF7]">dozens of tools.</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-base leading-relaxed text-[#64748B] sm:text-lg max-w-2xl mx-auto">
            Opportunities, proposals, notes, follow-ups, and client research are
            scattered everywhere. Winflare brings the entire acquisition process
            into one workspace.
          </p>
        </div>

        {/* Interactive / Visual Tool Convergence Diagram */}
        {/* Desktop / Tablet Diagram */}
        <div className="relative mt-12 mx-auto w-full max-w-[1080px] min-h-[570px] hidden md:block select-none">
          {/* SVG Connector Lines Layer */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 1080 570"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Arrow Marker */}
              <marker
                id="arrow-head"
                viewBox="0 0 8 8"
                refX="6"
                refY="4"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 1 1 L 7 4 L 1 7 z" fill="#8B8AFF" />
              </marker>

              {/* Refined Glowing Filter for High-Precision Data Packets */}
              <filter
                id="dot-glow"
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

            {/* Subtle Central Winflare Processing Aura */}
            <circle
              cx="540"
              cy="275"
              r="75"
              fill="none"
              stroke="#5B5AF7"
              strokeWidth="1.2"
              opacity="0"
            >
              <animate
                attributeName="r"
                values="75;95;75"
                keyTimes="0;0.5;1"
                dur="3.2s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0;0.3;0"
                keyTimes="0;0.5;1"
                dur="3.2s"
                repeatCount="indefinite"
              />
            </circle>

            {/* ================= LEFT CONNECTORS & DATA TRANSFER PACKETS ================= */}
            {/* 1. LinkedIn (285, 63) -> (440, 215) */}
            <path
              d="M 285 63 C 365 63, 380 215, 435 215"
              stroke="#8B8AFF"
              strokeWidth="1.6"
              strokeDasharray="4 4"
              markerEnd="url(#arrow-head)"
            />
            <g>
              <circle
                r="2.8"
                fill="#5B5AF7"
                opacity="0.75"
                filter="url(#dot-glow)"
              >
                <animateMotion
                  path="M 285 63 C 365 63, 380 215, 435 215"
                  dur="3.2s"
                  repeatCount="indefinite"
                  keyPoints="0;1;1"
                  keyTimes="0;0.48;1"
                />
                <animate
                  attributeName="opacity"
                  values="0;0.8;0.8;0;0"
                  keyTimes="0;0.06;0.44;0.48;1"
                  dur="3.2s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle r="1.6" fill="#FFFFFF">
                <animateMotion
                  path="M 285 63 C 365 63, 380 215, 435 215"
                  dur="3.2s"
                  repeatCount="indefinite"
                  keyPoints="0;1;1"
                  keyTimes="0;0.48;1"
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0;0"
                  keyTimes="0;0.06;0.44;0.48;1"
                  dur="3.2s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>

            {/* 2. Indeed (230, 148) -> (440, 240) */}
            <path
              d="M 230 148 C 340 148, 370 240, 435 240"
              stroke="#8B8AFF"
              strokeWidth="1.6"
              strokeDasharray="4 4"
              markerEnd="url(#arrow-head)"
            />
            <g>
              <circle
                r="2.8"
                fill="#5B5AF7"
                opacity="0.75"
                filter="url(#dot-glow)"
              >
                <animateMotion
                  path="M 230 148 C 340 148, 370 240, 435 240"
                  dur="3.2s"
                  repeatCount="indefinite"
                  keyPoints="0;1;1"
                  keyTimes="0;0.48;1"
                />
                <animate
                  attributeName="opacity"
                  values="0;0.8;0.8;0;0"
                  keyTimes="0;0.06;0.44;0.48;1"
                  dur="3.2s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle r="1.6" fill="#FFFFFF">
                <animateMotion
                  path="M 230 148 C 340 148, 370 240, 435 240"
                  dur="3.2s"
                  repeatCount="indefinite"
                  keyPoints="0;1;1"
                  keyTimes="0;0.48;1"
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0;0"
                  keyTimes="0;0.06;0.44;0.48;1"
                  dur="3.2s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>

            {/* 3. Email (250, 233) -> (440, 265) */}
            <path
              d="M 250 233 C 335 233, 370 265, 435 265"
              stroke="#8B8AFF"
              strokeWidth="1.6"
              strokeDasharray="4 4"
              markerEnd="url(#arrow-head)"
            />
            <g>
              <circle
                r="2.8"
                fill="#5B5AF7"
                opacity="0.75"
                filter="url(#dot-glow)"
              >
                <animateMotion
                  path="M 250 233 C 335 233, 370 265, 435 265"
                  dur="3.2s"
                  repeatCount="indefinite"
                  keyPoints="0;1;1"
                  keyTimes="0;0.48;1"
                />
                <animate
                  attributeName="opacity"
                  values="0;0.8;0.8;0;0"
                  keyTimes="0;0.06;0.44;0.48;1"
                  dur="3.2s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle r="1.6" fill="#FFFFFF">
                <animateMotion
                  path="M 250 233 C 335 233, 370 265, 435 265"
                  dur="3.2s"
                  repeatCount="indefinite"
                  keyPoints="0;1;1"
                  keyTimes="0;0.48;1"
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0;0"
                  keyTimes="0;0.06;0.44;0.48;1"
                  dur="3.2s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>

            {/* 4. Sheets (230, 318) -> (440, 290) */}
            <path
              d="M 230 318 C 335 318, 370 290, 435 290"
              stroke="#8B8AFF"
              strokeWidth="1.6"
              strokeDasharray="4 4"
              markerEnd="url(#arrow-head)"
            />
            <g>
              <circle
                r="2.8"
                fill="#5B5AF7"
                opacity="0.75"
                filter="url(#dot-glow)"
              >
                <animateMotion
                  path="M 230 318 C 335 318, 370 290, 435 290"
                  dur="3.2s"
                  repeatCount="indefinite"
                  keyPoints="0;1;1"
                  keyTimes="0;0.48;1"
                />
                <animate
                  attributeName="opacity"
                  values="0;0.8;0.8;0;0"
                  keyTimes="0;0.06;0.44;0.48;1"
                  dur="3.2s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle r="1.6" fill="#FFFFFF">
                <animateMotion
                  path="M 230 318 C 335 318, 370 290, 435 290"
                  dur="3.2s"
                  repeatCount="indefinite"
                  keyPoints="0;1;1"
                  keyTimes="0;0.48;1"
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0;0"
                  keyTimes="0;0.06;0.44;0.48;1"
                  dur="3.2s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>

            {/* 5. Notion (270, 403) -> (440, 315) */}
            <path
              d="M 270 403 C 350 403, 375 315, 435 315"
              stroke="#8B8AFF"
              strokeWidth="1.6"
              strokeDasharray="4 4"
              markerEnd="url(#arrow-head)"
            />
            <g>
              <circle
                r="2.8"
                fill="#5B5AF7"
                opacity="0.75"
                filter="url(#dot-glow)"
              >
                <animateMotion
                  path="M 270 403 C 350 403, 375 315, 435 315"
                  dur="3.2s"
                  repeatCount="indefinite"
                  keyPoints="0;1;1"
                  keyTimes="0;0.48;1"
                />
                <animate
                  attributeName="opacity"
                  values="0;0.8;0.8;0;0"
                  keyTimes="0;0.06;0.44;0.48;1"
                  dur="3.2s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle r="1.6" fill="#FFFFFF">
                <animateMotion
                  path="M 270 403 C 350 403, 375 315, 435 315"
                  dur="3.2s"
                  repeatCount="indefinite"
                  keyPoints="0;1;1"
                  keyTimes="0;0.48;1"
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0;0"
                  keyTimes="0;0.06;0.44;0.48;1"
                  dur="3.2s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>

            {/* 6. ChatGPT (315, 488) -> (440, 340) */}
            <path
              d="M 315 488 C 380 488, 395 340, 435 340"
              stroke="#8B8AFF"
              strokeWidth="1.6"
              strokeDasharray="4 4"
              markerEnd="url(#arrow-head)"
            />
            <g>
              <circle
                r="2.8"
                fill="#5B5AF7"
                opacity="0.75"
                filter="url(#dot-glow)"
              >
                <animateMotion
                  path="M 315 488 C 380 488, 395 340, 435 340"
                  dur="3.2s"
                  repeatCount="indefinite"
                  keyPoints="0;1;1"
                  keyTimes="0;0.48;1"
                />
                <animate
                  attributeName="opacity"
                  values="0;0.8;0.8;0;0"
                  keyTimes="0;0.06;0.44;0.48;1"
                  dur="3.2s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle r="1.6" fill="#FFFFFF">
                <animateMotion
                  path="M 315 488 C 380 488, 395 340, 435 340"
                  dur="3.2s"
                  repeatCount="indefinite"
                  keyPoints="0;1;1"
                  keyTimes="0;0.48;1"
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0;0"
                  keyTimes="0;0.06;0.44;0.48;1"
                  dur="3.2s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>

            {/* ================= RIGHT CONNECTORS & DATA TRANSFER PACKETS ================= */}
            {/* 1. Winflare (640, 225) -> Proposals (770, 73) */}
            <path
              d="M 640 225 C 705 225, 715 73, 765 73"
              stroke="#8B8AFF"
              strokeWidth="1.6"
              strokeDasharray="4 4"
              markerEnd="url(#arrow-head)"
            />
            <g>
              <circle
                r="2.8"
                fill="#5B5AF7"
                opacity="0.75"
                filter="url(#dot-glow)"
              >
                <animateMotion
                  path="M 640 225 C 705 225, 715 73, 765 73"
                  dur="3.2s"
                  repeatCount="indefinite"
                  keyPoints="0;0;1"
                  keyTimes="0;0.52;1"
                />
                <animate
                  attributeName="opacity"
                  values="0;0;0.8;0.8;0"
                  keyTimes="0;0.51;0.55;0.94;1"
                  dur="3.2s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle r="1.6" fill="#FFFFFF">
                <animateMotion
                  path="M 640 225 C 705 225, 715 73, 765 73"
                  dur="3.2s"
                  repeatCount="indefinite"
                  keyPoints="0;0;1"
                  keyTimes="0;0.52;1"
                />
                <animate
                  attributeName="opacity"
                  values="0;0;1;1;0"
                  keyTimes="0;0.51;0.55;0.94;1"
                  dur="3.2s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>

            {/* 2. Winflare (640, 250) -> Pipeline (785, 168) */}
            <path
              d="M 640 250 C 705 250, 725 168, 780 168"
              stroke="#8B8AFF"
              strokeWidth="1.6"
              strokeDasharray="4 4"
              markerEnd="url(#arrow-head)"
            />
            <g>
              <circle
                r="2.8"
                fill="#5B5AF7"
                opacity="0.75"
                filter="url(#dot-glow)"
              >
                <animateMotion
                  path="M 640 250 C 705 250, 725 168, 780 168"
                  dur="3.2s"
                  repeatCount="indefinite"
                  keyPoints="0;0;1"
                  keyTimes="0;0.52;1"
                />
                <animate
                  attributeName="opacity"
                  values="0;0;0.8;0.8;0"
                  keyTimes="0;0.51;0.55;0.94;1"
                  dur="3.2s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle r="1.6" fill="#FFFFFF">
                <animateMotion
                  path="M 640 250 C 705 250, 725 168, 780 168"
                  dur="3.2s"
                  repeatCount="indefinite"
                  keyPoints="0;0;1"
                  keyTimes="0;0.52;1"
                />
                <animate
                  attributeName="opacity"
                  values="0;0;1;1;0"
                  keyTimes="0;0.51;0.55;0.94;1"
                  dur="3.2s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>

            {/* 3. Winflare (640, 275) -> CRM (795, 263) */}
            <path
              d="M 640 275 C 705 275, 735 263, 790 263"
              stroke="#8B8AFF"
              strokeWidth="1.6"
              strokeDasharray="4 4"
              markerEnd="url(#arrow-head)"
            />
            <g>
              <circle
                r="2.8"
                fill="#5B5AF7"
                opacity="0.75"
                filter="url(#dot-glow)"
              >
                <animateMotion
                  path="M 640 275 C 705 275, 735 263, 790 263"
                  dur="3.2s"
                  repeatCount="indefinite"
                  keyPoints="0;0;1"
                  keyTimes="0;0.52;1"
                />
                <animate
                  attributeName="opacity"
                  values="0;0;0.8;0.8;0"
                  keyTimes="0;0.51;0.55;0.94;1"
                  dur="3.2s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle r="1.6" fill="#FFFFFF">
                <animateMotion
                  path="M 640 275 C 705 275, 735 263, 790 263"
                  dur="3.2s"
                  repeatCount="indefinite"
                  keyPoints="0;0;1"
                  keyTimes="0;0.52;1"
                />
                <animate
                  attributeName="opacity"
                  values="0;0;1;1;0"
                  keyTimes="0;0.51;0.55;0.94;1"
                  dur="3.2s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>

            {/* 4. Winflare (640, 305) -> Follow-ups (785, 358) */}
            <path
              d="M 640 305 C 705 305, 725 358, 780 358"
              stroke="#8B8AFF"
              strokeWidth="1.6"
              strokeDasharray="4 4"
              markerEnd="url(#arrow-head)"
            />
            <g>
              <circle
                r="2.8"
                fill="#5B5AF7"
                opacity="0.75"
                filter="url(#dot-glow)"
              >
                <animateMotion
                  path="M 640 305 C 705 305, 725 358, 780 358"
                  dur="3.2s"
                  repeatCount="indefinite"
                  keyPoints="0;0;1"
                  keyTimes="0;0.52;1"
                />
                <animate
                  attributeName="opacity"
                  values="0;0;0.8;0.8;0"
                  keyTimes="0;0.51;0.55;0.94;1"
                  dur="3.2s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle r="1.6" fill="#FFFFFF">
                <animateMotion
                  path="M 640 305 C 705 305, 725 358, 780 358"
                  dur="3.2s"
                  repeatCount="indefinite"
                  keyPoints="0;0;1"
                  keyTimes="0;0.52;1"
                />
                <animate
                  attributeName="opacity"
                  values="0;0;1;1;0"
                  keyTimes="0;0.51;0.55;0.94;1"
                  dur="3.2s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>

            {/* 5. Winflare (640, 330) -> Analytics (770, 453) */}
            <path
              d="M 640 330 C 705 330, 715 453, 765 453"
              stroke="#8B8AFF"
              strokeWidth="1.6"
              strokeDasharray="4 4"
              markerEnd="url(#arrow-head)"
            />
            <g>
              <circle
                r="2.8"
                fill="#5B5AF7"
                opacity="0.75"
                filter="url(#dot-glow)"
              >
                <animateMotion
                  path="M 640 330 C 705 330, 715 453, 765 453"
                  dur="3.2s"
                  repeatCount="indefinite"
                  keyPoints="0;0;1"
                  keyTimes="0;0.52;1"
                />
                <animate
                  attributeName="opacity"
                  values="0;0;0.8;0.8;0"
                  keyTimes="0;0.51;0.55;0.94;1"
                  dur="3.2s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle r="1.6" fill="#FFFFFF">
                <animateMotion
                  path="M 640 330 C 705 330, 715 453, 765 453"
                  dur="3.2s"
                  repeatCount="indefinite"
                  keyPoints="0;0;1"
                  keyTimes="0;0.52;1"
                />
                <animate
                  attributeName="opacity"
                  values="0;0;1;1;0"
                  keyTimes="0;0.51;0.55;0.94;1"
                  dur="3.2s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          </svg>

          {/* ================= LEFT TOOL CARDS ================= */}
          {/* 1. LinkedIn */}
          <div
            className="absolute z-10 flex items-center gap-3 rounded-[8px] border border-[#E2E8F0] bg-white px-3.5 py-2.5 shadow-[0_2px_8px_rgba(15,23,42,0.06)] transition-all hover:shadow-md hover:border-slate-300"
            style={{ left: '110px', top: '35px', width: '175px' }}
          >
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] bg-[#0A66C2] text-white shadow-xs">
              <span className="font-bold text-xs tracking-tighter">in</span>
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-[#0F172A] leading-tight">
                LinkedIn
              </div>
              <div className="text-[10px] text-[#64748B] truncate">
                Find opportunities
              </div>
            </div>
          </div>

          {/* 2. Indeed */}
          <div
            className="absolute z-10 flex items-center gap-3 rounded-[8px] border border-[#E2E8F0] bg-white px-3.5 py-2.5 shadow-[0_2px_8px_rgba(15,23,42,0.06)] transition-all hover:shadow-md hover:border-slate-300"
            style={{ left: '65px', top: '120px', width: '165px' }}
          >
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EA6A21] text-white shadow-xs">
              <span className="font-serif font-black text-sm italic leading-none">
                i
              </span>
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-[#0F172A] leading-tight">
                Indeed
              </div>
              <div className="text-[10px] text-[#64748B] truncate">
                Job discoveries
              </div>
            </div>
          </div>

          {/* 3. Email */}
          <div
            className="absolute z-10 flex items-center gap-3 rounded-[8px] border border-[#E2E8F0] bg-white px-3.5 py-2.5 shadow-[0_2px_8px_rgba(15,23,42,0.06)] transition-all hover:shadow-md hover:border-slate-300"
            style={{ left: '80px', top: '205px', width: '170px' }}
          >
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] bg-slate-50 border border-slate-100 shadow-xs">
              <svg className="h-4.5 w-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M1.5 5.5v13a1 1 0 0 0 1 1h3.5v-9.5L1.5 5.5z"
                />
                <path
                  fill="#34A853"
                  d="M18 19.5h3.5a1 1 0 0 0 1-1v-13l-4.5 4.5v9.5z"
                />
                <path fill="#EA4335" d="M18 5.5l-6 4.5-6-4.5 6-4.5 6 4.5z" />
                <path fill="#FBBC04" d="M6 10v9.5h12V10l-6 4.5-6-4.5z" />
              </svg>
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-[#0F172A] leading-tight">
                Email
              </div>
              <div className="text-[10px] text-[#64748B] truncate">
                Conversations
              </div>
            </div>
          </div>

          {/* 4. Sheets */}
          <div
            className="absolute z-10 flex items-center gap-3 rounded-[8px] border border-[#E2E8F0] bg-white px-3.5 py-2.5 shadow-[0_2px_8px_rgba(15,23,42,0.06)] transition-all hover:shadow-md hover:border-slate-300"
            style={{ left: '65px', top: '290px', width: '165px' }}
          >
            <div className="flex h-7 w-6 shrink-0 items-center justify-center rounded-[6px] bg-[#0F9D58] p-1 shadow-xs">
              <div className="grid grid-cols-2 gap-0.5 w-full h-full">
                <div className="bg-white rounded-[0.5px]" />
                <div className="bg-white rounded-[0.5px]" />
                <div className="bg-white rounded-[0.5px]" />
                <div className="bg-white rounded-[0.5px]" />
              </div>
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-[#0F172A] leading-tight">
                Sheets
              </div>
              <div className="text-[10px] text-[#64748B] truncate">
                Tracking & data
              </div>
            </div>
          </div>

          {/* 5. Notion */}
          <div
            className="absolute z-10 flex items-center gap-3 rounded-[8px] border border-[#E2E8F0] bg-white px-3.5 py-2.5 shadow-[0_2px_8px_rgba(15,23,42,0.06)] transition-all hover:shadow-md hover:border-slate-300"
            style={{ left: '95px', top: '375px', width: '175px' }}
          >
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] border border-slate-200 bg-white text-black shadow-xs">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.84c-.466-.373-.84-.56-1.586-.513L3.712 2.306c-.373.047-.466.326-.326.513l1.073 1.389zm.84 3.033v13.582c0 .84.42 1.12 1.213 1.073l14.288-.84c.84-.047 1.027-.56 1.027-1.213V6.26c0-.653-.327-.98-.98-.933l-14.568.84c-.653.047-.98.373-.98 1.074zm13.402 1.306c.093.42 0 .84-.42.887l-1.073.187v9.098c-.467.28-.934.467-1.354.467-.654 0-.84-.187-1.354-.84l-4.573-7.14v6.86l1.493.327c.42.093.42.513.047.513l-3.873.233c-.093-.373 0-.793.374-.84l1.167-.233V9.757l-1.354-.14c-.374-.047-.327-.467 0-.514l3.827-.233 4.9 7.42V9.897l-1.26-.14c-.373-.047-.28-.467 0-.514l3.78-.233c.373 0 .42.233.42.42z" />
              </svg>
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-[#0F172A] leading-tight">
                Notion
              </div>
              <div className="text-[10px] text-[#64748B] truncate">
                Notes & research
              </div>
            </div>
          </div>

          {/* 6. ChatGPT (Properly aligned in flow on the left with breathing room) */}
          <div
            className="absolute z-10 flex items-center gap-3 rounded-[8px] border border-[#E2E8F0] bg-white px-3.5 py-2.5 shadow-[0_2px_8px_rgba(15,23,42,0.06)] transition-all hover:shadow-md hover:border-slate-300"
            style={{ left: '140px', top: '460px', width: '175px' }}
          >
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#10A37F] text-white shadow-xs">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.5045 4.5045 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.5973 8.3829 14.6174 7.2144a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6726a.79.79 0 0 0-.402-.6858zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813v6.7227zm1.1451-2.2007l3.0476-1.761 3.0476 1.761v3.522l-3.0476 1.761-3.0476-1.761z" />
              </svg>
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-[#0F172A] leading-tight">
                ChatGPT
              </div>
              <div className="text-[10px] text-[#64748B] truncate">
                Content & drafts
              </div>
            </div>
          </div>

          {/* ================= CENTER WINFLARE CARD (Large Card: 12px) ================= */}
          <div
            className="absolute z-20 flex flex-col items-center justify-center rounded-[12px] border border-[#E2E8F0] bg-white p-4 shadow-[0_10px_25px_-5px_rgba(15,23,42,0.08),0_8px_10px_-6px_rgba(15,23,42,0.04)]"
            style={{
              left: '440px',
              top: '185px',
              width: '200px',
              height: '180px',
            }}
          >
            <WinflareLogo className="h-14 w-14 mb-2" />
            <span className="text-2xl font-bold tracking-tight text-[#0F172A]">
              winflare
            </span>
            <div className="mt-3 rounded-[6px] bg-[#EFEBFF] px-2 py-1 text-[10px] font-semibold text-[#5B5AF7]">
              One Workspace. All You Need.
            </div>
          </div>

          {/* ================= RIGHT FEATURE CARDS ================= */}
          {/* 1. Proposals */}
          <div
            className="absolute z-10 flex items-center gap-3 rounded-[8px] border border-[#E2E8F0] bg-white px-3.5 py-2.5 shadow-[0_2px_8px_rgba(15,23,42,0.06)] transition-all hover:shadow-md hover:border-slate-300"
            style={{ left: '770px', top: '45px', width: '200px' }}
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[6px] bg-[#EFEBFF] text-[#5B5AF7] shadow-xs">
              <FileText className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-[#0F172A] leading-tight">
                Proposals
              </div>
              <div className="text-[10px] text-[#64748B] truncate">
                Create winning proposals
              </div>
            </div>
          </div>

          {/* 2. Pipeline */}
          <div
            className="absolute z-10 flex items-center gap-3 rounded-[8px] border border-[#E2E8F0] bg-white px-3.5 py-2.5 shadow-[0_2px_8px_rgba(15,23,42,0.06)] transition-all hover:shadow-md hover:border-slate-300"
            style={{ left: '785px', top: '140px', width: '205px' }}
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[6px] bg-[#EFEBFF] text-[#5B5AF7] shadow-xs">
              <GitPullRequest className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-[#0F172A] leading-tight">
                Pipeline
              </div>
              <div className="text-[10px] text-[#64748B] truncate">
                Track every opportunity
              </div>
            </div>
          </div>

          {/* 3. CRM */}
          <div
            className="absolute z-10 flex items-center gap-3 rounded-[8px] border border-[#E2E8F0] bg-white px-3.5 py-2.5 shadow-[0_2px_8px_rgba(15,23,42,0.06)] transition-all hover:shadow-md hover:border-slate-300"
            style={{ left: '795px', top: '235px', width: '195px' }}
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[6px] bg-[#EFEBFF] text-[#5B5AF7] shadow-xs">
              <Users className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-[#0F172A] leading-tight">
                CRM
              </div>
              <div className="text-[10px] text-[#64748B] truncate">
                Manage relationships
              </div>
            </div>
          </div>

          {/* 4. Follow-ups */}
          <div
            className="absolute z-10 flex items-center gap-3 rounded-[8px] border border-[#E2E8F0] bg-white px-3.5 py-2.5 shadow-[0_2px_8px_rgba(15,23,42,0.06)] transition-all hover:shadow-md hover:border-slate-300"
            style={{ left: '785px', top: '330px', width: '200px' }}
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[6px] bg-[#EFEBFF] text-[#5B5AF7] shadow-xs">
              <CalendarDays className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-[#0F172A] leading-tight">
                Follow-ups
              </div>
              <div className="text-[10px] text-[#64748B] truncate">
                Never miss a follow-up
              </div>
            </div>
          </div>

          {/* 5. Analytics */}
          <div
            className="absolute z-10 flex items-center gap-3 rounded-[8px] border border-[#E2E8F0] bg-white px-3.5 py-2.5 shadow-[0_2px_8px_rgba(15,23,42,0.06)] transition-all hover:shadow-md hover:border-slate-300"
            style={{ left: '770px', top: '425px', width: '195px' }}
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[6px] bg-[#EFEBFF] text-[#5B5AF7] shadow-xs">
              <BarChart2 className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-[#0F172A] leading-tight">
                Analytics
              </div>
              <div className="text-[10px] text-[#64748B] truncate">
                Measure & improve
              </div>
            </div>
          </div>
        </div>

        {/* Mobile / Responsive Fallback (Clean 3-column / stacked view) */}
        <div className="mt-10 md:hidden space-y-8">
          <div className="rounded-[12px] border border-[#E2E8F0] bg-white p-6 text-center shadow-[0_2px_8px_rgba(15,23,42,0.06)]">
            <WinflareLogo className="h-12 w-12 mx-auto mb-2" />
            <span className="text-xl font-bold text-[#0F172A]">winflare</span>
            <div className="mt-2 inline-block rounded-[6px] bg-[#EFEBFF] px-3 py-1 text-xs font-semibold text-[#5B5AF7]">
              One Workspace. All You Need.
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-3">
              Tools Replaced
            </h4>
            <div className="grid grid-cols-2 gap-2.5">
              <div className="flex items-center gap-2.5 rounded-[8px] border border-[#E2E8F0] bg-white p-2.5 shadow-xs">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[6px] bg-[#0A66C2] text-white text-[10px] font-bold">
                  in
                </div>
                <div className="text-xs font-bold text-[#0F172A]">LinkedIn</div>
              </div>
              <div className="flex items-center gap-2.5 rounded-[8px] border border-[#E2E8F0] bg-white p-2.5 shadow-xs">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EA6A21] text-white text-xs font-serif italic">
                  i
                </div>
                <div className="text-xs font-bold text-[#0F172A]">Indeed</div>
              </div>
              <div className="flex items-center gap-2.5 rounded-[8px] border border-[#E2E8F0] bg-white p-2.5 shadow-xs">
                <div className="h-4 w-5 bg-red-500 rounded-[4px]" />
                <div className="text-xs font-bold text-[#0F172A]">Email</div>
              </div>
              <div className="flex items-center gap-2.5 rounded-[8px] border border-[#E2E8F0] bg-white p-2.5 shadow-xs">
                <div className="h-5 w-4 bg-[#0F9D58] rounded-[4px]" />
                <div className="text-xs font-bold text-[#0F172A]">Sheets</div>
              </div>
              <div className="flex items-center gap-2.5 rounded-[8px] border border-[#E2E8F0] bg-white p-2.5 shadow-xs">
                <div className="h-5 w-5 rounded-[6px] border border-slate-300 flex items-center justify-center text-[10px] font-bold">
                  N
                </div>
                <div className="text-xs font-bold text-[#0F172A]">Notion</div>
              </div>
              <div className="flex items-center gap-2.5 rounded-[8px] border border-[#E2E8F0] bg-white p-2.5 shadow-xs">
                <div className="h-5 w-5 rounded-full bg-[#10A37F] flex items-center justify-center text-white text-[10px]">
                  ✦
                </div>
                <div className="text-xs font-bold text-[#0F172A]">ChatGPT</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-3">
              Unified Features
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              <div className="flex items-center gap-3 rounded-[8px] border border-[#E2E8F0] bg-white p-3 shadow-xs">
                <div className="flex h-7 w-7 items-center justify-center rounded-[6px] bg-[#EFEBFF] text-[#5B5AF7]">
                  <FileText className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0F172A]">
                    Proposals
                  </div>
                  <div className="text-[10px] text-[#64748B]">
                    Create winning proposals
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-[8px] border border-[#E2E8F0] bg-white p-3 shadow-xs">
                <div className="flex h-7 w-7 items-center justify-center rounded-[6px] bg-[#EFEBFF] text-[#5B5AF7]">
                  <GitPullRequest className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0F172A]">
                    Pipeline
                  </div>
                  <div className="text-[10px] text-[#64748B]">
                    Track every opportunity
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-[8px] border border-[#E2E8F0] bg-white p-3 shadow-xs">
                <div className="flex h-7 w-7 items-center justify-center rounded-[6px] bg-[#EFEBFF] text-[#5B5AF7]">
                  <Users className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0F172A]">CRM</div>
                  <div className="text-[10px] text-[#64748B]">
                    Manage relationships
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-[8px] border border-[#E2E8F0] bg-white p-3 shadow-xs">
                <div className="flex h-7 w-7 items-center justify-center rounded-[6px] bg-[#EFEBFF] text-[#5B5AF7]">
                  <CalendarDays className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0F172A]">
                    Follow-ups
                  </div>
                  <div className="text-[10px] text-[#64748B]">
                    Never miss a follow-up
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-[8px] border border-[#E2E8F0] bg-white p-3 shadow-xs">
                <div className="flex h-7 w-7 items-center justify-center rounded-[6px] bg-[#EFEBFF] text-[#5B5AF7]">
                  <BarChart2 className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0F172A]">
                    Analytics
                  </div>
                  <div className="text-[10px] text-[#64748B]">
                    Measure & improve
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 3-Card Value Banner (Large Card: 12px) */}
        <div className="mt-4 rounded-[12px] border border-[#E2E8F0] bg-white p-6 shadow-[0_2px_8px_rgba(15,23,42,0.06)]">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#E2E8F0]">
            {/* Metric 1 */}
            <div className="flex items-center gap-4 sm:px-6 first:pl-0">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] bg-[#EFEBFF] text-[#5B5AF7]">
                <LayoutGrid className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#0F172A]">
                  1 Workspace
                </h4>
                <p className="text-xs text-[#64748B]">
                  Everything in one place
                </p>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="flex items-center gap-4 sm:px-6 pt-4 sm:pt-0">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] bg-[#EFEBFF] text-[#5B5AF7]">
                <Layers className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#0F172A]">
                  5+ Tools Replaced
                </h4>
                <p className="text-xs text-[#64748B]">Simplify your workflow</p>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="flex items-center gap-4 sm:px-6 pt-4 sm:pt-0">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] bg-[#EFEBFF] text-[#5B5AF7]">
                <Target className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#0F172A]">
                  0 Lost Opportunities
                </h4>
                <p className="text-xs text-[#64748B]">
                  Capture, track & win more
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Alias for backwards compatibility if needed
export const ToolsIntegrationSection = ClientAcquisitionOsSection;
