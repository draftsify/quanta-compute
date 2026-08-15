import type { Metadata, Viewport } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-jb",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://quanta-compute.vercel.app"),
  title: "Quanta — Compute on demand",
  description:
    "Compute on demand with wallet settlement, model discovery and secure terminal access. Run on-demand compute for AI agents, inference, fine-tuning and evaluation.",
  keywords: [
    "GPU cloud",
    "on-demand compute",
    "AI agents",
    "inference",
    "fine-tuning",
    "NVIDIA H100",
    "wallet settlement",
  ],
  openGraph: {
    title: "Quanta — Compute on demand",
    description:
      "Compute on demand with wallet settlement and secure terminal access.",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased">
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important;filter:none!important}`}</style>
        </noscript>
        <SmoothScroll />
        <div className="intro-veil" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
