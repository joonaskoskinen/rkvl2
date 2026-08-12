"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/logo"

const LINKS = [
  { href: "/dashboard", label: "Tänään" },
  { href: "/ruokavalio", label: "Ruokavalio" },
  { href: "/ostoslista", label: "Ostoslista" },
  { href: "/edistyminen", label: "Edistyminen" },
]

const MOBILE_LINKS = [
  { href: "/dashboard", label: "Tänään" },
  { href: "/ruokavalio", label: "Ruokavalio" },
  { href: "/ostoslista", label: "Ostoslista" },
  { href: "/profiili", label: "Profiili" },
]

export function AppNav() {
  const pathname = usePathname()

  return (
    <>
      {/* Desktop top nav */}
      <header className="hidden border-b border-border/70 md:block">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-8 py-5">
          <Link href="/dashboard" className="opacity-90 transition-opacity hover:opacity-100">
            <Logo />
          </Link>
          <nav className="flex items-center gap-8">
            {LINKS.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm transition-colors",
                    active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>
          <Link
            href="/profiili"
            className="size-8 rounded-full bg-muted transition-opacity hover:opacity-80"
            aria-label="Profiili"
          />
        </div>
      </header>

      {/* Mobile bottom nav */}
      <nav className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between border-t border-border/70 bg-background/95 px-6 pb-[max(env(safe-area-inset-bottom),0.75rem)] pt-2 backdrop-blur md:hidden">
        {MOBILE_LINKS.slice(0, 2).map((link) => (
          <MobileLink key={link.href} href={link.href} label={link.label} active={pathname === link.href} />
        ))}
        <Link
          href="/dashboard?lisaa=1"
          className="-mt-6 flex size-14 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-transform active:scale-95"
          aria-label="Lisää ruokaa"
        >
          <Plus className="size-6" />
        </Link>
        {MOBILE_LINKS.slice(2).map((link) => (
          <MobileLink key={link.href} href={link.href} label={link.label} active={pathname === link.href} />
        ))}
      </nav>
    </>
  )
}

function MobileLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      className={cn(
        "flex flex-1 flex-col items-center gap-1 py-2 text-[11px] font-medium transition-colors",
        active ? "text-foreground" : "text-muted-foreground",
      )}
    >
      {label}
    </Link>
  )
}
