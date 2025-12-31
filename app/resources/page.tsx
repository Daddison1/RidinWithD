import Link from "next/link";

export default function ResourcesPage() {
  const items = [
    { title: "Best time to buy (seasonality + sales)", href: "#" },
    { title: "Hub motor vs mid-drive: what’s the difference?", href: "#" },
    { title: "Budget buying guide: starter electric dirt bikes", href: "#" },
    { title: "Gear fit basics: helmets + boots", href: "#" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold">Resources</h1>
      <p className="mt-2 text-neutral-700">Quick guides to help you buy smarter.</p>

      <div className="mt-6 grid gap-4">
        {items.map((i) => (
          <Link key={i.title} href={i.href} className="rounded-2xl border bg-white p-5 hover:shadow-sm">
            <div className="font-semibold">{i.title}</div>
            <div className="mt-1 text-sm text-neutral-600">Read →</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
