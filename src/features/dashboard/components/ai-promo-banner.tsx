"use client";

import * as React from "react";
import { Sparkles, ChevronDown } from "lucide-react";

export function AiPromoBanner() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0B0F19] via-[#0F172A] to-[#1E1B4B] p-5 text-white shadow-md select-none">
      {/* Abstract Glowing Waves SVG Background in Bottom Right */}
      <div className="pointer-events-none absolute -bottom-6 -right-6 w-48 h-48 opacity-70">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="promoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.3" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <path
            d="M 20,180 C 60,110 110,190 150,120 C 180,70 195,140 210,90 C 220,50 200,10 180,30"
            stroke="url(#promoGrad1)"
            strokeWidth="8"
            strokeLinecap="round"
            filter="url(#glow)"
            fill="none"
          />
          <path
            d="M 50,190 C 80,140 130,170 170,110 C 200,60 180,20 210,0"
            stroke="#6366F1"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            opacity="0.7"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start gap-2.5 max-w-[210px]">
        <h3 className="text-sm font-bold tracking-tight text-white leading-snug">
          Better opportunities.
          <br />
          Smarter decisions.
        </h3>
        <p className="text-[11px] text-slate-300 leading-relaxed">
          Let Winflare&apos;s AI find, qualify and help you win more clients.
        </p>
        <button
          type="button"
          className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-bold text-slate-900 shadow-sm transition-all hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
        >
          <span>Try AI Assistant</span>
          <ChevronDown className="h-3 w-3 text-slate-600" />
        </button>
      </div>
    </div>
  );
}

