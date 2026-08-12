import type { Metadata } from "next"
import { InstallGuideScreen } from "@/components/install/install-guide-screen"

export const metadata: Metadata = {
  title: "Asenna puhelimeen — Ruokaval.io",
  description: "Ohjeet Ruokaval.ion asentamiseen iPhoneen, Androidiin ja tietokoneelle.",
}

export default function InstallPage() {
  return (
    <main className="min-h-svh bg-background">
      <InstallGuideScreen />
    </main>
  )
}
