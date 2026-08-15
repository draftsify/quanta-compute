"use client";

import { useEffect, useRef } from "react";

type Props = {
  quantity?: number;
  className?: string;
};

/**
 * Slow-drifting particle field. Cheap by construction: a few dozen dots, no
 * per-frame allocation, paused when the tab is hidden and static under
 * reduced-motion.
 */
export default function Particles({ quantity = 110, className = "" }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    type Dot = {
      x: number;
      y: number;
      r: number;
      alpha: number;
      vx: number;
      vy: number;
      twinkle: number;
    };

    let dots: Dot[] = [];
    let width = 0;
    let height = 0;
    let raf = 0;

    const seed = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round(quantity * Math.min(1, (width * height) / 900000));
      dots = Array.from({ length: Math.max(30, count) }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.1 + 0.35,
        alpha: Math.random() * 0.45 + 0.12,
        vx: (Math.random() - 0.5) * 0.06,
        vy: -(Math.random() * 0.07 + 0.015),
        twinkle: Math.random() * Math.PI * 2,
      }));
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      for (const d of dots) {
        const flicker = 0.75 + Math.sin(time / 900 + d.twinkle) * 0.25;
        ctx.globalAlpha = d.alpha * flicker;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const step = (time: number) => {
      raf = requestAnimationFrame(step);
      if (document.hidden) return;
      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;
        if (d.y < -4) {
          d.y = height + 4;
          d.x = Math.random() * width;
        }
        if (d.x < -4) d.x = width + 4;
        if (d.x > width + 4) d.x = -4;
      }
      draw(time);
    };

    const ro = new ResizeObserver(() => {
      seed();
      draw(performance.now());
    });
    ro.observe(canvas);

    seed();
    draw(performance.now());
    if (!reduced) raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [quantity]);

  return (
    <canvas ref={canvasRef} aria-hidden="true" className={`h-full w-full ${className}`} />
  );
}
