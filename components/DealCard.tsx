"use client";

import type { Deal } from "@/lib/deals";

function formatMoney(n: number) {
  return n.toLocaleString(undefined, { style: "currency", currency: "USD" });
}

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1558981033-64b0f4f5f41e?auto=format&fit=crop&w=1200&q=60";

export default function DealCard({ deal }: { deal: Deal }) {
  const discount =
    deal.wasPrice && deal.wasPrice > deal.price
      ? Math.round(((deal.wasPrice - deal.price) / deal.wasPrice) * 100)
      : null;

  return (
    <a
      href={deal.url}
      target="_blank"
      rel="noreferrer"
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-white/20 hover:shadow-md"
    >
      <div className="aspect-[16/9] w-full overflow-hidden bg-white/5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={deal.imageUrl ?? FALLBACK_IMAGE}
          alt={deal.title}
          loading="lazy"
          onError={(e) => {
            const img = e.currentTarget;

            // Prevent infinite error loop
            if (!img.dataset.fallbackApplied) {
              img.dataset.fallbackApplied = "true";
              img.src = FALLBACK_IMAGE;
            }
          }}
          className="h-full w-full object-cover transition group-hover:scale-[1.02]"
        />
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-xs text-white/60">
              {deal.retailer} • {deal.region} • {deal.kind}
              {deal.driveType ? ` • ${deal.driveType}` : ""}
              {deal.gearCategory ? ` • ${deal.gearCategory}` : ""}
            </div>
            <h3 className="mt-1 line-clamp-2 font-semibold text-white">
              {deal.title}
            </h3>
          </div>

          {discount !== null && (
            <div className="shrink-0 rounded-xl bg-[var(--accent)] px-2 py-1 text-xs font-extrabold text-black">
              -{discount}%
            </div>
          )}
        </div>

        <div className="mt-3 flex items-baseline gap-2">
          <div className="text-lg font-extrabold text-white">
            {formatMoney(deal.price)}
          </div>

          {deal.wasPrice ? (
            <div className="text-sm text-white/60 line-through">
              {formatMoney(deal.wasPrice)}
            </div>
          ) : null}

          <div className="ml-auto rounded-xl border border-white/10 bg-white/5 px-2 py-1 text-xs font-semibold text-white/80">
            {deal.tier}
          </div>
        </div>

        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-white/75">
          {deal.highlights.slice(0, 3).map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>

        <div className="mt-4 text-xs text-white/50">
          Updated {new Date(deal.lastUpdatedISO).toLocaleDateString()}
        </div>
      </div>
    </a>
  );
}
