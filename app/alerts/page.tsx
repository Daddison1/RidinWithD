export default function AlertsPage() {
  return (
    <div className="rounded-2xl border bg-white p-6">
      <h1 className="text-2xl font-bold">Deal Email Alerts</h1>
      <p className="mt-2 text-neutral-700">
        Later we’ll connect this to an email service (Beehiiv/ConvertKit/Mailchimp). For now it’s a placeholder.
      </p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <input className="w-full rounded-xl border px-3 py-2" placeholder="you@example.com" />
        <button className="rounded-xl bg-neutral-900 px-4 py-2 font-medium text-white hover:bg-neutral-800">
          Subscribe
        </button>
      </div>
    </div>
  );
}
