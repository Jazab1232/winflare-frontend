import {
  ProposalStageConfig,
  ProposalCardItem,
  ProposalSummaryMetric,
  WinningAssetItem,
  AiSuggestionItem,
} from "../types";

export const MOCK_PROPOSAL_METRICS: ProposalSummaryMetric[] = [
  {
    id: "total_proposals",
    title: "Total Proposals",
    count: "56",
    trendText: "18% from last 7 days",
    isPositive: true,
    theme: "blue",
    sparkline: [32, 38, 36, 44, 42, 50, 56],
  },
  {
    id: "sent",
    title: "Sent",
    count: "18",
    trendText: "12% from last 7 days",
    isPositive: true,
    theme: "cyan",
    sparkline: [9, 11, 10, 13, 13, 16, 18],
  },
  {
    id: "won",
    title: "Won",
    count: "6",
    trendText: "24% from last 7 days",
    isPositive: true,
    theme: "amber",
    sparkline: [2, 3, 3, 4, 4, 5, 6],
  },
  {
    id: "conversion_rate",
    title: "Conversion Rate",
    count: "33%",
    trendText: "6% from last 7 days",
    isPositive: true,
    theme: "purple",
    sparkline: [22, 25, 24, 28, 27, 30, 33],
  },
];

export const MOCK_PROPOSAL_STAGES: ProposalStageConfig[] = [
  {
    id: "draft",
    title: "Draft",
    count: 8,
    theme: {
      headerBg: "bg-slate-50",
      headerBorder: "border-slate-200/80",
      badgeBg: "bg-slate-100",
      badgeText: "text-slate-600",
    },
  },
  {
    id: "review",
    title: "Review",
    count: 5,
    theme: {
      headerBg: "bg-[#FEF3C7]",
      headerBorder: "border-[#FDE68A]",
      badgeBg: "bg-white",
      badgeText: "text-[#92400E]",
    },
  },
  {
    id: "ready",
    title: "Ready",
    count: 7,
    theme: {
      headerBg: "bg-[#EDE9FE]",
      headerBorder: "border-[#DDD6FE]",
      badgeBg: "bg-white",
      badgeText: "text-[#6D28D9]",
    },
  },
  {
    id: "sent",
    title: "Sent",
    count: 6,
    theme: {
      headerBg: "bg-[#DBEAFE]",
      headerBorder: "border-[#BFDBFE]",
      badgeBg: "bg-white",
      badgeText: "text-[#1D4ED8]",
    },
  },
  {
    id: "won",
    title: "Won",
    count: 4,
    theme: {
      headerBg: "bg-[#DCFCE7]",
      headerBorder: "border-[#BBF7D0]",
      badgeBg: "bg-white",
      badgeText: "text-[#15803D]",
    },
  },
  {
    id: "lost",
    title: "Lost",
    count: 2,
    theme: {
      headerBg: "bg-[#FEE2E2]",
      headerBorder: "border-[#FECACA]",
      badgeBg: "bg-white",
      badgeText: "text-[#B91C1C]",
    },
  },
];

