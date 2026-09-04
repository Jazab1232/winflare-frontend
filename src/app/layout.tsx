import type { Metadata } from "next";
import { Geist, Geist_Mono, Caveat } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { QueryProvider } from "../providers/query-provider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Winflare | AI-Powered Proposals & Opportunity Radar for High-Ticket Contracts",
  description: "The AI-powered opportunity discovery and proposal acceleration platform for high-ticket freelancers, consultants, and modern digital agencies.",
  icons: {
    icon: [
      { url: "/fav-icon.svg", type: "image/svg+xml" },
      { url: "/fav-icon.png", type: "image/png" },
    ],
    shortcut: "/fav-icon.png",
    apple: "/fav-icon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-text-primary">
        <QueryProvider>
          {children}
          <Toaster />
        </QueryProvider>
      </body>
    </html>
  );
}
