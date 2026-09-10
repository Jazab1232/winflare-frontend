import React from "react";
import type { Metadata } from "next";
import { PricingScreen } from "./pricing-screen";

export const metadata: Metadata = {
  title: "Pricing | Winflare - Built To Help You Win More Clients",
  description:
    "Start free. Upgrade when client acquisition becomes a serious part of your business. Transparent plans for freelancers, consultants, and agencies.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <PricingScreen />
    </main>
  );
}