export const DEFAULT_PROPOSAL_SECTIONS = [
  {
    id: "intro",
    title: "Introduction",
    subtitle: "Warm, high-converting opening hook tailored to client goals",
    content:
      "Hello John,\n\nI've reviewed your requirements with great interest. Your objective to build an ultra-fast, responsive web application for Verve Labs is both exciting and squarely within my core expertise.\n\nOver the past 6 years, I've built 30+ scalable React/Next.js systems for high-growth tech ventures. I'd love to partner with you to deliver this project with speed, architectural elegance, and zero technical debt.",
    isAiGenerated: true,
    lastEdited: "Just now",
  },
  {
    id: "problem",
    title: "Problem Understanding",
    subtitle: "Demonstrates deep empathy and technical understanding of their challenges",
    content:
      "Based on your job specification and current frontend bottlenecks:\n• Slow initial page load and sluggish interactivity are hurting customer conversion rates.\n• Your current component structure lacks modularity, making feature rollouts slow and error-prone.\n• You need a battle-tested developer who can own the frontend lifecycle without requiring handholding.",
    isAiGenerated: true,
    lastEdited: "10 mins ago",
  },
  {
    id: "solution",
    title: "Solution & Technical Strategy",
    subtitle: "Clear, structured architectural approach solving their core pains",
    content:
      "We will engineer a clean, maintainable frontend architecture utilizing:\n1. Next.js 16 with App Router and React 19 Server Components for instant LCP.\n2. Tailwind CSS with a cohesive design token system for pixel-perfect responsiveness.\n3. TanStack Query for optimistic updates and smooth server state caching.\n4. Strict TypeScript typings ensuring zero runtime undefined exceptions.",
    isAiGenerated: true,
    lastEdited: "15 mins ago",
  },
  {
    id: "timeline",
    title: "Timeline & Key Milestones",
    subtitle: "Realistic timeframes with built-in buffers and checkpoints",
    content:
      "• Milestone 1 (Week 1): Architecture Scaffold, Figma Token Alignment, Core Layouts.\n• Milestone 2 (Week 2): Interactive Dashboards & Dynamic State Management.\n• Milestone 3 (Week 3): API Integrations, Error Boundaries & Mobile Polish.\n• Milestone 4 (Week 4): Performance Auditing, End-to-End QA, and Production Deployment.",
    isAiGenerated: false,
    lastEdited: "1 hour ago",
  },
  {
    id: "deliverables",
    title: "Deliverables & Scope",
    subtitle: "Verifiable outputs provided upon project completion",
    content:
      "1. Clean, modular, fully-tested GitHub repository.\n2. Vercel staging and production environments configured with CI/CD previews.\n3. Component documentation in Storybook or Markdown.\n4. Comprehensive 30-day post-launch warranty guaranteeing instant bug resolution.",
    isAiGenerated: true,
    lastEdited: "2 hours ago",
  },
  {
    id: "pricing",
    title: "Pricing & Payment Terms",
    subtitle: "Transparent value-driven pricing structure",
    content:
      "Total Project Investment: $5,000 USD\n\nPayment Schedule:\n• 30% ($1,500) upon kickoff & architecture blueprint approval\n• 40% ($2,000) upon core dashboard feature completion\n• 30% ($1,500) upon final QA testing and code handoff\n\nNo hidden fees. Invoices payable via Stripe or Bank Wire.",
    isAiGenerated: true,
    lastEdited: "3 hours ago",
  },
  {
    id: "whyme",
    title: "Why Me",
    subtitle: "Specific competitive advantages and proof points",
    content:
      "• Top 1% React & Next.js specialist with 100% Job Success Rate.\n• Shipped apps serving 500k+ monthly active users with sub-second response times.\n• Direct, proactive communication with daily async Loom updates and weekly syncs.\n• Deep business perspective: I focus on your revenue and retention metrics, not just code.",
    isAiGenerated: true,
    lastEdited: "3 hours ago",
  },
  {
    id: "portfolio",
    title: "Portfolio & Relevant Case Studies",
    subtitle: "Concrete proof of similar problems solved",
    content:
      "• PulseAnalytics: Rebuilt frontend from scratch, increasing Lighthouse performance score from 48 to 98 and cutting churn by 22%.\n• OmniDesk SaaS: Delivered multi-tenant customer dashboard in 3 weeks, enabling their $1.2M seed round closing.\n• Live Demos: https://github.com/winflare-demo/react-saas",
    isAiGenerated: false,
    lastEdited: "4 hours ago",
  },
  {
    id: "closing",
    title: "Closing & Next Steps",
    subtitle: "Frictionless call to action for immediate kickoff",
    content:
      "I am ready to kick off this project starting Monday. Let's schedule a brief 15-minute alignment call to review the scope and finalize details.\n\nBest regards,\nNaveed Tahir | Winflare Lead Developer",
    isAiGenerated: true,
    lastEdited: "4 hours ago",
  },
];

