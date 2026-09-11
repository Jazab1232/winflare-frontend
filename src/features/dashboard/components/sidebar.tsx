"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Home,
  Target,
  Columns3,
  FileText,
  Users,
  Settings,
  LineChart,
  Briefcase,
  LogOut,
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
          ? "bg-[#EEF2FF] text-[#5B5AF7] font-semibold"
          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
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

  const isActive = (path: string) => {
    if (path === "/dashboard") return pathname === "/dashboard";
    return pathname === path || pathname.startsWith(path + "/");
  };

  return (
    <aside
      className={cn(
        "sticky top-0 flex h-screen max-h-screen w-56 lg:w-60 shrink-0 flex-col justify-between border-r border-slate-200/80 bg-white select-none",
        className
      )}
    >
      {/* Top Part: Logo & Scrollable Main Navigation */}
      <div className="flex flex-col flex-1 min-h-0 overflow-y-auto custom-scrollbar p-4 gap-6">
        {/* Brand Logo matching screenshot: purple W icon + Winflare text */}
        <Link href="/dashboard" className="flex items-center gap-2.5 px-2 pt-1">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#5B5AF7] text-white shadow-xs font-black text-sm">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="m3 7 4 10 5-8 5 8 4-10" />
            </svg>
          </div>
          <span className="text-lg font-bold tracking-tight text-slate-900">
            Winflare
          </span>
        </Link>

        {/* Main Navigation */}
        <nav className="flex flex-col gap-1">
          <NavItem
            label="Home"
            icon={Home}
            href="/dashboard"
            isActive={isActive("/dashboard")}
          />
          <NavItem
            label="Opportunities"
            icon={Target}
            href="/opportunities"
            isActive={isActive("/opportunities")}
          />
          <NavItem
            label="Pipeline"
            icon={Columns3}
            href="/pipeline"
            isActive={isActive("/pipeline")}
          />
          <NavItem
            label="Proposals"
            icon={FileText}
            href="/proposals"
            isActive={isActive("/proposals")}
          />
          <NavItem
            label="Portfolio"
            icon={Briefcase}
            href="/portfolio"
            isActive={isActive("/portfolio")}
          />
          <NavItem
            label="Clients"
            icon={Users}
            href="/clients"
            isActive={isActive("/clients")}
          />
          <NavItem
            label="Analytics"
            icon={LineChart}
            href="/analytics"
            isActive={isActive("/analytics")}
          />
        </nav>
      </div>

      {/* Bottom Area: STUCK AT BOTTOM */}
      <div className="shrink-0 p-3 mx-2 mb-2 border-t border-slate-100 flex flex-col gap-1.5 bg-white">
        {/* 1. Logged-in User's Badge & Name Card */}
        <Link
          href="/settings"
          className="flex items-center justify-between p-2 rounded-xl bg-slate-50/70 border border-slate-100 hover:bg-slate-100/70 transition-all cursor-pointer group"
          title="Account Settings"
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="relative shrink-0">
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
              <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-white" />
            </div>
            <div className="flex flex-col min-w-0 leading-tight">
              <span className="text-xs font-bold text-slate-800 truncate group-hover:text-[#5B5AF7] transition-colors">
                Jazab Ahmed
              </span>
              <span className="text-[10px] text-slate-400 truncate">
                Freelancer
              </span>
            </div>
          </div>
          <span className="text-[9px] font-semibold text-[#5B5AF7] bg-white border border-indigo-100/80 px-1.5 py-0.5 rounded-md shrink-0 shadow-2xs">
            PRO
          </span>
        </Link>

        {/* 2. Settings Link (below badge and name card) */}
        <NavItem
          label="Settings"
          icon={Settings}
          href="/settings"
          isActive={isActive("/settings")}
        />

        {/* 3. Logout Link (below settings) */}
        <Link
          href="/login"
          className="group relative flex items-center justify-between rounded-xl px-3 py-2 text-[13px] font-medium transition-all text-slate-600 hover:bg-rose-50/70 hover:text-rose-600 cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <LogOut className="h-4 w-4 shrink-0 text-slate-500 group-hover:text-rose-600 transition-colors" />
            <span>Log out</span>
          </div>
        </Link>
      </div>
    </aside>
  );
}
