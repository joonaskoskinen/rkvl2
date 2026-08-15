'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'

const ease = [0.22, 1, 0.36, 1] as const

const thumbs = [
  '/images/food/kanawokki.png',
  '/images/food/lohi-kasvikset.png',
  '/images/food/rahka-marjat.png',
]

export function CtaSection() {
  return (
    <section id="hinnasto" className="px-6 pb-24 pt-4 md:pb-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-primary px-6 py-20 text-center md:py-28"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full border-[3rem] border-primary-foreground/[0.06]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-20 size-80 rounded-full border-[2.5rem] border-primary-foreground/[0.06]"
        />

        <div className="relative mx-auto max-w-2xl">
          <div className="mb-8 flex justify-center">
            <div className="flex -space-x-3">
              {thumbs.map((src) => (
                <span
                  key={src}
                  className="relative size-12 overflow-hidden rounded-full border-2 border-primary bg-muted"
                >
                  <Image src={src || '/placeholder.svg'} alt="" fill sizes="48px" className="object-cover" />
                </span>
              ))}
            </div>
          </div>

          <h2 className="font-display text-4xl font-medium tracking-tight text-balance text-primary-foreground md:text-6xl">
            Kokeile ilmaiseksi 14 päivää.
          </h2>
          <p className="mt-5 text-pretty text-lg text-primary-foreground/80">
            9,90&nbsp;€/kk sen jälkeen. Ei sitoutumista — peruuta koska tahansa.
          </p>
          <div className="mt-9">
            <Button
              size="lg"
              render={<Link href="/aloita" />}
              nativeButton={false}
              className="h-13 rounded-full bg-background px-8 text-base text-foreground hover:bg-background/90"
            >
              Aloita ilmaiseksi
            </Button>
          </div>
          <p className="mt-5 text-sm text-primary-foreground/70">Ei luottokorttia kokeiluun</p>
        </div>
      </motion.div>
    </section>
  )
}
