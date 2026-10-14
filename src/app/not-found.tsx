import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid min-h-[80svh] place-items-center px-6 pt-24 text-center">
      <div>
        <p className="text-lg text-mute">Fehler 404</p>
        <h1 className="display mt-3">Diese Seite gibt es nicht.</h1>
        <p className="lead mx-auto mt-6 max-w-md">Der Link ist veraltet oder wurde falsch eingegeben. Hier geht es weiter:</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn btn-primary">Zur Startseite</Link>
          <Link href="/kontakt" className="btn btn-secondary">Kontakt aufnehmen</Link>
        </div>
      </div>
    </section>
  );
}
