const bullets = [
  "Inconsistent pipeline",
  "Time wasted chasing low-quality leads",
  "Sales processes that don't scale",
];

export default function Problem() {
  return (
    <section className="border-y border-zinc-800/60 bg-zinc-950/40 py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
          The Problem Most Companies Face
        </h2>
        <ul className="mt-10 space-y-4">
          {bullets.map((item, i) => (
            <li
              key={item}
              className="flex items-start gap-3 text-lg text-zinc-400 md:text-xl"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-10 text-xl text-zinc-500 md:text-2xl leading-relaxed">
          Without the right systems in place, opportunities slip through the
          cracks.
        </p>
      </div>
    </section>
  );
}
