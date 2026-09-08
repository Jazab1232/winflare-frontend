import { ProposalTemplate } from "../types";

export const MOCK_TEMPLATES: ProposalTemplate[] = [
  {
    id: "tpl-saas-mvp",
    title: "SaaS MVP Fast-Track Proposal",
    category: "SaaS",
    description:
      "Engineered for early-stage B2B and consumer SaaS products needing rapid, scalable Next.js and Supabase execution in 6-8 weeks.",
    sectionsCount: 9,
    winRate: "44%",
    timesUsed: 38,
    timelineDuration: "6 Weeks",
    pricingModel: "Milestone-Based ($12,500)",
    tags: ["Next.js", "Tailwind", "Supabase", "Stripe", "Auth"],
    sections: [
      {
        id: "sec-intro",
        title: "Introduction",
        content:
          "Hello,\n\nI am thrilled to submit this proposal to build and launch your upcoming SaaS product. Based on our analysis of your requirements, we understand that speed-to-market, architectural scalability, and clean UX are non-negotiable.\n\nOur team specializes in high-velocity Next.js 16 architectures backed by type-safe APIs, battle-tested Stripe subscription billing, and enterprise-grade authentication.",
      },
      {
        id: "sec-problem",
        title: "Problem Understanding",
        content:
          "Your team needs to validate market demand with a production-grade MVP without incurring technical debt. Key obstacles include:\n• Designing an intuitive onboarding and conversion funnel.\n• Multi-tenant role permissions with strict row-level security.\n• Fast deployment timelines without sacrificing code quality.",
      },
      {
        id: "sec-solution",
        title: "Solution & Technical Architecture",
        content:
          "We propose a modular, headless full-stack system:\n• Frontend: Next.js App Router with Tailwind CSS and Radix UI.\n• Backend: Server Actions & Edge runtime for sub-100ms API responses.\n• Database: PostgreSQL with Supabase Auth and Row Level Security (RLS).\n• Billing: Stripe Checkout & Customer Portal with webhook reconciliations.\n• Analytics & Monitoring: PostHog and Sentry instrumentation.",
      },
      {
        id: "sec-timeline",
        title: "Timeline & Milestones",
        content:
          "Phase 1 (Weeks 1-2): Foundation, database schemas, auth, and interactive wireframes.\nPhase 2 (Weeks 3-4): Core dashboard, user workflows, and CRUD operations.\nPhase 3 (Weeks 5): Stripe billing integration, team invites, and email triggers.\nPhase 4 (Week 6): End-to-end testing, security audits, and production launch.",
      },
      {
        id: "sec-deliverables",
        title: "Key Deliverables",
        content:
          "1. Production-ready Next.js web application repository.\n2. Complete automated CI/CD pipeline on Vercel.\n3. Stripe subscriptions and billing lifecycle management.\n4. Comprehensive technical documentation and OpenAPI specs.\n5. 30 days of post-launch bug warranty and support.",
      },
      {
        id: "sec-pricing",
        title: "Pricing & Payment Schedule",
        content:
          "Total Fixed Price: $12,500 USD\n• Milestone 1: 30% upon project kickoff and architectural approval.\n• Milestone 2: 35% upon completion of core dashboard and billing integration.\n• Milestone 3: 35% upon final QA, documentation handoff, and domain cutover.",
      },
      {
        id: "sec-whyme",
        title: "Why Me",
        content:
          "• 8+ years building enterprise web apps and venture-backed SaaS.\n• 100% Top-Rated status with over $450K+ in client contract volume.\n• Deep expertise in React 19, TypeScript, and serverless architectures.",
      },
      {
        id: "sec-portfolio",
        title: "Portfolio & Case Studies",
        content:
          "Case Study 1: PulseAnalytics — Scaled B2B analytics portal to 50k MAU in 3 months.\nCase Study 2: VaultPay — Integrated multi-tier Stripe billing with zero billing sync anomalies.",
      },
      {
        id: "sec-closing",
        title: "Closing & Next Steps",
        content:
          "I would love to jump on a quick 15-minute alignment call this week to review the timeline, answer any architectural questions, and lock in the kickoff date.\n\nLooking forward to partnering with you,\nWinflare Solutions",
      },
    ],
    pricingItems: [
      { id: "p1", description: "Architecture & Auth Foundation", quantity: 1, rate: 3500 },
      { id: "p2", description: "Core Feature Development & Workflows", quantity: 1, rate: 4500 },
      { id: "p3", description: "Stripe Billing & Third-Party APIs", quantity: 1, rate: 2500 },
      { id: "p4", description: "Testing, Launch & 30-Day Warranty", quantity: 1, rate: 2000 },
    ],
  },
  {
    id: "tpl-web-redesign",
    title: "Modern Web App Redesign & Optimization",
    category: "Web Development",
    description:
      "Comprehensive frontend modernization, performance audit, and responsive redesign to boost organic conversions and user retention.",
    sectionsCount: 9,
    winRate: "39%",
    timesUsed: 29,
    timelineDuration: "4 Weeks",
    pricingModel: "Fixed Scope ($7,500)",
    tags: ["React", "UI Modernization", "Core Web Vitals", "Accessibility"],
    sections: [
      {
        id: "sec-intro",
        title: "Introduction",
        content:
          "Hello,\n\nThank you for considering us to redesign and elevate your web application. Your current platform has great momentum, but outdated UI patterns and slow load times are throttling conversion rates.",
      },
      {
        id: "sec-problem",
        title: "Problem Understanding",
        content:
          "Users expect instantaneous responsiveness and intuitive navigation. Currently, high bounce rates and mobile UX friction are preventing visitors from completing key onboarding actions.",
      },
      {
        id: "sec-solution",
        title: "Solution",
        content:
          "We will transform your frontend into an ultra-fast, visually stunning modern experience using React, Tailwind CSS, and optimized asset delivery.",
      },
      {
        id: "sec-timeline",
        title: "Timeline",
        content:
          "Week 1: UX Wireframes & Design System\nWeek 2: Component Architecture & Core Pages\nWeek 3: Mobile Optimization & Interactions\nWeek 4: Performance Audits & Deployment",
      },
      {
        id: "sec-deliverables",
        title: "Deliverables",
        content:
          "• Complete Figma design system with tokens.\n• Clean, accessible React code.\n• 95+ Core Web Vitals score on mobile and desktop.",
      },
      {
        id: "sec-pricing",
        title: "Pricing",
        content: "Fixed Project Fee: $7,500 split into 2 equal milestones (50% upfront, 50% on completion).",
      },
      {
        id: "sec-whyme",
        title: "Why Me",
        content: "Recognized as a leading frontend performance specialist with over 40 successful web transformations.",
      },
      {
        id: "sec-portfolio",
        title: "Portfolio",
        content: "Case Study: Redesigned FlowSync leading to a 34% increase in user signup completion.",
      },
      {
        id: "sec-closing",
        title: "Closing",
        content: "Ready to get started next Monday. Let's schedule an alignment call today!",
      },
    ],
    pricingItems: [
      { id: "p1", description: "Design System & Figma Architecture", quantity: 1, rate: 2500 },
      { id: "p2", description: "Frontend Development & Responsive Styling", quantity: 1, rate: 3500 },
      { id: "p3", description: "Performance Tuning & Core Web Vitals", quantity: 1, rate: 1500 },
    ],
  },
  {
    id: "tpl-mobile-app",
    title: "Cross-Platform React Native Mobile App",
    category: "Mobile Apps",
    description:
      "Dual iOS and Android deployment from a single performant codebase with native push notifications, offline cache, and biometric authentication.",
    sectionsCount: 9,
    winRate: "41%",
    timesUsed: 22,
    timelineDuration: "8 Weeks",
    pricingModel: "Milestone-Based ($16,000)",
    tags: ["React Native", "Expo", "iOS", "Android", "Push Notifications"],
    sections: [
      {
        id: "sec-intro",
        title: "Introduction",
        content: "We deliver 60fps native-feeling mobile applications that delight users across both the Apple App Store and Google Play Store.",
      },
      {
        id: "sec-problem",
        title: "Problem Understanding",
        content: "Building separate native apps for iOS and Android doubles development cost and delays roadmap milestones.",
      },
      {
        id: "sec-solution",
        title: "Solution",
        content: "Using React Native and Expo EAS, we build a single unified codebase with native platform adapters and instant OTA updates.",
      },
      {
        id: "sec-timeline",
        title: "Timeline",
        content: "Weeks 1-2: Setup & Auth\nWeeks 3-5: Core Feature Modules\nWeeks 6-7: Push notifications & Offline support\nWeek 8: Store Submission & Approval",
      },
      {
        id: "sec-deliverables",
        title: "Deliverables",
        content: "1. Fully compiled iOS .ipa and Android .aab builds ready for store distribution.\n2. GitHub repository with automated EAS workflows.",
      },
      {
        id: "sec-pricing",
        title: "Pricing",
        content: "Total: $16,000 across 4 milestones.",
      },
      {
        id: "sec-whyme",
        title: "Why Me",
        content: "Shipped 15+ top-rated mobile apps with over 200,000 combined App Store downloads.",
      },
      {
        id: "sec-portfolio",
        title: "Portfolio",
        content: "Featured in Apple App Store 'New Apps We Love' for FitPulse Tracker.",
      },
      {
        id: "sec-closing",
        title: "Closing",
        content: "Let's bring your mobile vision to life. Ready to discuss store submission requirements.",
      },
    ],
    pricingItems: [
      { id: "p1", description: "Mobile Scaffold & Biometric Authentication", quantity: 1, rate: 4000 },
      { id: "p2", description: "Core Feature Engines & API Connectors", quantity: 1, rate: 6000 },
      { id: "p3", description: "Notifications, Offline Sync & Device APIs", quantity: 1, rate: 3500 },
      { id: "p4", description: "App Store & Play Store Distribution Prep", quantity: 1, rate: 2500 },
    ],
  },
  {
    id: "tpl-uiux-design",
    title: "Product Design & Figma Design System",
    category: "UI/UX",
    description:
      "End-to-end product design, UX journey mapping, component-driven Figma system, and developer-ready handoff documentation.",
    sectionsCount: 9,
    winRate: "48%",
    timesUsed: 42,
    timelineDuration: "3 Weeks",
    pricingModel: "Fixed Price ($5,500)",
    tags: ["Figma", "Design Tokens", "Wireframing", "User Research"],
    sections: [
      {
        id: "sec-intro",
        title: "Introduction",
        content: "Great engineering fails without great UX. We craft clean, modern, high-converting product interfaces that users love.",
      },
      {
        id: "sec-problem",
        title: "Problem Understanding",
        content: "Complex workflows confuse users and reduce activation rates. You need clarity, consistency, and a scalable design language.",
      },
      {
        id: "sec-solution",
        title: "Solution",
        content: "We deliver an intuitive user experience backed by research, wireframes, high-fidelity prototypes, and a comprehensive design system.",
      },
      {
        id: "sec-timeline",
        title: "Timeline",
        content: "Week 1: Discovery & Wireframes\nWeek 2: High-Fidelity UI Screens\nWeek 3: Design Tokens, Interactive Prototype & Handoff",
      },
      {
        id: "sec-deliverables",
        title: "Deliverables",
        content: "Complete Figma file with autolayout components, variants, light/dark modes, and developer inspection guides.",
      },
      {
        id: "sec-pricing",
        title: "Pricing",
        content: "Fixed Fee: $5,500 (50% deposit, 50% upon final Figma file transfer).",
      },
      {
        id: "sec-whyme",
        title: "Why Me",
        content: "Former Lead Product Designer at venture-backed fintech with 10+ Dribbble features.",
      },
      {
        id: "sec-portfolio",
        title: "Portfolio",
        content: "Designed Nova CRM which closed $4M Series A with our designs.",
      },
      {
        id: "sec-closing",
        title: "Closing",
        content: "Let's create a world-class visual experience for your platform.",
      },
    ],
    pricingItems: [
      { id: "p1", description: "UX Journey Mapping & Low-Fi Wireframes", quantity: 1, rate: 1800 },
      { id: "p2", description: "High-Fidelity UI Screens & Component Library", quantity: 1, rate: 2500 },
      { id: "p3", description: "Interactive Prototype & Dev Handoff Specs", quantity: 1, rate: 1200 },
    ],
  },
  {
    id: "tpl-growth-marketing",
    title: "B2B SaaS Growth & Funnel Optimization",
    category: "Marketing",
    description:
      "Data-driven growth sprints, landing page conversion rate optimization, automated email sequences, and outbound pipeline setup.",
    sectionsCount: 9,
    winRate: "35%",
    timesUsed: 19,
    timelineDuration: "Monthly Retainer",
    pricingModel: "$4,000 / Month",
    tags: ["CRO", "Outbound", "Cold Email", "Analytics", "Copywriting"],
    sections: [
      {
        id: "sec-intro",
        title: "Introduction",
        content: "Accelerate pipeline generation through systematic testing, proven cold outbound playbooks, and high-converting landing pages.",
      },
      {
        id: "sec-problem",
        title: "Problem Understanding",
        content: "High customer acquisition costs and low website conversion rates are choking SaaS revenue growth.",
      },
      {
        id: "sec-solution",
        title: "Solution",
        content: "A full-funnel optimization strategy covering message-market fit, landing page A/B tests, and multi-channel prospecting.",
      },
      {
        id: "sec-timeline",
        title: "Timeline",
        content: "Month 1: Audit, Messaging Framework, & Infrastructure Setup\nMonth 2: Outbound Execution & Landing Page Experiments\nMonth 3: Scaling winning channels",
      },
      {
        id: "sec-deliverables",
        title: "Deliverables",
        content: "• 2 High-converting landing page redesigns.\n• 3 Automated email sequences.\n• Weekly growth analytics dashboard.",
      },
      {
        id: "sec-pricing",
        title: "Pricing",
        content: "$4,000/month rolling retainer with 30-day cancellation notice.",
      },
      {
        id: "sec-whyme",
        title: "Why Me",
        content: "Generated over $2.5M in qualified pipeline for 12 B2B SaaS startups.",
      },
      {
        id: "sec-portfolio",
        title: "Portfolio",
        content: "Helped CloudSecure increase demo bookings by 78% in 60 days.",
      },
      {
        id: "sec-closing",
        title: "Closing",
        content: "Ready to scale your pipeline this quarter.",
      },
    ],
    pricingItems: [
      { id: "p1", description: "Funnel Audit & Landing Page CRO", quantity: 1, rate: 2000 },
      { id: "p2", description: "Outbound Sequences & Automation", quantity: 1, rate: 2000 },
    ],
  },
  {
    id: "tpl-tech-consulting",
    title: "Fractional CTO & Technical Architecture Advisory",
    category: "Consulting",
    description:
      "Strategic tech roadmap, vendor vetting, architecture reviews, and hiring advisory for founders navigating critical tech scale.",
    sectionsCount: 9,
    winRate: "52%",
    timesUsed: 31,
    timelineDuration: "Ongoing Advisory",
    pricingModel: "$6,000 / Month",
    tags: ["Fractional CTO", "Architecture", "Cloud Audit", "Code Review"],
    sections: [
      {
        id: "sec-intro",
        title: "Introduction",
        content: "Senior technical leadership without the $300k executive overhead. Guiding your engineering decisions with certainty.",
      },
      {
        id: "sec-problem",
        title: "Problem Understanding",
        content: "Founders often get stuck making high-stakes technical decisions without experienced senior technical advisors.",
      },
      {
        id: "sec-solution",
        title: "Solution",
        content: "Weekly strategic advisory, architectural reviews, hiring pipeline interviews, and infrastructure cost optimization.",
      },
      {
        id: "sec-timeline",
        title: "Timeline",
        content: "Continuous weekly engagements: 2x 1-hour strategy calls + async code/PR reviews and architecture oversight.",
      },
      {
        id: "sec-deliverables",
        title: "Deliverables",
        content: "Quarterly technology roadmap, security compliance checklist, and architecture decision records (ADRs).",
      },
      {
        id: "sec-pricing",
        title: "Pricing",
        content: "$6,000 per month on a quarterly agreement.",
      },
      {
        id: "sec-whyme",
        title: "Why Me",
        content: "12+ years CTO experience with 2 successful acquisitions and extensive AWS/GCP mastery.",
      },
      {
        id: "sec-portfolio",
        title: "Portfolio",
        content: "Audited and reduced AWS burn by 42% for Series B fintech.",
      },
      {
        id: "sec-closing",
        title: "Closing",
        content: "Let's build a rock-solid technical foundation together.",
      },
    ],
    pricingItems: [
      { id: "p1", description: "Weekly Advisory Calls & Architecture Reviews", quantity: 1, rate: 4000 },
      { id: "p2", description: "Async PR Reviews, Tech Roadmapping & Vetting", quantity: 1, rate: 2000 },
    ],
  },
];

