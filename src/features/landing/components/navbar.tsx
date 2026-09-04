"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";

export function WinflareLogo({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <img
      src="/fav-icon.svg"
      alt="Winflare"
      className={`${className} object-contain`}
    />
  );
}

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  const isHoveredRef = useRef(false);
  const hideTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // When at the very top: always visible and no bottom border
      if (currentScrollY <= 10) {
        setIsAtTop(true);
        setIsVisible(true);
        if (hideTimerRef.current) {
          clearTimeout(hideTimerRef.current);
          hideTimerRef.current = null;
        }
        return;
      }

      // When scrolling down the page
      setIsAtTop(false);
      setIsVisible(true);

      // Clear any previous hide timer
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
      }

      // Set timer to hide header once scrolling stops
      hideTimerRef.current = setTimeout(() => {
        if (!isHoveredRef.current && !mobileMenuOpen) {
          setIsVisible(false);
        }
      }, 1200);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
      }
    };
  }, [mobileMenuOpen]);

  return (
    <header
      onMouseEnter={() => {
        isHoveredRef.current = true;
        setIsVisible(true);
        if (hideTimerRef.current) {
          clearTimeout(hideTimerRef.current);
          hideTimerRef.current = null;
        }
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
        if (window.scrollY > 10 && !mobileMenuOpen) {
          hideTimerRef.current = setTimeout(() => {
            setIsVisible(false);
          }, 1200);
        }
      }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ease-in-out ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      } ${
        isAtTop
          ? "border-b border-transparent bg-[#FAFBFF]"
          : "border-b border-[#E2E8F0] bg-[#FAFBFF]/90 backdrop-blur-md shadow-xs"
      }`}
    >
      <div className="w-full flex h-20 items-center justify-between px-4 sm:px-6 lg:px-10">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center transition-opacity hover:opacity-90">
          <img src="/logo.svg" alt="Winflare" className="h-9 w-auto object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <div className="relative group flex items-center gap-1 cursor-pointer text-sm font-medium text-text-primary hover:text-primary transition-colors">
            <span>Features</span>
            <ChevronDown className="h-4 w-4 text-text-secondary transition-transform group-hover:rotate-180" />
          </div>

          <Link
            href="#how-it-works"
            className="text-sm font-medium text-text-primary hover:text-primary transition-colors"
          >
            How It Works
          </Link>

          <div className="relative group flex items-center gap-1 cursor-pointer text-sm font-medium text-text-primary hover:text-primary transition-colors">
            <span>Resources</span>
            <ChevronDown className="h-4 w-4 text-text-secondary transition-transform group-hover:rotate-180" />
          </div>

          <Link
            href="/pricing"
            className="text-sm font-medium text-text-primary hover:text-primary transition-colors"
          >
            Pricing
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/login"
            className="text-sm font-semibold text-text-primary hover:text-primary transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="/register"
            className="group inline-flex items-center gap-1.5 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary/25 transition-all hover:bg-primary-hover active:scale-[0.99]"
          >
            <span>Start Free</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-text-secondary hover:bg-section hover:text-text-primary"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-border bg-card px-4 pt-2 pb-6 md:hidden">
          <div className="flex flex-col space-y-3">
            <Link
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md px-3 py-2 text-base font-medium text-text-primary hover:bg-section"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md px-3 py-2 text-base font-medium text-text-primary hover:bg-section"
            >
              How It Works
            </Link>
            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md px-3 py-2 text-base font-medium text-text-primary hover:bg-section"
            >
              Pricing
            </Link>
            <div className="pt-4 border-t border-border flex flex-col gap-2">
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-semibold text-text-primary hover:bg-section"
              >
                Sign in
              </Link>
              <Link
                href="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-hover"
              >
                Start Free
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
