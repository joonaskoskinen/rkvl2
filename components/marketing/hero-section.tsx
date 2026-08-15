'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ease = [0.22, 1, 0.36, 1] as const

const headline = ['Ruokavalio, joka', 'sopii sinun elämääsi.']

/** Small protein progress ring used in the floating card. */
function MiniRing({ value }: { value: number }) {
  const r = 15
  const c = 2 * Math.PI * r
  return (
    <svg viewBox="0 0 40 40" className="size-11 -rotate-90">
      <circle cx={20} cy={20} r={r} fill="none" stroke="var(--color-border)" strokeWidth={5} />
      <circle
        cx={20}
        cy={20}
        r={r}
        fill="none"
        stroke="var(--color-primary)"
        strokeWidth={5}
        strokeLinecap="round"
        strokeDasharray={`${value * c} ${c}`}
      />
    </svg>
  )
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-36 md:pb-32 md:pt-44">
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-[1.05fr_0.95fr] md:gap-12">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.05 }}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-border bg-card py-1.5 pl-2 pr-4 text-sm text-muted-foreground"
          >
            <span className="inline-flex items-center rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-accent-foreground">
              Uusi
            </span>
            Henkilökohtainen suunnitelma 2 minuutissa
          </motion.div>

          <h1 className="font-display text-[13vw] font-medium leading-[0.98] tracking-tight text-foreground md:text-[64px] lg:text-[76px]">
            {headline.map((line, i) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.15 + i * 0.12 }}
                className="block text-balance"
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.55 }}
            className="mt-7 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground"
          >
            Ruokaval.io suunnittelee viikon ateriat, seuraa syömisiäsi ja kirjoittaa kauppalistan puolestasi.
            Sinä vain syöt hyvin.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.7 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button
              size="lg"
              render={<Link href="/aloita" />}
              nativeButton={false}
              className="h-12 rounded-full px-7 text-base"
            >
              Aloita ilmaiseksi
            </Button>
            <Button
              size="lg"
              variant="ghost"
              render={<Link href="#miten-se-toimii" />}
              nativeButton={false}
              className="h-12 rounded-full px-6 text-base text-muted-foreground hover:text-foreground"
            >
              Miten se toimii
              <ArrowDown className="size-4" />
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease, delay: 0.85 }}
            className="mt-7 text-sm text-muted-foreground"
          >
            14 päivää ilmaiseksi &middot; Ei luottokorttia &middot; Peruuta milloin vain
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease, delay: 0.35 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem]">
            <Image
              src="/images/hero/hero-main.png"
              alt="Uunilohi ja juurekset, tarjoiltuna kivikulhossa"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-foreground/10" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 1.1 }}
            className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-border/60 bg-background/90 px-5 py-4 shadow-[0_16px_40px_-16px_rgb(0_0_0/0.25)] backdrop-blur-md"
          >
            <div>
              <p className="text-sm font-medium text-foreground">Lohi &amp; juurekset</p>
              <p className="text-xs text-muted-foreground">640 kcal &middot; 44 g proteiinia</p>
            </div>
            <span className="rounded-full bg-secondary px-3 py-1 text-xs tabular-nums text-secondary-foreground">
              19:00
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -12, x: 8 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.7, ease, delay: 1.3 }}
            className="absolute -right-3 top-6 hidden items-center gap-3 rounded-2xl border border-border/60 bg-background/95 py-3 pl-3 pr-5 shadow-[0_16px_40px_-16px_rgb(0_0_0/0.25)] backdrop-blur-md sm:flex md:-right-6"
          >
            <MiniRing value={0.78} />
            <div>
              <p className="text-xs text-muted-foreground">Proteiini tänään</p>
              <p className="text-sm font-medium tabular-nums text-foreground">128 / 165 g</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
