import type {
  NavLinkItem,
  FeatureItem,
  TestimonialItem,
  PricingTier,
  FAQItem,
  FooterGroup,
} from "../types";

export const NAV_LINKS: NavLinkItem[] = [
  { label: "Features", href: "/#features" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Testimonials", href: "/#testimonials" },
];

export const HERO_CONTENT = {
  badge: "Introducing Winflare 2.0 AI Proposal Engine",
  titlePrefix: "Win High-Ticket Clients with ",
  titleHighlight: "High-Converting Proposals",
  subtitle:
    "Discover verified enterprise opportunities, generate tailored client-winning proposals in minutes, and track your pipeline with data-driven win-rate intelligence.",
  ctaPrimary: "Start 14-Day Free Trial",
  ctaSecondary: "Explore Features",
  socialProof: {
    rating: "4.9/5",
    reviewCount: "from 1,400+ reviews",
    wonValue: "Over $48M+ won proposals",
    speedBoost: "3.4x faster submission speed",
  },
};

export const FEATURES_CONTENT: FeatureItem[] = [
  {
    id: "radar",
    title: "Smart Opportunity Radar",
    description:
      "Continuously scans and filters verified enterprise gigs, RFP boards, and private networks to surface leads matching your exact skills and rate requirements.",
    tag: "Discovery",
    iconName: "Compass",
  },
  {
    id: "ai-engine",
    title: "AI Proposal Generation",
    description:
      "Turns complex client briefs into compelling, tailored pitches in seconds with strategic positioning, accurate scopes of work, and value-focused milestones.",
    tag: "AI Intelligence",
    iconName: "Sparkles",
  },
  {
    id: "case-studies",
    title: "Dynamic Portfolio & Proof",
    description:
      "Automatically embeds relevant case studies, verified client testimonials, and metrics directly into your proposals to build immediate authority.",
    tag: "Authority",
    iconName: "FileText",
  },
  {
    id: "analytics",
    title: "Win-Rate Intelligence",
    description:
      "Benchmark your pricing against historical winning bids and competitor averages to maximize your fee without pricing yourself out of the deal.",
    tag: "Analytics",
    iconName: "BarChart3",
  },
  {
    id: "follow-ups",
    title: "Automated Follow-Up Sequences",
    description:
      "Intelligent nudges and viewing alerts inform you the moment a prospective client opens your proposal, prompting timely, non-intrusive follow-ups.",
    tag: "Conversion",
    iconName: "Clock",
  },
  {
    id: "collaboration",
    title: "Collaborative Team Workspaces",
    description:
      "Share templates, review peer proposals, assign roles, and track agency pipeline performance in a centralized multi-seat dashboard.",
    tag: "Team",
    iconName: "Users2",
  },
];

export const TESTIMONIALS_CONTENT: TestimonialItem[] = [
  {
    id: "elena",
    quote:
      "Winflare completely replaced our chaotic Google Docs proposal workflow. Our agency went from a 22% win rate on competitive RFPs to 46% within the first 60 days.",
    author: "Elena Rostova",
    role: "Founder & Creative Director",
    company: "Studio Apex",
    avatarBg: "from-purple-500 to-indigo-600",
    rating: 5,
    wonValue: "$180,000+ won",
  },
  {
    id: "marcus",
    quote:
      "The AI proposal engine isn't generic fluff. It accurately synthesizes client pain points and pairs them with my past case studies. I closed a $35k contract on day two.",
    author: "Marcus Chen",
    role: "Full-Stack Architect & Consultant",
    company: "Independent",
    avatarBg: "from-orange-500 to-amber-600",
    rating: 5,
    wonValue: "$35,000 contract",
  },
  {
    id: "sarah",
    quote:
      "Being able to see when prospective enterprise clients open my proposal and which sections they linger on gave me an unfair advantage in follow-up negotiation calls.",
    author: "Sarah Jenkins",
    role: "Head of Growth & Partnerships",
    company: "VentureScale Agency",
    avatarBg: "from-emerald-500 to-teal-600",
    rating: 5,
    wonValue: "3x pipeline growth",
  },
  {
    id: "devon",
    quote:
      "As a freelance designer, pricing was always my Achilles' heel. Winflare’s rate intelligence helped me double my standard project rates without losing clients.",
    author: "Devon Miller",
    role: "Product & Brand Designer",
    company: "Miller Design Lab",
    avatarBg: "from-blue-500 to-cyan-600",
    rating: 5,
    wonValue: "2x rate increase",
  },
  {
    id: "priya",
    quote:
      "We respond to 15-20 enterprise RFPs a month. Winflare reduced our preparation time from 8 hours per deck down to under 45 minutes. The ROI has been monumental.",
    author: "Priya Sharma",
    role: "VP of Business Development",
    company: "CloudCore Systems",
    avatarBg: "from-pink-500 to-rose-600",
    rating: 5,
    wonValue: "100+ hours saved/mo",
  },
  {
    id: "liam",
    quote:
      "If you're serious about scaling your consulting income, Winflare is the single best investment you can make this year. It pays for itself with just one proposal.",
    author: "Liam O'Connor",
    role: "Senior AI & Data Consultant",
    company: "Apex Intelligence",
    avatarBg: "from-amber-500 to-red-600",
    rating: 5,
    wonValue: "$92,000 won",
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    description:
      "Ideal for independent freelancers and solo consultants looking to win more gigs.",
    monthlyPrice: 29,
    annualPrice: 24,
    features: [
      "Up to 15 AI-generated proposals/mo",
      "Real-time Opportunity Radar",
      "Standard proposal templates",
      "Client view tracking & notifications",
      "Email support",
    ],
    ctaText: "Start Starter Plan",
    ctaHref: "/register?plan=starter",
  },
  {
    id: "pro",
    name: "Professional",
    badge: "Most Popular",
    popular: true,
    description:
      "Designed for high-growth freelancers, boutique studios, and senior consultants.",
    monthlyPrice: 79,
    annualPrice: 64,
    features: [
      "Unlimited AI proposals & pitch decks",
      "Priority Opportunity Radar (Top 1% RFPs)",
      "Win-Rate & competitor rate intelligence",
      "Automated follow-up sequences",
      "Dynamic case study & portfolio embedder",
      "Custom branding & custom domains",
      "Priority chat & email support",
    ],
    ctaText: "Start 14-Day Free Trial",
    ctaHref: "/register?plan=pro",
  },
  {
    id: "agency",
    name: "Agency",
    description:
      "For expanding agencies, studios, and consultancies managing multi-member pipelines.",
    monthlyPrice: 199,
    annualPrice: 159,
    features: [
      "Everything in Professional",
      "Up to 10 team seats included",
      "Centralized agency pipeline analytics",
      "Team collaboration & peer review",
      "Custom proposal templates & brand kit",
      "Dedicated account manager",
      "Enterprise SLA & custom contracts",
    ],
    ctaText: "Contact Agency Sales",
    ctaHref: "/register?plan=agency",
  },
];

export const STATS_HIGHLIGHTS = [
  { value: "$48M+", label: "Won Client Contracts" },
  { value: "3.4x", label: "Average Win Rate Boost", highlight: true },
  { value: "12,400+", label: "Active Professionals" },
  { value: "4.9 / 5", label: "Verified User Rating", highlight: true },
];

export const FAQS_CONTENT: FAQItem[] = [
  {
    question: "Can I try Winflare before committing?",
    answer:
      "Yes! You can start with a 14-day free trial on our Professional plan without entering credit card details. You'll have full access to our AI Proposal Engine and Opportunity Radar.",
  },
  {
    question: "How does the AI create personalized proposals?",
    answer:
      "Winflare analyzes the specific RFP or client requirements, pulls in your linked past case studies, testimonials, and skillset, and drafts a tailored pitch that directly addresses the client's goals and deliverables.",
  },
  {
    question: "Can I use my own branding and custom domain?",
    answer:
      "Yes, on the Professional and Agency plans you can upload your custom logos, fonts, brand colors, and host proposals under your own custom domain (e.g. proposals.youragency.com).",
  },
  {
    question: "Can I invite team members?",
    answer:
      "Yes! The Agency tier includes up to 10 team seats with role permissions, internal review comments, and pooled pipeline analytics.",
  },
];

export const FOOTER_GROUPS: FooterGroup[] = [
  {
    title: "Product",
    links: [
      { label: "Opportunity Radar", href: "/#features" },
      { label: "AI Proposal Studio", href: "/#features" },
      { label: "Pricing Plans", href: "/pricing" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "For Freelancers", href: "/solutions/freelancers" },
      { label: "For Digital Agencies", href: "/solutions/agencies" },
      { label: "For Consultants", href: "/solutions/consultants" },
      { label: "Enterprise RFPs", href: "/solutions/enterprise" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Security", href: "/security" },
    ],
  },
];
