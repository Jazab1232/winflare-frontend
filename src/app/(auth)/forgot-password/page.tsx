import type { Metadata } from "next";
import { ForgotPasswordScreen } from "@/features/auth/components";

export const metadata: Metadata = {
  title: "Forgot Password | Winflare",
  description: "Reset your Winflare account password.",
};

export default function ForgotPasswordPage() {
  return <ForgotPasswordScreen />;
}
