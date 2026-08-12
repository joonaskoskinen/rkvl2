"use client"

import { motion } from "motion/react"
import type { Goal } from "@/lib/onboarding-store"

const GOAL_LABEL: Record<string, string> = {
  lose: "painonpudotukseen",
  maintain: "painon ylläpitoon",
  gain: "lihaskasvuun",
}

export function StepResult({
  calories,
  macros,
  goal,
}: {
  calories: number
  macros: { protein: number; fat: number; carbs: number }
  goal: Goal | null
}) {
  return (
    <div className="flex flex-col items-center gap-10 text-center">
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="text-sm text-muted-foreground"
      >
        Ruokavaliosi on valmis
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-6xl font-medium tabular-nums text-foreground sm:text-7xl"
      >
        {calories.toLocaleString("fi-FI")}
        <span className="ml-2 text-2xl font-normal text-muted-foreground sm:text-3xl">kcal</span>
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="max-w-xs text-base leading-relaxed text-muted-foreground"
      >
        Räätälöity {goal ? GOAL_LABEL[goal] : "tavoitteeseesi"} sopiva päivittäinen tavoite.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex w-full max-w-xs justify-between border-t border-border pt-6"
      >
        <Macro label="Proteiini" value={macros.protein} />
        <Macro label="Hiilihydraatit" value={macros.carbs} />
        <Macro label="Rasva" value={macros.fat} />
      </motion.div>
    </div>
  )
}

function Macro({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="font-display text-xl font-medium text-foreground">{value}g</span>
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  )
}
