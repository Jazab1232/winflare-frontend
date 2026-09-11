"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageHeaderProps {
  /** Page primary heading (e.g., "Clients", "Pipeline", "Proposals") */
  title: string;
  /** Optional subtitle or description */
  description?: string;
  /** Optional badge next to title (e.g. "Beta", item count, status pill) */
  badge?: React.ReactNode;
  /** Optional breadcrumbs trail */
  breadcrumbs?: BreadcrumbItem[];
  /** Primary action buttons on the right (e.g., "Add Client", "Export") */
  actions?: React.ReactNode;
  /** Secondary filter bar, tab controls, or search row */
  children?: React.ReactNode;
  className?: string;
}

export function PageHeader({
  title,
  description,
  badge,
  breadcrumbs,
  actions,
  children,
  className,
}: PageHeaderProps) {
  return (
    <div className={cn("flex flex-col gap-4 select-none pb-2", className)}>
      {/* Optional Breadcrumb Navigation */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-400">
          {breadcrumbs.map((crumb, idx) => {
            const isLast = idx === breadcrumbs.length - 1;
            return (
              <React.Fragment key={idx}>
                {crumb.href && !isLast ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-slate-700 transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className={cn(isLast ? "font-semibold text-slate-700" : "")}>
                    {crumb.label}
                  </span>
                )}
                {!isLast && <ChevronRight className="h-3 w-3 text-slate-300 shrink-0" />}
              </React.Fragment>
            );
          })}
        </nav>
      )}

      {/* Main Title & Actions Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5 flex-wrap">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              {title}
            </h1>
            {badge && <div>{badge}</div>}
          </div>
          {description && (
            <p className="text-xs text-slate-500 mt-1 max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Action Controls */}
        {actions && (
          <div className="flex items-center gap-2.5 shrink-0 flex-wrap">
            {actions}
          </div>
        )}
      </div>

      {/* Optional Sub-toolbar / Secondary Row (Filters, View Switchers, Tabs) */}
      {children && (
        <div className="pt-1">
          {children}
        </div>
      )}
    </div>
  );
}
