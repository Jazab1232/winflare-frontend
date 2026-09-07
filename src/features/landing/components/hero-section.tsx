import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Check,
  Play,
  Shield,
  Zap,
  Lock,
  Calendar,
  LayoutDashboard,
  Compass,
  UserCheck,
  GitPullRequest,
  FileText,
  Users,
  CalendarDays,
  BarChart2,
  Layers,
  Settings,
  ChevronDown,
} from "lucide-react";
import { WinflareLogo } from "./navbar";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-[#FAFBFF]">
      {/* Decorative subtle wavy lines in top right */}
      <div className="pointer-events-none absolute top-0 right-0 -z-10 opacity-30">
        <svg width="450" height="350" viewBox="0 0 450 350" fill="none">
          <path
            d="M50 0C150 80 280 120 450 100M0 50C180 130 300 170 450 160M0 120C190 200 320 240 450 230"
            stroke="#5B5AF7"
            strokeWidth="1.2"
            strokeOpacity="0.4"
          />
        </svg>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-20">
        {/* Main 2-Column Hero Grid */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Headline, CTAs, Trust Points */}
          <div className="space-y-6 lg:col-span-6 xl:col-span-5 text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EFEBFF] px-4 py-1.5 text-xs font-semibold text-[#5B5AF7]">
              <Sparkles className="h-3.5 w-3.5 fill-[#5B5AF7] text-[#5B5AF7]" />
              <span>AI-Powered Client Acquisition OS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl lg:text-[38px] xl:text-[42px] lg:leading-[1.15]">
              Everything Between<br />
              Opportunity <span className="text-[#5B5AF7]">and Client.</span>
            </h1>

            {/* Description Paragraph */}
            <p className="max-w-xl text-base leading-relaxed text-[#64748B] sm:text-lg">
              Discover opportunities, qualify the right ones, generate proposals, manage relationships, and win more clients — all in one place.
            </p>

            {/* 3 Checkmark Bullet Points */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5 pt-1">
              <div className="flex items-center gap-2 text-sm font-medium text-[#0F172A]">
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#5B5AF7] text-white">
                  <Check className="h-2.5 w-2.5 stroke-[3]" />
                </div>
                <span>Find better opportunities</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[#0F172A]">
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#5B5AF7] text-white">
                  <Check className="h-2.5 w-2.5 stroke-[3]" />
                </div>
                <span>Generate winning proposals</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[#0F172A]">
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#5B5AF7] text-white">
                  <Check className="h-2.5 w-2.5 stroke-[3]" />
                </div>
                <span>Track every lead</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="/register"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#5B5AF7] px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#5B5AF7]/25 transition-all hover:bg-[#4847E5] active:scale-[0.99]"
              >
                <span>Start Free</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-[#E2E8F0] bg-white px-6 py-3.5 text-base font-semibold text-[#0F172A] shadow-sm transition-all hover:bg-[#F5F7FF]"
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-full border border-[#0F172A] text-[#0F172A]">
                  <Play className="h-2.5 w-2.5 fill-[#0F172A] ml-0.5" />
                </div>
                <span>See How It Works</span>
              </button>
            </div>

            {/* Micro Guarantees */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-medium text-[#64748B]">
              <div className="flex items-center gap-1.5">
                <Shield className="h-4 w-4 text-[#64748B]" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="h-4 w-4 text-[#64748B]" />
                <span>Setup in minutes</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Lock className="h-4 w-4 text-[#64748B]" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dashboard Mockup Screen */}
          <div className="lg:col-span-6 xl:col-span-7">
            <div className="rounded-3xl border border-[#E2E8F0] bg-white p-3 sm:p-5 shadow-2xl shadow-[#5B5AF7]/10 transition-all">
              <div className="flex gap-4">
                {/* Dashboard Sidebar */}
                <div className="hidden sm:flex w-44 shrink-0 flex-col justify-between border-r border-[#F1F5F9] pr-3 text-left">
                  <div className="space-y-4">
                    {/* Brand header */}
                    <div className="flex items-center gap-2 px-2 py-1">
                      <WinflareLogo className="h-5 w-5" />
                      <span className="text-base font-bold text-[#0F172A]">winflare</span>
                    </div>

                    {/* Navigation Links */}
                    <div className="space-y-1 text-xs font-medium">
                      <div className="relative flex items-center gap-2.5 rounded-xl bg-[#F0EFFF] px-3 py-2 text-[#5B5AF7] font-semibold">
                        <div className="absolute left-0 h-4 w-1 rounded-r-full bg-[#5B5AF7]" />
                        <LayoutDashboard className="h-4 w-4" />
                        <span>Dashboard</span>
                      </div>
                      <div className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-[#64748B] hover:bg-[#F8FAFC]">
                        <Compass className="h-4 w-4" />
                        <span>Opportunities</span>
                      </div>
                      <div className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-[#64748B] hover:bg-[#F8FAFC]">
                        <UserCheck className="h-4 w-4" />
                        <span>Prospects</span>
                      </div>
                      <div className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-[#64748B] hover:bg-[#F8FAFC]">
                        <GitPullRequest className="h-4 w-4" />
                        <span>Pipeline</span>
                      </div>
                      <div className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-[#64748B] hover:bg-[#F8FAFC]">
                        <FileText className="h-4 w-4" />
                        <span>Proposals</span>
                      </div>
                      <div className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-[#64748B] hover:bg-[#F8FAFC]">
                        <Users className="h-4 w-4" />
                        <span>Clients</span>
                      </div>
                      <div className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-[#64748B] hover:bg-[#F8FAFC]">
                        <CalendarDays className="h-4 w-4" />
                        <span>Calendar</span>
                      </div>
                      <div className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-[#64748B] hover:bg-[#F8FAFC]">
                        <BarChart2 className="h-4 w-4" />
                        <span>Analytics</span>
                      </div>
                      <div className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-[#64748B] hover:bg-[#F8FAFC]">
                        <Layers className="h-4 w-4" />
                        <span>Templates</span>
                      </div>
                      <div className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-[#64748B] hover:bg-[#F8FAFC]">
                        <Settings className="h-4 w-4" />
                        <span>Settings</span>
                      </div>
                    </div>
                  </div>

                  {/* User Profile Info */}
                  <div className="flex items-center justify-between rounded-xl border border-[#F1F5F9] bg-[#F8FAFC] p-2 mt-4">
                    <div className="flex items-center gap-2">
                      <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-[#5B5AF7] to-[#8B7FFF] flex items-center justify-center text-[11px] font-bold text-white shadow-sm">
                        JA
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-[#0F172A] leading-tight">Jazab Ali</div>
                        <div className="text-[9px] text-[#64748B]">Founder</div>
                      </div>
                    </div>
                    <ChevronDown className="h-3.5 w-3.5 text-[#64748B]" />
                  </div>
                </div>

                {/* Dashboard Main Content */}
                <div className="flex-1 space-y-3.5 text-left min-w-0">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-3">
                    <div>
                      <h3 className="text-base font-bold text-[#0F172A]">Dashboard</h3>
                      <p className="text-[11px] text-[#64748B]">Overview of your client acquisition</p>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-lg border border-[#E2E8F0] bg-white px-2.5 py-1 text-[11px] font-medium text-[#0F172A]">
                      <span>May 12 - May 18</span>
                      <Calendar className="h-3 w-3 text-[#64748B]" />
                    </div>
                  </div>

                  {/* 4 Stat Cards Row */}
                  <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                    <div className="rounded-xl border border-[#F1F5F9] bg-[#FAFBFF] p-2.5">
                      <div className="text-[10px] font-medium text-[#64748B]">Opportunities Found</div>
                      <div className="mt-1 text-lg font-bold text-[#0F172A]">24</div>
                      <div className="mt-0.5 text-[9px] font-semibold text-[#22C55E]">↗ 12% this week</div>
                    </div>
                    <div className="rounded-xl border border-[#F1F5F9] bg-[#FAFBFF] p-2.5">
                      <div className="text-[10px] font-medium text-[#64748B]">Applications</div>
                      <div className="mt-1 text-lg font-bold text-[#0F172A]">8</div>
                      <div className="mt-0.5 text-[9px] font-semibold text-[#22C55E]">↗ 8% this week</div>
                    </div>
                    <div className="rounded-xl border border-[#F1F5F9] bg-[#FAFBFF] p-2.5">
                      <div className="text-[10px] font-medium text-[#64748B]">Proposals Sent</div>
                      <div className="mt-1 text-lg font-bold text-[#0F172A]">6</div>
                      <div className="mt-0.5 text-[9px] font-semibold text-[#22C55E]">↗ 20% this week</div>
                    </div>
                    <div className="rounded-xl border border-[#F1F5F9] bg-[#FAFBFF] p-2.5">
                      <div className="text-[10px] font-medium text-[#64748B]">Won</div>
                      <div className="mt-1 text-lg font-bold text-[#0F172A]">3</div>
                      <div className="mt-0.5 text-[9px] font-semibold text-[#22C55E]">↗ 100% this week</div>
                    </div>
                  </div>

                  {/* Middle Row: Recent Opportunities (col-span-3) + Pipeline Overview (col-span-2) */}
                  <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-5">
                    {/* Recent Opportunities */}
                    <div className="sm:col-span-3 rounded-2xl border border-[#F1F5F9] bg-white p-3 shadow-xs">
                      <div className="flex items-center justify-between pb-2 border-b border-[#F8FAFC]">
                        <span className="text-xs font-bold text-[#0F172A]">Recent Opportunities</span>
                        <span className="text-[10px] font-medium text-[#64748B] hover:text-[#5B5AF7] cursor-pointer">
                          View all
                        </span>
                      </div>

                      <div className="mt-2 space-y-2">
                        {/* Job 1 */}
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2 min-w-0">
                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#0F172A] text-[10px] font-bold text-white">
                              S
                            </div>
                            <div className="truncate">
                              <div className="font-semibold text-[#0F172A] text-[11px] truncate">
                                Senior Next.js Developer
                              </div>
                              <div className="text-[9px] text-[#64748B]">Remote • United States</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <span className="rounded-full bg-[#DCFCE7] px-2 py-0.5 text-[9px] font-semibold text-[#15803D]">
                              92% Match
                            </span>
                            <span className="text-[9px] text-[#94A3B8]">2h ago</span>
                          </div>
                        </div>

                        {/* Job 2 */}
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2 min-w-0">
                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#8B5CF6] text-[10px] font-bold text-white">
                              ◆
                            </div>
                            <div className="truncate">
                              <div className="font-semibold text-[#0F172A] text-[11px] truncate">
                                SaaS Product Designer
                              </div>
                              <div className="text-[9px] text-[#64748B]">Remote • United Kingdom</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <span className="rounded-full bg-[#DCFCE7] px-2 py-0.5 text-[9px] font-semibold text-[#15803D]">
                              88% Match
                            </span>
                            <span className="text-[9px] text-[#94A3B8]">5h ago</span>
                          </div>
                        </div>

                        {/* Job 3 */}
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2 min-w-0">
                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#0284C7] text-[10px] font-bold text-white">
                              W
                            </div>
                            <div className="truncate">
                              <div className="font-semibold text-[#0F172A] text-[11px] truncate">
                                Full Stack Developer
                              </div>
                              <div className="text-[9px] text-[#64748B]">Remote • Canada</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <span className="rounded-full bg-[#DCFCE7] px-2 py-0.5 text-[9px] font-semibold text-[#15803D]">
                              75% Match
                            </span>
                            <span className="text-[9px] text-[#94A3B8]">1d ago</span>
                          </div>
                        </div>

                        {/* Job 4 */}
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2 min-w-0">
                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#EAB308] text-[10px] font-bold text-white">
                              R
                            </div>
                            <div className="truncate">
                              <div className="font-semibold text-[#0F172A] text-[11px] truncate">
                                Frontend Developer (React)
                              </div>
                              <div className="text-[9px] text-[#64748B]">Remote • Australia</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <span className="rounded-full bg-[#DCFCE7] px-2 py-0.5 text-[9px] font-semibold text-[#15803D]">
                              70% Match
                            </span>
                            <span className="text-[9px] text-[#94A3B8]">1d ago</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Pipeline Overview */}
                    <div className="sm:col-span-2 rounded-2xl border border-[#F1F5F9] bg-white p-3 shadow-xs flex flex-col justify-between">
                      <div className="text-xs font-bold text-[#0F172A] pb-2 border-b border-[#F8FAFC]">
                        Pipeline Overview
                      </div>

                      <div className="flex items-center gap-3 my-auto py-1">
                        {/* Vertical stacked progress bar */}
                        <div className="h-28 w-2.5 rounded-full bg-[#F1F5F9] flex flex-col overflow-hidden shrink-0">
                          <div className="bg-[#8B5CF6] h-[35%]" />
                          <div className="bg-[#3B82F6] h-[25%]" />
                          <div className="bg-[#F97316] h-[18%]" />
                          <div className="bg-[#EAB308] h-[12%]" />
                          <div className="bg-[#22C55E] h-[10%]" />
                        </div>

                        {/* Legend list */}
                        <div className="space-y-1.5 text-[11px] flex-1">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              <div className="h-2 w-2 rounded-full bg-[#8B5CF6]" />
                              <span className="text-[#64748B]">Saved</span>
                            </div>
                            <span className="font-bold text-[#0F172A]">12</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              <div className="h-2 w-2 rounded-full bg-[#3B82F6]" />
                              <span className="text-[#64748B]">Applied</span>
                            </div>
                            <span className="font-bold text-[#0F172A]">8</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              <div className="h-2 w-2 rounded-full bg-[#F97316]" />
                              <span className="text-[#64748B]">Proposal Sent</span>
                            </div>
                            <span className="font-bold text-[#0F172A]">6</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              <div className="h-2 w-2 rounded-full bg-[#EAB308]" />
                              <span className="text-[#64748B]">Interview</span>
                            </div>
                            <span className="font-bold text-[#0F172A]">3</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              <div className="h-2 w-2 rounded-full bg-[#22C55E]" />
                              <span className="text-[#64748B]">Won</span>
                            </div>
                            <span className="font-bold text-[#0F172A]">3</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom: Pipeline Snapshot */}
                  <div className="rounded-2xl border border-[#F1F5F9] bg-[#FAFBFF] p-2.5">
                    <div className="text-[11px] font-bold text-[#0F172A] mb-1.5">Pipeline Snapshot</div>
                    <div className="grid grid-cols-5 gap-2 text-center text-[10px]">
                      <div className="bg-white rounded-lg p-1.5 border border-[#F1F5F9]">
                        <div className="text-[#64748B] text-[9px]">Saved</div>
                        <div className="font-bold text-[#0F172A] text-xs mt-0.5">12</div>
                        <div className="h-1 w-1 rounded-full bg-[#8B5CF6] mx-auto mt-1" />
                      </div>
                      <div className="bg-white rounded-lg p-1.5 border border-[#F1F5F9]">
                        <div className="text-[#64748B] text-[9px]">Applied</div>
                        <div className="font-bold text-[#0F172A] text-xs mt-0.5">8</div>
                        <div className="h-1 w-1 rounded-full bg-[#0F172A] mx-auto mt-1" />
                      </div>
                      <div className="bg-white rounded-lg p-1.5 border border-[#F1F5F9]">
                        <div className="text-[#64748B] text-[9px]">Proposal Sent</div>
                        <div className="font-bold text-[#0F172A] text-xs mt-0.5">6</div>
                        <div className="h-1 w-1 rounded-full bg-[#22C55E] mx-auto mt-1" />
                      </div>
                      <div className="bg-white rounded-lg p-1.5 border border-[#F1F5F9]">
                        <div className="text-[#64748B] text-[9px]">Interview</div>
                        <div className="font-bold text-[#0F172A] text-xs mt-0.5">3</div>
                        <div className="h-1 w-1 rounded-full bg-[#3B82F6] mx-auto mt-1" />
                      </div>
                      <div className="bg-white rounded-lg p-1.5 border border-[#F1F5F9]">
                        <div className="text-[#64748B] text-[9px]">Won</div>
                        <div className="font-bold text-[#0F172A] text-xs mt-0.5">3</div>
                        <div className="h-1 w-1 rounded-full bg-[#22C55E] mx-auto mt-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Brands Trust Banner */}
        <div className="mt-2 pt-10 text-center">
          <p className="text-sm font-medium text-[#64748B]">
            Trusted by freelancers, agencies, and consultants worldwide
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all">
            {/* remote.com */}
            <span className="text-xl font-bold tracking-tight text-[#0F172A]">
              remote<span className="text-[#5B5AF7]">.com</span>
            </span>

            {/* Contra */}
            <div className="flex items-center gap-1.5 font-bold text-lg text-[#0F172A]">
              <span className="text-base text-[#5B5AF7]">✦</span>
              <span>Contra</span>
            </div>

            {/* Toptal */}
            <div className="flex items-center gap-1 font-bold text-lg text-[#0F172A]">
              <span className="text-[#0F172A] text-xl">❖</span>
              <span>Toptal<span className="text-[#22C55E]">.</span></span>
            </div>

            {/* Upwork */}
            <span className="text-xl font-extrabold tracking-tight text-[#0F172A]">
              Upwork
            </span>

            {/* Freelancer */}
            <div className="flex items-center gap-1 font-semibold text-lg text-[#0F172A]">
              <span className="text-blue-500">🕊</span>
              <span>freelancer</span>
            </div>

            {/* PeoplePerHour */}
            <div className="flex items-center gap-1.5 font-bold text-base text-[#0F172A]">
              <div className="flex h-5 w-5 items-center justify-center rounded-full border border-[#0F172A] text-[9px]">
                ●
              </div>
              <span>peopleperhour</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
