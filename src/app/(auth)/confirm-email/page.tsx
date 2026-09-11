import type { Metadata } from "next";
import { EmailVerificationScreen } from "@/features/auth/components";

export const metadata: Metadata = {
  title: "Confirm Email | Winflare",
  description: "Confirm your email address to activate your Winflare account.",
};

export default function ConfirmEmailPage() {
  return <EmailVerificationScreen userEmail="you@company.com" />;
}
