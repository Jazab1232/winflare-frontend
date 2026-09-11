"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  User,
  Building2,
  UserCheck,
  Check,
  ArrowRight,
  ArrowLeft,
  Globe,
  Link as LinkIcon,
  Sparkles,
  ChevronRight,
  Search,
} from "lucide-react";
import { AuthBrandHeader } from "./auth-brand-header";

interface OnboardingData {
  role: "Freelancer" | "Agency" | "Consultant";
  techStack: string[];
  specializations: string;
  keywords: string;
  budgetRange: string;
  country: string;
  remoteOnly: boolean;
  website: string;
  github: string;
  portfolio: string;
  tone: "Professional" | "Friendly" | "Bold";
  pricingModel: "Fixed Price" | "Hourly" | "Milestone";
  proposalStyle: "Detailed" | "Concise" | "Visual";
}

const STEPS = [
  { id: 1, title: "Who Are You?" },
  { id: 2, title: "What Work Do You Do?" },
  { id: 3, title: "Opportunity Preferences" },
  { id: 4, title: "Portfolio Links" },
  { id: 5, title: "Proposal Preferences" },
];

export function OnboardingScreen() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [data, setData] = useState<OnboardingData>({
    role: "Freelancer",
    techStack: ["Frontend", "Backend", "Full Stack"],
    specializations: "",
    keywords: "React, Next.js, TypeScript",
    budgetRange: "$5k - $10k",
    country: "Worldwide",
    remoteOnly: true,
    website: "",
    github: "",
    portfolio: "",
    tone: "Professional",
    pricingModel: "Fixed Price",
    proposalStyle: "Detailed",
  });

  const handleTechStackToggle = (tech: string) => {
    setData((prev) => {
      const exists = prev.techStack.includes(tech);
      return {
        ...prev,
        techStack: exists
          ? prev.techStack.filter((t) => t !== tech)
          : [...prev.techStack, tech],
      };
    });
  };

  const handleNext = () => {
    if (currentStep < 6) {
      setCurrentStep((prev) => prev + 1);
    } else {
      router.push("/dashboard");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSkipToDashboard = () => {
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen w-full flex flex-col bg-[#FAFBFF] text-text-primary antialiased selection:bg-primary/20 selection:text-primary">
      {/* Top Navigation Bar */}
      <header className="w-full border-b border-border/80 bg-card px-6 sm:px-10 lg:px-14 py-4 flex items-center justify-between sticky top-0 z-30 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
        <AuthBrandHeader />
        
        {/* Skip Option */}
        <button
          type="button"
          onClick={handleSkipToDashboard}
          className="group inline-flex items-center gap-1.5 text-xs font-semibold text-text-secondary hover:text-primary transition-colors cursor-pointer py-1.5 px-3 rounded-lg hover:bg-section"
        >
          <span>Skip to Dashboard</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </button>
      </header>

      {/* Main Content Body */}
      {currentStep === 6 ? (
        /* Screen 10: Final Success Screen ("You're All Set!") */
        <section 
          aria-label="Onboarding Completed"
          className="flex-1 flex flex-col items-center justify-center p-6 sm:p-10 max-w-lg mx-auto text-center my-auto"
        >
          {/* Celebratory Icon Badge */}
          <div className="relative w-24 h-24 mb-7 flex items-center justify-center">
            {/* Confetti & Glow Accents */}
            <div className="absolute -top-2 -left-2 w-2 h-2 rounded-full bg-primary/40 animate-ping" />
            <div className="absolute -bottom-1 -right-2 w-2.5 h-2.5 rounded-full bg-secondary/50" />
            <div className="absolute top-1 -right-3 w-1.5 h-1.5 rounded-full bg-blue-400" />
            <div className="absolute -bottom-3 left-2 w-2 h-2 rounded-full bg-amber-400" />

            <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl scale-125" />
            <div className="relative w-20 h-20 rounded-full bg-[#0F172A] text-white flex items-center justify-center shadow-lg">
              <Check className="w-10 h-10 stroke-[2.5]" />
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary mb-3">
            You&apos;re All Set!
          </h1>
          <p className="text-sm text-text-secondary leading-relaxed max-w-md mx-auto mb-8">
            Your workspace is ready. Start exploring opportunities, creating proposals and winning clients.
          </p>

          <div className="w-full max-w-sm space-y-4">
            <button
              type="button"
              onClick={handleSkipToDashboard}
              className="w-full py-3.5 px-6 rounded-xl bg-primary hover:bg-primary-hover text-white font-semibold text-sm shadow-md shadow-primary/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
            >
              <span>Go to Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-1.5 text-xs text-text-secondary">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>Welcome to Winflare</span>
            </div>
          </div>
        </section>
      ) : (
        /* Steps 1 to 5: Two-column Layout */
        <div className="flex-1 w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-14 py-8 lg:py-12 flex flex-col md:flex-row gap-10 lg:gap-16">
          {/* Left Stepper Sidebar */}
          <aside 
            aria-label="Onboarding Progress"
            className="w-full md:w-64 shrink-0 flex flex-col justify-between"
          >
            <div>
              <p className="text-xs font-bold tracking-wider uppercase text-text-secondary mb-4 hidden md:block">
                Onboarding Steps
              </p>

              <nav className="flex md:flex-col gap-2 overflow-x-auto pb-2 md:pb-0">
                {STEPS.map((step) => {
                  const isActive = currentStep === step.id;
                  const isCompleted = currentStep > step.id;

                  return (
                    <button
                      key={step.id}
                      type="button"
                      onClick={() => setCurrentStep(step.id)}
                      className={`flex items-center gap-3 p-2.5 rounded-xl text-left transition-all cursor-pointer shrink-0 ${
                        isActive
                          ? "bg-primary/10 text-primary font-bold shadow-[inset_0_0_0_1px_rgba(91,90,247,0.2)]"
                          : isCompleted
                          ? "text-text-primary hover:bg-section font-medium"
                          : "text-text-secondary hover:bg-section font-normal"
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs transition-colors shrink-0 ${
                          isActive
                            ? "bg-primary text-white font-bold"
                            : isCompleted
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-slate-100 text-slate-400"
                        }`}
                      >
                        {isCompleted ? (
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        ) : (
                          step.id
                        )}
                      </div>

                      <span className="text-xs truncate">{step.title}</span>

                      {isActive && (
                        <ChevronRight className="w-3.5 h-3.5 ml-auto text-primary shrink-0 hidden md:block" />
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Help / Support Link */}
            <div className="pt-6 border-t border-border mt-6 hidden md:block text-xs">
              <p className="text-text-secondary mb-1">Need help?</p>
              <Link
                href="/contact"
                className="font-semibold text-primary hover:underline inline-flex items-center gap-1"
              >
                <span>Contact support</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </aside>

          {/* Right Step Content Card */}
          <section 
            aria-label="Step Content"
            className="flex-1 flex flex-col justify-between bg-card rounded-2xl border border-border p-6 sm:p-10 shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
          >
            <div>
              {/* Step Counter Tag */}
              <div className="mb-2">
                <span className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider">
                  Step {currentStep} of 5
                </span>
              </div>

              {/* Step 1: Who Are You? */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-extrabold text-text-primary tracking-tight">
                      Who Are You?
                    </h2>
                    <p className="mt-1 text-sm text-text-secondary">
                      Tell us about your professional role. This helps us personalize your experience.
                    </p>
                  </div>

                  {/* 3 Role Selection Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    {/* Freelancer Card */}
                    <button
                      type="button"
                      onClick={() => setData({ ...data, role: "Freelancer" })}
                      className={`relative p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between min-h-[160px] ${
                        data.role === "Freelancer"
                          ? "border-primary bg-primary/5 shadow-sm ring-2 ring-primary/20"
                          : "border-border hover:border-slate-300 hover:bg-slate-50/50"
                      }`}
                    >
                      <div className="flex items-center justify-between w-full mb-3">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                            data.role === "Freelancer"
                              ? "bg-primary text-white"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          <User className="w-5 h-5" />
                        </div>
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            data.role === "Freelancer"
                              ? "border-primary bg-primary text-white"
                              : "border-slate-300"
                          }`}
                        >
                          {data.role === "Freelancer" && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-base font-bold text-text-primary">Freelancer</h3>
                        <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                          I work independently and take on projects.
                        </p>
                      </div>
                    </button>

                    {/* Agency Card */}
                    <button
                      type="button"
                      onClick={() => setData({ ...data, role: "Agency" })}
                      className={`relative p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between min-h-[160px] ${
                        data.role === "Agency"
                          ? "border-primary bg-primary/5 shadow-sm ring-2 ring-primary/20"
                          : "border-border hover:border-slate-300 hover:bg-slate-50/50"
                      }`}
                    >
                      <div className="flex items-center justify-between w-full mb-3">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                            data.role === "Agency"
                              ? "bg-primary text-white"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          <Building2 className="w-5 h-5" />
                        </div>
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            data.role === "Agency"
                              ? "border-primary bg-primary text-white"
                              : "border-slate-300"
                          }`}
                        >
                          {data.role === "Agency" && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-base font-bold text-text-primary">Agency</h3>
                        <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                          I run a team or agency and work with clients.
                        </p>
                      </div>
                    </button>

                    {/* Consultant Card */}
                    <button
                      type="button"
                      onClick={() => setData({ ...data, role: "Consultant" })}
                      className={`relative p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between min-h-[160px] ${
                        data.role === "Consultant"
                          ? "border-primary bg-primary/5 shadow-sm ring-2 ring-primary/20"
                          : "border-border hover:border-slate-300 hover:bg-slate-50/50"
                      }`}
                    >
                      <div className="flex items-center justify-between w-full mb-3">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                            data.role === "Consultant"
                              ? "bg-primary text-white"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          <UserCheck className="w-5 h-5" />
                        </div>
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            data.role === "Consultant"
                              ? "border-primary bg-primary text-white"
                              : "border-slate-300"
                          }`}
                        >
                          {data.role === "Consultant" && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-base font-bold text-text-primary">Consultant</h3>
                        <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                          I provide expert advice and consulting services.
                        </p>
                      </div>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: What Work Do You Do? */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-extrabold text-text-primary tracking-tight">
                      What Work Do You Do?
                    </h2>
                    <p className="mt-1 text-sm text-text-secondary">
                      Select the skills and technologies you work with.
                    </p>
                  </div>

                  {/* Technology Stack Multi-select Pills */}
                  <div>
                    <label className="block text-sm font-semibold text-text-primary mb-2.5">
                      Technology Stack
                    </label>
                    <div className="flex flex-wrap gap-2.5">
                      {[
                        "Frontend",
                        "Backend",
                        "Full Stack",
                        "UI/UX",
                        "Mobile",
                        "DevOps",
                        "Database",
                        "AI / Machine Learning",
                        "Cloud Architecture",
                      ].map((tech) => {
                        const selected = data.techStack.includes(tech);
                        return (
                          <button
                            key={tech}
                            type="button"
                            onClick={() => handleTechStackToggle(tech)}
                            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                              selected
                                ? "bg-primary text-white shadow-sm shadow-primary/25 ring-2 ring-primary/20"
                                : "border border-border bg-card text-text-secondary hover:bg-section hover:text-text-primary"
                            }`}
                          >
                            {selected && <Check className="w-3.5 h-3.5 stroke-[2.5]" />}
                            <span>{tech}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Specializations Input */}
                  <div>
                    <label
                      htmlFor="specializations"
                      className="block text-sm font-semibold text-text-primary mb-1.5"
                    >
                      Specializations <span className="text-xs font-normal text-text-secondary">(Optional)</span>
                    </label>
                    <input
                      id="specializations"
                      type="text"
                      value={data.specializations}
                      onChange={(e) => setData({ ...data, specializations: e.target.value })}
                      placeholder="e.g. React, Node.js, Laravel..."
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-card text-text-primary placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Opportunity Preferences */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-extrabold text-text-primary tracking-tight">
                      Opportunity Preferences
                    </h2>
                    <p className="mt-1 text-sm text-text-secondary">
                      Tell us what kind of opportunities you&apos;re looking for.
                    </p>
                  </div>

                  {/* Keywords Input */}
                  <div>
                    <label
                      htmlFor="keywords"
                      className="block text-sm font-semibold text-text-primary mb-1.5"
                    >
                      Keywords <span className="text-xs font-normal text-text-secondary">(e.g. React, Python, Web App)</span>
                    </label>
                    <div className="relative rounded-xl">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Search className="h-4 w-4" />
                      </div>
                      <input
                        id="keywords"
                        type="text"
                        value={data.keywords}
                        onChange={(e) => setData({ ...data, keywords: e.target.value })}
                        placeholder="Enter keywords..."
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-card text-text-primary placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  {/* Budget Range Dropdown */}
                  <div>
                    <label
                      htmlFor="budgetRange"
                      className="block text-sm font-semibold text-text-primary mb-1.5"
                    >
                      Budget Range
                    </label>
                    <select
                      id="budgetRange"
                      value={data.budgetRange}
                      onChange={(e) => setData({ ...data, budgetRange: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-card text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    >
                      <option value="$1k - $3k">$1k - $3k</option>
                      <option value="$3k - $5k">$3k - $5k</option>
                      <option value="$5k - $10k">$5k - $10k</option>
                      <option value="$10k - $25k">$10k - $25k</option>
                      <option value="$25k+">$25k+</option>
                    </select>
                  </div>

                  {/* Countries Dropdown */}
                  <div>
                    <label
                      htmlFor="country"
                      className="block text-sm font-semibold text-text-primary mb-1.5"
                    >
                      Countries
                    </label>
                    <select
                      id="country"
                      value={data.country}
                      onChange={(e) => setData({ ...data, country: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-card text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    >
                      <option value="Worldwide">Worldwide (Any Location)</option>
                      <option value="United States">United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Canada">Canada</option>
                      <option value="Europe">Europe</option>
                      <option value="Australia">Australia</option>
                    </select>
                  </div>

                  {/* Remote Opportunities Only Toggle */}
                  <div className="pt-2 flex items-center justify-between p-4 rounded-xl bg-section border border-border">
                    <div>
                      <p className="text-sm font-semibold text-text-primary">
                        Remote opportunities only
                      </p>
                      <p className="text-xs text-text-secondary">
                        Show only remote work opportunities
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setData({ ...data, remoteOnly: !data.remoteOnly })}
                      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                        data.remoteOnly ? "bg-primary" : "bg-slate-300"
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                          data.remoteOnly ? "translate-x-5" : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4: Portfolio Links */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-extrabold text-text-primary tracking-tight">
                      Portfolio Links <span className="text-sm font-normal text-text-secondary">(Optional)</span>
                    </h2>
                    <p className="mt-1 text-sm text-text-secondary">
                      Add your portfolio, GitHub or website links. This helps us showcase your work to potential clients.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Website */}
                    <div>
                      <label
                        htmlFor="website"
                        className="block text-sm font-semibold text-text-primary mb-1.5"
                      >
                        Website
                      </label>
                      <div className="relative rounded-xl">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Globe className="h-4 w-4" />
                        </div>
                        <input
                          id="website"
                          type="url"
                          value={data.website}
                          onChange={(e) => setData({ ...data, website: e.target.value })}
                          placeholder="https://yourwebsite.com"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-card text-text-primary placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                      </div>
                    </div>

                    {/* GitHub */}
                    <div>
                      <label
                        htmlFor="github"
                        className="block text-sm font-semibold text-text-primary mb-1.5"
                      >
                        GitHub
                      </label>
                      <div className="relative rounded-xl">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                          </svg>
                        </div>
                        <input
                          id="github"
                          type="text"
                          value={data.github}
                          onChange={(e) => setData({ ...data, github: e.target.value })}
                          placeholder="https://github.com/username"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-card text-text-primary placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                      </div>
                    </div>

                    {/* Portfolio */}
                    <div>
                      <label
                        htmlFor="portfolio"
                        className="block text-sm font-semibold text-text-primary mb-1.5"
                      >
                        Portfolio
                      </label>
                      <div className="relative rounded-xl">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <LinkIcon className="h-4 w-4" />
                        </div>
                        <input
                          id="portfolio"
                          type="text"
                          value={data.portfolio}
                          onChange={(e) => setData({ ...data, portfolio: e.target.value })}
                          placeholder="https://dribbble.com/username"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-card text-text-primary placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Proposal Preferences */}
              {currentStep === 5 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-extrabold text-text-primary tracking-tight">
                      Proposal Preferences
                    </h2>
                    <p className="mt-1 text-sm text-text-secondary">
                      Choose your preferred style and settings for proposals.
                    </p>
                  </div>

                  {/* Section 1: Tone */}
                  <div>
                    <label className="block text-sm font-semibold text-text-primary mb-2">
                      Tone
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {(["Professional", "Friendly", "Bold"] as const).map((toneOption) => (
                        <button
                          key={toneOption}
                          type="button"
                          onClick={() => setData({ ...data, tone: toneOption })}
                          className={`py-2.5 px-4 rounded-xl text-xs font-semibold transition-all cursor-pointer text-center ${
                            data.tone === toneOption
                              ? "border-2 border-primary bg-primary/10 text-primary shadow-sm"
                              : "border border-border bg-card text-text-secondary hover:bg-section hover:text-text-primary"
                          }`}
                        >
                          {toneOption}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Section 2: Pricing Model */}
                  <div>
                    <label className="block text-sm font-semibold text-text-primary mb-2">
                      Pricing Model
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {(["Fixed Price", "Hourly", "Milestone"] as const).map((pricingOption) => (
                        <button
                          key={pricingOption}
                          type="button"
                          onClick={() => setData({ ...data, pricingModel: pricingOption })}
                          className={`py-2.5 px-4 rounded-xl text-xs font-semibold transition-all cursor-pointer text-center ${
                            data.pricingModel === pricingOption
                              ? "border-2 border-primary bg-primary/10 text-primary shadow-sm"
                              : "border border-border bg-card text-text-secondary hover:bg-section hover:text-text-primary"
                          }`}
                        >
                          {pricingOption}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Section 3: Proposal Style */}
                  <div>
                    <label className="block text-sm font-semibold text-text-primary mb-2">
                      Proposal Style
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {(["Detailed", "Concise", "Visual"] as const).map((styleOption) => (
                        <button
                          key={styleOption}
                          type="button"
                          onClick={() => setData({ ...data, proposalStyle: styleOption })}
                          className={`py-2.5 px-4 rounded-xl text-xs font-semibold transition-all cursor-pointer text-center ${
                            data.proposalStyle === styleOption
                              ? "border-2 border-primary bg-primary/10 text-primary shadow-sm"
                              : "border border-border bg-card text-text-secondary hover:bg-section hover:text-text-primary"
                          }`}
                        >
                          {styleOption}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Actions Bar */}
            <div className="pt-8 mt-8 border-t border-border flex items-center justify-between">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-text-secondary hover:text-text-primary px-4 py-2.5 rounded-xl border border-border hover:bg-section transition-all cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
              ) : (
                <div />
              )}

              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-primary hover:bg-primary-hover px-6 py-2.5 rounded-xl shadow-md shadow-primary/25 transition-all cursor-pointer active:scale-[0.99]"
              >
                <span>{currentStep === 5 ? "Finish Setup" : "Next"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
