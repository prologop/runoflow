const cards = [
  {
    title: "AI Sales Systems",
    description:
      "Automation that simplifies prospecting, outreach, and qualification.",
  },
  {
    title: "Deal Flow Infrastructure",
    description:
      "Systems designed to keep opportunities consistently entering your pipeline.",
  },
  {
    title: "Strategic Introductions",
    description:
      "Facilitating connections between aligned businesses.",
  },
];

export default function Solution() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
          The RunoFlow Approach
        </h2>
        <p className="mt-8 max-w-2xl text-lg text-zinc-400 md:text-xl leading-relaxed">
          RunoFlow creates intelligent sales systems that generate consistent
          deal flow and connect businesses with the right opportunities.
        </p>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group rounded-2xl border border-zinc-800 bg-zinc-950/50 p-8 transition-all hover:border-zinc-600 hover:bg-zinc-900/30"
            >
              <h3 className="text-xl font-semibold text-white">
                {card.title}
              </h3>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
