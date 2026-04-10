const brands = [
  "SILVERCREST WEALTH",
  "NovaGene Labs",
  "ELEVATE DIGITAL",
  "myoProcess",
];

const logoClassName =
  "inline-block shrink-0 cursor-default whitespace-nowrap text-sm font-medium tracking-[0.14em] text-[#9CA3AF] opacity-70 transition-all duration-300 ease-out hover:scale-105 hover:text-white hover:opacity-100 md:text-[0.9375rem] md:font-semibold";

function LogoRow({ stripKey }: { stripKey: string }) {
  return (
    <>
      {brands.map((name) => (
        <span key={`${stripKey}-${name}`} className={logoClassName}>
          {name}
        </span>
      ))}
    </>
  );
}

export default function Trust() {
  return (
    <section
      className="bg-[#000000] py-8 sm:py-10 md:py-12"
      aria-labelledby="trusted-by-heading"
    >
      <div className="section-shell">
        <p
          id="trusted-by-heading"
          className="text-center text-sm text-gray-400"
        >
          Trusted by
        </p>

        <div
          className="relative mt-12 md:mt-14"
          role="region"
          aria-label="Companies: Silvercrest Wealth, NovaGene Labs, Elevate Digital, myoProcess"
        >
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#000000] to-transparent md:w-28"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#000000] to-transparent md:w-28"
            aria-hidden
          />

          <div className="overflow-hidden">
            <div className="trust-marquee-track">
              <div className="flex shrink-0 items-center gap-12 pr-12 md:gap-16 md:pr-16 lg:gap-20 lg:pr-20">
                <LogoRow stripKey="a" />
              </div>
              <div
                className="flex shrink-0 items-center gap-12 md:gap-16 lg:gap-20"
                aria-hidden
              >
                <LogoRow stripKey="b" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
