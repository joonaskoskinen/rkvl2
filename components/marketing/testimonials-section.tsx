'use client'

import { motion } from 'motion/react'

const ease = [0.22, 1, 0.36, 1] as const

const testimonials = [
  {
    quote:
      'Ensimmäinen sovellus, joka ei tunnu ruokapäiväkirjalta. Avaan sen, katson mitä syön, ja siinä se.',
    name: 'Laura K.',
    detail: 'Käyttänyt 8 kuukautta',
  },
  {
    quote:
      'Ostoslista on aliarvostetuin ominaisuus. Kauppareissu kesti ennen 40 minuuttia — nyt 15.',
    name: 'Mikko T.',
    detail: 'Käyttänyt 5 kuukautta',
  },
  {
    quote:
      'Proteiinitavoite täyttyy vihdoin ilman, että lasken mitään itse. Vaihdan aterian, jos ei huvita — suunnitelma joustaa.',
    name: 'Emmi R.',
    detail: 'Käyttänyt vuoden',
  },
]

export function TestimonialsSection() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease }}
          className="max-w-xl"
        >
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">Käyttäjät</p>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-balance text-foreground md:text-5xl">
            Arki kevenee, kun ruoka ei vaadi ajattelua.
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-8 md:mt-16 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease, delay: i * 0.1 }}
              className="flex flex-col justify-between gap-8 rounded-2xl border border-border bg-card p-7"
            >
              <blockquote className="font-display text-xl font-medium leading-snug text-pretty text-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-full bg-accent font-display text-sm font-medium text-accent-foreground">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-medium text-foreground">{t.name}</span>
                  <span className="block text-xs text-muted-foreground">{t.detail}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
