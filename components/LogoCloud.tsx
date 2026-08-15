import { LOGOS } from "./logos";

export default function LogoCloud() {
  return (
    <div className="py-16 sm:py-20">
      <h2 className="reveal mx-auto max-w-2xl text-center text-[22px] leading-[1.25] font-semibold tracking-[-0.03em] text-balance sm:text-[28px]">
        <span className="text-white/45">Built on the hardware and tools</span>{" "}
        <span className="text-white">you already use.</span>
      </h2>

      <ul className="mx-auto mt-10 grid max-w-[860px] grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {LOGOS.map((logo, i) => (
          <li
            key={logo.name}
            className="frame reveal group flex h-[86px] items-center justify-center gap-2.5 px-4 transition-colors hover:border-white/15"
            data-delay={(i % 4) * 60}
          >
            <svg
              viewBox={logo.box}
              fill="currentColor"
              role="img"
              aria-label={logo.name}
              className={`w-auto text-white/75 transition-colors group-hover:text-white ${
                logo.wordmark ? "h-[15px]" : "h-[18px] shrink-0"
              }`}
            >
              <path d={logo.d} />
            </svg>
            {logo.wordmark ? null : (
              <span className="text-[15px] font-semibold tracking-[-0.02em] text-white/75 transition-colors group-hover:text-white">
                {logo.name}
              </span>
            )}
          </li>
        ))}
      </ul>

      <p className="reveal mx-auto mt-8 max-w-xl text-center text-[13px] leading-[1.6] text-faint text-balance">
        Nodes run certified NVIDIA data-centre hardware with a validated CUDA,
        cuDNN and NCCL stack.
      </p>
    </div>
  );
}
