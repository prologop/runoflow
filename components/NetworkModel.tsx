import Reveal from "@/components/Reveal";

type TagKind = "ROUTABLE" | "ACTIVE" | "FILTERED";

type NodeCard = {
  title: string;
  description: string;
  tag: TagKind;
  dimmed?: boolean;
};

const opportunitySources: NodeCard[] = [
  {
    title: "Enterprise Buyers",
    description: "High-intent, active demand",
    tag: "ROUTABLE",
  },
  {
    title: "Growth Companies",
    description: "Budget-ready opportunities",
    tag: "ROUTABLE",
  },
  {
    title: "Strategic Requests",
    description: "Qualified inbound interest",
    tag: "ROUTABLE",
  },
  {
    title: "Early Signals",
    description: "Low intent / unqualified",
    tag: "FILTERED",
    dimmed: true,
  },
];

const executionEndpoints: NodeCard[] = [
  {
    title: "Service Providers",
    description: "Active delivery partners",
    tag: "ACTIVE",
  },
  {
    title: "Agencies / Operators",
    description: "Mid-market execution",
    tag: "ACTIVE",
  },
  {
    title: "Enterprise Vendors",
    description: "High-value solutions",
    tag: "ACTIVE",
  },
  {
    title: "Unverified Sources",
    description: "Not qualified",
    tag: "FILTERED",
    dimmed: true,
  },
];

const tagStyles: Record<TagKind, string> = {
  ROUTABLE:
    "border-teal-500/35 bg-teal-950/25 text-teal-200/90",
  ACTIVE:
    "border-emerald-500/35 bg-emerald-950/25 text-emerald-200/90",
  FILTERED:
    "border-red-500/25 bg-red-950/20 text-red-300/70",
};

function FlowArrow() {
  return (
    <div
      className="flex shrink-0 items-center justify-center px-2 text-base text-zinc-600/25 md:px-4 lg:px-6 md:text-lg"
      aria-hidden
    >
      →
    </div>
  );
}

function NodeStack({
  title,
  subtitle,
  cards,
}: {
  title: string;
  subtitle: string;
  cards: NodeCard[];
}) {
  return (
    <div className="min-w-0 flex-1">
      <h3 className="text-center text-sm font-bold uppercase tracking-[0.16em] text-zinc-400 md:text-left">
        {title}
      </h3>
      <p className="mt-1.5 text-center text-xs leading-relaxed text-zinc-500 md:text-left">
        {subtitle}
      </p>
      <ul className="mt-5 flex flex-col gap-3">
        {cards.map((card) => (
          <li
            key={card.title}
            className={[
              "rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 backdrop-blur-sm transition-opacity duration-300",
              card.dimmed ? "opacity-45" : "opacity-100",
            ].join(" ")}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white">{card.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-zinc-500">
                  {card.description}
                </p>
              </div>
              <span
                className={[
                  "shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
                  tagStyles[card.tag],
                ].join(" ")}
              >
                {card.tag}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RoutingCore() {
  return (
    <div className="relative min-w-0 w-full md:max-w-sm md:flex-none lg:max-w-xs">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-8 rounded-3xl bg-gradient-to-br from-purple-500/12 via-teal-500/8 to-transparent blur-3xl md:-inset-10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-3 rounded-2xl bg-gradient-to-br from-purple-400/10 to-teal-500/6 opacity-60 blur-xl md:-inset-4"
      />
      <article className="relative flex min-h-[min(100%,22rem)] flex-col justify-center rounded-xl border border-purple-500/30 bg-gradient-to-b from-white/[0.07] via-zinc-950/85 to-black/90 p-6 py-8 shadow-[0_0_64px_-14px_rgba(139,92,246,0.28),0_0_48px_-24px_rgba(20,184,166,0.1)] backdrop-blur-md md:min-h-[26rem] md:p-8 md:py-10">
        <h3 className="text-center text-xl font-bold tracking-tight text-white md:text-2xl">
          Routing Layer
        </h3>
        <p className="mt-4 text-center text-sm font-medium text-zinc-400 md:text-base">
          Filter • Match • Route
        </p>
        <p className="mt-6 text-center text-xs leading-relaxed text-zinc-500 md:text-sm">
          Ensuring only relevant opportunities move forward
        </p>
      </article>
    </div>
  );
}

export default function NetworkModel() {
  return (
    <section
      id="network-model"
      className="w-full bg-[#000000] py-16 sm:py-20 md:py-28 lg:py-32"
      aria-labelledby="network-model-heading"
    >
      <div className="section-shell">
        <div className="text-center">
          <Reveal>
            <p className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-400">
              NETWORK MODEL
            </p>
          </Reveal>
          <Reveal delayMs={80}>
            <h2
              id="network-model-heading"
              className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl"
            >
              Two-Sided Deal Flow Network
            </h2>
          </Reveal>
          <Reveal delayMs={140}>
            <p className="mx-auto mt-5 max-w-[40rem] text-balance text-center text-base leading-relaxed text-zinc-400 md:mt-6 md:text-lg md:leading-relaxed">
              RunoFlow processes high-intent signals through an intelligent routing
              layer — filtering, matching, and directing only high-fit
              opportunities forward.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-col gap-10 md:hidden">
          <Reveal delayMs={0}>
            <NodeStack
              title="Opportunity Sources"
              subtitle="Where qualified signals originate"
              cards={opportunitySources}
            />
          </Reveal>
          <Reveal delayMs={80}>
            <RoutingCore />
          </Reveal>
          <Reveal delayMs={160}>
            <NodeStack
              title="Execution Endpoints"
              subtitle="Where opportunities are fulfilled"
              cards={executionEndpoints}
            />
          </Reveal>
        </div>

        <div className="mt-14 hidden items-stretch justify-center md:flex md:gap-2 lg:gap-4 xl:gap-6">
          <Reveal className="min-w-0 max-w-md flex-1" delayMs={0}>
            <NodeStack
              title="Opportunity Sources"
              subtitle="Where qualified signals originate"
              cards={opportunitySources}
            />
          </Reveal>
          <Reveal className="flex shrink-0 items-stretch" delayMs={60}>
            <div className="flex items-center self-stretch">
              <FlowArrow />
            </div>
          </Reveal>
          <Reveal
            className="flex shrink-0 items-stretch justify-center px-1 lg:px-2"
            delayMs={120}
          >
            <RoutingCore />
          </Reveal>
          <Reveal className="flex shrink-0 items-stretch" delayMs={180}>
            <div className="flex items-center self-stretch">
              <FlowArrow />
            </div>
          </Reveal>
          <Reveal className="min-w-0 max-w-md flex-1" delayMs={240}>
            <NodeStack
              title="Execution Endpoints"
              subtitle="Where opportunities are fulfilled"
              cards={executionEndpoints}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
