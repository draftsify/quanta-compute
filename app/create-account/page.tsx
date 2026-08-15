import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Particles from "@/components/Particles";

export const metadata: Metadata = {
  title: "Create your Quanta account",
  description:
    "Create a Quanta account with email, Google or a connected wallet.",
};

const PROVIDERS = [
  {
    label: "Continue with Google",
    icon: (
      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
    ),
  },
  {
    label: "Continue with wallet",
    hint: "Phantom · Solflare",
    icon: (
      <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5H18a1 1 0 0 1 1 1v2H5.5A2.5 2.5 0 0 1 3 5.5v11A2.5 2.5 0 0 0 5.5 19H19a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1H5.5m11.5 4.5h.01" />
    ),
    stroke: true,
  },
];

export default function CreateAccount() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <Particles quantity={140} />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-20">
        <Link
          href="/"
          className="absolute top-5 left-5 inline-flex items-center gap-1 rounded-[6px] px-2.5 py-2 text-[13.5px] font-medium text-muted transition-colors hover:bg-white/[0.05] hover:text-white sm:top-6 sm:left-6"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path d="m14 6-6 6 6 6" />
          </svg>
          Home
        </Link>

        <div className="page-in mx-auto w-full sm:w-[384px]">
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt=""
              width={28}
              height={28}
              className="h-6 w-6"
              priority
            />
            <span className="text-[17px] font-semibold tracking-[-0.02em]">
              Quanta
            </span>
          </div>

          <h1 className="mt-6 text-[26px] leading-[1.15] font-semibold tracking-[-0.03em] sm:text-[30px]">
            Create your account
          </h1>
          <p className="mt-2 text-[15px] leading-[1.6] text-muted">
            Sign up to create jobs, rent GPU capacity and settle usage from your
            wallet.
          </p>

          {/* Presentational only — auth is wired up separately (Privy). */}
          <form className="mt-7 flex flex-col gap-2.5" action="/create-account">
            <label htmlFor="email" className="sr-only">
              Work email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              className="frame frame-quiet h-11 w-full px-3.5 text-[14px] outline-none transition-colors placeholder:text-faint focus:border-white/25"
            />
            <button
              type="submit"
              className="h-11 w-full rounded-[6px] bg-white text-[13.5px] font-semibold tracking-[-0.01em] text-black transition-colors hover:bg-white/88"
            >
              Continue with email
            </button>
          </form>

          <div className="my-6 flex items-center gap-4">
            <span className="h-px flex-1 bg-white/[0.09]" />
            <span className="text-[11.5px] font-medium tracking-[0.14em] text-faint uppercase">
              or
            </span>
            <span className="h-px flex-1 bg-white/[0.09]" />
          </div>

          <div className="flex flex-col gap-2.5">
            {PROVIDERS.map((p) => (
              // The icon and hint are taken out of flow so every provider's
              // icon lands on the same x and the labels stay centred.
              <button
                key={p.label}
                type="button"
                className="relative flex h-11 w-full items-center justify-center rounded-[6px] border border-white/[0.12] bg-white/[0.04] px-14 text-[13.5px] font-medium text-white/85 transition-colors hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill={p.stroke ? "none" : "currentColor"}
                  stroke={p.stroke ? "currentColor" : undefined}
                  strokeWidth={p.stroke ? 1.5 : undefined}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="absolute left-4 h-4 w-4"
                  aria-hidden="true"
                >
                  {p.icon}
                </svg>
                {p.label}
                {p.hint ? (
                  <span className="absolute right-4 text-[11.5px] text-faint">
                    {p.hint}
                  </span>
                ) : null}
              </button>
            ))}
          </div>

          <p className="mt-8 text-[13px] leading-[1.6] text-faint">
            By continuing, you agree to our{" "}
            <a
              href="/legal/terms"
              className="underline underline-offset-4 transition-colors hover:text-white"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="/legal/privacy"
              className="underline underline-offset-4 transition-colors hover:text-white"
            >
              Privacy Policy
            </a>
            .
          </p>

          <p className="mt-6 text-[13.5px] text-muted">
            Already have an account?{" "}
            <a
              href="#"
              className="font-medium text-white underline underline-offset-4"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
