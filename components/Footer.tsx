import Image from "next/image";

const COLUMNS = [
  {
    title: "Platform",
    links: [
      { label: "Overview", href: "#platform" },
      { label: "GPU catalogue", href: "#gpus" },
      { label: "How it works", href: "#how" },
      { label: "Pricing", href: "#gpus" },
      { label: "Network status", href: "#" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Documentation", href: "#" },
      { label: "API reference", href: "#" },
      { label: "CLI", href: "#" },
      { label: "Examples", href: "#" },
      { label: "Changelog", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Become an operator", href: "#" },
      { label: "$QNTA token", href: "#token" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#cta" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of service", href: "#" },
      { label: "Privacy policy", href: "#" },
      { label: "Acceptable use", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
];

const SOCIALS = [
  {
    label: "X",
    href: "https://x.com",
    path: "M13.94 10.47 21.27 2h-1.74l-6.36 7.35L8.09 2H2.25l7.69 11.12L2.25 22h1.74l6.72-7.77L16.06 22h5.84l-7.97-11.53Zm-2.38 2.75-.78-1.11-6.2-8.85h2.67l5 7.15.78 1.11 6.5 9.29h-2.67l-5.3-7.59Z",
  },
  {
    label: "GitHub",
    href: "https://github.com",
    path: "M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49l-.01-1.9c-2.78.62-3.37-1.22-3.37-1.22-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.8-4.58 5.05.36.32.68.94.68 1.9l-.01 2.82c0 .27.18.59.69.49A10.06 10.06 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z",
  },
  {
    label: "Discord",
    href: "https://discord.com",
    path: "M19.3 5.36A17.6 17.6 0 0 0 15 4l-.2.42a12.9 12.9 0 0 1 3.8 1.9 13.4 13.4 0 0 0-13.2 0 12.9 12.9 0 0 1 3.8-1.9L9 4a17.6 17.6 0 0 0-4.3 1.36C2 9.3 1.2 13.1 1.6 16.85A17.6 17.6 0 0 0 6.9 19.5l1.1-1.5a11 11 0 0 1-1.9-.9l.5-.36a12.6 12.6 0 0 0 10.8 0l.5.36c-.6.36-1.24.66-1.9.9l1.1 1.5a17.5 17.5 0 0 0 5.3-2.65c.47-4.35-.8-8.11-3.1-11.49ZM8.5 14.6c-1.03 0-1.88-.94-1.88-2.1s.83-2.11 1.88-2.11c1.05 0 1.9.95 1.88 2.11 0 1.16-.83 2.1-1.88 2.1Zm7 0c-1.03 0-1.88-.94-1.88-2.1s.83-2.11 1.88-2.11c1.05 0 1.9.95 1.88 2.11 0 1.16-.83 2.1-1.88 2.1Z",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    path: "M6.94 6.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3.2 21.5h3.5V8.9H3.2v12.6Zm6.06-12.6h3.35v1.72h.05c.47-.86 1.6-1.77 3.3-1.77 3.53 0 4.18 2.26 4.18 5.2v7.45h-3.49v-6.6c0-1.58-.03-3.6-2.24-3.6-2.24 0-2.58 1.7-2.58 3.48v6.72H9.26V8.9Z",
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
        {/* Logo band */}
        <div className="flex items-center justify-between gap-6 py-10">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Quanta Compute"
              width={40}
              height={40}
              className="h-9 w-9"
            />
            <div>
              <p className="text-[15px] font-semibold tracking-[-0.02em]">
                Quanta Compute
              </p>
              <p className="text-[12.5px] text-faint">
                Decentralised GPU infrastructure
              </p>
            </div>
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-2 sm:flex">
            <span className="live-dot h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="font-mono text-[11.5px] tracking-[0.06em] text-muted uppercase">
              All systems operational
            </span>
          </div>
        </div>

        <div className="h-px w-full bg-[repeating-linear-gradient(90deg,var(--color-line)_0_12px,transparent_12px_18px)]" />

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-12 md:grid-cols-4 lg:grid-cols-[repeat(4,minmax(0,1fr))_auto]">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="mb-4 text-[14.5px] font-semibold tracking-[-0.01em]">
                {col.title}
              </p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[13.5px] text-muted transition-colors hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:w-[260px]">
            <p className="mb-4 text-[14.5px] font-semibold tracking-[-0.01em]">
              Stay in the loop
            </p>
            <p className="mb-4 text-[13.5px] leading-[1.6] text-muted">
              New GPU classes, regions and protocol updates. No noise.
            </p>
            <form className="flex gap-2" action="#" method="post">
              <input
                type="email"
                required
                placeholder="you@company.com"
                aria-label="Email address"
                className="h-10 min-w-0 flex-1 rounded-[10px] border border-white/10 bg-white/[0.04] px-3 text-[13.5px] outline-none transition-colors placeholder:text-faint focus:border-white/25"
              />
              <button
                type="submit"
                className="h-10 shrink-0 rounded-[10px] bg-white px-4 text-[13.5px] font-bold text-black transition-opacity hover:opacity-85"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="h-px w-full bg-[repeating-linear-gradient(90deg,var(--color-line)_0_12px,transparent_12px_18px)]" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-5 py-7 sm:flex-row">
          <p className="text-[13px] text-faint">
            © {new Date().getFullYear()} Quanta Compute. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={s.label}
                className="grid h-9 w-9 place-items-center rounded-[10px] border border-white/[0.07] bg-white/[0.02] text-muted transition-colors hover:border-white/20 hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="15"
                  height="15"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
