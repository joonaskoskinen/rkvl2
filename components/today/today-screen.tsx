"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "motion/react"
import { ArrowLeft, Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { eatenSoFar, nextMealSuggestions, todayMeals } from "@/lib/demo-data"
import { useOnboardingProfile } from "@/lib/use-onboarding-profile"
import type { Meal } from "@/lib/types"

type View = "list" | "detail" | "swap" | "ask"

const WEEKDAYS = ["Sunnuntai", "Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai", "Lauantai"]

function todayLabel() {
  const now = new Date()
  return `${WEEKDAYS[now.getDay()]} ${now.getDate()}.${now.getMonth() + 1}.`
}

export function TodayScreen() {
  const [view, setView] = useState<View>("list")
  const [activeMealId, setActiveMealId] = useState<string | null>(null)
  const [suggestion, setSuggestion] = useState(nextMealSuggestions[0])
  const { dailyTarget } = useOnboardingProfile()

  const activeMeal = useMemo(() => todayMeals.find((m) => m.id === activeMealId) ?? null, [activeMealId])

  const remaining = dailyTarget.kcal - eatenSoFar.kcal

  function openMeal(meal: Meal) {
    setActiveMealId(meal.id)
    setView("detail")
  }

  function closeToList() {
    setView("list")
    setActiveMealId(null)
  }

  return (
    <div className="mx-auto w-full max-w-md px-6 pt-10 sm:px-0">
      <AnimatePresence mode="wait">
        {view === "list" && (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-12"
          >
            <ListView
              remaining={remaining}
              targetKcal={dailyTarget.kcal}
              onOpenMeal={openMeal}
              onAskWhatToEat={() => setView("ask")}
            />
          </motion.div>
        )}

        {view === "detail" && activeMeal && (
          <motion.div
            key="detail"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <DetailView meal={activeMeal} onBack={closeToList} onSwap={() => setView("swap")} />
          </motion.div>
        )}

        {view === "swap" && activeMeal && (
          <motion.div
            key="swap"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <SwapView meal={activeMeal} onBack={() => setView("detail")} onDone={closeToList} />
          </motion.div>
        )}

        {view === "ask" && (
          <motion.div
            key="ask"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <AskView
              suggestion={suggestion}
              onSwap={() =>
                setSuggestion((prev) => {
                  const others = nextMealSuggestions.filter((s) => s.id !== prev.id)
                  return others[Math.floor(Math.random() * others.length)] ?? prev
                })
              }
              onBack={() => setView("list")}
              onChoose={() => setView("list")}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function ListView({
  remaining,
  targetKcal,
  onOpenMeal,
  onAskWhatToEat,
}: {
  remaining: number
  targetKcal: number
  onOpenMeal: (meal: Meal) => void
  onAskWhatToEat: () => void
}) {
  return (
    <>
      <div className="flex flex-col gap-3">
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-sm text-muted-foreground"
        >
          {todayLabel()}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-6xl font-medium tabular-nums text-foreground sm:text-7xl"
        >
          {eatenSoFar.kcal.toLocaleString("fi-FI")}
          <span className="ml-2 text-xl font-normal text-muted-foreground sm:text-2xl">kcal</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-muted-foreground"
        >
          {eatenSoFar.kcal.toLocaleString("fi-FI")} / {targetKcal.toLocaleString("fi-FI")} kcal ·{" "}
          {remaining > 0 ? `${remaining} kcal jäljellä` : "Tavoite saavutettu"}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col"
      >
        {todayMeals.map((meal, i) => (
          <button
            key={meal.id}
            type="button"
            onClick={() => onOpenMeal(meal)}
            className={cn(
              "flex items-center gap-4 border-border py-5 text-left transition-opacity",
              i !== 0 && "border-t",
              meal.status === "suggested" && "opacity-60",
            )}
          >
            <div className="relative size-14 shrink-0 overflow-hidden rounded-full bg-muted">
              <Image src={meal.image} alt={meal.name} fill className="object-cover" />
            </div>
            <div className="flex flex-1 flex-col gap-0.5">
              <span className="text-xs text-muted-foreground">{meal.time}</span>
              <span className="font-display text-lg text-foreground">{meal.description}</span>
            </div>
            <div className="flex flex-col items-end gap-0.5">
              <span className="text-sm tabular-nums text-foreground">{meal.macro.kcal} kcal</span>
              {meal.status === "eaten" && (
                <span className="flex items-center gap-1 text-xs text-primary">
                  <Check className="size-3" /> Syöty
                </span>
              )}
            </div>
          </button>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex justify-center pb-4"
      >
        <button
          type="button"
          onClick={onAskWhatToEat}
          className="flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-foreground transition-colors hover:border-primary/50"
        >
          <Sparkles className="size-4 text-primary" />
          Mitä söisin nyt?
        </button>
      </motion.div>
    </>
  )
}

function DetailView({ meal, onBack, onSwap }: { meal: Meal; onBack: () => void; onSwap: () => void }) {
  return (
    <div className="flex flex-col gap-8">
      <button
        type="button"
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Takaisin
      </button>

      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-muted">
        <Image src={meal.image} alt={meal.name} fill className="object-cover" priority />
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="font-display text-3xl font-medium text-foreground text-balance">{meal.description}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>{meal.macro.kcal} kcal</span>
          <span>{meal.macro.protein} g proteiini</span>
        </div>
      </div>

      {meal.status !== "eaten" && (
        <Button size="lg" variant="outline" className="w-full" onClick={onSwap}>
          Vaihda ateria
        </Button>
      )}
    </div>
  )
}

function SwapView({ meal, onBack, onDone }: { meal: Meal; onBack: () => void; onDone: () => void }) {
  const alternatives = meal.alternatives ?? []
  return (
    <div className="flex flex-col gap-8">
      <button
        type="button"
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Takaisin
      </button>

      <h1 className="font-display text-2xl font-medium text-foreground text-balance">
        Vaihda tilalle
      </h1>

      <div className="flex flex-col gap-1">
        {alternatives.map((alt) => (
          <button
            key={alt}
            type="button"
            onClick={onDone}
            className="border-t border-border py-4 text-left font-display text-xl text-foreground/80 transition-colors first:border-t-0 hover:text-foreground"
          >
            {alt}
          </button>
        ))}
      </div>
    </div>
  )
}

function AskView({
  suggestion,
  onSwap,
  onBack,
  onChoose,
}: {
  suggestion: Meal
  onSwap: () => void
  onBack: () => void
  onChoose: () => void
}) {
  return (
    <div className="flex flex-col gap-8">
      <button
        type="button"
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Takaisin
      </button>

      <h1 className="font-display text-3xl font-medium text-foreground text-balance">Sinulle sopisi nyt...</h1>

      <motion.div
        key={suggestion.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
        className="flex flex-col gap-5"
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-muted">
          <Image src={suggestion.image} alt={suggestion.name} fill className="object-cover" />
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="font-display text-2xl font-medium text-foreground">{suggestion.name}</h2>
          <p className="text-sm text-muted-foreground">
            {suggestion.macro.kcal} kcal · {suggestion.macro.protein} g proteiinia
          </p>
        </div>
        <Button size="lg" className="w-full" onClick={onChoose}>
          Valitse
        </Button>
        <button
          type="button"
          onClick={onSwap}
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          Vaihda
        </button>
      </motion.div>
    </div>
  )
}
