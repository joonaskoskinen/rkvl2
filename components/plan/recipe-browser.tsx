"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import { recipes } from "@/lib/demo-data"

export function RecipeBrowser() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pt-10 pb-16 sm:px-8">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-4xl font-medium text-balance text-foreground"
      >
        Reseptit
      </motion.h1>

      <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3">
        {recipes.map((recipe, i) => (
          <motion.div
            key={recipe.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.04 * i, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href={`/reseptit/${recipe.slug}`} className="group flex flex-col gap-3">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-muted">
                <Image
                  src={recipe.image}
                  alt={recipe.name}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-display text-base text-foreground text-balance">{recipe.name}</span>
                <span className="text-xs text-muted-foreground">
                  {recipe.macro.kcal} kcal · {recipe.prepMinutes} min
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
