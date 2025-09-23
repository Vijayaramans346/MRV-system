import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function Hero() {
  return (
    <section className="grid gap-8 md:grid-cols-2 items-center">
      <div className="grid gap-6">
        <h1 className="text-4xl md:text-5xl font-bold text-balance">Blockchain for Blue Carbon</h1>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          Monitor, verify, and tokenize coastal blue carbon with transparent, immutable records. Onboard stakeholders,
          upload field data, and earn trusted carbon credits.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild className="bg-primary">
            <Link href="/registry">Explore Registry</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/partners">Get Onboarded</Link>
          </Button>
        </div>
        <ul className="text-sm text-muted-foreground grid gap-1">
          <li>• Verified plantation & restoration data</li>
          <li>• Tokenized carbon credits on-chain</li>
          <li>• Built for NGOs, coastal panchayats, and communities</li>
        </ul>
      </div>
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          {/* Placeholder for explainer video/animation */}
          <Image
            src="/blue-ocean-mangrove-registry-explainer.jpg"
            alt="Explainer graphic of blockchain-powered blue carbon registry"
            width={720}
            height={420}
            className="w-full h-auto"
            priority
          />
        </CardContent>
      </Card>
    </section>
  )
}
