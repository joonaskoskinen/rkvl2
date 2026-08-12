"use client"

import { motion } from "motion/react"
import { Line, LineChart, YAxis } from "recharts"
import { ChartContainer, type ChartConfig } from "@/components/ui/chart"
import { weightHistory } from "@/lib/demo-data"

const chartConfig: ChartConfig = {
  kg: {
    label: "Paino",
    color: "var(--chart-1)",
  },
}

export function ProgressScreen() {
  const first = weightHistory[0].kg
  const last = weightHistory[weightHistory.length - 1].kg
  const delta = last - first

  return (
    <div className="mx-auto w-full max-w-md px-6 pt-10 pb-16 sm:px-0">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-4xl font-medium text-foreground"
      >
        Edistyminen
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="mt-8 font-display text-6xl font-medium tabular-nums text-foreground"
      >
        {delta > 0 ? "+" : ""}
        {delta.toLocaleString("fi-FI", { minimumFractionDigits: 1, maximumFractionDigits: 1 })} kg
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-8 h-40 w-full"
      >
        <ChartContainer config={chartConfig} className="h-full w-full">
          <LineChart data={weightHistory} margin={{ top: 8, right: 8, bottom: 0, left: 8 }}>
            <YAxis hide domain={["dataMin - 0.5", "dataMax + 0.5"]} />
            <Line
              type="monotone"
              dataKey="kg"
              stroke="var(--color-kg)"
              strokeWidth={2.5}
              dot={false}
              isAnimationActive={true}
            />
          </LineChart>
        </ChartContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
        className="mt-12 flex items-center gap-10 border-t border-border pt-8"
      >
        <div className="flex flex-col gap-1">
          <span className="font-display text-3xl font-medium tabular-nums text-foreground">28</span>
          <span className="text-sm text-muted-foreground">päivää</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-display text-3xl font-medium tabular-nums text-foreground">92 %</span>
          <span className="text-sm text-muted-foreground">ruokavaliosta toteutui</span>
        </div>
      </motion.div>
    </div>
  )
}
