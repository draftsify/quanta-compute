/**
 * Hover visuals for the product cards. Everything is CSS driven off the card's
 * `group` class — no JS, no timers, and every animated property (transform,
 * width, height) stays cheap.
 */

function Glyph({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[18px] w-[18px]"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const GLYPHS = {
  terminal: (
    <>
      <path d="m5 8 3.5 3.5L5 15" />
      <path d="M12 16h7" />
    </>
  ),
  cpu: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="1.5" />
      <rect x="9.5" y="9.5" width="5" height="5" rx="0.5" />
      <path d="M9 6V3.5M15 6V3.5M9 20.5V18M15 20.5V18M6 9H3.5M6 15H3.5M20.5 9H18M20.5 15H18" />
    </>
  ),
  tool: (
    <>
      <path d="M14.5 5.5a3.5 3.5 0 0 0 4.4 4.4l-8.4 8.4a2 2 0 0 1-2.8-2.8Z" />
      <path d="m6 18 .01.01" />
    </>
  ),
  message: (
    <>
      <path d="M4 5.5h16v11H9l-5 3.5Z" />
    </>
  ),
  file: (
    <>
      <path d="M7 3.5h7l4 4V20.5H7Z" />
      <path d="M14 3.5v4h4M10 13h5M10 16.5h5" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="m15.5 15.5 4 4" />
    </>
  ),
  key: (
    <>
      <circle cx="8" cy="12" r="3.5" />
      <path d="M11.5 12H20l-2 2.5M16 12v2.5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.5 5.5 6v5.5c0 4 2.7 7 6.5 8.5 3.8-1.5 6.5-4.5 6.5-8.5V6Z" />
    </>
  ),
  box: (
    <>
      <path d="M4 8.5 12 4.5l8 4-8 4Z" />
      <path d="M4 8.5v7l8 4 8-4v-7" />
    </>
  ),
  bolt: (
    <>
      <path d="M13 3 5.5 13.5H11L10 21l7.5-10.5H12Z" />
    </>
  ),
} as const;

function Tile({ glyph }: { glyph: keyof typeof GLYPHS }) {
  return (
    <span className="flex size-10 shrink-0 items-center justify-center text-accent">
      <Glyph>{GLYPHS[glyph]}</Glyph>
    </span>
  );
}

function Empty({ wide = false }: { wide?: boolean }) {
  return (
    <span
      className={`shrink-0 rounded-[6px] border border-dashed border-white/[0.1] ${
        wide ? "h-8 w-24" : "size-10"
      }`}
    />
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="mask-x -mx-6 mb-8 h-32 overflow-hidden sm:-mx-8">
      {children}
    </div>
  );
}

/* ------------------------------------------------- 1. agent tool rails */

export function AgentRails() {
  return (
    <Shell>
      <div className="grid size-full place-content-center gap-1">
        <div className="flex -translate-x-6 items-center gap-1 transition-transform duration-[600ms] ease-in-out group-hover:translate-x-0">
          <Empty />
          <Empty />
          <Tile glyph="terminal" />
          <Tile glyph="cpu" />
          <Tile glyph="tool" />
          <Empty />
          <Empty />
          <Empty />
        </div>
        <div className="flex translate-x-6 items-center gap-1 transition-transform duration-[600ms] ease-in-out group-hover:translate-x-0">
          <Empty />
          <Empty />
          <Empty />
          <Tile glyph="search" />
          <Tile glyph="file" />
          <Tile glyph="message" />
          <Empty />
          <Empty />
        </div>
      </div>
    </Shell>
  );
}

/* ----------------------------------------------------- 2. deploy chips */

function Chip({
  glyph,
  label,
}: {
  glyph: keyof typeof GLYPHS;
  label: string;
}) {
  return (
    <span className="flex h-8 shrink-0 items-center gap-1.5 rounded-[6px] border border-accent/20 bg-accent/[0.08] px-2.5 text-[10.5px] font-medium whitespace-nowrap text-accent">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-3 w-3"
        aria-hidden="true"
      >
        {GLYPHS[glyph]}
      </svg>
      {label}
    </span>
  );
}

