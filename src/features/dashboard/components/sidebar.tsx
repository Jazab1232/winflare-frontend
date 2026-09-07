"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  CheckCircle2,
  FileText,
  Network,
  Building2,
  Contact2,
  BarChart2,
  Sparkles,
  LayoutTemplate,
  Settings,
  ChevronDown,
  MoreVertical,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar } from "@/components/ui/avatar";

interface NavItemProps {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href?: string;
  isActive?: boolean;
  badge?: string | number;
}

function NavItem({ label, icon: Icon, href = "#", isActive, badge }: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex items-center justify-between rounded-xl px-3 py-2 text-[13px] font-medium transition-all",
        isActive
          ? "bg-[#F0EEFF] text-[#5B5AF7] font-semibold"
          : "text-slate-600 hover:bg-slate-100/70 hover:text-slate-900"
      )}
    >
      <div className="flex items-center gap-3">
        <Icon
          className={cn(
            "h-4 w-4 shrink-0 transition-colors",
            isActive ? "text-[#5B5AF7]" : "text-slate-500 group-hover:text-slate-800"
          )}
        />
        <span>{label}</span>
      </div>
      {badge !== undefined && (
        <span
          className={cn(
            "flex h-5 min-w-[20px] items-center justify-center rounded-full px-1.5 text-[11px] font-semibold",
            isActive
              ? "bg-[#5B5AF7] text-white"
              : "bg-slate-100 text-slate-600 group-hover:bg-slate-200"
          )}
        >
          {badge}
        </span>
      )}
    </Link>
  );
}

export function DashboardSidebar({ className }: { className?: string }) {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + "/");

  return (
    <aside
      className={cn(
        "sticky top-0 flex h-screen max-h-screen w-60 shrink-0 flex-col justify-between overflow-y-auto custom-scrollbar border-r border-slate-200/80 bg-white p-4 select-none",
        className
      )}
    >
      {/* Top Part */}
      <div className="flex flex-col gap-6">
        {/* Brand Logo */}
        <Link href="/dashboard" className="flex items-center gap-2.5 px-2 pt-1">
          <img src="/fav-icon.svg" alt="Winflare" className="h-6 w-6 object-contain" />
          <span className="text-lg font-bold tracking-tight text-slate-900">
            Winflare
          </span>
        </Link>

        {/* Main Navigation */}
        <nav className="flex flex-col gap-1">
          <NavItem
            label="Dashboard"
            icon={LayoutGrid}
            href="/dashboard"
            isActive={isActive("/dashboard")}
          />
          <NavItem
            label="Opportunities"
            icon={CheckCircle2}
            href="/opportunities"
            isActive={isActive("/opportunities")}
            badge={24}
          />
          <NavItem
            label="Proposals"
            icon={FileText}
            href="/proposals"
            isActive={isActive("/proposals")}
            badge={8}
          />
          <NavItem
            label="Pipeline"
            icon={Network}
            href="/pipeline"
            isActive={isActive("/pipeline")}
          />
          <NavItem
            label="Companies"
            icon={Building2}
            href="/companies"
            isActive={isActive("/companies")}
          />
          <NavItem
            label="Contacts"
            icon={Contact2}
            href="/contacts"
            isActive={isActive("/contacts")}
          />
          <NavItem
            label="Analytics"
            icon={BarChart2}
            href="/analytics"
            isActive={isActive("/analytics")}
          />
        </nav>

        {/* Tools Section */}
        <div className="flex flex-col gap-1 pt-1">
          <div className="px-3 text-[11px] font-medium text-slate-400">
            Tools
          </div>
          <NavItem
            label="AI Assistant"
            icon={Sparkles}
            href="/ai-assistant"
            isActive={isActive("/ai-assistant")}
          />
          <NavItem
            label="Templates"
            icon={LayoutTemplate}
            href="/templates"
            isActive={isActive("/templates")}
          />
        </div>
      </div>

      {/* Bottom Part */}
      <div className="flex flex-col gap-3 pt-6">
        {/* Settings */}
        <NavItem
          label="Settings"
          icon={Settings}
          href="/settings"
          isActive={isActive("/settings")}
        />

        {/* Workspace Switcher */}
        <button
          type="button"
          className="flex w-full items-center justify-between rounded-xl border border-slate-200/70 bg-slate-50/60 p-2.5 text-left transition-colors hover:bg-slate-100/60 cursor-pointer"
        >
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[#7769FA] to-[#5B5AF7] text-white shadow-xs">
              <span className="text-[11px] font-bold">W</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xs font-semibold text-slate-800">
                My Workspace
              </span>
              <span className="text-[11px] text-slate-400">Personal</span>
            </div>
          </div>
          <ChevronDown className="h-4 w-4 text-slate-400" />
        </button>

        {/* User Profile Bar */}
        <div className="flex items-center justify-between rounded-xl p-1.5 pt-2">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <Avatar className="h-8 w-8 rounded-full border border-slate-200 ring-2 ring-slate-100">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120"
                alt="Jazab Ahmed"
                className="h-full w-full object-cover"
              />
            </Avatar>
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-semibold text-slate-900 truncate">
                Jazab Ahmed
              </span>
              <span className="text-[11px] text-slate-400 truncate">
                jazab@winflare.com
              </span>
            </div>
          </div>
          <button
            type="button"
            className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
          >
            <MoreVertical className="h-4 w-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
