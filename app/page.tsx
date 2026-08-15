import AsciiBackground from "@/components/AsciiBackground";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import NvidiaMark from "@/components/NvidiaMark";
import Reveal from "@/components/Reveal";

/* ------------------------------------------------------------------ data */

const GPU_CLASSES = [
  "H200 141GB",
  "H100 SXM5",
  "H100 PCIe",
  "A100 80GB",
  "L40S 48GB",
  "RTX 6000 Ada",
  "A6000 48GB",
  "RTX 4090",
];

const FEATURES = [
  {
    title: "Per-second billing",
    body: "The meter starts when your container is scheduled and stops the instant it exits. Idle time is never billed, and there is no minimum commitment to unlock a rate.",
    glow: "rgb(116,232,138)",
    icon: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l2.5 2.5" />
      </>
    ),
  },
  {
    title: "Elastic by default",
    body: "Ask for one GPU or three hundred. The scheduler spreads your job across the network, keeps interconnect-sensitive workloads on the same fabric, and releases nodes the moment you are done.",
    glow: "rgb(153,238,255)",
    icon: (
      <>
        <rect x="3" y="4" width="7" height="7" rx="1.5" />
        <rect x="14" y="4" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <path d="M14 17.5h7M17.5 14v7" />
      </>
    ),
  },
  {
    title: "Bring your own container",
    body: "Any OCI image runs as-is. Point us at a registry or a Git repo, declare your entrypoint, and CUDA, drivers and NCCL are wired up for you before the first line executes.",
    glow: "rgb(255,195,0)",
    icon: (
      <>
        <path d="M3 8.5 12 4l9 4.5-9 4.5-9-4.5Z" />
        <path d="m3 15.5 9 4.5 9-4.5" />
        <path d="M3 12l9 4.5L21 12" />
      </>
    ),
  },
  {
    title: "Token-settled economics",
    body: "Every job settles on-chain in $QNTA. Operators are paid automatically per second of verified compute, and stakers receive a share of the network fee.",
    glow: "rgb(169,86,247)",
    icon: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5v9M9.5 10h5M9.5 14h5" />
      </>
    ),
  },
];

const STEPS = [
  {
    n: "01",
    title: "Create a job",
    body: "Describe the workload once: image, entrypoint, GPU class, memory floor and region. Save it as a template and reuse it from the console, the CLI or the REST API.",
  },
  {
    n: "02",
    title: "The network bids",
    body: "Independent operators compete for your job in real time. The scheduler picks the cheapest node that satisfies every constraint, then provisions it in seconds.",
  },
  {
    n: "03",
    title: "Pay for what ran",
    body: "Logs and checkpoints stream back while the job runs. When it exits, the exact runtime is settled in $QNTA and the node is released back to the pool.",
  },
];

const PRICING = [
  {
    gpu: "NVIDIA H200",
    vram: "141 GB HBM3e",
    net: "3.2 Tb/s NVLink",
    best: "Frontier model training",
    price: "3.19",
    highlight: true,
  },
  {
    gpu: "NVIDIA H100 SXM5",
    vram: "80 GB HBM3",
    net: "900 GB/s NVLink",
    best: "Distributed training",
    price: "2.24",
  },
  {
    gpu: "NVIDIA A100",
    vram: "80 GB HBM2e",
    net: "600 GB/s NVLink",
    best: "Fine-tuning, HPC",
    price: "1.28",
  },
  {
    gpu: "NVIDIA L40S",
    vram: "48 GB GDDR6",
    net: "64 GB/s PCIe 4.0",
    best: "Inference, rendering",
    price: "0.79",
  },
  {
    gpu: "NVIDIA RTX 4090",
    vram: "24 GB GDDR6X",
    net: "32 GB/s PCIe 4.0",
    best: "Agents, prototyping",
    price: "0.42",
  },
];

