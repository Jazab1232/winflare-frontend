"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  FileText,
  CheckSquare,
  CheckCircle2,
  Send,
  MessageSquare,
  Trophy,
  XCircle,
  Check,
  Compass,
  FilePlus,
  Wand2,
  Edit3,
  ShieldCheck,
  Clock,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { PageHeader } from "@/components/dashboard";

export default function ProposalWorkflowPage() {
  return (
    <div className="flex flex-col h-full overflow-hidden bg-[#FAFBFF]">
      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-8 max-w-6xl mx-auto w-full">
        <PageHeader
          title="Proposal Architecture & Workflow"
          description="System lifecycle from AI generation through client signing."
          actions={
            <Link
              href="/proposals"
              className="rounded-xl bg-[#5B5AF7] hover:bg-[#4847E5] px-4 py-2 text-xs font-semibold text-white shadow-xs transition-all inline-flex items-center gap-1.5"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to Proposals</span>
            </Link>
          }
        />
        {/* ========================================================= */}
        {/* SCREEN 8: Proposal Status Flow */}
        {/* ========================================================= */}
        <section className="space-y-4">
          <div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Screen 8
            </span>
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Proposal Status Flow
            </h2>
          </div>

          {/* Flow Container Card */}
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-2xs space-y-8">
            {/* Horizontal Nodes Flowchart */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 select-none py-4">
              {/* Draft */}
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-slate-300 bg-white text-slate-500 shadow-2xs">
                  <FileText className="h-5 w-5" />
                </div>
                <span className="text-xs font-semibold text-slate-800">Draft</span>
              </div>

              <div className="h-0.5 w-6 sm:w-10 bg-slate-200" />

              {/* Review */}
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#8B5CF6] text-white shadow-2xs">
                  <CheckSquare className="h-5 w-5" />
                </div>
                <span className="text-xs font-semibold text-slate-800">Review</span>
              </div>

              <div className="h-0.5 w-6 sm:w-10 bg-slate-200" />

              {/* Ready */}
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3B82F6] text-white shadow-2xs">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <span className="text-xs font-semibold text-slate-800">Ready</span>
              </div>

              <div className="h-0.5 w-6 sm:w-10 bg-slate-200" />

              {/* Sent */}
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#8B5CF6] text-white shadow-2xs">
                  <Send className="h-5 w-5" />
                </div>
                <span className="text-xs font-semibold text-slate-800">Sent</span>
              </div>

              <div className="h-0.5 w-6 sm:w-10 bg-slate-200" />

              {/* Client Replied */}
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white shadow-2xs">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <span className="text-xs font-semibold text-slate-800">Client Replied</span>
              </div>

              <div className="h-0.5 w-6 sm:w-10 bg-slate-200" />

              {/* Branch to Won / Lost */}
              <div className="flex flex-col gap-3">
                {/* Won */}
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xs">
                    <Trophy className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-bold text-emerald-700">Won</span>
                </div>

                {/* Lost */}
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-500 text-white shadow-2xs">
                    <XCircle className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-bold text-rose-700">Lost</span>
                </div>
              </div>
            </div>

            {/* Scope Comparison Cards matching screenshot 8 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4 border-t border-slate-100">
              {/* MVP Scope (V1) */}
              <div className="rounded-2xl border border-slate-200/80 bg-[#FAFBFF] p-6 space-y-4">
                <h3 className="text-sm font-bold text-slate-900">
                  MVP Scope (V1)
                </h3>
                <ul className="space-y-2 text-xs text-slate-700">
                  {[
                    "Proposal Dashboard",
                    "Proposal Editor",
                    "Proposal Generation",
                    "Templates",
                    "Proposal Review Score",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#5B5AF7] stroke-[2.5]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* V2 Scope */}
              <div className="rounded-2xl border border-slate-200/80 bg-[#FAFBFF] p-6 space-y-4">
                <h3 className="text-sm font-bold text-slate-900">
                  V2 Scope
                </h3>
                <ul className="space-y-2 text-xs text-slate-700">
                  {[
                    "Version History",
                    "Team Collaboration",
                    "Comments",
                    "Proposal Analytics",
                    "E-signature",
                    "PDF Branding",
                    "Client Proposal Portal",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#5B5AF7] stroke-[2.5]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SCREEN 9: User Flow */}
        {/* ========================================================= */}
        <section className="space-y-4">
          <div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Screen 9
            </span>
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              User Flow
            </h2>
          </div>

          {/* User Flow Container Card */}
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-2xs space-y-8">
            {/* Horizontal 8-Step Connected Flowchart */}
            <div className="flex flex-wrap items-center justify-between gap-3 select-none py-2">
              {[
                { title: "Pipeline", icon: Compass, color: "bg-amber-50 text-amber-600 border-amber-200" },
                { title: "Generate Proposal", icon: FilePlus, color: "bg-indigo-50 text-[#5B5AF7] border-indigo-200" },
                { title: "AI Generates Draft", icon: Wand2, color: "bg-purple-50 text-purple-600 border-purple-200" },
                { title: "Edit Proposal", icon: Edit3, color: "bg-blue-50 text-blue-600 border-blue-200" },
                { title: "AI Review Score", icon: ShieldCheck, color: "bg-cyan-50 text-cyan-600 border-cyan-200" },
                { title: "Send Proposal", icon: Send, color: "bg-purple-50 text-purple-600 border-purple-200" },
                { title: "Track Status", icon: Clock, color: "bg-blue-50 text-blue-600 border-blue-200" },
                { title: "Client Won", icon: Trophy, color: "bg-emerald-50 text-emerald-600 border-emerald-200" },
              ].map((step, idx, arr) => {
                const Icon = step.icon;
                return (
                  <React.Fragment key={idx}>
                    <div className="flex flex-col items-center gap-2 text-center min-w-[70px]">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-full border shadow-2xs ${step.color}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[11px] font-semibold text-slate-700 leading-tight">
                        {step.title}
                      </span>
                    </div>

                    {idx < arr.length - 1 && (
                      <ArrowRight className="h-3.5 w-3.5 text-slate-300 shrink-0 hidden md:block" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Branded Marketing Card Banner matching screenshot 9 */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#1E1B4B] via-[#312E81] to-[#4338CA] p-8 text-white shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-3 z-10">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#5B5AF7] text-white font-black text-sm">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                      <path d="m3 7 4 10 5-8 5 8 4-10" />
                    </svg>
                  </div>
                  <span className="text-base font-bold tracking-tight">Winflare</span>
                </div>

                <h3 className="text-2xl font-bold tracking-tight">
                  More <span className="underline decoration-[#5B5AF7] decoration-2">than</span> proposals.
                  <br />
                  It&apos;s your growth engine.
                </h3>
              </div>

              {/* Tagline */}
              <div className="z-10 text-right self-end md:self-center">
                <span className="text-xs font-semibold tracking-wider text-indigo-200">
                  Build. Send. Win.
                </span>
              </div>

              {/* Subtle background glow effect */}
              <div className="absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-[#818CF8]/20 blur-3xl pointer-events-none" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

