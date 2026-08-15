import CopyAddress from "@/components/CopyAddress";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import HalftoneBackground from "@/components/HalftoneBackground";
import LogoCloud from "@/components/LogoCloud";
import Nav from "@/components/Nav";
import { AgentRails, DeployChips } from "@/components/ProductVisuals";
import Reveal from "@/components/Reveal";

/* ------------------------------------------------------------------ data */

export const TOKEN_ADDRESS = "HdeAPoHivsm9MZfeY5tW7apJEprc8Fs594bWmnzfpump";

const LAUNCH_PATH = [
  {
    step: "Search",
    detail: "Find a model, skill or workload template that matches the job.",
  },
  {
    step: "Rent",
    detail: "Choose GPU capacity and approve the quote before anything runs.",
  },
  {
    step: "Run",
    detail: "Open logs, SSH or terminal access while the job is active.",
  },
  {
    step: "Settle",
    detail:
      "Pay for completed compute and return unused balance to the wallet.",
  },
];

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

const WORKLOADS = [
  {
    k: "Agent workloads",
    v: "Long-running tool use, browser tasks and evaluation loops",
  },
  {
    k: "Model deploys",
    v: "Inference, embeddings, voice, vision and reranking jobs",
  },
  {
    k: "Startup ML",
    v: "Fine-tuning, dataset tests, demos and product validation",
  },
  {
    k: "Provider capacity",
    v: "GPU supply, usage receipts, health and settlement",
  },
];

