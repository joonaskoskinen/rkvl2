'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/logo'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/#tuote', label: 'Tuote' },
  { href: '/#miten-se-toimii', label: 'Miten toimii' },
  { href: '/hinnasto', label: 'Hinnasto' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4"
    >
      <div
        className={cn(
          'mx-auto flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
          scrolled
            ? 'mt-3 h-14 max-w-4xl rounded-full border border-border/80 bg-background/85 px-4 pl-5 shadow-[0_8px_30px_-12px_rgb(0_0_0/0.12)] backdrop-blur-xl'
            : 'mt-0 h-16 max-w-6xl border border-transparent bg-transparent px-6',
        )}
      >
        <Link href="/" className="opacity-90 transition-opacity hover:opacity-100">
          <Logo markClassName="size-7" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/kirjaudu"
            className="hidden rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground sm:inline-block"
          >
            Kirjaudu
          </Link>
          <Button size="sm" render={<Link href="/aloita" />} nativeButton={false} className="rounded-full px-5">
            Aloita
          </Button>
        </div>
      </div>
    </motion.header>
  )
}