export const MOCK_PROPOSAL_ITEMS: ProposalCardItem[] = [
  // 1. prop-1 (Review)
  {
    id: "prop-1",
    title: "Senior Frontend Architecture & UI System",
    stageId: "review",
    company: "Verve Labs",
    role: "Senior Frontend Developer",
    budget: "$5,000 Project",
    value: 5000,
    score: 89,
    priority: "high",
    badges: [
      { label: "High Value", type: "value" },
      { label: "Needs Review", type: "review" },
    ],
    createdAt: "2026-09-07",
    timeInfo: "Created 2 days ago",
    logoLetter: "V",
    logoBg: "bg-[#18181B]",
    proposalType: "fixed_price",
    clientContact: {
      name: "John Harrison",
      email: "john@vervelabs.io",
      companySize: "15-50 employees",
      location: "San Francisco, CA (PST)",
      timezone: "PST (UTC-8)",
    },
    opportunityDetails: {
      jobDescription:
        "Looking for an elite React/Next.js engineer to build our new core analytics product. Must have strong design taste, understand web vitals, and write clean TypeScript.",
      requirements: [
        "Next.js 15/16 App Router",
        "Tailwind CSS",
        "TypeScript",
        "State Management",
        "High Performance",
      ],
      matchScore: 94,
      timelineExpectation: "4 Weeks",
    },
    sections: DEFAULT_PROPOSAL_SECTIONS,
    pricingItems: [
      { id: "p1", description: "Architecture Scaffold & UI Tokens", quantity: 1, rate: 1500 },
      { id: "p2", description: "Interactive Dashboard & State Flow", quantity: 1, rate: 2000 },
      { id: "p3", description: "API Integration & QA Testing", quantity: 1, rate: 1500 },
    ],
    versions: [
      { version: "v1.2", label: "AI Polished with Review Recommendations", timestamp: "Today at 01:15 AM", author: "Winflare AI" },
      { version: "v1.1", label: "Added Pricing Breakdown & Milestones", timestamp: "Yesterday at 04:30 PM", author: "Naveed Tahir" },
      { version: "v1.0", label: "Initial AI Generated Draft", timestamp: "2 days ago", author: "Winflare Generator" },
    ],
    comments: [
      {
        id: "c1",
        author: "Naveed Tahir",
        avatar: "NT",
        content: "Verified their tech stack matches our Next.js template. Need to review pricing terms before sending.",
        timestamp: "Yesterday at 05:00 PM",
      },
      {
        id: "c2",
        author: "Winflare AI",
        avatar: "✨",
        content: "Scored 89/100. Recommend adding the PulseAnalytics case study to push score past 92/100.",
        timestamp: "Today at 01:16 AM",
      },
    ],
    activities: [
      { id: "a1", title: "Review Score Updated", description: "Proposal score evaluated at 89/100 by AI Quality Engine", timestamp: "Today at 01:16 AM", iconType: "score" },
      { id: "a2", title: "Proposal Edited", description: "Updated Problem Understanding & Deliverables", timestamp: "Yesterday at 04:30 PM", iconType: "edit" },
      { id: "a3", title: "Proposal Generated", description: "Created from Freelance Fixed Price template", timestamp: "2 days ago", iconType: "create" },
    ],
  },

  // 2. prop-2 (Draft)
  {
    id: "prop-2",
    title: "Design System & Responsive Web App UI",
    stageId: "draft",
    company: "Figma",
    role: "UI/UX Designer",
    budget: "$3,000 Project",
    value: 3000,
    score: 72,
    priority: "medium",
    badges: [{ label: "Medium Priority", type: "medium" }],
    createdAt: "2026-09-05",
    timeInfo: "Created 4 days ago",
    logoLetter: "F",
    logoBg: "bg-[#000000]",
    proposalType: "fixed_price",
    clientContact: {
      name: "Claire Lin",
      email: "claire@figma.com",
      location: "San Francisco, CA",
    },
    opportunityDetails: {
      jobDescription:
        "Looking for a designer with strong knowledge of Figma design systems, autolayout 5, and token variables.",
      requirements: ["Figma", "Design Tokens", "Autolayout", "Component Variants"],
      matchScore: 88,
    },
    sections: DEFAULT_PROPOSAL_SECTIONS.map((s) => ({
      ...s,
      content: s.content.replace("Verve Labs", "Figma"),
    })),
    pricingItems: [
      { id: "p1", description: "Design Audit & Token System", quantity: 1, rate: 1200 },
      { id: "p2", description: "Component Library & Wireframes", quantity: 1, rate: 1800 },
    ],
    activities: [
      { id: "a1", title: "Draft Created", description: "Initiated proposal draft from Opportunities board", timestamp: "4 days ago", iconType: "create" },
    ],
  },

  // 3. prop-3 (Draft)
  {
    id: "prop-3",
    title: "Full Stack SaaS Platform Development",
    stageId: "draft",
    company: "Acme Inc.",
    role: "Full Stack Developer",
    budget: "$6,000 Project",
    value: 6000,
    score: 75,
    priority: "high",
    badges: [{ label: "High Priority", type: "high" }],
    createdAt: "2026-09-04",
    timeInfo: "Created 5 days ago",
    logoLetter: "A",
    logoBg: "bg-[#334155]",
    proposalType: "fixed_price",
    clientContact: {
      name: "Marcus Brody",
      email: "marcus@acme.corp",
      location: "Austin, TX",
    },
    opportunityDetails: {
      jobDescription: "Need a full stack engineer for a multi-tenant client portal with Supabase and Next.js.",
      requirements: ["Next.js", "Supabase", "PostgreSQL", "Stripe"],
      matchScore: 91,
    },
    sections: DEFAULT_PROPOSAL_SECTIONS.map((s) => ({
      ...s,
      content: s.content.replace("Verve Labs", "Acme Inc."),
    })),
    activities: [
      { id: "a1", title: "Draft Created", description: "Imported from Pipeline card", timestamp: "5 days ago", iconType: "create" },
    ],
  },

  // 4. prop-4 (Review)
  {
    id: "prop-4",
    title: "Interactive React Dashboard Engine",
    stageId: "review",
    company: "NovaTech",
    role: "React Developer",
    budget: "$4,500 Project",
    value: 4500,
    score: 88,
    priority: "high",
    badges: [{ label: "High Priority", type: "high" }],
    createdAt: "2026-09-08",
    timeInfo: "Created 1 day ago",
    logoLetter: "N",
    logoBg: "bg-[#2563EB]",
    proposalType: "fixed_price",
    clientContact: {
      name: "David Kim",
      email: "david@novatech.co",
      location: "New York, NY",
    },
    opportunityDetails: {
      jobDescription: "Build high-throughput real-time charts using Recharts and Tailwind.",
      requirements: ["React 19", "Recharts", "WebSockets", "Tailwind CSS"],
      matchScore: 92,
    },
    sections: DEFAULT_PROPOSAL_SECTIONS.map((s) => ({
      ...s,
      content: s.content.replace("Verve Labs", "NovaTech"),
    })),
    activities: [
      { id: "a1", title: "Review Ready", description: "Proposal completed, awaiting final check", timestamp: "1 day ago", iconType: "edit" },
    ],
  },

  // 5. prop-7 (Ready)
  {
    id: "prop-7",
    title: "Enterprise Frontend Modernization",
    stageId: "ready",
    company: "Growify",
    role: "Frontend Developer",
    budget: "$7,000 Project",
    value: 7000,
    score: 93,
    badges: [{ label: "High Value", type: "value" }],
    createdAt: "2026-09-08",
    timeInfo: "Created 1 day ago",
    logoLetter: "G",
    logoBg: "bg-[#0D9488]",
    proposalType: "fixed_price",
    clientContact: {
      name: "Elena Rostova",
      email: "elena@growify.io",
      location: "London, UK",
    },
    opportunityDetails: {
      jobDescription: "Upgrade legacy Angular platform to Next.js 16 with maximum SEO and conversion performance.",
      requirements: ["Next.js", "SEO", "Accessibility", "TypeScript"],
      matchScore: 96,
    },
    sections: DEFAULT_PROPOSAL_SECTIONS.map((s) => ({
      ...s,
      content: s.content.replace("Verve Labs", "Growify"),
    })),
    activities: [
      { id: "a1", title: "Marked Ready", description: "Passed quality score at 93/100", timestamp: "1 day ago", iconType: "score" },
    ],
  },

  // 6. prop-10 (Sent)
  {
    id: "prop-10",
    title: "Automotive SaaS Customer Portal",
    stageId: "sent",
    company: "Keyloop",
    role: "Frontend Engineer",
    budget: "$7,500 Project",
    value: 7500,
    score: 84,
    createdAt: "2026-09-06",
    sentAt: "2026-09-07",
    timeInfo: "Sent 2 days ago",
    statusBadge: "Awaiting Reply",
    statusType: "awaiting",
    logoLetter: "K",
    logoBg: "bg-[#334155]",
    proposalType: "fixed_price",
    clientContact: {
      name: "Simon Wright",
      email: "simon.w@keyloop.com",
      location: "Manchester, UK",
    },
    opportunityDetails: {
      jobDescription: "Build multi-dealer booking interface with real-time slot scheduling.",
      requirements: ["React", "Booking Systems", "REST APIs", "Tailwind"],
      matchScore: 89,
    },
    sections: DEFAULT_PROPOSAL_SECTIONS.map((s) => ({
      ...s,
      content: s.content.replace("Verve Labs", "Keyloop"),
    })),
    activities: [
      { id: "a1", title: "Proposal Sent", description: "Sent directly via client email portal", timestamp: "2 days ago", iconType: "send" },
    ],
  },

  // 7. prop-11 (Sent)
  {
    id: "prop-11",
    title: "Senior Next.js Platform Architecture",
    stageId: "sent",
    company: "Zenith",
    role: "Senior Frontend Developer",
    budget: "$8,000 Project",
    value: 8000,
    score: 92,
    createdAt: "2026-09-05",
    sentAt: "2026-09-06",
    timeInfo: "Sent 3 days ago",
    statusBadge: "Awaiting Reply",
    statusType: "awaiting",
    logoLetter: "Z",
    logoBg: "bg-[#581C87]",
    proposalType: "fixed_price",
    clientContact: {
      name: "Tariq Mansoor",
      email: "tariq@zenithcloud.com",
      location: "Dubai, UAE",
    },
    opportunityDetails: {
      jobDescription: "Scale our cloud management frontend with sub-second API caching and sleek dark mode UI.",
      requirements: ["Next.js", "Server Components", "Cloud UX", "Tailwind"],
      matchScore: 95,
    },
    sections: DEFAULT_PROPOSAL_SECTIONS.map((s) => ({
      ...s,
      content: s.content.replace("Verve Labs", "Zenith"),
    })),
    activities: [
      { id: "a1", title: "Proposal Sent", description: "Sent to Tariq Mansoor with PDF attachment", timestamp: "3 days ago", iconType: "send" },
    ],
  },

  // 8. prop-13 (Won)
  {
    id: "prop-13",
    title: "Full Stack Web Application Development",
    stageId: "won",
    company: "TechWave",
    role: "Full Stack Developer",
    budget: "$7,500 Project",
    value: 7500,
    score: 96,
    createdAt: "2026-09-02",
    sentAt: "2026-09-03",
    timeInfo: "Won 1 day ago",
    statusBadge: "Client Hired",
    statusType: "hired",
    logoLetter: "T",
    logoBg: "bg-[#065F46]",
    proposalType: "fixed_price",
    clientContact: {
      name: "Rachel Stern",
      email: "rachel@techwave.io",
      location: "Seattle, WA",
    },
    opportunityDetails: {
      jobDescription: "Complete MVP build for AI developer tooling workspace.",
      requirements: ["Next.js", "OpenAI APIs", "PostgreSQL", "Tailwind"],
      matchScore: 98,
    },
    sections: DEFAULT_PROPOSAL_SECTIONS.map((s) => ({
      ...s,
      content: s.content.replace("Verve Labs", "TechWave"),
    })),
    activities: [
      { id: "a1", title: "Deal Won!", description: "Contract signed and escrow funded ($7,500)", timestamp: "1 day ago", iconType: "win" },
      { id: "a2", title: "Proposal Sent", description: "Proposal delivered to Rachel Stern", timestamp: "6 days ago", iconType: "send" },
    ],
  },

  // 9. prop-14 (Won)
  {
    id: "prop-14",
    title: "Modern React Web Application",
    stageId: "won",
    company: "BrightPath",
    role: "Frontend Developer",
    budget: "$5,000 Project",
    value: 5000,
    score: 92,
    createdAt: "2026-09-01",
    sentAt: "2026-09-02",
    timeInfo: "Won 3 days ago",
    statusBadge: "Client Hired",
    statusType: "hired",
    logoLetter: "B",
    logoBg: "bg-[#18181B]",
    proposalType: "fixed_price",
    clientContact: {
      name: "Leo Garcia",
      email: "leo@brightpath.org",
      location: "Toronto, Canada",
    },
    opportunityDetails: {
      jobDescription: "Education portal frontend for student course management.",
      requirements: ["React", "Tailwind", "Responsive Design"],
      matchScore: 93,
    },
    sections: DEFAULT_PROPOSAL_SECTIONS.map((s) => ({
      ...s,
      content: s.content.replace("Verve Labs", "BrightPath"),
    })),
    activities: [
      { id: "a1", title: "Deal Won!", description: "Contract accepted and initial milestone started", timestamp: "3 days ago", iconType: "win" },
    ],
  },

  // 10. prop-15 (Lost)
  {
    id: "prop-15",
    title: "Legacy PHP to React Migration",
    stageId: "lost",
    company: "StrataCore",
    role: "Frontend Engineer",
    budget: "$4,000 Project",
    value: 4000,
    score: 71,
    createdAt: "2026-08-28",
    sentAt: "2026-08-30",
    timeInfo: "Lost 4 days ago",
    statusBadge: "Lost",
    statusType: "lost",
    logoLetter: "S",
    logoBg: "bg-[#7F1D1D]",
    proposalType: "fixed_price",
    clientContact: {
      name: "Danielle Smith",
      email: "danielle@stratacore.net",
    },
    opportunityDetails: {
      jobDescription: "Internal tool migration with tight timeline.",
      requirements: ["React", "PHP API Integration"],
      matchScore: 78,
    },
    sections: DEFAULT_PROPOSAL_SECTIONS.map((s) => ({
      ...s,
      content: s.content.replace("Verve Labs", "StrataCore"),
    })),
    activities: [
      { id: "a1", title: "Opportunity Closed Lost", description: "Client selected internal agency team", timestamp: "4 days ago", iconType: "edit" },
    ],
  },
];

