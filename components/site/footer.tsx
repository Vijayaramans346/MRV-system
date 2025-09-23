import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-10 grid gap-6 md:grid-cols-3">
        <div className="grid gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-block h-6 w-6 rounded bg-primary" aria-hidden="true" />
            <span className="font-semibold">Blue Carbon MRV</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-prose">
            Transparent, tokenized blue carbon credits secured on-chain. Built for communities, researchers, and
            regulators.
          </p>
        </div>
        <div>
          <h3 className="font-medium mb-2">Product</h3>
          <ul className="grid gap-2 text-sm">
            <li>
              <Link className="hover:text-primary" href="/how-it-works">
                How it works
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/registry">
                Registry
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/partners">
                Partners
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/upload">
                Upload
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium mb-2">Company</h3>
          <ul className="grid gap-2 text-sm">
            <li>
              <Link className="hover:text-primary" href="/about">
                About
              </Link>
            </li>
            <li>
              <a className="hover:text-primary" href="mailto:contact@example.org">
                Contact
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#" aria-disabled>
                Privacy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Blue Carbon MRV. All rights reserved.
      </div>
    </footer>
  )
}
