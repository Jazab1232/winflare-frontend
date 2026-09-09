"use client";

import * as React from "react";
import Link from "next/link";
import {
  X,
  MoreHorizontal,
  Globe,
  Mail,
  Building2,
  Users,
  DollarSign,
  MapPin,
  Crown,
  Edit2,
  ExternalLink,
} from "lucide-react";
import { ClientItem } from "../types";
import { cn } from "@/lib/utils";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

interface ClientDetailsPanelProps {
  client: ClientItem | null;
  onClose: () => void;
}

export function ClientDetailsPanel({
  client,
  onClose,
}: ClientDetailsPanelProps) {
  const [activeTab, setActiveTab] = React.useState<
    "overview" | "contacts" | "projects" | "proposals" | "notes" | "activity"
  >("overview");

  if (!client) return null;

  const contacts = client.contacts || [
    {
      id: "c-1",
      name: "John Doe",
      role: "Founder & CEO",
      email: "john@vervelabs.com",
      avatarInitials: "JD",
      avatarBg: "bg-blue-100 text-blue-700",
      isPrimary: true,
    },
    {
      id: "c-2",
      name: "Sarah Miller",
      role: "Product Manager",
      email: "sarah@vervelabs.com",
      avatarInitials: "SM",
      avatarBg: "bg-purple-100 text-purple-700",
    },
    {
      id: "c-3",
      name: "Ali Khan",
      role: "CTO",
      email: "ali@vervelabs.com",
      avatarInitials: "AK",
      avatarBg: "bg-blue-100 text-blue-700",
    },
  ];

  const activeProjects = client.activeProjects || [
    {
      id: "p-1",
      title: "Website Redesign",
      status: "In Progress",
      value: 3000,
      startDate: "Started 2 weeks ago",
    },
    {
      id: "p-2",
      title: "Client Portal",
      status: "In Progress",
      value: 2500,
      startDate: "Started 1 week ago",
    },
  ];

  const proposalHistory = client.proposalHistory || [
    {
      id: "pr-3",
      title: "Proposal #3",
      status: "Won",
      value: 6000,
      date: "Apr 12, 2025",
    },
    {
      id: "pr-2",
      title: "Proposal #2",
      status: "Lost",
      value: 4500,
      date: "Feb 18, 2025",
    },
    {
      id: "pr-1",
      title: "Proposal #1",
      status: "Lost",
      value: 3000,
      date: "Jan 5, 2025",
    },
  ];

  const notes = client.notes || [
    {
      id: "n-1",
      text: "Client prefers weekly updates. Focus on clean UI and performance.",
      date: "Added 2 weeks ago",
    },
  ];

  return (
    <aside className="w-80 lg:w-[380px] xl:w-[420px] shrink-0 h-full flex flex-col rounded-2xl border border-slate-200/80 bg-white shadow-2xs overflow-hidden select-none">
      {/* 1. Header with Avatar + Name + Badges + Close button */}
      <div className="p-5 border-b border-slate-100 space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            {/* Dark Circle Avatar with Letter */}
            <div
              className={cn(
                "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white font-bold text-base shadow-2xs",
                client.avatarBg
              )}
            >
              {client.avatarLetter}
            </div>

            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-2">
                <h2 className="text-base font-bold text-slate-900 truncate">
                  {client.name}
                </h2>
                <span className="shrink-0 rounded-full bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                  {client.statusLabel}
                </span>
              </div>
              <span className="text-xs text-slate-400 truncate mt-0.5">
                {client.industry}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              type="button"
              className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <MoreHorizontal className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Action Links Row: Website | Email | LinkedIn | View in Pipeline */}
        <div className="flex items-center justify-between gap-2 pt-1">
          <div className="flex items-center gap-1.5 text-xs text-slate-600">
            <a
              href={`https://${client.website || "www.vervelabs.com"}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <Globe className="h-3.5 w-3.5 text-slate-400" />
              <span>Website</span>
            </a>
            <a
              href="mailto:contact@vervelabs.com"
              className="flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <Mail className="h-3.5 w-3.5 text-slate-400" />
              <span>Email</span>
            </a>
            <button
              type="button"
              className="flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <LinkedInIcon className="h-3.5 w-3.5 text-slate-400" />
              <span>LinkedIn</span>
            </button>
          </div>

          <Link
            href="/pipeline"
            className="flex items-center gap-1.5 rounded-xl bg-[#5B5AF7] hover:bg-[#4847E5] text-white px-3 py-1.5 text-xs font-semibold shadow-xs transition-all whitespace-nowrap"
          >
            <span>View in Pipeline</span>
          </Link>
        </div>
      </div>

      {/* 2. Sub-navigation Tabs matching screenshot */}
      <div className="flex items-center gap-4 px-5 border-b border-slate-100 bg-white text-xs overflow-x-auto custom-scrollbar shrink-0">
        {(["overview", "contacts", "projects", "proposals", "notes", "activity"] as const).map(
          (tab) => {
            const label =
              tab === "overview"
                ? "Overview"
                : tab === "contacts"
                ? "Contacts"
                : tab === "projects"
                ? "Projects"
                : tab === "proposals"
                ? "Proposals"
                : tab === "notes"
                ? "Notes"
                : "Activity";
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "pb-2.5 pt-2 font-medium border-b-2 transition-all cursor-pointer whitespace-nowrap",
                  isActive
                    ? "border-[#5B5AF7] text-[#5B5AF7] font-semibold"
                    : "border-transparent text-slate-500 hover:text-slate-800"
                )}
              >
                {label}
              </button>
            );
          }
        )}
      </div>

      {/* 3. Panel Content Area */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-5 space-y-6">
        {activeTab === "overview" && (
          <>
            {/* Company Details Section */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-slate-900">
                Company Details
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Left Attributes */}
                <div className="space-y-2.5 text-xs">
                  <div className="flex items-start gap-2">
                    <Building2 className="h-3.5 w-3.5 text-slate-400 mt-0.5 shrink-0" />
                    <div>
                      <span className="text-slate-400 text-[11px] block">Industry</span>
                      <span className="font-semibold text-slate-800">
                        {client.industry || "Software Development"}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Users className="h-3.5 w-3.5 text-slate-400 mt-0.5 shrink-0" />
                    <div>
                      <span className="text-slate-400 text-[11px] block">Company Size</span>
                      <span className="font-semibold text-slate-800">
                        {client.companySize || "11 – 50 employees"}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <DollarSign className="h-3.5 w-3.5 text-slate-400 mt-0.5 shrink-0" />
                    <div>
                      <span className="text-slate-400 text-[11px] block">Annual Revenue</span>
                      <span className="font-semibold text-slate-800">
                        {client.annualRevenue || "$1M – $5M"}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <MapPin className="h-3.5 w-3.5 text-slate-400 mt-0.5 shrink-0" />
                    <div>
                      <span className="text-slate-400 text-[11px] block">Location</span>
                      <span className="font-semibold text-slate-800">
                        {client.location || "Lahore, Pakistan"}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Globe className="h-3.5 w-3.5 text-slate-400 mt-0.5 shrink-0" />
                    <div>
                      <span className="text-slate-400 text-[11px] block">Website</span>
                      <a
                        href={`https://${client.website || "www.vervelabs.com"}`}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-[#5B5AF7] hover:underline"
                      >
                        {client.website || "www.vervelabs.com"}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right: Relationship Card */}
                <div className="rounded-xl border border-slate-200/80 bg-[#FAFBFF] p-3.5 space-y-2 flex flex-col justify-start">
                  <span className="text-xs font-bold text-slate-900 block">
                    Relationship
                  </span>

                  <div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 border border-amber-200/80 px-2 py-0.5 text-[10px] font-bold text-amber-700">
                      <Crown className="h-3 w-3 fill-amber-500 text-amber-500" />
                      <span>VIP</span>
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    {client.relationshipNotes || "High value client with long-term potential."}
                  </p>
                </div>
              </div>
            </div>

            {/* Key Contacts Section */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-slate-900">
                  Key Contacts
                </h3>
                <button
                  type="button"
                  onClick={() => setActiveTab("contacts")}
                  className="text-[11px] font-semibold text-[#5B5AF7] hover:underline"
                >
                  View all
                </button>
              </div>

              <div className="space-y-3 text-xs">
                {contacts.map((contact) => (
                  <div
                    key={contact.id}
                    className="flex items-center justify-between gap-2"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className={cn(
                          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-bold text-xs shadow-2xs",
                          contact.avatarBg || "bg-blue-100 text-blue-700"
                        )}
                      >
                        {contact.avatarInitials}
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="font-bold text-slate-900 truncate leading-tight">
                          {contact.name}
                        </span>
                        <span className="text-[11px] text-slate-400 truncate mt-0.5">
                          {contact.role}
                        </span>
                      </div>
                    </div>

                    <a
                      href={`mailto:${contact.email}`}
                      className="flex items-center gap-1 text-[11px] text-slate-500 hover:text-[#5B5AF7] truncate shrink-0"
                    >
                      <Mail className="h-3 w-3 text-slate-400" />
                      <span className="truncate">{contact.email}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Active Projects Section */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-slate-900">
                  Active Projects
                </h3>
                <button
                  type="button"
                  onClick={() => setActiveTab("projects")}
                  className="text-[11px] font-semibold text-[#5B5AF7] hover:underline"
                >
                  View all
                </button>
              </div>

              <div className="space-y-2.5 text-xs">
                {activeProjects.map((project) => (
                  <div
                    key={project.id}
                    className="flex items-center justify-between gap-2 rounded-xl border border-slate-200/80 bg-white p-3"
                  >
                    <div className="flex items-center gap-2">
                      <div className="p-1 rounded bg-[#EEF2FF] text-[#5B5AF7]">
                        <Building2 className="h-3.5 w-3.5" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900">
                          {project.title}
                        </span>
                        <span className="rounded-full bg-emerald-50 border border-emerald-200 px-2 py-0.2 text-[10px] font-semibold text-emerald-700">
                          {project.status}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-right">
                      <span className="font-bold text-slate-900">
                        ${project.value.toLocaleString()}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        {project.startDate}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Proposal History Section */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-slate-900">
                  Proposal History
                </h3>
                <button
                  type="button"
                  onClick={() => setActiveTab("proposals")}
                  className="text-[11px] font-semibold text-[#5B5AF7] hover:underline"
                >
                  View all
                </button>
              </div>

              <div className="space-y-2 text-xs">
                {proposalHistory.map((prop) => (
                  <div
                    key={prop.id}
                    className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900">
                        {prop.title}
                      </span>
                      <span
                        className={cn(
                          "rounded-full px-2 py-0.2 text-[10px] font-semibold",
                          prop.status === "Won"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : "bg-slate-100 text-slate-600 border border-slate-200"
                        )}
                      >
                        {prop.status}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-right">
                      <span className="font-bold text-slate-900">
                        ${prop.value.toLocaleString()}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        {prop.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Notes Section */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-slate-900">
                  Notes
                </h3>
                <button
                  type="button"
                  className="p-1 text-slate-400 hover:text-slate-700 rounded transition-colors cursor-pointer"
                >
                  <Edit2 className="h-3 w-3" />
                </button>
              </div>

              <div className="space-y-2">
                {notes.map((note) => (
                  <div
                    key={note.id}
                    className="rounded-xl border border-slate-200/80 bg-[#FAFBFF] p-3 text-xs space-y-1"
                  >
                    <p className="text-slate-700 leading-relaxed">
                      {note.text}
                    </p>
                    <span className="text-[10px] text-slate-400 block pt-0.5">
                      {note.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Other tabs content */}
        {activeTab === "contacts" && (
          <div className="space-y-3 text-xs">
            {contacts.map((c) => (
              <div key={c.id} className="p-3 rounded-xl border border-slate-200 space-y-1">
                <span className="font-bold text-slate-900 block">{c.name}</span>
                <span className="text-slate-500 block">{c.role}</span>
                <span className="text-[#5B5AF7] block">{c.email}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === "projects" && (
          <div className="space-y-3 text-xs">
            {activeProjects.map((p) => (
              <div key={p.id} className="p-3 rounded-xl border border-slate-200 space-y-1">
                <span className="font-bold text-slate-900 block">{p.title}</span>
                <span className="text-slate-500 block">${p.value.toLocaleString()} • {p.status}</span>
                <span className="text-slate-400 text-[11px] block">{p.startDate}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === "proposals" && (
          <div className="space-y-3 text-xs">
            {proposalHistory.map((pr) => (
              <div key={pr.id} className="p-3 rounded-xl border border-slate-200 flex justify-between items-center">
                <div>
                  <span className="font-bold text-slate-900 block">{pr.title}</span>
                  <span className="text-slate-400 text-[11px]">{pr.date}</span>
                </div>
                <span className="font-bold text-[#5B5AF7]">${pr.value.toLocaleString()}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === "notes" && (
          <div className="space-y-3 text-xs">
            {notes.map((n) => (
              <div key={n.id} className="p-3 rounded-xl border border-slate-200 space-y-1">
                <p className="text-slate-700">{n.text}</p>
                <span className="text-[10px] text-slate-400">{n.date}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === "activity" && (
          <div className="space-y-3 text-xs text-slate-600">
            <div className="border-b border-slate-100 pb-2">
              <span className="font-bold text-slate-900 block">Status Changed to Active</span>
              <span className="text-[10px] text-slate-400">2 weeks ago</span>
            </div>
            <div className="border-b border-slate-100 pb-2">
              <span className="font-bold text-slate-900 block">Proposal #3 Accepted ($6,000)</span>
              <span className="text-[10px] text-slate-400">Apr 12, 2025</span>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
