import Image from "next/image";

import Footer from "@/components/Footer";
import HalftoneBackground from "@/components/HalftoneBackground";
import LogoCloud from "@/components/LogoCloud";
import Nav from "@/components/Nav";
import { AgentRails, DeployChips } from "@/components/ProductVisuals";
import Reveal from "@/components/Reveal";

/* ------------------------------------------------------------------ data */

const PRODUCTS = [
  {
    title: "AI agent runs",
    body: "Give agents GPU tools, logs and a clean runtime for research, automation and evaluation.",
    Visual: AgentRails,
  },
  {
    title: "One-click deploys",
    body: "Start from a model or skill, pick capacity and launch a run without building cloud glue.",
    Visual: DeployChips,
  },
];

const INCLUDED = [
  {
    title: "Choose GPUs",
    body: "Select model family, VRAM class, region and max spend before launch.",
    icon: (
      <>
        <rect x="3.5" y="6" width="17" height="12" rx="1" />
        <rect x="7" y="9.5" width="10" height="5" rx="0.5" />
        <path d="M7 6V4M12 6V4M17 6V4M7 20v-2M12 20v-2M17 20v-2" />
      </>
    ),
  },
  {
    title: "Deploy models",
    body: "Search NVIDIA models and skills, then launch the workload from one flow.",
    icon: (
      <>
        <path d="M3 8.5 12 4l9 4.5-9 4.5-9-4.5Z" />
        <path d="m3 15.5 9 4.5 9-4.5" />
        <path d="M3 12l9 4.5L21 12" />
      </>
    ),
  },
  {
    title: "Run agents",
    body: "Give agents isolated compute, terminal access and live logs per job.",
    icon: (
      <>
        <rect x="4" y="7" width="16" height="12" rx="1.5" />
        <path d="M9 12h.01M15 12h.01M9.5 15.5h5M12 7V4" />
        <circle cx="12" cy="3.5" r="1" />
      </>
    ),
  },
  {
    title: "Train and evaluate",
    body: "Run fine-tunes, batch inference, validation sets and model comparisons.",
    icon: (
      <>
        <path d="M4 19V5M4 19h16" />
        <path d="m7.5 15 3.5-4 3 2.5L20 7" />
      </>
    ),
  },
  {
    title: "Metered runs",
    body: "Fund compute with a wallet, cap spend and refund unused balance at close.",
    icon: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l2.5 2.5" />
      </>
    ),
  },
  {
    title: "Secure access",
    body: "Use MFA, CSRF controls, signed wallet actions and scoped SSH keys.",
    icon: (
      <>
        <path d="M12 3.5 5 6.5v5c0 4 2.9 7.6 7 9 4.1-1.4 7-5 7-9v-5Z" />
        <path d="m9.5 12 1.8 1.8L15 10" />
      </>
    ),
  },
];

/* ------------------------------------------------------------- primitives */

function SectionHeading({
  eyebrow,
  title,
  sub,
  id,
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
  id?: string;
}) {
  return (
    <div id={id} className="frame scroll-mt-24 px-6 py-14 sm:py-16">
      <p className="reveal mb-4 text-center text-[12px] font-semibold tracking-[0.16em] text-accent uppercase">
        {eyebrow}
      </p>
      <h2 className="reveal mx-auto max-w-3xl text-center text-[30px] leading-[1.12] font-semibold tracking-[-0.035em] text-balance sm:text-[40px] lg:text-[46px]">
        {title}
      </h2>
      {sub ? (
        <p
          className="reveal mx-auto mt-5 max-w-2xl text-center text-[15px] leading-[1.6] text-muted text-balance"
          data-delay="80"
        >
          {sub}
        </p>
      ) : null}
    </div>
  );
}

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

/* ------------------------------------------------------------------ page */

