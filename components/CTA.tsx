import { BOOK_CALL_URL } from "@/components/landing/constants";
import Reveal from "@/components/Reveal";

export default function CTA() {
  return (
    <section
      id="book"
      className="border-t border-border bg-slate-50/40 py-20 md:py-28"
      aria-labelledby="cta-title"
    >
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <Reveal>
          <h2 id="cta-title" className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Book a Call
          </h2>
        </Reveal>

        <Reveal delayMs={120}>
          <p className="mt-4 text-lg leading-relaxed text-slate-600 md:text-xl">
            Tell us who you help and what “qualified” means to you. We’ll
            generate consistent, high-intent conversations.
          </p>
        </Reveal>

        <div className="mt-10 flex justify-center">
          <Reveal delayMs={220}>
            <a
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              Book a Call
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
