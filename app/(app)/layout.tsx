import type { ReactNode } from "react"
import { AppNav } from "@/components/app/app-nav"

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-svh flex-col bg-background">
      <AppNav />
      <main className="flex-1 pb-24 md:pb-16">{children}</main>
    </div>
  )
}
