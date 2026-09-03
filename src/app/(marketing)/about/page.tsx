import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowRight, Target, Shield, Users, Trophy } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Winflare",
  description:
    "Learn about Winflare's mission to revolutionize client acquisition and proposal workflows for freelance consultants and modern digital agencies.",
};

const VALUES = [
  {
    icon: Target,
    title: "Precision over Fluff",
    description:
      "We believe winning proposals aren't 40 pages of filler text. They are hyper-focused, data-informed solutions to client problems that demonstrate clear value.",
  },
  {
    icon: Shield,
    title: "Verified Trust & Integrity",
    description:
      "Our AI embeds verified client results and authentic case studies, ensuring every pitch is backed by demonstrable proof.",
  },
  {
    icon: Users,
    title: "Creator & Agency Centric",
    description:
      "Built by consultants who spent years writing tedious proposals in the trenches. Every feature is tuned to save time and increase closing rates.",
  },
  {
    icon: Trophy,
    title: "Compounding Win-Rate",
    description:
      "Every proposal sent and won trains your personalized pipeline intelligence, making your next proposal smarter, faster, and more profitable.",
  },
];

const LEADERSHIP = [
  {
    name: "Alex Sterling",
    role: "Co-Founder & CEO",
    bio: "Former agency executive who closed $15M+ in digital transformation contracts across Fortune 500 brands.",
    avatarBg: "from-primary to-secondary",
  },
  {
    name: "Dr. Maya Lin",
    role: "Co-Founder & Chief AI Scientist",
    bio: "PhD in NLP and Machine Learning. Pioneer in structured prompt architecture and predictive conversion modeling.",
    avatarBg: "from-secondary to-[#a59bff]",
  },
  {
    name: "David Morales",
    role: "Head of Product & Design",
    bio: "Ex-design director leading enterprise SaaS user experience, passionate about frictionless proposal workflows.",
    avatarBg: "from-[#4f46e5] to-primary",
  },
];

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24 bg-background">
      {/* Hero Intro */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold text-primary">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Our Story & Mission
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl">
            Empowering service professionals to win the contracts they deserve
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary">
            Freelancers and agencies spend countless unbilled hours agonizing over proposal decks,
            guessing client budgets, and losing deals to inferior competitors with better pitches.
            Winflare was built to level the playing field.
          </p>
        </div>

        {/* Milestone Stats Bar */}
        <div className="mt-16 grid grid-cols-2 gap-4 rounded-3xl border border-border bg-card p-8 sm:grid-cols-4 shadow-sm">
          <div className="text-center">
            <div className="text-3xl font-extrabold text-text-primary">$48M+</div>
            <div className="mt-1 text-xs text-text-secondary">Contract Value Won</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-extrabold text-primary">
              12,400+
            </div>
            <div className="mt-1 text-xs text-text-secondary">Active Professionals</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-extrabold text-text-primary">45+</div>
            <div className="mt-1 text-xs text-text-secondary">Countries Represented</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-extrabold text-success">
              3.4x
            </div>
            <div className="mt-1 text-xs text-text-secondary">Average Win Rate Boost</div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-24">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary">
              What Drives Winflare
            </h2>
            <p className="mt-3 text-sm text-text-secondary">
              Our core beliefs shape every line of code and algorithm we build.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {VALUES.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:border-primary/30"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-text-primary">
                    {val.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Leadership */}
        <div className="mt-24">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary">
              The Team Behind the Platform
            </h2>
            <p className="mt-3 text-sm text-text-secondary">
              Built by practitioners who understand the nuance of winning high-stakes contracts.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {LEADERSHIP.map((member, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr ${member.avatarBg} text-lg font-bold text-white shadow-md shadow-primary/20`}
                >
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="mt-5 text-lg font-bold text-text-primary">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-primary">
                  {member.role}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-text-secondary">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-24 rounded-3xl bg-gradient-to-r from-text-primary via-[#1e293b] to-text-primary p-8 text-center text-white shadow-xl sm:p-12">
          <div className="mx-auto max-w-2xl">
            <h3 className="text-3xl font-bold sm:text-4xl">
              Ready to supercharge your win rate?
            </h3>
            <p className="mt-4 text-sm text-slate-300 sm:text-base">
              Join thousands of consultants and agencies winning high-ticket clients with Winflare.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/register"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-primary/25 hover:bg-primary-hover transition-all"
              >
                <span>Start Free 14-Day Trial</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border/40 bg-card/10 px-6 py-3.5 text-sm font-semibold text-white hover:bg-card/20 transition-all"
              >
                <span>View Pricing Plans</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
