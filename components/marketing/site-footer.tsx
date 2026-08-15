import Link from 'next/link'
import { Logo } from '@/components/logo'

const columns = [
  {
    title: 'Tuote',
    links: [
      { href: '/#tuote', label: 'Ominaisuudet' },
      { href: '/#miten-se-toimii', label: 'Miten toimii' },
      { href: '/hinnasto', label: 'Hinnasto' },
      { href: '/asenna', label: 'Asenna sovellus' },
    ],
  },
  {
    title: 'Tili',
    links: [
      { href: '/aloita', label: 'Aloita ilmaiseksi' },
      { href: '/kirjaudu', label: 'Kirjaudu' },
    ],
  },
  {
    title: 'Muut',
    links: [{ href: '/asetukset/tietosuoja', label: 'Tietosuoja' }],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-6 pt-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 pb-14 md:grid-cols-[1.2fr_repeat(3,minmax(0,0.6fr))]">
          <div>
            <Link href="/" className="inline-block opacity-90 transition-opacity hover:opacity-100">
              <Logo markClassName="size-7" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-pretty text-muted-foreground">
              Henkilökohtainen ruokavalio, viikkosuunnitelma ja ostoslista — ilman laskemista.
            </p>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="text-sm font-medium text-foreground">{col.title}</p>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex flex-col items-center gap-2 border-t border-border py-7 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <span>© 2026 ruokaval.io</span>
          <span>Tehty Suomessa suomalaiseen arkeen.</span>
        </div>

        <p
          aria-hidden="true"
          className="select-none overflow-hidden text-center font-display text-[18vw] font-semibold leading-[0.78] tracking-tight text-foreground/[0.05] md:text-[13rem]"
        >
          ruokaval.io
        </p>
      </div>
    </footer>
  )
}
