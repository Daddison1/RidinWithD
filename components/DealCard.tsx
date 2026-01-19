"use client";

import type { Deal } from "@/lib/deals";

function formatMoney(n: number) {
  return n.toLocaleString(undefined, { style: "currency", currency: "USD" });
}

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1558981033-64b0f4f5f41e?auto=format&fit=crop&w=1200&q=60";

function proxied(src: string) {
  return `/api/img?u=${encodeURIComponent(src)}`;
}

function pctOff(deal: Deal) {
  if (!deal.wasPrice || deal.wasPrice <= deal.price) return 0;
  return Math.round(((deal.wasPrice - deal.price) / deal.wasPrice) * 100);
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-black/30 px-2 py-0.5 text-xs font-semibold text-white/85">
      {children}
    </span>
  );
}

export default function DealCard({ deal }: { deal: Deal }) {
  const off = pctOff(deal);

  // Badge logic
  const badges: string[] = [];

  if (deal.kind === "Gear") {
    badges.push(deal.gearCategory);
  } else if (deal.kind === "GasBike") {
    const bt = (deal as any).brandType as "Import" | "NameBrand" | undefined;
    badges.push(bt === "Import" ? "Import Gas" : bt === "NameBrand" ? "Name Brand" : "Gas Bike");
  } else {
    // Electric dirt bikes / E-bikes
    badges.push(deal.driveType ?? "Unknown");
  }

  // Show tier badge too (Budget/Mid/Premium)
  badges.push(deal.tier);

  const imgSrc = proxied(deal.imageUrl || FALLBACK_IMAGE);

  return (
    <a
      href={deal.url}
      target="_blank"
      rel="noreferrer"
      className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:border-white/20 hover:bg-white/10"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-black/20">
        <img
          src={imgSrc}
          alt={deal.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
          onError={(e) => {
            const el = e.currentTarget;
            // prevent infinite loop
            if (el.dataset.fallback === "1") return;
            el.dataset.fallback = "1";
            el.src = proxied(FALLBACK_IMAGE);
          }}
        />

        {/* Badges */}
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          {badges.map((b) => (
            <Badge key={b}>{b}</Badge>
          ))}
          {off > 0 && <Badge>{off}% OFF</Badge>}
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold text-white">{deal.title}</div>
            <div className="mt-1 truncate text-xs text-white/60">
              {deal.brand} • {deal.retailer}
            </div>
          </div>

          {/* Price */}
          <div className="shrink-0 text-right">
            <div className="text-sm font-extrabold text-white">{formatMoney(deal.price)}</div>
            {deal.wasPrice && deal.wasPrice > deal.price ? (
              <div className="text-xs text-white/55 line-through">
                {formatMoney(deal.wasPrice)}
              </div>
            ) : null}
          </div>
        </div>

        {/* Highlights */}
        {deal.highlights?.length ? (
          <ul className="mt-3 space-y-1 text-xs text-white/70">
            {deal.highlights.slice(0, 3).map((h, i) => (
              <li key={i} className="truncate">
                • {h}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-4 text-xs font-semibold text-[var(--accent)]">
          View deal →
        </div>
      </div>
    </a>
  );
}
