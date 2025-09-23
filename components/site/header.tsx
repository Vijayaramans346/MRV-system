"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="border-b border-border bg-background sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-block h-8 w-8 rounded-md bg-primary" aria-hidden="true" />
          <span className="font-semibold tracking-tight text-balance">Blue Carbon MRV</span>
          <span className="sr-only">Go to homepage</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link className="hover:text-primary" href="/how-it-works">
            How it works
          </Link>
          <Link className="hover:text-primary" href="/registry">
            Registry
          </Link>
          <Link className="hover:text-primary" href="/partners">
            Partners
          </Link>
          <Link className="hover:text-primary" href="/upload">
            Upload
          </Link>
          <Link className="hover:text-primary" href="/admin">
            Admin
          </Link>
          <Link className="hover:text-primary" href="/about">
            About
          </Link>
          <Button asChild className="bg-primary hover:opacity-90">
            <Link href="/registry">Explore Registry</Link>
          </Button>
        </nav>
        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="h-0.5 w-5 bg-foreground block relative">
            <span className="absolute -top-2 left-0 h-0.5 w-5 bg-foreground" />
            <span className="absolute top-2 left-0 h-0.5 w-5 bg-foreground" />
          </span>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-4 grid gap-3">
            <Link onClick={() => setOpen(false)} href="/how-it-works">
              How it works
            </Link>
            <Link onClick={() => setOpen(false)} href="/registry">
              Registry
            </Link>
            <Link onClick={() => setOpen(false)} href="/partners">
              Partners
            </Link>
            <Link onClick={() => setOpen(false)} href="/upload">
              Upload
            </Link>
            <Link onClick={() => setOpen(false)} href="/admin">
              Admin
            </Link>
            <Link onClick={() => setOpen(false)} href="/about">
              About
            </Link>
            <Button asChild className="bg-primary">
              <Link href="/registry">Explore Registry</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
