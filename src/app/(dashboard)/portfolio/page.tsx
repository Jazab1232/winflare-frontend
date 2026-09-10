"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Folder,
  FileText,
  Layers,
  Zap,
  Upload,
  Download,
  Plus,
  Search,
  MoreHorizontal,
  ArrowUpRight,
  ChevronRight,
  TrendingUp,
  Sparkles,
  Trophy,
  Target,
  Lightbulb,
  X,
  ExternalLink,
  Globe,
  Home,
  Check,
  Bell,
  ChevronDown,
} from "lucide-react";

// Mockup 1: Laptop with Winflare UI
function LaptopMockup() {
  return (
    <div className="relative h-44 w-full overflow-hidden rounded-2xl bg-gradient-to-tr from-[#5B5AF7] via-[#7B79FF] to-[#A59FFF] p-3 flex items-center justify-center shadow-inner">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/30 via-transparent to-transparent pointer-events-none" />

      {/* Laptop Frame */}
      <div className="relative w-[90%] max-w-[260px] rounded-t-xl bg-slate-900 p-1.5 shadow-2xl ring-1 ring-white/20">
        {/* Web camera */}
        <div className="mx-auto mb-1 h-1 w-1 rounded-full bg-slate-700" />

        {/* Laptop Screen Content */}
        <div className="overflow-hidden rounded-md bg-white p-1.5 shadow-inner">
          {/* Mock Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-1">
            <div className="flex items-center gap-1">
              <div className="h-1.5 w-1.5 rounded-full bg-red-400" />
              <div className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </div>
            <div className="h-1 w-12 rounded-full bg-slate-200" />
            <div className="h-1.5 w-1.5 rounded-full bg-[#5B5AF7]" />
          </div>

          {/* Screen Body */}
          <div className="mt-1.5 grid grid-cols-4 gap-1">
            <div className="rounded bg-[#F5F4FF] p-1 text-center">
              <div className="h-1 w-4 rounded bg-[#5B5AF7]/40 mx-auto" />
              <div className="mt-0.5 text-[7px] font-bold text-[#5B5AF7]">24</div>
            </div>
            <div className="rounded bg-slate-50 p-1 text-center">
              <div className="h-1 w-4 rounded bg-slate-300 mx-auto" />
              <div className="mt-0.5 text-[7px] font-bold text-slate-700">12</div>
            </div>
            <div className="rounded bg-slate-50 p-1 text-center">
              <div className="h-1 w-4 rounded bg-slate-300 mx-auto" />
              <div className="mt-0.5 text-[7px] font-bold text-slate-700">18</div>
            </div>
            <div className="rounded bg-slate-50 p-1 text-center">
              <div className="h-1 w-4 rounded bg-slate-300 mx-auto" />
              <div className="mt-0.5 text-[7px] font-bold text-slate-700">146</div>
            </div>
          </div>

          {/* Mini Chart Mock */}
          <div className="mt-1.5 flex items-end gap-1 h-7 rounded bg-slate-50/80 p-1">
            <div className="h-[40%] flex-1 rounded-xs bg-[#5B5AF7]/30" />
            <div className="h-[70%] flex-1 rounded-xs bg-[#5B5AF7]/60" />
            <div className="h-[50%] flex-1 rounded-xs bg-[#5B5AF7]/40" />
            <div className="h-[90%] flex-1 rounded-xs bg-[#5B5AF7]" />
            <div className="h-[65%] flex-1 rounded-xs bg-[#5B5AF7]/50" />
            <div className="h-[80%] flex-1 rounded-xs bg-[#5B5AF7]/80" />
          </div>
        </div>

        {/* Laptop Base Notch */}
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-1.5 w-16 rounded-b-md bg-slate-700" />
      </div>
    </div>
  );
}

