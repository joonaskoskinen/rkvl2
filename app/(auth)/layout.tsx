import type { ReactNode } from "react"
import Link from "next/link"
import Image from "next/image"
import { Logo } from "@/components/logo"

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-8 px-6 py-8 sm:px-10 lg:px-16">
        <Link href="/" className="inline-flex">
          <Logo />
        </Link>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-sm">{children}</div>
        </div>
      </div>
      <div className="relative hidden lg:block">
        <Image
          src="/images/food/lohi-kasvikset.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-12">
          <p className="max-w-md text-balance font-display text-2xl font-medium text-primary-foreground">
            {'"Ensimmäistä kertaa syömiseni tuntuu suunnitelmalta, ei arvailulta."'}
          </p>
          <p className="mt-3 text-sm text-primary-foreground/80">Elina, käyttäjä Tampereelta</p>
        </div>
      </div>
    </div>
  )
}
