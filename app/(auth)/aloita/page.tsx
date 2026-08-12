import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field"

export default function SignUpPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="font-display text-2xl font-semibold text-foreground">Luo tilisi</h1>
        <p className="text-sm text-muted-foreground">
          Aloita ilmainen kokeilu ja saat oman ruokavalion muutamassa minuutissa.
        </p>
      </div>
      <form className="flex flex-col gap-6">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="name">Koko nimi</FieldLabel>
            <Input id="name" placeholder="Maria Virtanen" required autoComplete="name" />
          </Field>
          <Field>
            <FieldLabel htmlFor="email">Sähköposti</FieldLabel>
            <Input id="email" type="email" placeholder="etunimi@esimerkki.fi" required autoComplete="email" />
          </Field>
          <Field>
            <FieldLabel htmlFor="password">Salasana</FieldLabel>
            <Input id="password" type="password" required autoComplete="new-password" />
            <FieldDescription>Vähintään 8 merkkiä.</FieldDescription>
          </Field>
        </FieldGroup>
        <Button size="lg" render={<Link href="/kayttoonotto" />} nativeButton={false}>
          Luo tili ja aloita
        </Button>
      </form>
      <p className="text-center text-xs text-muted-foreground">
        Jatkamalla hyväksyt{" "}
        <Link href="#" className="font-medium text-foreground hover:underline">
          käyttöehdot
        </Link>{" "}
        ja{" "}
        <Link href="#" className="font-medium text-foreground hover:underline">
          tietosuojaselosteen
        </Link>
        .
      </p>
      <p className="text-center text-sm text-muted-foreground">
        {"Onko sinulla jo tili? "}
        <Link href="/kirjaudu" className="font-medium text-primary hover:underline">
          Kirjaudu sisään
        </Link>
      </p>
    </div>
  )
}
