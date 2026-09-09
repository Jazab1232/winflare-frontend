"use client";

import * as React from "react";
import {
  Sparkles,
  X,
  Send,
  FileText,
  Briefcase,
  TrendingUp,
  Tag,
  Paperclip,
  Loader2,
  ChevronLeft,
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
  const [activeTab, setActiveTab] = React.useState<"chat" | "suggestions" | "tools">("chat");
  const [messages, setMessages] = React.useState<AiChatMessage[]>([
    {
      id: "m-welcome",
      role: "assistant",
      content:
        "Hi! I'm your AI Proposal Assistant.\n\nI can help you improve your proposal, make it more professional, or rewrite specific sections.\n\nTry asking:",
      timestamp: "Just now",
    },
  ]);
  const [inputValue, setInputValue] = React.useState("");
  const [isTyping, setIsTyping] = React.useState(false);

  const promptSuggestions = [
    {
      id: "improve",
      label: "Improve this proposal",
      icon: Sparkles,
      targetSection: "sec-3",
      aiText:
        "We propose an enterprise-grade Next.js 16 architecture for Acme Inc.:\n\n✓ Custom, modern design aligned with your brand guidelines\n✓ Headless CMS integration for effortless content management\n✓ Full SEO and Core Web Vitals optimization ensuring <0.8s load times\n✓ 100% responsive and accessible across all screen sizes\n✓ Integrated lead capture with automated CRM routing",
      responseMessage: "I refined the Solution section with high-converting feature highlights and clear value metrics.",
    },
    {
      id: "shorter",
      label: "Make it shorter",
      icon: FileText,
      targetSection: "sec-1",
      aiText:
        "Hello Sarah,\n\nThank you for considering Winflare for Acme Inc.'s website redesign. We build fast, high-converting websites that generate measurable business results.\n\nWe've reviewed your requirements and prepared this tailored proposal covering scope, timeline, and investment.\n\nBest regards,\nThe Winflare Team",
      responseMessage: "I condensed the introduction to provide a concise, compelling opening.",
    },
    {
      id: "professional",
      label: "Make it more professional",
      icon: Briefcase,
      targetSection: "sec-2",
      aiText:
        "An analysis of Acme Inc.'s current digital presence reveals key opportunities to enhance brand positioning, streamline navigation workflows, and eliminate conversion friction points. Modernizing your platform will establish stronger market authority and significantly increase inbound discovery.",
      responseMessage: "Elevated the tone of the Problem section to communicate executive-level strategic value.",
    },
    {
      id: "conversion",
      label: "Increase conversion rate",
      icon: TrendingUp,
      targetSection: "sec-7",
      aiText:
        "• Proven track record of increasing B2B SaaS conversion rates by 34% on average.\n• Rigorous UX auditing and conversion funnel instrumentation included.\n• Zero-risk milestone delivery schedule tied directly to verifiable client outcomes.",
      responseMessage: "Enhanced 'Why Me' with quantified proof points and conversion metrics.",
    },
    {
      id: "pricing",
      label: "Rewrite pricing section",
      icon: Tag,
      targetSection: "sec-6",
      aiText:
        "Total Investment: $12,000 USD\n\nMilestone Schedule:\n• 30% ($3,600) upon kickoff & Figma architecture approval\n• 40% ($4,800) upon frontend build and CMS integration\n• 30% ($3,600) upon final QA testing and domain launch\n\n*Complimentary 30-day post-launch warranty with dedicated priority support included.",
      responseMessage: "Restructured the investment into clear, low-risk deliverable milestones.",
    },
  ];

  const handleRunAction = (actionId: string, promptText?: string) => {
    const matched = promptSuggestions.find((p) => p.id === actionId);
    const userPrompt = promptText || matched?.label || "Improve proposal";

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
      if (matched) {
        onUpdateSection(matched.targetSection, matched.aiText);
        setMessages((prev) => [
          ...prev,
          {
            id: "ai-" + Date.now(),
            role: "assistant",
            content: matched.responseMessage,
            timestamp: "Just now",
          },
        ]);
        toast.success("AI updated proposal section!");
      } else {
        onUpdateSection(
          "sec-1",
          `Hello Sarah,\n\nThank you for considering us for Acme Inc.'s website redesign. We have updated your proposal based on your instruction: "${userPrompt}".\n\nBest regards,\nThe Winflare Team`
        );
        setMessages((prev) => [
          ...prev,
          {
            id: "ai-" + Date.now(),
            role: "assistant",
            content: `I've updated the proposal to reflect: "${userPrompt}". Let me know if you would like any further adjustments!`,
            timestamp: "Just now",
          },
        ]);
        toast.success("AI updated proposal!");
      }
      setIsTyping(false);
    }, 700);
  };

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isTyping) return;
    handleRunAction("custom", inputValue.trim());
  };

  // Collapsed state: full height sleek vertical bar
  if (isCollapsed) {
    return (
      <aside
        onClick={onToggleCollapse}
        className="w-12 shrink-0 h-full rounded-2xl border border-slate-200/80 bg-white shadow-2xs flex flex-col items-center justify-between py-5 cursor-pointer hover:border-[#5B5AF7]/50 hover:bg-[#FAFBFF] transition-all group select-none"
        title="Expand AI Proposal Assistant"
      >
        <div className="flex flex-col items-center gap-3">
          <div className="p-2 rounded-xl bg-[#EEF2FF] text-[#5B5AF7] group-hover:scale-105 transition-transform">
            <Sparkles className="h-4 w-4" />
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center my-4">
          <span className="text-[11px] font-semibold text-slate-500 group-hover:text-[#5B5AF7] tracking-wider uppercase [writing-mode:vertical-rl] rotate-180 transition-colors">
            AI Assistant
          </span>
        </div>

        <div className="p-1 rounded-lg text-slate-400 group-hover:text-[#5B5AF7] group-hover:-translate-x-0.5 transition-all">
          <ChevronLeft className="h-4 w-4" />
        </div>
      </aside>
    );
  }

  return (
    <aside className="w-72 sm:w-80 lg:w-[330px] shrink-0 h-full flex flex-col rounded-2xl border border-slate-200/80 bg-white shadow-2xs overflow-hidden select-none">
      {/* 1. Top Assistant Header */}
      <div className="flex items-center justify-between px-4 py-3.5 border-b border-slate-100 bg-white">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#EEF2FF] text-[#5B5AF7]">
            <Sparkles className="h-3.5 w-3.5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900 tracking-tight">
            AI Proposal Assistant
          </h3>
          <span className="rounded-full bg-[#EEF2FF] text-[#5B5AF7] px-2 py-0.5 text-[10px] font-semibold">
            Beta
          </span>
        </div>

        {onToggleCollapse && (
          <button
            type="button"
            onClick={onToggleCollapse}
            className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            title="Close Assistant"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      {/* 2. Sub-navigation Tabs: Chat | Suggestions | Tools */}
      <div className="flex items-center justify-around border-b border-slate-100 px-4 pt-2 bg-white text-xs">
        <button
          type="button"
          onClick={() => setActiveTab("chat")}
          className={cn(
            "pb-2 font-medium border-b-2 transition-all cursor-pointer",
            activeTab === "chat"
              ? "border-[#5B5AF7] text-[#5B5AF7] font-semibold"
              : "border-transparent text-slate-500 hover:text-slate-800"
          )}
        >
          Chat
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("suggestions")}
          className={cn(
            "pb-2 font-medium border-b-2 transition-all cursor-pointer",
            activeTab === "suggestions"
              ? "border-[#5B5AF7] text-[#5B5AF7] font-semibold"
              : "border-transparent text-slate-500 hover:text-slate-800"
          )}
        >
          Suggestions
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("tools")}
          className={cn(
            "pb-2 font-medium border-b-2 transition-all cursor-pointer",
            activeTab === "tools"
              ? "border-[#5B5AF7] text-[#5B5AF7] font-semibold"
              : "border-transparent text-slate-500 hover:text-slate-800"
          )}
        >
          Tools
        </button>
      </div>

      {/* 3. Main Assistant Content Area */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-4">
        {activeTab === "chat" && (
          <div className="space-y-3.5">
            {/* AI Welcome Message with 'W' avatar & prompt buttons */}
            <div className="rounded-2xl bg-[#F6F5FF] border border-[#ECEBFA] p-4 space-y-3">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#5B5AF7] text-white font-black text-xs shadow-2xs">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                    <path d="m3 7 4 10 5-8 5 8 4-10" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-slate-900">
                  Hi! I&apos;m your AI Proposal Assistant.
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                I can help you improve your proposal, make it more professional, or rewrite specific sections.
              </p>

              <div className="pt-1">
                <span className="text-[11px] font-medium text-slate-500 block mb-2">
                  Try asking:
                </span>
                <div className="space-y-1.5">
                  {promptSuggestions.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleRunAction(item.id)}
                        disabled={isTyping}
                        className="w-full flex items-center gap-2.5 rounded-xl border border-slate-200/80 bg-white px-3 py-2 text-left text-xs font-medium text-slate-700 hover:border-[#5B5AF7] hover:text-[#5B5AF7] hover:bg-white transition-all shadow-2xs cursor-pointer group"
                      >
                        <Icon className="h-3.5 w-3.5 text-[#5B5AF7] shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="truncate">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Conversation History Messages */}
            {messages.slice(1).map((msg) => {
              const isAi = msg.role === "assistant";
              return (
                <div
                  key={msg.id}
                  className={cn(
                    "rounded-2xl p-3 text-xs leading-relaxed",
                    isAi
                      ? "bg-[#F6F5FF] border border-[#ECEBFA] text-slate-800"
                      : "bg-[#5B5AF7] text-white ml-6"
                  )}
                >
                  <p className="whitespace-pre-line">{msg.content}</p>
                </div>
              );
            })}

            {isTyping && (
              <div className="flex items-center gap-2 text-xs text-slate-400 animate-pulse pl-1">
                <Loader2 className="h-3.5 w-3.5 text-[#5B5AF7] animate-spin" />
                <span>AI Assistant is writing...</span>
              </div>
            )}
          </div>
        )}

        {activeTab === "suggestions" && (
          <div className="space-y-3 text-xs text-slate-600">
            <div className="rounded-xl border border-slate-200 bg-white p-3 space-y-1">
              <span className="font-bold text-slate-900 block">Strong Value Alignment</span>
              <p>The solution addresses all 5 requirements requested by Acme Inc.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-3 space-y-1">
              <span className="font-bold text-slate-900 block">Milestone Clarity</span>
              <p>Pricing is clearly divided into 3 verified deliverables.</p>
            </div>
          </div>
        )}

        {activeTab === "tools" && (
          <div className="space-y-2 text-xs">
            <button
              type="button"
              onClick={onOpenReviewModal}
              className="w-full rounded-xl border border-slate-200 bg-white p-3 text-left font-semibold text-slate-800 hover:border-[#5B5AF7] hover:text-[#5B5AF7] transition-colors"
            >
              📊 Full Proposal Review Score
            </button>
            <button
              type="button"
              onClick={() => toast.info("Client tone adjusted to Enterprise Formal")}
              className="w-full rounded-xl border border-slate-200 bg-white p-3 text-left font-semibold text-slate-800 hover:border-[#5B5AF7] hover:text-[#5B5AF7] transition-colors"
            >
              🎯 Adjust Tone & Voice
            </button>
          </div>
        )}
      </div>

      {/* 4. Bottom Chat Input Area */}
      <div className="p-3 bg-white border-t border-slate-100">
        <form
          onSubmit={handleInputSubmit}
          className="rounded-2xl border border-slate-200 bg-white p-2.5 shadow-2xs space-y-2 focus-within:border-[#5B5AF7] transition-all"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={isTyping}
            placeholder="Ask me anything about your proposal..."
            className="w-full text-xs text-slate-800 placeholder:text-slate-400 outline-none bg-transparent"
          />

          <div className="flex items-center justify-between pt-1">
            <button
              type="button"
              onClick={() => toast.info("Attach file or context")}
              className="p-1 text-slate-400 hover:text-slate-600 transition-colors rounded-md"
              title="Attach context"
            >
              <Paperclip className="h-3.5 w-3.5" />
            </button>

            <button
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              className="flex h-7 w-7 items-center justify-center rounded-xl bg-[#5B5AF7] hover:bg-[#4847E5] text-white disabled:opacity-40 transition-all cursor-pointer shadow-2xs"
            >
              <Send className="h-3.5 w-3.5" />
            </button>
          </div>
        </form>
      </div>
    </aside>
  );
}
