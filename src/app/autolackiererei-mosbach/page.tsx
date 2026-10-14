import Link from "next/link";
import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { ArrowIcon } from "@/components/Icons";
import { COMPANY, SERVICES, SERVICE_AREA } from "@/lib/data";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Autolackiererei Mosbach – Lackierung & Unfallreparatur in Neckarelz",
  "Autolackiererei in Mosbach: Die Autolackiererei Müller im Hohlweg 30 in Neckarelz lackiert PKW, LKW und Busse, repariert Unfallschäden und beschriftet Firmenfahrzeuge. Seit 1976.",
  "/autolackiererei-mosbach"
);

export default function Page() {
  return (
    <>
      <PageHero
        title="Autolackiererei in Mosbach."
        intro="Ihr Lackierfachbetrieb in Neckarelz: Lack, Karosserie und Beschriftung – seit 1976 für Privat- und Firmenkunden im Neckar-Odenwald-Kreis."
        crumbs={[{ name: "Autolackiererei Mosbach", path: "/autolackiererei-mosbach" }]}
      />

      <section className="section">
        <div className="wrap-narrow">
          <Reveal>
            <h2 className="h2">Lackiererei und Unfallreparatur direkt vor Ort.</h2>
            <p className="lead mt-6">
              Die Autolackiererei Müller sitzt im Hohlweg 30 in Mosbach-Neckarelz. Hier stehen uns eine Werkhalle mit acht Vorbereitungsplätzen, eine moderne Lackierkabine und eine LKW-Kombikabine zur Verfügung. So lackieren und reparieren wir alles vom Kleinwagen bis zum 15 Meter langen Bus – im eigenen Haus.
            </p>
            <p className="mt-5 text-[18px] leading-relaxed text-mute">
              Bei einem Unfall in Mosbach oder Umgebung sind wir schnell zur Stelle: Wir kalkulieren mit anerkannter Software, wickeln Haftpflicht- und Kaskoschäden mit Ihrer Versicherung ab, holen Ihr Fahrzeug bei Bedarf ab und stellen Ihnen über unsere Partner einen Mietwagen bereit.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-tint section">
        <div className="wrap">
          <Reveal>
            <h2 className="h2 max-w-3xl">Leistungen unserer Mosbacher Lackiererei.</h2>
          </Reveal>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/leistungen/${s.slug}`} className="group flex h-full flex-col justify-between rounded-3xl bg-white p-7 transition-shadow hover:shadow-md">
                  <div>
                    <h3 className="text-xl">{s.title} in Mosbach</h3>
                    <p className="mt-2 text-[16px] text-mute">{s.teaser}</p>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-medium text-accent">
                    Mehr erfahren <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap-narrow text-center">
          <Reveal>
            <h2 className="h2">Wir sind für die ganze Region da.</h2>
            <p className="lead mt-6">Kunden aus Mosbach, Neckarelz und den umliegenden Orten vertrauen uns seit über 40 Jahren.</p>
            <ul className="mt-8 flex flex-wrap justify-center gap-2">
              {SERVICE_AREA.map((a) => (
                <li key={a} className="rounded-full bg-mist px-4 py-2 text-[15px] text-mute">{a}</li>
              ))}
            </ul>
            <p className="mt-10 text-[17px] text-mute">
              {COMPANY.street}, {COMPANY.zip} {COMPANY.city}-{COMPANY.district} ·{" "}
              <a href={COMPANY.mapsRoute} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Route planen</a>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-tint section">
        <div className="wrap">
          <Reveal className="mb-12 text-center">
            <h2 className="h2">Häufige Fragen.</h2>
          </Reveal>
          <FAQ />
        </div>
      </section>

      <CTASection title="Autolackiererei in Mosbach gesucht?" text="Fragen Sie uns an – wir kalkulieren schnell und kümmern uns auf Wunsch um die Versicherung." />
    </>
  );
}
