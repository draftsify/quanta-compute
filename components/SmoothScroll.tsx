"use client";

import { useEffect } from "react";

const EASE = 0.085; // lerp factor per frame — lower is heavier
const NAV_OFFSET = 88;

/**
 * Inertial page scrolling on precise pointers. Touch keeps its native
 * momentum, and reduced-motion users keep the browser default.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const doc = document.documentElement;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !window.matchMedia("(pointer: fine)").matches
    ) {
      return;
    }

    const previousBehavior = doc.style.scrollBehavior;
    doc.style.scrollBehavior = "auto";

    let target = window.scrollY;
    let current = target;
    let raf = 0;
    let running = false;

    const maxScroll = () => Math.max(0, doc.scrollHeight - window.innerHeight);
    const clamp = (v: number) => Math.min(Math.max(v, 0), maxScroll());

    const frame = () => {
      const delta = target - current;
      if (Math.abs(delta) < 0.35) {
        current = target;
        window.scrollTo(0, current);
        running = false;
        return;
      }
      current += delta * EASE;
      window.scrollTo(0, current);
      raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(frame);
    };

    /** Lets nested scrollers (code blocks, the pricing table) keep their events. */
    const handledByChild = (node: EventTarget | null, e: WheelEvent) => {
      let el = node instanceof Element ? node : null;
      const horizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      while (el && el !== document.body && el !== doc) {
        const style = getComputedStyle(el);
        if (horizontal) {
          const ox = style.overflowX;
          if (
            (ox === "auto" || ox === "scroll") &&
            el.scrollWidth > el.clientWidth
          ) {
            return true;
          }
        } else {
          const oy = style.overflowY;
          if (
            (oy === "auto" || oy === "scroll") &&
            el.scrollHeight > el.clientHeight
          ) {
            const up = e.deltaY < 0 && el.scrollTop > 0;
            const down =
              e.deltaY > 0 &&
              el.scrollTop + el.clientHeight < el.scrollHeight - 1;
            if (up || down) return true;
          }
        }
        el = el.parentElement;
      }
      return false;
    };

    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) return; // pinch-zoom

      // The mobile sheet locks the page; swallow the event instead of scrolling.
      if (doc.dataset.scrollLocked === "true") {
        e.preventDefault();
        return;
      }
      if (handledByChild(e.target, e)) return;

      e.preventDefault();
      const unit =
        e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? window.innerHeight : 1;
      target = clamp(target + e.deltaY * unit);
      start();
    };

    // Keyboard, scrollbar drags and browser restores move the page natively —
    // re-sync so the next wheel tick starts from where we actually are.
    const onScroll = () => {
      if (running) return;
      target = current = window.scrollY;
    };

    const onResize = () => {
      target = clamp(target);
    };

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey) return;
      const el = e.target instanceof Element ? e.target : null;
      const anchor = el?.closest<HTMLAnchorElement>('a[href^="#"]');
      const href = anchor?.getAttribute("href");
      if (!href) return;

      const id = href.slice(1);
      let top = 0;
      if (id) {
        const dest = document.getElementById(id);
        if (!dest) return;
        top = dest.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
      }
      e.preventDefault();
      target = clamp(top);
      start();
      history.replaceState(null, "", id ? `#${id}` : location.pathname);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("click", onClick);
      doc.style.scrollBehavior = previousBehavior;
    };
  }, []);

  return null;
}
