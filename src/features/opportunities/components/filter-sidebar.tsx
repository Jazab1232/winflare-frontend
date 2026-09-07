"use client";

import * as React from "react";
import { ChevronDown, ChevronUp, Search, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";

interface FilterSidebarProps {
  className?: string;
  selectedJobTypes: string[];
  onToggleJobType: (type: string) => void;
  selectedExperience: string[];
  onToggleExperience: (exp: string) => void;
  selectedSkills: string[];
  onToggleSkill: (skill: string) => void;
  selectedLocations: string[];
  onToggleLocation: (loc: string) => void;
  onClearAll: () => void;
}

export function FilterSidebar({
  className,
  selectedJobTypes,
  onToggleJobType,
  selectedExperience,
  onToggleExperience,
  selectedSkills,
  onToggleSkill,
  selectedLocations,
  onToggleLocation,
  onClearAll,
}: FilterSidebarProps) {
  const [techQuery, setTechQuery] = React.useState("");
  const [openSections, setOpenSections] = React.useState({
    jobType: true,
    experience: true,
    techStack: true,
    location: true,
    salary: true,
  });

  const toggleSection = (key: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const allTechs = ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind", "GraphQL", "Python"];
  const filteredTechs = allTechs.filter((t) =>
    t.toLowerCase().includes(techQuery.toLowerCase())
  );

  return (
    <div
      className={cn(
        "flex w-60 shrink-0 flex-col rounded-2xl border border-slate-200/80 bg-white p-4 select-none shadow-[0_1px_3px_rgba(0,0,0,0.02)]",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <h3 className="text-sm font-bold tracking-tight text-slate-900">
          Filters
        </h3>
        <button
          type="button"
          onClick={onClearAll}
          className="text-xs font-semibold text-[#5B5AF7] hover:underline cursor-pointer"
        >
          Clear all
        </button>
      </div>

      <div className="flex flex-col divide-y divide-slate-100 overflow-y-auto custom-scrollbar">
        {/* 1. Job Type */}
        <div className="py-3">
          <button
            type="button"
            onClick={() => toggleSection("jobType")}
            className="flex w-full items-center justify-between text-xs font-bold text-slate-900 cursor-pointer"
          >
            <span>Job Type</span>
            {openSections.jobType ? (
              <ChevronUp className="h-3.5 w-3.5 text-slate-400" />
            ) : (
              <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
            )}
          </button>

          {openSections.jobType && (
            <div className="mt-2.5 flex flex-col gap-2">
              {["Full-time", "Part-time", "Contract", "Freelance"].map((type) => {
                const isChecked = selectedJobTypes.includes(type);
                return (
                  <label
                    key={type}
                    className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer hover:text-slate-900"
                  >
                    <Checkbox
                      checked={isChecked}
                      onCheckedChange={() => onToggleJobType(type)}
                    />
                    <span>{type}</span>
                  </label>
                );
              })}
            </div>
          )}
        </div>

        {/* 2. Experience Level */}
        <div className="py-3">
          <button
            type="button"
            onClick={() => toggleSection("experience")}
            className="flex w-full items-center justify-between text-xs font-bold text-slate-900 cursor-pointer"
          >
            <span>Experience Level</span>
            {openSections.experience ? (
              <ChevronUp className="h-3.5 w-3.5 text-slate-400" />
            ) : (
              <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
            )}
          </button>

          {openSections.experience && (
            <div className="mt-2.5 flex flex-col gap-2">
              {[
                { label: "Entry (0–2 years)", value: "entry" },
                { label: "Mid (2–5 years)", value: "mid" },
                { label: "Senior (5+ years)", value: "senior" },
              ].map((item) => {
                const isChecked = selectedExperience.includes(item.value);
                return (
                  <label
                    key={item.value}
                    className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer hover:text-slate-900"
                  >
                    <Checkbox
                      checked={isChecked}
                      onCheckedChange={() => onToggleExperience(item.value)}
                    />
                    <span>{item.label}</span>
                  </label>
                );
              })}
            </div>
          )}
        </div>

        {/* 3. Tech Stack */}
        <div className="py-3">
          <button
            type="button"
            onClick={() => toggleSection("techStack")}
            className="flex w-full items-center justify-between text-xs font-bold text-slate-900 cursor-pointer"
          >
            <span>Tech Stack</span>
            {openSections.techStack ? (
              <ChevronUp className="h-3.5 w-3.5 text-slate-400" />
            ) : (
              <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
            )}
          </button>

          {openSections.techStack && (
            <div className="mt-2.5 flex flex-col gap-2">
              {/* Mini Search Bar */}
              <div className="relative flex items-center mb-1">
                <Search className="absolute left-2.5 h-3 w-3 text-slate-400" />
                <input
                  type="text"
                  value={techQuery}
                  onChange={(e) => setTechQuery(e.target.value)}
                  placeholder="Search technologies..."
                  className="h-7 w-full rounded-lg border border-slate-200/90 bg-slate-50/50 pl-7 pr-2 text-[11px] placeholder:text-slate-400 focus:border-[#5B5AF7] focus:outline-none focus:ring-1 focus:ring-[#5B5AF7]"
                />
              </div>

              {filteredTechs.slice(0, 5).map((tech) => {
                const isChecked = selectedSkills.includes(tech);
                return (
                  <label
                    key={tech}
                    className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer hover:text-slate-900"
                  >
                    <Checkbox
                      checked={isChecked}
                      onCheckedChange={() => onToggleSkill(tech)}
                    />
                    <span>{tech}</span>
                  </label>
                );
              })}

              <button
                type="button"
                className="flex items-center gap-1 text-[11px] font-semibold text-[#5B5AF7] hover:underline pt-0.5 cursor-pointer"
              >
                <Plus className="h-3 w-3" />
                <span>Show more</span>
              </button>
            </div>
          )}
        </div>

        {/* 4. Location */}
        <div className="py-3">
          <button
            type="button"
            onClick={() => toggleSection("location")}
            className="flex w-full items-center justify-between text-xs font-bold text-slate-900 cursor-pointer"
          >
            <span>Location</span>
            {openSections.location ? (
              <ChevronUp className="h-3.5 w-3.5 text-slate-400" />
            ) : (
              <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
            )}
          </button>

          {openSections.location && (
            <div className="mt-2.5 flex flex-col gap-2">
              {["Remote", "On-site", "Hybrid"].map((loc) => {
                const isChecked = selectedLocations.includes(loc);
                return (
                  <label
                    key={loc}
                    className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer hover:text-slate-900"
                  >
                    <Checkbox
                      checked={isChecked}
                      onCheckedChange={() => onToggleLocation(loc)}
                    />
                    <span>{loc}</span>
                  </label>
                );
              })}
            </div>
          )}
        </div>

        {/* 5. Salary Range */}
        <div className="py-3">
          <button
            type="button"
            onClick={() => toggleSection("salary")}
            className="flex w-full items-center justify-between text-xs font-bold text-slate-900 cursor-pointer"
          >
            <span>Salary Range</span>
            {openSections.salary ? (
              <ChevronUp className="h-3.5 w-3.5 text-slate-400" />
            ) : (
              <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
            )}
          </button>

          {openSections.salary && (
            <div className="mt-2.5">
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-xl border border-slate-200/90 bg-slate-50/50 px-3 py-1.5 text-xs text-slate-700 cursor-pointer hover:bg-slate-100"
              >
                <span>Any</span>
                <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
