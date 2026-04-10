import Reveal from "@/components/Reveal";

type BlockTone = "teal" | "blue" | "green" | "emerald";

type Block = {
  label: string;
  title: string;
  text: string;
  metrics: string[];
  tone: BlockTone;
};

const blocks: Block[] = [
  {
    label: "DETECT",
    title: "Signal Detection",
    text: "Identify real market demand through intent signals, inbound activity, and high-value triggers.",
    metrics: ["Intent Strength", "Signal Quality", "Source Depth"],
    tone: "teal",
  },
  {
    label: "QUALIFY",
    title: "Opportunity Qualification",
    text: "Filter and validate opportunities in real-time based on relevance, timing, and deal fit.",
    metrics: ["Match Accuracy", "Qualification Rate", "Filtering Precision"],
    tone: "blue",
  },
  {
    label: "ROUTE",
    title: "Intelligent Routing",
    text: "Direct opportunities to the right counterpart through structured pathways and decision logic.",
    metrics: ["Routing Speed", "Path Accuracy", "Distribution Efficiency"],
    tone: "green",
  },
  {
    label: "COMPLETE",
    title: "Deal Flow Execution",
    text: "Ensure smooth handoffs, real conversations, and completed transactions without friction.",
    metrics: ["Completion Rate", "Deal Velocity", "Conversion Efficiency"],
    tone: "emerald",
  },
];

const toneStyles: Record<
  BlockTone,
  { panel: string; glow: string; pill: string }
> = {
  teal: {
    panel:
      "border-teal-500/20 bg-gradient-to-br from-teal-950/50 via-[#0a1214] to-black shadow-[0_0_48px_-20px_rgba(20,184,166,0.18)]",
    glow: "from-teal-500/8 via-transparent to-transparent",
    pill: "border-teal-500/25 bg-teal-950/30 text-teal-200/85",
  },
  blue: {
    panel:
      "border-blue-500/20 bg-gradient-to-br from-blue-950/45 via-[#0a1018] to-black shadow-[0_0_48px_-20px_rgba(59,130,246,0.18)]",
    glow: "from-blue-500/8 via-transparent to-transparent",
    pill: "border-blue-500/25 bg-blue-950/30 text-blue-200/85",
  },
  green: {
    panel:
      "border-emerald-500/20 bg-gradient-to-br from-emerald-950/40 via-[#0a1410] to-black shadow-[0_0_48px_-20px_rgba(16,185,129,0.16)]",
    glow: "from-emerald-500/8 via-transparent to-transparent",
    pill: "border-emerald-500/25 bg-emerald-950/30 text-emerald-200/85",
  },
  emerald: {
    panel:
      "border-green-600/25 bg-gradient-to-br from-green-950/55 via-emerald-950/25 to-[#050a08] shadow-[0_0_52px_-18px_rgba(22,163,74,0.22)]",
    glow: "from-green-500/10 via-emerald-500/5 to-transparent",
    pill: "border-green-600/30 bg-green-950/35 text-green-200/85",
  },
};

function SystemBlock({ block }: { block: Block }) {
  const t = toneStyles[block.tone];

  return (
    <article
      className={[
        "relative flex h-full min-h-[17.5rem] flex-col overflow-hidden rounded-xl border p-6 transition-transform duration-300 ease-out sm:min-h-[18.5rem] md:min-h-[20rem] md:p-8",
        "md:hover:scale-[1.01]",
        t.panel,
      ].join(" ")}
    >
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${t.glow}`}
      />

      <div className="relative flex min-h-0 flex-1 flex-col">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
          {block.label}
        </p>
        <h3 className="mt-3 text-lg font-bold leading-snug tracking-tight text-white md:text-xl">
          {block.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400 md:text-[15px] md:leading-relaxed">
          {block.text}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 pt-5 md:pt-6">
          {block.metrics.map((m) => (
            <span
              key={m}
              className={[
                "rounded-full border px-2.5 py-1 text-[11px] font-medium tracking-wide",
                t.pill,
              ].join(" ")}
            >
              {m}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative border-t border-white/[0.06] bg-[#000000] py-16 sm:py-20 md:py-28 lg:py-32"
    >
      <div className="section-shell">
        <div className="text-center">
          <Reveal>
            <p className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-400">
              THE SYSTEM
            </p>
          </Reveal>

          <Reveal delayMs={80}>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              System-Level Deal Flow Processing
            </h2>
          </Reveal>

          <Reveal delayMs={140}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 md:mt-6 md:text-lg md:leading-relaxed">
              Not campaigns. Not outreach. A continuous system that captures,
              qualifies, and routes high-value opportunities — automatically.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {blocks.map((block, i) => (
            <Reveal
              key={block.label}
              className="h-full min-h-0"
              delayMs={i * 70}
            >
              <SystemBlock block={block} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
