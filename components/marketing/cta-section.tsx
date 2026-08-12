'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'

const ease = [0.22, 1, 0.36, 1] as const

export function CtaSection() {
  return (
    <section id="hinnasto" className="px-6 py-28 md:py-36">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="font-display text-4xl font-medium tracking-tight text-foreground md:text-5xl">
          Kokeile ilmaiseksi 14 päivää.
        </h2>
        <p className="mt-5 text-lg text-muted-foreground">9,90&nbsp;€/kk sen jälkeen. Peruuta koska tahansa.</p>
        <div className="mt-9">
          <Button
            size="lg"
            render={<Link href="/aloita" />}
            nativeButton={false}
            className="h-12 rounded-full px-7 text-base"
          >
            Aloita ilmaiseksi
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
