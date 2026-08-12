import { cn } from '@/lib/utils'

interface CalorieRingProps {
  value: number
  target: number
  size?: number
  strokeWidth?: number
  className?: string
}

export function CalorieRing({
  value,
  target,
  size = 148,
  strokeWidth = 12,
  className,
}: CalorieRingProps) {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const progress = Math.min(value / target, 1)
  const offset = circumference * (1 - progress)
  const remaining = Math.max(target - value, 0)

  return (
    <div
      className={cn('relative inline-flex items-center justify-center', className)}
      style={{ width: size, height: size }}
      role="img"
      aria-label={`${value} kaloria syöty, tavoite ${target} kaloria`}
    >
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--color-secondary)"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-[stroke-dashoffset] duration-500 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-0.5 text-center">
        <span className="font-display text-2xl font-semibold tabular-nums text-foreground">
          {value.toLocaleString('fi-FI')}
        </span>
        <span className="text-xs text-muted-foreground">/ {target.toLocaleString('fi-FI')} kcal</span>
        <span className="mt-1 text-[11px] text-muted-foreground">
          {remaining > 0 ? `${remaining} kcal jäljellä` : 'Tavoite täynnä'}
        </span>
      </div>
    </div>
  )
}
