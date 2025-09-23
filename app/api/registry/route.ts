import { NextResponse } from "next/server"

export async function GET() {
  const months = ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
  const data = months.map((m, i) => ({
    month: m,
    credits: Math.round(800 + Math.sin(i / 2) * 200 + i * 90),
  }))

  const summary = {
    sites: 128,
    areaHa: 1645,
    credits: data.reduce((sum, d) => sum + d.credits, 0),
    trades: 54,
    creditsByMonth: data,
  }

  return NextResponse.json(summary, { status: 200 })
}
