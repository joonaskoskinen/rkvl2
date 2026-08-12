'use client'

import Image from 'next/image'
import { motion } from 'motion/react'

const ease = [0.22, 1, 0.36, 1] as const

const steps = [
  {
    title: 'Kerro tavoitteesi',
    body: 'Muutama kysymys elämästäsi ja tavoitteistasi. Ei lomakkeita.',
    image: '/images/food/kaurapuuro.png',
  },
  {
    title: 'Saat ruokavalion',
    body: 'Viikon ateriat, jotka sopivat makuusi ja arkeesi.',
    image: '/images/food/kana-riisikulho.png',
  },
  {
    title: 'Syö ja seuraa',
    body: 'Merkitse ateriat syödyksi. Loput hoituu itsestään.',
    image: '/images/food/lohi-kasvikset.png',
  },
]

export function HowItWorksSection() {
  return (
    <section id="miten-se-toimii" className="px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease }}
          className="font-display text-4xl font-medium tracking-tight text-foreground md:text-5xl"
        >
          Miten se toimii
        </motion.h2>

        <div className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease, delay: i * 0.1 }}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src={step.image || '/placeholder.svg'}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-6 text-sm text-muted-foreground">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="mt-2 font-display text-xl font-medium text-foreground">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
