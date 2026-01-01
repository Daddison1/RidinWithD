import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "RidinWithD Deals — Dirt Bikes, E-Bikes, Gear",
  description: "Curated dirt bike, e-bike, and riding gear deals. Filter by region and drive type.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
  <header className="border-b border-white/10 bg-[var(--surface)]/80 backdrop-blur">
    <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
      <Link href="/" className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--accent)] text-black font-extrabold">
          D
        </div>
        <div className="leading-tight">
          <div className="font-semibold tracking-tight">RidinWithD Deals</div>
          <div className="text-xs text-white/60">Dirt bikes • E-bikes • Gear</div>
        </div>
      </Link>

      <nav className="hidden items-center gap-6 text-sm md:flex">
        <Link className="text-white/80 hover:text-white hover:underline" href="/">Current Deals</Link>
        <Link className="text-[var(--accent)] hover:underline" href="/alerts">❗Get Deal Email Alerts❗</Link>
        <Link className="text-white/80 hover:text-white hover:underline" href="/resources">Resources</Link>
        <Link className="text-white/80 hover:text-white hover:underline" href="/about">About</Link>
      </nav>

      <Link
        href="/alerts"
        className="rounded-xl bg-[var(--accent)] px-4 py-2 text-sm font-extrabold text-black hover:opacity-90"
      >
        Get Alerts
      </Link>
    </div>

    <div className="border-t border-white/10 bg-black/40">
      <div className="mx-auto max-w-6xl px-4 py-2 text-sm text-white/85">
        <b className="text-[var(--accent)]">Best time to buy:</b> late fall + winter (off-season) and major holiday sales.{" "}
        <Link className="underline decoration-white/30 hover:decoration-white" href="/resources">Learn more</Link>
      </div>
    </div>

    <div className="mx-auto max-w-6xl px-4 pb-4 md:hidden">
      <div className="flex flex-wrap gap-3 text-sm">
        <Link className="text-white/80 hover:text-white underline decoration-white/20" href="/">Deals</Link>
        <Link className="text-[var(--accent)] underline" href="/alerts">Alerts</Link>
        <Link className="text-white/80 hover:text-white underline decoration-white/20" href="/resources">Resources</Link>
        <Link className="text-white/80 hover:text-white underline decoration-white/20" href="/about">About</Link>
      </div>
    </div>
  </header>

  <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>

  <footer className="mt-10 border-t border-white/10 bg-[var(--surface)]">
    <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-white/70">
      <div className="font-medium text-white">Disclaimer</div>
      <p className="mt-2">
        Purchases made through links on this site may earn a commission at no extra cost to you.
        Prices and availability can change quickly.
      </p>
      <div className="mt-4 text-xs text-white/50">
        © {new Date().getFullYear()} RidinWithD Deals
      </div>
    </div>
  </footer>
</body>
