import Reveal from "@/components/Reveal";

const steps = [
  {
    id: "01",
    title: "Capture Market Intent",
    description:
      "We identify real demand signals — active buyers, intent data, and inbound opportunities entering the system.",
    highlight: false,
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 3v3M12 18v3M3 12h3M18 12h3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Intelligent Opportunity Routing",
    description:
      "Our routing layer filters, qualifies, and matches opportunities with the right partners — based on relevance, timing, and fit.",
    highlight: true,
    badge: "RUNOFLOW CORE",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M4 12h4l2-6 4 12 2-6h4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Precision Partner Alignment",
    description:
      "Only compatible providers receive routed opportunities — ensuring higher quality interactions and better outcomes.",
    highlight: false,
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Seamless Deal Execution",
    description:
      "Qualified opportunities move forward into real conversations, transactions, and closed deals — without friction.",
    highlight: false,
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M5 13l4 4L19 7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

function StepConnector() {
  return (
    <div className="flex justify-center py-1 md:py-2" aria-hidden>
      <span className="select-none text-lg text-zinc-600/80 md:text-xl">↓</span>
    </div>
  );
}

export default function DealFlowInfrastructure() {
  return (
    <section
      className="w-full bg-[#000000] py-16 sm:py-20 md:py-28 lg:py-32"
      aria-labelledby="deal-flow-heading"
    >
      <div className="section-shell">
        <div className="text-center">
          <Reveal>
            <h2
              id="deal-flow-heading"
              className="text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Your{" "}
              <span className="bg-gradient-to-r from-purple-200/95 via-violet-200/90 to-fuchsia-200/95 bg-clip-text text-transparent">
                Deal Flow
              </span>{" "}
              <span className="bg-gradient-to-r from-violet-200/90 via-purple-200/95 to-indigo-200/90 bg-clip-text text-transparent">
                Infrastructure
              </span>
            </h2>
          </Reveal>

          <Reveal delayMs={100}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-400 md:mt-8 md:text-lg md:leading-relaxed">
              RunoFlow transforms fragmented signals into a structured flow of
              high-quality opportunities — routed with precision.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 flex max-w-5xl flex-col gap-6 md:mt-16 md:gap-8">
          {steps.map((step, index) => (
            <div key={step.id}>
              {index > 0 ? <StepConnector /> : null}

              <Reveal delayMs={index * 70}>
                <article
                  className={[
                    "group relative overflow-hidden rounded-2xl border p-6 transition-transform duration-300 ease-out md:p-8 lg:p-10",
                    "flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-10",
                    step.highlight
                      ? "border-purple-500/30 bg-gradient-to-r from-[#0f0a14] via-[#12101a] to-[#0a1620] shadow-[0_0_56px_-16px_rgba(139,92,246,0.45)] md:hover:scale-[1.01]"
                      : "border-white/[0.07] bg-gradient-to-r from-[#0a0a0a] to-[#111827] shadow-[0_0_40px_-20px_rgba(0,0,0,0.6)] md:hover:scale-[1.01]",
                  ].join(" ")}
                >
                  {step.highlight ? (
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-gradient-to-r from-purple-500/[0.06] via-transparent to-teal-500/[0.04]"
                    />
                  ) : null}

                  <div className="relative min-w-0 flex-1 text-left">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-zinc-400">
                        {step.icon}
                      </span>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
                        STEP {step.id}
                      </p>
                      {step.badge ? (
                        <span className="rounded-full border border-purple-400/40 bg-purple-500/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-purple-200/95">
                          {step.badge}
                        </span>
                      ) : null}
                    </div>

                    <h3 className="mt-4 text-xl font-bold leading-snug tracking-tight text-white md:text-2xl">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-[15px] leading-relaxed text-gray-400 md:text-base md:leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="relative ml-auto flex shrink-0 items-start justify-end md:ml-0">
                    <span
                      className={[
                        "font-bold tabular-nums leading-none tracking-tight",
                        step.highlight
                          ? "bg-gradient-to-br from-purple-200/90 via-violet-300/80 to-fuchsia-200/70 bg-clip-text text-5xl text-transparent opacity-95 md:text-6xl"
                          : "bg-gradient-to-br from-zinc-500/90 to-zinc-700/80 bg-clip-text text-5xl text-transparent md:text-6xl",
                      ].join(" ")}
                      aria-hidden
                    >
                      {step.id}
                    </span>
                  </div>
                </article>
              </Reveal>
            </div>
          ))}
        </div>

        <Reveal delayMs={400}>
          <p className="mx-auto mt-14 max-w-2xl bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-center text-lg font-medium leading-snug text-transparent md:mt-16 md:text-xl">
            We don&apos;t generate demand. We route it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
