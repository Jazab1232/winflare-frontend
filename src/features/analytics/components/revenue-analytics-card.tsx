"use client";

import * as React from "react";
import { ChevronDown, TrendingUp } from "lucide-react";
import { MOCK_REVENUE_TREND } from "../data/mock-analytics";

export function RevenueAnalyticsCard() {
  const [period, setPeriod] = React.useState("monthly");

  // SVG Line Chart coordinates
  // ViewBox: 0 0 340 140
  // Y-axis: 0 to 20000. Chart height 100 (from y=20 to y=120)
  // X-axis: 6 points from x=20 to x=320, gap = 60
  const points = MOCK_REVENUE_TREND.map((d, i) => {
    const x = 25 + i * 58;
    const y = 120 - (d.revenue / 20000) * 95;
    return { ...d, x, y };
  });

  const pathD = points.reduce((acc, p, i) => {
    return i === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`;
  }, "");

  const lastPoint = points[points.length - 1];
  const firstPoint = points[0];
  const areaD = `${pathD} L ${lastPoint.x} 120 L ${firstPoint.x} 120 Z`;

  // Mini donut for Client Revenue Distribution
  // r=32, circumference = 2 * PI * 32 = 201.06
  const rDonut = 32;
  const cDonut = 2 * Math.PI * rDonut;
  // Segments: 62% (124.6), 26% (52.2), 12% (24.1)
  const seg1 = (62 / 100) * cDonut;
  const seg2 = (26 / 100) * cDonut;
  const seg3 = (12 / 100) * cDonut;

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-sm font-bold text-slate-900">
            Revenue Analytics
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Track your growth and revenue trends.
          </p>
        </div>

        <div className="relative">
          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="appearance-none rounded-xl border border-slate-200 bg-white pl-3 pr-7 py-1.5 text-xs font-medium text-slate-700 shadow-2xs hover:bg-slate-50 focus:border-[#5B5AF7] focus:outline-none cursor-pointer"
          >
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="yearly">Yearly</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-2 top-2 h-3.5 w-3.5 text-slate-400" />
        </div>
      </div>

      {/* Main Content: Left Line Chart + Right Distribution Widgets */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: Monthly Revenue Area Chart */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-1">
            <span className="text-xs font-bold text-slate-800">
              Monthly Revenue
            </span>
            <span className="text-xs font-bold text-[#5B5AF7] bg-[#EEF2FF] px-2 py-0.5 rounded-md">
              $18.4k
            </span>
          </div>

          <div className="relative w-full h-[150px] pt-1">
            <svg
              viewBox="0 0 340 140"
              className="w-full h-full overflow-visible"
            >
              <defs>
                <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#5B5AF7" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#5B5AF7" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Grid lines */}
              {[25, 55, 85, 115].map((yVal) => (
                <line
                  key={yVal}
                  x1="20"
                  y1={yVal}
                  x2="330"
                  y2={yVal}
                  stroke="#F1F5F9"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
              ))}

              {/* Gradient Area */}
              <path d={areaD} fill="url(#revGrad)" />

              {/* Line */}
              <path
                d={pathD}
                fill="none"
                stroke="#5B5AF7"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Points */}
              {points.map((p, idx) => (
                <circle
                  key={idx}
                  cx={p.x}
                  cy={p.y}
                  r="3.5"
                  fill="#FFFFFF"
                  stroke="#5B5AF7"
                  strokeWidth="2"
                  className="transition-all hover:r-5 cursor-pointer"
                />
              ))}

              {/* X Axis Labels */}
              {points.map((p, idx) => (
                <text
                  key={idx}
                  x={p.x}
                  y="134"
                  textAnchor="middle"
                  className="text-[9px] fill-slate-400 font-medium"
                >
                  {p.month}
                </text>
              ))}
            </svg>
          </div>
        </div>

        {/* Right: Client Distribution + Average Deal Value */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
          {/* Client Revenue Distribution Donut */}
          <div className="rounded-xl border border-slate-200/70 bg-[#FAFBFF] p-3 space-y-2">
            <span className="text-[11px] font-bold text-slate-800 block">
              Client Revenue Distribution
            </span>

            <div className="flex items-center gap-3">
              {/* Donut graphic */}
              <div className="relative flex items-center justify-center shrink-0">
                <svg
                  className="w-16 h-16 -rotate-90 transform"
                  viewBox="0 0 80 80"
                >
                  {/* Segment 1: Top 3 Clients (62%) */}
                  <circle
                    cx="40"
                    cy="40"
                    r={rDonut}
                    fill="transparent"
                    stroke="#4338CA"
                    strokeWidth="10"
                    strokeDasharray={`${seg1} ${cDonut}`}
                    strokeDashoffset="0"
                  />
                  {/* Segment 2: Next 5 Clients (26%) */}
                  <circle
                    cx="40"
                    cy="40"
                    r={rDonut}
                    fill="transparent"
                    stroke="#3B82F6"
                    strokeWidth="10"
                    strokeDasharray={`${seg2} ${cDonut}`}
                    strokeDashoffset={-seg1}
                  />
                  {/* Segment 3: Others (12%) */}
                  <circle
                    cx="40"
                    cy="40"
                    r={rDonut}
                    fill="transparent"
                    stroke="#CBD5E1"
                    strokeWidth="10"
                    strokeDasharray={`${seg3} ${cDonut}`}
                    strokeDashoffset={-(seg1 + seg2)}
                  />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center select-none pointer-events-none">
                  <span className="text-[10px] font-black text-slate-900 leading-tight">
                    $115k
                  </span>
                  <span className="text-[7px] text-slate-400">Total</span>
                </div>
              </div>

              {/* Legend */}
              <div className="space-y-1 text-[11px] flex-1">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-slate-600">
                    <span className="h-2 w-2 rounded-full bg-[#4338CA]" />
                    Top 3 Clients
                  </span>
                  <span className="font-bold text-slate-900">62%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-slate-600">
                    <span className="h-2 w-2 rounded-full bg-[#3B82F6]" />
                    Next 5 Clients
                  </span>
                  <span className="font-bold text-slate-900">26%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-slate-600">
                    <span className="h-2 w-2 rounded-full bg-slate-300" />
                    Others
                  </span>
                  <span className="font-bold text-slate-900">12%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Average Deal Value Card */}
          <div className="rounded-xl border border-slate-200/70 bg-[#FAFBFF] p-3 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-semibold text-slate-500 block">
                Average Deal Value
              </span>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-lg font-bold text-slate-900">
                  $4,800
                </span>
                <span className="text-[10px] font-semibold text-emerald-600">
                  ↑ 12%
                </span>
              </div>
            </div>

            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EEF2FF] text-[#5B5AF7]">
              <TrendingUp className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

