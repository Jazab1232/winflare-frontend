import React from "react";
import {
  Sparkles,
  Compass,
  BarChart3,
  FileText,
  Clock,
  Users2,
  Shield,
  Zap,
  CheckCircle,
  ArrowUpRight,
} from "lucide-react";
import { FEATURES_CONTENT } from "../constants/landing-content";

const ICON_MAP = {
  Compass,
  Sparkles,
  FileText,
  BarChart3,
  Clock,
  Users2,
  Shield,
  Zap,
};

export function FeaturesSection() {
  return (
    <section id="features" className="scroll-mt-16 py-20 bg-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Built for Modern Freelancers & Agencies
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
            Everything you need to win your next dream contract
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Stop spending 10+ hours a week formatting bids that get ignored. Winflare streamlines
            your entire client acquisition pipeline.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES_CONTENT.map((feature) => {
            const Icon = ICON_MAP[feature.iconName] || Sparkles;
            return (
              <div
                key={feature.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full border border-border bg-section px-2.5 py-0.5 text-xs font-medium text-text-secondary">
                      {feature.tag}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-text-primary">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  <span>Learn more</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Workflow Showcase Banner */}
        <div className="mt-16 overflow-hidden rounded-2xl bg-gradient-to-r from-text-primary via-[#1e293b] to-text-primary p-8 text-white shadow-xl sm:p-12">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="max-w-xl text-center lg:text-left">
              <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-secondary">
                How It Works
              </span>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                From brief to signed proposal in 3 simple steps
              </h3>
              <p className="mt-3 text-sm text-slate-300 sm:text-base">
                1. Connect your profile and portfolio. 2. Select any high-value RFP or client brief.
                3. Let Winflare’s AI draft and polish an irresistible proposal with verified proof.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm">
                <CheckCircle className="h-5 w-5 text-success" />
                <span className="text-sm font-medium">99.4% Client Satisfaction</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span className="text-sm font-medium">Under 5 Min Turnaround</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
