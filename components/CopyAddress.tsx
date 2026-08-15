"use client";

import { useState } from "react";

export default function CopyAddress({ address }: { address: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard blocked — the address stays selectable in the field.
    }
  };

  return (
    <div className="flex flex-col gap-2 sm:flex-row">
      <code className="dashed min-w-0 flex-1 truncate rounded-[4px] bg-white/[0.02] px-3.5 py-2.5 font-mono text-[12.5px] text-white/70 select-all">
        {address}
      </code>
      <button
        type="button"
        onClick={copy}
        className="shrink-0 rounded-[4px] border border-white/[0.14] bg-white/[0.05] px-4 py-2.5 text-[13px] font-medium text-white/85 transition-colors hover:border-white/25 hover:bg-white/[0.1] hover:text-white"
      >
        {copied ? "Copied" : "Copy address"}
      </button>
    </div>
  );
}
