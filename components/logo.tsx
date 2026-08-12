import { cn } from '@/lib/utils'

/**
 * The mark is a small "plate" ring split into three arcs — the same visual
 * language as the macro rings used throughout the product (protein / carb /
 * fat). It's a literal, on-brand icon instead of an arbitrary letter tile.
 */
const RADIUS = 12
const CIRCUMFERENCE = 2 * Math.PI * RADIUS
const GAP = (6 / 360) * CIRCUMFERENCE

const SEGMENTS = [
  { ratio: 0.34, startDeg: 0, color: 'var(--color-protein)' },
  { ratio: 0.41, startDeg: 122.4, color: 'var(--color-carb)' },
  { ratio: 0.25, startDeg: 270, color: 'var(--color-fat)' },
]

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'relative inline-flex size-8 shrink-0 items-center justify-center rounded-xl bg-secondary',
        className,
      )}
      aria-hidden="true"
    >
      <svg viewBox="0 0 32 32" className="size-[70%] -rotate-90">
        <circle cx={16} cy={16} r={RADIUS} fill="none" stroke="var(--color-border)" strokeWidth={5} />
        {SEGMENTS.map((segment) => {
          const length = segment.ratio * CIRCUMFERENCE - GAP
          return (
            <circle
              key={segment.color}
              cx={16}
              cy={16}
              r={RADIUS}
              fill="none"
              stroke={segment.color}
              strokeWidth={5}
              strokeLinecap="round"
              strokeDasharray={`${length} ${CIRCUMFERENCE - length}`}
              transform={`rotate(${segment.startDeg} 16 16)`}
            />
          )
        })}
      </svg>
    </span>
  )
}

export function Logo({ className, markClassName }: { className?: string; markClassName?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <LogoMark className={markClassName} />
      <span className="font-display text-lg font-semibold tracking-tight text-foreground">
        ruokaval<span className="text-primary">.io</span>
      </span>
    </span>
  )
}
