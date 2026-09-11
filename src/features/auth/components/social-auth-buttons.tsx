"use client";

import React from "react";

interface SocialAuthButtonsProps {
  onGoogleClick?: () => void;
  onLinkedInClick?: () => void;
  isLoading?: boolean;
}

export function SocialAuthButtons({
  onGoogleClick,
  onLinkedInClick,
  isLoading = false,
}: SocialAuthButtonsProps) {
  return (
    <div className="flex flex-col gap-3 w-full">
      {/* Google Button */}
      <button
        type="button"
        onClick={onGoogleClick}
        disabled={isLoading}
        className="w-full flex items-center justify-center gap-3 py-2.5 px-4 rounded-xl border border-border bg-card text-text-primary hover:bg-section hover:border-slate-300 font-medium text-sm transition-all shadow-[0_1px_2px_rgba(0,0,0,0.04)] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
      >
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.27-2.09 3.66-5.17 3.66-9.12z"
          />
          <path
            fill="#34A853"
            d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.13C3.26 21.36 7.34 24 12 24z"
          />
          <path
            fill="#FBBC05"
            d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.57H1.25C.45 8.16 0 9.98 0 12s.45 3.84 1.25 5.43l4.03-3.14z"
          />
          <path
            fill="#EA4335"
            d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.57l4.03 3.14c.95-2.83 3.6-4.96 6.72-4.96z"
          />
        </svg>
        <span>Continue with Google</span>
      </button>

      {/* LinkedIn Button */}
      <button
        type="button"
        onClick={onLinkedInClick}
        disabled={isLoading}
        className="w-full flex items-center justify-center gap-3 py-2.5 px-4 rounded-xl border border-border bg-card text-text-primary hover:bg-section hover:border-slate-300 font-medium text-sm transition-all shadow-[0_1px_2px_rgba(0,0,0,0.04)] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
      >
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="#0A66C2">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.44a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28" />
        </svg>
        <span>Continue with LinkedIn</span>
      </button>
    </div>
  );
}
