import type { Metadata } from "next";
import { OnboardingScreen } from "@/features/auth/components";

export const metadata: Metadata = {
  title: "Welcome to Winflare | Onboarding",
  description: "Set up your Winflare profile, preferences, and client acquisition engine.",
};

export default function OnboardingPage() {
  return <OnboardingScreen />;
}
