'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Lock,
  Globe,
  ChevronDown,
  Heart,
} from 'lucide-react';
import { BrandIcon } from '@/components/shared';

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="border-t border-slate-200/80 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-12 max-w-[1340px] mx-auto pt-16 pb-12">
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Column 1: Brand & Bio (Span 4) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-90">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#5536FA] text-white shadow-xs font-black text-lg select-none">
                W
              </div>
              <span className="text-xl font-bold tracking-tight text-[#030933]">
                winflare
              </span>
            </Link>

            {/* Sub-tag Badge */}
            <div className="mt-2 inline-block rounded bg-slate-100 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-widest text-slate-500">
              LEAD-TO-CLIENT OS
            </div>

            {/* Bio Description */}
            <p className="mt-4 max-w-xs text-xs sm:text-[13px] text-[#64748B] leading-relaxed">
              Helping freelancers, consultants, and agencies turn opportunities into long-term clients.
            </p>

            {/* Social Icons Row */}
            <div className="mt-5 flex items-center gap-2.5">
              {/* LinkedIn */}
              <Link
                href="https://linkedin.com/company/winflare"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 border border-slate-200/80 text-slate-700 transition-all hover:border-[#5536FA] hover:text-[#5536FA] hover:bg-slate-100"
              >
                <BrandIcon name="linkedin" className="h-3.5 w-3.5 fill-current" />
              </Link>

              {/* X */}
              <Link
                href="https://twitter.com/winflare_hq"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 border border-slate-200/80 text-slate-700 transition-all hover:border-[#5536FA] hover:text-[#5536FA] hover:bg-slate-100"
              >
                <BrandIcon name="x" className="h-3 w-3 fill-current" />
              </Link>

              {/* YouTube */}
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 border border-slate-200/80 text-slate-700 transition-all hover:border-[#5536FA] hover:text-[#5536FA] hover:bg-slate-100"
              >
                <BrandIcon name="youtube" className="h-3.5 w-3.5 fill-current" />
              </Link>

              {/* Instagram */}
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 border border-slate-200/80 text-slate-700 transition-all hover:border-[#5536FA] hover:text-[#5536FA] hover:bg-slate-100"
              >
                <BrandIcon name="instagram" className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Column 2: Product (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-[#030933]">Product</h4>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-[13px] text-[#64748B]">
              <li>
                <Link href="#features" className="hover:text-[#030933] transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-[#030933] transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-[#030933] transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-[#030933] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#roadmap" className="hover:text-[#030933] transition-colors">
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-[#030933]">Resources</h4>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-[13px] text-[#64748B]">
              <li>
                <Link href="/blog" className="hover:text-[#030933] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/guides" className="hover:text-[#030933] transition-colors">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/templates" className="hover:text-[#030933] transition-colors">
                  Templates
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:text-[#030933] transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/updates" className="hover:text-[#030933] transition-colors">
                  Updates
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-[#030933]">Company</h4>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-[13px] text-[#64748B]">
              <li>
                <Link href="/about" className="hover:text-[#030933] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#030933] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[#030933] transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#030933] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#030933] transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Stay in the loop (Span 2 / Newsletter) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-[#030933]">Stay in the loop</h4>
            <p className="mt-4 text-xs text-[#64748B] leading-relaxed">
              Get product updates, tips, and resources straight to your inbox.
            </p>

            {/* Newsletter Input */}
            <form onSubmit={handleSubscribe} className="mt-4">
              <div className="flex items-center rounded-xl border border-slate-200 bg-white p-1 shadow-2xs focus-within:border-[#5536FA] focus-within:ring-1 focus-within:ring-[#5536FA] transition-all">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-transparent px-3 py-1.5 text-xs text-[#030933] placeholder:text-slate-400 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#5536FA] text-white hover:bg-[#4325E5] transition-colors shrink-0 shadow-xs"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>

            {isSubscribed ? (
              <p className="mt-2 text-[11px] font-medium text-[#16A34A]">
                Thanks for subscribing!
              </p>
            ) : (
              <div className="mt-2 flex items-center gap-1.5 text-[11px] text-[#64748B]">
                <Lock className="h-3 w-3 text-slate-400 shrink-0" />
                <span>No spam. Unsubscribe anytime.</span>
              </div>
            )}
          </div>
        </div>

        {/* ========================================== */}
        {/* Bottom Bar: Copyright | Love note | Lang Switcher */}
        {/* ========================================== */}
        <div className="mt-14 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          {/* Copyright */}
          <div>
            &copy; 2025 Winflare. All rights reserved.
          </div>

          {/* Love Note */}
          <div className="flex items-center gap-1.5 font-medium">
            <Heart className="h-3.5 w-3.5 fill-[#5536FA] text-[#5536FA]" />
            <span>Built to help you win more clients.</span>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center">
            <button
              type="button"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-[#030933] hover:bg-slate-50 transition-colors shadow-2xs"
            >
              <Globe className="h-3.5 w-3.5 text-slate-500" />
              <span>English</span>
              <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
