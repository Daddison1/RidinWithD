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
} from "@/lib/deals";

type Tab = "Electric Dirt Bikes" | "E-Bikes" | "Gear";
type Sort = "best" | "priceLow" | "priceHigh" | "newest";

function pctOff(d: Deal) {
  if (!d.wasPrice || d.wasPrice <= d.price) return 0;
  return (d.wasPrice - d.price) / d.wasPrice;
}

function sortDeals(deals: Deal[], sort: Sort) {
  const copy = [...deals];
  if (sort === "priceLow") return copy.sort((a, b) => a.price - b.price);
  if (sort === "priceHigh") return copy.sort((a, b) => b.price - a.price);
  if (sort === "newest")
    return copy.sort(
      (a, b) =>
        +new Date(b.lastUpdatedISO) - +new Date(a.lastUpdatedISO)
    );
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
    <section className="mt-10">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-white">{title}</h2>
          {subtitle ? (
            <div className="mt-1 text-sm text-white/60">{subtitle}</div>
          ) : null}
        </div>
        <div className="text-sm text-white/50">{deals.length} found</div>
      </div>

      <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {deals.map((d) => (
          <DealCard key={d.id} deal={d} />
        ))}
      </div>
    </section>
  );
}

export default function HomePage() {
  const [tab, setTab] = useState<Tab>("Electric Dirt Bikes");
  const [region, setRegion] = useState<Region>("US");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<Sort>("best");
  const [driveType, setDriveType] = useState<DriveType | "All">("All");
  const [gearCategory, setGearCategory] = useState<GearCategory | "All">("All");

  const base = useMemo(() => {
    const q = query.trim().toLowerCase();
    const kind: DealKind =
      tab === "Electric Dirt Bikes"
        ? "Bike"
        : tab === "E-Bikes"
        ? "Ebike"
        : "Gear";

    let deals = SAMPLE_DEALS.filter(
      (d) => d.region === region && d.kind === kind
    );

    if (q) {
      deals = deals.filter((d) => {
        const hay =
          `${d.title} ${d.brand} ${d.retailer} ${d.kind} ${d.driveType ?? ""} ${d.gearCategory ?? ""}`.toLowerCase();
        return hay.includes(q);
      });
    }

    if (kind !== "Gear" && driveType !== "All") {
      deals = deals.filter(
        (d) => (d.driveType ?? "Unknown") === driveType
      );
    }

    if (kind === "Gear" && gearCategory !== "All") {
      deals = deals.filter((d) => d.gearCategory === gearCategory);
    }

    return sortDeals(deals, sort);
  }, [tab, region, query, sort, driveType, gearCategory]);

  const budget = base.filter((d) => d.tier === "Budget");
  const mid = base.filter((d) => d.tier === "Mid");
  const premium = base.filter((d) => d.tier === "Premium");

  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Current Deals</h1>
      <div className="mt-2 text-white/70">
        Browse by region. Tabs separate{" "}
        <b>Electric Dirt Bikes</b>, <b>E-bikes</b>, and <b>Gear</b>.
      </div>

      {/* Tabs */}
      <div className="mt-6 flex flex-wrap gap-2">
        {(["Electric Dirt Bikes", "E-Bikes", "Gear"] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={
              "rounded-xl border px-4 py-2 text-sm font-medium transition " +
              (tab === t
                ? "bg-[var(--accent)] text-black border-transparent"
                : "border-white/15 text-white/80 hover:bg-white/10")
            }
          >
            {t}
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="mt-4 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 md:grid-cols-4">
        <div>
          <label className="text-sm font-medium text-white/80">
            Region
          </label>
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

        <div className={tab === "Gear" ? "hidden md:block" : ""}>
          <label className="text-sm font-medium text-white/80">
            Drive Type
          </label>
          <select
            className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white"
            value={driveType}
            onChange={(e) => setDriveType(e.target.value as any)}
            disabled={tab ===
