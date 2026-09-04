import React from "react";
import { Star, CheckCircle2, Quote } from "lucide-react";
import {
  TESTIMONIALS_CONTENT,
  STATS_HIGHLIGHTS,
} from "../constants/landing-content";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="scroll-mt-16 py-20 bg-background">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
            Success Stories
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
            Trusted by 12,000+ top consultants & agencies
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Discover how creators and service business owners win higher contracts with less effort.
          </p>
        </div>

        {/* Stats Highlight Bar */}
        <div className="mt-12 grid grid-cols-2 gap-4 rounded-2xl border border-border bg-card p-6 sm:grid-cols-4 shadow-sm">
          {STATS_HIGHLIGHTS.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div
                className={`text-2xl sm:text-3xl font-extrabold ${
                  stat.highlight ? "text-primary" : "text-text-primary"
                }`}
              >
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS_CONTENT.map((item) => (
            <div
              key={item.id}
              className="relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex text-warning">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                    ))}
                  </div>
                  <span className="rounded-full bg-success/10 px-2 py-0.5 text-[11px] font-semibold text-success border border-success/20">
                    {item.wonValue}
                  </span>
                </div>

                <div className="relative mt-4">
                  <Quote className="absolute -top-1 -left-1 h-5 w-5 text-border -z-0 opacity-80" />
                  <p className="relative z-10 text-sm leading-relaxed text-text-secondary">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr ${item.avatarBg} text-sm font-bold text-white shadow-sm`}
                >
                  {item.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="truncate text-sm font-semibold text-text-primary">
                      {item.author}
                    </span>
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                  </div>
                  <p className="truncate text-xs text-text-secondary">
                    {item.role}, {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