const WALLETS = [
  { name: "Phantom", status: "Supported" },
  { name: "Solflare", status: "Supported" },
  { name: "Fuse", status: "Later release" },
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

function Tag({
  children,
  tone = "quiet",
}: {
  children: React.ReactNode;
  tone?: "quiet" | "accent";
}) {
  return (
    <span
      className={`rounded-[4px] border px-2.5 py-1 text-[11px] font-medium tracking-[0.06em] uppercase ${
        tone === "accent"
          ? "border-accent/25 bg-accent/10 text-accent"
          : "border-white/[0.09] bg-white/[0.02] text-white/45"
      }`}
    >
      {children}
    </span>
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
                  only the fill is darker so it holds up over the halftone. */}
              <div className="frame reveal flex items-center gap-2.5 bg-black/55 p-1.5 pr-4">
                <Tag tone="accent">Quanta GPU cloud</Tag>
                <span className="text-[12.5px] font-medium text-white/65 sm:text-[13px]">
                  Public access opens after final testing
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

        {/* ========================================================= PROCESS */}
        <section className="mt-3 px-4 sm:px-6">
          <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-3">
            <SectionHeading
              id="process"
              eyebrow="How it works"
              title="From model idea to paid compute job."
              sub="Quanta keeps the path short. Search, rent, run and settle without switching between cloud consoles, wallet tools and terminal scripts."
            />

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {LAUNCH_PATH.map((s, i) => (
                <div
                  key={s.step}
                  className="frame reveal px-6 py-10 sm:px-7 sm:py-11"
                  data-delay={i * 70}
                >
                  <span className="text-[12.5px] font-semibold tracking-[0.16em] text-accent">
                    0{i + 1}
                  </span>
                  <h3 className="mt-5 text-[19px] font-semibold tracking-[-0.025em]">
                    {s.step}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-[1.65] text-muted">
                    {s.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="frame reveal">
              <div className="overflow-hidden rounded-[10px]">
                <div className="flex items-center gap-2 border-b border-white/[0.06] px-5 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
                  <span className="ml-2 text-[11.5px] font-semibold tracking-[0.12em] text-faint uppercase">
                    quanta-cli
                  </span>
                </div>
                <pre className="overflow-x-auto px-5 py-6 font-mono text-[12.5px] leading-[1.9] sm:px-8 sm:text-[13.5px]">
                  <code>
                    <span className="text-accent">$</span>{" "}
                    <span className="text-white">quanta search</span>{" "}
                    llama-3.1-70b
                    {"\n"}
                    <span className="text-white/35">
                      → 3 runtimes · vllm, tensorrt-llm, nim
                    </span>
                    {"\n\n"}
                    <span className="text-accent">$</span>{" "}
                    <span className="text-white">quanta run</span>{" "}
                    <span className="text-white/45">--gpu</span> h100:2{" "}
                    <span className="text-white/45">--max-spend</span> 25{" "}
                    <span className="text-white/45">\</span>
                    {"\n"}
                    {"    "}
                    <span className="text-white/45">
                      --model
                    </span> llama-3.1-70b{" "}
                    <span className="text-white/45">--runtime</span> vllm
                    {"\n"}
                    <span className="text-white/35">
                      → quote approved in wallet · job qx_8f3a21 live
                    </span>
                    {"\n"}
                    <span className="text-white/35">
                      → ssh quanta@qx_8f3a21 · streaming logs…
                    </span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= PAYMENT */}
        <section className="mt-3 px-4 sm:px-6">
          <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-3">
            <SectionHeading
              id="payment"
              eyebrow="Wallet payment"
              title="Pay for compute when the job runs."
              sub="Connect Phantom, Solflare or Fuse, fund the run and settle usage from the wallet attached to the account."
            />

            <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
              {WALLETS.map((w, i) => (
                <div
                  key={w.name}
                  className="frame reveal flex items-center justify-between gap-4 px-6 py-7"
                  data-delay={i * 60}
                >
                  <span className="text-[16px] font-semibold tracking-[-0.02em]">
                    {w.name}
                  </span>
                  <Tag tone={w.status === "Supported" ? "accent" : "quiet"}>
                    {w.status}
                  </Tag>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {WORKLOADS.map((w, i) => (
                <div
                  key={w.k}
                  className="frame reveal px-6 py-8 sm:px-7"
                  data-delay={(i % 2) * 60}
                >
                  <h3 className="text-[16px] font-semibold tracking-[-0.02em]">
                    {w.k}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.6] text-muted">
                    {w.v}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================== TOKEN */}
        <section className="mt-3 px-4 sm:px-6">
          <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-3">
            <SectionHeading
              id="token"
              eyebrow="Compute payment"
              title="Pay for compute with Quanta."
              sub="Use Quanta to fund compute jobs, set spend caps, release provider payments and refund unused balances when the job closes."
            />

            <div className="grid grid-cols-1 gap-3 lg:grid-cols-[1fr_1.4fr]">
              <div className="grid grid-cols-2 gap-3">
                {[
                  ["Compute", "Usage"],
                  ["1,000,000,000", "Supply"],
                ].map(([v, k]) => (
                  <div
                    key={k}
                    className="frame reveal flex flex-col items-center justify-center gap-1.5 px-4 py-10"
                  >
                    <span className="text-[17px] font-semibold tracking-[-0.03em] sm:text-[19px]">
                      {v}
                    </span>
                    <span className="text-[11.5px] font-medium tracking-[0.12em] text-faint uppercase">
                      {k}
                    </span>
                  </div>
                ))}
              </div>

              <div className="frame reveal px-6 py-8 sm:px-8" data-delay="80">
                <p className="mb-3 text-[11.5px] font-semibold tracking-[0.14em] text-faint uppercase">
                  Contract
                </p>
                <CopyAddress address={TOKEN_ADDRESS} />
                <div className="mt-5 flex flex-wrap gap-2">
                  <a
                    href="https://dexscreener.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="rounded-[6px] border border-white/[0.12] bg-white/[0.03] px-4 py-2 text-[13px] font-medium text-white/80 transition-colors hover:border-white/25 hover:text-white"
                  >
                    Dexscreener
                  </a>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="rounded-[6px] border border-white/[0.12] bg-white/[0.03] px-4 py-2 text-[13px] font-medium text-white/80 transition-colors hover:border-white/25 hover:text-white"
                  >
                    X
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ FAQ */}
        <section className="mt-3 px-4 sm:px-6">
          <div className="mx-auto flex w-full max-w-[860px] flex-col gap-3">
            <SectionHeading
              id="faq"
              eyebrow="FAQ"
              title="Short answers for builders and providers."
            />
            <Faq />
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
