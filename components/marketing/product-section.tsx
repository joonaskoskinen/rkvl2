'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { Check, Sparkles } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const

const meals = [
  {
    time: '08:00',
    name: 'Kaurapuuro, banaani & maapähkinävoi',
    kcal: 520,
    image: '/images/food/kaurapuuro.png',
    eaten: true,
  },
  {
    time: '12:30',
    name: 'Kana-riisikulho',
    kcal: 680,
    image: '/images/food/kana-riisikulho.png',
    eaten: true,
  },
  {
    time: '16:00',
    name: 'Rahka & marjat',
    kcal: 250,
    image: '/images/food/rahka-marjat.png',
    eaten: true,
  },
  {
    time: '19:00',
    name: 'Jauhelihapasta',
    kcal: 690,
    image: '/images/food/jauhelihapasta.png',
    eaten: false,
  },
]

const groceries = [
  { name: 'Kanafilee 600 g', checked: true },
  { name: 'Jasmiiniriisi', checked: true },
  { name: 'Maitorahka 2 kpl', checked: false },
  { name: 'Pakastemarjat', checked: false },
]

const weekBars = [0.9, 1, 0.75, 0.95, 0.6, 0.85, 0.7]

export function ProductSection() {
  return (
    <section id="tuote" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">Tuote</p>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-balance text-foreground md:text-5xl">
            Koko päiväsi yhdellä silmäyksellä.
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            Ei kalorilaskureita eikä taulukoita. Avaat sovelluksen, näet mitä syöt seuraavaksi — ja
            ostoslista sekä seuranta hoituvat itsestään.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="relative mt-16 overflow-hidden rounded-[2.5rem] bg-secondary px-6 pt-14 md:mt-20 md:px-12"
        >
          <div className="relative mx-auto flex max-w-4xl items-end justify-center gap-8">
            {/* Grocery list card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease, delay: 0.35 }}
              className="mb-16 hidden w-56 shrink-0 rounded-2xl border border-border/60 bg-card p-5 shadow-[0_24px_60px_-24px_rgb(0_0_0/0.2)] lg:block"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Ostoslista</p>
              <ul className="mt-4 flex flex-col gap-3">
                {groceries.map((item) => (
                  <li key={item.name} className="flex items-center gap-2.5 text-sm">
                    <span
                      className={
                        item.checked
                          ? 'flex size-4.5 items-center justify-center rounded-full bg-primary text-primary-foreground'
                          : 'size-4.5 rounded-full border-[1.5px] border-border'
                      }
                    >
                      {item.checked && <Check className="size-3" />}
                    </span>
                    <span className={item.checked ? 'text-muted-foreground line-through' : 'text-foreground'}>
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 border-t border-border pt-3 text-xs text-muted-foreground">
                Koottu viikon resepteistä
              </p>
            </motion.div>

            {/* Phone mock */}
            <motion.div
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease, delay: 0.2 }}
              className="w-full max-w-[360px] shrink-0"
            >
              <div className="rounded-t-[2.4rem] border border-b-0 border-border/60 bg-card px-6 pb-8 pt-7 shadow-[0_32px_80px_-32px_rgb(0_0_0/0.3)]">
                <p className="text-xs text-muted-foreground">Torstai 15.8.</p>
                <p className="mt-2 font-display text-5xl font-medium tabular-nums text-foreground">
                  1 450
                  <span className="ml-1.5 text-lg font-normal text-muted-foreground">kcal</span>
                </p>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-[59%] rounded-full bg-primary" />
                </div>
                <p className="mt-2 text-xs text-muted-foreground">1 000 kcal jäljellä tavoitteesta</p>

                <div className="mt-6 flex flex-col">
                  {meals.map((meal, i) => (
                    <div
                      key={meal.name}
                      className={`flex items-center gap-3 py-3 ${i !== 0 ? 'border-t border-border/70' : ''} ${
                        meal.eaten ? '' : 'opacity-95'
                      }`}
                    >
                      <div className="relative size-10 shrink-0 overflow-hidden rounded-full bg-muted">
                        <Image src={meal.image || '/placeholder.svg'} alt="" fill sizes="40px" className="object-cover" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[11px] text-muted-foreground">{meal.time}</p>
                        <p className="truncate text-sm text-foreground">{meal.name}</p>
                      </div>
                      {meal.eaten ? (
                        <span className="flex items-center gap-1 text-[11px] text-primary">
                          <Check className="size-3" />
                          Syöty
                        </span>
                      ) : (
                        <span className="text-[11px] tabular-nums text-muted-foreground">{meal.kcal} kcal</span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex justify-center">
                  <span className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-foreground">
                    <Sparkles className="size-3.5 text-primary" />
                    Mitä söisin nyt?
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Week progress card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease, delay: 0.45 }}
              className="mb-24 hidden w-56 shrink-0 rounded-2xl border border-border/60 bg-card p-5 shadow-[0_24px_60px_-24px_rgb(0_0_0/0.2)] lg:block"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Viikko</p>
              <div className="mt-5 flex h-20 items-end gap-2">
                {weekBars.map((v, i) => (
                  <div key={i} className="flex-1 rounded-t-sm bg-primary/20">
                    <div className="w-full rounded-t-sm bg-primary" style={{ height: `${v * 80}px`, opacity: 0.35 + v * 0.65 }} />
                  </div>
                ))}
              </div>
              <div className="mt-2 flex justify-between text-[10px] text-muted-foreground">
                <span>Ma</span>
                <span>Su</span>
              </div>
              <p className="mt-4 border-t border-border pt-3 text-xs text-muted-foreground">
                6/7 päivää tavoitteessa
              </p>
            </motion.div>
          </div>
        </motion.div>

        <div className="mt-14 grid gap-x-8 gap-y-10 md:mt-16 md:grid-cols-3">
          {[
            {
              title: 'Ateriat, jotka joustavat',
              body: 'Ei tee mieli pastaa? Vaihda ateria yhdellä painalluksella — tavoitteet pysyvät silti kohdillaan.',
            },
            {
              title: 'Ostoslista itsestään',
              body: 'Viikon reseptit muuttuvat valmiiksi kauppalistaksi. Sinun tehtäväsi on vain käydä kaupassa.',
            },
            {
              title: 'Seuranta ilman säätöä',
              body: 'Merkitse ateria syödyksi, ja kalorit sekä proteiinit kirjautuvat automaattisesti.',
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease, delay: i * 0.1 }}
              className="border-t border-border pt-6"
            >
              <h3 className="font-display text-lg font-medium text-foreground">{item.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-pretty text-muted-foreground">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
