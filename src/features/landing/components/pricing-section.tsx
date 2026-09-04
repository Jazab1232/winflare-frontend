"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import { PRICING_TIERS } from "../constants/landing-content";

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="scroll-mt-16 py-20 bg-section">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
            Predictable Pricing
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
            A single won proposal pays for an entire year
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Simple, transparent tiers designed to scale as your client revenue grows.
          </p>

          {/* Billing Interval Switcher */}
          <div className="mt-8 inline-flex items-center rounded-full border border-border bg-card p-1.5 shadow-sm">
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className={`rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold transition-colors ${
                !isAnnual
                  ? "bg-primary text-white shadow-sm"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold transition-colors ${
                isAnnual
                  ? "bg-primary text-white shadow-sm"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              <span>Annual Billing</span>
              <span className="rounded-full bg-success/10 px-2 py-0.5 text-[10px] font-bold text-success border border-success/20">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {PRICING_TIERS.map((tier) => {
            const price = isAnnual ? tier.annualPrice : tier.monthlyPrice;

            return (
              <div
                key={tier.id}
                className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-200 ${
                  tier.popular
                    ? "border-2 border-primary bg-card shadow-xl shadow-primary/10 lg:-translate-y-2"
                    : "border border-border bg-card shadow-sm"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white shadow-sm shadow-primary/25">
                    {tier.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-text-primary">
                      {tier.name}
                    </h3>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-text-secondary">
                    {tier.description}
                  </p>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-text-primary">
                      ${price}
                    </span>
                    <span className="text-sm font-medium text-text-secondary">
                      /month {isAnnual && <span className="text-xs">(billed annually)</span>}
                    </span>
                  </div>

                  {/* Feature list */}
                  <div className="mt-8 border-t border-border pt-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                      Included in this plan
                    </p>
                    <ul className="mt-4 space-y-3 text-sm text-text-secondary">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check className="h-4 w-4 shrink-0 text-success mt-0.5" />
                          <span className="text-text-primary">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href={tier.ctaHref}
                    className={`inline-flex w-full items-center justify-center rounded-xl py-3 text-sm font-semibold transition-all ${
                      tier.popular
                        ? "bg-primary text-white shadow-md shadow-primary/25 hover:bg-primary-hover active:scale-[0.99]"
                        : "border border-border bg-card text-text-primary hover:bg-section"
                    }`}
                  >
                    {tier.ctaText}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-14 mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-2 text-xs text-text-secondary">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>14-day risk-free money-back guarantee. No credit card required to explore.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
