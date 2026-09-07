import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?:
    | "default"
    | "secondary"
    | "outline"
    | "match"
    | "due-now"
    | "due-today"
    | "due-tomorrow"
    | "purple-soft"
    | "blue-soft"
    | "amber-soft"
    | "teal-soft"
    | "green-soft";
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  const variants = {
    default:
      "border-transparent bg-[#5B5AF7] text-white",
    secondary:
      "border-transparent bg-slate-100 text-slate-700",
    outline:
      "text-slate-700 border-slate-200",
    match:
      "border-emerald-200/60 bg-emerald-50 text-emerald-700 font-medium text-[11px]",
    "due-now":
      "border-rose-200/70 bg-rose-50 text-rose-600 font-medium text-[11px]",
    "due-today":
      "border-amber-200/70 bg-amber-50 text-amber-600 font-medium text-[11px]",
    "due-tomorrow":
      "border-slate-200 bg-slate-50 text-slate-500 font-medium text-[11px]",
    "purple-soft":
      "border-indigo-100 bg-indigo-50 text-indigo-700",
    "blue-soft":
      "border-blue-100 bg-blue-50 text-blue-700",
    "amber-soft":
      "border-amber-100 bg-amber-50 text-amber-700",
    "teal-soft":
      "border-teal-100 bg-teal-50 text-teal-700",
    "green-soft":
      "border-emerald-100 bg-emerald-50 text-emerald-700",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium transition-colors select-none",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

