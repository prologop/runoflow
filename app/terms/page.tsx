import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <header className="border-b border-white/[0.06] px-6 py-4">
        <Link
          href="/"
          className="text-sm font-semibold text-white transition-opacity hover:opacity-80"
        >
          RunoFlow
        </Link>
      </header>
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight text-white">
          Terms of Service
        </h1>
        <p className="mt-6 leading-relaxed text-zinc-400">
          This is a placeholder. Add your terms of service content here.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block text-sm text-purple-400/90 transition-colors hover:text-purple-300"
        >
          ← Back to home
        </Link>
      </main>
    </div>
  );
}
