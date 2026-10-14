import type { Metadata } from "next";
import { COMPANY } from "@/lib/data";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  alternates: { canonical: "/datenschutz" },
  robots: { index: false, follow: true },
};

/*
 * HINWEIS: Mustertext für diese Website-Variante (kein Tracking, keine externen Einbindungen).
 * Vor Livegang durch Inhaberin / Datenschutzbeauftragte bzw. Rechtsberatung prüfen lassen und
 * an den tatsächlichen Hoster sowie den Mail-Dienst (z. B. Resend) anpassen.
 */
export default function Page() {
  return (
    <section className="pb-24 pt-32 sm:pt-40">
      <div className="wrap-narrow">
        <h1 className="text-4xl sm:text-5xl">Datenschutzerklärung</h1>

        <div className="mt-10 space-y-8 text-[17px] leading-relaxed text-ink/90 [&_h2]:mb-2 [&_h2]:text-2xl [&_a]:text-accent [&_a]:underline [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-1">
          <div>
            <h2>1. Verantwortliche</h2>
            <p>
              {COMPANY.owner}, {COMPANY.name}, {COMPANY.street}, {COMPANY.zip} {COMPANY.city} / {COMPANY.district}
              <br />
              Telefon: {COMPANY.phone} · E-Mail: <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            </p>
          </div>
          <div>
            <h2>2. Hosting und Server-Logfiles</h2>
            <p>
              Beim Aufruf dieser Website werden technisch notwendige Daten (IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Browsertyp) in Server-Logfiles verarbeitet, um die Website sicher und stabil bereitzustellen (Art. 6 Abs. 1 lit. f DSGVO). Die Logfiles werden nach kurzer Zeit gelöscht. Hoster: [Hoster eintragen].
            </p>
          </div>
          <div>
            <h2>3. Kontaktaufnahme und Kontaktformular</h2>
            <p>
              Wenn Sie uns per Formular, E-Mail oder Telefon kontaktieren, verarbeiten wir Ihre Angaben (Name, E-Mail, ggf. Telefon, Fahrzeugdaten, Nachricht) zur Bearbeitung Ihrer Anfrage und für mögliche Anschlussfragen (Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO; bei Ihrer Einwilligung lit. a). Der Versand der Formularnachricht erfolgt über den E-Mail-Dienstleister [Resend, Inc. – Auftragsverarbeitung prüfen]. Wir löschen die Daten, sobald sie für den Zweck nicht mehr erforderlich sind und keine Aufbewahrungspflichten bestehen.
            </p>
          </div>
          <div>
            <h2>4. Bewerbungen</h2>
            <p>
              Bewerbungsunterlagen verarbeiten wir ausschließlich zur Durchführung des Bewerbungsverfahrens (§ 26 BDSG). Sie werden nach Abschluss des Verfahrens gelöscht, sofern Sie keiner längeren Speicherung zugestimmt haben.
            </p>
          </div>
          <div>
            <h2>5. Cookies, Tracking, externe Dienste</h2>
            <p>
              Diese Website verwendet keine Tracking- oder Marketing-Cookies und bindet keine externen Karten, Videos oder Schriftarten von Drittanbietern nach, die Ihre IP-Adresse übertragen. Schriftarten werden beim Build lokal ausgeliefert. Der Link „Route planen“ öffnet Google Maps erst nach Ihrem Klick in einem neuen Tab; es gelten dann die Datenschutzbestimmungen von Google.
            </p>
          </div>
          <div>
            <h2>6. Ihre Rechte</h2>
            <p>Sie haben das Recht auf:</p>
            <ul>
              <li>Auskunft, Berichtigung und Löschung Ihrer Daten</li>
              <li>Einschränkung der Verarbeitung und Datenübertragbarkeit</li>
              <li>Widerspruch gegen Verarbeitungen auf Grundlage berechtigter Interessen</li>
              <li>Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft</li>
              <li>Beschwerde bei einer Aufsichtsbehörde, z. B. dem Landesbeauftragten für den Datenschutz und die Informationsfreiheit Baden-Württemberg</li>
            </ul>
          </div>
          <p className="text-sm text-mute">Stand: Oktober 2026</p>
        </div>
      </div>
    </section>
  );
}
