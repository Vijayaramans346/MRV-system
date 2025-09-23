import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="grid gap-8">
      <div className="grid gap-2">
        <h1 className="text-3xl font-semibold">About the Initiative</h1>
        <p className="text-muted-foreground leading-relaxed max-w-prose">
          This registry advances blue carbon conservation with transparent MRV and tokenized credits, supporting climate
          resilience for coastal communities.
        </p>
      </div>
      <Image
        src="/mangrove-restoration-coastline-photo.jpg"
        alt="Mangrove restoration along coastline"
        width={1200}
        height={280}
        className="w-full h-auto rounded-md"
      />
      <div className="grid gap-1 text-sm text-muted-foreground">
        <p>• Collaboration opportunities are open for NGOs, researchers, and government agencies.</p>
        <p>• Contact us for pilots and data integration support.</p>
      </div>
    </div>
  )
}
