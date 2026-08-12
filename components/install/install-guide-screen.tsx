"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "motion/react"
import { ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"

const ease = [0.22, 1, 0.36, 1] as const

type Platform = "ios" | "android" | "desktop"

const PLATFORMS: { value: Platform; label: string }[] = [
  { value: "ios", label: "iPhone" },
  { value: "android", label: "Android" },
  { value: "desktop", label: "Tietokone" },
]

const STEPS: Record<Platform, { title: string; body: string }[]> = {
  ios: [
    {
      title: "Avaa Safarissa",
      body: "Kirjoita ruokaval.io osoitepalkkiin. Asennus toimii vain Safari-selaimessa.",
    },
    {
      title: "Napauta jakamispainiketta",
      body: "Alapalkista löytyy neliö, jonka sisällä on ylöspäin osoittava nuoli.",
    },
    {
      title: "Valitse “Lisää Koti­valikkoon”",
      body: "Vieritä valikkoa alaspäin, kunnes näet tämän vaihtoehdon.",
    },
    {
      title: "Vahvista napauttamalla “Lisää”",
      body: "Ruokaval.io ilmestyy koti­valikkoosi omana kuvakkeenaan, ilman selaimen kehyksiä.",
    },
  ],
  android: [
    {
      title: "Avaa Chromessa",
      body: "Kirjoita ruokaval.io osoitepalkkiin ja odota sivun latautuvan.",
    },
    {
      title: "Avaa valikko",
      body: "Napauta oikeassa yläkulmassa olevaa kolmea pistettä.",
    },
    {
      title: "Valitse “Lisää aloitusnäytölle”",
      body: "Jos vaihtoehtoa ei näy suoraan, etsi “Asenna sovellus”.",
    },
    {
      title: "Vahvista asennus",
      body: "Ruokaval.io toimii nyt omana sovelluksena, erillään selaimesta.",
    },
  ],
  desktop: [
    {
      title: "Avaa Chromessa tai Edgessä",
      body: "Siirry osoitteeseen ruokaval.io.",
    },
    {
      title: "Etsi asennuskuvake",
      body: "Osoitepalkin oikeasta reunasta löytyy pieni näyttö­kuvake, jossa on plus-merkki.",
    },
    {
      title: "Napsauta “Asenna”",
      body: "Ruokaval.io avautuu omaan ikkunaansa, kuten mikä tahansa työpöytäsovellus.",
    },
  ],
}

export function InstallGuideScreen() {
  const [platform, setPlatform] = useState<Platform>("ios")

  return (
    <div className="mx-auto w-full max-w-md px-6 pt-8 pb-24 sm:px-0">
      <Link
        href="/profiili"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Takaisin
      </Link>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
        className="mt-8 font-display text-4xl font-medium text-foreground text-balance"
      >
        Asenna puhelimeen
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05, ease }}
        className="mt-3 text-[15px] leading-relaxed text-muted-foreground"
      >
        Ruokaval.io toimii sovelluksena, ilman erillistä latausta.
      </motion.p>

      <div className="mt-10 flex gap-6 border-b border-border">
        {PLATFORMS.map((p) => (
          <button
            key={p.value}
            type="button"
            onClick={() => setPlatform(p.value)}
            className={cn(
              "relative -mb-px pb-3 font-display text-base transition-colors",
              platform === p.value ? "text-foreground" : "text-muted-foreground hover:text-foreground",
            )}
          >
            {p.label}
            {platform === p.value && (
              <motion.span
                layoutId="install-tab-underline"
                className="absolute inset-x-0 bottom-0 h-px bg-primary"
                transition={{ duration: 0.3, ease }}
              />
            )}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={platform}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease }}
          className="mt-8 flex flex-col"
        >
          {STEPS[platform].map((step, i) => (
            <div key={step.title} className={cn("flex gap-5 py-5", i !== 0 && "border-t border-border")}>
              <span className="font-display text-sm text-muted-foreground tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-1">
                <span className="font-display text-lg text-foreground">{step.title}</span>
                <span className="text-sm leading-relaxed text-muted-foreground">{step.body}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      <p className="mt-10 text-sm leading-relaxed text-muted-foreground">
        Kun sovellus on asennettu, se avautuu suoraan tänään-näkymään ilman selaimen osoitepalkkia.
      </p>
    </div>
  )
}
