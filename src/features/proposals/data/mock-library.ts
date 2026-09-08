import { ProposalLibraryItem } from "../types";

export const MOCK_LIBRARY_ITEMS: ProposalLibraryItem[] = [
  // 1. Winning Introductions
  {
    id: "lib-intro-1",
    category: "introductions",
    title: "High-Empathy Problem First Hook",
    content:
      "Hello {{ClientName}},\n\nI reviewed your project requirements for {{Role}}, and the key challenge you're facing with {{CoreProblem}} immediately resonated with me. Many teams in {{Industry}} struggle with this exact bottleneck, usually leading to lost revenue and engineering fatigue.\n\nOver the past 5 years, I've solved this exact issue for 14+ high-growth companies. Here is my concrete plan to fix this for you within {{Timeline}}:",
    tags: ["High Conversion", "Problem-First", "Empathy", "SaaS"],
    timesUsed: 46,
    winRateBoost: "+18% Win Rate",
  },
  {
    id: "lib-intro-2",
    category: "introductions",
    title: "Speed-to-Market Technical Hook",
    content:
      "Hi there,\n\nSpeed and technical reliability don't have to be mutually exclusive. Having delivered 20+ production applications using {{TechStack}}, I can take this from scope to live deployment in {{Timeline}} without cutting corners on test coverage, security, or responsive performance.",
    tags: ["Technical", "Fast Execution", "Engineering"],
    timesUsed: 31,
    winRateBoost: "+14% Win Rate",
  },
  {
    id: "lib-intro-3",
    category: "introductions",
    title: "Consultative Strategic Advisor Hook",
    content:
      "Hello {{ClientName}},\n\nBefore diving into the code, it's critical to ensure the architecture supports your commercial roadmap. Looking at your goals, building this cleanly today will save you dozens of hours of refactoring when you reach 10x user scale. Here is how I approach this project with both strategic foresight and immediate execution:",
    tags: ["Consulting", "Enterprise", "Architecture"],
    timesUsed: 27,
    winRateBoost: "+22% Win Rate",
  },

  // 2. Case Studies
  {
    id: "lib-case-1",
    category: "case_studies",
    title: "PulseFlow: Next.js SaaS MVP Scaled to 40k MAU",
    content:
      "• Client: PulseFlow Analytics (B2B SaaS)\n• Problem: Existing React app was slow, lacked proper multi-tenancy, and took 4.2s to load dashboard metrics.\n• Solution: Rebuilt core platform on Next.js App Router with Server Actions, Supabase RLS, and TanStack Query.\n• Results: Reduced LCP to 0.8s, enabled zero-latency queries, and helped the team onboard 40,000 active users in 90 days with zero downtime.",
    tags: ["Next.js", "Performance", "SaaS", "Supabase"],
    timesUsed: 52,
    winRateBoost: "+26% Win Rate",
  },
  {
    id: "lib-case-2",
    category: "case_studies",
    title: "FinVault: Stripe Enterprise Billing & Subscription Automation",
    content:
      "• Client: FinVault Infrastructure\n• Challenge: Complex tiered pricing with usage-based overages caused frequent billing reconciliation mismatches.\n• Solution: Integrated Stripe Customer Portal with idempotent webhook processing and automated invoice retries.\n• Outcome: 100% billing accuracy across $3.2M in annual recurring revenue with automated dunning recovery saving $180k/yr.",
    tags: ["Stripe", "Fintech", "Billing", "APIs"],
    timesUsed: 38,
    winRateBoost: "+19% Win Rate",
  },
  {
    id: "lib-case-3",
    category: "case_studies",
    title: "Aura UI: Figma to Accessible React Component Library",
    content:
      "• Client: Aura Health (Telehealth Platform)\n• Challenge: Inconsistent UI across web and mobile caused user drop-off during appointment scheduling.\n• Solution: Crafted 65+ accessible WCAG 2.1 AA compliant components in Tailwind CSS and Radix UI.\n• Outcome: Increased appointment booking conversion by 31% and cut developer frontend sprint cycle times by half.",
    tags: ["Design System", "Accessibility", "Tailwind", "UI/UX"],
    timesUsed: 29,
    winRateBoost: "+15% Win Rate",
  },

  // 3. Testimonials
  {
    id: "lib-test-1",
    category: "testimonials",
    title: "Founder & CEO, B2B SaaS Startup",
    content:
      "\"Working with this team was the best decision we made for our seed round. They didn't just write code; they challenged our assumptions and delivered a product that our beta customers couldn't stop raving about. Completed 4 days ahead of schedule.\"\n— Alex Vance, Founder @ MetricLayer",
    tags: ["Founder Review", "Speed", "Product Sense"],
    timesUsed: 64,
    winRateBoost: "+24% Win Rate",
  },
  {
    id: "lib-test-2",
    category: "testimonials",
    title: "VP of Engineering, Enterprise Logistics",
    content:
      "\"Rarely do you find an engineer who writes immaculate, self-documenting code and communicates proactively every single day. The proposal matched the exact delivery down to the dollar.\"\n— Sarah Jenkins, VP of Engineering @ CargoStream",
    tags: ["Enterprise", "Code Quality", "Communication"],
    timesUsed: 43,
    winRateBoost: "+17% Win Rate",
  },

  // 4. Pricing Packages
  {
    id: "lib-price-1",
    category: "pricing",
    title: "Milestone-Based Fixed Scope Schedule",
    content:
      "Payment Structure (Tied to Verifiable Deliverables):\n• Milestone 1 (30%): Project Kickoff, Architecture Blueprint, & Wireframe Approval.\n• Milestone 2 (40%): Core Feature Implementation, Database Schema & API Integrations.\n• Milestone 3 (30%): End-to-End QA Testing, Security Review, Domain Cutover, & Knowledge Transfer.\n*Includes 30 days of comprehensive post-launch warranty at no additional charge.",
    tags: ["Fixed Price", "Milestones", "Safe", "Transparent"],
    timesUsed: 71,
    winRateBoost: "+28% Win Rate",
  },
  {
    id: "lib-price-2",
    category: "pricing",
    title: "Dedicated Monthly Engineering Retainer",
    content:
      "Dedicated Sprint Retainer:\n• Rate: $5,500 / month (equivalent to 20 focused hours/week).\n• Includes: Feature roadmap sprints, asynchronous PR reviews, architecture decisions, and priority bug fixes.\n• Flexibility: Unused hours roll over for up to 30 days. Cancel or pause anytime with 14 days notice.",
    tags: ["Retainer", "Hourly Equivalent", "Agile", "Long-term"],
    timesUsed: 35,
    winRateBoost: "+12% Win Rate",
  },

  // 5. FAQs
  {
    id: "lib-faq-1",
    category: "faqs",
    title: "Intellectual Property & Code Ownership",
    content:
      "Q: Who owns the code and intellectual property produced during this project?\nA: You own 100% of all code, assets, repositories, designs, and intellectual property from the moment payment is cleared. Everything is delivered under an unrestricted MIT or proprietary license with no ongoing royalties or licensing fees.",
    tags: ["Legal", "Ownership", "Trust", "Security"],
    timesUsed: 59,
    winRateBoost: "+16% Win Rate",
  },
  {
    id: "lib-faq-2",
    category: "faqs",
    title: "Communication & Timezone Availability",
    content:
      "Q: How do we communicate and handle updates during the sprint?\nA: We run weekly 20-minute Zoom syncs and post daily asynchronous Slack/Loom progress recaps. You will have full access to our Jira/Linear board and staging environments with guaranteed response times within 3 hours during business hours.",
    tags: ["Communication", "Slack", "Timezones"],
    timesUsed: 48,
    winRateBoost: "+11% Win Rate",
  },
  {
    id: "lib-faq-3",
    category: "faqs",
    title: "Post-Launch Warranty & Bug Fix Guarantee",
    content:
      "Q: What happens if a bug arises after final deployment?\nA: Every engagement includes a complimentary 30-day warranty window. Any defects or issues that deviate from agreed specifications will be addressed immediately at zero additional cost.",
    tags: ["Warranty", "Guarantee", "Peace of Mind"],
    timesUsed: 53,
    winRateBoost: "+20% Win Rate",
  },

  // 6. Service Descriptions
  {
    id: "lib-srv-1",
    category: "services",
    title: "Full-Stack Web App Development (Next.js & Supabase)",
    content:
      "Turnkey web application engineering from initial database architecture to production serverless deployment. Built with Next.js 16, TypeScript, Tailwind CSS, and Supabase. Includes authentication, secure APIs, database migrations, and responsive UI.",
    tags: ["Full Stack", "Next.js", "Web Apps"],
    timesUsed: 44,
    winRateBoost: "+15% Win Rate",
  },
  {
    id: "lib-srv-2",
    category: "services",
    title: "Conversion-Focused UI/UX & Design System",
    content:
      "Comprehensive product design in Figma with atomic design tokens, user flow wireframes, high-fidelity prototypes, and component libraries engineered for effortless developer handoff.",
    tags: ["Figma", "UI/UX", "Design Systems"],
    timesUsed: 39,
    winRateBoost: "+13% Win Rate",
  },
];

