"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function UploadForm() {
  const [submitting, setSubmitting] = useState(false)

  async function onSubmit(formData: FormData) {
    setSubmitting(true)
    // In a real app, post to a server action or API route
    const payload = Object.fromEntries(formData.entries())
    console.log("[v0] Upload payload:", payload)
    await new Promise((r) => setTimeout(r, 800))
    setSubmitting(false)
    alert("Sample upload complete (demo).")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Data Upload (Mobile-first)</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={onSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <label className="text-sm" htmlFor="site">
              Site name
            </label>
            <Input required id="site" name="site" placeholder="Mangrove Plot A-12" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm" htmlFor="lat">
              Latitude
            </label>
            <Input required id="lat" name="lat" type="number" step="any" placeholder="8.739" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm" htmlFor="lng">
              Longitude
            </label>
            <Input required id="lng" name="lng" type="number" step="any" placeholder="78.128" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm" htmlFor="notes">
              Notes
            </label>
            <Textarea id="notes" name="notes" placeholder="Field observations, biomass, growth stage..." />
          </div>
          <div className="grid gap-2">
            <label className="text-sm" htmlFor="photo">
              Photo
            </label>
            <Input id="photo" name="photo" type="file" accept="image/*" />
          </div>
          <Button disabled={submitting} className="bg-accent hover:opacity-90" type="submit">
            {submitting ? "Uploading..." : "Upload"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
