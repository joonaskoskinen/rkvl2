"use client"

import { cn } from "@/lib/utils"

const DIETS = ["Kaikkiruokainen", "Kasvispainotteinen", "Vegaaninen", "Vähähiilihydraattinen"]
const ALLERGIES = ["Laktoosi", "Gluteeni", "Pähkinät", "Äyriäiset"]

type Props = {
  dietPreferences: string[]
  allergies: string[]
  onChangeDiet: (v: string[]) => void
  onChangeAllergies: (v: string[]) => void
}

export function StepDiet({ dietPreferences, allergies, onChangeDiet, onChangeAllergies }: Props) {
  function toggle(list: string[], value: string, set: (v: string[]) => void) {
    set(list.includes(value) ? list.filter((v) => v !== value) : [...list, value])
  }

  return (
    <div className="flex flex-col gap-10">
      <h1 className="font-display text-3xl font-medium text-foreground text-balance sm:text-4xl">
        Ruokavaliosi
      </h1>

      <div className="flex flex-col gap-4">
        <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">Tyyli</span>
        <div className="flex flex-col gap-1">
          {DIETS.map((diet) => {
            const selected = dietPreferences.includes(diet)
            return (
              <button
                key={diet}
                type="button"
                onClick={() => toggle(dietPreferences, diet, onChangeDiet)}
                className={cn(
                  "border-b border-border py-3.5 text-left font-display text-lg transition-colors sm:text-xl",
                  selected ? "text-primary" : "text-foreground/70 hover:text-foreground",
                )}
              >
                {diet}
              </button>
            )
          })}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">Allergiat</span>
        <div className="flex flex-wrap gap-2">
          {ALLERGIES.map((allergy) => {
            const selected = allergies.includes(allergy)
            return (
              <button
                key={allergy}
                type="button"
                onClick={() => toggle(allergies, allergy, onChangeAllergies)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm transition-colors",
                  selected
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-foreground/70 hover:text-foreground",
                )}
              >
                {allergy}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
