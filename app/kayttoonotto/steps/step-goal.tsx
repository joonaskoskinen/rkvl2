"use client"

import { cn } from "@/lib/utils"
import { GOAL_LABELS, type Goal } from "@/lib/onboarding-store"

const GOALS: { value: Goal; title: string }[] = [
  { value: "lose", title: GOAL_LABELS.lose },
  { value: "gain", title: GOAL_LABELS.gain },
  { value: "maintain", title: GOAL_LABELS.maintain },
]

export function StepGoal({ value, onChange }: { value: Goal | null; onChange: (goal: Goal) => void }) {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="font-display text-3xl font-medium text-foreground text-balance sm:text-4xl">
        Mikä on tavoitteesi?
      </h1>
      <div className="flex flex-col gap-1">
        {GOALS.map((goal) => {
          const selected = value === goal.value
          return (
            <button
              key={goal.value}
              type="button"
              onClick={() => onChange(goal.value)}
              className={cn(
                "border-b border-border py-4 text-left font-display text-xl transition-colors sm:text-2xl",
                selected ? "text-primary" : "text-foreground/70 hover:text-foreground",
              )}
            >
              {goal.title}
            </button>
          )
        })}
      </div>
    </div>
  )
}
