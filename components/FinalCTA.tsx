import dynamic from "next/dynamic";

import { BOOK_CALL_URL } from "@/components/landing/constants";
import Reveal from "@/components/Reveal";

const HeroParticles = dynamic(() => import("@/components/HeroParticles"), {
  ssr: false,
});

export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      aria-labelledby="final-cta-title"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#000000] py-16 sm:py-20 md:py-24 lg:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.24]"
      >
        <HeroParticles />
      </div>

      <div className="section-shell relative max-w-2xl text-center">
        <Reveal>
          <p className="inline-flex rounded-full border border-violet-500/20 bg-violet-950/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-violet-200/70">
            JOIN THE NETWORK
          </p>
        </Reveal>

        <Reveal delayMs={80}>
          <h2
            id="final-cta-title"
            className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Access the RunoFlow Network
          </h2>
        </Reveal>

        <Reveal delayMs={140}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-500 md:mt-8 md:text-lg md:leading-relaxed">
            Access is granted to a limited set of operators with clear intent
            and strong positioning.
          </p>
        </Reveal>

        <Reveal delayMs={200}>
          <div className="mx-auto mt-8 w-full max-w-[28rem] rounded-xl border border-white/[0.09] bg-white/[0.03] px-7 py-6 shadow-[0_0_48px_-28px_rgba(139,92,246,0.12)] backdrop-blur-sm md:mt-10 md:px-8 md:py-7">
            <h3 className="text-center text-lg font-bold leading-snug tracking-tight text-white md:text-xl">
              Access is selective.
            </h3>
            <p className="mt-4 text-center text-base leading-relaxed text-zinc-500 md:mt-5 md:text-lg md:leading-relaxed">
              We maintain strict standards to ensure only high-fit
              opportunities flow through the system.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 flex flex-col items-center md:mt-10">
          <Reveal delayMs={260}>
            <a
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta group inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white transition-[transform,box-shadow] duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:w-auto sm:px-10"
            >
              Request Access
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              >
                →
              </span>
            </a>
          </Reveal>
          <Reveal delayMs={320}>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-600 md:mt-4 md:text-base">
              No spam. No outreach. Just qualified opportunities — routed.
            </p>
          </Reveal>
        </div>

        <Reveal delayMs={380}>
          <p className="mx-auto mt-8 max-w-md text-center text-xs leading-relaxed text-zinc-600 md:mt-10 md:text-sm">
            Only high-fit operators are accepted into the network.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
