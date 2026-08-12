'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { CalorieRing } from '@/components/nutrition/calorie-ring'
import { Logo } from '@/components/logo'

const ease = [0.22, 1, 0.36, 1] as const

export default function NotFound() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-10 bg-background px-6 py-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
      >
        <Logo />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease, delay: 0.1 }}
      >
        <CalorieRing value={0} target={404} size={168} strokeWidth={13} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease, delay: 0.25 }}
        className="max-w-sm"
      >
        <h1 className="font-display text-2xl font-medium text-balance text-foreground">
          Tätä annosta ei löydy keittiöstä.
        </h1>
        <p className="mt-3 text-sm text-pretty text-muted-foreground">
          Sivu on joko syöty loppuun tai sitä ei ole koskaan ollutkaan reseptikirjassa. Palataan
          tutummille vesille.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease, delay: 0.4 }}
        className="flex items-center gap-3"
      >
        <Button size="lg" render={<Link href="/dashboard" />} nativeButton={false} className="rounded-full px-6">
          Takaisin tälle päivälle
        </Button>
        <Button
          size="lg"
          variant="outline"
          render={<Link href="/" />}
          nativeButton={false}
          className="rounded-full px-6"
        >
          Etusivulle
        </Button>
      </motion.div>
    </div>
  )
}
