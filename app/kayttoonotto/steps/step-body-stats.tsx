"use client"

import { cn } from "@/lib/utils"
import type { OnboardingAnswers, Sex } from "@/lib/onboarding-store"

type Props = {
  answers: OnboardingAnswers
  onChange: <K extends keyof OnboardingAnswers>(key: K, value: OnboardingAnswers[K]) => void
}

export function StepBodyStats({ answers, onChange }: Props) {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="font-display text-3xl font-medium text-foreground text-balance sm:text-4xl">
        Kerro kehotietosi
      </h1>

      <div className="flex gap-1">
        {(["female", "male"] as Sex[]).map((sex) => (
          <button
            key={sex}
            type="button"
            onClick={() => onChange("sex", sex)}
            className={cn(
              "flex-1 border-b py-4 text-center font-display text-xl transition-colors sm:text-2xl",
              answers.sex === sex
                ? "border-primary text-primary"
                : "border-border text-foreground/70 hover:text-foreground",
            )}
          >
            {sex === "female" ? "Nainen" : "Mies"}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        <NumberField
          label="Ikä"
          value={answers.age}
          onChange={(v) => onChange("age", v)}
          min={13}
          max={100}
        />
        <NumberField
          label="Pituus"
          suffix="cm"
          value={answers.heightCm}
          onChange={(v) => onChange("heightCm", v)}
          min={100}
          max={230}
        />
        <NumberField
          label="Paino"
          suffix="kg"
          value={answers.weightKg}
          onChange={(v) => onChange("weightKg", v)}
          min={30}
          max={250}
        />
      </div>
    </div>
  )
}

function NumberField({
  label,
  value,
  onChange,
  min,
  max,
  suffix,
}: {
  label: string
  value: number
  onChange: (v: number) => void
  min: number
  max: number
  suffix?: string
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">{label}</span>
      <div className="flex items-baseline gap-1 border-b border-border pb-2">
        <input
          type="number"
          inputMode="numeric"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(Number(e.target.value) || 0)}
          className="w-full bg-transparent font-display text-3xl font-medium text-foreground outline-none"
        />
        {suffix && <span className="text-sm text-muted-foreground">{suffix}</span>}
      </div>
    </label>
  )
}
