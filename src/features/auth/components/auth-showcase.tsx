import React from "react";
import Image from "next/image";
import {
  Search,
  Bell,
  ChevronDown,
  LayoutDashboard,
  Target,
  GitBranch,
  FileText,
  Users,
  Briefcase,
  BarChart2,
  Settings,
  Calendar,
  Phone,
  Mail,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export function AuthShowcase() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden p-8 lg:p-12 xl:p-14 select-none">
      {/* Background Soft Glows */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Tagline & Headline */}
      <div className="relative z-10 flex flex-col items-start max-w-xl mb-6">
        <span className="text-[11px] font-bold tracking-[0.2em] text-text-secondary uppercase mb-2">
          CLIENT ACQUISITION OPERATING SYSTEM
        </span>
        <h1 className="text-3xl xl:text-4xl font-extrabold tracking-tight text-text-primary leading-[1.18]">
          Everything Between <br />
          Opportunity and{" "}
          <span className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Client.
          </span>
        </h1>
      </div>

      {/* Layered Showcase Area */}
      <div className="relative z-10 w-full flex-1 min-h-[580px] flex items-center justify-center pt-2">
        {/* Layer 1: Left Angled / Tilted Opportunities Preview Card */}
        <div className="absolute -left-12 sm:-left-6 lg:-left-10 top-12 bottom-6 w-[280px] lg:w-[320px] bg-white/95 rounded-2xl border border-slate-200/80 shadow-[0_20px_45px_-10px_rgba(15,23,42,0.08)] p-4 -rotate-[4deg] transform-gpu transition-transform duration-500 hover:-rotate-[2deg] z-0 opacity-80 lg:opacity-90 hidden md:flex flex-col">
          {/* Opportunities Mini Header */}
          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-100">
            <Image
              src="/fav-icon.svg"
              alt="Winflare"
              width={16}
              height={16}
              className="object-contain opacity-80"
            />
            <span className="text-xs font-bold text-slate-800">Winflare</span>
          </div>

          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-900">Opportunities</span>
            <span className="text-[10px] text-slate-400 font-medium">Quick Matches</span>
          </div>

          {/* Search Pills */}
          <div className="flex gap-1.5 mb-3">
            <span className="px-2 py-0.5 text-[9px] font-semibold bg-primary/10 text-primary rounded-full">
              Recommended
            </span>
            <span className="px-2 py-0.5 text-[9px] font-medium text-slate-500 bg-slate-100 rounded-full">
              Remote Only
            </span>
          </div>

          {/* Opportunity Cards in Background Stack */}
          <div className="space-y-2 flex-1 overflow-hidden">
            <div className="p-2.5 rounded-xl border border-slate-100 bg-slate-50/60">
              <div className="flex justify-between items-start mb-1">
                <p className="text-[11px] font-bold text-slate-900 leading-tight">
                  Senior Frontend Developer
                </p>
                <span className="text-[9px] text-slate-400">23 offers left</span>
              </div>
              <p className="text-[10px] text-slate-500 mb-1.5">TechCorp Inc.</p>
              <div className="flex items-center justify-between text-[9px]">
                <span className="font-semibold text-slate-700">$5k - $8k</span>
                <span className="inline-flex items-center gap-1 font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  98% match
                </span>
              </div>
            </div>

            <div className="p-2.5 rounded-xl border border-slate-100 bg-slate-50/60">
              <p className="text-[11px] font-bold text-slate-900 leading-tight">
                Full Stack Developer
              </p>
              <p className="text-[10px] text-slate-500 mb-1.5">InnovateLabs</p>
              <div className="flex items-center justify-between text-[9px]">
                <span className="font-semibold text-slate-700">$3k - $6k</span>
                <span className="inline-flex items-center gap-1 font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  90% match
                </span>
              </div>
            </div>

            <div className="p-2.5 rounded-xl border border-slate-100 bg-slate-50/60">
              <p className="text-[11px] font-bold text-slate-900 leading-tight">
                React Developer
              </p>
              <p className="text-[10px] text-slate-500 mb-1.5">ScaleUp Co.</p>
              <div className="flex items-center justify-between text-[9px]">
                <span className="font-semibold text-slate-700">$4k - $7k</span>
                <span className="inline-flex items-center gap-1 font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  88% match
                </span>
              </div>
            </div>

            <div className="p-2.5 rounded-xl border border-slate-100 bg-slate-50/60">
              <p className="text-[11px] font-bold text-slate-900 leading-tight">
                Backend Developer (Node.js)
              </p>
              <p className="text-[10px] text-slate-500 mb-1.5">CloudScale</p>
              <div className="flex items-center justify-between text-[9px]">
                <span className="font-semibold text-slate-700">$4k - $7k</span>
                <span className="inline-flex items-center gap-1 font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  95% match
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Layer 2: Main Foreground Dashboard Window */}
        <div className="relative z-10 w-full ml-auto md:ml-12 lg:ml-16 bg-white rounded-2xl border border-slate-200/90 shadow-[0_24px_50px_-12px_rgba(15,23,42,0.12)] overflow-hidden flex flex-col text-left">
          {/* Dashboard Window Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 bg-white">
            {/* Window Left Logo */}
            <div className="flex items-center gap-2">
              <Image
                src="/fav-icon.svg"
                alt="Winflare"
                width={20}
                height={20}
                className="object-contain"
              />
              <span className="text-xs font-bold tracking-tight text-slate-900">
                Winflare
              </span>
            </div>

            {/* Search Bar */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200/70 rounded-lg w-64 lg:w-72">
              <Search className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="text-[11px] text-slate-400 truncate">
                Search opportunities, clients, projects...
              </span>
            </div>

            {/* User & Bell */}
            <div className="flex items-center gap-3">
              <div className="relative cursor-pointer">
                <Bell className="w-4 h-4 text-slate-500" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full ring-2 ring-white" />
              </div>

              <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
                <div className="w-6 h-6 rounded-full bg-[#0F172A] text-white flex items-center justify-center text-[10px] font-bold">
                  NT
                </div>
                <span className="text-xs font-semibold text-slate-800 hidden sm:inline">
                  Naveed Tahir
                </span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </div>
            </div>
          </div>

          {/* Dashboard Inner Workspace */}
          <div className="flex w-full min-h-[460px] bg-slate-50/40">
            {/* Sidebar Navigation */}
            <div className="w-32 lg:w-36 bg-white border-r border-slate-100 p-2.5 flex flex-col justify-between shrink-0">
              <div className="space-y-1">
                <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-semibold">
                  <LayoutDashboard className="w-3.5 h-3.5" />
                  <span>Dashboard</span>
                </div>
                <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-600 hover:bg-slate-50 text-xs font-medium">
                  <Target className="w-3.5 h-3.5 text-slate-400" />
                  <span>Opportunities</span>
                </div>
                <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-600 hover:bg-slate-50 text-xs font-medium">
                  <GitBranch className="w-3.5 h-3.5 text-slate-400" />
                  <span>Pipeline</span>
                </div>
                <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-600 hover:bg-slate-50 text-xs font-medium">
                  <FileText className="w-3.5 h-3.5 text-slate-400" />
                  <span>Proposals</span>
                </div>
                <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-600 hover:bg-slate-50 text-xs font-medium">
                  <Users className="w-3.5 h-3.5 text-slate-400" />
                  <span>Clients</span>
                </div>
                <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-600 hover:bg-slate-50 text-xs font-medium">
                  <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                  <span>Portfolio</span>
                </div>
                <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-600 hover:bg-slate-50 text-xs font-medium">
                  <BarChart2 className="w-3.5 h-3.5 text-slate-400" />
                  <span>Analytics</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-600 hover:bg-slate-50 text-xs font-medium">
                  <Settings className="w-3.5 h-3.5 text-slate-400" />
                  <span>Settings</span>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 p-4 space-y-3.5 overflow-hidden">
              {/* Top Greeting */}
              <div>
                <h3 className="text-sm font-bold text-slate-900 leading-tight">
                  Good morning, Naveed
                </h3>
                <p className="text-[11px] text-slate-500">
                  Here&apos;s what&apos;s happening with your client acquisition.
                </p>
              </div>

              {/* 4 Stat Cards */}
              <div className="grid grid-cols-4 gap-2.5">
                {/* Stat 1 */}
                <div className="p-2.5 rounded-xl bg-white border border-slate-100 shadow-[0_1px_3px_rgba(0,0,0,0.03)] flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-slate-500 font-medium">Total Opportunities</span>
                    <div className="w-5 h-5 rounded-md bg-blue-50 text-primary flex items-center justify-center">
                      <Target className="w-3 h-3" />
                    </div>
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-base font-extrabold text-slate-900">48</span>
                    <span className="text-[9px] font-semibold text-emerald-600 flex items-center">
                      ↑ 12%
                    </span>
                  </div>
                  <span className="text-[8px] text-slate-400">from last week</span>
                </div>

                {/* Stat 2 */}
                <div className="p-2.5 rounded-xl bg-white border border-slate-100 shadow-[0_1px_3px_rgba(0,0,0,0.03)] flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-slate-500 font-medium">Active Pipeline</span>
                    <div className="w-5 h-5 rounded-md bg-indigo-50 text-indigo-600 flex items-center justify-center">
                      <GitBranch className="w-3 h-3" />
                    </div>
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-base font-extrabold text-slate-900">23</span>
                    <span className="text-[9px] font-semibold text-emerald-600 flex items-center">
                      ↑ 8%
                    </span>
                  </div>
                  <span className="text-[8px] text-slate-400">from last week</span>
                </div>

                {/* Stat 3 */}
                <div className="p-2.5 rounded-xl bg-white border border-slate-100 shadow-[0_1px_3px_rgba(0,0,0,0.03)] flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-slate-500 font-medium">Proposals Sent</span>
                    <div className="w-5 h-5 rounded-md bg-purple-50 text-purple-600 flex items-center justify-center">
                      <FileText className="w-3 h-3" />
                    </div>
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-base font-extrabold text-slate-900">12</span>
                    <span className="text-[9px] font-semibold text-emerald-600 flex items-center">
                      ↑ 33%
                    </span>
                  </div>
                  <span className="text-[8px] text-slate-400">from last week</span>
                </div>

                {/* Stat 4 */}
                <div className="p-2.5 rounded-xl bg-white border border-slate-100 shadow-[0_1px_3px_rgba(0,0,0,0.03)] flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-slate-500 font-medium">Clients Won</span>
                    <div className="w-5 h-5 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <CheckCircle2 className="w-3 h-3" />
                    </div>
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-base font-extrabold text-slate-900">5</span>
                    <span className="text-[9px] font-semibold text-emerald-600 flex items-center">
                      ↑ 67%
                    </span>
                  </div>
                  <span className="text-[8px] text-slate-400">from last week</span>
                </div>
              </div>

              {/* Middle Row: Revenue Chart & Pipeline Health */}
              <div className="grid grid-cols-12 gap-2.5">
                {/* Revenue Overview (approx 60% width) */}
                <div className="col-span-7 p-3 rounded-xl bg-white border border-slate-100 shadow-[0_1px_3px_rgba(0,0,0,0.03)] flex flex-col justify-between relative">
                  <div className="flex items-center justify-between mb-1">
                    <div>
                      <h4 className="text-[11px] font-bold text-slate-900">Revenue Overview</h4>
                      <p className="text-[9px] text-slate-400">Last 6 months</p>
                    </div>
                  </div>

                  {/* SVG Chart with Callout Tooltip */}
                  <div className="relative w-full h-24 pt-1">
                    {/* Tooltip callout at Jun peak */}
                    <div className="absolute top-1 left-[64%] -translate-x-1/2 bg-slate-900 text-white rounded-md px-2 py-1 shadow-md text-center z-10 pointer-events-none">
                      <p className="text-[8px] text-slate-300">Jun 2025</p>
                      <p className="text-[10px] font-bold text-white">$12,450</p>
                      {/* Tooltip pointer arrow */}
                      <div className="w-1.5 h-1.5 bg-slate-900 rotate-45 mx-auto -mb-1 translate-y-[2px]" />
                    </div>

                    <svg
                      viewBox="0 0 320 100"
                      className="w-full h-full overflow-visible"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#5B5AF7" stopOpacity="0.28" />
                          <stop offset="100%" stopColor="#5B5AF7" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>

                      {/* Horizontal Grid lines */}
                      <line x1="20" y1="15" x2="310" y2="15" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3 3" />
                      <line x1="20" y1="40" x2="310" y2="40" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3 3" />
                      <line x1="20" y1="65" x2="310" y2="65" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3 3" />
                      <line x1="20" y1="90" x2="310" y2="90" stroke="#E2E8F0" strokeWidth="1" />

                      {/* Y-axis labels */}
                      <text x="5" y="18" fill="#94A3B8" fontSize="7">$20k</text>
                      <text x="5" y="43" fill="#94A3B8" fontSize="7">$15k</text>
                      <text x="5" y="68" fill="#94A3B8" fontSize="7">$10k</text>
                      <text x="9" y="93" fill="#94A3B8" fontSize="7">$0</text>

                      {/* Area Fill */}
                      <path
                        d="M 30 78 C 65 74, 90 70, 130 62 C 160 56, 180 54, 205 32 C 225 36, 250 48, 275 30 C 290 24, 305 20, 310 20 L 310 90 L 30 90 Z"
                        fill="url(#revGrad)"
                      />

                      {/* Line Curve */}
                      <path
                        d="M 30 78 C 65 74, 90 70, 130 62 C 160 56, 180 54, 205 32 C 225 36, 250 48, 275 30 C 290 24, 305 20, 310 20"
                        fill="none"
                        stroke="#5B5AF7"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                      />

                      {/* Jun Marker Dot */}
                      <circle cx="205" cy="32" r="3.5" fill="#5B5AF7" stroke="#FFFFFF" strokeWidth="1.8" />
                    </svg>

                    {/* X-axis Month Labels */}
                    <div className="flex justify-between pl-6 pr-1 text-[8px] text-slate-400 font-medium mt-0.5">
                      <span>Mar</span>
                      <span>Apr</span>
                      <span>May</span>
                      <span className="font-semibold text-primary">Jun</span>
                      <span>Jul</span>
                      <span>Aug</span>
                    </div>
                  </div>
                </div>

                {/* Pipeline Health (approx 40% width) */}
                <div className="col-span-5 p-3 rounded-xl bg-white border border-slate-100 shadow-[0_1px_3px_rgba(0,0,0,0.03)] flex flex-col justify-between">
                  <div className="mb-1">
                    <h4 className="text-[11px] font-bold text-slate-900">Pipeline Health</h4>
                  </div>

                  <div className="flex items-center gap-3 my-auto">
                    {/* Donut Chart Gauge */}
                    <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                        {/* Background Ring */}
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#EEF2F6"
                          strokeWidth="3.2"
                        />
                        {/* Progress Ring 78% */}
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#5B5AF7"
                          strokeWidth="3.4"
                          strokeDasharray="78, 100"
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-xs font-extrabold text-slate-900 leading-none">
                          78%
                        </span>
                      </div>
                    </div>

                    {/* Donut Status Tag */}
                    <div className="flex flex-col">
                      <span className="text-[11px] font-bold text-slate-800">Healthy</span>
                      <span className="text-[8px] font-semibold text-emerald-600">
                        ↑ 12% from last week
                      </span>
                    </div>
                  </div>

                  {/* Breakdown Legend */}
                  <div className="grid grid-cols-2 gap-x-2 gap-y-1 pt-1.5 border-t border-slate-100 text-[9px]">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 text-slate-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        Qualified
                      </span>
                      <span className="font-semibold text-slate-800">8</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 text-slate-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                        Proposal
                      </span>
                      <span className="font-semibold text-slate-800">6</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 text-slate-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        Negotiation
                      </span>
                      <span className="font-semibold text-slate-800">4</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 text-slate-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        Won
                      </span>
                      <span className="font-semibold text-slate-800">5</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Row: 3 Columns (Recent Opportunities, Upcoming Follow-ups, Quick Actions) */}
              <div className="grid grid-cols-12 gap-2.5">
                {/* Column 1: Recent Opportunities */}
                <div className="col-span-5 p-2.5 rounded-xl bg-white border border-slate-100 shadow-[0_1px_3px_rgba(0,0,0,0.03)] flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2 pb-1 border-b border-slate-50">
                    <h4 className="text-[10px] font-bold text-slate-900">Recent Opportunities</h4>
                    <span className="text-[8px] font-semibold text-primary cursor-pointer hover:underline">
                      View all →
                    </span>
                  </div>

                  <div className="space-y-1.5 text-[9px]">
                    <div className="flex items-center justify-between p-1 rounded-lg hover:bg-slate-50">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <div className="w-5 h-5 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                          <Target className="w-2.5 h-2.5" />
                        </div>
                        <div className="truncate">
                          <p className="font-bold text-slate-900 leading-tight truncate">Frontend Dev (React)</p>
                          <p className="text-[8px] text-slate-400">TechCorp • $5k - $8k</p>
                        </div>
                      </div>
                      <span className="text-[8px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded shrink-0">
                        High Match
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-1 rounded-lg hover:bg-slate-50">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <div className="w-5 h-5 rounded-md bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                          <GitBranch className="w-2.5 h-2.5" />
                        </div>
                        <div className="truncate">
                          <p className="font-bold text-slate-900 leading-tight truncate">Full Stack Developer</p>
                          <p className="text-[8px] text-slate-400">InnovateLabs • $3k - $6k</p>
                        </div>
                      </div>
                      <span className="text-[8px] font-semibold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded shrink-0">
                        Medium
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-1 rounded-lg hover:bg-slate-50">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <div className="w-5 h-5 rounded-md bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                          <Briefcase className="w-2.5 h-2.5" />
                        </div>
                        <div className="truncate">
                          <p className="font-bold text-slate-900 leading-tight truncate">UI/UX Designer</p>
                          <p className="text-[8px] text-slate-400">DesignStudio • $2k - $4k</p>
                        </div>
                      </div>
                      <span className="text-[8px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded shrink-0">
                        High Match
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-1 rounded-lg hover:bg-slate-50">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <div className="w-5 h-5 rounded-md bg-violet-50 text-violet-600 flex items-center justify-center shrink-0">
                          <Target className="w-2.5 h-2.5" />
                        </div>
                        <div className="truncate">
                          <p className="font-bold text-slate-900 leading-tight truncate">Backend Dev (Node)</p>
                          <p className="text-[8px] text-slate-400">CloudScale • $4k - $7k</p>
                        </div>
                      </div>
                      <span className="text-[8px] font-semibold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded shrink-0">
                        Medium
                      </span>
                    </div>
                  </div>
                </div>

                {/* Column 2: Upcoming Follow-ups */}
                <div className="col-span-4 p-2.5 rounded-xl bg-white border border-slate-100 shadow-[0_1px_3px_rgba(0,0,0,0.03)] flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2 pb-1 border-b border-slate-50">
                    <h4 className="text-[10px] font-bold text-slate-900">Upcoming Follow-ups</h4>
                    <span className="text-[8px] font-semibold text-primary cursor-pointer hover:underline">
                      View all →
                    </span>
                  </div>

                  <div className="space-y-1.5 text-[9px]">
                    <div className="flex items-center justify-between p-1 rounded-lg hover:bg-slate-50">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <div className="w-5 h-5 rounded-md bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                          <Calendar className="w-2.5 h-2.5" />
                        </div>
                        <div className="truncate">
                          <p className="font-bold text-slate-900 leading-tight truncate">Follow up - TechCorp</p>
                          <p className="text-[8px] text-slate-400">Proposal sent • 2d ago</p>
                        </div>
                      </div>
                      <span className="text-[8px] font-semibold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded shrink-0">
                        Today
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-1 rounded-lg hover:bg-slate-50">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <div className="w-5 h-5 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                          <Phone className="w-2.5 h-2.5" />
                        </div>
                        <div className="truncate">
                          <p className="font-bold text-slate-900 leading-tight truncate">Call - InnovateLabs</p>
                          <p className="text-[8px] text-slate-400">Negotiation • 4d ago</p>
                        </div>
                      </div>
                      <span className="text-[8px] font-semibold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded shrink-0">
                        Tomorrow
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-1 rounded-lg hover:bg-slate-50">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <div className="w-5 h-5 rounded-md bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                          <Mail className="w-2.5 h-2.5" />
                        </div>
                        <div className="truncate">
                          <p className="font-bold text-slate-900 leading-tight truncate">Email - DesignStudio</p>
                          <p className="text-[8px] text-slate-400">Proposal sent • 1w ago</p>
                        </div>
                      </div>
                      <span className="text-[8px] font-semibold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded shrink-0">
                        In 3 days
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-1 rounded-lg hover:bg-slate-50">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <div className="w-5 h-5 rounded-md bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                          <Calendar className="w-2.5 h-2.5" />
                        </div>
                        <div className="truncate">
                          <p className="font-bold text-slate-900 leading-tight truncate">Follow up - CloudScale</p>
                          <p className="text-[8px] text-slate-400">Applied • 1w ago</p>
                        </div>
                      </div>
                      <span className="text-[8px] font-semibold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded shrink-0">
                        In 4 days
                      </span>
                    </div>
                  </div>
                </div>

                {/* Column 3: Quick Actions & AI Insights */}
                <div className="col-span-3 flex flex-col justify-between gap-1.5">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-100 shadow-[0_1px_3px_rgba(0,0,0,0.03)] flex-1">
                    <h4 className="text-[10px] font-bold text-slate-900 mb-1.5">Quick Actions</h4>
                    <div className="space-y-1 text-[8.5px]">
                      <div className="flex items-center gap-1.5 p-1 rounded-lg border border-slate-100 bg-slate-50/50 hover:bg-slate-50 cursor-pointer">
                        <Search className="w-2.5 h-2.5 text-primary shrink-0" />
                        <div className="truncate">
                          <p className="font-semibold text-slate-800 leading-tight">Search Ops</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 p-1 rounded-lg border border-slate-100 bg-slate-50/50 hover:bg-slate-50 cursor-pointer">
                        <FileText className="w-2.5 h-2.5 text-purple-600 shrink-0" />
                        <div className="truncate">
                          <p className="font-semibold text-slate-800 leading-tight">Create Proposal</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 p-1 rounded-lg border border-slate-100 bg-slate-50/50 hover:bg-slate-50 cursor-pointer">
                        <Users className="w-2.5 h-2.5 text-blue-600 shrink-0" />
                        <div className="truncate">
                          <p className="font-semibold text-slate-800 leading-tight">Add Client</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 p-1 rounded-lg border border-slate-100 bg-slate-50/50 hover:bg-slate-50 cursor-pointer">
                        <Briefcase className="w-2.5 h-2.5 text-indigo-600 shrink-0" />
                        <div className="truncate">
                          <p className="font-semibold text-slate-800 leading-tight">View Portfolio</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* AI Insights Card */}
                  <div className="p-2 rounded-xl bg-gradient-to-r from-primary/10 via-secondary/10 to-blue-50 border border-primary/20 flex items-center justify-between gap-1">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <Sparkles className="w-3 h-3 text-primary shrink-0" />
                      <div className="truncate">
                        <p className="text-[8.5px] font-bold text-primary">AI Insights</p>
                        <p className="text-[7.5px] text-slate-500 truncate">3 opportunities match your profile.</p>
                      </div>
                    </div>
                    <ArrowRight className="w-3 h-3 text-primary shrink-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
