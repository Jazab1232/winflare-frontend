import type { Metadata } from "next";
import { AuthScreen } from "@/features/auth/components";

export const metadata: Metadata = {
  title: "Sign in | Winflare",
  description: "Sign in to your Winflare account and continue building your client acquisition engine.",
};

export default function LoginPage() {
  return <AuthScreen initialMode="login" />;
}
