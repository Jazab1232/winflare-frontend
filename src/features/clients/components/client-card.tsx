"use client";

import * as React from "react";
import { User, Clock, ArrowRight } from "lucide-react";
import { ClientItem } from "../types";
import { cn } from "@/lib/utils";

interface ClientCardProps {
  client: ClientItem;
  isSelected?: boolean;
  onSelect: (client: ClientItem) => void;
}

export function ClientCard({
  client,
  isSelected = false,
  onSelect,
}: ClientCardProps) {
  const statusColors = {
    active: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
    on_hold: "bg-amber-50 text-amber-700 border-amber-200/80",
    completed: "bg-slate-100 text-slate-700 border-slate-200/80",
    archived: "bg-slate-100 text-slate-500 border-slate-200/80",
  };

  return (
    <div
      onClick={() => onSelect(client)}
      className={cn(
        "flex flex-col justify-between rounded-2xl bg-white p-5 shadow-2xs transition-all cursor-pointer select-none",
        isSelected
          ? "border-2 border-[#5B5AF7] shadow-xs"
          : "border border-slate-200/80 hover:border-slate-300 hover:shadow-xs"
      )}
    >
      {/* Top Row: Avatar + Title & Industry + Status Badge */}
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            {/* Circle Avatar with Letter */}
            <div
              className={cn(
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white font-bold text-sm shadow-2xs",
                client.avatarBg
              )}
            >
              {client.avatarLetter}
            </div>

            <div className="flex flex-col min-w-0">
              <h3 className="text-sm font-bold text-slate-900 truncate leading-tight">
                {client.name}
              </h3>
              <span className="text-[11px] text-slate-400 truncate mt-0.5">
                {client.industry}
              </span>
            </div>
          </div>

          {/* Status Badge */}
          <span
            className={cn(
              "shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold",
              statusColors[client.status] || statusColors.active
            )}
          >
            {client.statusLabel}
          </span>
        </div>

        {/* Value & Projects */}
        <div className="flex items-center gap-2 text-xs">
          <span className="font-bold text-slate-900">
            ${client.value.toLocaleString()}
          </span>
          <span className="text-slate-300">•</span>
          <span className="text-slate-500 font-medium">
            {client.projectsCount} {client.projectsCount === 1 ? "project" : "projects"}
          </span>
        </div>

        {/* Metadata: Contacts & Last activity */}
        <div className="space-y-1.5 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <User className="h-3.5 w-3.5 text-slate-400 shrink-0" />
            <span>
              {client.contactsCount} {client.contactsCount === 1 ? "contact" : "contacts"}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <Clock className="h-3.5 w-3.5 text-slate-400 shrink-0" />
            <span>{client.lastActivity}</span>
          </div>
        </div>
      </div>

      {/* Bottom Link: View details → */}
      <div className="pt-4 mt-3 border-t border-slate-100">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(client);
          }}
          className="inline-flex items-center gap-1 text-xs font-semibold text-[#5B5AF7] hover:underline cursor-pointer"
        >
          <span>View details</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
