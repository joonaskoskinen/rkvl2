import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <span className="font-display text-sm text-muted-foreground">ruokaval.io</span>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <Link href="/asenna" className="transition-colors hover:text-foreground">
            Asenna sovellus
          </Link>
          <Link href="/asetukset/tietosuoja" className="transition-colors hover:text-foreground">
            Tietosuoja
          </Link>
          <Link href="/kirjaudu" className="transition-colors hover:text-foreground">
            Kirjaudu
          </Link>
        </div>
        <span className="text-xs text-muted-foreground">© 2026</span>
      </div>
    </footer>
  )
}
