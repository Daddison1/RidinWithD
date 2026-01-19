"use client";

import { useMemo, useState } from "react";
import DealCard from "@/components/DealCard";
import {
  REGIONS,
  SAMPLE_DEALS,
  type Region,
  type Deal,
  type DealKind,
  type DriveType,
  type GearCategory,
  type BrandType,
} from "@/lib/deals";

type Tab = "Electric Dirt Bikes" | "Gas Dirt Bikes" | "E-Bikes" | "Gear";
type Sort = "best" | "priceLow" | "priceHigh" | "newest";

function pctOff(d: Deal) {
  if (!d.wasPrice || d.wasPrice <= d.price) return 0;
  return (d.wasPrice - d.price) / d.wasPrice;
}

function sortDeals(deals: Deal[], sort: Sort) {
  const copy = [...deals];
  if (sort === "priceLow") return copy.sort((a, b) => a.price - b.price);
  if (sort === "priceHigh") return copy.sort((a, b) => b.price - a.price);
  if (sort === "newest") {
    return copy.sort(
      (a, b) => +new Date(b.lastUpdatedISO) - +new Date(a.lastUpdatedISO)
    );
  }
  // "best" (fallback)
  return copy.sort((a, b) => {
    const da = pctOff(a);
    const db = pctOff(b);
    if (db !== da) return db - da;
    return +new Date(b.lastUpdatedISO) - +new Date(a.lastUpdatedISO);
  });
}

function Section({
  title,
  subtitle,
  deals,
}: {
  title: string;
  subtitle?: string;
  deals: Deal[];
}) {
  if (deals.length === 0) return null;

  return (
    <section className="mt-14">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-white">{title}</h2>
          {subtitle && <div className="mt-1 text-sm text-white/60">{subtitle}</div>}
        </div>
        <div className="text-sm text-white/50">{deals.length} found</div>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {deals.map((d) => (
          <DealCard key={d.id} deal={d} />
        ))}
      </div>
    </section>
  );
}

function PromoBox() {
  return (
    <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4 text-white/80">
      <div className="text-sm font-semibold text-white">Dealer Network Promotions</div>
      <div className="mt-2 text-sm text-white/70">
        Name-brand gas bikes often have rebates, low-APR financing, and seasonal incentives that vary
        by dealer and region.
      </div>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-white/70">
        <li>Watch for manufacturer rebates (“customer cash”) on select models.</li>
        <li>Some brands offer promo financing during spring/summer.</li>
        <li>Dealer setup + freight can change the out-the-door price a lot.</li>
      </ul>
      <div className="mt-3 text-xs text-white/50">
        Tip: If you want, I can add a “Promos” page where you post current rebates by brand.
      </div>
    </div>
  );
}

