"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const LINKS = [
  { label: "Platform", href: "#platform" },
  { label: "GPUs", href: "#gpus" },
  { label: "How it works", href: "#how" },
  { label: "Token", href: "#token" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-colors duration-300 ${
          scrolled ? "border-b border-white/5 bg-black/70 backdrop-blur-md" : ""
        }`}
      >
        <nav className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-4 sm:h-[72px] sm:px-6">
          <a href="#top" className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt=""
              width={32}
              height={32}
              className="h-7 w-7 sm:h-8 sm:w-8"
              priority
            />
            <span className="text-[15px] font-semibold tracking-[-0.02em]">
              Quanta
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-lg px-3 py-2 text-[13.5px] font-medium text-muted transition-colors hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#cta"
              className="hidden rounded-[10px] border border-white/10 bg-white/[0.08] px-4 py-2 text-[13.5px] font-semibold backdrop-blur transition-colors hover:bg-white/[0.14] sm:inline-flex"
            >
              Launch console
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] border border-white/10 bg-white/[0.06] lg:hidden"
            >
              <span className="relative block h-3 w-4">
                <span
                  className={`absolute left-0 block h-px w-4 bg-white transition-transform duration-300 ${
                    open ? "top-1.5 rotate-45" : "top-0.5"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-px w-4 bg-white transition-transform duration-300 ${
                    open ? "top-1.5 -rotate-45" : "top-2.5"
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile sheet */}
      <div
        className={`fixed inset-x-0 top-16 z-40 origin-top border-y border-white/5 bg-black/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <ul className="mx-auto flex max-w-[1200px] flex-col px-4 py-3 sm:px-6">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-white/5 py-3.5 text-[15px] text-muted transition-colors hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="mt-4 mb-2 block rounded-full bg-white py-3 text-center text-[14px] font-bold text-black"
            >
              Launch console
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
