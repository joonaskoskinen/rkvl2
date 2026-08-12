import { cn } from '@/lib/utils'

interface MacroBarProps {
  label: string
  value: number
  target: number
  unit?: string
  colorVar: 'protein' | 'carb' | 'fat'
  className?: string
}

const colorClass: Record<MacroBarProps['colorVar'], string> = {
  protein: 'bg-protein',
  carb: 'bg-carb',
  fat: 'bg-fat',
}

export function MacroBar({
  label,
  value,
  target,
  unit = 'g',
  colorVar,
  className,
}: MacroBarProps) {
  const progress = Math.min((value / target) * 100, 100)

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-medium text-foreground">{label}</span>
        <span className="text-sm text-muted-foreground tabular-nums">
          {value}
          {unit} / {target}
          {unit}
        </span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className={cn('h-full rounded-full transition-[width] duration-500 ease-out', colorClass[colorVar])}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}
