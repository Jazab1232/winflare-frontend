"use client";

import * as React from "react";
import {
  Sparkles,
  X,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Scissors,
  Briefcase,
  TrendingUp,
  DollarSign,
  FileCheck,
  ChevronRight,
  Hexagon,
} from "lucide-react";
import { ProposalCardItem, AiChatMessage } from "../../types";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface AiProposalAssistantProps {
  proposal: ProposalCardItem;
  onUpdateSection: (sectionId: string, newContent: string) => void;
  onOpenReviewModal: () => void;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

export function AiProposalAssistant({
  proposal,
  onUpdateSection,
  onOpenReviewModal,
  isCollapsed = false,
  onToggleCollapse,
}: AiProposalAssistantProps) {
  const [messages, setMessages] = React.useState<AiChatMessage[]>([
    {
      id: "m-welcome",
      role: "assistant",
      content:
        "How would you like me to help with your proposal? You can also ask me anything specific, like 'Improve the pricing section' or 'Make the introduction more persuasive'.",
      timestamp: "Just now",
    },
  ]);
  const [inputValue, setInputValue] = React.useState("");
  const [isTyping, setIsTyping] = React.useState(false);

  const quickActions = [
    { label: "Improve proposal", id: "improve", icon: Hexagon },
    { label: "Make shorter", id: "shorter", icon: Scissors },
    { label: "Make more persuasive", id: "persuasive", icon: Sparkles },
    { label: "Make more professional", id: "professional", icon: Briefcase },
    { label: "Improve pricing", id: "pricing", icon: DollarSign },
    { label: "Strengthen closing", id: "closing", icon: FileCheck },
  ];

  const handleAction = (actionId: string, customPrompt?: string) => {
    const userPrompt =
      customPrompt ||
      quickActions.find((a) => a.id === actionId)?.label ||
      "Improve proposal";

    const userMsg: AiChatMessage = {
      id: "u-" + Date.now(),
      role: "user",
      content: userPrompt,
      timestamp: "Just now",
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      let targetSection = "sec-intro";
      let updatedText = "";
      let aiResponse = "";

      if (actionId === "shorter") {
        targetSection = "sec-intro";
        updatedText = `Hi John,\n\nThanks for reaching out regarding Acme Corporation's website redesign. We specialize in building fast, high-converting Next.js websites that drive demo signups.\n\nHere is our tailored proposal covering scope, timeline, and investment.`;
        aiResponse = "I shortened the introduction by 40% to deliver a direct, high-impact hook.";
      } else if (actionId === "persuasive") {
        targetSection = "sec-needs";
        updatedText = `Acme Corporation has high momentum, but outdated frontend architecture is throttling conversion rates.\n\nBy modernizing to an ultra-fast Next.js platform with tailored SEO and seamless CMS workflows, you can expect an estimated 25–35% increase in trial signups and lower customer acquisition costs.`;
        aiResponse = "Enhanced 'Understanding Your Needs' with compelling commercial ROI and conversion metrics.";
      } else if (actionId === "pricing") {
        targetSection = "sec-pricing";
        updatedText = `Investment Schedule (Tied to Verifiable Deliverables):\n• Phase 1 (30%): Architecture blueprint, design system & Figma signoff\n• Phase 2 (40%): Core frontend development & CMS integration\n• Phase 3 (30%): Performance optimization, SEO audit & domain cutover\n\n*Complimentary 30-day post-launch warranty included.`;
        aiResponse = "Restructured the pricing and payment schedule into safe, milestone-backed installments.";
      } else if (actionId === "closing") {
        targetSection = "sec-closing";
        updatedText = `We are ready to kick off this project next Monday. Let's schedule a brief 15-minute alignment call to lock in the kickoff schedule and introduce our engineering team.\n\nLooking forward to partnering with you,\nThe Winflare Team`;
        aiResponse = "Strengthened the closing with a clear, low-friction next step.";
      } else {
        targetSection = "sec-solution";
        updatedText = `We propose an enterprise-grade Next.js 16 architecture tailored for Acme Corporation:\n\n✓ Bespoke, high-converting UI components aligned with your brand\n✓ Headless CMS integration for effortless content updates\n✓ Sub-second page loads optimizing organic SEO and Google Core Web Vitals\n✓ Fully responsive and accessible design across desktop and mobile\n✓ PostHog and Google Analytics conversion funnel integration`;
        aiResponse = `I improved the proposal structure to highlight scalability and performance.`;
      }

      onUpdateSection(targetSection, updatedText);
      toast.success("AI updated proposal in editor!");

      setMessages((prev) => [
        ...prev,
        {
          id: "ai-" + Date.now(),
          role: "assistant",
          content: aiResponse,
          timestamp: "Just now",
        },
      ]);
      setIsTyping(false);
    }, 650);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isTyping) return;
    handleAction("custom", inputValue);
  };

  if (isCollapsed) {
    return (
      <div className="flex flex-col items-center py-4 px-2 border-l border-slate-200 bg-white select-none">
        <button
          type="button"
          onClick={onToggleCollapse}
          className="p-1.5 rounded-lg text-[#7C3AED] hover:bg-[#F5F3FF] transition-colors cursor-pointer"
          title="Expand Winflare AI"
        >
          <Sparkles className="h-4 w-4" />
        </button>
      </div>
    );
  }

  const checklistItems = [
    { label: "Client personalized", isChecked: true },
    { label: "Requirements addressed", isChecked: true },
    { label: "Timeline included", isChecked: true },
    { label: "Pricing included", isChecked: true },
    { label: "Relevant portfolio included", isChecked: true },
    { label: "CTA could be stronger", isChecked: false, isWarning: true },
  ];

  return (
    <aside className="w-80 lg:w-96 shrink-0 border-l border-slate-200 bg-white flex flex-col h-full overflow-hidden select-none text-xs">
      {/* Top Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-[#7C3AED]" />
          <h2 className="text-xs font-bold text-slate-900 tracking-tight">
            Winflare AI
          </h2>
        </div>
        {onToggleCollapse && (
          <button
            type="button"
            onClick={onToggleCollapse}
            className="rounded p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            title="Close Assistant"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      <div className="p-5 flex-1 overflow-y-auto custom-scrollbar space-y-5">
        {/* Subtitle intro */}
        <div>
          <h3 className="text-xs font-bold text-slate-900">
            Proposal Assistant
          </h3>
          <p className="text-[11px] text-slate-500 mt-0.5">
            Get help writing, improving and optimizing your proposal.
          </p>
        </div>

        {/* Status Pill: Analyzing... */}
        <div className="flex items-center gap-2 rounded-xl bg-[#F8F8FA] border border-slate-200/80 px-3 py-2 text-[11px] text-slate-700">
          <Loader2 className="h-3.5 w-3.5 text-[#7C3AED] animate-spin shrink-0" />
          <span className="truncate">
            Analyzing: <strong className="text-slate-900">{proposal.title || "Acme Website Redesign"}</strong>
          </span>
        </div>

        {/* Quick Actions Grid (2 columns matching screenshot) */}
        <div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
            Quick Actions
          </span>
          <div className="grid grid-cols-2 gap-2">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <button
                  key={action.id}
                  type="button"
                  onClick={() => handleAction(action.id)}
                  disabled={isTyping}
                  className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-2.5 text-left text-[11px] font-medium text-slate-700 hover:border-[#DDD6FE] hover:bg-[#F5F3FF] hover:text-[#7C3AED] transition-all cursor-pointer shadow-2xs group"
                >
                  <Icon className="h-3.5 w-3.5 text-[#7C3AED] shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="truncate leading-tight">{action.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* AI Assistant Chat Bubble */}
        <div className="space-y-3 pt-1">
          {messages.map((msg) => {
            const isAi = msg.role === "assistant";
            return (
              <div
                key={msg.id}
                className={cn(
                  "rounded-2xl p-3.5 space-y-1.5 leading-relaxed text-xs",
                  isAi
                    ? "bg-[#F5F3FF] border border-[#DDD6FE] text-slate-800"
                    : "bg-[#7C3AED] text-white"
                )}
              >
                {isAi && (
                  <div className="flex items-center gap-1.5 font-bold text-[#7C3AED] text-[11px]">
                    <Sparkles className="h-3 w-3" />
                    <span>Winflare AI</span>
                  </div>
                )}
                <p className="text-[11px] whitespace-pre-line leading-relaxed">
                  {msg.content}
                </p>
              </div>
            );
          })}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs text-slate-400 animate-pulse pl-1">
              <Sparkles className="h-3.5 w-3.5 text-[#7C3AED]" />
              <span>Winflare AI is thinking...</span>
            </div>
          )}
        </div>

        {/* Chat Input Field */}
        <div>
          <form onSubmit={handleFormSubmit} className="relative flex items-center">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isTyping}
              placeholder="Ask anything..."
              className="h-10 w-full rounded-xl border border-slate-200 bg-white pl-3.5 pr-11 text-xs text-slate-800 placeholder:text-slate-400 focus:border-[#7C3AED] focus:outline-none focus:ring-1 focus:ring-[#7C3AED]"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              className="absolute right-1.5 flex h-7 w-7 items-center justify-center rounded-lg bg-[#7C3AED] text-white hover:bg-[#6D28D9] transition-all disabled:opacity-40 cursor-pointer shadow-2xs"
            >
              <Send className="h-3.5 w-3.5" />
            </button>
          </form>
          <div className="flex items-center gap-1.5 text-[10px] text-slate-400 pt-1.5 pl-1">
            <Sparkles className="h-2.5 w-2.5 text-[#7C3AED]" />
            <span>Powered by Winflare AI</span>
          </div>
        </div>

        {/* Proposal Readiness Card (Matching the 92% checklist in user image) */}
        <div className="rounded-2xl border border-slate-200/80 bg-white p-4 space-y-3 shadow-2xs">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-slate-900">
              Proposal Readiness
            </h4>
            <span className="text-xs font-bold text-slate-900">92%</span>
          </div>

          {/* Progress Bar */}
          <div className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#7C3AED] to-[#A855F7]"
              style={{ width: "92%" }}
            />
          </div>

          {/* Readiness Checklist */}
          <div className="space-y-1.5 pt-1 text-[11px]">
            {checklistItems.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {item.isChecked ? (
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  ) : (
                    <AlertCircle className="h-3.5 w-3.5 text-amber-500 shrink-0" />
                  )}
                  <span
                    className={cn(
                      item.isWarning ? "text-slate-800 font-medium" : "text-slate-600"
                    )}
                  >
                    {item.label}
                  </span>
                </div>
                {item.isWarning && (
                  <button
                    type="button"
                    onClick={() => handleAction("closing")}
                    className="text-slate-400 hover:text-slate-600"
                    title="Strengthen call to action"
                  >
                    <HelpCircle className="h-3 w-3" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
