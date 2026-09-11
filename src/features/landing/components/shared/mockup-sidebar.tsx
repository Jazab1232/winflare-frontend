import React from 'react';
import {
  LayoutDashboard,
  Compass,
  UserCheck,
  GitPullRequest,
  FileText,
  Users,
  CalendarDays,
  BarChart2,
  Layers,
  Settings,
  ShieldCheck,
  Columns3,
  MessageSquare,
  Calendar,
  ChevronDown,
} from 'lucide-react';
import { WinflareLogo } from '../navbar';

interface MockupSidebarProps {
  variant?: 'full' | 'mini';
  activeItem?: string;
  showUserProfile?: boolean;
  className?: string;
}

export function MockupSidebar({
  variant = 'full',
  activeItem = 'dashboard',
  showUserProfile = true,
  className = '',
}: MockupSidebarProps) {
  if (variant === 'mini') {
    return (
      <div
        className={`hidden sm:flex flex-col justify-between w-[135px] border-r border-slate-100 bg-[#FAFBFD] p-3 shrink-0 ${className}`}
      >
        <div>
          {/* Winflare Logo */}
          <div className="flex items-center gap-1.5 pb-3.5 border-b border-slate-100">
            <div className="flex h-5 w-5 items-center justify-center rounded bg-[#5B5AF7] text-white font-black text-[10px]">
              W
            </div>
            <span className="text-xs font-bold tracking-tight text-[#0F172A]">
              winflare
            </span>
          </div>

          {/* Nav Items */}
          <nav className="mt-3 space-y-1">
            <div
              className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-[11px] ${
                activeItem === 'dashboard'
                  ? 'bg-[#EEF2FF] font-semibold text-[#5B5AF7]'
                  : 'font-medium text-slate-500 hover:text-slate-900'
              }`}
            >
              <LayoutDashboard className="h-3.5 w-3.5 shrink-0" />
              <span>Dashboard</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg px-2 py-1 text-[11px] font-medium text-slate-500 hover:text-slate-900">
              <Compass className="h-3.5 w-3.5 shrink-0" />
              <span>Discovery</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg px-2 py-1 text-[11px] font-medium text-slate-500 hover:text-slate-900">
              <ShieldCheck className="h-3.5 w-3.5 shrink-0" />
              <span>Qualification</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg px-2 py-1 text-[11px] font-medium text-slate-500 hover:text-slate-900">
              <FileText className="h-3.5 w-3.5 shrink-0" />
              <span>Proposals</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg px-2 py-1 text-[11px] font-medium text-slate-500 hover:text-slate-900">
              <Columns3 className="h-3.5 w-3.5 shrink-0" />
              <span>Pipeline</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg px-2 py-1 text-[11px] font-medium text-slate-500 hover:text-slate-900">
              <MessageSquare className="h-3.5 w-3.5 shrink-0" />
              <span>Messages</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg px-2 py-1 text-[11px] font-medium text-slate-500 hover:text-slate-900">
              <Calendar className="h-3.5 w-3.5 shrink-0" />
              <span>Calendar</span>
            </div>
          </nav>
        </div>

        <div className="pt-2 border-t border-slate-100">
          <div className="flex items-center gap-2 rounded-lg px-2 py-1 text-[11px] font-medium text-slate-500">
            <Settings className="h-3.5 w-3.5 shrink-0" />
            <span>Settings</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`hidden sm:flex w-44 shrink-0 flex-col justify-between border-r border-[#F1F5F9] pr-3 text-left ${className}`}
    >
      <div className="space-y-4">
        {/* Brand header */}
        <div className="flex items-center gap-2 px-2 py-1">
          <WinflareLogo className="h-5 w-5" />
          <span className="text-base font-bold text-[#0F172A]">winflare</span>
        </div>

        {/* Navigation Links */}
        <div className="space-y-1 text-xs font-medium">
          <div className="relative flex items-center gap-2.5 rounded-xl bg-[#F0EFFF] px-3 py-2 text-[#5B5AF7] font-semibold">
            <div className="absolute left-0 h-4 w-1 rounded-r-full bg-[#5B5AF7]" />
            <LayoutDashboard className="h-4 w-4" />
            <span>Dashboard</span>
          </div>
          <div className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-[#64748B] hover:bg-[#F8FAFC]">
            <Compass className="h-4 w-4" />
            <span>Opportunities</span>
          </div>
          <div className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-[#64748B] hover:bg-[#F8FAFC]">
            <UserCheck className="h-4 w-4" />
            <span>Prospects</span>
          </div>
          <div className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-[#64748B] hover:bg-[#F8FAFC]">
            <GitPullRequest className="h-4 w-4" />
            <span>Pipeline</span>
          </div>
          <div className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-[#64748B] hover:bg-[#F8FAFC]">
            <FileText className="h-4 w-4" />
            <span>Proposals</span>
          </div>
          <div className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-[#64748B] hover:bg-[#F8FAFC]">
            <Users className="h-4 w-4" />
            <span>Clients</span>
          </div>
          <div className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-[#64748B] hover:bg-[#F8FAFC]">
            <CalendarDays className="h-4 w-4" />
            <span>Calendar</span>
          </div>
          <div className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-[#64748B] hover:bg-[#F8FAFC]">
            <BarChart2 className="h-4 w-4" />
            <span>Analytics</span>
          </div>
          <div className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-[#64748B] hover:bg-[#F8FAFC]">
            <Layers className="h-4 w-4" />
            <span>Templates</span>
          </div>
          <div className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-[#64748B] hover:bg-[#F8FAFC]">
            <Settings className="h-4 w-4" />
            <span>Settings</span>
          </div>
        </div>
      </div>

      {/* User Profile Info */}
      {showUserProfile && (
        <div className="flex items-center justify-between rounded-xl border border-[#F1F5F9] bg-[#F8FAFC] p-2 mt-4">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-[#5B5AF7] to-[#8B7FFF] flex items-center justify-center text-[11px] font-bold text-white shadow-sm">
              JA
            </div>
            <div>
              <div className="text-[11px] font-bold text-[#0F172A] leading-tight">
                Jazab Ali
              </div>
              <div className="text-[9px] text-[#64748B]">Founder</div>
            </div>
          </div>
          <ChevronDown className="h-3.5 w-3.5 text-[#64748B]" />
        </div>
      )}
    </div>
  );
}
