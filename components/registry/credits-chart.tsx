"use client"

import useSWR from "swr"
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts"

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export function CreditsChart() {
  const { data } = useSWR("/api/registry", fetcher)
  const series = data?.creditsByMonth ?? []

  return (
    <div className="grid gap-2">
      <h3 className="font-medium">Tokenized Credits (Last 12 months)</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={series}>
            <defs>
              <linearGradient id="fillPrimary" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="oklch(var(--color-primary))" stopOpacity={0.8} />
                <stop offset="95%" stopColor="oklch(var(--color-primary))" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="oklch(var(--color-border))" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="credits"
              stroke="oklch(var(--color-primary))"
              fillOpacity={1}
              fill="url(#fillPrimary)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
