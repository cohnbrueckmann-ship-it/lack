import type { Metadata } from "next";
import { COMPANY } from "@/lib/data";

export const metadata: Metadata = {
  title: "Impressum",
  alternates: { canonical: "/impressum" },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <section className="pb-24 pt-32 sm:pt-40">
      <div className="wrap-narrow">
        <h1 className="text-4xl sm:text-5xl">Impressum</h1>

        <div className="mt-10 space-y-8 text-[17px] leading-relaxed text-ink/90 [&_h2]:mb-2 [&_h2]:text-2xl [&_h3]:mb-1 [&_h3]:mt-6 [&_h3]:text-xl [&_a]:text-accent [&_a]:underline">
          <div>
            <h2>Angaben gemäß § 5 DDG</h2>
            <p>
              {COMPANY.owner}
              <br />
              {COMPANY.name}
              <br />
              {COMPANY.street}
              <br />
              {COMPANY.zip} {COMPANY.city} / {COMPANY.district}
            </p>
          </div>
          <div>
            <h2>Kontakt</h2>
            <p>
              Telefon: {COMPANY.phone}
              <br />
              Telefax: {COMPANY.fax}
              <br />
              E-Mail: <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            </p>
          </div>
          {/* TODO (Inhaberin prüfen): Umsatzsteuer-ID, zuständige Handwerkskammer und Berufsbezeichnung ergänzen, falls zutreffend. */}
          <div>
            <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <p>
              {COMPANY.owner}
              <br />
              {COMPANY.street}, {COMPANY.zip} {COMPANY.city} / {COMPANY.district}
            </p>
          </div>
          <div>
            <h2>Streitschlichtung</h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
          <div>
            <h2>Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben unberührt. Eine Haftung ist erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich; bei Bekanntwerden entsprechender Rechtsverletzungen entfernen wir diese Inhalte umgehend.
            </p>
          </div>
          <div>
            <h2>Haftung für Links</h2>
            <p>
              Unser Angebot enthält ggf. Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich. Bei Bekanntwerden von Rechtsverletzungen entfernen wir derartige Links umgehend.
            </p>
          </div>
          <div>
            <h2>Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
