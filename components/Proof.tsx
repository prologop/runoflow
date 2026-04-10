import Reveal from "@/components/Reveal";

const proofCards = [
  {
    title: "Qualified conversations (placeholder)",
    value: "Consistent pipeline",
    description:
      "Swap this with actual results: meeting rate, reply rate, or booked calls.",
  },
  {
    title: "Speed to first outreach (placeholder)",
    value: "Days, not weeks",
    description:
      "Show your real timeline from kickoff to first outbound and follow-ups.",
  },
  {
    title: "Fit & intent targeting (placeholder)",
    value: "High-intent only",
    description:
      "Replace with the criteria you use: firmographics, buying signals, and ICP alignment.",
  },
];

export default function Proof() {
  return (
    <section className="py-20 md:py-28" aria-labelledby="proof-title">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <h2 id="proof-title" className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Proof
            </h2>
          </Reveal>
          <Reveal delayMs={120}>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Placeholder for testimonials or results. Keep it crisp, specific, and verifiable.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {proofCards.map((card, idx) => (
            <Reveal key={card.title} delayMs={idx * 100}>
              <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <p className="text-sm font-medium text-slate-500">{card.title}</p>
                <p className="mt-4 text-2xl font-semibold tracking-tight text-slate-900">
                  {card.value}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {card.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

