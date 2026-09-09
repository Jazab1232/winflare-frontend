"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Target,
  Columns3,
  FileText,
  LayoutTemplate,
  FolderArchive,
  Users,
  Settings,
  LineChart,
  Briefcase,
} from "lucide-react";
import { cn } from "@/lib/utils";

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
        "sticky top-0 flex h-screen max-h-screen w-56 lg:w-60 shrink-0 flex-col justify-between overflow-y-auto custom-scrollbar border-r border-slate-200/80 bg-white p-4 select-none",
        className
      )}
    >
      {/* Top Part */}
      <div className="flex flex-col gap-6">
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

        {/* Main Navigation matching screenshot */}
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
          <NavItem
            label="Settings"
            icon={Settings}
            href="/settings"
            isActive={isActive("/settings")}
          />
        </nav>
      </div>

      {/* Bottom Area: Team Card matching reference screenshot */}
      <div className="pt-4 space-y-3">
        <div className="rounded-xl border border-slate-200/80 bg-white p-3 space-y-2.5 shadow-2xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
                <Users className="h-3.5 w-3.5" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block leading-tight">
                  Team
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">
                  3 members
                </span>
              </div>
            </div>
            <button
              type="button"
              className="text-slate-400 hover:text-slate-600 p-0.5 rounded cursor-pointer"
            >
              <span className="text-sm tracking-widest font-bold">•••</span>
            </button>
          </div>

          <div className="flex items-center gap-1.5 pt-0.5">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0F172A] text-white text-[10px] font-bold shadow-2xs">
              NT
            </div>
            <button
              type="button"
              className="flex h-6 w-6 items-center justify-center rounded-full border border-dashed border-slate-300 text-slate-500 hover:border-[#5B5AF7] hover:text-[#5B5AF7] text-xs font-bold transition-colors cursor-pointer"
              title="Add member"
            >
              +
            </button>
          </div>
        </div>

        <div className="text-[10px] text-slate-400 text-center">
          <span>Winflare OS v1.2</span>
        </div>
      </div>
    </aside>
  );
}