export default function Home() {
  return (
    <>
      <Reveal />
      <Nav />

      <main id="top" className="page-in relative">
        {/* ============================================================ HERO */}
        <section className="relative px-4 pt-16 sm:px-6 sm:pt-[72px]">
          <div className="frame relative mx-auto w-full max-w-[1200px]">
            {/* Clipping lives on an inner layer so the corner marks survive. */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[10px]">
              <div className="mask-fade-b absolute inset-0">
                <HalftoneBackground pitch={7} priority />
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(52%_44%_at_50%_44%,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.58)_56%,transparent_86%)]" />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
            </div>

            <div className="relative flex min-h-[560px] flex-col items-center justify-center px-5 py-24 sm:min-h-[640px] sm:py-28">
              {/* Same panel and tag treatment as every other block on the page;
                  only the fill is darker so it holds up over the halftone.
                  The tag sits collapsed around the mark and opens on hover —
                  the 0fr/1fr grid track animates to the label's own width, so
                  nothing has to be measured. */}
              <div className="frame reveal group flex items-center bg-black/55 p-1.5">
                <span className="flex items-center rounded-[4px] border border-accent/25 bg-accent/10 px-2 py-1.5">
                  <Image
                    src="/logo.png"
                    alt="Quanta"
                    width={14}
                    height={14}
                    className="h-3.5 w-3.5 shrink-0"
                  />
                  <span className="grid grid-cols-[0fr] transition-[grid-template-columns] duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:grid-cols-[1fr]">
                    <span className="overflow-hidden">
                      <span className="block pl-2 text-[11px] font-medium tracking-[0.06em] whitespace-nowrap text-accent uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:delay-150">
                        Quanta GPU cloud
                      </span>
                    </span>
                  </span>
                </span>
              </div>

              <h1
                className="reveal mt-8 text-center text-[46px] leading-[1.02] font-semibold tracking-[-0.045em] text-balance sm:text-[76px] lg:text-[92px]"
                data-delay="60"
              >
                <span className="text-hero-gradient">Compute on demand.</span>
              </h1>

              <p
                className="reveal mt-6 max-w-[58ch] text-center text-[15px] leading-[1.62] text-white/60 text-balance sm:text-[17px]"
                data-delay="140"
              >
                Run on-demand compute for AI agents, inference, fine-tuning and
                evaluation. Search models, deploy a run and keep terminal access
                scoped to the workload.
              </p>

              <div
                className="reveal mt-9 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row"
                data-delay="220"
              >
                <a
                  href="#cta"
                  className="w-full rounded-[6px] bg-white px-6 py-3 text-center text-[13.5px] font-semibold tracking-[-0.01em] text-black transition-colors hover:bg-white/88 sm:w-auto"
                >
                  Create account
                </a>
                <a
                  href="#products"
                  className="w-full rounded-[6px] border border-white/[0.14] bg-black/40 px-6 py-3 text-center text-[13.5px] font-medium tracking-[-0.01em] text-white/85 transition-colors hover:border-white/25 hover:bg-white/[0.06] hover:text-white sm:w-auto"
                >
                  Search models
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================== LOGO CLOUD */}
        <section className="px-4 sm:px-6">
          <div className="mx-auto w-full max-w-[1200px]">
            <LogoCloud />
          </div>
        </section>

        {/* ======================================================== PRODUCTS */}
        <section className="px-4 sm:px-6">
          <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-3">
            <SectionHeading
              id="products"
              eyebrow="Products"
              title="Use compute when the work needs it."
              sub="Use Quanta for agent runs and model deploys. Keep every run scoped, priced and easy to close."
            />

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {PRODUCTS.map((p, i) => (
                <article
                  key={p.title}
                  className="frame reveal group relative overflow-hidden px-6 py-9 sm:px-8 sm:py-11"
                  data-delay={i * 60}
                >
                  <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-[420px] -translate-x-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.55)_0%,transparent_100%)] opacity-[0.05] blur-2xl transition-opacity duration-500 group-hover:opacity-[0.11]" />
                  <div className="relative">
                    <p.Visual />
                    <h3 className="text-[19px] font-semibold tracking-[-0.025em] sm:text-[21px]">
                      {p.title}
                    </h3>
                    <p className="mt-3 max-w-[46ch] text-[14.5px] leading-[1.65] text-muted">
                      {p.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================== INCLUDED */}
        <section className="mt-3 px-4 sm:px-6">
          <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-3">
            <SectionHeading
              id="included"
              eyebrow="Included"
              title="Everything around the GPU stays in one flow."
              sub="Pick capacity, launch the job, watch logs, open terminal access and settle compute from the same dashboard."
            />

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {INCLUDED.map((f, i) => (
                <div
                  key={f.title}
                  className="frame reveal px-6 py-9 sm:px-7 sm:py-10"
                  data-delay={(i % 3) * 60}
                >
                  <div className="mb-6 grid h-10 w-10 place-items-center rounded-[6px] border border-white/[0.08] bg-white/[0.04] text-white/80">
                    <Icon>{f.icon}</Icon>
                  </div>
                  <h3 className="text-[17px] font-semibold tracking-[-0.02em]">
                    {f.title}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-[1.6] text-muted">
                    {f.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ CTA */}
        <section id="cta" className="scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28">
          <div className="frame relative mx-auto w-full max-w-[1200px]">
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[10px]">
              <div className="mask-fade-edges absolute inset-0 scale-y-[-1] opacity-70">
                <HalftoneBackground pitch={8} />
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(66%_66%_at_50%_50%,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.5)_58%,transparent_100%)]" />
            </div>

            <div className="relative flex flex-col items-center px-5 py-20 sm:py-24">
              <p className="reveal mb-5 text-[12px] font-semibold tracking-[0.16em] text-accent uppercase">
                Start
              </p>
              <h2 className="reveal max-w-[18ch] text-center text-[30px] leading-[1.08] font-semibold tracking-[-0.04em] text-balance sm:text-[46px]">
                <span className="text-hero-gradient">
                  Bring your workloads to pay-per-job compute.
                </span>
              </h2>
              <div
                className="reveal mt-9 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row"
                data-delay="120"
              >
                <a
                  href="#top"
                  className="w-full rounded-[6px] bg-white px-7 py-3.5 text-center text-[13.5px] font-semibold tracking-[-0.01em] text-black transition-colors hover:bg-white/88 sm:w-auto"
                >
                  Create account
                </a>
                <a
                  href="#products"
                  className="w-full rounded-[6px] border border-white/[0.14] bg-black/40 px-7 py-3.5 text-center text-[13.5px] font-medium tracking-[-0.01em] text-white/85 transition-colors hover:border-white/25 hover:bg-white/[0.06] hover:text-white sm:w-auto"
                >
                  Search models
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
