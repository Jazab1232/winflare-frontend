"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Home,
  Target,
  FileText,
  Briefcase,
  Search,
  Compass,
  Sparkles,
  HelpCircle,
} from "lucide-react";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden bg-[#FAFBFF] px-4 py-10 sm:px-6 lg:px-8 select-none">
      {/* Decorative ambient background glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#5B5AF7]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#8B7FFF]/15 blur-3xl" />

      {/* Top Navbar Header */}
      <header className="w-full max-w-6xl flex items-center justify-between pb-6">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#5B5AF7] text-white shadow-xs font-black text-sm group-hover:scale-105 transition-transform">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="m3 7 4 10 5-8 5 8 4-10" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            Winflare
          </span>
        </Link>

        <div className="flex items-center gap-3 text-xs">
          <Link
            href="/pricing"
            className="text-slate-500 hover:text-slate-900 font-medium transition-colors hidden sm:inline-block"
          >
            Pricing
          </Link>
          <Link
            href="/dashboard"
            className="rounded-xl border border-slate-200 bg-white px-3.5 py-1.5 font-semibold text-slate-700 shadow-2xs hover:bg-slate-50 transition-colors"
          >
            Dashboard
          </Link>
        </div>
      </header>

      {/* Main 404 Visual Content */}
      <main className="my-auto flex flex-col items-center text-center max-w-2xl py-8 z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-[#EEF0FF] px-4 py-1 text-xs font-bold tracking-wider text-[#5B5AF7] shadow-2xs">
          <Sparkles className="h-3.5 w-3.5" />
          <span>ERROR 404 • PAGE NOT FOUND</span>
        </div>

        {/* Large 404 Gradient Number */}
        <div className="relative mt-6">
          <h1 className="text-8xl sm:text-9xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#5B5AF7] via-[#706BFF] to-[#A29CFF] leading-none select-none drop-shadow-xs">
            404
          </h1>

          {/* Floating Radar Icon Centerpiece */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-20 w-20 items-center justify-center rounded-3xl bg-white/95 border border-indigo-100/80 shadow-xl backdrop-blur-md">
            <Compass className="h-10 w-10 text-[#5B5AF7] animate-spin duration-3000" />
          </div>
        </div>

        {/* Heading and description */}
        <h2 className="mt-8 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
          Lost in the Radar? Opportunity Not Found.
        </h2>

        <p className="mt-3 text-sm text-slate-500 max-w-md leading-relaxed">
          The route you navigated to doesn&apos;t exist, was moved, or has expired. Let&apos;s get you back to closing deals and managing proposals.
        </p>

        {/* Primary & Secondary Action CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 shadow-2xs hover:bg-slate-50 transition-all active:scale-[0.98] cursor-pointer"
          >
            <ArrowLeft className="h-3.5 w-3.5 text-slate-500" />
            <span>Go Back</span>
          </button>

          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-xl bg-[#5B5AF7] hover:bg-[#4847E5] px-5 py-2.5 text-xs font-semibold text-white shadow-xs transition-all active:scale-[0.98]"
          >
            <Home className="h-3.5 w-3.5" />
            <span>Back to Dashboard</span>
          </Link>

          <Link
            href="/opportunities"
            className="inline-flex items-center gap-2 rounded-xl border border-indigo-200 bg-[#EEF0FF] hover:bg-[#E4E2FF] px-4 py-2.5 text-xs font-semibold text-[#5B5AF7] transition-all active:scale-[0.98]"
          >
            <Target className="h-3.5 w-3.5" />
            <span>Radar Discovery</span>
          </Link>
        </div>

        {/* Quick Directory Links */}
        <div className="mt-12 w-full max-w-lg border-t border-slate-200/80 pt-6">
          <span className="text-xs font-semibold text-slate-400 block uppercase tracking-wider mb-3">
            Popular Destinations
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <Link
              href="/opportunities"
              className="flex flex-col items-center justify-center rounded-xl border border-slate-200/80 bg-white p-3 shadow-2xs hover:border-[#5B5AF7] hover:bg-[#F9F8FF] transition-all group"
            >
              <Target className="h-4 w-4 text-[#5B5AF7] group-hover:scale-110 transition-transform mb-1.5" />
              <span className="text-xs font-bold text-slate-800">Leads</span>
              <span className="text-[10px] text-slate-400">Live RFPs</span>
            </Link>

            <Link
              href="/proposals"
              className="flex flex-col items-center justify-center rounded-xl border border-slate-200/80 bg-white p-3 shadow-2xs hover:border-[#5B5AF7] hover:bg-[#F9F8FF] transition-all group"
            >
              <FileText className="h-4 w-4 text-[#5B5AF7] group-hover:scale-110 transition-transform mb-1.5" />
              <span className="text-xs font-bold text-slate-800">Proposals</span>
              <span className="text-[10px] text-slate-400">AI Drafter</span>
            </Link>

            <Link
              href="/portfolio"
              className="flex flex-col items-center justify-center rounded-xl border border-slate-200/80 bg-white p-3 shadow-2xs hover:border-[#5B5AF7] hover:bg-[#F9F8FF] transition-all group"
            >
              <Briefcase className="h-4 w-4 text-[#5B5AF7] group-hover:scale-110 transition-transform mb-1.5" />
              <span className="text-xs font-bold text-slate-800">Portfolio</span>
              <span className="text-[10px] text-slate-400">Case Studies</span>
            </Link>

            <Link
              href="/pricing"
              className="flex flex-col items-center justify-center rounded-xl border border-slate-200/80 bg-white p-3 shadow-2xs hover:border-[#5B5AF7] hover:bg-[#F9F8FF] transition-all group"
            >
              <Compass className="h-4 w-4 text-[#5B5AF7] group-hover:scale-110 transition-transform mb-1.5" />
              <span className="text-xs font-bold text-slate-800">Pricing</span>
              <span className="text-[10px] text-slate-400">Plans &amp; Tiers</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-6xl pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
        <span>© {new Date().getFullYear()} Winflare OS. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <Link href="/about" className="hover:text-slate-700 transition-colors">
            About
          </Link>
          <Link href="/pricing" className="hover:text-slate-700 transition-colors">
            Pricing
          </Link>
          <Link href="/dashboard" className="hover:text-slate-700 transition-colors">
            Help Center
          </Link>
        </div>
      </footer>
    </div>
  );
}

