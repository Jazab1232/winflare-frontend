"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, ArrowRight, ArrowLeft, CheckCircle2, RefreshCw } from "lucide-react";
import { AuthBrandHeader } from "./auth-brand-header";

interface EmailVerificationScreenProps {
  userEmail?: string;
}

export function EmailVerificationScreen({
  userEmail = "you@company.com",
}: EmailVerificationScreenProps) {
  const [isResending, setIsResending] = useState(false);
  const [resendStatus, setResendStatus] = useState<string | null>(null);

  const handleResend = async () => {
    setIsResending(true);
    setResendStatus(null);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setResendStatus("Verification email resent successfully!");
    } catch {
      setResendStatus("Failed to resend email. Please try again.");
    } finally {
      setIsResending(false);
    }
  };

  return (
    <main className="min-h-screen w-full flex flex-col justify-between bg-[#FAFBFF] p-6 sm:p-10 lg:p-14 text-text-primary antialiased">
      {/* Top Header */}
      <header className="w-full max-w-6xl mx-auto flex items-center justify-between">
        <AuthBrandHeader />
        <Link
          href="/onboarding"
          className="text-xs font-semibold text-text-secondary hover:text-primary transition-colors flex items-center gap-1"
        >
          <span>Skip to Onboarding</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </header>

      {/* Centered Main Card */}
      <div className="w-full max-w-md mx-auto my-auto py-10 text-center">
        {/* Circular Mail Icon Badge with Ambient Halo */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-primary/15 blur-xl transform scale-110" />
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-sm">
            <Mail className="w-8 h-8 sm:w-9 sm:h-9 stroke-[1.75]" />
          </div>
        </div>

        {/* Headings */}
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-text-primary mb-3">
          Verify your email address
        </h1>
        <p className="text-sm text-text-secondary leading-relaxed max-w-sm mx-auto mb-8">
          We&apos;ve sent a verification link to your email address{" "}
          <span className="font-semibold text-text-primary">({userEmail})</span>.
          Please check your inbox and click the link to continue.
        </p>

        {resendStatus && (
          <div className="mb-5 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-medium flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>{resendStatus}</span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-4 max-w-xs mx-auto">
          <button
            type="button"
            onClick={handleResend}
            disabled={isResending}
            className="w-full py-3 px-5 rounded-xl bg-primary hover:bg-primary-hover text-white font-semibold text-sm shadow-md shadow-primary/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isResending ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Resending...</span>
              </>
            ) : (
              <span>Resend Email</span>
            )}
          </button>

          <div className="pt-2">
            <Link
              href="/login"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to login</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Support */}
      <footer className="w-full max-w-6xl mx-auto text-center text-xs text-text-secondary">
        Didn&apos;t receive an email? Check your spam folder or{" "}
        <Link href="/contact" className="text-primary hover:underline font-medium">
          contact support
        </Link>
        .
      </footer>
    </main>
  );
}
