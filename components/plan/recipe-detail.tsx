"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import { ArrowLeft } from "lucide-react"
import type { Recipe } from "@/lib/types"

export function RecipeDetail({ recipe, backHref = "/ruokavalio" }: { recipe: Recipe; backHref?: string }) {
  return (
    <div className="mx-auto w-full max-w-md px-6 pt-8 pb-20 sm:px-0">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
        <Link
          href={backHref}
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Takaisin
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-muted"
      >
        <Image src={recipe.image} alt={recipe.name} fill className="object-cover" priority />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="mt-7 flex flex-col gap-2"
      >
        <h1 className="font-display text-3xl font-medium text-balance text-foreground">{recipe.name}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>{recipe.macro.kcal} kcal</span>
          <span>{recipe.macro.protein} g proteiini</span>
          <span>{recipe.prepMinutes} min</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        className="mt-10 flex flex-col gap-3"
      >
        <span className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">Ainekset</span>
        <div className="flex flex-col">
          {recipe.ingredients.map((ing, i) => (
            <div
              key={ing.name}
              className={`flex items-center justify-between py-3 text-foreground ${i !== 0 ? "border-t border-border" : ""}`}
            >
              <span className="font-display text-base">{ing.name}</span>
              <span className="text-sm text-muted-foreground">{ing.amount}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
        className="mt-10 flex flex-col gap-3"
      >
        <span className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">Valmistus</span>
        <ol className="flex flex-col gap-4">
          {recipe.instructions.map((step, i) => (
            <li key={step} className="flex gap-4 text-foreground">
              <span className="font-display text-sm text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-base leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>
      </motion.div>
    </div>
  )
}
