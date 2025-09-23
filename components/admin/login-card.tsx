"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function AdminLoginCard() {
  const [loading, setLoading] = useState(false)

  async function onSubmit(formData: FormData) {
    setLoading(true)
    await new Promise((r) => setTimeout(r, 700))
    setLoading(false)
    alert("Demo only: NCCR admin would be redirected to dashboard.")
  }

  return (
    <Card className="max-w-md w-full">
      <CardHeader>
        <CardTitle>NCCR Admin Login</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={onSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <label className="text-sm" htmlFor="email">
              Email
            </label>
            <Input required type="email" id="email" name="email" placeholder="admin@nccr.gov" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm" htmlFor="password">
              Password
            </label>
            <Input required type="password" id="password" name="password" placeholder="••••••••" />
          </div>
          <Button disabled={loading} type="submit" className="bg-primary">
            {loading ? "Signing in..." : "Sign in"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
