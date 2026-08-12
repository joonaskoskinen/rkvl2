"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { groceryList as initialGroceryList } from "@/lib/demo-data"
import type { GroceryItem } from "@/lib/types"

function groupByCategory(items: GroceryItem[]) {
  const groups = new Map<string, GroceryItem[]>()
  for (const item of items) {
    const list = groups.get(item.category) ?? []
    list.push(item)
    groups.set(item.category, list)
  }
  return Array.from(groups.entries())
}

export function GroceryListScreen() {
  const [items, setItems] = useState(initialGroceryList)

  function toggle(id: string) {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)))
  }

  const groups = groupByCategory(items)
  const remaining = items.filter((i) => !i.checked).length

  return (
    <div className="mx-auto w-full max-w-md px-6 pt-10 pb-16 sm:px-0">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col gap-1"
      >
        <h1 className="font-display text-4xl font-medium text-foreground">Ostoslista</h1>
        <p className="text-sm text-muted-foreground">{remaining} tuotetta jäljellä</p>
      </motion.div>

      <div className="mt-10 flex flex-col gap-9">
        {groups.map(([category, groupItems], gi) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06 * gi, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-1"
          >
            <span className="pb-2 text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
              {category}
            </span>
            {groupItems.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => toggle(item.id)}
                className={cn(
                  "flex items-center gap-4 border-border py-3.5 text-left",
                  i !== 0 && "border-t",
                )}
              >
                <span
                  className={cn(
                    "flex size-5 shrink-0 items-center justify-center rounded-full border transition-colors duration-200",
                    item.checked ? "border-primary bg-primary" : "border-muted-foreground/40",
                  )}
                >
                  <motion.span
                    initial={false}
                    animate={{ scale: item.checked ? 1 : 0, opacity: item.checked ? 1 : 0 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Check className="size-3 text-primary-foreground" strokeWidth={3} />
                  </motion.span>
                </span>
                <span
                  className={cn(
                    "flex-1 font-display text-lg transition-colors duration-300",
                    item.checked ? "text-muted-foreground/60 line-through" : "text-foreground",
                  )}
                >
                  {item.name}
                </span>
                <span
                  className={cn(
                    "text-sm tabular-nums transition-colors duration-300",
                    item.checked ? "text-muted-foreground/50" : "text-muted-foreground",
                  )}
                >
                  {item.quantity}
                </span>
              </button>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
