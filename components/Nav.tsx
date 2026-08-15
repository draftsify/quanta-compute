"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const LINKS = [
  { label: "Products", href: "#products" },
  { label: "Included", href: "#included" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // The inertial scroller reads this flag to lock the page.
    document.documentElement.dataset.scrollLocked = open ? "true" : "false";
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.dataset.scrollLocked = "false";
      document.body.style.overflow = "";
    };
  }, [open]);

  const condensed = scrolled || open;

  return (
    <header className="page-in fixed inset-x-0 top-0 z-50 px-4 sm:px-6">
      <div
        className={`relative mx-auto transition-[max-width,margin,border-radius,background-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          condensed
            ? "glass mt-2.5 max-w-[1152px] rounded-[13px]"
            : "mt-0 max-w-[1200px] rounded-none"
        }`}
      >
        <nav
          className={`relative flex h-[60px] items-center justify-between transition-[padding] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:h-[66px] ${
            condensed ? "px-3.5 sm:px-5" : "px-0"
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt=""
              width={32}
              height={32}
              className="h-7 w-7"
              priority
            />
            <span className="text-[15px] font-semibold tracking-[-0.02em]">
              Quanta
            </span>
          </a>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-[6px] px-3 py-2 text-[13.5px] font-medium text-muted transition-colors hover:bg-white/[0.05] hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="/create-account"
              className="hidden rounded-[6px] border border-white/[0.12] bg-white/[0.05] px-4 py-2 text-[13px] font-medium text-white/85 transition-colors hover:border-white/20 hover:bg-white/[0.09] hover:text-white sm:inline-flex"
            >
              Create account
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-[6px] border border-white/[0.12] bg-white/[0.04] transition-colors hover:bg-white/[0.08] lg:hidden"
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

      {/* Mobile sheet — absolute so it never inflates the fixed header's hit area */}
      <div
        className={`glass absolute inset-x-4 top-full mt-2 origin-top overflow-hidden rounded-[13px] transition-all duration-300 sm:inset-x-6 lg:hidden ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <ul className="relative flex flex-col px-4 py-2">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-white/[0.07] py-3.5 text-[15px] text-muted transition-colors hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/create-account"
              onClick={() => setOpen(false)}
              className="mt-4 mb-3 block rounded-[6px] bg-white py-3 text-center text-[14px] font-semibold text-black"
            >
              Create account
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
