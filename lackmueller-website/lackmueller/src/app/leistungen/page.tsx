import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ServiceGrid from "@/components/ServiceGrid";
import { CheckIcon } from "@/components/Icons";
import { ALL_SERVICES_LIST } from "@/lib/data";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Leistungen – Lackierung, Unfallreparatur, Beschriftung",
  "Alle Leistungen der Autolackiererei Müller in Mosbach: PKW- & LKW-Lackierung, Unfallinstandsetzung, Smart Repair, Kunststoffreparatur, Autoglas, Beschriftung, Hol- und Bringdienst.",
  "/leistungen"
);

export default function Page() {
  return (
    <>
      <PageHero
        title="Mehr Know-how für zufriedene Kunden."
        intro="Neue Materialien und Techniken im Automobilbau stellen höchste Anforderungen. Deshalb halten wir Mitarbeiter und Materialien stets auf dem aktuellen Stand – zu marktorientierten, fairen Preisen."
        crumbs={[{ name: "Leistungen", path: "/leistungen" }]}
      />

      <section className="section">
        <div className="wrap">
          <ServiceGrid />
        </div>
      </section>

      <section className="section-tint section">
        <div className="wrap grid gap-10 lg:grid-cols-5 lg:gap-16">
          <Reveal className="lg:col-span-2">
            <h2 className="h2">Unser Serviceangebot für Sie.</h2>
            <p className="lead mt-5">Alles rund um Lack, Karosserie und Fahrzeugpflege – und mehr.</p>
          </Reveal>
          <Reveal className="lg:col-span-3" delay={100}>
            <ul className="grid gap-4 sm:grid-cols-2">
              {ALL_SERVICES_LIST.map((s) => (
                <li key={s} className="flex items-start gap-3 rounded-2xl bg-white px-5 py-4 text-[17px]">
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-accent" /> {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal className="mb-12 text-center">
            <h2 className="h2">Häufige Fragen.</h2>
          </Reveal>
          <FAQ />
        </div>
      </section>

      <CTASection />
    </>
  );
}
