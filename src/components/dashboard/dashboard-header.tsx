"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Bell, Sparkles, ChevronDown, User, Settings, LogOut } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { SearchInput } from "./search-input";

export interface DashboardHeaderProps {
  onAiAssistantClick?: () => void;
  actions?: React.ReactNode;
}

export function DashboardHeader({
  onAiAssistantClick,
  actions,
}: DashboardHeaderProps) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [isProfileMenuOpen, setIsProfileMenuOpen] = React.useState(false);
  const [hasNotifications, setHasNotifications] = React.useState(true);
  const profileRef = React.useRef<HTMLDivElement>(null);

  // Close profile dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setIsProfileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-30 flex h-14 w-full shrink-0 items-center justify-between border-b border-slate-200/80 bg-white/95 px-6 backdrop-blur-xs select-none">
      {/* Global Search Bar with ⌘K */}
      <div className="relative flex w-full max-w-md items-center">
        <SearchInput
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search opportunities, clients, pipeline, proposals..."
          showShortcut={true}
        />
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-3.5">
        {/* Contextual actions slot if needed by a page */}
        {actions && <div className="flex items-center gap-2">{actions}</div>}

        {/* AI Assistant Pill Button */}
        <button
          type="button"
          onClick={onAiAssistantClick}
          className="flex items-center gap-1.5 rounded-full border border-indigo-100 bg-[#F0EEFF] px-3.5 py-1.5 text-xs font-semibold text-[#5B5AF7] transition-all hover:bg-indigo-100/90 active:scale-[0.98] shadow-2xs cursor-pointer"
        >
          <Sparkles className="h-3.5 w-3.5 text-[#5B5AF7]" />
          <span>AI Assistant</span>
        </button>

        {/* Notification Bell with Badge */}
        <button
          type="button"
          aria-label="Notifications"
          onClick={() => setHasNotifications(false)}
          className="relative flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors cursor-pointer"
          title="Notifications"
        >
          <Bell className="h-4 w-4" />
          {hasNotifications && (
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white" />
          )}
        </button>

        {/* User Profile Dropdown */}
        <div ref={profileRef} className="relative">
          <button
            type="button"
            onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
            className="flex items-center gap-2.5 rounded-xl p-1 text-left transition-colors hover:bg-slate-50 cursor-pointer"
          >
            <Avatar className="h-8 w-8 rounded-full border border-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120"
                alt="Jazab Ahmed"
                width={32}
                height={32}
                unoptimized
                className="h-full w-full object-cover rounded-full"
              />
            </Avatar>
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-xs font-bold text-slate-800">
                Jazab Ahmed
              </span>
              <span className="text-[10px] text-slate-400">
                Freelancer &bull; PRO
              </span>
            </div>
            <ChevronDown className="h-3.5 w-3.5 text-slate-400 hidden sm:block" />
          </button>

          {/* Profile Menu Dropdown */}
          {isProfileMenuOpen && (
            <div className="absolute right-0 top-12 z-50 w-52 rounded-2xl border border-slate-200/90 bg-white p-1.5 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150 text-xs">
              <div className="border-b border-slate-100 px-3 py-2 sm:hidden">
                <p className="font-bold text-slate-900">Jazab Ahmed</p>
                <p className="text-[11px] text-slate-400">Freelancer &bull; PRO</p>
              </div>

              <Link
                href="/settings"
                onClick={() => setIsProfileMenuOpen(false)}
                className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <User className="h-3.5 w-3.5 text-slate-400" />
                <span>My Profile</span>
              </Link>

              <Link
                href="/settings"
                onClick={() => setIsProfileMenuOpen(false)}
                className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <Settings className="h-3.5 w-3.5 text-slate-400" />
                <span>Account Settings</span>
              </Link>

              <div className="my-1 border-t border-slate-100" />

              <Link
                href="/login"
                onClick={() => setIsProfileMenuOpen(false)}
                className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-rose-600 hover:bg-rose-50 transition-colors"
              >
                <LogOut className="h-3.5 w-3.5 text-rose-500" />
                <span>Log out</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
