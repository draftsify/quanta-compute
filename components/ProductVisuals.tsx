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
    <span className="flex size-10 shrink-0 items-center justify-center text-white/65">
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

function Chip({ glyph, label }: { glyph: keyof typeof GLYPHS; label: string }) {
  return (
    <span className="flex h-8 shrink-0 items-center gap-1.5 rounded-[6px] border border-white/[0.12] bg-white/[0.05] px-2.5 text-[10.5px] font-medium whitespace-nowrap text-white/70">
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
