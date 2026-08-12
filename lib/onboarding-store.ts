export type Goal = "lose" | "maintain" | "gain"
export type ActivityLevel = "sedentary" | "light" | "moderate" | "active"
export type Sex = "female" | "male"

export const GOAL_LABELS: Record<Goal, string> = {
  lose: "Pudottaa painoa",
  gain: "Kasvattaa lihasta",
  maintain: "Ylläpitää painoa",
}

export const ACTIVITY_LABELS: Record<ActivityLevel, string> = {
  sedentary: "Istumatyö",
  light: "Kevyt liikunta",
  moderate: "Kohtalainen liikunta",
  active: "Runsas liikunta",
}

export type OnboardingAnswers = {
  goal: Goal | null
  sex: Sex | null
  age: number
  heightCm: number
  weightKg: number
  activityLevel: ActivityLevel | null
  dietPreferences: string[]
  allergies: string[]
  mealsPerDay: number
}

export const defaultOnboardingAnswers: OnboardingAnswers = {
  goal: null,
  sex: null,
  age: 30,
  heightCm: 170,
  weightKg: 75,
  activityLevel: null,
  dietPreferences: [],
  allergies: [],
  mealsPerDay: 4,
}

const activityMultiplier: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
}

const goalAdjustment: Record<Goal, number> = {
  lose: -500,
  maintain: 0,
  gain: 350,
}

export function estimateDailyCalories(answers: OnboardingAnswers): number {
  const { sex, age, heightCm, weightKg, activityLevel, goal } = answers
  if (!sex || !activityLevel || !goal) return 2200

  // Mifflin-St Jeor
  const base =
    sex === "male"
      ? 10 * weightKg + 6.25 * heightCm - 5 * age + 5
      : 10 * weightKg + 6.25 * heightCm - 5 * age - 161

  const tdee = base * activityMultiplier[activityLevel]
  const target = tdee + goalAdjustment[goal]
  return Math.round(target / 10) * 10
}

export function estimateMacros(calories: number, goal: Goal | null) {
  const proteinRatio = goal === "lose" ? 0.35 : goal === "gain" ? 0.28 : 0.3
  const fatRatio = 0.3
  const carbRatio = 1 - proteinRatio - fatRatio

  return {
    protein: Math.round((calories * proteinRatio) / 4),
    fat: Math.round((calories * fatRatio) / 9),
    carbs: Math.round((calories * carbRatio) / 4),
  }
}

const STORAGE_KEY = "ruokavalio.onboardingAnswers"

/**
 * Persists the completed onboarding answers to localStorage so the rest of the
 * app (dashboard, profile, etc.) can build a real daily target instead of demo data.
 */
export function saveOnboardingAnswers(answers: OnboardingAnswers) {
  if (typeof window === "undefined") return
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(answers))
  } catch {
    // Storage might be unavailable (private mode, quota, etc.) — fail silently.
  }
}

export function loadOnboardingAnswers(): OnboardingAnswers | null {
  if (typeof window === "undefined") return null
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return { ...defaultOnboardingAnswers, ...JSON.parse(raw) } as OnboardingAnswers
  } catch {
    return null
  }
}
