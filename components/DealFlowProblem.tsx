import Reveal from "@/components/Reveal";

type ProblemCard = {
  title: string;
  description: string;
  tag: string;
  tagTone: "rose" | "amber";
};

const cards: ProblemCard[] = [
  {
    title: "Unqualified Signals",
    description:
      "Low-intent leads, noise, and irrelevant inquiries flood the system — making it harder to identify real opportunities.",
    tag: "Noise > Signal",
    tagTone: "rose",
  },
  {
    title: "Broken Routing",
    description:
      "Opportunities are sent to the wrong people, at the wrong time — without context, filtering, or prioritization.",
    tag: "Mismatch",
    tagTone: "amber",
  },
  {
    title: "Disconnected Execution",
    description:
      "Even when opportunities exist, poor handoffs and lack of coordination prevent deals from actually closing.",
    tag: "Lost Opportunities",
    tagTone: "rose",
  },
];

const tagClass: Record<ProblemCard["tagTone"], string> = {
  rose:
    "border-rose-500/20 bg-rose-950/20 text-rose-200/55",
  amber:
    "border-amber-500/20 bg-amber-950/20 text-amber-200/55",
};

export default function DealFlowProblem() {
  return (
    <section
      id="deal-flow-problem"
      className="w-full bg-[#000000] py-16 sm:py-20 md:py-28 lg:py-32"
      aria-labelledby="deal-flow-problem-heading"
    >
      <div className="section-shell">
        <div className="text-center">
          <Reveal>
            <p className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              THE PROBLEM
            </p>
          </Reveal>
          <Reveal delayMs={80}>
            <h2
              id="deal-flow-problem-heading"
              className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl"
            >
              Why Most Deal Flow Breaks
            </h2>
          </Reveal>
          <Reveal delayMs={140}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-500 md:mt-6 md:text-lg md:leading-relaxed">
              Most systems don&apos;t fail because of lack of demand — they fail
              because of poor signal quality, bad routing, and disconnected
              execution.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-16 md:gap-8 lg:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal key={card.title} delayMs={i * 80}>
              <article className="group flex h-full flex-col rounded-xl border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-sm transition-[transform,box-shadow,border-color] duration-300 ease-out md:p-7 md:hover:-translate-y-0.5 md:hover:border-white/[0.11] md:hover:shadow-[0_12px_40px_-24px_rgba(0,0,0,0.5)]">
                <h3 className="text-lg font-semibold tracking-tight text-zinc-200 md:text-xl">
                  {card.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-500 md:text-[15px] md:leading-relaxed">
                  {card.description}
                </p>
                <span
                  className={[
                    "mt-5 inline-flex w-fit rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide",
                    tagClass[card.tagTone],
                  ].join(" ")}
                >
                  {card.tag}
                </span>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={320}>
          <p className="mx-auto mt-14 max-w-xl text-center text-sm leading-relaxed text-zinc-600 md:mt-16 md:text-base">
            This is where most systems break. Not in demand — but in how
            it&apos;s processed.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
