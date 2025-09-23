import { HowItWorksSteps } from "@/components/how-it-works/steps"
import Image from "next/image"

export default function HowItWorksPage() {
  return (
    <div className="grid gap-10">
      <HowItWorksSteps />
      <section className="grid gap-4 md:grid-cols-2 items-start">
        <div className="grid gap-3">
          <h3 className="text-xl font-semibold">Transparent MRV Pipeline</h3>
          <p className="text-muted-foreground leading-relaxed">
            We integrate field data (mobile), IoT sensors, and drone imagery. Verified datasets are written to the
            blockchain and summarized as tokenized carbon credits, ensuring end-to-end auditability.
          </p>
          <ul className="text-sm text-muted-foreground grid gap-1">
            <li>• Baseline and growth data validations</li>
            <li>• Secure hashing of records on-chain</li>
            <li>• Traceability for every minted credit</li>
          </ul>
        </div>
        <Image
          src="/diagram-pipeline-field-data-to-blockchain.jpg"
          alt="Diagram showing data pipeline from field to blockchain"
          width={560}
          height={280}
          className="w-full h-auto"
        />
      </section>
    </div>
  )
}
