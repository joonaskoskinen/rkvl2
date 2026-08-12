'use client'

import Image from 'next/image'
import { Flame, Beef, Clock, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { MealStatusBadge } from '@/components/meal/meal-status-badge'
import type { Meal } from '@/lib/types'
import { cn } from '@/lib/utils'

interface MealCardProps {
  meal: Meal
  onToggleEaten?: (id: string) => void
  onOpenSwap?: (meal: Meal) => void
  className?: string
}

export function MealCard({ meal, onToggleEaten, onOpenSwap, className }: MealCardProps) {
  return (
    <div className={cn('flex gap-4', className)}>
      <div className="flex w-14 shrink-0 flex-col items-center pt-1">
        <span className="text-xs font-medium tabular-nums text-muted-foreground">{meal.time}</span>
        <div className="mt-2 h-full w-px bg-border" />
      </div>

      <div className="flex flex-1 gap-4 rounded-lg border border-border bg-card p-4 pb-5">
        <div className="relative size-20 shrink-0 overflow-hidden rounded-md bg-muted sm:size-24">
          <Image
            src={meal.image || '/placeholder.svg'}
            alt={meal.description}
            fill
            sizes="96px"
            className="object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between gap-2">
          <div className="flex flex-col gap-1">
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {meal.name}
              </p>
              <MealStatusBadge status={meal.status} />
            </div>
            <p className="font-display text-base font-semibold text-foreground text-balance">
              {meal.description}
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <Flame className="size-3.5 text-fat" />
                {meal.macro.kcal} kcal
              </span>
              <span className="inline-flex items-center gap-1">
                <Beef className="size-3.5 text-protein" />
                {meal.macro.protein} g proteiinia
              </span>
              {meal.prepMinutes && (
                <span className="inline-flex items-center gap-1">
                  <Clock className="size-3.5" />
                  {meal.prepMinutes} min
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {meal.status !== 'eaten' ? (
              <Button size="sm" onClick={() => onToggleEaten?.(meal.id)}>
                Merkitse syödyksi
              </Button>
            ) : (
              <Button size="sm" variant="outline" onClick={() => onToggleEaten?.(meal.id)}>
                Peru merkintä
              </Button>
            )}
            {(meal.alternatives?.length ?? 0) > 0 && (
              <Button size="sm" variant="ghost" className="gap-0.5" onClick={() => onOpenSwap?.(meal)}>
                Vaihda ateria
                <ChevronRight className="size-3.5" data-icon="inline-end" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
