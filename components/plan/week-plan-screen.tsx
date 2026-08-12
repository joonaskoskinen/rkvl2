"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "motion/react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { weekPlan, recipes } from "@/lib/demo-data"
import type { Meal } from "@/lib/types"

const SLOT_LABEL: Record<Meal["slot"], string> = {
  breakfast: "Aamupala",
  lunch: "Lounas",
  snack: "Välipala",
  dinner: "Päivällinen",
  "evening-snack": "Iltapala",
}

function recipeSlugFor(meal: Meal) {
  const match = recipes.find((r) => r.image === meal.image)
  return match?.slug
}

export function WeekPlanScreen() {
  const [openDay, setOpenDay] = useState<string>(weekPlan[0].date)

  return (
    <div className="mx-auto w-full max-w-md px-6 pt-10 pb-16 sm:px-0">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-4xl font-medium text-balance text-foreground"
      >
        Tämän viikon ruokavalio
      </motion.h1>

      <div className="mt-10 flex flex-col">
        {weekPlan.map((day, i) => {
          const isOpen = openDay === day.date
          return (
            <motion.div
              key={day.date}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
              className="border-t border-border first:border-t-0"
            >
              <button
                type="button"
                onClick={() => setOpenDay(isOpen ? "" : day.date)}
                className="flex w-full items-center justify-between py-5 text-left"
              >
                <span className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
                  {day.label}
                </span>
                <ChevronDown
                  className={cn(
                    "size-4 text-muted-foreground transition-transform",
                    isOpen && "rotate-180",
                  )}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col gap-6 pb-8">
                      {i === 0 && (
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl bg-muted">
                          <Image
                            src={day.meals[1].image}
                            alt={day.meals[1].description}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div className="flex flex-col">
                        {day.meals.map((meal, j) => {
                          const slug = recipeSlugFor(meal)
                          const rowClass = cn(
                            "flex items-center justify-between border-border py-3.5",
                            j !== 0 && "border-t",
                            slug && "transition-opacity hover:opacity-70",
                          )
                          const content = (
                            <>
                              <div className="flex flex-col gap-0.5">
                                <span className="text-xs text-muted-foreground">{SLOT_LABEL[meal.slot]}</span>
                                <span className="font-display text-lg text-foreground">{meal.description}</span>
                              </div>
                              <span className="text-sm tabular-nums text-muted-foreground">
                                {meal.macro.kcal} kcal
                              </span>
                            </>
                          )
                          return slug ? (
                            <Link key={meal.id} href={`/reseptit/${slug}?from=ruokavalio`} className={rowClass}>
                              {content}
                            </Link>
                          ) : (
                            <div key={meal.id} className={rowClass}>
                              {content}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