// Mockup 2: Real Estate CRM (House with floating UI cards)
function RealEstateMockup() {
  return (
    <div className="relative h-44 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50 via-slate-100 to-sky-100 p-2 flex items-center justify-center">
      {/* Illustrated house graphic */}
      <svg
        viewBox="0 0 200 120"
        className="w-full h-full object-cover opacity-90 filter drop-shadow-sm"
      >
        {/* Sky / Cloud */}
        <rect width="200" height="120" fill="#EBF4FF" rx="8" />
        <circle cx="30" cy="25" r="14" fill="#FFFFFF" opacity="0.6" />
        <circle cx="45" cy="20" r="18" fill="#FFFFFF" opacity="0.7" />
        <circle cx="60" cy="25" r="14" fill="#FFFFFF" opacity="0.6" />

        {/* Lawn */}
        <rect x="0" y="85" width="200" height="35" fill="#86EFAC" opacity="0.8" />
        <path d="M 0 92 Q 50 86 100 90 T 200 88 L 200 120 L 0 120 Z" fill="#4ADE80" />

        {/* House Main Body */}
        <rect x="35" y="45" width="80" height="45" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" rx="2" />
        {/* Roof */}
        <polygon points="25,48 75,18 125,48" fill="#B45309" stroke="#92400E" strokeWidth="1.5" />
        {/* Dormer Roof */}
        <polygon points="60,32 75,20 90,32" fill="#92400E" />
        {/* Windows */}
        <rect x="45" y="52" width="14" height="16" fill="#BFDBFE" stroke="#B45309" strokeWidth="1" rx="1" />
        <rect x="85" y="52" width="14" height="16" fill="#BFDBFE" stroke="#B45309" strokeWidth="1" rx="1" />
        {/* Door */}
        <rect x="66" y="65" width="16" height="25" fill="#78350F" rx="1" />
        <circle cx="79" cy="78" r="1.5" fill="#FDE047" />

        {/* Pathway */}
        <polygon points="68,90 80,90 88,120 60,120" fill="#E2E8F0" opacity="0.9" />

        {/* Tree */}
        <rect x="135" y="65" width="6" height="25" fill="#78350F" />
        <circle cx="138" cy="55" r="16" fill="#22C55E" />
        <circle cx="133" cy="48" r="12" fill="#16A34A" />
      </svg>

      {/* Floating UI cards on the right */}
      <div className="absolute right-3 top-3 w-32 rounded-xl bg-white/95 p-2 shadow-lg backdrop-blur-xs border border-white/60">
        <div className="flex items-center justify-between border-b border-slate-100 pb-1">
          <span className="text-[8px] font-bold text-slate-800">Properties</span>
          <span className="rounded bg-emerald-100 px-1 text-[7px] font-bold text-emerald-700">Active</span>
        </div>
        <div className="mt-1 space-y-1">
          <div className="flex items-center justify-between text-[7px] text-slate-600">
            <span>Meadow Villa</span>
            <span className="font-bold text-slate-900">$840k</span>
          </div>
          <div className="h-1 w-full rounded-full bg-slate-100">
            <div className="h-1 w-[70%] rounded-full bg-[#5B5AF7]" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Mockup 3: SaaS Analytics Platform (Dark dashboard)
function DarkAnalyticsMockup() {
  return (
    <div className="relative h-44 w-full overflow-hidden rounded-2xl bg-[#0B0F19] p-3 flex items-center justify-center shadow-inner">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E293B_1px,transparent_1px),linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] bg-[size:16px_16px] opacity-25" />

      {/* Center display */}
      <div className="relative w-full max-w-[240px] rounded-xl border border-slate-800 bg-[#111827]/90 p-3 shadow-2xl backdrop-blur-xs">
        {/* Top metrics */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[9px] font-bold text-slate-200">Realtime Engine</span>
          </div>
          <span className="text-[9px] font-mono text-cyan-400">99.98%</span>
        </div>

        {/* Charts and Radial Meters */}
        <div className="mt-2.5 grid grid-cols-2 gap-2">
          {/* Radial meter */}
          <div className="flex flex-col items-center justify-center rounded-lg bg-slate-900/80 p-2 border border-slate-800">
            <div className="relative h-9 w-9">
              <svg viewBox="0 0 36 36" className="h-full w-full rotate-[-90deg]">
                <circle cx="18" cy="18" r="14" fill="none" stroke="#1E293B" strokeWidth="3.5" />
                <circle
                  cx="18"
                  cy="18"
                  r="14"
                  fill="none"
                  stroke="#06B6D4"
                  strokeWidth="3.5"
                  strokeDasharray="88"
                  strokeDashoffset="26"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-white">
                72%
              </div>
            </div>
            <span className="mt-1 text-[7px] text-slate-400">Load Factor</span>
          </div>

          {/* Bar sparkline */}
          <div className="flex flex-col justify-between rounded-lg bg-slate-900/80 p-2 border border-slate-800">
            <span className="text-[7px] text-slate-400">Throughput</span>
            <div className="mt-1 flex items-end gap-0.5 h-6">
              <div className="h-[45%] flex-1 rounded-xs bg-[#5B5AF7]" />
              <div className="h-[65%] flex-1 rounded-xs bg-[#5B5AF7]" />
              <div className="h-[90%] flex-1 rounded-xs bg-cyan-400" />
              <div className="h-[75%] flex-1 rounded-xs bg-[#5B5AF7]" />
              <div className="h-[100%] flex-1 rounded-xs bg-cyan-400" />
            </div>
            <span className="text-[7px] font-mono text-emerald-400">+18.4%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState("Winflare");
  const [activeTab, setActiveTab] = useState("Overview");
  const [copiedNotification, setCopiedNotification] = useState<string | null>(null);

  const categories = ["All", "SaaS", "Real Estate", "Web Apps", "Mobile"];

  const handleActionToast = (msg: string) => {
    setCopiedNotification(msg);
    setTimeout(() => {
      setCopiedNotification(null);
    }, 2400);
  };

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-[#FAFBFF] text-slate-900">
      {/* 1. Integrated Dashboard Top Navigation Bar */}
      <header className="sticky top-0 z-20 flex h-16 w-full shrink-0 items-center justify-between border-b border-slate-200/80 bg-white px-6 sm:px-8">
        {/* Search Bar matching screenshot */}
        <div className="relative flex w-full max-w-lg items-center">
          <Search className="absolute left-3.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search projects, case studies, or technologies..."
            className="h-10 w-full rounded-xl border border-slate-200/90 bg-slate-50/50 pl-10 pr-14 text-xs text-slate-800 placeholder:text-slate-400 shadow-2xs focus:border-[#5B5AF7] focus:bg-white focus:outline-none focus:ring-1.5 focus:ring-[#5B5AF7]"
          />
          <kbd className="absolute right-3 rounded-md border border-slate-200 bg-white px-1.5 py-0.5 text-[10px] font-semibold text-slate-400 select-none">
            ⌘K
          </kbd>
        </div>

        {/* Right Controls: Notification & User Profile */}
        <div className="flex items-center gap-5">
          {/* Bell with red indicator */}
          <button
            type="button"
            className="relative flex h-9 w-9 items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors cursor-pointer"
            aria-label="Notifications"
          >
            <Bell className="h-4 w-4" />
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white" />
          </button>

          {/* User Mini Profile matching screenshot: JD avatar + John Doe / Acme Corp */}
          <div className="flex items-center gap-3 select-none cursor-pointer pl-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#475569] text-white text-xs font-bold shadow-2xs">
              JD
            </div>
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-xs font-bold text-slate-900">John Doe</span>
              <span className="text-[11px] text-slate-400">Acme Corp</span>
            </div>
            <ChevronDown className="h-3.5 w-3.5 text-slate-400 hidden sm:block" />
          </div>
        </div>
      </header>

      {/* 2. Main Page Scrollable Body */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-6 sm:p-8 space-y-6">
        {/* Toast Alert */}
        {copiedNotification && (
          <div className="fixed bottom-6 right-6 z-50 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-semibold text-white shadow-xl animate-in fade-in slide-in-from-bottom-2">
            {copiedNotification}
          </div>
        )}

        {/* Page Title & Main Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Portfolio
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Manage projects, case studies and proof of work.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleActionToast("Import Project dialog ready")}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200/90 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-2xs hover:bg-slate-50 transition-all cursor-pointer active:scale-[0.98]"
            >
              <Upload className="h-3.5 w-3.5 text-slate-500" />
              <span>Import Project</span>
            </button>

            <button
              type="button"
              onClick={() => handleActionToast("Exporting portfolio data...")}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200/90 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-2xs hover:bg-slate-50 transition-all cursor-pointer active:scale-[0.98]"
            >
              <Download className="h-3.5 w-3.5 text-slate-500" />
              <span>Export</span>
            </button>

            <button
              type="button"
              onClick={() => handleActionToast("Opening project creation wizard")}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#5B5AF7] hover:bg-[#4847E5] px-4 py-2 text-xs font-semibold text-white shadow-xs transition-all cursor-pointer active:scale-[0.98]"
            >
              <Plus className="h-3.5 w-3.5 stroke-[2.5]" />
              <span>Add Project</span>
            </button>
          </div>
        </div>

        {/* 4 Summary Stat KPI Cards matching screenshot */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Projects */}
          <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EEF0FF] text-[#5B5AF7]">
              <Folder className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xs font-medium text-slate-400 block">
                Projects
              </span>
              <span className="text-2xl font-bold text-slate-900 block mt-0.5">
                24
              </span>
            </div>
          </div>

          {/* Card 2: Case Studies */}
          <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EEF0FF] text-[#5B5AF7]">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xs font-medium text-slate-400 block">
                Case Studies
              </span>
              <span className="text-2xl font-bold text-slate-900 block mt-0.5">
                12
              </span>
            </div>
          </div>

          {/* Card 3: Technologies */}
          <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EEF0FF] text-[#5B5AF7]">
              <Layers className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xs font-medium text-slate-400 block">
                Technologies
              </span>
              <span className="text-2xl font-bold text-slate-900 block mt-0.5">
                18
              </span>
            </div>
          </div>

          {/* Card 4: Used In Proposals */}
          <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EEF0FF] text-[#5B5AF7]">
              <Zap className="h-5 w-5 fill-[#5B5AF7]" />
            </div>
            <div>
              <span className="text-xs font-medium text-slate-400 block">
                Used In Proposals
              </span>
              <span className="text-2xl font-bold text-slate-900 block mt-0.5">
                146
              </span>
            </div>
          </div>
        </div>

        {/* Main Content Layout: Main Section (Left) + Intelligence & Detail Drawers (Right) */}
        <div className="flex flex-col xl:flex-row gap-6 items-start">
          {/* Main Left Column */}
          <div className="flex-1 w-full min-w-0 space-y-6">
            {/* Section: My Projects */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h2 className="text-base font-bold text-slate-900">
                    My Projects
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Showcase your work and build credibility with real results.
                  </p>
                </div>

                {/* Filter Pills and Search */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 overflow-x-auto custom-scrollbar">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setActiveCategory(cat)}
                        className={`rounded-full px-3.5 py-1 text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                          activeCategory === cat
                            ? "bg-[#5B5AF7] text-white shadow-2xs font-semibold"
                            : "bg-white border border-slate-200/80 text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <Search className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* 3 Project Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Project Card 1: Winflare */}
                <div
                  onClick={() => setSelectedProject("Winflare")}
                  className={`rounded-2xl border bg-white p-4 shadow-2xs transition-all cursor-pointer flex flex-col justify-between ${
                    selectedProject === "Winflare"
                      ? "border-[#5B5AF7] ring-1.5 ring-[#5B5AF7]/20"
                      : "border-slate-200/80 hover:border-slate-300"
                  }`}
                >
                  <LaptopMockup />

                  <div className="mt-4">
                    <h3 className="text-sm font-bold text-slate-900">Winflare</h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Lead-to-Client Operating System
                    </p>

                    {/* Tech Badges */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {["Next.js", "TypeScript", "PostgreSQL", "AI"].map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-[#EEF0FF] px-2 py-0.5 text-[10px] font-semibold text-[#5B5AF7]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Metrics Row */}
                    <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs">
                      <div>
                        <span className="text-[10px] text-slate-400 block">
                          Used in Proposals
                        </span>
                        <div className="flex items-center gap-1 font-bold text-slate-900">
                          <ArrowUpRight className="h-3 w-3 text-emerald-500" />
                          <span>23</span>
                        </div>
                      </div>

                      <div>
                        <span className="text-[10px] text-slate-400 block">
                          Won Deals
                        </span>
                        <div className="flex items-center gap-1 font-bold text-slate-900">
                          <ArrowUpRight className="h-3 w-3 text-emerald-500" />
                          <span>6</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-4 flex items-center gap-2 pt-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject("Winflare");
                      }}
                      className="flex-1 rounded-xl bg-[#5B5AF7] py-2 text-xs font-semibold text-white shadow-2xs hover:bg-[#4847E5] transition-colors"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleActionToast("Editing Winflare project");
                      }}
                      className="flex-1 rounded-xl border border-slate-200 bg-white py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleActionToast("More options");
                      }}
                      className="rounded-xl border border-slate-200 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      <MoreHorizontal className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>

                {/* Project Card 2: Real Estate CRM */}
                <div
                  onClick={() => setSelectedProject("Real Estate CRM")}
                  className={`rounded-2xl border bg-white p-4 shadow-2xs transition-all cursor-pointer flex flex-col justify-between ${
                    selectedProject === "Real Estate CRM"
                      ? "border-[#5B5AF7] ring-1.5 ring-[#5B5AF7]/20"
                      : "border-slate-200/80 hover:border-slate-300"
                  }`}
                >
                  <RealEstateMockup />

                  <div className="mt-4">
                    <h3 className="text-sm font-bold text-slate-900">
                      Real Estate CRM
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Property Management &amp; Lead Tracking
                    </p>

                    {/* Tech Badges */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {["Next.js", "TypeScript", "PostgreSQL", "Mapbox"].map(
                        (tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-[#EEF0FF] px-2 py-0.5 text-[10px] font-semibold text-[#5B5AF7]"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>

                    {/* Metrics Row */}
                    <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs">
                      <div>
                        <span className="text-[10px] text-slate-400 block">
                          Used in Proposals
                        </span>
                        <div className="flex items-center gap-1 font-bold text-slate-900">
                          <ArrowUpRight className="h-3 w-3 text-emerald-500" />
                          <span>15</span>
                        </div>
                      </div>

                      <div>
                        <span className="text-[10px] text-slate-400 block">
                          Won Deals
                        </span>
                        <div className="flex items-center gap-1 font-bold text-slate-900">
                          <ArrowUpRight className="h-3 w-3 text-emerald-500" />
                          <span>2</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-4 flex items-center gap-2 pt-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject("Real Estate CRM");
                      }}
                      className="flex-1 rounded-xl bg-[#5B5AF7] py-2 text-xs font-semibold text-white shadow-2xs hover:bg-[#4847E5] transition-colors"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleActionToast("Editing Real Estate CRM");
                      }}
                      className="flex-1 rounded-xl border border-slate-200 bg-white py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleActionToast("More options");
                      }}
                      className="rounded-xl border border-slate-200 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      <MoreHorizontal className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>

                {/* Project Card 3: SaaS Analytics Platform */}
                <div
                  onClick={() => setSelectedProject("SaaS Analytics Platform")}
                  className={`rounded-2xl border bg-white p-4 shadow-2xs transition-all cursor-pointer flex flex-col justify-between ${
                    selectedProject === "SaaS Analytics Platform"
                      ? "border-[#5B5AF7] ring-1.5 ring-[#5B5AF7]/20"
                      : "border-slate-200/80 hover:border-slate-300"
                  }`}
                >
                  <DarkAnalyticsMockup />

                  <div className="mt-4">
                    <h3 className="text-sm font-bold text-slate-900">
                      SaaS Analytics Platform
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Data Insights for Better Decisions
                    </p>

                    {/* Tech Badges */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {["Next.js", "TypeScript", "PostgreSQL", "AI"].map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-[#EEF0FF] px-2 py-0.5 text-[10px] font-semibold text-[#5B5AF7]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Metrics Row */}
                    <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs">
                      <div>
                        <span className="text-[10px] text-slate-400 block">
                          Used in Proposals
                        </span>
                        <div className="flex items-center gap-1 font-bold text-slate-900">
                          <ArrowUpRight className="h-3 w-3 text-emerald-500" />
                          <span>12</span>
                        </div>
                      </div>

                      <div>
                        <span className="text-[10px] text-slate-400 block">
                          Won Deals
                        </span>
                        <div className="flex items-center gap-1 font-bold text-slate-900">
                          <ArrowUpRight className="h-3 w-3 text-emerald-500" />
                          <span>4</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-4 flex items-center gap-2 pt-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject("SaaS Analytics Platform");
                      }}
                      className="flex-1 rounded-xl bg-[#5B5AF7] py-2 text-xs font-semibold text-white shadow-2xs hover:bg-[#4847E5] transition-colors"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleActionToast("Editing SaaS Analytics Platform");
                      }}
                      className="flex-1 rounded-xl border border-slate-200 bg-white py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleActionToast("More options");
                      }}
                      className="rounded-xl border border-slate-200 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      <MoreHorizontal className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Section: Top Performing Proof Assets */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#EEF0FF] text-[#5B5AF7]">
                    <TrendingUp className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Top Performing Proof Assets
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      Projects most frequently used in winning proposals.
                    </p>
                  </div>
                </div>

                <Link
                  href="/analytics"
                  className="text-xs font-semibold text-[#5B5AF7] hover:underline"
                >
                  View all →
                </Link>
              </div>

              {/* 3 Proof Asset Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Asset 1: Winflare */}
                <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-2xs">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#5B5AF7] text-white font-bold text-sm shadow-xs">
                      W
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">
                        Winflare
                      </h4>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Used 23 Times &bull; Won 6 Deals
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between gap-3">
                    <div className="h-1.5 flex-1 rounded-full bg-slate-100 overflow-hidden">
                      <div className="h-full rounded-full bg-emerald-500 w-[65%]" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-700 whitespace-nowrap">
                      35% Win Rate
                    </span>
                  </div>
                </div>

                {/* Asset 2: Real Estate CRM */}
                <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-2xs">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EEF0FF] text-[#5B5AF7]">
                      <Home className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">
                        Real Estate CRM
                      </h4>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Used 15 Times &bull; Won 2 Deals
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between gap-3">
                    <div className="h-1.5 flex-1 rounded-full bg-slate-100 overflow-hidden">
                      <div className="h-full rounded-full bg-emerald-500 w-[25%]" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-700 whitespace-nowrap">
                      13% Win Rate
                    </span>
                  </div>
                </div>

                {/* Asset 3: SaaS Analytics Platform */}
                <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-2xs">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EEF0FF] text-[#5B5AF7]">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">
                        SaaS Analytics Platform
                      </h4>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Used 12 Times &bull; Won 4 Deals
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between gap-3">
                    <div className="h-1.5 flex-1 rounded-full bg-slate-100 overflow-hidden">
                      <div className="h-full rounded-full bg-emerald-500 w-[55%]" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-700 whitespace-nowrap">
                      33% Win Rate
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Section: Proposal Ready Case Studies */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#EEF0FF] text-[#5B5AF7]">
                    <FileText className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Proposal Ready Case Studies
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      AI-generated case studies ready to insert into proposals.
                    </p>
                  </div>
                </div>

                <Link
                  href="/proposals/templates"
                  className="text-xs font-semibold text-[#5B5AF7] hover:underline"
                >
                  View all →
                </Link>
              </div>

              {/* 2 Case Study Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Case Study 1: SaaS Dashboard Platform */}
                <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-2xs flex flex-col justify-between">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="h-24 w-28 shrink-0 rounded-xl bg-gradient-to-tr from-[#5B5AF7] via-[#8B7FFF] to-pink-400 p-1 flex items-center justify-center shadow-inner">
                      <div className="h-full w-full rounded-lg bg-white/95 p-1.5">
                        <div className="h-1.5 w-8 rounded-full bg-[#5B5AF7]/40 mb-1" />
                        <div className="space-y-1">
                          <div className="h-1 w-full rounded-full bg-slate-100" />
                          <div className="h-1 w-4/5 rounded-full bg-slate-100" />
                          <div className="h-1 w-3/5 rounded-full bg-slate-100" />
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-slate-900">
                        SaaS Dashboard Platform
                      </h4>

                      <div className="mt-2 space-y-1 text-[11px]">
                        <div className="flex items-start gap-1.5">
                          <span className="font-bold text-slate-700 w-14 shrink-0">
                            Problem
                          </span>
                          <span className="text-slate-500">
                            Outdated analytics tools and no real time insights.
                          </span>
                        </div>
                        <div className="flex items-start gap-1.5">
                          <span className="font-bold text-slate-700 w-14 shrink-0">
                            Solution
                          </span>
                          <span className="text-slate-500">
                            Built a modern dashboard with real-time data, AI insights and custom reporting.
                          </span>
                        </div>
                        <div className="flex items-start gap-1.5">
                          <span className="font-bold text-slate-700 w-14 shrink-0">
                            Outcome
                          </span>
                          <span className="text-slate-500">
                            40% increase in efficiency and 25% faster decision making.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                    <span className="text-[11px] text-slate-400 font-medium">
                      Used 12 Times
                    </span>
                    <button
                      type="button"
                      onClick={() => handleActionToast("Inserted SaaS Dashboard Platform into proposal")}
                      className="rounded-xl bg-[#5B5AF7] hover:bg-[#4847E5] px-4 py-2 text-xs font-semibold text-white shadow-2xs transition-colors cursor-pointer"
                    >
                      Insert into Proposal
                    </button>
                  </div>
                </div>

                {/* Case Study 2: Real Estate CRM */}
                <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-2xs flex flex-col justify-between">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="h-24 w-28 shrink-0 rounded-xl bg-gradient-to-tr from-amber-100 via-emerald-100 to-sky-100 p-1 flex items-center justify-center shadow-inner">
                      <div className="h-full w-full rounded-lg bg-white/95 p-1.5 flex flex-col items-center justify-center">
                        <Home className="h-6 w-6 text-amber-600 mb-1" />
                        <span className="text-[8px] font-bold text-slate-700">Villa Project</span>
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-slate-900">
                        Real Estate CRM
                      </h4>

                      <div className="mt-2 space-y-1 text-[11px]">
                        <div className="flex items-start gap-1.5">
                          <span className="font-bold text-slate-700 w-14 shrink-0">
                            Problem
                          </span>
                          <span className="text-slate-500">
                            Manual processes and missed leads.
                          </span>
                        </div>
                        <div className="flex items-start gap-1.5">
                          <span className="font-bold text-slate-700 w-14 shrink-0">
                            Solution
                          </span>
                          <span className="text-slate-500">
                            Implemented an automated CRM with lead tracking, email campaigns and property management.
                          </span>
                        </div>
                        <div className="flex items-start gap-1.5">
                          <span className="font-bold text-slate-700 w-14 shrink-0">
                            Outcome
                          </span>
                          <span className="text-slate-500">
                            60% more qualified leads and 3x faster response time.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                    <span className="text-[11px] text-slate-400 font-medium">
                      Used 8 Times
                    </span>
                    <button
                      type="button"
                      onClick={() => handleActionToast("Inserted Real Estate CRM into proposal")}
                      className="rounded-xl bg-[#5B5AF7] hover:bg-[#4847E5] px-4 py-2 text-xs font-semibold text-white shadow-2xs transition-colors cursor-pointer"
                    >
                      Insert into Proposal
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Empty State Banner / Callout matching screenshot */}
            <div className="rounded-2xl border border-dashed border-slate-200 bg-white/60 p-6 text-center flex flex-col items-center justify-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF0FF] text-[#5B5AF7]">
                <Folder className="h-5 w-5" />
              </div>
              <h4 className="mt-2 text-xs font-bold text-slate-800">
                No projects yet.
              </h4>
              <p className="mt-0.5 text-[11px] text-slate-400">
                Add your first project and start building proposal-ready case studies.
              </p>
              <button
                type="button"
                onClick={() => handleActionToast("Opening project creation dialog")}
                className="mt-3 rounded-lg bg-[#5B5AF7] hover:bg-[#4847E5] px-3.5 py-1.5 text-[11px] font-semibold text-white shadow-2xs transition-colors cursor-pointer"
              >
                Add First Project
              </button>
            </div>
          </div>

          {/* Right Column: Portfolio Intelligence & Project Detail Drawer */}
          <div className="w-full xl:w-[350px] shrink-0 space-y-5">
            {/* Panel 1: Portfolio Intelligence */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EEF0FF] text-[#5B5AF7]">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-900">
                      Portfolio Intelligence
                    </h3>
                    <p className="text-[10px] text-slate-400">
                      AI-powered insights from your portfolio.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="rounded-lg p-1 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* 4 Intelligence Items matching screenshot */}
              <div className="mt-4 space-y-3.5">
                {/* Item 1: Most Successful Project */}
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EEF0FF] text-[#5B5AF7]">
                    <Trophy className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-medium text-slate-400 block">
                      Most Successful Project
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 mt-0.5">
                      Winflare
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      <span className="font-bold text-emerald-600">35%</span> Proposal Win Rate
                    </p>
                  </div>
                </div>

                {/* Item 2: Most Used Technology */}
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EEF0FF] text-[#5B5AF7]">
                    <Layers className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-medium text-slate-400 block">
                      Most Used Technology
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 mt-0.5">
                      Next.js
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Used in 48 proposals
                    </p>
                  </div>
                </div>

                {/* Item 3: Best Performing Industry */}
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EEF0FF] text-[#5B5AF7]">
                    <Target className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-medium text-slate-400 block">
                      Best Performing Industry
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 mt-0.5">
                      SaaS
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      <span className="font-bold text-emerald-600">42%</span> of total proposal usage
                    </p>
                  </div>
                </div>

                {/* Item 4: AI Recommendation */}
                <div className="group flex items-start gap-3 rounded-xl border border-indigo-100 bg-[#F8F7FF] p-3 transition-colors hover:border-[#5B5AF7]/40 cursor-pointer">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EEF0FF] text-[#5B5AF7]">
                    <Lightbulb className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold text-[#5B5AF7] uppercase tracking-wider block">
                      AI Recommendation
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 mt-0.5">
                      Add more SaaS case studies.
                    </h4>
                    <p className="text-[10px] text-slate-500 leading-snug mt-0.5">
                      SaaS projects have the highest win rate (35%) and usage (42%).
                    </p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-slate-400 group-hover:translate-x-0.5 transition-transform mt-2" />
                </div>
              </div>
            </div>

            {/* Panel 2: Project Detail Drawer (Inspector: Winflare) */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#5B5AF7] text-white font-bold text-xs">
                    W
                  </div>
                  <span className="text-sm font-bold text-slate-900">
                    {selectedProject}
                  </span>
                </div>

                <button
                  type="button"
                  className="rounded-lg p-1 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Inspector Navigation Tabs matching screenshot */}
              <div className="flex items-center gap-2 border-b border-slate-100 pb-2 text-xs">
                {["Overview", "Problem", "Solution", "Results"].map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`pb-1 font-semibold transition-colors cursor-pointer ${
                      activeTab === tab
                        ? "text-[#5B5AF7] border-b-2 border-[#5B5AF7]"
                        : "text-slate-400 hover:text-slate-700"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
                <ChevronRight className="h-3.5 w-3.5 text-slate-300 ml-auto cursor-pointer" />
              </div>

              {/* Banner Mockup */}
              <div className="overflow-hidden rounded-xl border border-slate-200/80 bg-slate-50">
                <div className="h-28 w-full bg-gradient-to-r from-[#5B5AF7] via-[#8B7FFF] to-indigo-600 p-2 flex items-center justify-center">
                  <div className="h-20 w-48 rounded-md bg-white p-1 shadow-lg">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-0.5">
                      <div className="h-1 w-8 rounded-full bg-[#5B5AF7]" />
                      <div className="h-1 w-4 rounded-full bg-slate-200" />
                    </div>
                    <div className="mt-1 grid grid-cols-3 gap-1">
                      <div className="h-8 rounded bg-slate-50 p-1 text-center">
                        <div className="text-[7px] font-bold text-[#5B5AF7]">24</div>
                      </div>
                      <div className="h-8 rounded bg-slate-50 p-1 text-center">
                        <div className="text-[7px] font-bold text-slate-700">12</div>
                      </div>
                      <div className="h-8 rounded bg-slate-50 p-1 text-center">
                        <div className="text-[7px] font-bold text-slate-700">18</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  {selectedProject}
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  {selectedProject === "Winflare"
                    ? "Lead-to-Client Operating System"
                    : selectedProject === "Real Estate CRM"
                    ? "Property Management & Lead Tracking"
                    : "Data Insights for Better Decisions"}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">
                  {selectedProject === "Winflare"
                    ? "Winflare helps businesses find leads, create proposals, track follow-ups and close more deals — all in one platform."
                    : selectedProject === "Real Estate CRM"
                    ? "Automated CRM tailored for luxury agencies with instant property syncing and mobile contract pipeline."
                    : "High-performance enterprise metrics platform delivering instant query execution and automated reporting."}
                </p>
              </div>

              {/* Key Results */}
              <div>
                <span className="text-xs font-bold text-slate-900 block">
                  Key Results
                </span>
                <div className="mt-2 grid grid-cols-3 gap-2">
                  <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-2 text-center">
                    <div className="flex items-center justify-center text-slate-400 mb-0.5">
                      <FileText className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-xs font-bold text-slate-900 block">
                      {selectedProject === "Winflare" ? "23" : selectedProject === "Real Estate CRM" ? "15" : "12"}
                    </span>
                    <span className="text-[9px] text-slate-400 block mt-0.5">
                      Used in Proposals
                    </span>
                  </div>

                  <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-2 text-center">
                    <div className="flex items-center justify-center text-emerald-500 mb-0.5">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-xs font-bold text-slate-900 block">
                      {selectedProject === "Winflare" ? "6" : selectedProject === "Real Estate CRM" ? "2" : "4"}
                    </span>
                    <span className="text-[9px] text-slate-400 block mt-0.5">
                      Won Deals
                    </span>
                  </div>

                  <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-2 text-center">
                    <div className="flex items-center justify-center text-emerald-500 mb-0.5">
                      <TrendingUp className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-xs font-bold text-emerald-600 block">
                      {selectedProject === "Winflare" ? "35%" : selectedProject === "Real Estate CRM" ? "13%" : "33%"}
                    </span>
                    <span className="text-[9px] text-slate-400 block mt-0.5">
                      Win Rate
                    </span>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div>
                <span className="text-xs font-bold text-slate-900 block">
                  Technologies
                </span>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {["Next.js", "TypeScript", "PostgreSQL", "AI"].map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-[#EEF0FF] px-2 py-0.5 text-[10px] font-semibold text-[#5B5AF7]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* External Links */}
              <div>
                <span className="text-xs font-bold text-slate-900 block">
                  Links
                </span>
                <div className="mt-2 space-y-1.5">
                  <a
                    href="https://winflare.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-lg border border-slate-100 p-2 text-xs text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Globe className="h-3.5 w-3.5 text-slate-400" />
                      <div>
                        <span className="font-semibold text-slate-800 block text-[11px]">
                          Live Website
                        </span>
                        <span className="text-[10px] text-slate-400">
                          https://winflare.com
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
                  </a>

                  <a
                    href="https://github.com/winflare"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-lg border border-slate-100 p-2 text-xs text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-slate-900 text-[8px] font-bold text-white">
                        G
                      </div>
                      <div>
                        <span className="font-semibold text-slate-800 block text-[11px]">
                          GitHub
                        </span>
                        <span className="text-[10px] text-slate-400">
                          github.com/winflare
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* Proposal Usage Footer */}
              <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                <div>
                  <span className="text-xs font-bold text-slate-900 block">
                    Proposal Usage
                  </span>
                  <p className="text-[11px] text-slate-400">
                    Used in 23 proposals across 6 deals
                  </p>
                </div>

                <Link
                  href="/proposals"
                  className="rounded-xl border border-[#5B5AF7] px-3 py-1.5 text-xs font-semibold text-[#5B5AF7] hover:bg-[#EEF0FF] transition-colors whitespace-nowrap"
                >
                  View in Proposals
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
