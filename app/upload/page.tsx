import { UploadForm } from "@/components/forms/upload-form"

export default function UploadPage() {
  return (
    <div className="grid gap-6">
      <h1 className="text-3xl font-semibold">Data Upload Portal</h1>
      <p className="text-muted-foreground">
        Optimized for field teams—works great on mobile. Upload site data, notes, and media securely.
      </p>
      <UploadForm />
    </div>
  )
}