export const MOCK_WINNING_ASSETS: WinningAssetItem[] = [
  {
    id: "asset-1",
    title: "Winning Introductions",
    subtitle: "Used in 12 won deals",
    iconName: "FileText",
    iconColor: "text-[#7C3AED]",
    iconBg: "bg-[#F5F3FF]",
  },
  {
    id: "asset-2",
    title: "Best Case Studies",
    subtitle: "Highest conversion rate",
    iconName: "Image",
    iconColor: "text-[#2563EB]",
    iconBg: "bg-[#DBEAFE]/40",
  },
  {
    id: "asset-3",
    title: "Top Pricing Blocks",
    subtitle: "Most accepted by clients",
    iconName: "Tag",
    iconColor: "text-[#7C3AED]",
    iconBg: "bg-[#F5F3FF]",
  },
  {
    id: "asset-4",
    title: "Client Testimonials",
    subtitle: "Builds instant trust",
    iconName: "MessageSquare",
    iconColor: "text-[#16A34A]",
    iconBg: "bg-[#DCFCE7]/60",
  },
];

export const MOCK_AI_SUGGESTIONS: AiSuggestionItem[] = [
  {
    id: "sug-1",
    title: "Verve Labs Proposal",
    company: "Verve Labs",
    score: 89,
    potentialText: "+8% potential",
    recommendationText: "Add SaaS case study to increase credibility.",
  },
  {
    id: "sug-2",
    title: "Figma Proposal",
    company: "Figma",
    score: 72,
    potentialText: "+14% potential",
    recommendationText: "Shorten introduction and highlight design token expertise.",
  },
  {
    id: "sug-3",
    title: "Acme Inc. Proposal",
    company: "Acme Inc.",
    score: 75,
    potentialText: "+11% potential",
    recommendationText: "Clarify timeline milestones and add 30-day warranty clause.",
  },
];
