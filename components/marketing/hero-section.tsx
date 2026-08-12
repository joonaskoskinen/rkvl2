'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'

const ease = [0.22, 1, 0.36, 1] as const

const headline = ['Ruokavalio, joka', 'sopii sinun elämääsi.']

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-40 md:pt-48">
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-[1.05fr_0.95fr] md:gap-10">
        <div>
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
            className="mt-7 max-w-sm text-lg text-muted-foreground"
          >
            Suunnittele. Syö. Toista.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.7 }}
            className="mt-9"
          >
            <Button
              size="lg"
              render={<Link href="/aloita" />}
              nativeButton={false}
              className="h-12 rounded-full px-7 text-base"
            >
              Aloita ilmaiseksi
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease, delay: 0.35 }}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl"
        >
          <Image
            src="/images/hero/hero-main.png"
            alt="Uunilohi ja juurekset, tarjoiltuna kivikulhossa"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover"
          />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 1.1 }}
            className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl bg-background/90 px-5 py-4 backdrop-blur-md"
          >
            <div>
              <p className="text-sm font-medium text-foreground">Lohi &amp; juurekset</p>
              <p className="text-xs text-muted-foreground">640 kcal · 44g proteiinia</p>
            </div>
            <span className="text-xs text-muted-foreground">19:00</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
