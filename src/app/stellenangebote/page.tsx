import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { CheckIcon } from "@/components/Icons";
import { COMPANY, HERO_IMAGE, SITE_URL } from "@/lib/data";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Stellenangebote – Fahrzeuglackierer (m/w/d) in Mosbach",
  "Wir suchen Verstärkung: Fahrzeuglackierer (m/w/d) in Vollzeit bei der Autolackiererei Müller in Mosbach-Neckarelz. Familiäre Atmosphäre, moderne Arbeitsplätze, Weiterbildung.",
  "/stellenangebote"
);

// TODO: Datum der Veröffentlichung der Stelle pflegen (Pflichtfeld für Google for Jobs).
const JOB_DATE_POSTED = "2026-10-01";

const OFFER = [
  "Anstellung in Vollzeit",
  "Angenehmes Arbeitsklima in familiärer Atmosphäre",
  "Interessante und abwechslungsreiche Projekte",
  "Moderne Arbeitsplätze",
  "Diverse Weiterbildungsmaßnahmen",
  "Gute und leistungsgerechte Entlohnung",
];
const TASKS = [
  "Ausführen von Demontage- und Montagearbeiten",
  "Schleifen, Grundieren, Spachteln, Füllern",
  "Lackieren von Fahrzeugen und Fahrzeugteilen",
  "Finisharbeiten",
  "Qualitätskontrollen",
];
const PROFILE = [
  "Abgeschlossene Berufsausbildung als Fahrzeuglackierer, mit oder ohne Berufserfahrung",
  "Motivation und Leistungsbereitschaft",
  "Teamfähigkeit",
  "Freude an der Arbeit mit Fahrzeugen",
  "Genaue, saubere und selbstständige Arbeitsweise",
];

const jobSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: "Fahrzeuglackierer (m/w/d)",
  description:
    "<p>Zur Verstärkung unseres Teams suchen wir zum nächstmöglichen Zeitpunkt einen Fahrzeuglackierer (m/w/d) in Vollzeit.</p><p>Aufgaben: " +
    TASKS.join("; ") +
    ".</p><p>Wir bieten: " +
    OFFER.join("; ") +
    ".</p><p>Anforderungen: " +
    PROFILE.join("; ") +
    ".</p>",
  datePosted: JOB_DATE_POSTED,
  employmentType: "FULL_TIME",
  hiringOrganization: { "@type": "Organization", name: COMPANY.name, sameAs: SITE_URL, logo: `${SITE_URL}/icon.svg` },
  jobLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.street,
      postalCode: COMPANY.zip,
      addressLocality: `${COMPANY.city}-${COMPANY.district}`,
      addressRegion: "Baden-Württemberg",
      addressCountry: "DE",
    },
  },
};

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl bg-mist p-7 sm:p-9">
      <h3 className="text-2xl">{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-3 text-[17px] leading-snug">
            <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" /> {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <PageHero
        title="Wir suchen Verstärkung."
        intro="Zur Verstärkung unseres Teams suchen wir zum nächstmöglichen Zeitpunkt einen Fahrzeuglackierer (m/w/d). Es gibt viel zu tun – packen wir es gemeinsam an."
        crumbs={[{ name: "Stellenangebote", path: "/stellenangebote" }]}
      />

      <section className="section">
        <div className="wrap">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-mist">
                <Image src={HERO_IMAGE} alt="Team-Arbeitsplatz bei der Autolackiererei Müller" fill sizes="(max-width: 1024px) 100vw, 540px" className="object-cover" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="h2">Fahrzeuglackierer (m/w/d)</h2>
              <p className="lead mt-5">
                Verstärken Sie unser Team mit Ihrer Expertise – in Vollzeit, mit langfristiger Perspektive und ausgezeichneter Ausbildungskultur (Auszeichnung der Handwerkskammer Mannheim 2021).
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/kontakt" className="btn btn-primary">Jetzt bewerben</Link>
                <a href={`mailto:${COMPANY.email}?subject=Bewerbung%20Fahrzeuglackierer`} className="btn btn-secondary">Per E-Mail bewerben</a>
              </div>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            <Reveal><List title="Was wir bieten" items={OFFER} /></Reveal>
            <Reveal delay={90}><List title="Ihre Aufgaben" items={TASKS} /></Reveal>
            <Reveal delay={180}><List title="Was wir erwarten" items={PROFILE} /></Reveal>
          </div>

          <Reveal className="mt-14 text-center">
            <p className="text-lg text-mute">
              Sie sind an einer langfristigen Beschäftigung interessiert? Bewerben Sie sich per Nachricht, E-Mail oder schriftlich:
              <br />
              <span className="text-ink">Autolackiererei Müller, {COMPANY.street}, {COMPANY.zip} {COMPANY.city}</span>
            </p>
          </Reveal>
        </div>
      </section>
      <JsonLd data={jobSchema} />
    </>
  );
}
