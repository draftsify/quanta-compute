"use client";

import { useEffect } from "react";

/**
 * Observes every `.reveal` element on the page and fades it in once.
 * Keeps the markup itself server-rendered.
 */
export default function Reveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!nodes.length) return;

    const showAll = () => nodes.forEach((n) => n.classList.add("is-visible"));

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      typeof IntersectionObserver === "undefined"
    ) {
      showAll();
      return;
    }

    // Anything already on screen at mount is shown right away — the observer
    // only handles what the visitor scrolls to.
    nodes.forEach((n) => {
      if (n.getBoundingClientRect().top < window.innerHeight) {
        n.classList.add("is-visible");
      }
    });

    // Safety net: never leave content stuck at opacity 0.
    const failsafe = window.setTimeout(showAll, 4000);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const delay = Number(el.dataset.delay ?? 0);
          window.setTimeout(() => el.classList.add("is-visible"), delay);
          io.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    nodes.forEach((n) => io.observe(n));
    return () => {
      window.clearTimeout(failsafe);
      io.disconnect();
    };
  }, []);

  return null;
}
