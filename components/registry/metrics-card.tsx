import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function MetricsCard({
  title,
  value,
  helper,
}: {
  title: string
  value: string
  helper?: string
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm text-muted-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-2xl font-semibold">
        <div>{value}</div>
        {helper ? <div className="mt-1 text-xs text-muted-foreground">{helper}</div> : null}
      </CardContent>
    </Card>
  )
}
