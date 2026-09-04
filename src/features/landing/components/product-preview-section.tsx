"use client";

import React, { useState, useRef, useEffect } from 'react';
import { 
  Search, 
  Sparkles, 
  FileText, 
  Filter, 
  Building2, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Clock, 
  Target, 
  Trophy, 
  LayoutDashboard, 
  KanbanSquare, 
  Users, 
  MessageSquare, 
  LayoutTemplate, 
  BarChart2, 
  Settings, 
  ExternalLink, 
  MapPin, 
  Briefcase, 
  DollarSign, 
  Bookmark, 
  Check, 
  Shield, 
  ArrowLeft, 
  CalendarDays, 
  BadgeCheck, 
  AlertTriangle, 
  Star, 
  FileCheck, 
  Zap, 
  TrendingUp, 
  MoreHorizontal, 
  Globe, 
  Plus, 
  RotateCcw, 
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import { WinflareLogo } from './navbar';

const tabsData = [
  {
    id: 1,
    title: '1 Discovery',
    subtitle: 'Find opportunities',
    icon: Search,
    content: {
      leftSide: {
        tag: '01 DISCOVERY',
        heading: 'Discover opportunities that fit you best.',
        description: 'Automatically find and filter high-quality opportunities from top platforms based on your skills, preferences, and goals.',
        features: [
          'Job boards & career pages',
          'Smart filters & saved searches',
          'Match score for every opportunity',
          'Save & organize in one click'
        ]
      },
      bottomFeatures: [
        { icon: Search, title: 'More relevant opportunities', desc: 'AI finds what actually fits you.' },
        { icon: Clock, title: 'Save hours every week', desc: 'No more manual searching.' },
        { icon: Target, title: 'Better decisions with AI', desc: "Know what's worth your time." },
        { icon: Trophy, title: 'Win more clients', desc: 'From first click to closed deal.' },
      ]
    }
  },
  {
    id: 2,
    title: '2 Qualification',
    subtitle: 'AI evaluates fit',
    icon: Sparkles,
    content: {
      leftSide: {
        tag: '02 QUALIFICATION',
        heading: "Know what's worth pursuing before you spend hours on it.",
        description: 'Winflare analyzes every opportunity and highlights fit, risks, budget alignment, and win probability before you invest time writing proposals.',
        features: [
          'AI match scoring',
          'Risk detection',
          'Budget compatibility analysis',
          'Win probability insights'
        ]
      },
      bottomFeatures: [
        { icon: Target, title: 'Focus on the right opportunities', desc: 'AI helps you prioritize what matters.' },
        { icon: Shield, title: 'Avoid poor-fit projects', desc: 'Identify risks before you invest time.' },
        { icon: FileCheck, title: 'Reduce proposal waste', desc: 'Only pursue opportunities worth it.' },
        { icon: BarChart2, title: 'Increase win probability', desc: 'Data-driven insights = better results.' },
      ]
    }
  },
  {
    id: 3,
    title: '3 Proposal',
    subtitle: 'Create proposals',
    icon: FileText,
    content: {
      leftSide: {
        tag: '03 PROPOSAL',
        heading: 'Generate tailored proposals in minutes.',
        description: "Use AI to create professional proposals, cover letters, and project scopes that match the client's needs and your expertise.",
        features: [
          'AI-powered proposal generation',
          'Customizable templates',
          'Project scope & timeline',
          'Cover letters & follow-ups'
        ]
      },
      bottomFeatures: [
        { icon: FileText, title: 'Save hours every week', desc: 'No more manual writing or formatting.' },
        { icon: Target, title: 'Professional & personalized', desc: 'Make a lasting impression on every client.' },
        { icon: Zap, title: 'Higher response rates', desc: 'Clear, focused proposals get better results.' },
        { icon: TrendingUp, title: 'Win more clients', desc: 'Turn opportunities into signed deals.' },
      ]
    }
  },
  {
    id: 4,
    title: '4 Pipeline',
    subtitle: 'Track progress',
    icon: Filter,
    content: {
      leftSide: {
        tag: '04 PIPELINE',
        heading: 'Track every opportunity from discovery to signed client.',
        description: 'Manage your entire sales pipeline in one place. Move deals, track progress, and never miss a follow-up again.',
        features: [
          'Visual kanban pipeline',
          'Deal value & probability',
          'Automated follow-ups & reminders',
          'Client communication history'
        ]
      },
      bottomFeatures: [
        { icon: Target, title: 'Keep everything organized', desc: 'No more lost opportunities or follow-ups.' },
        { icon: Clock, title: 'Save time with automation', desc: 'Let Winflare handle the routine.' },
        { icon: BarChart2, title: 'Close deals faster', desc: 'Track progress, spot bottlenecks.' },
        { icon: Trophy, title: 'Turn more opportunities into clients', desc: 'With better visibility and control.' },
      ]
    }
  },
  {
    id: 5,
    title: '5 Prospecting',
    subtitle: 'Find companies',
    icon: Building2,
    content: {
      leftSide: {
        tag: '05 PROSPECTING',
        heading: 'Find companies before they post opportunities.',
        description: 'Build your own pipeline by discovering high-potential companies, analyzing their needs, and connecting with the right decision makers.',
        features: [
          'Advanced company search',
          'Tech stack & growth signals',
          'Decision maker discovery',
          'Build a targeted pipeline'
        ]
      },
      bottomFeatures: [
        { icon: Target, title: 'Find high-potential companies', desc: 'Focus on businesses that actually need your skills.' },
        { icon: Clock, title: 'Save time on research', desc: 'Get key details and insights instantly.' },
        { icon: Users, title: 'Connect with decision makers', desc: 'Reach the right people, faster.' },
        { icon: TrendingUp, title: 'Build your own pipeline', desc: 'Be proactive, not reactive.' },
      ]
    }
  }
];

export function ProductPreviewSection() {
  const [activeTab, setActiveTab] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.78);

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const w = containerRef.current.clientWidth;
        if (w > 0) {
          // Virtual canvas width is 1000px
          setScale(w / 1000);
        }
      }
    };
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  const activeData = tabsData.find(t => t.id === activeTab) || tabsData[0];

  return (
    <section className="py-20 bg-[#FAFBFF] flex flex-col items-center overflow-hidden">
      {/* Header */}
      <div className="flex flex-col items-center text-center max-w-3xl mb-10 px-4">
        <div className="flex items-center gap-2 px-4 py-1.5 bg-[#EFEBFF] text-[#5B5AF7] rounded-full text-xs font-bold mb-5 tracking-wide uppercase">
          <div className="bg-[#5B5AF7] rounded-full p-0.5"><Sparkles className="w-3 h-3 text-white fill-white" /></div> PRODUCT PREVIEW
        </div>
        <h2 className="text-3xl md:text-[42px] font-extrabold text-[#0F172A] mb-4 tracking-tight leading-[1.15]">
          One workspace for <br /> every step of <span className="text-[#5B5AF7]">client acquisition.</span>
        </h2>
        <p className="text-[16px] text-[#64748B] max-w-[580px] font-medium leading-relaxed">
          From discovering opportunities to managing client relationships, everything lives inside Winflare.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-3.5 mb-12 overflow-x-auto max-w-full px-4 pb-2 no-scrollbar w-full justify-start md:justify-center">
        {tabsData.map((tab) => {
          const isActive = tab.id === activeTab;
          const Icon = tab.icon;
          return (
            <div 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 px-5 py-3 rounded-2xl shadow-xs min-w-max cursor-pointer transition-all ${
                isActive 
                  ? 'border-[1.5px] border-[#5B5AF7] bg-white ring-2 ring-[#5B5AF7]/10' 
                  : 'border border-[#E2E8F0] bg-white hover:bg-gray-50'
              }`}
            >
              <div className={`p-2 rounded-full ${isActive ? 'bg-[#F4F4FF] text-[#5B5AF7]' : 'bg-[#F8FAFC] text-[#5B5AF7]'}`}>
                <Icon className="w-4 h-4" strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <div className="text-left pr-2">
                <div className={`font-bold text-[14px] leading-tight ${isActive ? 'text-[#5B5AF7]' : 'text-[#0F172A]'}`}>
                  {tab.title}
                </div>
                <div className="text-[#64748B] text-[12px] font-medium mt-0.5">{tab.subtitle}</div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Main Content Area */}
      <div className="relative w-full max-w-[1400px] px-4 md:px-12 flex items-center justify-center mb-16">
        {/* Left Arrow */}
        <button 
          onClick={() => setActiveTab(prev => (prev > 1 ? prev - 1 : 5))}
          className="hidden xl:flex absolute left-4 z-10 p-3 bg-white border border-[#E2E8F0] rounded-full shadow-[0_4px_12px_rgba(15,23,42,0.06)] text-[#5B5AF7] hover:bg-gray-50 transition-colors"
          aria-label="Previous tab"
        >
          <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
        </button>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center w-full max-w-[1240px]">
          {/* Left Text Side */}
          <div className="w-full lg:w-[320px] xl:w-[350px] shrink-0 flex flex-col items-start text-left">
            <div className="text-[#5B5AF7] font-extrabold text-[12px] tracking-[0.08em] mb-3 uppercase">
              {activeData.content.leftSide.tag}
            </div>
            <h3 className="text-[24px] xl:text-[32px] font-bold text-[#0F172A] mb-4 leading-[1.18] tracking-tight">
              {activeData.content.leftSide.heading}
            </h3>
            <p className="text-[#64748B] mb-6 text-[14.5px] leading-[1.6] font-medium">
              {activeData.content.leftSide.description}
            </p>
            <ul className="space-y-3.5 w-full">
              {activeData.content.leftSide.features.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[14px] font-semibold text-[#334155]">
                  <div className="w-4.5 h-4.5 rounded-full border-[1.5px] border-[#5B5AF7] flex items-center justify-center shrink-0">
                    <Check className="text-[#5B5AF7] w-2.5 h-2.5" strokeWidth={3} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right UI Mockup Container (Responsive Scaled Canvas - Behaves exactly like an image) */}
          <div 
            ref={containerRef}
            className="w-full lg:flex-1 max-w-[840px] rounded-[20px] bg-white shadow-[0_20px_50px_-12px_rgba(15,23,42,0.12)] border border-[#E2E8F0] overflow-hidden relative select-none"
            style={{ height: `${580 * scale}px` }}
          >
            <div 
              className="w-[1000px] h-[580px] origin-top-left absolute top-0 left-0 flex bg-white"
              style={{ transform: `scale(${scale})` }}
            >
              {/* Mockup Sidebar */}
              <div className="w-[190px] bg-white border-r border-[#E2E8F0] flex flex-col h-full shrink-0 py-4.5">
                <div className="px-5 flex items-center gap-2 mb-4">
                  <WinflareLogo className="w-5 h-5" />
                  <span className="font-bold text-[19px] text-[#0F172A] tracking-tight">winflare</span>
                </div>
                
                <div className="px-2.5 flex flex-col gap-0.5 flex-1">
                  <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#64748B] font-semibold text-[13px] hover:bg-slate-50 cursor-pointer">
                    <LayoutDashboard className="w-4 h-4" strokeWidth={2} /> Dashboard
                  </div>

                  {/* Opportunities */}
                  <div className={`flex items-center justify-between px-3 py-2 rounded-lg font-semibold text-[13px] cursor-pointer ${
                    activeTab === 1 || activeTab === 2 
                      ? 'text-[#5B5AF7] bg-[#F4F4FF]' 
                      : 'text-[#64748B] hover:bg-slate-50'
                  }`}>
                    <div className="flex items-center gap-3">
                      <Search className="w-4 h-4" strokeWidth={2} /> Opportunities
                    </div>
                    {activeTab !== 1 && (
                      <div className="bg-[#EFEBFF] text-[#5B5AF7] text-[9.5px] font-bold px-1.5 py-0.2 rounded">24</div>
                    )}
                  </div>

                  {/* Pipeline */}
                  <div className={`flex items-center justify-between px-3 py-2 rounded-lg font-semibold text-[13px] cursor-pointer ${
                    activeTab === 4 
                      ? 'text-[#5B5AF7] bg-[#F4F4FF]' 
                      : 'text-[#64748B] hover:bg-slate-50'
                  }`}>
                    <div className="flex items-center gap-3">
                      <KanbanSquare className="w-4 h-4" strokeWidth={2} /> Pipeline
                    </div>
                  </div>

                  {/* Proposals */}
                  <div className={`flex items-center justify-between px-3 py-2 rounded-lg font-semibold text-[13px] cursor-pointer ${
                    activeTab === 3 
                      ? 'text-[#5B5AF7] bg-[#F4F4FF]' 
                      : 'text-[#64748B] hover:bg-slate-50'
                  }`}>
                    <div className="flex items-center gap-3">
                      <FileText className="w-4 h-4" strokeWidth={2} /> Proposals
                    </div>
                  </div>

                  {/* Companies */}
                  <div className={`flex items-center justify-between px-3 py-2 rounded-lg font-semibold text-[13px] cursor-pointer ${
                    activeTab === 5 
                      ? 'text-[#5B5AF7] bg-[#F4F4FF]' 
                      : 'text-[#64748B] hover:bg-slate-50'
                  }`}>
                    <div className="flex items-center gap-3">
                      <Building2 className="w-4 h-4" strokeWidth={2} /> Companies
                    </div>
                  </div>

                  <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#64748B] font-semibold text-[13px] hover:bg-slate-50 cursor-pointer">
                    <Users className="w-4 h-4" strokeWidth={2} /> Contacts
                  </div>

                  <div className="flex items-center justify-between px-3 py-2 rounded-lg text-[#64748B] font-semibold text-[13px] hover:bg-slate-50 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <MessageSquare className="w-4 h-4" strokeWidth={2} /> Follow-ups
                    </div>
                    {activeTab === 4 && (
                      <div className="bg-[#EFEBFF] text-[#5B5AF7] text-[9.5px] font-bold px-1.5 py-0.2 rounded">3</div>
                    )}
                  </div>

                  <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#64748B] font-semibold text-[13px] hover:bg-slate-50 cursor-pointer">
                    <LayoutTemplate className="w-4 h-4" strokeWidth={2} /> Templates
                  </div>

                  <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#64748B] font-semibold text-[13px] hover:bg-slate-50 cursor-pointer">
                    <BarChart2 className="w-4 h-4" strokeWidth={2} /> Analytics
                  </div>

                  <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#64748B] font-semibold text-[13px] hover:bg-slate-50 cursor-pointer mt-auto">
                    <Settings className="w-4 h-4" strokeWidth={2} /> Settings
                  </div>
                </div>

                {/* User Profile */}
                <div className="px-4 mt-3 pt-3 border-t border-[#E2E8F0] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-[30px] h-[30px] rounded-full bg-slate-200 overflow-hidden shrink-0">
                      <img src="https://ui-avatars.com/api/?name=Jazab+Ali&background=0D8ABC&color=fff" alt="User" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[12px] font-bold text-[#0F172A] leading-tight">Jazab Ali</span>
                      <span className="text-[10px] font-medium text-[#64748B] mt-0.5">Pro Plan</span>
                    </div>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-[#94A3B8]" />
                </div>
              </div>

              {/* Main Content Area (810px width x 580px height) */}
              <div className="w-[810px] h-[580px] flex overflow-hidden">
                {/* TAB 1: DISCOVERY */}
                {activeTab === 1 && (
                  <>
                    {/* Middle Column: Opportunities List */}
                    <div className="w-[470px] bg-[#FAFBFF] border-r border-[#E2E8F0] flex flex-col h-full p-5 justify-between">
                      <div>
                        <h2 className="text-[17px] font-bold text-[#0F172A] mb-3">Opportunities</h2>
                        <div className="flex gap-2 mb-3.5">
                          <div className="relative flex-1">
                            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
                            <input type="text" placeholder="Search opportunities..." className="w-full pl-8 pr-2.5 py-1.5 rounded-lg border border-[#E2E8F0] bg-white text-[12px] text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none font-medium shadow-2xs" />
                          </div>
                          <button className="px-2.5 py-1.5 rounded-lg border border-[#E2E8F0] bg-white text-[11.5px] font-semibold text-[#334155] flex items-center gap-1.5 shadow-2xs whitespace-nowrap">
                            All Sources <ChevronRight className="w-3 h-3 text-[#94A3B8] rotate-90" />
                          </button>
                          <button className="px-2.5 py-1.5 rounded-lg border border-[#E2E8F0] bg-white text-[11.5px] font-semibold text-[#334155] flex items-center gap-1.5 shadow-2xs whitespace-nowrap">
                            <Filter className="w-3 h-3 text-[#94A3B8]" /> Filters <ChevronRight className="w-3 h-3 text-[#94A3B8] rotate-90" />
                          </button>
                          <button className="px-2.5 py-1.5 rounded-lg border border-[#E2E8F0] bg-white text-[11.5px] font-semibold text-[#334155] flex items-center gap-1.5 shadow-2xs whitespace-nowrap">
                            <Bookmark className="w-3 h-3 text-[#94A3B8]" /> Saved
                          </button>
                        </div>

                        {/* 5 Jobs */}
                        <div className="flex flex-col gap-2">
                          {[
                            { title: "Senior Frontend Developer", company: "Verve Labs", type: "Full-time", salary: "$60k - $90k", match: "96%", time: "2h ago", logo: "V", bg: "bg-black text-white", active: true },
                            { title: "React Developer", company: "RemoteScale", type: "Contract", salary: "$40 - $60/hr", match: "92%", time: "4h ago", logo: "≈", bg: "bg-[#38BDF8] text-white", active: false },
                            { title: "Full Stack Developer", company: "Leapwork", type: "Full-time", salary: "$70k - $100k", match: "89%", time: "6h ago", logo: "△", bg: "bg-[#22C55E] text-white", active: false },
                            { title: "Frontend Engineer", company: "Stackly", type: "Full-time", salary: "$50k - $80k", match: "78%", time: "8h ago", logo: "S", bg: "bg-[#6366F1] text-white", active: false },
                            { title: "Web Developer", company: "Creative Tim", type: "Contract", salary: "$35 - $55/hr", match: "74%", time: "10h ago", logo: "⬡", bg: "bg-white text-black border border-gray-200", active: false }
                          ].map((job, i) => (
                            <div key={i} className={`p-2.5 rounded-xl flex items-center gap-3 cursor-pointer transition-colors ${job.active ? 'bg-white border border-[#E2E8F0] shadow-xs ring-1 ring-black/5' : 'hover:bg-white border border-transparent'}`}>
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${job.bg}`}>
                                {job.logo}
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-bold text-[#0F172A] text-[13px] truncate">{job.title}</h4>
                                <div className="text-[11px] font-medium text-[#64748B] mt-0.2">{job.company} • {job.type}</div>
                              </div>
                              <div className="flex flex-col items-end gap-0.5 shrink-0">
                                <div className="flex items-center gap-3">
                                  <span className="text-[11px] font-bold text-[#10B981]">{job.match} Match</span>
                                  <span className="text-[11.5px] font-semibold text-[#5B5AF7]">{job.salary}</span>
                                </div>
                                <span className="text-[10px] font-medium text-[#94A3B8]">{job.time}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-center pt-2">
                        <button className="text-[11.5px] font-bold text-[#0F172A] flex items-center gap-1 hover:text-[#5B5AF7] bg-white border border-[#E2E8F0] px-3 py-1.5 rounded-lg shadow-2xs">
                          Load more opportunities <ChevronRight className="w-3 h-3 rotate-90" />
                        </button>
                      </div>
                    </div>

                    {/* Right Column: Opportunity Detail */}
                    <div className="w-[340px] bg-white flex flex-col justify-between p-5">
                      <div>
                        <h2 className="text-[17px] font-extrabold text-[#0F172A] leading-tight mb-1">Senior Frontend Developer</h2>
                        <div className="flex items-center gap-1.5 text-[12.5px] font-bold text-[#334155] mb-4">
                          Verve Labs <ExternalLink className="w-3 h-3 text-[#94A3B8]" />
                        </div>
                        
                        <div className="flex flex-col gap-2 mb-4">
                          <div className="flex items-center gap-2.5 text-[12px] text-[#475569] font-medium">
                            <MapPin className="w-3.5 h-3.5 text-[#94A3B8]" /> Remote • Full-time
                          </div>
                          <div className="flex items-center gap-2.5 text-[12px] text-[#475569] font-medium">
                            <DollarSign className="w-3.5 h-3.5 text-[#94A3B8]" /> $60,000 - $90,000 / year
                          </div>
                        </div>

                        <div className="p-3 rounded-xl border border-[#E2E8F0] bg-white shadow-2xs mb-4">
                          <div className="flex items-center gap-2.5 mb-2.5">
                            <div className="px-2 py-0.5 bg-[#D1FAE5] text-[#059669] text-[11px] font-bold rounded-md">
                              96% Match
                            </div>
                            <span className="text-[12px] font-bold text-[#059669]">Excellent match</span>
                          </div>
                          <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-[#10B981] rounded-full w-[96%]"></div>
                          </div>
                        </div>

                        <h3 className="font-bold text-[#0F172A] text-[12.5px] mb-2.5">Why it's a great match</h3>
                        <ul className="space-y-2">
                          {[
                            "React, Next.js, TypeScript match",
                            "3+ years experience required",
                            "Budget matches your rate",
                            "Remote work opportunity"
                          ].map((reason, i) => (
                            <li key={i} className="flex items-start gap-2 text-[11.5px] font-medium text-[#475569] leading-tight">
                              <Check className="w-3.5 h-3.5 text-[#5B5AF7] shrink-0" strokeWidth={3} />
                              {reason}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-col gap-2 pt-3">
                        <button className="w-full py-2 bg-[#5B5AF7] hover:bg-[#4F46E5] text-white font-bold text-[12.5px] rounded-lg transition-colors shadow-xs">
                          View Details
                        </button>
                        <button className="w-full py-1.5 border border-[#E2E8F0] bg-white hover:bg-gray-50 text-[#334155] font-bold text-[12px] rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-2xs">
                          <Bookmark className="w-3.5 h-3.5" /> Save Opportunity
                        </button>
                      </div>
                    </div>
                  </>
                )}

                {/* TAB 2: QUALIFICATION */}
                {activeTab === 2 && (
                  <div className="w-full bg-[#FAFBFF] flex flex-col h-full p-4.5 justify-between">
                    {/* Top Nav inside Mockup */}
                    <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0] bg-white -mx-4.5 -mt-4.5 px-4.5 py-3 mb-3">
                      <button className="text-[12px] font-bold text-[#5B5AF7] flex items-center gap-1">
                        <ArrowLeft className="w-3.5 h-3.5" /> Back to opportunities
                      </button>
                      <div className="flex items-center gap-2">
                        <button className="px-2.5 py-1 rounded-lg border border-[#E2E8F0] bg-white text-[11.5px] font-bold text-[#334155] flex items-center gap-1 shadow-2xs">
                          <Bookmark className="w-3 h-3" /> Save
                        </button>
                        <button className="px-2.5 py-1 rounded-lg border border-[#E2E8F0] bg-white text-[11.5px] font-bold text-[#0F172A] flex items-center gap-1 shadow-2xs">
                          Move to Pipeline <ChevronRight className="w-3 h-3 rotate-90" />
                        </button>
                        <div className="flex items-center gap-0.5">
                          <button className="p-1 rounded-md border border-[#E2E8F0] bg-white text-[#94A3B8]">
                            <ChevronLeft className="w-3.5 h-3.5" />
                          </button>
                          <button className="p-1 rounded-md border border-[#E2E8F0] bg-white text-[#0F172A]">
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Top 3 Cards Row */}
                    <div className="grid grid-cols-[1.1fr_0.9fr_1.2fr] gap-3">
                      {/* Job Details Card */}
                      <div className="bg-white border border-[#E2E8F0] rounded-xl p-3.5 shadow-2xs flex flex-col justify-between">
                        <div>
                          <h2 className="text-[15px] font-bold text-[#0F172A] mb-2.5">Senior React Developer</h2>
                          <div className="flex flex-col gap-1.5">
                            <div className="flex items-center gap-2 text-[11px] text-[#475569]">
                              <MapPin className="w-3 h-3 text-[#94A3B8]" /> Remote (Worldwide)
                            </div>
                            <div className="flex items-center gap-2 text-[11px] text-[#475569]">
                              <Briefcase className="w-3 h-3 text-[#94A3B8]" /> Full-time
                            </div>
                            <div className="flex items-center gap-2 text-[11px] text-[#475569]">
                              <DollarSign className="w-3 h-3 text-[#94A3B8]" /> $4,000 - $6,000 / month
                            </div>
                            <div className="flex items-center gap-2 text-[11px] text-[#475569]">
                              <CalendarDays className="w-3 h-3 text-[#94A3B8]" /> Posted 2 days ago
                            </div>
                            <div className="flex items-center gap-2 text-[11px] text-[#475569]">
                              <Building2 className="w-3 h-3 text-[#94A3B8]" /> Acme Inc.
                              <span className="bg-[#D1FAE5] text-[#059669] text-[9px] font-bold px-1 py-0.2 rounded ml-1 flex items-center gap-0.5">
                                <BadgeCheck className="w-2.5 h-2.5" /> Verified
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="mt-2.5">
                          <div className="flex items-center gap-1.5 text-[10.5px] font-semibold text-[#64748B] mb-2">
                            <LayoutDashboard className="w-3 h-3 text-[#94A3B8]" /> React, TypeScript, Next.js, Tailwind
                          </div>
                          <button className="w-full py-1.5 bg-[#F4F4FF] hover:bg-[#EFEBFF] text-[#5B5AF7] font-bold text-[11px] rounded-lg transition-colors flex justify-center items-center gap-1">
                            View Job Details <ExternalLink className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      {/* AI Match Score Card */}
                      <div className="bg-white border border-[#E2E8F0] rounded-xl p-3.5 shadow-2xs flex flex-col items-center justify-between text-center">
                        <div className="flex items-center gap-1 text-[11.5px] font-bold text-[#0F172A] w-full justify-start">
                          <Sparkles className="w-3.5 h-3.5 text-[#5B5AF7]" /> AI Match Score
                        </div>
                        
                        <div className="relative w-20 h-20 flex items-center justify-center my-1">
                          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="40" className="stroke-[#E2E8F0]" strokeWidth="11" fill="none" />
                            <circle cx="50" cy="50" r="40" className="stroke-[#10B981]" strokeWidth="11" fill="none" strokeDasharray="251.2" strokeDashoffset={251.2 * (1 - 0.92)} strokeLinecap="round" />
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-xl font-extrabold text-[#0F172A] leading-none">92<span className="text-sm">%</span></span>
                            <span className="text-[8px] font-bold text-[#64748B] uppercase tracking-wider mt-0.5">Match Score</span>
                          </div>
                        </div>

                        <div>
                          <div className="bg-[#D1FAE5] text-[#059669] text-[10.5px] font-bold px-2 py-0.5 rounded-full mb-1">
                            High Win Probability
                          </div>
                          <p className="text-[9.5px] text-[#64748B] font-medium leading-snug">
                            This opportunity is highly aligned with your profile.
                          </p>
                        </div>
                      </div>

                      {/* AI Insights Card */}
                      <div className="bg-white border border-[#E2E8F0] rounded-xl p-3.5 shadow-2xs flex flex-col justify-between">
                        <div className="flex items-center gap-1 text-[11.5px] font-bold text-[#0F172A] mb-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-[#5B5AF7]" /> AI Insights
                        </div>

                        <div>
                          <h4 className="text-[10.5px] font-bold text-[#10B981] mb-1">Strengths</h4>
                          <ul className="space-y-1 mb-2">
                            {[
                              "Portfolio strongly matches requirements",
                              "Required skills and tools align",
                              "Budget fits your preferred range"
                            ].map((item, i) => (
                              <li key={i} className="flex items-start gap-1.5 text-[10px] font-medium text-[#475569] leading-tight">
                                <CheckCircle2 className="w-3 h-3 text-[#10B981] shrink-0 mt-0.5 fill-[#10B981] text-white" />
                                {item}
                              </li>
                            ))}
                          </ul>

                          <h4 className="text-[10.5px] font-bold text-[#F59E0B] mb-1">Risks</h4>
                          <ul className="space-y-1">
                            {[
                              "Tight delivery timeline (4-6 weeks)",
                              "High competition (15+ applicants)"
                            ].map((item, i) => (
                              <li key={i} className="flex items-start gap-1.5 text-[10px] font-medium text-[#475569] leading-tight">
                                <AlertTriangle className="w-3 h-3 text-[#F59E0B] shrink-0 mt-0.5" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Bottom 4 Mini Cards */}
                    <div className="grid grid-cols-4 gap-2.5">
                      <div className="bg-white border border-[#E2E8F0] rounded-xl p-2.5 shadow-2xs">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-6 h-6 rounded-md bg-[#D1FAE5] text-[#059669] flex items-center justify-center shrink-0">
                            <DollarSign className="w-3 h-3" strokeWidth={3} />
                          </div>
                          <div>
                            <div className="text-[9px] font-bold text-[#64748B]">Budget Fit</div>
                            <div className="text-[12.5px] font-bold text-[#059669] leading-none">Excellent</div>
                          </div>
                        </div>
                        <p className="text-[9px] text-[#64748B] font-medium">Budget aligns perfectly</p>
                      </div>

                      <div className="bg-white border border-[#E2E8F0] rounded-xl p-2.5 shadow-2xs">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-6 h-6 rounded-md bg-[#EFEBFF] text-[#5B5AF7] flex items-center justify-center shrink-0">
                            <Star className="w-3 h-3" strokeWidth={2.5} />
                          </div>
                          <div>
                            <div className="text-[9px] font-bold text-[#64748B]">Skill Match</div>
                            <div className="text-[12.5px] font-bold text-[#5B5AF7] leading-none">94%</div>
                          </div>
                        </div>
                        <p className="text-[9px] text-[#64748B] font-medium">Matches requirements</p>
                      </div>

                      <div className="bg-white border border-[#E2E8F0] rounded-xl p-2.5 shadow-2xs">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-6 h-6 rounded-md bg-[#FEF3C7] text-[#D97706] flex items-center justify-center shrink-0">
                            <Users className="w-3 h-3" strokeWidth={2.5} />
                          </div>
                          <div>
                            <div className="text-[9px] font-bold text-[#64748B]">Competition</div>
                            <div className="text-[12.5px] font-bold text-[#D97706] leading-none">Medium</div>
                          </div>
                        </div>
                        <p className="text-[9px] text-[#64748B] font-medium">15+ applicants</p>
                      </div>

                      <div className="bg-white border border-[#E2E8F0] rounded-xl p-2.5 shadow-2xs">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-6 h-6 rounded-md bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center shrink-0">
                            <Clock className="w-3 h-3" strokeWidth={2.5} />
                          </div>
                          <div>
                            <div className="text-[9px] font-bold text-[#64748B]">Estimated Effort</div>
                            <div className="text-[12.5px] font-bold text-[#0284C7] leading-none">6 Weeks</div>
                          </div>
                        </div>
                        <p className="text-[9px] text-[#64748B] font-medium">Based on project scope</p>
                      </div>
                    </div>

                    {/* Bottom AI Recommendation Strip */}
                    <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3 shadow-2xs flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <Sparkles className="w-4 h-4 text-[#5B5AF7]" />
                        <div>
                          <div className="font-bold text-[#5B5AF7] text-[11px]">AI Recommendation</div>
                          <div className="text-[10px] text-[#475569]">This opportunity is highly aligned. We recommend pursuing.</div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-3.5 py-1.5 bg-[#5B5AF7] text-white font-bold text-[11px] rounded-lg shadow-2xs flex items-center gap-1 hover:bg-[#4F46E5] transition-colors">
                          <Sparkles className="w-3 h-3" /> Generate Proposal
                        </button>
                        <button className="px-3.5 py-1.5 bg-white border border-[#E2E8F0] text-[#334155] font-bold text-[11px] rounded-lg shadow-2xs flex items-center gap-1 hover:bg-gray-50 transition-colors">
                          <Bookmark className="w-3 h-3" /> Save Opportunity
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 3: PROPOSAL */}
                {activeTab === 3 && (
                  <div className="w-full bg-[#FAFBFF] flex flex-col h-full p-4.5 justify-between">
                    {/* Top Nav inside Mockup */}
                    <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0] bg-white -mx-4.5 -mt-4.5 px-4.5 py-3 mb-3">
                      <button className="text-[12px] font-bold text-[#5B5AF7] flex items-center gap-1">
                        <ArrowLeft className="w-3.5 h-3.5" /> Back to opportunities
                      </button>
                      <div className="flex items-center gap-2">
                        <button className="px-2.5 py-1 rounded-lg border border-[#E2E8F0] bg-white text-[11px] font-bold text-[#334155] flex items-center gap-1 shadow-2xs">
                          Use Template <ChevronDown className="w-3 h-3 text-[#94A3B8]" />
                        </button>
                        <button className="px-2.5 py-1 rounded-lg border border-[#E2E8F0] bg-white text-[11px] font-bold text-[#334155] flex items-center gap-1 shadow-2xs">
                          <Bookmark className="w-3 h-3" /> Save
                        </button>
                        <button className="px-3 py-1 rounded-lg bg-[#5B5AF7] text-white text-[11px] font-bold flex items-center gap-1 shadow-xs hover:bg-[#4F46E5] transition-colors">
                          <Sparkles className="w-3 h-3" /> Generate with AI
                        </button>
                      </div>
                    </div>

                    {/* Proposal Studio Header & Stepper */}
                    <div className="flex items-center justify-between mb-2.5">
                      <h2 className="text-[16px] font-bold text-[#0F172A]">Proposal Studio</h2>
                      <div className="flex items-center gap-1 bg-[#F8FAFC] border border-[#E2E8F0] p-0.5 rounded-lg">
                        <span className="bg-[#EFEBFF] text-[#5B5AF7] px-2 py-0.5 rounded-md text-[10px] font-bold">1 Proposal</span>
                        <span className="text-[#64748B] px-2 py-0.5 text-[10px] font-medium">2 Cover Letter</span>
                        <span className="text-[#64748B] px-2 py-0.5 text-[10px] font-medium">3 Project Scope</span>
                        <span className="text-[#64748B] px-2 py-0.5 text-[10px] font-medium">4 Review</span>
                      </div>
                    </div>

                    {/* 3 Columns */}
                    <div className="grid grid-cols-[1fr_1.3fr_0.9fr] gap-3 flex-1 overflow-hidden">
                      {/* Left: Input Form */}
                      <div className="flex flex-col justify-between">
                        <div>
                          <label className="text-[10px] font-bold text-[#64748B] block mb-0.5">Proposal Title</label>
                          <input 
                            type="text" 
                            readOnly 
                            value="Full Stack Developer - React & Node.js" 
                            className="w-full px-2.5 py-1.5 text-[11px] font-semibold text-[#0F172A] bg-white border border-[#E2E8F0] rounded-lg shadow-2xs focus:outline-none mb-2"
                          />

                          <label className="text-[10px] font-bold text-[#64748B] block mb-0.5">Message to Client</label>
                          <div className="bg-white border border-[#E2E8F0] rounded-lg p-2.5 shadow-2xs flex flex-col justify-between h-[105px]">
                            <p className="text-[9.5px] text-[#475569] leading-relaxed font-medium">
                              Hi, I'm excited about the opportunity to work with you on this project. Based on your requirements, I've put together a tailored proposal that outlines how I can help...
                            </p>
                            <span className="text-[9px] text-[#94A3B8] self-end">184/2000</span>
                          </div>
                        </div>

                        <div>
                          <label className="text-[10px] font-bold text-[#64748B] block mb-1">Key Highlights</label>
                          <div className="flex flex-col gap-1">
                            {["Modern tech stack", "Clean & maintainable code", "On-time delivery"].map((highlight, idx) => (
                              <div key={idx} className="flex items-center justify-between px-2.5 py-1.5 bg-white border border-[#E2E8F0] rounded-lg shadow-2xs">
                                <div className="flex items-center gap-1.5">
                                  <div className="w-3.5 h-3.5 rounded-full bg-[#EFEBFF] flex items-center justify-center text-[#5B5AF7]">
                                    <Check className="w-2 h-2" strokeWidth={3} />
                                  </div>
                                  <span className="text-[10.5px] font-semibold text-[#334155]">{highlight}</span>
                                </div>
                                <ChevronRight className="w-3 h-3 text-[#94A3B8]" />
                              </div>
                            ))}
                            <button className="w-full py-1 border border-dashed border-[#CBD5E1] rounded-lg text-[10px] font-bold text-[#64748B] hover:bg-slate-50 flex items-center justify-center gap-0.5 mt-0.5">
                              <Plus className="w-2.5 h-2.5" /> Add highlight
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Middle: Document Sheet Preview */}
                      <div className="bg-white border border-[#E2E8F0] rounded-xl p-3 shadow-2xs flex flex-col justify-between">
                        <div className="flex items-center justify-between pb-1.5 border-b border-slate-100 mb-1.5">
                          <div className="flex items-center gap-1 text-[10.5px] font-bold text-[#0F172A]">
                            <Sparkles className="w-3 h-3 text-[#5B5AF7]" /> AI Generated Proposal
                          </div>
                          <span className="text-[10px] font-semibold text-[#64748B] flex items-center gap-0.5">
                            Preview <ChevronDown className="w-2.5 h-2.5 text-[#94A3B8]" />
                          </span>
                        </div>

                        {/* Sheet Container */}
                        <div className="bg-[#FAFBFD] border border-slate-100 rounded-lg p-2.5 flex flex-col justify-between flex-1">
                          <div>
                            <div className="flex items-center gap-1 mb-1">
                              <WinflareLogo className="w-3 h-3" />
                              <span className="font-bold text-[9.5px] text-[#0F172A] tracking-tight">winflare</span>
                            </div>
                            <h3 className="text-[11.5px] font-bold text-[#0F172A] leading-tight">Project Proposal</h3>
                            <p className="text-[9px] font-medium text-[#64748B] mb-1.5">Full Stack Developer - React & Node.js</p>

                            <p className="text-[8.5px] text-[#475569] leading-relaxed mb-1.5">
                              Hi, I'm excited about the opportunity to work with you on this project. Based on your requirements, I've put together a tailored proposal.
                            </p>

                            <h4 className="text-[9.5px] font-bold text-[#0F172A] mb-0.5">Key Deliverables</h4>
                            <ul className="space-y-0.5 mb-2">
                              {[
                                "Fully responsive web application",
                                "RESTful APIs with proper documentation",
                                "Admin panel for content management",
                                "Deployment & monitoring setup"
                              ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-1 text-[8.5px] font-semibold text-[#334155]">
                                  <Check className="w-2.5 h-2.5 text-[#5B5AF7] shrink-0" strokeWidth={3} />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="grid grid-cols-2 gap-1.5 pt-1.5 border-t border-slate-200/60">
                            <div className="bg-white border border-[#E2E8F0] rounded-md p-1.5 flex items-center gap-1.5">
                              <div className="w-5 h-5 rounded bg-[#EFEBFF] text-[#5B5AF7] flex items-center justify-center shrink-0">
                                <CalendarDays className="w-3 h-3" />
                              </div>
                              <div>
                                <div className="text-[7.5px] font-bold text-[#94A3B8]">Timeline</div>
                                <div className="text-[9.5px] font-bold text-[#0F172A]">4 - 6 weeks</div>
                              </div>
                            </div>
                            <div className="bg-white border border-[#E2E8F0] rounded-md p-1.5 flex items-center gap-1.5">
                              <div className="w-5 h-5 rounded bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center shrink-0">
                                <DollarSign className="w-3 h-3" />
                              </div>
                              <div>
                                <div className="text-[7.5px] font-bold text-[#94A3B8]">Budget</div>
                                <div className="text-[9.5px] font-bold text-[#0F172A]">$4.5k - $6k</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right: AI Suggestions & Templates */}
                      <div className="flex flex-col justify-between gap-2.5">
                        <div className="bg-white border border-[#E2E8F0] rounded-xl p-3 shadow-2xs">
                          <div className="flex items-center gap-1 text-[10.5px] font-bold text-[#0F172A] mb-1.5">
                            <Sparkles className="w-3 h-3 text-[#5B5AF7]" /> AI Suggestion
                          </div>
                          <p className="text-[9px] text-[#64748B] leading-relaxed mb-2">
                            Tailored based on requirements, tech stack, and your profile.
                          </p>
                          <ul className="space-y-1.5 mb-2.5">
                            {["Matched required skills", "Aligned with budget range", "Included relevant portfolio"].map((item, idx) => (
                              <li key={idx} className="flex items-center gap-1.5 text-[9.5px] font-semibold text-[#334155]">
                                <CheckCircle2 className="w-3 h-3 text-[#10B981] fill-[#10B981] text-white shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                          <button className="w-full py-1 border border-[#E2E8F0] hover:bg-slate-50 rounded-lg text-[9.5px] font-bold text-[#334155] flex items-center justify-center gap-1 shadow-2xs">
                            <RotateCcw className="w-2.5 h-2.5 text-[#64748B]" /> Regenerate
                          </button>
                        </div>

                        <div className="bg-white border border-[#E2E8F0] rounded-xl p-3 shadow-2xs">
                          <div className="text-[10.5px] font-bold text-[#0F172A] mb-1.5">Templates</div>
                          <div className="flex items-center justify-between px-2.5 py-1 bg-[#FAFBFF] border border-[#E2E8F0] rounded-lg text-[10px] font-semibold text-[#0F172A] mb-2">
                            <span>Standard Proposal</span>
                            <ChevronDown className="w-3 h-3 text-[#94A3B8]" />
                          </div>
                          <div className="grid grid-cols-3 gap-1 p-1 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg">
                            {[1, 2, 3].map((tIdx) => (
                              <div key={tIdx} className={`bg-white rounded p-1 border shadow-2xs flex flex-col gap-0.5 ${tIdx === 1 ? 'border-[#5B5AF7] ring-1 ring-[#5B5AF7]' : 'border-[#E2E8F0]'}`}>
                                <div className="w-full h-1 bg-slate-200 rounded-2xs"></div>
                                <div className="w-2/3 h-0.5 bg-slate-100 rounded-2xs"></div>
                                <div className="w-full h-1 bg-[#F4F4FF] rounded-2xs mt-1"></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 4: PIPELINE */}
                {activeTab === 4 && (
                  <div className="w-full bg-[#FAFBFF] flex flex-col h-full p-4.5 justify-between">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0] bg-white -mx-4.5 -mt-4.5 px-4.5 py-3 mb-2.5">
                      <div>
                        <h2 className="text-[16px] font-bold text-[#0F172A]">Sales Pipeline</h2>
                        <p className="text-[10.5px] font-medium text-[#64748B]">Track your opportunities from discovery to signed client.</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="relative">
                          <Search className="w-3 h-3 absolute left-2.5 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
                          <input 
                            type="text" 
                            placeholder="Search deals, clients, or companies..." 
                            className="pl-7 pr-2.5 py-1 rounded-lg border border-[#E2E8F0] bg-white text-[11px] text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none w-[190px]"
                          />
                        </div>
                        <button className="px-2.5 py-1 rounded-lg border border-[#E2E8F0] bg-white text-[11px] font-bold text-[#334155] flex items-center gap-1 shadow-2xs">
                          <CalendarDays className="w-3 h-3 text-[#94A3B8]" /> Last 30 days <ChevronDown className="w-2.5 h-2.5 text-[#94A3B8]" />
                        </button>
                      </div>
                    </div>

                    {/* 5 Kanban Columns (ALL 5 VISIBLE SIDE BY SIDE WITHOUT SCROLLING!) */}
                    <div className="grid grid-cols-5 gap-2.5 flex-1 items-start">
                      {/* Column 1: New Leads */}
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center justify-between px-0.5 mb-0.5">
                          <div className="flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]"></span>
                            <span className="text-[11px] font-bold text-[#0F172A]">New Leads</span>
                            <span className="text-[9px] font-bold text-[#64748B] bg-slate-100 px-1 py-0.2 rounded-full">6</span>
                          </div>
                          <span className="text-[10px] font-bold text-[#64748B]">$28.5k</span>
                        </div>

                        {[
                          { title: "Website Redesign", company: "TechVision Pro", budget: "$3k - $5k", prob: "65%", days: "2d" },
                          { title: "Mobile App Dev", company: "Brightside Co.", budget: "$8k - $12k", prob: "72%", days: "4d" },
                          { title: "Landing Page Design", company: "Nova Labs", budget: "$1.5k - $3k", prob: "58%", days: "5d" }
                        ].map((deal, i) => (
                          <div key={i} className="bg-white border border-[#E2E8F0] rounded-lg p-2 shadow-2xs flex flex-col gap-1">
                            <div>
                              <div className="text-[10.5px] font-bold text-[#0F172A] leading-tight truncate">{deal.title}</div>
                              <div className="text-[9.5px] font-medium text-[#64748B] truncate">{deal.company}</div>
                            </div>
                            <div className="text-[10px] font-bold text-[#334155]">{deal.budget}</div>
                            <div className="flex items-center justify-between pt-0.5 border-t border-slate-100 text-[8.5px]">
                              <span className="px-1 py-0.2 rounded font-bold bg-orange-50 text-orange-600 border border-orange-200">{deal.prob}</span>
                              <span className="text-[#94A3B8] font-medium">{deal.days}</span>
                            </div>
                          </div>
                        ))}
                        <button className="w-full py-1 text-[9.5px] font-bold text-[#64748B] hover:text-[#0F172A] hover:bg-slate-100/60 rounded-md transition-colors flex items-center justify-center gap-0.5">
                          <Plus className="w-2.5 h-2.5" /> Add opportunity
                        </button>
                      </div>

                      {/* Column 2: Contacted */}
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center justify-between px-0.5 mb-0.5">
                          <div className="flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]"></span>
                            <span className="text-[11px] font-bold text-[#0F172A]">Contacted</span>
                            <span className="text-[9px] font-bold text-[#64748B] bg-slate-100 px-1 py-0.2 rounded-full">5</span>
                          </div>
                          <span className="text-[10px] font-bold text-[#64748B]">$42k</span>
                        </div>

                        {[
                          { title: "Full-Stack Dev", company: "Summit Media", budget: "$8k - $10k", prob: "80%", days: "3d", green: true },
                          { title: "API Integration", company: "Orbit Systems", budget: "$4k - $7k", prob: "75%", days: "4d", green: true },
                          { title: "E-commerce Platform", company: "TrendMart", budget: "$10k - $15k", prob: "68%", days: "6d", green: false }
                        ].map((deal, i) => (
                          <div key={i} className="bg-white border border-[#E2E8F0] rounded-lg p-2 shadow-2xs flex flex-col gap-1">
                            <div>
                              <div className="text-[10.5px] font-bold text-[#0F172A] leading-tight truncate">{deal.title}</div>
                              <div className="text-[9.5px] font-medium text-[#64748B] truncate">{deal.company}</div>
                            </div>
                            <div className="text-[10px] font-bold text-[#334155]">{deal.budget}</div>
                            <div className="flex items-center justify-between pt-0.5 border-t border-slate-100 text-[8.5px]">
                              <span className={`px-1 py-0.2 rounded font-bold border ${deal.green ? 'bg-emerald-50 text-emerald-600 border-emerald-200' : 'bg-orange-50 text-orange-600 border-orange-200'}`}>{deal.prob}</span>
                              <span className="text-[#94A3B8] font-medium">{deal.days}</span>
                            </div>
                          </div>
                        ))}
                        <button className="w-full py-1 text-[9.5px] font-bold text-[#64748B] hover:text-[#0F172A] hover:bg-slate-100/60 rounded-md transition-colors flex items-center justify-center gap-0.5">
                          <Plus className="w-2.5 h-2.5" /> Add opportunity
                        </button>
                      </div>

                      {/* Column 3: Proposal Sent */}
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center justify-between px-0.5 mb-0.5">
                          <div className="flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]"></span>
                            <span className="text-[11px] font-bold text-[#0F172A]">Proposal Sent</span>
                            <span className="text-[9px] font-bold text-[#64748B] bg-slate-100 px-1 py-0.2 rounded-full">4</span>
                          </div>
                          <span className="text-[10px] font-bold text-[#64748B]">$38k</span>
                        </div>

                        {[
                          { title: "Brand Identity Design", company: "PixelCraft", budget: "$3k - $5k", prob: "90%", days: "2d", green: true },
                          { title: "SaaS Dashboard", company: "CloudNest", budget: "$8k - $12k", prob: "85%", days: "3d", green: true },
                          { title: "Marketing Website", company: "GrowthLab", budget: "$5k - $8k", prob: "78%", days: "5d", green: false }
                        ].map((deal, i) => (
                          <div key={i} className="bg-white border border-[#E2E8F0] rounded-lg p-2 shadow-2xs flex flex-col gap-1">
                            <div>
                              <div className="text-[10.5px] font-bold text-[#0F172A] leading-tight truncate">{deal.title}</div>
                              <div className="text-[9.5px] font-medium text-[#64748B] truncate">{deal.company}</div>
                            </div>
                            <div className="text-[10px] font-bold text-[#334155]">{deal.budget}</div>
                            <div className="flex items-center justify-between pt-0.5 border-t border-slate-100 text-[8.5px]">
                              <span className={`px-1 py-0.2 rounded font-bold border ${deal.green ? 'bg-emerald-50 text-emerald-600 border-emerald-200' : 'bg-orange-50 text-orange-600 border-orange-200'}`}>{deal.prob}</span>
                              <span className="text-[#94A3B8] font-medium">{deal.days}</span>
                            </div>
                          </div>
                        ))}
                        <button className="w-full py-1 text-[9.5px] font-bold text-[#64748B] hover:text-[#0F172A] hover:bg-slate-100/60 rounded-md transition-colors flex items-center justify-center gap-0.5">
                          <Plus className="w-2.5 h-2.5" /> Add opportunity
                        </button>
                      </div>

                      {/* Column 4: Negotiation */}
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center justify-between px-0.5 mb-0.5">
                          <div className="flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                            <span className="text-[11px] font-bold text-[#0F172A]">Negotiation</span>
                            <span className="text-[9px] font-bold text-[#64748B] bg-slate-100 px-1 py-0.2 rounded-full">3</span>
                          </div>
                          <span className="text-[10px] font-bold text-[#64748B]">$22k</span>
                        </div>

                        {[
                          { title: "CRM Customization", company: "SalesPro", budget: "$6k - $9k", prob: "90%", days: "2d" },
                          { title: "Website Maintenance", company: "Elite Brands", budget: "$3k - $5k", prob: "78%", days: "4d" },
                          { title: "AI Chatbot Integration", company: "NextGen", budget: "$5k - $8k", prob: "70%", days: "6d" }
                        ].map((deal, i) => (
                          <div key={i} className="bg-white border border-[#E2E8F0] rounded-lg p-2 shadow-2xs flex flex-col gap-1">
                            <div>
                              <div className="text-[10.5px] font-bold text-[#0F172A] leading-tight truncate">{deal.title}</div>
                              <div className="text-[9.5px] font-medium text-[#64748B] truncate">{deal.company}</div>
                            </div>
                            <div className="text-[10px] font-bold text-[#334155]">{deal.budget}</div>
                            <div className="flex items-center justify-between pt-0.5 border-t border-slate-100 text-[8.5px]">
                              <span className="px-1 py-0.2 rounded font-bold bg-emerald-50 text-emerald-600 border border-emerald-200">{deal.prob}</span>
                              <span className="text-[#94A3B8] font-medium">{deal.days}</span>
                            </div>
                          </div>
                        ))}
                        <button className="w-full py-1 text-[9.5px] font-bold text-[#64748B] hover:text-[#0F172A] hover:bg-slate-100/60 rounded-md transition-colors flex items-center justify-center gap-0.5">
                          <Plus className="w-2.5 h-2.5" /> Add opportunity
                        </button>
                      </div>

                      {/* Column 5: Won */}
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center justify-between px-0.5 mb-0.5">
                          <div className="flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1]"></span>
                            <span className="text-[11px] font-bold text-[#0F172A]">Won</span>
                            <span className="text-[9px] font-bold text-[#64748B] bg-slate-100 px-1 py-0.2 rounded-full">2</span>
                          </div>
                          <span className="text-[10px] font-bold text-[#64748B]">$18k</span>
                        </div>

                        {[
                          { title: "Web Application", company: "AlphaTech", budget: "$10k - $12k", prob: "100%", days: "1d" },
                          { title: "UI/UX Design", company: "Zenith Co.", budget: "$6k - $8k", prob: "100%", days: "2d" }
                        ].map((deal, i) => (
                          <div key={i} className="bg-white border border-[#E2E8F0] rounded-lg p-2 shadow-2xs flex flex-col gap-1">
                            <div>
                              <div className="text-[10.5px] font-bold text-[#0F172A] leading-tight truncate">{deal.title}</div>
                              <div className="text-[9.5px] font-medium text-[#64748B] truncate">{deal.company}</div>
                            </div>
                            <div className="text-[10px] font-bold text-[#334155]">{deal.budget}</div>
                            <div className="flex items-center justify-between pt-0.5 border-t border-slate-100 text-[8.5px]">
                              <span className="px-1 py-0.2 rounded font-bold bg-emerald-50 text-emerald-600 border border-emerald-200">{deal.prob}</span>
                              <span className="text-[#94A3B8] font-medium">{deal.days}</span>
                            </div>
                          </div>
                        ))}
                        <button className="w-full py-1 text-[9.5px] font-bold text-[#64748B] hover:text-[#0F172A] hover:bg-slate-100/60 rounded-md transition-colors flex items-center justify-center gap-0.5">
                          <Plus className="w-2.5 h-2.5" /> Add opportunity
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 5: PROSPECTING */}
                {activeTab === 5 && (
                  <div className="w-full bg-[#FAFBFF] flex flex-col h-full p-4.5 justify-between">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0] bg-white -mx-4.5 -mt-4.5 px-4.5 py-3 mb-2.5">
                      <div>
                        <h2 className="text-[16px] font-bold text-[#0F172A]">Company Prospecting</h2>
                        <p className="text-[10.5px] font-medium text-[#64748B]">Discover and track high-potential companies before they post opportunities.</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="relative">
                          <Search className="w-3 h-3 absolute left-2.5 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
                          <input 
                            type="text" 
                            placeholder="Search companies, industries, keywords..." 
                            className="pl-7 pr-2.5 py-1 rounded-lg border border-[#E2E8F0] bg-white text-[11px] text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none w-[190px]"
                          />
                        </div>
                        <button className="px-2.5 py-1 rounded-lg border border-[#E2E8F0] bg-white text-[11px] font-bold text-[#334155] flex items-center gap-1 shadow-2xs">
                          <Filter className="w-2.5 h-2.5 text-[#94A3B8]" /> Filters <ChevronDown className="w-2.5 h-2.5 text-[#94A3B8]" />
                        </button>
                        <button className="px-2.5 py-1 rounded-lg border border-[#E2E8F0] bg-white text-[11px] font-bold text-[#334155] flex items-center gap-1 shadow-2xs">
                          <CalendarDays className="w-2.5 h-2.5 text-[#94A3B8]" /> Last 30 days <ChevronDown className="w-2.5 h-2.5 text-[#94A3B8]" />
                        </button>
                      </div>
                    </div>

                    {/* 4 Metric Summary Cards */}
                    <div className="grid grid-cols-4 gap-2.5 mb-2.5">
                      <div className="bg-white border border-[#E2E8F0] rounded-xl p-2.5 shadow-2xs flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center shrink-0">
                          <Building2 className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[10px] font-bold text-[#64748B]">Total Companies</div>
                          <div className="flex items-baseline justify-between mt-0.2">
                            <span className="text-[15px] font-extrabold text-[#0F172A]">1,248</span>
                            <span className="text-[9px] font-bold text-[#10B981]">↑ 12%</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white border border-[#E2E8F0] rounded-xl p-2.5 shadow-2xs flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-[#EFEBFF] text-[#5B5AF7] flex items-center justify-center shrink-0">
                          <Target className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[10px] font-bold text-[#64748B]">High Intent</div>
                          <div className="flex items-baseline justify-between mt-0.2">
                            <span className="text-[15px] font-extrabold text-[#0F172A]">342</span>
                            <span className="text-[9px] font-bold text-[#10B981]">↑ 18%</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white border border-[#E2E8F0] rounded-xl p-2.5 shadow-2xs flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center shrink-0">
                          <Users className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[10px] font-bold text-[#64748B]">Decision Makers</div>
                          <div className="flex items-baseline justify-between mt-0.2">
                            <span className="text-[15px] font-extrabold text-[#0F172A]">1,023</span>
                            <span className="text-[9px] font-bold text-[#10B981]">↑ 24%</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white border border-[#E2E8F0] rounded-xl p-2.5 shadow-2xs flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-[#EFEBFF] text-[#5B5AF7] flex items-center justify-center shrink-0">
                          <BarChart2 className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[10px] font-bold text-[#64748B]">Avg. Match Score</div>
                          <div className="flex items-baseline justify-between mt-0.2">
                            <span className="text-[15px] font-extrabold text-[#0F172A]">87%</span>
                            <span className="text-[9px] font-bold text-[#10B981]">↑ 6%</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Master-Detail Split */}
                    <div className="grid grid-cols-[1.1fr_1.5fr] gap-3 flex-1 overflow-hidden">
                      {/* Left: Companies List */}
                      <div className="bg-white border border-[#E2E8F0] rounded-xl p-3 shadow-2xs flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-1.5 border-b border-slate-100 pb-1.5 mb-2">
                            <span className="text-[10.5px] font-bold text-[#5B5AF7] bg-[#EFEBFF] px-2 py-0.5 rounded cursor-pointer">All 1,248</span>
                            <span className="text-[10.5px] font-semibold text-[#64748B] hover:text-[#0F172A] px-2 py-0.5 cursor-pointer">High Intent 342</span>
                            <span className="text-[10.5px] font-semibold text-[#64748B] hover:text-[#0F172A] px-2 py-0.5 cursor-pointer">Following 86</span>
                          </div>

                          <div className="flex flex-col gap-1.5">
                            {[
                              { name: "NovaTech Solutions", domain: "Software Dev • 50-200 emp", highIntent: true, match: "92%", time: "2d", icon: "N", iconBg: "bg-black text-white", active: true },
                              { name: "Orbit Systems", domain: "IT Consulting • 200-500 emp", highIntent: false, match: "78%", time: "3d", icon: "O", iconBg: "bg-blue-600 text-white", active: false },
                              { name: "PixelCraft", domain: "Design & Dev • 10-50 emp", highIntent: true, match: "85%", time: "4d", icon: "P", iconBg: "bg-purple-600 text-white", active: false },
                              { name: "Summit Media", domain: "Marketing Agency • 50-200 emp", highIntent: false, match: "72%", time: "5d", icon: "S", iconBg: "bg-slate-800 text-white", active: false },
                              { name: "Vertex Labs", domain: "SaaS • 10-50 emp", highIntent: true, match: "88%", time: "6d", icon: "V", iconBg: "bg-indigo-900 text-white", active: false }
                            ].map((comp, idx) => (
                              <div 
                                key={idx} 
                                className={`p-2 rounded-lg border flex items-center justify-between cursor-pointer transition-colors ${
                                  comp.active 
                                    ? 'border-[#5B5AF7] bg-[#F8FAFF] shadow-2xs' 
                                    : 'border-[#E2E8F0] hover:bg-slate-50'
                                }`}
                              >
                                <div className="flex items-center gap-2 min-w-0">
                                  <div className={`w-7 h-7 rounded-md flex items-center justify-center font-bold text-[11px] shrink-0 ${comp.iconBg}`}>
                                    {comp.icon}
                                  </div>
                                  <div className="min-w-0">
                                    <div className="text-[11px] font-bold text-[#0F172A] truncate leading-tight">{comp.name}</div>
                                    <div className="text-[9.5px] text-[#64748B] truncate mt-0.2">{comp.domain}</div>
                                    <div className="flex items-center gap-1 mt-0.5">
                                      {comp.highIntent ? (
                                        <span className="bg-[#D1FAE5] text-[#059669] text-[8.5px] font-bold px-1.5 py-0.2 rounded flex items-center gap-0.5">
                                          <Zap className="w-2 h-2 fill-current" /> High Intent
                                        </span>
                                      ) : (
                                        <span className="bg-[#FEF3C7] text-[#D97706] text-[8.5px] font-bold px-1.5 py-0.2 rounded">
                                          Medium Intent
                                        </span>
                                      )}
                                      <span className="bg-[#E0F2FE] text-[#0284C7] text-[8.5px] font-bold px-1.5 py-0.2 rounded">{comp.match}</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col items-end gap-1 shrink-0">
                                  <span className="text-[9px] text-[#94A3B8]">{comp.time}</span>
                                  <Star className="w-3 h-3 text-[#CBD5E1]" />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right: Company Detail (NovaTech Solutions) */}
                      <div className="bg-white border border-[#E2E8F0] rounded-xl p-3 shadow-2xs flex flex-col justify-between">
                        <div>
                          {/* Header */}
                          <div className="flex items-start justify-between pb-2 border-b border-slate-100 mb-2">
                            <div className="flex items-center gap-2.5">
                              <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center font-bold text-xs shrink-0">
                                N
                              </div>
                              <div>
                                <div className="flex items-center gap-1.5">
                                  <h3 className="text-[12.5px] font-bold text-[#0F172A]">NovaTech Solutions</h3>
                                  <span className="bg-[#D1FAE5] text-[#059669] text-[8.5px] font-bold px-1.5 py-0.2 rounded flex items-center gap-0.5">
                                    <Zap className="w-2 h-2 fill-current" /> High Intent
                                  </span>
                                </div>
                                <p className="text-[9.5px] text-[#64748B]">Software Dev • 50-200 emp • San Francisco, CA</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-1">
                              <button className="px-2.5 py-1 bg-[#5B5AF7] text-white rounded-md text-[10px] font-bold shadow-2xs hover:bg-[#4F46E5] transition-colors">
                                Save to Pipeline
                              </button>
                              <button className="p-1 border border-[#E2E8F0] rounded-md text-slate-400">
                                <MoreHorizontal className="w-3 h-3" />
                              </button>
                            </div>
                          </div>

                          {/* Subtabs */}
                          <div className="flex items-center gap-3 text-[10px] font-bold border-b border-slate-100 pb-1.5 mb-2">
                            <span className="text-[#5B5AF7] border-b-2 border-[#5B5AF7] pb-1">Overview</span>
                            <span className="text-[#64748B]">Tech Stack</span>
                            <span className="text-[#64748B]">Growth Signals</span>
                            <span className="text-[#64748B]">Decision Makers</span>
                          </div>

                          {/* About */}
                          <p className="text-[9px] text-[#64748B] leading-relaxed mb-2">
                            NovaTech Solutions builds modern web & mobile applications for startups and enterprises. They focus on scalable, high-performance solutions.
                          </p>

                          <div className="grid grid-cols-3 gap-1.5 bg-[#F8FAFC] border border-slate-100 rounded-md p-1.5 text-center mb-2">
                            <div>
                              <div className="text-[8px] font-bold text-[#94A3B8]">Founded</div>
                              <div className="text-[10px] font-bold text-[#0F172A]">2018</div>
                            </div>
                            <div>
                              <div className="text-[8px] font-bold text-[#94A3B8]">Revenue</div>
                              <div className="text-[10px] font-bold text-[#0F172A]">$10M - $50M</div>
                            </div>
                            <div>
                              <div className="text-[8px] font-bold text-[#94A3B8]">Employees</div>
                              <div className="text-[10px] font-bold text-[#0F172A]">50 - 200</div>
                            </div>
                          </div>

                          {/* Fit & Challenges */}
                          <div className="grid grid-cols-2 gap-2 mb-2">
                            <div className="bg-[#F0FDF4]/60 border border-emerald-100 rounded-lg p-2">
                              <div className="text-[9.5px] font-bold text-emerald-800 mb-1">Why it's a good fit</div>
                              <ul className="space-y-0.5">
                                {[
                                  "Tech stack matches skills",
                                  "Recent funding (Series A)",
                                  "Growing engineering team"
                                ].map((item, idx) => (
                                  <li key={idx} className="flex items-start gap-1 text-[8px] font-semibold text-emerald-700">
                                    <Check className="w-2.5 h-2.5 text-emerald-600 shrink-0 mt-0.2" strokeWidth={3} />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="bg-[#FFFBEB]/60 border border-amber-100 rounded-lg p-2">
                              <div className="text-[9.5px] font-bold text-amber-800 mb-1">Potential Challenges</div>
                              <ul className="space-y-0.5">
                                {[
                                  "Competitive market",
                                  "May require on-site work",
                                  "Unclear budget range"
                                ].map((item, idx) => (
                                  <li key={idx} className="flex items-start gap-1 text-[8px] font-semibold text-amber-700">
                                    <AlertTriangle className="w-2.5 h-2.5 text-amber-500 shrink-0 mt-0.2" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                        {/* Bottom recommendation pill */}
                        <div className="flex items-center justify-between p-2 bg-[#F4F4FF] border border-[#EFEBFF] rounded-lg">
                          <div className="flex items-center gap-1.5">
                            <Target className="w-3.5 h-3.5 text-[#5B5AF7]" />
                            <div className="text-[9px] text-[#64748B] font-medium">
                              <span className="font-bold text-[#5B5AF7]">Recommended:</span> Matches your skills and preferences.
                            </div>
                          </div>
                          <button className="px-2.5 py-1 bg-[#5B5AF7] text-white rounded-md text-[9.5px] font-bold flex items-center gap-1 shadow-2xs hover:bg-[#4F46E5] transition-colors">
                            View Details <ArrowRight className="w-2.5 h-2.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Arrow */}
        <button 
          onClick={() => setActiveTab(prev => (prev < 5 ? prev + 1 : 1))}
          className="hidden xl:flex absolute right-4 z-10 p-3 bg-white border border-[#E2E8F0] rounded-full shadow-[0_4px_12px_rgba(15,23,42,0.06)] text-[#5B5AF7] hover:bg-gray-50 transition-colors"
          aria-label="Next tab"
        >
          <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
        </button>
      </div>

      {/* Features Bottom Bar */}
      <div className="w-full max-w-[1240px] px-4 md:px-0">
        <div className="bg-white border border-[#E2E8F0] rounded-2xl p-5 md:px-8 md:py-6 flex flex-wrap justify-between items-center gap-6 md:gap-3 shadow-xs">
          {activeData.content.bottomFeatures.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div key={i} className="flex items-center gap-3.5 flex-1 min-w-[200px]">
                <div className="p-2.5 bg-[#F4F4FF] rounded-full text-[#5B5AF7] shrink-0 border border-[#EFEBFF] shadow-2xs">
                  <Icon className="w-4.5 h-4.5" strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="font-bold text-[#0F172A] text-[14px] mb-0.5">{feat.title}</h4>
                  <p className="text-[#64748B] text-[12.5px] font-medium">{feat.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
