import * as React from "react";
import { ProposalStageId } from "../types";
import { cn } from "@/lib/utils";

interface ProposalStatusBadgeProps {
  status: ProposalStageId;
  className?: string;
  dot?: boolean;
}

export function ProposalStatusBadge({
  status,
  className,
  dot = true,
}: ProposalStatusBadgeProps) {
  const config: Record<
    ProposalStageId,
    { label: string; bg: string; text: string; dotColor: string }
  > = {
    draft: {
      label: "Draft",
      bg: "bg-[#F3F4F6]",
      text: "text-[#6B7280]",
      dotColor: "bg-[#9CA3AF]",
    },
    review: {
      label: "Review",
      bg: "bg-[#FEF3C7]",
      text: "text-[#92400E]",
      dotColor: "bg-[#D97706]",
    },
    ready: {
      label: "Ready",
      bg: "bg-[#EDE9FE]",
      text: "text-[#6D28D9]",
      dotColor: "bg-[#7C3AED]",
    },
    sent: {
      label: "Sent",
      bg: "bg-[#DBEAFE]",
      text: "text-[#1D4ED8]",
      dotColor: "bg-[#2563EB]",
    },
    won: {
      label: "Won",
      bg: "bg-[#DCFCE7]",
      text: "text-[#15803D]",
      dotColor: "bg-[#16A34A]",
    },
    lost: {
      label: "Lost",
      bg: "bg-[#FEE2E2]",
      text: "text-[#B91C1C]",
      dotColor: "bg-[#DC2626]",
    },
  };

  const current = config[status] || config.draft;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wide select-none transition-colors",
        current.bg,
        current.text,
        className
      )}
    >
      {dot && (
        <span
          className={cn("h-1.5 w-1.5 rounded-full shrink-0", current.dotColor)}
        />
      )}
      <span>{current.label}</span>
    </span>
  );
}