const BENEFITS = [
  {
    k: "No hardware to own",
    v: "Skip the capex, the lead times and the depreciation. Capacity appears when the job does.",
  },
  {
    k: "Up to 74% cheaper",
    v: "Same silicon as the hyperscalers, priced by an open market instead of a reserved-capacity margin.",
  },
  {
    k: "Seconds to schedule",
    v: "Median time from job creation to first CUDA kernel is under 40 seconds across the network.",
  },
  {
    k: "Isolated and wiped",
    v: "Hardware-isolated containers on ephemeral encrypted volumes, destroyed the moment a job exits.",
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
    <div id={id} className="dashed scroll-mt-24 px-6 py-14 sm:py-16">
      <p className="reveal mb-4 text-center font-mono text-[11.5px] tracking-[0.18em] text-accent uppercase">
        {eyebrow}
      </p>
      <h2 className="reveal mx-auto max-w-3xl text-center text-[30px] leading-[1.12] font-semibold tracking-[-0.035em] text-balance sm:text-[40px] lg:text-[46px]">
        {title}
      </h2>
      {sub ? (
        <p
          className="reveal mx-auto mt-5 max-w-xl text-center text-[15px] leading-[1.6] text-muted text-balance"
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
          <div className="dashed relative mx-auto w-full max-w-[1200px] overflow-hidden">
            {/* ASCII terrain */}
            <div className="pointer-events-none absolute inset-0">
              <div className="mask-fade-b absolute inset-0 opacity-90">
                <AsciiBackground scale={11} gain={1.35} />
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(58%_48%_at_50%_46%,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.68)_52%,transparent_82%)]" />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
            </div>

            <div className="relative flex min-h-[620px] flex-col items-center justify-center px-5 py-24 sm:min-h-[720px] sm:py-28">
              <a
                href="#gpus"
                className="reveal group flex items-center gap-2.5 rounded-[4px] border border-white/[0.1] bg-white/[0.04] py-1 pr-4 pl-1 backdrop-blur-md transition-colors hover:border-white/20 hover:bg-white/[0.07]"
              >
                <span className="rounded-[2px] border border-accent/25 bg-accent/12 px-2 py-1 text-[11px] font-semibold tracking-[0.02em] text-accent">
                  New
                </span>
                <span className="text-[12.5px] font-medium text-white/85 sm:text-[13px]">
                  H200 clusters are live in 6 regions
                </span>
                <svg
                  viewBox="0 0 16 16"
                  className="h-3 w-3 text-white/50 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  aria-hidden="true"
                >
                  <path d="M6 3.5 10.5 8 6 12.5" />
                </svg>
              </a>

              <h1
                className="reveal mt-8 max-w-[16ch] text-center text-[38px] leading-[1.03] font-semibold tracking-[-0.045em] text-balance sm:text-[62px] lg:text-[76px]"
                data-delay="60"
              >
                <span className="text-hero-gradient">
                  Enterprise GPUs, the second you need them.
                </span>
              </h1>

              <p
                className="reveal mt-6 max-w-[52ch] text-center text-[15px] leading-[1.62] text-white/60 text-balance sm:text-[17px]"
                data-delay="140"
              >
                Quanta lets startups and AI teams rent powerful NVIDIA GPUs on
                demand. Create a job, run your workload, pay only for the compute
                you actually used — settled on a decentralised network.
              </p>

              <div
                className="reveal mt-9 flex flex-col items-center gap-3 sm:flex-row"
                data-delay="220"
              >
                <a
                  href="#cta"
                  className="w-full rounded-[4px] bg-white px-6 py-3 text-center text-[13.5px] font-semibold tracking-[-0.01em] text-black transition-colors hover:bg-white/88 sm:w-auto"
                >
                  Start a job
                </a>
                <a
                  href="#gpus"
                  className="w-full rounded-[4px] border border-white/[0.12] bg-white/[0.04] px-6 py-3 text-center text-[13.5px] font-medium tracking-[-0.01em] text-white/85 backdrop-blur-md transition-colors hover:border-white/20 hover:bg-white/[0.08] hover:text-white sm:w-auto"
                >
                  See GPU pricing
                </a>
              </div>

              <dl
                className="reveal mt-16 grid w-full max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.05] backdrop-blur-sm sm:grid-cols-4"
                data-delay="300"
              >
                {[
                  ["12,400+", "GPUs online"],
                  ["38", "Regions"],
                  ["$0.42", "Per GPU hour, from"],
                  ["99.95%", "Job success rate"],
                ].map(([v, k]) => (
                  <div key={k} className="bg-black/70 px-4 py-5 text-center">
                    <dt className="text-[20px] font-semibold tracking-[-0.03em] sm:text-[24px]">
                      {v}
                    </dt>
                    <dd className="mt-1 text-[11.5px] tracking-[0.02em] text-faint">
                      {k}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* ======================================================== PARTNERS */}
        <section className="px-4 sm:px-6">
          <div className="mx-auto w-full max-w-[1200px]">
            <SectionHeading
              eyebrow="Silicon partners"
              title="Built on NVIDIA accelerated computing."
              sub="Every node on the network runs certified NVIDIA data-centre hardware with a validated CUDA, cuDNN and NCCL stack."
            />

            <div className="grid grid-cols-1 gap-px lg:grid-cols-[1.15fr_1fr]">
              <div className="dashed reveal flex min-h-[180px] items-center justify-center gap-5 px-6 py-12">
                <NvidiaMark className="h-11 w-11 text-[#76b900] sm:h-14 sm:w-14" />
                <div className="h-9 w-px bg-white/10 sm:h-11" />
                <div>
                  <p className="text-[24px] leading-none font-bold tracking-[-0.03em] sm:text-[30px]">
                    NVIDIA
                  </p>
                  <p className="mt-1.5 font-mono text-[11px] tracking-[0.16em] text-faint uppercase">
                    Certified compute partner
                  </p>
                </div>
              </div>

              <div className="dashed reveal grid grid-cols-2 gap-px" data-delay="90">
                {[
                  ["CUDA 12.6", "Toolkit"],
                  ["NCCL 2.23", "Collectives"],
                  ["NVLink", "Interconnect"],
                  ["MIG", "Partitioning"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex flex-col items-center justify-center gap-1 px-4 py-8"
                  >
                    <span className="text-[15px] font-semibold tracking-[-0.02em]">
                      {k}
                    </span>
                    <span className="font-mono text-[10.5px] tracking-[0.14em] text-faint uppercase">
                      {v}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* GPU marquee */}
            <div className="dashed marquee relative mt-px overflow-hidden py-7">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-black to-transparent" />
              <div className="marquee-track flex w-max items-center gap-10 sm:gap-14">
                {[...GPU_CLASSES, ...GPU_CLASSES].map((g, i) => (
                  <span
                    key={`${g}-${i}`}
                    className="flex shrink-0 items-center gap-2.5 font-mono text-[12.5px] tracking-[0.08em] whitespace-nowrap text-white/35 uppercase"
                  >
                    <NvidiaMark className="h-3.5 w-3.5 text-[#76b900]/70" />
                    {g}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== PLATFORM */}
        <section className="px-4 sm:px-6">
          <div className="mx-auto w-full max-w-[1200px]">
            <SectionHeading
              id="platform"
              eyebrow="The platform"
              title="Everything you need to run compute, nothing you don't."
            />

            <div className="grid grid-cols-1 gap-px md:grid-cols-2">
              {FEATURES.map((f, i) => (
                <article
                  key={f.title}
                  className="dashed reveal group relative overflow-hidden px-6 py-9 sm:px-8 sm:py-11"
                  data-delay={i * 70}
                >
                  <div
                    className="pointer-events-none absolute -top-24 left-1/2 h-56 w-[420px] -translate-x-1/2 opacity-[0.07] blur-2xl transition-opacity duration-500 group-hover:opacity-[0.16]"
                    style={{
                      background: `radial-gradient(50% 50% at 50% 50%, ${f.glow} 0%, transparent 100%)`,
                    }}
                  />
                  <div className="relative">
                    <div className="mb-6 grid h-10 w-10 place-items-center rounded-[4px] border border-white/[0.08] bg-white/[0.04] text-white/80">
                      <Icon>{f.icon}</Icon>
                    </div>
                    <h3 className="text-[19px] font-semibold tracking-[-0.025em] sm:text-[21px]">
                      {f.title}
                    </h3>
                    <p className="mt-3 max-w-[46ch] text-[14.5px] leading-[1.65] text-muted">
                      {f.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ HOW */}
        <section className="px-4 sm:px-6">
          <div className="mx-auto w-full max-w-[1200px]">
            <SectionHeading
              id="how"
              eyebrow="How it works"
              title="From idea to running kernel in three steps."
            />
            <div className="grid grid-cols-1 gap-px md:grid-cols-3">
              {STEPS.map((s, i) => (
                <div
                  key={s.n}
                  className="dashed reveal px-6 py-10 sm:px-8 sm:py-12"
                  data-delay={i * 90}
                >
                  <span className="font-mono text-[12px] tracking-[0.2em] text-accent">
                    {s.n}
                  </span>
                  <h3 className="mt-5 text-[19px] font-semibold tracking-[-0.025em]">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-[1.65] text-muted">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Terminal snippet */}
            <div className="dashed reveal mt-px overflow-hidden">
              <div className="flex items-center gap-2 border-b border-white/[0.06] px-5 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
                <span className="ml-2 font-mono text-[11.5px] tracking-[0.08em] text-faint uppercase">
                  quanta-cli
                </span>
              </div>
              <pre className="overflow-x-auto px-5 py-6 font-mono text-[12.5px] leading-[1.9] sm:px-8 sm:text-[13.5px]">
                <code>
                  <span className="text-accent">$</span>{" "}
                  <span className="text-white">quanta jobs create</span>{" "}
                  <span className="text-white/45">\</span>
                  {"\n"}
                  {"    "}
                  <span className="text-white/45">--gpu</span> h100:8{" "}
                  <span className="text-white/45">--image</span>{" "}
                  ghcr.io/acme/trainer:1.4 <span className="text-white/45">\</span>
                  {"\n"}
                  {"    "}
                  <span className="text-white/45">--cmd</span>{" "}
                  &quot;torchrun train.py --epochs 3&quot;
                  {"\n\n"}
                  <span className="text-white/35">
                    → matched 8× H100 SXM5 · eu-west · $2.24/gpu-hr
                  </span>
                  {"\n"}
                  <span className="text-white/35">
                    → job qc_8f3a21 scheduled in 31s · streaming logs…
                  </span>
                </code>
              </pre>
            </div>
          </div>
        </section>

        {/* =========================================================== GPUS */}
        <section className="px-4 sm:px-6">
          <div className="mx-auto w-full max-w-[1200px]">
            <SectionHeading
              id="gpus"
              eyebrow="GPU catalogue"
              title="Pick your silicon. Pay by the second."
              sub="Rates below are current network medians. The scheduler always books the cheapest node that meets your constraints."
            />

            <div className="dashed reveal overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[680px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-white/[0.07]">
                      {["GPU", "Memory", "Interconnect", "Best for", "Per hour"].map(
                        (h) => (
                          <th
                            key={h}
                            className={`px-5 py-4 font-mono text-[11px] tracking-[0.14em] text-faint uppercase sm:px-6 ${
                              h === "Per hour" ? "text-right" : ""
                            }`}
                          >
                            {h}
                          </th>
                        ),
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {PRICING.map((row) => (
                      <tr
                        key={row.gpu}
                        className="border-b border-white/[0.05] transition-colors last:border-0 hover:bg-white/[0.02]"
                      >
                        <td className="px-5 py-5 sm:px-6">
                          <div className="flex items-center gap-3">
                            <NvidiaMark className="h-4 w-4 shrink-0 text-[#76b900]" />
                            <span className="text-[14.5px] font-medium tracking-[-0.01em] whitespace-nowrap">
                              {row.gpu.replace("NVIDIA ", "")}
                            </span>
                            {row.highlight ? (
                              <span className="rounded-[2px] border border-accent/25 bg-accent/10 px-2 py-0.5 font-mono text-[10px] tracking-[0.1em] text-accent uppercase">
                                New
                              </span>
                            ) : null}
                          </div>
                        </td>
                        <td className="px-5 py-5 text-[13.5px] whitespace-nowrap text-muted sm:px-6">
                          {row.vram}
                        </td>
                        <td className="px-5 py-5 text-[13.5px] whitespace-nowrap text-muted sm:px-6">
                          {row.net}
                        </td>
                        <td className="px-5 py-5 text-[13.5px] whitespace-nowrap text-muted sm:px-6">
                          {row.best}
                        </td>
                        <td className="px-5 py-5 text-right whitespace-nowrap sm:px-6">
                          <span className="font-mono text-[15px] font-medium">
                            ${row.price}
                          </span>
                          <span className="text-[12px] text-faint"> /hr</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex flex-col items-center justify-between gap-3 border-t border-white/[0.07] px-5 py-4 sm:flex-row sm:px-6">
                <p className="text-[12.5px] text-faint">
                  Billed per second · No egress fees · Stakers pay up to 18% less
                </p>
                <a
                  href="#cta"
                  className="text-[13px] font-semibold text-accent transition-opacity hover:opacity-80"
                >
                  Reserve capacity →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================== TOKEN */}
        <section className="px-4 sm:px-6">
          <div className="mx-auto w-full max-w-[1200px]">
            <SectionHeading
              id="token"
              eyebrow="Network economics"
              title="One token, settling every second of compute."
              sub="$QNTA is the unit of account between the teams that need GPUs and the operators that own them."
            />

            <div className="grid grid-cols-1 gap-px md:grid-cols-2 lg:grid-cols-4">
              {BENEFITS.map((b, i) => (
                <div
                  key={b.k}
                  className="dashed reveal px-6 py-9 sm:px-7 sm:py-10"
                  data-delay={i * 70}
                >
                  <h3 className="text-[17px] font-semibold tracking-[-0.02em]">
                    {b.k}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-[1.6] text-muted">
                    {b.v}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ FAQ */}
        <section className="px-4 sm:px-6">
          <div className="mx-auto w-full max-w-[860px]">
            <SectionHeading
              id="faq"
              eyebrow="FAQ"
              title="Frequently asked questions."
            />
            <div className="pb-4">
              <Faq />
            </div>
          </div>
        </section>

        {/* ============================================================ CTA */}
        <section id="cta" className="scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28">
          <div className="dashed relative mx-auto w-full max-w-[1200px] overflow-hidden">
            <div className="pointer-events-none absolute inset-0">
              <div className="mask-fade-edges absolute inset-0 scale-y-[-1] opacity-60">
                <AsciiBackground scale={12} gain={1.05} />
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_50%_50%,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.4)_60%,transparent_100%)]" />
            </div>

            <div className="relative flex flex-col items-center px-5 py-20 sm:py-24">
              <h2 className="reveal max-w-[18ch] text-center text-[30px] leading-[1.08] font-semibold tracking-[-0.04em] text-balance sm:text-[46px]">
                <span className="text-hero-gradient">
                  Spin up your first GPU in under a minute.
                </span>
              </h2>
              <p
                className="reveal mt-5 max-w-[48ch] text-center text-[15px] leading-[1.6] text-white/60 text-balance"
                data-delay="80"
              >
                No hardware, no reservations, no idle bill. Create an account,
                push a container, and only pay for the seconds you use.
              </p>
              <div
                className="reveal mt-9 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row"
                data-delay="160"
              >
                <a
                  href="#top"
                  className="w-full rounded-[4px] bg-white px-7 py-3.5 text-center text-[13.5px] font-semibold tracking-[-0.01em] text-black transition-colors hover:bg-white/88 sm:w-auto"
                >
                  Get started free
                </a>
                <a
                  href="#gpus"
                  className="w-full rounded-[4px] border border-white/[0.12] bg-white/[0.04] px-7 py-3.5 text-center text-[13.5px] font-medium tracking-[-0.01em] text-white/85 backdrop-blur-md transition-colors hover:border-white/20 hover:bg-white/[0.08] hover:text-white sm:w-auto"
                >
                  Talk to us
                </a>
              </div>
              <p className="reveal mt-7 font-mono text-[11px] tracking-[0.14em] text-faint uppercase">
                $10 in free compute credit · no card required
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
