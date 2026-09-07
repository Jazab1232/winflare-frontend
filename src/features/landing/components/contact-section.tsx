'use client';

import React from 'react';
import Link from 'next/link';
import {
  Mail,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  MessageCircle,
} from 'lucide-react';

export function ContactSection() {
  return (
    <section className="relative py-20 lg:py-24 bg-[#FAFBFF]">
      <div className="w-full px-4 sm:px-6 lg:px-12 max-w-[1340px] mx-auto">
        {/* Main Card Container */}
        <div className="relative overflow-hidden rounded-[32px] border border-[#DDD6FE]/60 bg-gradient-to-b from-[#FBF9FF] to-[#F5F2FE] p-8 sm:p-12 lg:p-16 text-center shadow-[0_12px_40px_-10px_rgba(99,68,252,0.06)]">
          {/* Subtle Ambient SVG Waves */}
          <div className="absolute inset-0 pointer-events-none opacity-40 z-0 overflow-hidden">
            <svg
              className="absolute -top-12 -left-12 w-96 h-96 text-[#DDD6FE]"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M -50 150 C 50 100, 100 250, 200 180 C 300 110, 280 20, 380 50"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeOpacity="0.45"
              />
              <path
                d="M -20 200 C 80 160, 130 300, 240 240"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeOpacity="0.3"
              />
            </svg>
            <svg
              className="absolute -top-12 -right-12 w-96 h-96 text-[#DDD6FE]"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 450 150 C 350 100, 300 250, 200 180 C 100 110, 120 20, 20 50"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeOpacity="0.45"
              />
            </svg>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EDE9FE] px-3.5 py-1 text-xs font-semibold text-[#5536FA] border border-[#DDD6FE]/70 shadow-xs">
              <div className="flex h-4 w-4 items-center justify-center rounded bg-[#5536FA] text-white">
                <Mail className="h-2.5 w-2.5" />
              </div>
              <span>Let&apos;s Connect</span>
            </div>

            {/* Headline */}
            <h2 className="mt-5 text-3xl sm:text-4xl font-bold lg:text-5xl  tracking-tight text-[#030933] leading-[1.18]">
              Ready to Build a Better <br />
              <span className="text-[#5536FA]">Client Acquisition System?</span>
            </h2>

            {/* Subtitle */}
            <p className="mt-4 text-sm sm:text-base text-[#64748B] max-w-lg mx-auto leading-relaxed">
              Have questions, feedback, or just want to say hello? <br />
              We&apos;d love to hear from you.
            </p>

            {/* 4 Contact Cards */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 text-left">
              {/* Card 1: Email Us */}
              <Link
                href="mailto:hello@winflare.com"
                className="group relative flex items-center justify-between rounded-2xl border border-slate-100/90 bg-white p-4 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.04),0_1px_3px_rgba(15,23,42,0.02)] transition-all duration-300 hover:shadow-[0_10px_28px_-4px_rgba(99,68,252,0.12)] hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EDE9FE] text-[#5536FA] shrink-0 transition-colors group-hover:bg-[#5536FA] group-hover:text-white">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-[#030933]">
                      Email Us
                    </div>
                    <div className="text-[11px] text-[#64748B] mt-0.5 font-medium">
                      hello@winflare.com
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-[#5536FA] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              {/* Card 2: LinkedIn */}
              <Link
                href="https://linkedin.com/company/winflare"
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center justify-between rounded-2xl border border-slate-100/90 bg-white p-4 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.04),0_1px_3px_rgba(15,23,42,0.02)] transition-all duration-300 hover:shadow-[0_10px_28px_-4px_rgba(99,68,252,0.12)] hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E0F2FE] text-[#0A66C2] shrink-0 font-bold text-sm">
                    in
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-[#030933]">
                      LinkedIn
                    </div>
                    <div className="text-[11px] text-[#64748B] mt-0.5 font-medium">
                      /company/winflare
                    </div>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-[#5536FA] transition-transform group-hover:translate-x-1" />
              </Link>

              {/* Card 3: Follow Us */}
              <Link
                href="https://twitter.com/winflare_hq"
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center justify-between rounded-2xl border border-slate-100/90 bg-white p-4 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.04),0_1px_3px_rgba(15,23,42,0.02)] transition-all duration-300 hover:shadow-[0_10px_28px_-4px_rgba(99,68,252,0.12)] hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-800 shrink-0 font-bold text-sm">
                    𝕏
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-[#030933]">
                      Follow Us
                    </div>
                    <div className="text-[11px] text-[#64748B] mt-0.5 font-medium">
                      @winflare_hq
                    </div>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-[#5536FA] transition-transform group-hover:translate-x-1" />
              </Link>

              {/* Card 4: Support */}
              <Link
                href="#support"
                className="group relative flex items-center justify-between rounded-2xl border border-slate-100/90 bg-white p-4 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.04),0_1px_3px_rgba(15,23,42,0.02)] transition-all duration-300 hover:shadow-[0_10px_28px_-4px_rgba(99,68,252,0.12)] hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EDE9FE] text-[#5536FA] shrink-0 transition-colors group-hover:bg-[#5536FA] group-hover:text-white">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-[#030933]">
                      Support
                    </div>
                    <div className="text-[11px] text-[#64748B] mt-0.5 font-medium">
                      We&apos;re here to help
                    </div>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-[#5536FA] transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* CTA Button & Microcopy */}
            <div className="mt-10 flex flex-col items-center gap-3">
              <Link
                href="/register"
                className="group inline-flex items-center gap-2 rounded-xl bg-[#5536FA] px-8 py-3.5 text-sm sm:text-base font-bold text-white shadow-lg shadow-[#5536FA]/25 transition-all hover:bg-[#4325E5] active:scale-[0.99]"
              >
                <span>Start Free Today</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <div className="flex items-center gap-1.5 text-xs text-[#64748B] font-medium">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#5536FA]" />
                <span>No credit card required</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

