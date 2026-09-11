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
import { BrandIcon, SectionHeader, ValuePillarCard } from '@/components/shared';
import { ToolFeatureCard, WinflareHubCard } from './shared';

export function ClientAcquisitionOsSection() {
  return (
    <section className="relative overflow-hidden py-20 bg-[#FAFBFF]">
      <div className="w-full px-4 sm:px-6 lg:px-20">
        {/* Section Header */}
        <SectionHeader
          badgeIcon={Sparkles}
          badgeText="Your Client Acquisition OS"
          title={
            <>
              Your next client is
              <br />
              hidden across{' '}
              <span className="text-[#5B5AF7]">dozens of tools.</span>
            </>
          }
          subtitle="Opportunities, proposals, notes, follow-ups, and client research are scattered everywhere. Winflare brings the entire acquisition process into one workspace."
        />

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
            <BrandIcon name="linkedin" variant="badge" className="h-7 w-7 shrink-0" />
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
            <BrandIcon name="indeed" variant="badge-round" className="h-7 w-7 shrink-0" />
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
            <BrandIcon name="email" variant="badge" className="h-7 w-7 shrink-0" />
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
            <BrandIcon name="sheets" variant="badge" className="h-7 w-6 shrink-0" />
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
            <BrandIcon name="notion" variant="badge" className="h-7 w-7 shrink-0" />
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
            <BrandIcon name="chatgpt" variant="badge-round" className="h-7 w-7 shrink-0" />
            <div className="min-w-0">
              <div className="text-xs font-bold text-[#0F172A] leading-tight">
                ChatGPT
              </div>
              <div className="text-[10px] text-[#64748B] truncate">
                Content & drafts
              </div>
            </div>
          </div>

          {/* ================= CENTER WINFLARE CARD ================= */}
          <WinflareHubCard
            variant="floating"
            style={{
              left: '440px',
              top: '185px',
              width: '200px',
              height: '180px',
            }}
          />

          {/* ================= RIGHT FEATURE CARDS ================= */}
          {/* 1. Proposals */}
          <ToolFeatureCard
            icon={FileText}
            title="Proposals"
            subtitle="Create winning proposals"
            style={{ left: '770px', top: '45px', width: '200px' }}
            className="absolute z-10"
          />

          {/* 2. Pipeline */}
          <ToolFeatureCard
            icon={GitPullRequest}
            title="Pipeline"
            subtitle="Track every opportunity"
            style={{ left: '785px', top: '140px', width: '205px' }}
            className="absolute z-10"
          />

          {/* 3. CRM */}
          <ToolFeatureCard
            icon={Users}
            title="CRM"
            subtitle="Manage relationships"
            style={{ left: '795px', top: '235px', width: '195px' }}
            className="absolute z-10"
          />

          {/* 4. Follow-ups */}
          <ToolFeatureCard
            icon={CalendarDays}
            title="Follow-ups"
            subtitle="Never miss a follow-up"
            style={{ left: '785px', top: '330px', width: '200px' }}
            className="absolute z-10"
          />

          {/* 5. Analytics */}
          <ToolFeatureCard
            icon={BarChart2}
            title="Analytics"
            subtitle="Measure & improve"
            style={{ left: '770px', top: '425px', width: '195px' }}
            className="absolute z-10"
          />
        </div>

        {/* Mobile / Responsive Fallback (Clean 3-column / stacked view) */}
        <div className="mt-10 md:hidden space-y-8">
          <WinflareHubCard variant="block" />

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-3">
              Tools Replaced
            </h4>
            <div className="grid grid-cols-2 gap-2.5">
              <div className="flex items-center gap-2.5 rounded-[8px] border border-[#E2E8F0] bg-white p-2.5 shadow-xs">
                <BrandIcon name="linkedin" variant="badge" className="h-6 w-6 shrink-0 !text-[10px]" />
                <div className="text-xs font-bold text-[#0F172A]">LinkedIn</div>
              </div>
              <div className="flex items-center gap-2.5 rounded-[8px] border border-[#E2E8F0] bg-white p-2.5 shadow-xs">
                <BrandIcon name="indeed" variant="badge-round" className="h-6 w-6 shrink-0 !text-xs" />
                <div className="text-xs font-bold text-[#0F172A]">Indeed</div>
              </div>
              <div className="flex items-center gap-2.5 rounded-[8px] border border-[#E2E8F0] bg-white p-2.5 shadow-xs">
                <BrandIcon name="email" variant="badge" className="h-6 w-6 shrink-0" />
                <div className="text-xs font-bold text-[#0F172A]">Email</div>
              </div>
              <div className="flex items-center gap-2.5 rounded-[8px] border border-[#E2E8F0] bg-white p-2.5 shadow-xs">
                <BrandIcon name="sheets" variant="badge" className="h-6 w-6 shrink-0" />
                <div className="text-xs font-bold text-[#0F172A]">Sheets</div>
              </div>
              <div className="flex items-center gap-2.5 rounded-[8px] border border-[#E2E8F0] bg-white p-2.5 shadow-xs">
                <BrandIcon name="notion" variant="badge" className="h-6 w-6 shrink-0" />
                <div className="text-xs font-bold text-[#0F172A]">Notion</div>
              </div>
              <div className="flex items-center gap-2.5 rounded-[8px] border border-[#E2E8F0] bg-white p-2.5 shadow-xs">
                <BrandIcon name="chatgpt" variant="badge-round" className="h-6 w-6 shrink-0" />
                <div className="text-xs font-bold text-[#0F172A]">ChatGPT</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-3">
              Unified Features
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              <ToolFeatureCard
                icon={FileText}
                title="Proposals"
                subtitle="Create winning proposals"
                size="sm"
              />
              <ToolFeatureCard
                icon={GitPullRequest}
                title="Pipeline"
                subtitle="Track every opportunity"
                size="sm"
              />
              <ToolFeatureCard
                icon={Users}
                title="CRM"
                subtitle="Manage relationships"
                size="sm"
              />
              <ToolFeatureCard
                icon={CalendarDays}
                title="Follow-ups"
                subtitle="Never miss a follow-up"
                size="sm"
              />
              <ToolFeatureCard
                icon={BarChart2}
                title="Analytics"
                subtitle="Measure & improve"
                size="sm"
              />
            </div>
          </div>
        </div>

        {/* Bottom 3-Card Value Banner (Large Card: 12px) */}
        <div className="mt-4 rounded-[12px] border border-[#E2E8F0] bg-white p-6 shadow-[0_2px_8px_rgba(15,23,42,0.06)]">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#E2E8F0]">
            <div className="sm:px-6 first:pl-0">
              <ValuePillarCard
                icon={LayoutGrid}
                title="1 Workspace"
                description="Everything in one place"
                iconShape="square"
                iconSize="lg"
              />
            </div>
            <div className="sm:px-6 pt-4 sm:pt-0">
              <ValuePillarCard
                icon={Layers}
                title="5+ Tools Replaced"
                description="Simplify your workflow"
                iconShape="square"
                iconSize="lg"
              />
            </div>
            <div className="sm:px-6 pt-4 sm:pt-0">
              <ValuePillarCard
                icon={Target}
                title="0 Lost Opportunities"
                description="Capture, track & win more"
                iconShape="square"
                iconSize="lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Alias for backwards compatibility if needed
export const ToolsIntegrationSection = ClientAcquisitionOsSection;
