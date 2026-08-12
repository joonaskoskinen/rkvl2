import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"

export default function LoginPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="font-display text-2xl font-semibold text-foreground">Tervetuloa takaisin</h1>
        <p className="text-sm text-muted-foreground">Kirjaudu sisään jatkaaksesi ruokavaliotasi.</p>
      </div>
      <form className="flex flex-col gap-6">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="email">Sähköposti</FieldLabel>
            <Input id="email" type="email" placeholder="etunimi@esimerkki.fi" required autoComplete="email" />
          </Field>
          <Field>
            <div className="flex items-center justify-between">
              <FieldLabel htmlFor="password">Salasana</FieldLabel>
              <Link href="#" className="text-xs font-medium text-primary hover:underline">
                Unohtuiko salasana?
              </Link>
            </div>
            <Input id="password" type="password" required autoComplete="current-password" />
          </Field>
        </FieldGroup>
        <Button size="lg" render={<Link href="/dashboard" />} nativeButton={false}>
          Kirjaudu sisään
        </Button>
      </form>
      <p className="text-center text-sm text-muted-foreground">
        {"Ei tiliä? "}
        <Link href="/aloita" className="font-medium text-primary hover:underline">
          Luo tili
        </Link>
      </p>
    </div>
  )
}
