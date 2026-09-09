"use client";

import * as React from "react";
import Link from "next/link";
import {
  Briefcase,
  ExternalLink,
  Plus,
  Search,
  ChevronDown,
  Star,
  Eye,
  TrendingUp,
  FolderKanban,
  Award,
  Layers,
  ArrowRight,
  Share2,
} from "lucide-react";
import { ClientsHeader } from "@/features/clients/components/clients-header";
import { cn } from "@/lib/utils";

interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: string;
  summary: string;
  impact: string;
  imageBg: string;
  tag: string;
  stars: number;
  featured?: boolean;
  link?: string;
}

const MOCK_PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "port-1",
    title: "Verve Labs SaaS Redesign",
    client: "Verve Labs",
    category: "SaaS",
    summary: "Full platform UI/UX and React frontend overhaul with real-time analytics dashboard.",
    impact: "+142% User Engagement",
    imageBg: "from-indigo-600 to-purple-600",
    tag: "Featured Case Study",
    stars: 5,
    featured: true,
  },
  {
    id: "port-2",
    title: "Fintech Core Mobile Application",
    client: "Acme Inc",
    category: "Mobile Apps",
    summary: "High-security cross-platform mobile wallet with biometric auth and instant transfers.",
    impact: "$24M+ Processed",
    imageBg: "from-blue-600 to-cyan-600",
    tag: "Mobile App",
    stars: 5,
    featured: true,
  },
  {
    id: "port-3",
    title: "NextGen E-Commerce Storefront",
    client: "PixelForge",
    category: "Web Development",
    summary: "Headless Shopify Next.js 16 storefront with lightning sub-second page loads.",
    impact: "+68% Checkout Rate",
    imageBg: "from-purple-600 to-pink-600",
    tag: "E-Commerce",
    stars: 5,
  },
  {
    id: "port-4",
    title: "AI Healthcare Diagnostics Portal",
    client: "Helix Solutions",
    category: "Web Development",
    summary: "HIPAA-compliant clinician portal with automated patient scheduling and telemetry.",
    impact: "40% Time Saved / Patient",
    imageBg: "from-teal-600 to-emerald-600",
    tag: "HealthTech",
    stars: 5,
  },
  {
    id: "port-5",
    title: "Media Streaming & Creator Dashboard",
    client: "Summit Media",
    category: "UI/UX Design",
    summary: "Intuitive multi-track audio and video editing interface designed for creators.",
    impact: "350k Active Creators",
    imageBg: "from-amber-600 to-orange-600",
    tag: "Creator Economy",
    stars: 5,
  },
  {
    id: "port-6",
    title: "Enterprise Cloud Infrastructure Portal",
    client: "Orbit Systems",
    category: "SaaS",
    summary: "Kubernetes cluster orchestration interface with automated node autoscaling.",
    impact: "99.99% Uptime",
    imageBg: "from-slate-800 to-slate-950",
    tag: "DevOps",
    stars: 5,
  },
];

export default function PortfolioPage() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [activeCategory, setActiveCategory] = React.useState<string>("All");

  const categories = [
    "All",
    "SaaS",
    "Web Development",
    "Mobile Apps",
    "UI/UX Design",
  ];

  const filteredItems = MOCK_PORTFOLIO_ITEMS.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat =
      activeCategory === "All" || item.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-[#FAFBFF] text-slate-900">
      {/* 1. Sticky Top Navigation Header */}
      <ClientsHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* 2. Main Page Body */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6">
        {/* Title Bar & Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Portfolio
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Showcase your past work, case studies, and proven deliverables to win more opportunities.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200/90 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-2xs hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <Share2 className="h-3.5 w-3.5 text-slate-500" />
              <span>Share Public Link</span>
            </button>

            <button
              type="button"
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#5B5AF7] hover:bg-[#4847E5] px-4 py-2 text-xs font-semibold text-white shadow-xs transition-colors cursor-pointer"
            >
              <Plus className="h-3.5 w-3.5" />
              <span>Add Project</span>
            </button>
          </div>
        </div>

        {/* KPI Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs flex items-center gap-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EEF2FF] text-[#5B5AF7]">
              <FolderKanban className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xs font-medium text-slate-500 block">
                Total Projects
              </span>
              <span className="text-xl font-bold text-slate-900 block mt-0.5">
                16
              </span>
              <span className="text-[10px] font-semibold text-emerald-600 block mt-0.5">
                ↑ 3 this quarter
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs flex items-center gap-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EEF2FF] text-[#5B5AF7]">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xs font-medium text-slate-500 block">
                Featured Case Studies
              </span>
              <span className="text-xl font-bold text-slate-900 block mt-0.5">
                6
              </span>
              <span className="text-[10px] font-semibold text-emerald-600 block mt-0.5">
                100% win-rate backed
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs flex items-center gap-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
              <TrendingUp className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xs font-medium text-slate-500 block">
                Delivered Value
              </span>
              <span className="text-xl font-bold text-slate-900 block mt-0.5">
                $184,000
              </span>
              <span className="text-[10px] font-semibold text-emerald-600 block mt-0.5">
                Across 12 clients
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs flex items-center gap-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EEF2FF] text-[#5B5AF7]">
              <Star className="h-5 w-5 fill-[#5B5AF7]" />
            </div>
            <div>
              <span className="text-xs font-medium text-slate-500 block">
                Client Satisfaction
              </span>
              <span className="text-xl font-bold text-slate-900 block mt-0.5">
                4.9 / 5.0
              </span>
              <span className="text-[10px] font-semibold text-emerald-600 block mt-0.5">
                14 5-star reviews
              </span>
            </div>
          </div>
        </div>

        {/* Category Pills & Search */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
          {/* Pills */}
          <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer whitespace-nowrap",
                  activeCategory === cat
                    ? "bg-[#5B5AF7] text-white shadow-2xs"
                    : "bg-white border border-slate-200/80 text-slate-600 hover:bg-slate-50"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search case studies..."
              className="h-9 w-full rounded-xl border border-slate-200 bg-white pl-9 pr-3 text-xs text-slate-800 placeholder:text-slate-400 shadow-2xs focus:border-[#5B5AF7] focus:outline-none"
            />
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-2xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              {/* Card Banner / Thumbnail mockup */}
              <div
                className={cn(
                  "h-40 w-full bg-linear-to-tr p-4 flex flex-col justify-between text-white relative overflow-hidden",
                  item.imageBg
                )}
              >
                <div className="flex items-center justify-between z-10">
                  <span className="rounded-full bg-white/20 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                    {item.category}
                  </span>

                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: item.stars }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-3 w-3 fill-amber-300 text-amber-300"
                      />
                    ))}
                  </div>
                </div>

                <div className="z-10">
                  <span className="text-[11px] font-medium text-white/80 block">
                    {item.client}
                  </span>
                  <h3 className="text-base font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                </div>

                {/* Subtle gradient overlay pattern */}
                <div className="absolute -bottom-8 -right-8 h-28 w-28 rounded-full bg-white/10 blur-xl pointer-events-none" />
              </div>

              {/* Card Content */}
              <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.summary}
                  </p>

                  <div className="flex items-center gap-2 pt-1">
                    <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
                      {item.impact}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/proposals?client=${encodeURIComponent(item.client)}`}
                    className="text-xs font-semibold text-[#5B5AF7] hover:underline flex items-center gap-1"
                  >
                    <span>Use in Proposal</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>

                  <button
                    type="button"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                    title="Preview Case Study"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
