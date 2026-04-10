import dynamic from "next/dynamic";

import { BOOK_CALL_URL } from "@/components/landing/constants";
import Reveal from "@/components/Reveal";

const HeroParticles = dynamic(() => import("@/components/HeroParticles"), {
  ssr: false,
});

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <HeroParticles />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[42rem] flex-col items-center gap-5 text-center sm:gap-6 md:gap-8">
        <Reveal className="flex w-full justify-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-purple-400/65 md:text-[11px]">
            DEAL FLOW INFRASTRUCTURE
          </p>
        </Reveal>

        <Reveal delayMs={80} className="flex w-full justify-center">
          <h1 className="mx-auto flex w-full max-w-xl flex-col items-center gap-0.5 text-center md:max-w-2xl md:gap-1">
            <span className="block w-full text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl sm:leading-[1.04] md:text-[2.85rem] md:leading-[1.02] lg:text-[3.15rem]">
              Qualified Opportunities.
            </span>
            <span className="hero-headline-punchline block w-full text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-[2.85rem] sm:leading-[1.02] md:text-[3.15rem] md:leading-[1] lg:text-[3.35rem]">
              On Demand.
            </span>
          </h1>
        </Reveal>

        <Reveal delayMs={120} className="flex w-full justify-center">
          <p className="mx-auto max-w-md text-sm leading-relaxed text-zinc-500/90 md:text-[15px]">
            No outreach. No chasing. Just flow.
          </p>
        </Reveal>

        <Reveal delayMs={160} className="flex w-full justify-center">
          <p className="mx-auto max-w-[22rem] text-sm leading-relaxed text-zinc-500/90 md:text-[15px]">
            You don&apos;t find clients anymore. They find you.
          </p>
        </Reveal>

        <Reveal delayMs={200} className="flex w-full justify-center">
          <a
            href={BOOK_CALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta group inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white transition-[transform,box-shadow,filter] duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:w-auto sm:px-8"
          >
            Access Now
            <span
              aria-hidden
              className="transition-transform duration-300 ease-out group-hover:translate-x-0.5"
            >
              →
            </span>
          </a>
        </Reveal>

        <Reveal delayMs={260} className="flex w-full justify-center">
          <p className="text-xs leading-snug text-zinc-600 md:text-[13px]">
            No outreach. Just qualified flow.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
