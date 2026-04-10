import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-zinc-800 px-6 py-4">
        <Link href="/" className="text-xl font-semibold text-white hover:opacity-80">
          RunoFlow
        </Link>
      </header>
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-semibold text-white">Privacy Policy</h1>
        <p className="mt-6 text-zinc-400 leading-relaxed">
          This is a placeholder. Add your privacy policy content here.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block text-zinc-400 hover:text-white"
        >
          ← Back to home
        </Link>
      </main>
    </div>
  );
}
