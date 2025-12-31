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
      <body className="min-h-screen bg-neutral-50 text-neutral-900">
        <header className="border-b bg-white">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-neutral-900 text-white font-bold">
                D
              </div>
              <div className="leading-tight">
                <div className="font-semibold">RidinWithD Deals</div>
                <div className="text-xs text-neutral-500">Dirt bikes • E-bikes • Gear</div>
              </div>
            </Link>

            <nav className="hidden items-center gap-6 text-sm md:flex">
              <Link className="hover:underline" href="/">Current Deals</Link>
              <Link className="hover:underline" href="/alerts">❗Get Deal Email Alerts❗</Link>
              <Link className="hover:underline" href="/resources">Resources</Link>
              <Link className="hover:underline" href="/about">About</Link>
            </nav>

            <Link
              href="/alerts"
              className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
            >
              Get Alerts
            </Link>
          </div>

          <div className="bg-neutral-900">
            <div className="mx-auto max-w-6xl px-4 py-2 text-sm text-white">
              <b>Best time to buy:</b> late fall + winter (off-season) and major holiday sales.{" "}
              <Link className="underline" href="/resources">Learn more</Link>
            </div>
          </div>

          <div className="mx-auto max-w-6xl px-4 pb-4 md:hidden">
            <div className="flex flex-wrap gap-3 text-sm">
              <Link className="underline" href="/">Deals</Link>
              <Link className="underline" href="/alerts">Alerts</Link>
              <Link className="underline" href="/resources">Resources</Link>
              <Link className="underline" href="/about">About</Link>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>

        <footer className="mt-10 border-t bg-white">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-neutral-600">
            <div className="font-medium text-neutral-800">Disclaimer</div>
            <p className="mt-2">
              Purchases made through links on this site may earn a commission at no extra cost to you.
              Prices and availability can change quickly.
            </p>
            <div className="mt-4 text-xs text-neutral-500">
              © {new Date().getFullYear()} RidinWithD Deals
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
