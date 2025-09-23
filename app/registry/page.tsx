import { CreditsChart } from "@/components/registry/credits-chart"
import { MetricsCard } from "@/components/registry/metrics-card"

async function getSummary() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL ? "https://" + process.env.NEXT_PUBLIC_VERCEL_URL : ""}/api/registry`,
    { cache: "no-store" },
  )
  // If NEXT_PUBLIC_VERCEL_URL is not set in preview, fallback to relative fetch in client
  if (!res.ok) return null
  return res.json()
}

export default async function RegistryPage() {
  const summary = await getSummary()

  return (
    <div className="grid gap-8">
      <div className="grid gap-2">
        <h1 className="text-3xl font-semibold">Registry Dashboard</h1>
        <p className="text-muted-foreground">
          Live data visualization of registered plantations, restorations, and tokenized credits.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <MetricsCard
          title="Registered Sites"
          value={summary?.sites?.toString() ?? "—"}
          helper="Verified plantation & restoration"
        />
        <MetricsCard title="Total Area" value={`${summary?.areaHa ?? "—"} ha`} helper="Verified coverage" />
        <MetricsCard
          title="Credits Minted"
          value={(summary?.credits ?? "—").toString()}
          helper="Tokenized carbon credits"
        />
        <MetricsCard title="Trades Tracked" value={(summary?.trades ?? "—").toString()} helper="On-chain movements" />
      </div>

      <CreditsChart />
    </div>
  )
}
