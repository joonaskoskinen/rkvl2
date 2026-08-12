"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { AnimatePresence, motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { ArrowRight, Check } from "lucide-react"
import {
  type ActivityLevel,
  type Goal,
  type OnboardingAnswers,
  defaultOnboardingAnswers,
  estimateDailyCalories,
  estimateMacros,
  saveOnboardingAnswers,
} from "@/lib/onboarding-store"
import { StepGoal } from "./steps/step-goal"
import { StepBodyStats } from "./steps/step-body-stats"
import { StepActivity } from "./steps/step-activity"
import { StepDiet } from "./steps/step-diet"
import { StepMeals } from "./steps/step-meals"
import { StepResult } from "./steps/step-result"

const TOTAL_STEPS = 6

export function OnboardingWizard() {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [direction, setDirection] = useState(1)
  const [answers, setAnswers] = useState<OnboardingAnswers>(defaultOnboardingAnswers)

  const calories = useMemo(() => estimateDailyCalories(answers), [answers])
  const macros = useMemo(() => estimateMacros(calories, answers.goal), [calories, answers.goal])

  function update<K extends keyof OnboardingAnswers>(key: K, value: OnboardingAnswers[K]) {
    setAnswers((prev) => ({ ...prev, [key]: value }))
  }

  function canAdvance() {
    if (step === 0) return answers.goal !== null
    if (step === 1) return answers.sex !== null
    if (step === 2) return answers.activityLevel !== null
    return true
  }

  function goNext() {
    if (step < TOTAL_STEPS - 1) {
      setDirection(1)
      setStep((s) => s + 1)
    }
  }

  function goBack() {
    if (step > 0) {
      setDirection(-1)
      setStep((s) => s - 1)
    }
  }

  const isLastStep = step === TOTAL_STEPS - 1

  function finishOnboarding() {
    saveOnboardingAnswers(answers)
    router.push("/dashboard")
  }

  return (
    <div className="flex min-h-svh flex-col bg-background">
      <header className="flex items-center justify-between px-6 py-6 sm:px-10">
        <Link href="/" className="opacity-80 transition-opacity hover:opacity-100">
          <Logo />
        </Link>
        {!isLastStep && (
          <button
            type="button"
            onClick={goBack}
            className={
              step === 0
                ? "invisible text-sm text-muted-foreground"
                : "text-sm text-muted-foreground transition-colors hover:text-foreground"
            }
          >
            Takaisin
          </button>
        )}
      </header>

      {!isLastStep && (
        <div className="mx-auto flex w-full max-w-md items-center gap-1.5 px-6 sm:px-0">
          {Array.from({ length: TOTAL_STEPS - 1 }).map((_, i) => (
            <div key={i} className="h-[3px] flex-1 overflow-hidden rounded-full bg-border">
              <motion.div
                className="h-full bg-primary"
                initial={false}
                animate={{ scaleX: i <= step ? 1 : 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: "left", originX: 0 }}
              />
            </div>
          ))}
        </div>
      )}

      <main className="flex flex-1 items-center justify-center overflow-hidden px-6 py-10 sm:px-10">
        <div className="relative w-full max-w-md">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={step}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 24 : -24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -24 : 24 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {step === 0 && <StepGoal value={answers.goal} onChange={(goal: Goal) => update("goal", goal)} />}
              {step === 1 && <StepBodyStats answers={answers} onChange={update} />}
              {step === 2 && (
                <StepActivity
                  value={answers.activityLevel}
                  onChange={(level: ActivityLevel) => update("activityLevel", level)}
                />
              )}
              {step === 3 && (
                <StepDiet
                  dietPreferences={answers.dietPreferences}
                  allergies={answers.allergies}
                  onChangeDiet={(v) => update("dietPreferences", v)}
                  onChangeAllergies={(v) => update("allergies", v)}
                />
              )}
              {step === 4 && <StepMeals value={answers.mealsPerDay} onChange={(v) => update("mealsPerDay", v)} />}
              {step === 5 && <StepResult calories={calories} macros={macros} goal={answers.goal} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <footer className="px-6 py-8 sm:px-10">
        <div className="mx-auto w-full max-w-md">
          {isLastStep ? (
            <Button size="lg" className="w-full" onClick={finishOnboarding}>
              <Check data-icon="inline-start" />
              Siirry omaan ruokavalioon
            </Button>
          ) : (
            <Button size="lg" className="w-full" onClick={goNext} disabled={!canAdvance()}>
              Jatka
              <ArrowRight data-icon="inline-end" />
            </Button>
          )}
        </div>
      </footer>
    </div>
  )
}
