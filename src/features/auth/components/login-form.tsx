"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, Eye, EyeOff, ArrowRight, ShieldCheck, Loader2 } from "lucide-react";
import { SocialAuthButtons } from "./social-auth-buttons";

interface LoginFormProps {
  onToggleMode?: () => void;
}

export function LoginForm({ onToggleMode }: LoginFormProps) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!email || !password) {
      setErrorMessage("Please enter both email and password.");
      return;
    }

    setIsLoading(true);

    try {
      // Simulate authentication request
      await new Promise((resolve) => setTimeout(resolve, 800));
      // Navigate to dashboard on success
      router.push("/dashboard");
    } catch {
      setErrorMessage("Invalid credentials. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleAuth = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push("/dashboard");
    }, 600);
  };

  const handleLinkedInAuth = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push("/dashboard");
    }, 600);
  };

  return (
    <div className="w-full flex flex-col justify-between min-h-full">
      <div className="w-full max-w-[420px] mx-auto">
        {/* Header Titles */}
        <div className="mb-7">
          <h1 className="text-3xl sm:text-[32px] font-extrabold tracking-tight text-text-primary">
            Welcome back
          </h1>
          <p className="mt-2 text-sm text-text-secondary leading-relaxed">
            Sign in to your Winflare account and continue building your client acquisition engine.
          </p>
        </div>

        {/* Error Alert */}
        {errorMessage && (
          <div className="mb-5 p-3 rounded-xl bg-error/10 border border-error/20 text-error text-xs font-medium">
            {errorMessage}
          </div>
        )}

        {/* Main Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Address Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-text-primary mb-1.5"
            >
              Email address
            </label>
            <div className="relative rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Mail className="h-4.5 w-4.5" />
              </div>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-card text-text-primary placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-text-primary mb-1.5"
            >
              Password
            </label>
            <div className="relative rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Lock className="h-4.5 w-4.5" />
              </div>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-border bg-card text-text-primary placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 transition-colors focus:outline-none cursor-pointer"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="h-4.5 w-4.5" />
                ) : (
                  <Eye className="h-4.5 w-4.5" />
                )}
              </button>
            </div>
          </div>

          {/* Remember me & Forgot password Row */}
          <div className="flex items-center justify-between pt-0.5">
            <label className="flex items-center gap-2.5 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded border-border text-primary focus:ring-primary/30 accent-primary cursor-pointer"
              />
              <span className="text-sm font-medium text-text-secondary">
                Remember me
              </span>
            </label>

            <Link
              href="/forgot-password"
              className="text-sm font-semibold text-primary hover:text-primary-hover hover:underline transition-colors"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-5 rounded-xl bg-primary hover:bg-primary-hover text-white font-semibold text-sm shadow-md shadow-primary/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Signing in...</span>
                </>
              ) : (
                <>
                  <span>Sign in</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="relative my-6 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border" />
          </div>
          <div className="relative bg-background px-3 text-xs font-medium text-slate-400 uppercase tracking-wider">
            or
          </div>
        </div>

        {/* Social Buttons */}
        <SocialAuthButtons
          onGoogleClick={handleGoogleAuth}
          onLinkedInClick={handleLinkedInAuth}
          isLoading={isLoading}
        />

        {/* Create Account Link */}
        <div className="mt-8 text-center text-sm text-text-secondary">
          <span>Don&apos;t have an account? </span>
          {onToggleMode ? (
            <button
              type="button"
              onClick={onToggleMode}
              className="font-semibold text-primary hover:text-primary-hover hover:underline inline-flex items-center gap-1 cursor-pointer transition-colors"
            >
              <span>Create account</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <Link
              href="/signup"
              className="font-semibold text-primary hover:text-primary-hover hover:underline inline-flex items-center gap-1 transition-colors"
            >
              <span>Create account</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
      </div>

      {/* Bottom Trust Badge */}
      <div className="pt-10 pb-2 flex items-center gap-2 text-text-secondary text-xs">
        <ShieldCheck className="w-4 h-4 text-slate-400 shrink-0" />
        <span>Trusted by 1,000+ freelancers, agencies and consultants</span>
      </div>
    </div>
  );
}
