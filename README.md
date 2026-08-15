# Quanta Compute — landing page

Landing page for **Quanta Compute**, a GPU compute platform that lets startups and AI
teams rent enterprise NVIDIA GPUs on demand: create a job, run the workload, and pay
only for the compute actually used — settled in the network's native token.

## What's in here

- **Hero** with a live ASCII-art background: the source render is sampled on a glyph
  grid in a `<canvas>` and redrawn ~18×/s with a slow wave, so the terrain breathes
  like a stream of data (`components/AsciiBackground.tsx`).
- **Silicon partners** section — NVIDIA as the certified compute partner, plus the
  supported GPU classes in a marquee.
- **Platform**, **How it works** (with a CLI snippet), **GPU catalogue** pricing
  table, **network economics**, **FAQ** accordion, **CTA** and a full **footer**.

Visual language follows a dark, dashed-frame layout: pure black canvas, `1px dashed`
container outlines, Manrope for UI and JetBrains Mono for technical labels.

## Stack

Next.js (App Router) · React · TypeScript · Tailwind CSS v4 · deployed on Vercel.

## Local development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Notes

- All copy and figures are placeholders for the marketing site; there is no backend.
- The NVIDIA mark comes from [Simple Icons](https://simpleicons.org) (CC0) and is used
  to reference the hardware the network runs on.
