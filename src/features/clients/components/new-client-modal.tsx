"use client";

import * as React from "react";
import { X, Building2, User, Globe, DollarSign } from "lucide-react";
import { ClientItem } from "../types";

interface NewClientModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddClient: (client: ClientItem) => void;
}

export function NewClientModal({
  isOpen,
  onClose,
  onAddClient,
}: NewClientModalProps) {
  const [name, setName] = React.useState("");
  const [industry, setIndustry] = React.useState("Software Development");
  const [value, setValue] = React.useState("5000");
  const [status, setStatus] = React.useState<"active" | "on_hold" | "completed">("active");
  const [website, setWebsite] = React.useState("");
  const [contactName, setContactName] = React.useState("");
  const [contactRole, setContactRole] = React.useState("Founder & CEO");
  const [contactEmail, setContactEmail] = React.useState("");
  const [notes, setNotes] = React.useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const initials = name
      .split(" ")
      .map((w) => w[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

    const newClient: ClientItem = {
      id: `client-${Date.now()}`,
      name: name.trim(),
      industry: industry || "Technology",
      status: status,
      statusLabel: status === "active" ? "Active" : status === "on_hold" ? "On Hold" : "Completed",
      value: Number(value) || 0,
      projectsCount: 1,
      contactsCount: contactName ? 1 : 0,
      lastActivity: "Just now",
      avatarLetter: initials[0] || "C",
      avatarBg: "bg-[#0F172A]",
      website: website.trim() || undefined,
      companySize: "11 – 50 employees",
      annualRevenue: "$1M – $5M",
      location: "San Francisco, CA",
      relationshipNotes: notes || "High value client with long-term potential.",
      contacts: contactName
        ? [
            {
              id: `c-${Date.now()}`,
              name: contactName,
              role: contactRole,
              email: contactEmail || `contact@${name.toLowerCase().replace(/\s+/g, "")}.com`,
              avatarInitials: contactName
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2)
                .toUpperCase(),
              avatarBg: "bg-blue-100 text-blue-700",
              isPrimary: true,
            },
          ]
        : [],
      activeProjects: [
        {
          id: `p-${Date.now()}`,
          title: "Initial Onboarding Project",
          status: "In Progress",
          value: Number(value) || 0,
          startDate: "Started today",
        },
      ],
      proposalHistory: [],
      notes: notes
        ? [
            {
              id: `n-${Date.now()}`,
              text: notes,
              date: "Added today",
            },
          ]
        : [],
    };

    onAddClient(newClient);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4 animate-in fade-in duration-150">
      <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
          <div>
            <h2 className="text-base font-bold text-slate-900">Add New Client</h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Enter the client details to track relationships and opportunities.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto custom-scrollbar">
          <div>
            <label className="text-xs font-semibold text-slate-700 block mb-1">
              Company / Client Name *
            </label>
            <div className="relative">
              <Building2 className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Verve Labs"
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-9 pr-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-[#5B5AF7] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#5B5AF7]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Industry
              </label>
              <input
                type="text"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                placeholder="e.g. Software Development"
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-[#5B5AF7] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#5B5AF7]"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Status
              </label>
              <select
                value={status}
                onChange={(e) =>
                  setStatus(e.target.value as "active" | "on_hold" | "completed")
                }
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs text-slate-900 focus:border-[#5B5AF7] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#5B5AF7]"
              >
                <option value="active">Active</option>
                <option value="on_hold">On Hold</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Value ($ USD)
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                <input
                  type="number"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="5000"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-9 pr-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-[#5B5AF7] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#5B5AF7]"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Website
              </label>
              <div className="relative">
                <Globe className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="www.vervelabs.com"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-9 pr-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-[#5B5AF7] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#5B5AF7]"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-3">
            <span className="text-xs font-bold text-slate-900 block mb-2">
              Primary Contact (Optional)
            </span>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <input
                  type="text"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="Contact Name"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-[#5B5AF7] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#5B5AF7]"
                />
              </div>
              <div>
                <input
                  type="email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  placeholder="Contact Email"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-[#5B5AF7] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#5B5AF7]"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700 block mb-1">
              Relationship Notes
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="High value client with long-term potential..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-[#5B5AF7] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#5B5AF7]"
            />
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-xl bg-[#5B5AF7] px-4 py-2 text-xs font-semibold text-white hover:bg-[#4847E5] shadow-xs transition-colors"
            >
              Save Client
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
