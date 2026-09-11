"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, ArrowRight, ArrowLeft, CheckCircle2, Loader2 } from "lucide-react";
import { AuthBrandHeader } from "./auth-brand-header";

export function ForgotPasswordScreen() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!email) {
      setErrorMessage("Please enter your email address.");
      return;
    }

    setIsLoading(true);

    try {
      // Simulate reset request
      await new Promise((resolve) => setTimeout(resolve, 800));
      setIsSubmitted(true);
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen w-full flex bg-[#FAFBFF] text-text-primary antialiased selection:bg-primary/20 selection:text-primary">
      {/* Left Column: Visual Brand & Envelope Illustration Card */}
      <section 
        aria-label="Password Reset Information"
        className="hidden lg:flex w-[48%] xl:w-[46%] bg-gradient-to-br from-[#F4F6FF] via-[#F8FAFC] to-[#EEF2FF] border-r border-border/70 p-10 xl:p-14 flex-col justify-between relative overflow-hidden"
      >
        {/* Background Soft Glows */}
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

        {/* Brand Header */}
        <div className="relative z-10">
          <AuthBrandHeader />
        </div>

        {/* Center 3D Envelope Illustration & Copy */}
        <div className="relative z-10 my-auto flex flex-col items-center text-center max-w-sm mx-auto">
          {/* 3D Envelope Card Container */}
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center mb-6">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/30 rounded-3xl blur-2xl transform scale-90" />

            {/* Floating Back Layer Card */}
            <div className="absolute inset-4 bg-white/60 backdrop-blur-md rounded-2xl border border-white/80 shadow-[0_12px_32px_rgba(91,90,247,0.12)] rotate-[-6deg] transform-gpu" />

            {/* Main Center Card */}
            <div className="relative w-36 h-36 sm:w-40 sm:h-40 bg-white rounded-2xl border border-slate-200/90 shadow-[0_20px_45px_-10px_rgba(15,23,42,0.14)] flex items-center justify-center p-6 transform rotate-[2deg] hover:rotate-0 transition-transform duration-500">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-primary/15 to-secondary/20 flex items-center justify-center text-primary shadow-inner">
                <Mail className="w-8 h-8 sm:w-10 sm:h-10 stroke-[1.75]" />
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-extrabold text-text-primary tracking-tight mb-2">
            Reset Your Password
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed">
            Enter your email address and we&apos;ll send you a link to reset your password.
          </p>
        </div>

        {/* Bottom spacer / note */}
        <div className="relative z-10 text-xs text-text-secondary">
          <span>Protected by enterprise grade encryption.</span>
        </div>
      </section>

      {/* Right Column: Clean Form Container */}
      <section 
        aria-label="Forgot Password Form"
        className="w-full lg:w-[52%] xl:w-[54%] flex flex-col justify-between p-6 sm:p-10 lg:p-14 xl:p-20 min-h-screen bg-[#FAFBFF] z-10"
      >
        {/* Mobile Brand Header */}
        <div className="w-full flex items-center justify-between lg:hidden mb-6">
          <AuthBrandHeader />
        </div>

        {/* Main Form or Success Container */}
        <div className="w-full max-w-[420px] mx-auto my-auto py-8">
          {!isSubmitted ? (
            <>
              <div className="mb-8">
                <h1 className="text-3xl font-extrabold tracking-tight text-text-primary">
                  Forgot Password?
                </h1>
                <p className="mt-2 text-sm text-text-secondary">
                  No worries. We&apos;ll send you a reset link.
                </p>
              </div>

              {errorMessage && (
                <div className="mb-5 p-3 rounded-xl bg-error/10 border border-error/20 text-error text-xs font-medium">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="resetEmail"
                    className="block text-sm font-semibold text-text-primary mb-1.5"
                  >
                    Email address
                  </label>
                  <div className="relative rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Mail className="h-4.5 w-4.5" />
                    </div>
                    <input
                      id="resetEmail"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-card text-text-primary placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 px-5 rounded-xl bg-primary hover:bg-primary-hover text-white font-semibold text-sm shadow-md shadow-primary/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending reset link...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Reset Link</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>

              <div className="mt-6 text-center">
                <Link
                  href="/login"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to login</span>
                </Link>
              </div>
            </>
          ) : (
            /* Success State */
            <div className="text-center py-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto mb-5 shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-text-primary mb-2">
                Check your email
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                We have sent a password reset link to <span className="font-semibold text-text-primary">{email}</span>. Please click the link to create a new password.
              </p>

              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="w-full py-2.5 px-4 rounded-xl border border-border bg-card hover:bg-section font-medium text-sm text-text-primary transition-all cursor-pointer"
                >
                  Resend reset link
                </button>

                <div>
                  <Link
                    href="/login"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline pt-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to login</span>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom space */}
        <div className="hidden lg:block text-xs text-text-secondary text-center">
          Need help? <Link href="/contact" className="text-primary hover:underline font-medium">Contact support</Link>
        </div>
      </section>
    </main>
  );
}
