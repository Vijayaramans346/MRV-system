import { Hero } from "@/components/hero"
import { HowItWorksSteps } from "@/components/how-it-works/steps"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
  return (
    <div className="grid gap-14">
      <Hero />
      <HowItWorksSteps />

      <section className="grid gap-4">
        <h2 className="text-2xl font-semibold">Live Registry Preview</h2>
        <Card>
          <CardContent className="p-0">
            <Image
              src="/registry-map-with-markers-coastal-mangroves.jpg"
              alt="Preview map of registered plantation sites"
              width={1200}
              height={300}
              className="w-full h-auto"
            />
          </CardContent>
        </Card>
        <div>
          <Link className="text-primary underline" href="/registry">
            View full registry →
          </Link>
        </div>
      </section>
    </div>
  )
}
