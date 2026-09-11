import type { Metadata } from "next";
import { EmailVerificationScreen } from "@/features/auth/components";

export const metadata: Metadata = {
  title: "Verify Email | Winflare",
  description: "Verify your email address to activate your Winflare account.",
};

export default function VerifyEmailPage() {
  return <EmailVerificationScreen userEmail="you@company.com" />;
}
