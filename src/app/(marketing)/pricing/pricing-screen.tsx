"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  User,
  Star,
  Users,
  CheckCircle2,
  Check,
  ShieldCheck,
  Lock,
  Sparkles,
  Compass,
  Bot,
  Target,
  Kanban,
  X,
  CheckCircle,
} from "lucide-react";

interface CompareRow {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  starter: boolean;
  pro: boolean;
  agency: boolean;
}

const COMPARISON_ROWS: CompareRow[] = [
  {
    name: "Unlimited opportunities",
    icon: Compass,
    starter: false,
    pro: true,
    agency: true,
  },
  {
    name: "AI proposals",
    icon: Bot,
    starter: false,
    pro: true,
    agency: true,
  },
  {
    name: "AI match scoring",
    icon: Target,
    starter: true,
    pro: true,
    agency: true,
  },
  {
    name: "Application pipeline",
    icon: Kanban,
    starter: true,
    pro: true,
    agency: true,
  },
  {
    name: "Team workspace",
    icon: Users,
    starter: false,
    pro: false,
    agency: true,
  },
  {
    name: "Priority support",
    icon: ShieldCheck,
    starter: false,
    pro: true,
    agency: true,
  },
];

export function PricingScreen() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (waitlistEmail.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setWaitlistOpen(false);
        setSubmitted(false);
        setWaitlistEmail("");
      }, 2000);
    }
  };

  return (
    <div className="bg-[#FAFBFF] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Tag / Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E0E2FD] bg-[#EEF0FE] px-4 py-1 text-xs font-bold tracking-wider text-[#5B5AF7]">
            <span className="font-extrabold">09</span>
            <span>PRICING</span>
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl lg:text-[54px] lg:leading-[1.15]">
            Simple Pricing.
            <br />
            Built To Help You{" "}
            <span className="text-[#5B5AF7]">Win More Clients.</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-base font-normal leading-relaxed text-slate-500 sm:text-lg">
            Start free. Upgrade when client acquisition
            <br className="hidden sm:inline" /> becomes a serious part of your
            business.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-stretch">
          {/* Card 1: Starter */}
          <div className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs sm:p-8 transition-all duration-200 hover:shadow-md">
            <div>
              {/* Header */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EEF0FF] text-[#5B5AF7]">
                  <User className="h-6 w-6 stroke-[2.2]" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Starter</h2>
                  <p className="mt-0.5 text-xs font-semibold text-[#5B5AF7]">
                    For individuals exploring the platform.
                  </p>
                </div>
              </div>

              {/* Price */}
              <div className="mt-7 flex items-baseline gap-2">
                <span className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  $0
                </span>
                <span className="text-sm font-medium text-slate-500">
                  Forever Free
                </span>
              </div>

              {/* Feature List */}
              <ul className="mt-8 space-y-3.5 text-sm text-slate-700">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#5B5AF7] stroke-[2.2]" />
                  <span>Up to 25 opportunities</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#5B5AF7] stroke-[2.2]" />
                  <span>Basic match scoring</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#5B5AF7] stroke-[2.2]" />
                  <span>5 AI proposals / month</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#5B5AF7] stroke-[2.2]" />
                  <span>Application tracking</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#5B5AF7] stroke-[2.2]" />
                  <span>Single user</span>
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <div className="mt-10">
              <Link
                href="/register?plan=starter"
                className="inline-flex w-full items-center justify-center rounded-2xl border-2 border-[#D7D5FE] bg-white py-3.5 text-sm font-bold text-[#5B5AF7] transition-all hover:border-[#5B5AF7] hover:bg-[#F8F7FF] active:scale-[0.99]"
              >
                Start Free
              </Link>
            </div>
          </div>

          {/* Card 2: Pro (Featured / Most Popular) */}
          <div className="relative flex flex-col justify-between rounded-3xl border-2 border-[#5B5AF7] bg-white p-7 shadow-xl shadow-[#5B5AF7]/10 sm:p-8 lg:-translate-y-2 transition-all duration-200">
            {/* Top Pill Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#5B5AF7] px-4 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-sm">
              MOST POPULAR
            </div>

            <div>
              {/* Header */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#5B5AF7] text-white shadow-sm shadow-[#5B5AF7]/30">
                  <Star className="h-6 w-6 fill-none stroke-[2.4]" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Pro</h2>
                  <p className="mt-0.5 text-xs font-semibold text-[#5B5AF7]">
                    For serious freelancers and consultants.
                  </p>
                </div>
              </div>

              {/* Price */}
              <div className="mt-7 flex items-baseline gap-2">
                <span className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  $29
                </span>
                <span className="text-sm font-medium text-slate-500">
                  / month
                </span>
              </div>

              {/* Feature List */}
              <ul className="mt-8 space-y-3.5 text-sm text-slate-700">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#5B5AF7] stroke-[2.2]" />
                  <span>Unlimited opportunities</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#5B5AF7] stroke-[2.2]" />
                  <span>Unlimited AI proposals</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#5B5AF7] stroke-[2.2]" />
                  <span>Advanced AI match scoring</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#5B5AF7] stroke-[2.2]" />
                  <span>Full application pipeline</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#5B5AF7] stroke-[2.2]" />
                  <span>Follow-ups &amp; reminders</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#5B5AF7] stroke-[2.2]" />
                  <span>Activity &amp; performance analytics</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#5B5AF7] stroke-[2.2]" />
                  <span>Priority support</span>
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <div className="mt-10">
              <Link
                href="/register?plan=pro"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-[#5B5AF7] py-3.5 text-sm font-bold text-white shadow-md shadow-[#5B5AF7]/25 transition-all hover:bg-[#4847E5] active:scale-[0.99]"
              >
                Start Winning More Clients
              </Link>
            </div>
          </div>

          {/* Card 3: Agency */}
          <div className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs sm:p-8 transition-all duration-200 hover:shadow-md">
            <div>
              {/* Header */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E8F8F0] text-[#10B981]">
                  <Users className="h-6 w-6 stroke-[2.2]" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Agency</h2>
                  <p className="mt-0.5 text-xs font-semibold text-[#5B5AF7]">
                    For teams and growing agencies.
                  </p>
                </div>
              </div>

              {/* Price / Coming Soon */}
              <div className="mt-7 flex items-baseline gap-2">
                <span className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  Coming Soon
                </span>
              </div>

              {/* Feature List */}
              <ul className="mt-8 space-y-3.5 text-sm text-slate-700">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#10B981] stroke-[2.2]" />
                  <span>Team workspaces</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#10B981] stroke-[2.2]" />
                  <span>Shared pipelines</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#10B981] stroke-[2.2]" />
                  <span>Team analytics</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#10B981] stroke-[2.2]" />
                  <span>Role &amp; permission management</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#10B981] stroke-[2.2]" />
                  <span>Shared knowledge base</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#10B981] stroke-[2.2]" />
                  <span>Priority support</span>
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <div className="mt-10">
              <button
                type="button"
                onClick={() => setWaitlistOpen(true)}
                className="inline-flex w-full items-center justify-center rounded-2xl border-2 border-[#A7F3D0] bg-white py-3.5 text-sm font-bold text-[#10B981] transition-all hover:border-[#10B981] hover:bg-[#F0FDF4] active:scale-[0.99] cursor-pointer"
              >
                Join Waitlist
              </button>
            </div>
          </div>
        </div>

        {/* Plan Comparison Table */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs sm:p-8">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[620px] border-collapse text-left">
              <thead>
                <tr className="border-b border-slate-100 pb-5">
                  <th className="w-2/5 pb-4 text-base font-bold text-slate-900 sm:text-lg">
                    Compare Plans
                  </th>
                  <th className="w-1/5 pb-4 text-center">
                    <div className="text-sm font-bold text-slate-900">Starter</div>
                    <div className="text-xs font-semibold text-[#5B5AF7]">Free</div>
                  </th>
                  <th className="w-1/5 pb-4 text-center">
                    <div className="text-sm font-bold text-slate-900">Pro</div>
                    <div className="text-xs font-semibold text-[#5B5AF7]">
                      $29 / month
                    </div>
                  </th>
                  <th className="w-1/5 pb-4 text-center">
                    <div className="text-sm font-bold text-slate-900">Agency</div>
                    <div className="text-xs font-semibold text-[#5B5AF7]">
                      Coming Soon
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {COMPARISON_ROWS.map((row, idx) => {
                  const RowIcon = row.icon;
                  return (
                    <tr
                      key={idx}
                      className="transition-colors hover:bg-slate-50/60"
                    >
                      <td className="py-4 text-sm font-medium text-slate-800">
                        <div className="flex items-center gap-3">
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                            <RowIcon className="h-4 w-4" />
                          </div>
                          <span>{row.name}</span>
                        </div>
                      </td>
                      <td className="py-4 text-center">
                        {row.starter ? (
                          <Check className="mx-auto h-5 w-5 stroke-[2.8] text-[#5B5AF7]" />
                        ) : (
                          <span className="text-base font-semibold text-slate-400">
                            —
                          </span>
                        )}
                      </td>
                      <td className="py-4 text-center">
                        {row.pro ? (
                          <Check className="mx-auto h-5 w-5 stroke-[2.8] text-[#5B5AF7]" />
                        ) : (
                          <span className="text-base font-semibold text-slate-400">
                            —
                          </span>
                        )}
                      </td>
                      <td className="py-4 text-center">
                        {row.agency ? (
                          <Check className="mx-auto h-5 w-5 stroke-[2.8] text-[#10B981]" />
                        ) : (
                          <span className="text-base font-semibold text-slate-400">
                            —
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Trust Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-700 sm:gap-10">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EEF0FF] text-[#5B5AF7]">
              <ShieldCheck className="h-4 w-4" />
            </div>
            <span>No credit card required</span>
          </div>

          <div className="hidden h-5 w-[1px] bg-slate-200 sm:block" />

          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EEF0FF] text-[#5B5AF7]">
              <Lock className="h-4 w-4" />
            </div>
            <span>Cancel anytime</span>
          </div>

          <div className="hidden h-5 w-[1px] bg-slate-200 sm:block" />

          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EEF0FF] text-[#5B5AF7]">
              <Sparkles className="h-4 w-4" />
            </div>
            <span>14-day money-back guarantee</span>
          </div>
        </div>
      </div>

      {/* Agency Waitlist Modal */}
      {waitlistOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-xs">
          <div className="relative w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl sm:p-8 animate-in fade-in zoom-in-95 duration-150">
            <button
              type="button"
              onClick={() => setWaitlistOpen(false)}
              className="absolute right-4 top-4 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            {submitted ? (
              <div className="py-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  You&apos;re on the waitlist!
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  We will notify you the moment Agency tier spots open up.
                </p>
              </div>
            ) : (
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F8F0] text-[#10B981]">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  Join the Agency Waitlist
                </h3>
                <p className="mt-1.5 text-sm text-slate-500">
                  Get early access, customized onboarding, and priority support
                  for multi-seat agency teams.
                </p>

                <form onSubmit={handleWaitlistSubmit} className="mt-6 space-y-4">
                  <div>
                    <label
                      htmlFor="waitlist-email"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700"
                    >
                      Work Email
                    </label>
                    <input
                      id="waitlist-email"
                      type="email"
                      required
                      placeholder="you@agency.com"
                      value={waitlistEmail}
                      onChange={(e) => setWaitlistEmail(e.target.value)}
                      className="mt-1.5 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#5B5AF7] focus:outline-hidden focus:ring-2 focus:ring-[#5B5AF7]/20"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[#5B5AF7] py-3 text-sm font-bold text-white shadow-md shadow-[#5B5AF7]/20 hover:bg-[#4847E5] transition-all cursor-pointer"
                  >
                    Get Early Access
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

