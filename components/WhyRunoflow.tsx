const points = [
  "Predictable deal flow",
  "AI-powered systems",
  "Focus on quality opportunities",
  "Scalable sales infrastructure",
];

export default function WhyRunoflow() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
          Why Companies Work With RunoFlow
        </h2>
        <ul className="mt-12 space-y-5">
          {points.map((point) => (
            <li
              key={point}
              className="flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-950/50 px-6 py-4 transition-colors hover:border-zinc-600 hover:bg-zinc-900/30"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-zinc-600 text-sm font-medium text-zinc-300">
                ✓
              </span>
              <span className="text-lg text-zinc-300 md:text-xl">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
