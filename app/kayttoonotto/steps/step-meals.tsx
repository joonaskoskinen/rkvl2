"use client"

import { cn } from "@/lib/utils"

const OPTIONS = [3, 4, 5, 6]

export function StepMeals({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="font-display text-3xl font-medium text-foreground text-balance sm:text-4xl">
        Montako ateriaa päivässä?
      </h1>
      <div className="flex items-center justify-between gap-2">
        {OPTIONS.map((count) => {
          const selected = value === count
          return (
            <button
              key={count}
              type="button"
              onClick={() => onChange(count)}
              className={cn(
                "flex aspect-square flex-1 items-center justify-center rounded-full border font-display text-2xl font-medium transition-colors",
                selected
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-foreground/70 hover:border-primary/50 hover:text-foreground",
              )}
            >
              {count}
            </button>
          )
        })}
      </div>
    </div>
  )
}
