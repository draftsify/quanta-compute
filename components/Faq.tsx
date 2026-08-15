"use client";

import { useState } from "react";

const ITEMS = [
  {
    q: "What is Quanta?",
    a: "Quanta is a pay-per-job GPU compute platform for AI agents, model runs and small ML workloads.",
  },
  {
    q: "How do I get access?",
    a: "Create an account with email or wallet. Wallet balances and workspace access are available in the dashboard.",
  },
  {
    q: "Which wallets are supported?",
    a: "Phantom and Solflare are supported now. Fuse support is prepared for a later release.",
  },
  {
    q: "How do payments work?",
    a: "Review the job price, approve payment with your wallet and track spend in the dashboard.",
  },
  {
    q: "How does SSH work?",
    a: "You generate a key locally. Quanta stores only the public key and fingerprint.",
  },
  {
    q: "Is MFA supported?",
    a: "Yes. TOTP is supported in the dashboard and required for sensitive terminal flows.",
  },
  {
    q: "Can I reset my password?",
    a: "Yes. Use Forgot password on the sign-in page and follow the email link.",
  },
  {
    q: "Is mainnet live?",
    a: "Public access opens after final testing.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-2.5">
      {ITEMS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className="dashed reveal rounded-[4px] bg-white/[0.015]"
            data-delay={i * 40}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 px-5 py-4.5 text-left sm:px-6"
            >
              <span className="text-[15px] font-medium tracking-[-0.01em] sm:text-[16.5px]">
                {item.q}
              </span>
              <span className="relative grid h-7 w-7 shrink-0 place-items-center rounded-[3px] border border-white/[0.1] bg-white/[0.04]">
                <span className="absolute h-px w-3 bg-white" />
                <span
                  className={`absolute h-px w-3 bg-white transition-transform duration-300 ${
                    isOpen ? "rotate-0" : "rotate-90"
                  }`}
                />
              </span>
            </button>
            <div className="faq-panel" data-open={isOpen}>
              <div>
                <p className="px-5 pb-5 text-[14.5px] leading-[1.65] text-muted sm:px-6 sm:pr-16">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
