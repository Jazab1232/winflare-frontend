export interface NavLinkItem {
  label: string;
  href: string;
}

export interface HeroMetric {
  label: string;
  value: string;
  subtext?: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  tag: string;
  iconName: "Compass" | "Sparkles" | "FileText" | "BarChart3" | "Clock" | "Users2" | "Shield" | "Zap";
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarBg: string;
  rating: number;
  wonValue: string;
}

export interface PricingTier {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  features: string[];
  ctaText: string;
  ctaHref: string;
  badge?: string;
  popular?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterGroup {
  title: string;
  links: FooterLink[];
}
