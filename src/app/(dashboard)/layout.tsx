import * as React from "react";
import { DashboardSidebar } from "@/features/dashboard/components/sidebar";
import { DashboardHeader } from "@/components/dashboard";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden w-full bg-[#FAFBFF] text-slate-900">
      {/* Persistent Left Navigation Sidebar */}
      <DashboardSidebar />

      {/* Main Content Area — fills remaining width, clips overflow */}
      <div className="flex flex-1 flex-col min-w-0 overflow-hidden bg-[#FAFBFF]">
        {/* Single Global Header for all dashboard pages */}
        <DashboardHeader />

        {/* Page Content Canvas */}
        <div className="flex-1 min-h-0 overflow-hidden flex flex-col bg-[#FAFBFF]">
          {children}
        </div>
      </div>
    </div>
  );
}
