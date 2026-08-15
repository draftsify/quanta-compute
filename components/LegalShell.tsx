import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/Footer";

export type Section = {
  title: string;
  /** A string renders as a paragraph, an array of strings as a bullet list. */
  body: (string | string[])[];
};

type Props = {
  title: string;
  intro: string;
  updated: string;
  sections: Section[];
};

export default function LegalShell({ title, intro, updated, sections }: Props) {
  return (
    <>
      <header className="border-b border-white/[0.06]">
        <div className="mx-auto flex h-[66px] w-full max-w-[860px] items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt=""
              width={28}
              height={28}
              className="h-6 w-6"
              priority
            />
            <span className="text-[15px] font-semibold tracking-[-0.02em]">
              Quanta
            </span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1 rounded-[6px] px-2.5 py-2 text-[13.5px] font-medium text-muted transition-colors hover:bg-white/[0.05] hover:text-white"
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
        </div>
      </header>

      <main className="page-in mx-auto w-full max-w-[860px] px-4 pt-14 pb-24 sm:px-6 sm:pt-20">
        <p className="text-[12px] font-semibold tracking-[0.16em] text-accent uppercase">
          Legal
        </p>
        <h1 className="mt-4 text-[34px] leading-[1.1] font-semibold tracking-[-0.035em] sm:text-[44px]">
          {title}
        </h1>
        <p className="mt-4 max-w-[62ch] text-[15px] leading-[1.65] text-muted">
          {intro}
        </p>
        <p className="mt-4 text-[13px] text-faint">Last updated {updated}</p>

        {/* This site is pre-launch; saying so is more honest than presenting an
            unreviewed document as final. */}
        <div className="frame mt-8 px-5 py-4">
          <p className="text-[13.5px] leading-[1.6] text-muted">
            <span className="font-medium text-white">Draft.</span> This document
            is a working template pending legal review. Company details,
            governing jurisdiction and the contact address still have to be
            completed before launch.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-10">
          {sections.map((section, i) => (
            <section key={section.title}>
              <h2 className="text-[19px] font-semibold tracking-[-0.02em] sm:text-[21px]">
                <span className="mr-3 text-faint tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {section.title}
              </h2>
              <div className="mt-4 flex flex-col gap-4">
                {section.body.map((block, j) =>
                  Array.isArray(block) ? (
                    <ul key={j} className="flex flex-col gap-2.5 pl-1">
                      {block.map((item) => (
                        <li
                          key={item}
                          className="relative pl-5 text-[14.5px] leading-[1.7] text-muted"
                        >
                          <span className="absolute top-[0.7em] left-0 h-1 w-1 rounded-full bg-white/30" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p
                      key={j}
                      className="max-w-[72ch] text-[14.5px] leading-[1.7] text-muted"
                    >
                      {block}
                    </p>
                  ),
                )}
              </div>
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
