import { Check, Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import type { MealStatus } from '@/lib/types'

export function MealStatusBadge({ status }: { status: MealStatus }) {
  if (status === 'eaten') {
    return (
      <Badge className="gap-1 border-transparent bg-accent text-accent-foreground">
        <Check className="size-3" />
        Syöty
      </Badge>
    )
  }

  if (status === 'suggested') {
    return (
      <Badge variant="secondary" className="gap-1">
        <Sparkles className="size-3" />
        Sopisi tähän päivään
      </Badge>
    )
  }

  return <Badge variant="outline">Suunniteltu</Badge>
}