export default function HomePage() {
  const [tab, setTab] = useState<Tab>("Electric Dirt Bikes");
  const [region, setRegion] = useState<Region>("US");
  const [query, setQuery] = useState("");

  // ✅ DEFAULT SORT: CHEAPEST FIRST
  const [sort, setSort] = useState<Sort>("priceLow");

  const [driveType, setDriveType] = useState<DriveType | "All">("All");
  const [gearCategory, setGearCategory] = useState<GearCategory | "All">("All");

  // For Gas Bikes sub-category filtering
  const [gasType, setGasType] = useState<BrandType | "All">("All");

  const showDriveType = tab === "Electric Dirt Bikes" || tab === "E-Bikes";
  const showGearCategory = tab === "Gear";
  const showGasType = tab === "Gas Dirt Bikes";

  const base = useMemo(() => {
    const q = query.trim().toLowerCase();

    const kind: DealKind =
      tab === "Electric Dirt Bikes"
        ? "Bike"
        : tab === "Gas Dirt Bikes"
        ? "GasBike"
        : tab === "E-Bikes"
        ? "Ebike"
        : "Gear";

    let deals = SAMPLE_DEALS.filter((d) => d.region === region && d.kind === kind);

    if (q) {
      deals = deals.filter((d) => {
        const hay = `${d.title} ${d.brand} ${d.retailer} ${d.kind} ${d.driveType ?? ""} ${
          d.gearCategory ?? ""
        } ${(d as any).brandType ?? ""}`.toLowerCase();
        return hay.includes(q);
      });
    }

    // Drive Type filter only applies to Electric Dirt Bikes + E-Bikes
    if (showDriveType && driveType !== "All") {
      deals = deals.filter((d) => (d.driveType ?? "Unknown") === driveType);
    }

    // Gear Category filter only applies to Gear
    if (showGearCategory && gearCategory !== "All") {
      deals = deals.filter((d) => d.gearCategory === gearCategory);
    }

    // Gas sub-category filter
    if (showGasType && gasType !== "All") {
      deals = deals.filter((d) => (d as any).brandType === gasType);
    }

    return sortDeals(deals, sort);
  }, [
    tab,
    region,
    query,
    sort,
    driveType,
    gearCategory,
    gasType,
    showDriveType,
    showGearCategory,
    showGasType,
  ]);

  // Default tier sections (works for electric + ebike + gear)
  const budget = base.filter((d) => d.tier === "Budget");
  const mid = base.filter((d) => d.tier === "Mid");
  const premium = base.filter((d) => d.tier === "Premium");

  // Gas split sections (only used when tab === "Gas Dirt Bikes")
  const gasImport = base.filter((d) => (d as any).brandType === "Import");
  const gasNameBrand = base.filter((d) => (d as any).brandType === "NameBrand");

  return (
    <div>
      {/* ================= HERO ================= */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[var(--surface)] p-6 md:p-10">
        {/* glow */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[var(--accent)]/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/20" />

        {/* accent bar */}
        <div className="absolute left-0 top-0 h-full w-1.5 bg-[var(--accent)]" />

        <div className="relative max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Best Dirt Bike & E-Bike Deals
          </h1>

          <p className="mt-4 text-lg text-white/75">
            Curated deals on <b>electric dirt bikes</b>, <b>gas dirt bikes</b>, <b>e-bikes</b>, and essential riding gear —
            picked the same way I review bikes on the channel.
          </p>

          {/* TRUST STRIP — EXACT TEXT */}
          <div className="mt-4 inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-black/30 px-4 py-2 text-sm text-white/85">
            <span className="text-[var(--accent)]">🎥</span>
            <span>From Ridin With D — real bike reviews, real riding, real opinions.</span>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#results"
              className="rounded-xl bg-[var(--accent)] px-6 py-3 text-sm font-extrabold text-black hover:opacity-90"
            >
              Browse Deals ↓
            </a>
            <a
              href="/alerts"
              className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/85 hover:bg-white/10"
            >
              Get Email Alerts
            </a>
          </div>
        </div>

        {/* Tabs */}
        <div className="relative mt-8 flex flex-wrap gap-2">
          {(["Electric Dirt Bikes", "Gas Dirt Bikes", "E-Bikes", "Gear"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => {
                setTab(t);
                // reset per-tab filters so you don’t get "empty results" confusion
                if (t === "Gear") setDriveType("All");
                if (t !== "Gear") setGearCategory("All");
                if (t === "Gas Dirt Bikes") {
                  setDriveType("All");
                  setGasType("All");
                }
                if (t !== "Gas Dirt Bikes") setGasType("All");
              }}
              className={
                "rounded-xl border px-4 py-2 text-sm font-semibold transition " +
                (tab === t
                  ? "bg-[var(--accent)] text-black border-transparent"
                  : "border-white/20 text-white/80 hover:bg-white/10")
              }
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* ================= FILTERS ================= */}
      <div className="mt-6 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 md:grid-cols-4">
        <div>
          <label className="text-sm font-medium text-white/80">Region</label>
          <select
            className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white"
            value={region}
            onChange={(e) => setRegion(e.target.value as Region)}
          >
            {REGIONS.map((r) => (
              <option key={r.code} value={r.code}>
                {r.label}
              </option>
            ))}
          </select>
        </div>

        {/* Drive Type */}
        <div className={!showDriveType ? "hidden md:block" : ""}>
          <label className="text-sm font-medium text-white/80">Drive Type</label>
          <select
            className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white"
            value={driveType}
            onChange={(e) => setDriveType(e.target.value as any)}
            disabled={!showDriveType}
          >
            <option value="All">All</option>
            <option value="Mid-Drive">Mid-Drive</option>
            <option value="Hub Motor">Hub Motor</option>
            <option value="Unknown">Unknown</option>
          </select>
        </div>

        {/* Gear Category */}
        <div className={!showGearCategory ? "hidden md:block" : ""}>
          <label className="text-sm font-medium text-white/80">Gear Category</label>
          <select
            className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white"
            value={gearCategory}
            onChange={(e) => setGearCategory(e.target.value as any)}
            disabled={!showGearCategory}
          >
            <option value="All">All</option>
            <option value="Helmet">Helmet</option>
            <option value="Boots">Boots</option>
            <option value="Pants">Pants</option>
            <option value="Gloves">Gloves</option>
            <option value="Protection">Protection</option>
            <option value="Jersey">Jersey</option>
            <option value="Goggles">Goggles</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Gas Type */}
        <div className={!showGasType ? "hidden md:block" : ""}>
          <label className="text-sm font-medium text-white/80">Gas Category</label>
          <select
            className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white"
            value={gasType}
            onChange={(e) => setGasType(e.target.value as any)}
            disabled={!showGasType}
          >
            <option value="All">All</option>
            <option value="Import">Import Gas Dirt Bikes</option>
            <option value="NameBrand">Name-Brand Gas Dirt Bikes</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-medium text-white/80">Sort</label>
          <select
            className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white"
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
          >
            <option value="priceLow">Cheapest first</option>
            <option value="priceHigh">Most expensive first</option>
            <option value="newest">Newest</option>
            <option value="best">Best deals</option>
          </select>
        </div>

        <div className="md:col-span-4">
          <label className="text-sm font-medium text-white/80">Search</label>
          <input
            className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white"
            placeholder={
              tab === "Gear"
                ? "Try: boots, helmet, gloves…"
                : tab === "Gas Dirt Bikes"
                ? "Try: 110cc, 250cc, brand…"
                : "Try: mid-drive, hub, brand…"
            }
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      {/* ================= RESULTS ================= */}
      <div id="results" />

      {base.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 text-white/70">
          No results for that tab / region / filter.
        </div>
      ) : tab === "Gas Dirt Bikes" ? (
        <>
          <Section
            title="Import Gas Dirt Bikes"
            subtitle="Direct-import gas bikes focused on value pricing."
            deals={gasImport}
          />

          <Section
            title="Name-Brand Gas Dirt Bikes"
            subtitle="OEM bikes sold through dealer networks. Incentives vary by region."
            deals={gasNameBrand}
          />

          <PromoBox />
        </>
      ) : (
        <>
          <Section
            title={
              tab === "Electric Dirt Bikes"
                ? "Budget-Friendly Electric Dirt Bikes"
                : tab === "E-Bikes"
                ? "Budget-Friendly E-Bikes"
                : "Budget Gear Deals"
            }
            subtitle={
              tab === "Electric Dirt Bikes"
                ? "Cheaper entry options + mini e-motos."
                : tab === "E-Bikes"
                ? "Often hub-motor value buys."
                : "Affordable essentials (sales + closeouts)."
            }
            deals={budget}
          />

          <Section title="Mid-Range Picks" subtitle="Good performance per dollar." deals={mid} />

          <Section
            title="Premium / High-Performance"
            subtitle="Top-tier builds and best spec."
            deals={premium}
          />
        </>
      )}
    </div>
  );
}


