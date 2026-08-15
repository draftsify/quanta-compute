"use client";

import { useEffect, useRef } from "react";

const RAMP = " .,:;i1tfLCG08@";

type Props = {
  /** Source image rendered as ASCII. */
  src?: string;
  /** Base glyph size in CSS pixels. Smaller = denser grid. */
  scale?: number;
  /** Multiplies the sampled luminance. */
  gain?: number;
  className?: string;
};

export default function AsciiBackground({
  src = "/terrain.jpg",
  scale = 11,
  gain = 1.15,
  className = "",
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Offscreen buffer holding one sample per glyph cell.
    const sampler = document.createElement("canvas");
    const sctx = sampler.getContext("2d", { willReadFrequently: true });

    let cols = 0;
    let rows = 0;
    let cellW = 0;
    let cellH = 0;
    let lum: Float32Array = new Float32Array(0);
    let tint: Float32Array = new Float32Array(0);
    let image: HTMLImageElement | null = null;
    let raf = 0;
    let last = 0;
    let visible = true;
    let start = 0;

    const measure = () => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return false;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const font = rect.width < 640 ? scale - 2 : scale;
      cellW = font * 0.62;
      cellH = font * 1.02;
      cols = Math.ceil(rect.width / cellW) + 1;
      rows = Math.ceil(rect.height / cellH) + 1;

      ctx.font = `${font}px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`;
      ctx.textBaseline = "top";
      return true;
    };

    const sample = () => {
      if (!image || !sctx || cols === 0 || rows === 0) return;
      sampler.width = cols;
      sampler.height = rows;
      sctx.clearRect(0, 0, cols, rows);

      // Only the lower part of the render carries the dense point field —
      // the top of the source is empty sky, so crop it out first.
      const regionY = image.height * 0.3;
      const regionH = image.height - regionY;
      const regionW = image.width;

      // "cover" fit of that region onto the glyph grid.
      const targetRatio = (cols * cellW) / (rows * cellH);
      const srcRatio = regionW / regionH;
      let sw = regionW;
      let sh = regionH;
      let sx = 0;
      let sy = regionY;
      if (srcRatio > targetRatio) {
        sw = regionH * targetRatio;
        sx = (regionW - sw) / 2;
      } else {
        sh = regionW / targetRatio;
        sy = regionY + (regionH - sh) * 0.65;
      }
      sctx.drawImage(image, sx, sy, sw, sh, 0, 0, cols, rows);

      const data = sctx.getImageData(0, 0, cols, rows).data;
      lum = new Float32Array(cols * rows);
      tint = new Float32Array(cols * rows);
      for (let i = 0; i < cols * rows; i++) {
        const r = data[i * 4];
        const g = data[i * 4 + 1];
        const b = data[i * 4 + 2];
        lum[i] = Math.min(1, ((0.2126 * r + 0.7152 * g + 0.0722 * b) / 255) * gain);
        // How "green" the pixel is: drives the moss vs. data-point colouring.
        tint[i] = Math.max(0, Math.min(1, (g - (r + b) / 2) / 60));
      }
    };

    const draw = (time: number) => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      if (!lum.length) return;

      const t = (time - start) / 1000;

      for (let y = 0; y < rows; y++) {
        const py = y * cellH;
        for (let x = 0; x < cols; x++) {
          const i = y * cols + x;
          let v = lum[i];
          if (v < 0.06) continue;

          // Slow diagonal wave so the field breathes like streaming data.
          const wave =
            Math.sin(x * 0.09 - t * 1.1 + y * 0.05) * 0.5 +
            Math.sin(y * 0.16 + t * 0.7) * 0.5;
          v = Math.min(1, Math.max(0, v + wave * 0.085));

          const idx = Math.min(RAMP.length - 1, Math.round(v * (RAMP.length - 1)));
          const ch = RAMP[idx];
          if (ch === " ") continue;

          const green = tint[i];
          const alpha = 0.26 + v * 0.74;
          if (green > 0.3) {
            ctx.fillStyle = `rgba(126, 224, 146, ${alpha * 0.85})`;
          } else {
            ctx.fillStyle = `rgba(232, 245, 236, ${alpha})`;
          }
          ctx.fillText(ch, x * cellW, py);
        }
      }
    };

    const loop = (time: number) => {
      raf = requestAnimationFrame(loop);
      if (!visible) return;
      if (time - last < 55) return; // ~18fps is plenty for this texture
      last = time;
      draw(time);
    };

    const onResize = () => {
      if (!measure()) return;
      sample();
      draw(performance.now());
    };

    const io = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? true;
      },
      { rootMargin: "120px" },
    );
    io.observe(canvas);

    const ro = new ResizeObserver(() => onResize());
    ro.observe(canvas);

    image = new Image();
    image.decoding = "async";
    image.src = src;
    image.onload = () => {
      start = performance.now();
      if (!measure()) return;
      sample();
      draw(performance.now());
      if (!reduced) raf = requestAnimationFrame(loop);
    };

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
    };
  }, [src, scale, gain]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`h-full w-full ${className}`}
    />
  );
}
