import Reveal from "@/components/Reveal";

const oldBullets = [
  "Manual prospecting and cold outreach",
  "Unpredictable deal flow and response rates",
  "No clear qualification or prioritization",
  "High effort with inconsistent outcomes",
];

const runoflowBullets = [
  "Qualified opportunities routed to you",
  "Consistent and predictable deal flow",
  "Intelligent filtering ensures high-fit matches",
  "Infrastructure handles execution automatically",
];

export default function Comparison() {
  return (
    <section
      className="w-full bg-[#000000] py-16 sm:py-20 md:py-28 lg:py-32"
      aria-labelledby="comparison-heading"
    >
      <div className="section-shell">
        <div className="text-center">
          <Reveal>
            <p className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              SYSTEM SHIFT
            </p>
          </Reveal>
          <Reveal delayMs={80}>
            <h2
              id="comparison-heading"
              className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl"
            >
              Old Way vs RunoFlow
            </h2>
          </Reveal>
          <Reveal delayMs={140}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-500 md:mt-8 md:text-lg md:leading-relaxed">
              Most teams rely on manual effort to chase opportunities. RunoFlow
              replaces that with a structured system that captures, qualifies,
              and routes the right ones automatically.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:mt-14 md:mt-16 md:grid-cols-2 md:gap-8 lg:mt-20 lg:gap-10">
          <Reveal>
            <div
              className={[
                "flex h-full min-h-[22rem] flex-col rounded-2xl border border-white/[0.12] bg-white/[0.02] p-9 backdrop-blur-sm transition-all duration-300 ease-out md:min-h-[26rem] md:p-11",
                "md:hover:-translate-y-1 md:hover:border-white/[0.16] md:hover:shadow-[0_24px_48px_-28px_rgba(0,0,0,0.65)]",
              ].join(" ")}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                OLD APPROACH
              </p>
              <h3 className="mt-4 text-xl font-bold tracking-tight text-zinc-200 md:text-2xl">
                Manual &amp; Fragmented
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500 md:text-base">
                Opportunities are chased, not structured.
              </p>

              <div
                className="my-7 border-b border-white/[0.08] md:my-8"
                aria-hidden
              />

              <ul className="space-y-4">
                {oldBullets.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-[#9CA3AF] md:text-[15px]"
                  >
                    <span
                      aria-hidden
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-600"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delayMs={100}>
            <div
              className={[
                "relative flex h-full min-h-[22rem] flex-col overflow-hidden rounded-2xl border border-purple-500/30 bg-gradient-to-b from-purple-950/[0.18] via-zinc-950/40 to-black p-9 transition-all duration-300 ease-out md:min-h-[26rem] md:p-11",
                "shadow-[0_0_64px_-20px_rgba(139,92,246,0.28),inset_0_1px_0_0_rgba(255,255,255,0.04)]",
                "md:hover:-translate-y-1 md:hover:border-purple-400/40 md:hover:shadow-[0_0_72px_-18px_rgba(139,92,246,0.35)]",
              ].join(" ")}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/[0.07] via-transparent to-purple-500/[0.06]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 top-0 h-44 w-44 rounded-full bg-purple-500/10 blur-3xl"
              />

              <div className="relative">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-purple-300/90">
                  RUNOFLOW SYSTEM
                </p>
                <h3 className="mt-4 text-xl font-bold tracking-tight text-white md:text-2xl">
                  Automated &amp; Structured
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300 md:text-base">
                  A system that filters, matches, and routes opportunities.
                </p>

                <div
                  className="my-7 border-b border-white/[0.1] md:my-8"
                  aria-hidden
                />

                <ul className="space-y-4">
                  {runoflowBullets.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-zinc-100 md:text-[15px]"
                    >
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-purple-400 to-violet-500 shadow-[0_0_10px_rgba(168,85,247,0.45)]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delayMs={200}>
          <div className="mx-auto mt-20 max-w-3xl text-center md:mt-24">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              THE SHIFT
            </p>
            <p className="mt-4 text-lg font-medium leading-snug text-zinc-400 md:text-xl md:leading-snug">
              <span>From chasing opportunities</span>{" "}
              <span className="text-purple-400/90" aria-hidden>
                →
              </span>{" "}
              <span className="bg-gradient-to-r from-white via-purple-100 to-violet-200 bg-clip-text font-semibold text-transparent">
                to receiving qualified deal flow
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
