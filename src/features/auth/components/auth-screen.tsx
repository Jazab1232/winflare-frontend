"use client";

import React, { useState } from "react";
import { AuthBrandHeader } from "./auth-brand-header";
import { LoginForm } from "./login-form";
import { SignupForm } from "./signup-form";
import { AuthShowcase } from "./auth-showcase";

interface AuthScreenProps {
  initialMode?: "login" | "signup";
}

export function AuthScreen({ initialMode = "login" }: AuthScreenProps) {
  const [mode, setMode] = useState<"login" | "signup">(initialMode);

  return (
    <main className="min-h-screen w-full flex bg-[#FAFBFF] text-text-primary antialiased selection:bg-primary/20 selection:text-primary">
      {/* Left Column: Interactive Form & Brand */}
      <section 
        aria-label={mode === "login" ? "Sign In Form" : "Sign Up Form"}
        className="w-full lg:w-[48%] xl:w-[44%] 2xl:w-[40%] flex flex-col justify-between p-6 sm:p-10 lg:p-12 xl:p-14 min-h-screen bg-[#FAFBFF] z-10 shrink-0"
      >
        {/* Brand Header */}
        <div className="w-full flex items-center justify-between">
          <AuthBrandHeader />
        </div>

        {/* Form Container */}
        <div className="w-full my-auto py-8">
          {mode === "login" ? (
            <LoginForm onToggleMode={() => setMode("signup")} />
          ) : (
            <SignupForm onToggleMode={() => setMode("login")} />
          )}
        </div>
      </section>

      {/* Right Column: Visual Showcase Preview */}
      <section 
        aria-label="Winflare Product Showcase"
        className="hidden lg:flex flex-1 flex-col bg-gradient-to-br from-[#F4F6FF] via-[#F8FAFC] to-[#EEF2FF] border-l border-border/70 relative overflow-hidden"
      >
        <AuthShowcase />
      </section>
    </main>
  );
}
