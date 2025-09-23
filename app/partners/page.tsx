import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

export default function PartnersPage() {
  return (
    <div className="grid gap-8">
      <div className="grid gap-2">
        <h1 className="text-3xl font-semibold">For NGOs & Communities</h1>
        <p className="text-muted-foreground">
          Step-by-step onboarding for NGOs, coastal panchayats, and community partners to contribute data and earn
          credits.
        </p>
      </div>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="grid gap-2">
          <h3 className="font-medium">Onboarding Guide</h3>
          <ol className="list-decimal pl-6 text-sm leading-relaxed">
            <li>Register your organization</li>
            <li>Complete site profiling</li>
            <li>Upload baseline datasets</li>
            <li>Submit for verification</li>
          </ol>
        </div>
        <div className="grid gap-2">
          <h3 className="font-medium">Resources</h3>
          <ul className="text-sm grid gap-2">
            <li>
              <a className="underline text-primary" href="#">
                Data template (CSV)
              </a>
            </li>
            <li>
              <a className="underline text-primary" href="#">
                Drone capture checklist
              </a>
            </li>
            <li>
              <a className="underline text-primary" href="#">
                IoT sensor integration
              </a>
            </li>
          </ul>
        </div>
        <div className="grid gap-2">
          <h3 className="font-medium">FAQs</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="q1">
              <AccordionTrigger>Who can participate?</AccordionTrigger>
              <AccordionContent>Verified NGOs, coastal local bodies, and research partners.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger>How are credits calculated?</AccordionTrigger>
              <AccordionContent>
                Credits are based on validated biomass and standardized MRV protocols.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger>What is the review time?</AccordionTrigger>
              <AccordionContent>Typical verification cycles complete within 2–4 weeks.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <div>
        <Link className="inline-block bg-accent text-accent-foreground rounded-md px-4 py-2" href="/upload">
          Start Upload →
        </Link>
      </div>
    </div>
  )
}
