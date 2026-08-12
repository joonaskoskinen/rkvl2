export type Goal = 'lose' | 'gain' | 'maintain' | 'eat-better'

export type ActivityLevel = 'low' | 'light' | 'moderate' | 'high'

export type MealSlot = 'breakfast' | 'lunch' | 'snack' | 'dinner' | 'evening-snack'

export type MealStatus = 'eaten' | 'planned' | 'suggested'

export interface Macro {
  kcal: number
  protein: number
  carbs: number
  fat: number
}

export interface FoodItem {
  id: string
  name: string
  category: string
  servingLabel: string
  gramsPerServing: number
  per100g: Macro & { fiber: number }
}

export interface Meal {
  id: string
  slot: MealSlot
  time: string
  name: string
  description: string
  image: string
  macro: Macro
  status: MealStatus
  prepMinutes?: number
  alternatives?: string[]
}

export interface DayPlan {
  date: string
  label: string
  meals: Meal[]
}

export interface Recipe {
  id: string
  slug: string
  name: string
  image: string
  macro: Macro
  prepMinutes: number
  servings: number
  tags: string[]
  ingredients: { name: string; amount: string }[]
  instructions: string[]
}

export interface GroceryItem {
  id: string
  name: string
  quantity: string
  category: string
  checked: boolean
  approxPrice: number
}

export interface WeightEntry {
  date: string
  kg: number
}