export function DeployChips() {
  return (
    <Shell>
      <div className="grid size-full place-content-center gap-1.5">
        <div className="flex items-center gap-1.5 transition-transform duration-[600ms] ease-in-out group-hover:-translate-x-6">
          <Empty wide />
          <Chip glyph="box" label="Pull image" />
          <Chip glyph="bolt" label="Warm cache" />
          <Empty wide />
        </div>
        <div className="flex items-center gap-1.5 transition-transform duration-[600ms] ease-in-out group-hover:-translate-x-3">
          <Empty wide />
          <Chip glyph="cpu" label="Attach 2× H100" />
          <Chip glyph="terminal" label="Stream logs" />
          <Empty wide />
        </div>
      </div>
    </Shell>
  );
}

/* --------------------------------------------------------- 3. run bars */

const BARS = [
  { base: "h-3", hover: "group-hover:h-6" },
  { base: "h-4", hover: "group-hover:h-8" },
  { base: "h-6", hover: "group-hover:h-9" },
  { base: "h-5", hover: "group-hover:h-7" },
  { base: "h-8", hover: "group-hover:h-12" },
  { base: "h-6", hover: "group-hover:h-10" },
  { base: "h-10", hover: "group-hover:h-14" },
  { base: "h-7", hover: "group-hover:h-11" },
  { base: "h-12", hover: "group-hover:h-16" },
  { base: "h-14", hover: "group-hover:h-20" },
  { base: "h-9", hover: "group-hover:h-13" },
  { base: "h-11", hover: "group-hover:h-15" },
  { base: "h-8", hover: "group-hover:h-11" },
  { base: "h-6", hover: "group-hover:h-9" },
  { base: "h-4", hover: "group-hover:h-7" },
  { base: "h-3", hover: "group-hover:h-5" },
];
const PEAK = 9;

export function RunBars() {
  return (
    <Shell>
      <div className="flex size-full flex-col justify-end px-6 pb-5 sm:px-8">
        <div className="flex h-24 w-full items-end gap-[3px]">
          {BARS.map((bar, i) => {
            const peak = i === PEAK;
            return (
              <div
                key={i}
                className={`relative w-full rounded-t-[3px] transition-[height] duration-[600ms] ease-in-out ${
                  peak ? "bg-accent" : "bg-white/15"
                } ${bar.base} ${bar.hover}`}
              >
                {peak ? (
                  <span className="absolute bottom-full left-1/2 mb-1.5 flex -translate-x-1/2 items-center gap-1.5 rounded-[5px] border border-white/[0.1] bg-[#101010] px-2 py-1 text-[10px] font-medium whitespace-nowrap text-white/80">
                    <span className="size-1.5 rounded-full bg-accent" />
                    Fine-tune · 4× H100
                  </span>
                ) : null}
              </div>
            );
          })}
        </div>
        <div className="h-px w-full bg-white/[0.09]" />
      </div>
    </Shell>
  );
}

/* ------------------------------------------------------ 4. ssh session */

const LINES = [
  { base: "w-[38%]", hover: "group-hover:w-[72%]" },
  { base: "w-[26%]", hover: "group-hover:w-[54%]" },
  { base: "w-[45%]", hover: "group-hover:w-[63%]" },
];

export function SshSession() {
  return (
    <Shell>
      <div className="flex size-full flex-col justify-center gap-2.5 px-6 sm:px-8">
        <div className="flex items-center gap-2 text-[11px] text-white/55">
          <span className="live-dot size-1.5 shrink-0 rounded-full bg-accent" />
          <span className="text-accent">ssh</span>
          <span className="truncate">quanta@qx_8f3a21</span>
          <span className="ml-auto shrink-0 rounded-[4px] border border-white/[0.09] px-1.5 py-0.5 text-[9.5px] tracking-[0.08em] text-white/35 uppercase">
            scoped
          </span>
        </div>
        {LINES.map((line, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="shrink-0 text-[11px] text-white/25">$</span>
            <span
              className={`h-[7px] rounded-[3px] bg-white/[0.14] transition-[width] duration-[600ms] ease-in-out ${line.base} ${line.hover}`}
            />
          </div>
        ))}
        <div className="flex items-center gap-2">
          <span className="shrink-0 text-[11px] text-accent">$</span>
          <span className="h-[13px] w-[7px] bg-accent/70" />
        </div>
      </div>
    </Shell>
  );
}

export const PRODUCT_VISUALS = {
  agents: AgentRails,
  deploys: DeployChips,
  bars: RunBars,
  ssh: SshSession,
} as const;
