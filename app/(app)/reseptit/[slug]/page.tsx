import { notFound } from "next/navigation"
import { RecipeDetail } from "@/components/plan/recipe-detail"
import { recipes } from "@/lib/demo-data"

export default async function RecipeDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ from?: string }>
}) {
  const { slug } = await params
  const { from } = await searchParams
  const recipe = recipes.find((r) => r.slug === slug)

  if (!recipe) {
    notFound()
  }

  return <RecipeDetail recipe={recipe} backHref={from === "ruokavalio" ? "/ruokavalio" : "/reseptit"} />
}
