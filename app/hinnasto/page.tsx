import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/marketing/site-header"
import { SiteFooter } from "@/components/marketing/site-footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Hinnasto — Ruokaval.io",
  description: "Yksi kuukausihinta. Ei piilokuluja.",
}

const included = [
  "Henkilökohtainen ruokavalio",
  "Viikkosuunnitelma ja reseptit",
  "Ostoslista automaattisesti",
  "Edistymisen seuranta",
]

export default function PricingPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex flex-1 items-center justify-center px-6 pt-32 pb-24">
        <div className="flex w-full max-w-sm flex-col items-center gap-10 text-center">
          <div className="flex flex-col gap-3">
            <h1 className="font-display text-4xl font-medium text-balance text-foreground">Yksi hinta.</h1>
            <p className="text-muted-foreground">Ei piilokuluja. Peruuta milloin tahansa.</p>
          </div>

          <div className="flex flex-col items-center gap-1">
            <span className="font-display text-6xl font-medium tabular-nums text-foreground">9,90 €</span>
            <span className="text-sm text-muted-foreground">kuukaudessa</span>
          </div>

          <div className="flex w-full flex-col border-t border-border pt-6">
            {included.map((item, i) => (
              <span
                key={item}
                className={`py-3 text-sm text-foreground ${i !== 0 ? "border-t border-border" : ""}`}
              >
                {item}
              </span>
            ))}
          </div>

          <Button size="lg" render={<Link href="/aloita" />} nativeButton={false} className="w-full rounded-full">
            Aloita ilmaiseksi
          </Button>
          <p className="text-xs text-muted-foreground">14 päivän ilmainen kokeilu</p>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
