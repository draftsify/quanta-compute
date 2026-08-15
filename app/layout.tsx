import type { Metadata, Viewport } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
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
  title: "Quanta Compute — On-demand NVIDIA GPU power",
  description:
    "Rent enterprise-grade NVIDIA GPUs on demand. Create a job, run your workload, and pay only for the compute you actually used — settled in $QNTA on a decentralised GPU network.",
  keywords: [
    "GPU cloud",
    "NVIDIA H100",
    "AI training",
    "inference",
    "decentralised compute",
    "on-demand GPU",
  ],
  openGraph: {
    title: "Quanta Compute — On-demand NVIDIA GPU power",
    description:
      "Enterprise GPUs, per-second billing, settled in the native token. No hardware to own.",
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
        {children}
      </body>
    </html>
  );
}
