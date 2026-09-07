import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "outline"
    | "ghost"
    | "secondary"
    | "link"
    | "soft"
    | "pill";
  size?: "default" | "sm" | "lg" | "icon" | "pill-sm";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50 disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none";

    const variants = {
      default:
        "bg-[#5B5AF7] text-white shadow-xs hover:bg-[#4847E5] active:scale-[0.98]",
      outline:
        "border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 shadow-xs",
      ghost:
        "hover:bg-slate-100 hover:text-slate-900 text-slate-600",
      secondary:
        "bg-slate-100 text-slate-900 hover:bg-slate-200/80",
      link:
        "text-[#5B5AF7] underline-offset-4 hover:underline p-0 h-auto",
      soft:
        "bg-indigo-50 text-[#5B5AF7] hover:bg-indigo-100/80 font-medium",
      pill:
        "rounded-full bg-[#5B5AF7] text-white shadow-xs hover:bg-[#4847E5] active:scale-[0.98]",
    };

    const sizes = {
      default: "h-9 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-10 rounded-md px-6",
      icon: "h-8 w-8 rounded-md p-0",
      "pill-sm": "h-7 rounded-full px-3 text-xs",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

