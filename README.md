# Quanta — landing page

Marketing site for **Quanta**, a pay-per-job GPU compute platform for AI agents,
model runs and small ML workloads. Search a model, rent capacity, run the job with
scoped terminal access, and settle usage from a connected wallet.

Copy and structure are carried over from the previous build of the same product
(icpx.cloud) onto the current Quanta identity.

## What's in here

- **Hero** on the source render put through a CSS halftone screen — a soft base
  pass plus the same frame masked by a 45° dot grid, with a slow transform drift.
- **Silicon partners** (NVIDIA), **Products**, **Included**, **Model index** with
  the GPU class table, **Process** (search / rent / run / settle) with a CLI
  snippet, **Wallet payment**, **Compute payment**, **FAQ**, CTA and footer.
- **Inertial scrolling** on precise pointers, a **liquid-glass header** that
  condenses on scroll, and a viewport-bounded **blur-in** on load.

Visual language: pure black canvas, `1px dashed` container outlines, near-square
2–8px corners, Manrope for UI and JetBrains Mono for technical labels.

## Stack

Next.js (App Router) · React · TypeScript · Tailwind CSS v4 · deployed on Vercel.

## Local development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Notes

- There is no backend: forms, search and account links are presentational.
- The token contract address in the *Compute payment* section is carried over
  from the previous build — check it before going live.
- The NVIDIA mark comes from [Simple Icons](https://simpleicons.org) (CC0) and
  references the hardware the network runs on.
