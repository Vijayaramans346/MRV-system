import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const steps = [
  { title: "Plantation", desc: "Field teams plant mangroves/sea-grass and collect baseline data." },
  { title: "Verification", desc: "NCCR tools validate growth, biomass, and site integrity." },
  { title: "Blockchain Entry", desc: "Verified MRV data is immutably stored on-chain." },
  { title: "Tokenized Credits", desc: "Carbon credits are minted, tracked, and tradable." },
]

export function HowItWorksSteps() {
  return (
    <section className="grid gap-6">
      <h2 className="text-2xl font-semibold">How it works</h2>
      <div className="grid gap-4 md:grid-cols-4">
        {steps.map((s, i) => (
          <Card key={s.title} className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent text-[13px] font-semibold">
                  {i + 1}
                </span>
                <span>{s.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
