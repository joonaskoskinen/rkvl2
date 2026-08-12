import type { Metadata } from "next"
import { SiteHeader } from "@/components/marketing/site-header"
import { SiteFooter } from "@/components/marketing/site-footer"

export const metadata: Metadata = {
  title: "Tietosuoja — Ruokaval.io",
}

export default function PrivacyPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-2xl flex-1 px-6 pt-32 pb-24">
        <h1 className="font-display text-4xl font-medium text-foreground">Tietosuoja</h1>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
          Käsittelemme tietojasi luottamuksellisesti ja käytämme niitä ainoastaan ruokavaliosi
          suunnitteluun. Emme koskaan myy tietojasi kolmansille osapuolille.
        </p>
      </main>
      <SiteFooter />
    </div>
  )
}
