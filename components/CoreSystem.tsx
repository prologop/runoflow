import Reveal from "@/components/Reveal";

const layers = [
  {
    title: "Targeting Layer",
    description:
      "We identify your ideal customers using data signals, behavior patterns, and ICP filtering.",
    step: "01",
  },
  {
    title: "Outreach Layer",
    description:
      "Automated multi-channel outreach that runs personalized campaigns at scale.",
    step: "02",
  },
  {
    title: "Conversion Layer",
    description:
      "Qualified prospects are routed directly into your calendar as booked calls.",
    step: "03",
  },
];

export default function CoreSystem() {
  return (
    <section id="product" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <h2 className="text-center text-2xl font-semibold tracking-tight text-white md:text-4xl">
            Your Client Acquisition{" "}
            <span className="bg-gradient-to-r from-purple-300 to-fuchsia-400 bg-clip-text text-transparent">
              Engine
            </span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {layers.map((layer, idx) => (
            <Reveal key={layer.title} delayMs={idx * 90}>
              <div className="card-surface card-surface-hover group relative flex h-full flex-col p-8">
                <span className="text-[10px] font-semibold tracking-[0.2em] text-purple-500/70">
                  {layer.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-white">
                  {layer.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                  {layer.description}
                </p>
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
