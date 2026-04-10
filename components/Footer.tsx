import Link from "next/link";

import { BRAND_NAME } from "@/components/landing/constants";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#000000] py-8 md:py-10">
      <div className="section-shell">
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between md:gap-6">
          <div>
            <Link
              href="/"
              className="text-sm font-semibold tracking-tight text-white hover:text-purple-200/90"
            >
              {BRAND_NAME}
            </Link>
            <p className="mt-2 max-w-sm text-sm leading-snug text-zinc-500">
              Routing high-intent opportunities to the right operators.
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <Link
              href="/privacy"
              className="text-zinc-500 transition-colors hover:text-zinc-300"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-zinc-500 transition-colors hover:text-zinc-300"
            >
              Terms
            </Link>
          </nav>
        </div>

        <p className="mt-6 text-xs leading-snug text-zinc-600 md:mt-7">
          © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
