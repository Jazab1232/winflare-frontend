import type { Metadata } from "next";
import { AuthScreen } from "@/features/auth/components";

export const metadata: Metadata = {
  title: "Create your account | Winflare",
  description: "Create your Winflare account and start building your client acquisition engine.",
};

export default function RegisterPage() {
  return <AuthScreen initialMode="signup" />;
}
