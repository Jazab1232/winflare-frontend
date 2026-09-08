"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Target,
  Workflow,
  FileText,
  Users,
  Sparkles,
  BarChart2,
  Settings,
  ChevronDown,
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
          ? "bg-[#F5F3FF] text-[#7C3AED] font-semibold"
          : "text-[#6B7280] hover:bg-[#F5F5F7] hover:text-[#111827]"
      )}
    >
      <div className="flex items-center gap-3">
        <Icon
          className={cn(
            "h-4 w-4 shrink-0 transition-colors",
            isActive ? "text-[#7C3AED]" : "text-[#6B7280] group-hover:text-[#111827]"
          )}
        />
        <span>{label}</span>
      </div>
      {badge !== undefined && (
        <span
          className={cn(
            "flex h-5 min-w-[20px] items-center justify-center rounded-full px-1.5 text-[11px] font-semibold",
            isActive
              ? "bg-[#7C3AED] text-white"
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
            icon={Workflow}
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
            label="Clients"
            icon={Users}
            href="/clients"
            isActive={isActive("/clients")}
          />
          <NavItem
            label="Automation"
            icon={Sparkles}
            href="/automation"
            isActive={isActive("/automation")}
          />
          <NavItem
            label="Analytics"
            icon={BarChart2}
            href="/analytics"
            isActive={isActive("/analytics")}
          />
        </nav>
      </div>

      {/* Bottom Part */}
      <div className="flex flex-col gap-2 pt-6">
        {/* Settings */}
        <NavItem
          label="Settings"
          icon={Settings}
          href="/settings"
          isActive={isActive("/settings")}
        />

        {/* User Profile Bar */}
        <div className="flex items-center justify-between rounded-xl p-2 transition-colors hover:bg-slate-50 cursor-pointer">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white font-bold text-xs">
              NT
            </div>
            <div className="flex flex-col min-w-0 leading-tight">
              <span className="text-xs font-bold text-slate-900 truncate">
                Naveed Tahir
              </span>
              <span className="text-[11px] text-slate-400 truncate">
                Free Plan
              </span>
            </div>
          </div>
          <ChevronDown className="h-4 w-4 text-slate-400 shrink-0" />
        </div>
      </div>
    </aside>
  );
}
