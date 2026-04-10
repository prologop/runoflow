"use client";

import Link from "next/link";
import { useState } from "react";

import { BOOK_CALL_URL, BRAND_NAME } from "@/components/landing/constants";

type NavbarProps = {
  /** Overlays the hero so the first screen can be a full-viewport centered hero. */
  variant?: "default" | "overlay";
};

export default function Navbar({ variant = "default" }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const positionClasses =
    variant === "overlay"
      ? "absolute inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-black/35 backdrop-blur-xl supports-[backdrop-filter]:bg-black/25"
      : "sticky top-0 z-50 border-b border-white/[0.06] bg-black/70 backdrop-blur-xl supports-[backdrop-filter]:bg-black/55";

  return (
    <header className={positionClasses}>
      <nav className="section-shell flex items-center justify-between py-4">
        <Link
          href="/"
          className="inline-flex items-center text-lg font-semibold leading-none tracking-[0.06em] text-[#ffffff] transition-opacity hover:opacity-80 sm:text-xl"
          onClick={() => setMobileOpen(false)}
        >
          {BRAND_NAME}
        </Link>

        <div className="hidden items-center md:flex">
          <a
            href={BOOK_CALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-[transform,box-shadow,filter] duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Access Now
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-zinc-200 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <span className="text-xl leading-none">{mobileOpen ? "×" : "☰"}</span>
        </button>
      </nav>
      {mobileOpen ? (
        <div className="section-shell pb-4 md:hidden">
          <div className="rounded-xl border border-white/10 bg-black/80 p-3 backdrop-blur-xl">
            <div className="flex flex-col gap-2">
              <Link
                href="/privacy"
                className="rounded-lg px-3 py-2 text-sm text-zinc-300"
                onClick={() => setMobileOpen(false)}
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="rounded-lg px-3 py-2 text-sm text-zinc-300"
                onClick={() => setMobileOpen(false)}
              >
                Terms
              </Link>
              <a
                href={BOOK_CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta mt-1 inline-flex min-h-11 w-full items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-white"
              >
                Access Now
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
