"use client"

import { useEffect, useState } from "react"
import { dailyTarget as demoDailyTarget } from "@/lib/demo-data"
import {
  ACTIVITY_LABELS,
  GOAL_LABELS,
  estimateDailyCalories,
  estimateMacros,
  loadOnboardingAnswers,
  type OnboardingAnswers,
} from "@/lib/onboarding-store"

type OnboardingProfile = {
  /** True once the client has checked localStorage (avoids a flash of the wrong number). */
  isReady: boolean
  /** True if the user has actually completed the onboarding wizard. */
  hasCompletedOnboarding: boolean
  answers: OnboardingAnswers | null
  dailyTarget: { kcal: number; protein: number; carbs: number; fat: number }
  goalLabel: string | null
  activityLabel: string | null
}

/**
 * Reads the onboarding answers saved to localStorage and derives the real daily
 * calorie/macro target from them. Falls back to the demo target when the user
 * hasn't completed onboarding yet (e.g. they navigated straight to /dashboard).
 */
export function useOnboardingProfile(): OnboardingProfile {
  const [answers, setAnswers] = useState<OnboardingAnswers | null>(null)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    setAnswers(loadOnboardingAnswers())
    setIsReady(true)
  }, [])

  if (!answers) {
    return {
      isReady,
      hasCompletedOnboarding: false,
      answers: null,
      dailyTarget: demoDailyTarget,
      goalLabel: null,
      activityLabel: null,
    }
  }

  const kcal = estimateDailyCalories(answers)
  const macros = estimateMacros(kcal, answers.goal)

  return {
    isReady,
    hasCompletedOnboarding: true,
    answers,
    dailyTarget: { kcal, protein: macros.protein, carbs: macros.carbs, fat: macros.fat },
    goalLabel: answers.goal ? GOAL_LABELS[answers.goal] : null,
    activityLabel: answers.activityLevel ? ACTIVITY_LABELS[answers.activityLevel] : null,
  }
}
