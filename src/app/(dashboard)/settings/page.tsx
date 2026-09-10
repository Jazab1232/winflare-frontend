"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  User,
  Building2,
  Sliders,
  FileText,
  Bell,
  Layers,
  Users,
  CreditCard,
  Shield,
  Search,
  ChevronDown,
  Pencil,
  CheckCircle2,
  Lock,
  Send,
  ExternalLink,
  X,
  Target,
  Check,
} from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("Profile");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Form State
  const [fullName, setFullName] = useState("Naveed Tahir");
  const [email, setEmail] = useState("naveedtahir@gmail.com");
  const [role, setRole] = useState("Founder & CEO");
  const [timezone, setTimezone] = useState("Asia/Karachi (GMT+5)");

  const [agencyName, setAgencyName] = useState("Winflare");
  const [website, setWebsite] = useState("https://winflare.com");
  const [industry, setIndustry] = useState("Technology");
  const [companySize, setCompanySize] = useState("2-10 employees");

  // Preferences State
  const [remoteOnly, setRemoteOnly] = useState(true);
  const [contractTypes, setContractTypes] = useState("Full-time, Contract");
  const [budgetRange, setBudgetRange] = useState("$3k+ / month");

  const [proposalTone, setProposalTone] = useState("Professional");
  const [pricingModel, setPricingModel] = useState("Fixed Price");
  const [portfolioLink, setPortfolioLink] = useState("https://winflare.com/portfolio");
  const [defaultIntro, setDefaultIntro] = useState(
    "I'm excited to apply for this opportunity. I've reviewed your requirements and I'm confident that we can deliver great results together."
  );
  const [defaultClosing, setDefaultClosing] = useState(
    "Looking forward to the opportunity to work together. Please let me know if you have any questions."
  );

  // Notification Toggles
  const [notifyNewOpp, setNotifyNewOpp] = useState(true);
  const [notifyResponses, setNotifyResponses] = useState(true);
  const [notifyFollowups, setNotifyFollowups] = useState(true);
  const [notifyActivity, setNotifyActivity] = useState(true);

  // Tags State
  const [jobTitles, setJobTitles] = useState(["Frontend Developer", "Full Stack Developer"]);
  const [keywords, setKeywords] = useState(["React", "Next.js", "TypeScript"]);
  const [skills, setSkills] = useState(["JavaScript", "React", "Node.js"]);
  const [countries, setCountries] = useState(["United States", "United Kingdom", "Canada"]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const removeTag = (list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>, tag: string) => {
    setList(list.filter((t) => t !== tag));
  };

  const tabs = [
    { id: "Profile", label: "Profile", icon: User },
    { id: "Organization", label: "Organization", icon: Building2 },
    { id: "Opportunity Preferences", label: "Opportunity Preferences", icon: Sliders },
    { id: "Proposal Preferences", label: "Proposal Preferences", icon: FileText },
    { id: "Notifications", label: "Notifications", icon: Bell },
    { id: "Integrations", label: "Integrations", icon: Layers },
    { id: "Team", label: "Team", icon: Users },
    { id: "Billing", label: "Billing", icon: CreditCard },
    { id: "Security", label: "Security", icon: Shield },
  ];

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-[#FAFBFF] text-slate-900">
      {/* 1. Header Bar matching screenshot */}
      <header className="sticky top-0 z-20 flex h-16 w-full shrink-0 items-center justify-between border-b border-slate-200/80 bg-white px-6 sm:px-8">
        {/* Search Bar matching screenshot */}
        <div className="relative flex w-full max-w-lg items-center">
          <Search className="absolute left-3.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search clients, companies, projects..."
            className="h-10 w-full rounded-xl border border-slate-200/90 bg-slate-50/50 pl-10 pr-4 text-xs text-slate-800 placeholder:text-slate-400 shadow-2xs focus:border-[#5B5AF7] focus:bg-white focus:outline-none focus:ring-1.5 focus:ring-[#5B5AF7]"
          />
        </div>

        {/* Right Controls: Notification Bell & Profile with NT */}
        <div className="flex items-center gap-5">
          <button
            type="button"
            className="relative flex h-9 w-9 items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors cursor-pointer"
            aria-label="Notifications"
          >
            <Bell className="h-4 w-4" />
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white" />
          </button>

          {/* User Profile badge matching screenshot: NT circle + Naveed Tahir */}
          <div className="flex items-center gap-2.5 select-none cursor-pointer pl-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0F172A] text-white text-xs font-bold shadow-2xs">
              NT
            </div>
            <span className="text-xs font-bold text-slate-900 hidden sm:inline">
              Naveed Tahir
            </span>
            <ChevronDown className="h-3.5 w-3.5 text-slate-400 hidden sm:inline" />
          </div>
        </div>
      </header>

      {/* 2. Main Scrollable Container */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-6 sm:p-8 space-y-6">
        {/* Toast Notification */}
        {toastMessage && (
          <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-semibold text-white shadow-xl animate-in fade-in slide-in-from-bottom-2">
            <Check className="h-4 w-4 text-emerald-400" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Page Title & Subtitle */}
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Settings
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Manage your workspace and preferences.
          </p>
        </div>

        {/* Horizontal Navigation Tabs */}
        <div className="flex items-center gap-6 border-b border-slate-200/80 overflow-x-auto custom-scrollbar pt-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveTab(tab.id);
                  const el = document.getElementById(tab.id.toLowerCase().replace(/\s+/g, "-"));
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className={`flex items-center gap-2 pb-3 text-xs font-medium transition-all cursor-pointer whitespace-nowrap relative ${
                  isActive
                    ? "text-[#5B5AF7] font-semibold"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? "text-[#5B5AF7]" : "text-slate-400"}`} />
                <span>{tab.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#5B5AF7] rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* 2-Column Grid: Main Settings Sections (Left) + Intelligence/Health (Right) */}
        <div className="flex flex-col xl:flex-row gap-6 items-start">
          {/* Main Settings Left Column */}
          <div className="flex-1 w-full min-w-0 space-y-6">
            {/* 1. Profile Section */}
            <div
              id="profile"
              className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-2xs space-y-6"
            >
              {/* Header */}
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EEF0FF] text-[#5B5AF7]">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-slate-900">Profile</h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Update your personal information and preferences.
                  </p>
                </div>
              </div>

              {/* Form with Avatar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                {/* Avatar with edit badge */}
                <div className="relative shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EEF0FF] text-[#5B5AF7] text-xl font-black shadow-inner">
                    NT
                  </div>
                  <button
                    type="button"
                    title="Change Profile Picture"
                    onClick={() => showToast("Profile picture upload dialog ready")}
                    className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#5B5AF7] text-white shadow-2xs hover:bg-[#4847E5] transition-colors cursor-pointer"
                  >
                    <Pencil className="h-2.5 w-2.5 stroke-[2.5]" />
                  </button>
                </div>

                {/* Profile Fields Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 flex-1 w-full">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="mt-1.5 h-10 w-full rounded-xl border border-slate-200 bg-white px-3.5 text-xs text-slate-800 shadow-2xs focus:border-[#5B5AF7] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1.5 h-10 w-full rounded-xl border border-slate-200 bg-white px-3.5 text-xs text-slate-800 shadow-2xs focus:border-[#5B5AF7] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block">
                      Role
                    </label>
                    <div className="relative mt-1.5">
                      <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="h-10 w-full appearance-none rounded-xl border border-slate-200 bg-white px-3.5 pr-8 text-xs text-slate-800 shadow-2xs focus:border-[#5B5AF7] focus:outline-none cursor-pointer"
                      >
                        <option>Founder &amp; CEO</option>
                        <option>Agency Owner</option>
                        <option>Freelancer</option>
                        <option>Full Stack Consultant</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3 top-3.5 h-3.5 w-3.5 text-slate-400" />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block">
                      Timezone
                    </label>
                    <div className="relative mt-1.5">
                      <select
                        value={timezone}
                        onChange={(e) => setTimezone(e.target.value)}
                        className="h-10 w-full appearance-none rounded-xl border border-slate-200 bg-white px-3.5 pr-8 text-xs text-slate-800 shadow-2xs focus:border-[#5B5AF7] focus:outline-none cursor-pointer"
                      >
                        <option>Asia/Karachi (GMT+5)</option>
                        <option>America/New_York (EST)</option>
                        <option>Europe/London (GMT)</option>
                        <option>America/Los_Angeles (PST)</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3 top-3.5 h-3.5 w-3.5 text-slate-400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Save Changes CTA */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => showToast("Profile changes saved successfully")}
                  className="rounded-xl bg-[#5B5AF7] hover:bg-[#4847E5] px-5 py-2.5 text-xs font-semibold text-white shadow-2xs transition-all active:scale-[0.99] cursor-pointer"
                >
                  Save Changes
                </button>
              </div>
            </div>

            {/* 2. Organization Section */}
            <div
              id="organization"
              className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-2xs space-y-5"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EEF0FF] text-[#5B5AF7]">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-slate-900">
                    Organization
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Update your company details and branding.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block">
                    Agency Name
                  </label>
                  <input
                    type="text"
                    value={agencyName}
                    onChange={(e) => setAgencyName(e.target.value)}
                    className="mt-1.5 h-10 w-full rounded-xl border border-slate-200 bg-white px-3.5 text-xs text-slate-800 shadow-2xs focus:border-[#5B5AF7] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block">
                    Website
                  </label>
                  <input
                    type="text"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    className="mt-1.5 h-10 w-full rounded-xl border border-slate-200 bg-white px-3.5 text-xs text-slate-800 shadow-2xs focus:border-[#5B5AF7] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block">
                    Industry
                  </label>
                  <div className="relative mt-1.5">
                    <select
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      className="h-10 w-full appearance-none rounded-xl border border-slate-200 bg-white px-3.5 pr-8 text-xs text-slate-800 shadow-2xs focus:border-[#5B5AF7] focus:outline-none cursor-pointer"
                    >
                      <option>Technology</option>
                      <option>Design &amp; Creative</option>
                      <option>Marketing</option>
                      <option>Consulting</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-3.5 h-3.5 w-3.5 text-slate-400" />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block">
                    Company Size
                  </label>
                  <div className="relative mt-1.5">
                    <select
                      value={companySize}
                      onChange={(e) => setCompanySize(e.target.value)}
                      className="h-10 w-full appearance-none rounded-xl border border-slate-200 bg-white px-3.5 pr-8 text-xs text-slate-800 shadow-2xs focus:border-[#5B5AF7] focus:outline-none cursor-pointer"
                    >
                      <option>2-10 employees</option>
                      <option>1 (Solo)</option>
                      <option>11-50 employees</option>
                      <option>50+ employees</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-3.5 h-3.5 w-3.5 text-slate-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Opportunity Preferences Section */}
            <div
              id="opportunity-preferences"
              className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-2xs space-y-5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EEF0FF] text-[#5B5AF7]">
                    <Target className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-slate-900">
                      Opportunity Preferences
                    </h2>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Set your ideal client and job preferences for AI discovery.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => showToast("Opportunity Preferences editor ready")}
                  className="flex items-center gap-1 text-xs font-semibold text-[#5B5AF7] hover:underline cursor-pointer"
                >
                  <Pencil className="h-3.5 w-3.5" />
                  <span>Edit</span>
                </button>
              </div>

              {/* Tag Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block">
                    Job Titles
                  </label>
                  <div className="mt-1.5 flex flex-wrap items-center gap-1.5 rounded-xl border border-slate-200 bg-white p-2 min-h-[42px]">
                    {jobTitles.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700"
                      >
                        {tag}
                        <button
                          type="button"
                          onClick={() => removeTag(jobTitles, setJobTitles, tag)}
                          className="text-slate-400 hover:text-slate-600 cursor-pointer"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    ))}
                    <span className="rounded-md bg-[#EEF0FF] px-2 py-0.5 text-[10px] font-bold text-[#5B5AF7]">
                      +3
                    </span>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block">
                    Keywords
                  </label>
                  <div className="mt-1.5 flex flex-wrap items-center gap-1.5 rounded-xl border border-slate-200 bg-white p-2 min-h-[42px]">
                    {keywords.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700"
                      >
                        {tag}
                        <button
                          type="button"
                          onClick={() => removeTag(keywords, setKeywords, tag)}
                          className="text-slate-400 hover:text-slate-600 cursor-pointer"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    ))}
                    <span className="rounded-md bg-[#EEF0FF] px-2 py-0.5 text-[10px] font-bold text-[#5B5AF7]">
                      +2
                    </span>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block">
                    Skills
                  </label>
                  <div className="mt-1.5 flex flex-wrap items-center gap-1.5 rounded-xl border border-slate-200 bg-white p-2 min-h-[42px]">
                    {skills.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700"
                      >
                        {tag}
                        <button
                          type="button"
                          onClick={() => removeTag(skills, setSkills, tag)}
                          className="text-slate-400 hover:text-slate-600 cursor-pointer"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    ))}
                    <span className="rounded-md bg-[#EEF0FF] px-2 py-0.5 text-[10px] font-bold text-[#5B5AF7]">
                      +2
                    </span>
                  </div>
                </div>
              </div>

              {/* Tag Row 2: Countries, Remote Only, Contract Types, Budget Range */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block">
                    Countries
                  </label>
                  <div className="mt-1.5 flex flex-wrap items-center gap-1.5 rounded-xl border border-slate-200 bg-white p-2 min-h-[42px]">
                    {countries.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700"
                      >
                        {tag}
                        <button
                          type="button"
                          onClick={() => removeTag(countries, setCountries, tag)}
                          className="text-slate-400 hover:text-slate-600 cursor-pointer"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    ))}
                    <span className="rounded-md bg-[#EEF0FF] px-2 py-0.5 text-[10px] font-bold text-[#5B5AF7]">
                      +2
                    </span>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-2">
                    Remote Only
                  </label>
                  <button
                    type="button"
                    onClick={() => setRemoteOnly(!remoteOnly)}
                    className={`h-6 w-11 rounded-full p-0.5 transition-colors cursor-pointer flex items-center ${
                      remoteOnly ? "bg-[#5B5AF7] justify-end" : "bg-slate-300 justify-start"
                    }`}
                  >
                    <span className="h-5 w-5 rounded-full bg-white shadow-md" />
                  </button>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block">
                    Contract Types
                  </label>
                  <div className="relative mt-1.5">
                    <select
                      value={contractTypes}
                      onChange={(e) => setContractTypes(e.target.value)}
                      className="h-10 w-full appearance-none rounded-xl border border-slate-200 bg-white px-3.5 pr-8 text-xs text-slate-800 shadow-2xs focus:border-[#5B5AF7] focus:outline-none cursor-pointer"
                    >
                      <option>Full-time, Contract</option>
                      <option>Contract Only</option>
                      <option>Full-time Only</option>
                      <option>Hourly / Part-time</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-3.5 h-3.5 w-3.5 text-slate-400" />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block">
                    Budget Range
                  </label>
                  <div className="relative mt-1.5">
                    <select
                      value={budgetRange}
                      onChange={(e) => setBudgetRange(e.target.value)}
                      className="h-10 w-full appearance-none rounded-xl border border-slate-200 bg-white px-3.5 pr-8 text-xs text-slate-800 shadow-2xs focus:border-[#5B5AF7] focus:outline-none cursor-pointer"
                    >
                      <option>$3k+ / month</option>
                      <option>$5k+ / month</option>
                      <option>$10k+ / month</option>
                      <option>$20k+ / fixed</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-3.5 h-3.5 w-3.5 text-slate-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Proposal Preferences Section */}
            <div
              id="proposal-preferences"
              className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-2xs space-y-5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EEF0FF] text-[#5B5AF7]">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-slate-900">
                      Proposal Preferences
                    </h2>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Configure how your proposals are created and presented.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => showToast("Proposal Preferences editor ready")}
                  className="flex items-center gap-1 text-xs font-semibold text-[#5B5AF7] hover:underline cursor-pointer"
                >
                  <Pencil className="h-3.5 w-3.5" />
                  <span>Edit</span>
                </button>
              </div>

              {/* Row 1: Proposal Tone, Pricing Model, Portfolio Links */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block">
                    Proposal Tone
                  </label>
                  <div className="relative mt-1.5">
                    <select
                      value={proposalTone}
                      onChange={(e) => setProposalTone(e.target.value)}
                      className="h-10 w-full appearance-none rounded-xl border border-slate-200 bg-white px-3.5 pr-8 text-xs text-slate-800 shadow-2xs focus:border-[#5B5AF7] focus:outline-none cursor-pointer"
                    >
                      <option>Professional</option>
                      <option>Persuasive &amp; Bold</option>
                      <option>Technical &amp; Detailed</option>
                      <option>Friendly &amp; Direct</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-3.5 h-3.5 w-3.5 text-slate-400" />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block">
                    Pricing Model
                  </label>
                  <div className="relative mt-1.5">
                    <select
                      value={pricingModel}
                      onChange={(e) => setPricingModel(e.target.value)}
                      className="h-10 w-full appearance-none rounded-xl border border-slate-200 bg-white px-3.5 pr-8 text-xs text-slate-800 shadow-2xs focus:border-[#5B5AF7] focus:outline-none cursor-pointer"
                    >
                      <option>Fixed Price</option>
                      <option>Milestone Schedule</option>
                      <option>Hourly Billing</option>
                      <option>Monthly Retainer</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-3.5 h-3.5 w-3.5 text-slate-400" />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block">
                    Portfolio Links
                  </label>
                  <input
                    type="text"
                    value={portfolioLink}
                    onChange={(e) => setPortfolioLink(e.target.value)}
                    className="mt-1.5 h-10 w-full rounded-xl border border-slate-200 bg-white px-3.5 text-xs text-slate-800 shadow-2xs focus:border-[#5B5AF7] focus:outline-none"
                  />
                </div>
              </div>

              {/* Row 2: Default Introduction & Default Closing */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-semibold text-slate-700 block">
                      Default Introduction
                    </label>
                  </div>
                  <div className="relative mt-1.5">
                    <textarea
                      rows={3}
                      value={defaultIntro}
                      onChange={(e) => setDefaultIntro(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-white p-3 text-xs text-slate-800 shadow-2xs focus:border-[#5B5AF7] focus:outline-none resize-none leading-relaxed"
                    />
                    <span className="absolute right-3 bottom-2 text-[10px] text-slate-400">
                      {defaultIntro.length}/500
                    </span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-semibold text-slate-700 block">
                      Default Closing
                    </label>
                  </div>
                  <div className="relative mt-1.5">
                    <textarea
                      rows={3}
                      value={defaultClosing}
                      onChange={(e) => setDefaultClosing(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-white p-3 text-xs text-slate-800 shadow-2xs focus:border-[#5B5AF7] focus:outline-none resize-none leading-relaxed"
                    />
                    <span className="absolute right-3 bottom-2 text-[10px] text-slate-400">
                      {defaultClosing.length}/500
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Notifications Section */}
            <div
              id="notifications"
              className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-2xs space-y-5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EEF0FF] text-[#5B5AF7]">
                    <Bell className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-slate-900">
                      Notifications
                    </h2>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Choose what you want to be notified about.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => showToast("Notifications preferences ready")}
                  className="flex items-center gap-1 text-xs font-semibold text-[#5B5AF7] hover:underline cursor-pointer"
                >
                  <Pencil className="h-3.5 w-3.5" />
                  <span>Edit</span>
                </button>
              </div>

              {/* Toggles Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Toggle 1: New Opportunities */}
                <div className="flex items-start gap-3">
                  <button
                    type="button"
                    onClick={() => setNotifyNewOpp(!notifyNewOpp)}
                    className={`mt-0.5 h-6 w-11 shrink-0 rounded-full p-0.5 transition-colors cursor-pointer flex items-center ${
                      notifyNewOpp ? "bg-[#5B5AF7] justify-end" : "bg-slate-300 justify-start"
                    }`}
                  >
                    <span className="h-5 w-5 rounded-full bg-white shadow-md" />
                  </button>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">
                      New Opportunities
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      Get notified when new relevant opportunities are found.
                    </span>
                  </div>
                </div>

                {/* Toggle 2: Proposal Responses */}
                <div className="flex items-start gap-3">
                  <button
                    type="button"
                    onClick={() => setNotifyResponses(!notifyResponses)}
                    className={`mt-0.5 h-6 w-11 shrink-0 rounded-full p-0.5 transition-colors cursor-pointer flex items-center ${
                      notifyResponses ? "bg-[#5B5AF7] justify-end" : "bg-slate-300 justify-start"
                    }`}
                  >
                    <span className="h-5 w-5 rounded-full bg-white shadow-md" />
                  </button>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">
                      Proposal Responses
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      Get notified when clients respond to your proposals.
                    </span>
                  </div>
                </div>

                {/* Toggle 3: Follow-ups Due */}
                <div className="flex items-start gap-3">
                  <button
                    type="button"
                    onClick={() => setNotifyFollowups(!notifyFollowups)}
                    className={`mt-0.5 h-6 w-11 shrink-0 rounded-full p-0.5 transition-colors cursor-pointer flex items-center ${
                      notifyFollowups ? "bg-[#5B5AF7] justify-end" : "bg-slate-300 justify-start"
                    }`}
                  >
                    <span className="h-5 w-5 rounded-full bg-white shadow-md" />
                  </button>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">
                      Follow-ups Due
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      Reminders for upcoming follow-ups and actions.
                    </span>
                  </div>
                </div>

                {/* Toggle 4: Client Activity */}
                <div className="flex items-start gap-3">
                  <button
                    type="button"
                    onClick={() => setNotifyActivity(!notifyActivity)}
                    className={`mt-0.5 h-6 w-11 shrink-0 rounded-full p-0.5 transition-colors cursor-pointer flex items-center ${
                      notifyActivity ? "bg-[#5B5AF7] justify-end" : "bg-slate-300 justify-start"
                    }`}
                  >
                    <span className="h-5 w-5 rounded-full bg-white shadow-md" />
                  </button>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">
                      Client Activity
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      Updates on client projects, messages and activity.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Panels: Workspace Health, Quick Actions, Need Help */}
          <div className="w-full xl:w-[340px] shrink-0 space-y-5">
            {/* Panel 1: Workspace Health */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs space-y-4">
              <div className="flex items-center gap-4">
                {/* Radial Progress Meter 92% */}
                <div className="relative h-14 w-14 shrink-0">
                  <svg viewBox="0 0 36 36" className="h-full w-full rotate-[-90deg]">
                    <circle
                      cx="18"
                      cy="18"
                      r="14.5"
                      fill="none"
                      stroke="#EEF0FF"
                      strokeWidth="3"
                    />
                    <circle
                      cx="18"
                      cy="18"
                      r="14.5"
                      fill="none"
                      stroke="#5B5AF7"
                      strokeWidth="3"
                      strokeDasharray="91"
                      strokeDashoffset="7.2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-slate-900">
                    92%
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-bold text-slate-900">
                    Workspace Health
                  </h3>
                  <p className="text-[11px] text-slate-400 leading-snug mt-0.5">
                    Great progress! You&apos;re all set up to win more clients.
                  </p>
                </div>
              </div>

              {/* Progress items checklist matching screenshot */}
              <div className="space-y-3 pt-2 border-t border-slate-100">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span className="text-slate-700 font-medium">Profile Complete</span>
                  </div>
                  <span className="font-bold text-slate-400 text-[11px]">100%</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span className="text-slate-700 font-medium">
                      Opportunity Preferences Configured
                    </span>
                  </div>
                  <span className="font-bold text-slate-400 text-[11px]">100%</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span className="text-slate-700 font-medium">
                      Proposal Preferences Configured
                    </span>
                  </div>
                  <span className="font-bold text-slate-400 text-[11px]">100%</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span className="text-slate-700 font-medium">
                      Integrations Connected
                    </span>
                  </div>
                  <span className="font-bold text-slate-400 text-[11px]">75%</span>
                </div>
              </div>
            </div>

            {/* Panel 2: Quick Actions */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs space-y-3.5">
              <h3 className="text-xs font-bold text-slate-900">
                Quick Actions
              </h3>

              <div className="space-y-2.5">
                {/* Action 1: Change Password */}
                <button
                  type="button"
                  onClick={() => showToast("Password change dialog opened")}
                  className="w-full flex items-center gap-3 rounded-xl border border-slate-100 p-2.5 hover:bg-slate-50 transition-colors text-left cursor-pointer"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EEF0FF] text-[#5B5AF7]">
                    <Lock className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">
                      Change Password
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      Update your account password
                    </span>
                  </div>
                </button>

                {/* Action 2: Manage Team */}
                <button
                  type="button"
                  onClick={() => showToast("Team invite manager opened")}
                  className="w-full flex items-center gap-3 rounded-xl border border-slate-100 p-2.5 hover:bg-slate-50 transition-colors text-left cursor-pointer"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EEF0FF] text-[#5B5AF7]">
                    <Users className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">
                      Manage Team
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      Invite and manage team members
                    </span>
                  </div>
                </button>

                {/* Action 3: View Billing */}
                <Link
                  href="/pricing"
                  className="w-full flex items-center gap-3 rounded-xl border border-slate-100 p-2.5 hover:bg-slate-50 transition-colors text-left cursor-pointer"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EEF0FF] text-[#5B5AF7]">
                    <CreditCard className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">
                      View Billing
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      Check your plan and invoices
                    </span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Panel 3: Need Help? */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#EEF0FF] text-[#5B5AF7]">
                <Send className="h-4 w-4" />
              </div>
              <h3 className="text-xs font-bold text-slate-900 mt-3">
                Need help?
              </h3>
              <p className="text-[11px] text-slate-400 leading-relaxed mt-1">
                Get the most out of Winflare with our help center and support team.
              </p>
              <button
                type="button"
                onClick={() => showToast("Redirecting to help center...")}
                className="mt-4 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-2xs hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <span>Visit Help Center</span>
                <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

