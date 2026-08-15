'use client'

import Image from 'next/image'
import { motion } from 'motion/react'

const ease = [0.22, 1, 0.36, 1] as const

const steps = [
  {
    title: 'Kerro tavoitteesi',
    body: 'Muutama kysymys elämästäsi ja tavoitteistasi. Kestää alle kaksi minuuttia.',
    image: '/images/food/kaurapuuro.png',
    caption: 'Aamupala · 520 kcal',
  },
  {
    title: 'Saat ruokavalion',
    body: 'Viikon ateriat, jotka sopivat makuusi, arkeesi ja tavoitteisiisi.',
    image: '/images/food/kana-riisikulho.png',
    caption: 'Lounas · 680 kcal',
  },
  {
    title: 'Syö ja seuraa',
    body: 'Merkitse ateriat syödyksi. Loput hoituu itsestään.',
    image: '/images/food/lohi-kasvikset.png',
    caption: 'Päivällinen · 640 kcal',
  },
]

export function HowItWorksSection() {
  return (
    <section id="miten-se-toimii" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease }}
          className="max-w-xl"
        >
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">Miten se toimii</p>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-balance text-foreground md:text-5xl">
            Kolme askelta parempaan arkiruokaan.
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-x-8 gap-y-14 md:mt-16 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease, delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src={step.image || '/placeholder.svg'}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/10" />
                <span className="absolute bottom-3 left-3 rounded-full bg-background/85 px-3 py-1.5 text-xs text-foreground backdrop-blur-sm">
                  {step.caption}
                </span>
              </div>
              <div className="mt-6 flex items-baseline gap-3">
                <span className="font-display text-sm tabular-nums text-primary">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-xl font-medium text-foreground">{step.title}</h3>
              </div>
              <p className="mt-2 text-[15px] leading-relaxed text-pretty text-muted-foreground md:pl-8">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
