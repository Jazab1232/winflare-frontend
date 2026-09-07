import type { Metadata } from "next";
import {
  HeroSection,
  ClientAcquisitionOsSection,
  ProductPreviewSection,
  ChaosToSystemSection,
  OutcomesSection,
  ContactSection,
} from "@/features/landing/components";

export const metadata: Metadata = {
  title: "Winflare | AI-Powered Proposals & Opportunity Radar for High-Ticket Contracts",
  description:
    "Winflare helps top freelancers, agencies, and consultants discover verified RFPs, generate tailored high-converting proposals with AI, and track pipeline metrics.",
};

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <ClientAcquisitionOsSection />
      <ProductPreviewSection />
      <ChaosToSystemSection />
      <OutcomesSection />
      <ContactSection />
    </>
  );
}
