"use client";

import { useState } from "react";

const ITEMS = [
  {
    q: "What exactly am I paying for?",
    a: "Only the seconds your job actually occupies a GPU. Billing starts when the container is scheduled and stops the moment the job exits. There is no reservation fee, no minimum commitment and no charge for idle time.",
  },
  {
    q: "Which GPUs can I get?",
    a: "The network aggregates NVIDIA H200, H100 SXM/PCIe, A100 80GB, L40S and RTX 6000 Ada class hardware. You pick a class and a region, the scheduler finds the cheapest node that matches your memory, interconnect and availability constraints.",
  },
  {
    q: "How is this cheaper than a hyperscaler?",
    a: "Traditional clouds price in a reserved-capacity margin and charge whether or not you use the machine. Quanta matches your job against spare capacity across independent operators, so you get the same silicon without paying for someone else's idle fleet.",
  },
  {
    q: "Do I have to hold the token to use the platform?",
    a: "Settlement happens in $QNTA under the hood, but you can top up a balance with a card or stablecoin and the conversion is handled for you. Teams that hold and stake $QNTA get a discount on the effective hourly rate.",
  },
  {
    q: "How do I run a workload?",
    a: "Push a container image or point us at a Git repo, declare the GPU class and the entrypoint, then create the job from the console, the CLI or the REST API. Logs, checkpoints and artifacts stream back to your storage bucket in real time.",
  },
  {
    q: "Is my data isolated?",
    a: "Every job runs in a hardware-isolated container with an ephemeral encrypted volume that is wiped on exit. Operators never get shell access to your workload and traffic between your client and the node is fully encrypted.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-2.5">
      {ITEMS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className="dashed reveal rounded-xl bg-white/[0.015]"
            data-delay={i * 50}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 px-5 py-4.5 text-left sm:px-6"
            >
              <span className="text-[15px] font-medium tracking-[-0.01em] sm:text-[16.5px]">
                {item.q}
              </span>
              <span className="relative grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.06]">
                <span className="absolute h-px w-3 bg-white" />
                <span
                  className={`absolute h-px w-3 bg-white transition-transform duration-300 ${
                    isOpen ? "rotate-0" : "rotate-90"
                  }`}
                />
              </span>
            </button>
            <div className="faq-panel" data-open={isOpen}>
              <div>
                <p className="px-5 pb-5 text-[14.5px] leading-[1.65] text-muted sm:px-6 sm:pr-16">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
