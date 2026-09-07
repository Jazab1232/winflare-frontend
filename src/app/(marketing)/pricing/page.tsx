import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { HelpCircle, ArrowRight, ShieldCheck } from "lucide-react";
import { PricingCards } from "./pricing-cards";
import { FAQS_CONTENT } from "@/features/landing/constants/landing-content";

export const metadata: Metadata = {
  title: "Pricing Plans | Winflare",
  description:
    "Transparent pricing for freelance consultants and scaling agencies. Choose between Starter, Professional, and Agency tiers.",
};

const COMPARISON_FEATURES = [
  {
    category: "AI Proposals & Scopes",
    items: [
      { name: "Monthly AI Proposal Generations", starter: "15 / mo", pro: "Unlimited", agency: "Unlimited" },
      { name: "Dynamic Scope of Work & Deliverables", starter: "Basic", pro: "Advanced", agency: "Customizable" },
      { name: "Case Study & Portfolio Auto-Embed", starter: "❌", pro: "✓", agency: "✓" },
      { name: "Tone & Voice Calibration", starter: "Standard", pro: "Custom", agency: "Multi-Brand" },
    ],
  },
  {
    category: "Opportunity Radar",
    items: [
      { name: "Real-time RFP Discovery", starter: "Daily Digest", pro: "Instant Alerts", agency: "Instant + Priority" },
      { name: "Client Budget & Rate Intelligence", starter: "❌", pro: "✓", agency: "✓" },
      { name: "Competitor Bidding Benchmarks", starter: "❌", pro: "✓", agency: "✓" },
      { name: "Saved Search Filters", starter: "3 filters", pro: "Unlimited", agency: "Unlimited" },
    ],
  },
  {
    category: "Analytics & Tracking",
    items: [
      { name: "Client View Tracking & Read Time", starter: "✓", pro: "✓", agency: "✓" },
      { name: "Engagement Heatmaps", starter: "❌", pro: "✓", agency: "✓" },
      { name: "Pipeline & Win-Rate Dashboard", starter: "Basic", pro: "Advanced", agency: "Executive" },
      { name: "Team Performance Metrics", starter: "❌", pro: "❌", agency: "✓" },
    ],
  },
  {
    category: "Team & Support",
    items: [
      { name: "Included Team Seats", starter: "1 user", pro: "1 user", agency: "Up to 10 users" },
      { name: "Custom Domain & Branding", starter: "❌", pro: "✓", agency: "✓" },
      { name: "Support Channel", starter: "Email (48h)", pro: "Priority Chat", agency: "Dedicated Manager" },
      { name: "Service Level Agreement (SLA)", starter: "Standard", pro: "99.9%", agency: "Custom" },
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="pb-20 bg-background">
      {/* Hero Pricing Cards */}
      <PricingCards />

      {/* Feature Comparison Matrix */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
            Compare Plan Features
          </h2>
          <p className="mt-2 text-sm text-text-secondary">
            A comprehensive breakdown of all features across our tiers.
          </p>
        </div>

        <div className="mt-10 overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-border bg-section">
                <th className="py-4 px-6 text-sm font-semibold text-text-primary w-2/5">
                  Feature
                </th>
                <th className="py-4 px-6 text-sm font-semibold text-text-primary text-center w-1/5">
                  Starter
                </th>
                <th className="py-4 px-6 text-sm font-semibold text-primary text-center w-1/5">
                  Professional
                </th>
                <th className="py-4 px-6 text-sm font-semibold text-text-primary text-center w-1/5">
                  Agency
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_FEATURES.map((section, sIdx) => (
                <React.Fragment key={sIdx}>
                  <tr className="bg-section/80">
                    <td
                      colSpan={4}
                      className="py-2.5 px-6 text-xs font-bold uppercase tracking-wider text-text-secondary"
                    >
                      {section.category}
                    </td>
                  </tr>
                  {section.items.map((item, iIdx) => (
                    <tr
                      key={iIdx}
                      className="border-b border-border hover:bg-section/40 transition-colors"
                    >
                      <td className="py-3.5 px-6 text-sm text-text-primary">
                        {item.name}
                      </td>
                      <td className="py-3.5 px-6 text-sm text-center text-text-secondary">
                        {item.starter}
                      </td>
                      <td className="py-3.5 px-6 text-sm text-center font-semibold text-primary">
                        {item.pro}
                      </td>
                      <td className="py-3.5 px-6 text-sm text-center text-text-secondary">
                        {item.agency}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
            <HelpCircle className="h-3.5 w-3.5" />
            Common Questions
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-primary">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm text-text-secondary">
            Have questions before joining? Here are answers to what people ask most.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {FAQS_CONTENT.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <h3 className="text-base font-semibold text-text-primary">
                {faq.question}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {/* Custom Sales CTA Box */}
        <div className="mt-16 rounded-3xl bg-gradient-to-tr from-primary via-[#6c6bf8] to-secondary p-8 text-white shadow-xl shadow-primary/20 sm:p-10 text-center">
          <div className="mx-auto max-w-xl">
            <ShieldCheck className="mx-auto h-10 w-10 text-white/90" />
            <h3 className="mt-4 text-2xl sm:text-3xl font-bold">
              Need custom terms or more than 10 seats?
            </h3>
            <p className="mt-3 text-sm text-white/90 sm:text-base leading-relaxed">
              We offer bespoke contracts, dedicated IP, custom security audits, and dedicated onboarding managers for large agencies.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-card px-6 py-3 text-sm font-semibold text-text-primary shadow-md transition-all hover:bg-section active:scale-[0.99]"
              >
                <span>Talk to Enterprise Sales</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
