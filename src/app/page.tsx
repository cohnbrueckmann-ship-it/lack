import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import BeforeAfter from "@/components/BeforeAfter";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Gallery from "@/components/Gallery";
import { ArrowIcon, CheckIcon, KeyIcon, LeafIcon, PhoneIcon, ShieldIcon } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import ServiceGrid from "@/components/ServiceGrid";
import TrustStrip from "@/components/TrustStrip";
import {
  ALL_SERVICES_LIST,
  BEFORE_AFTER,
  COMPANY,
  GALLERY,
  GALLERY_CATEGORIES,
  HERO_IMAGE,
  SERVICE_AREA,
} from "@/lib/data";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Autolackiererei Mosbach – Lackierung & Unfallreparatur seit 1976",
  "Ihre Autolackiererei in Mosbach-Neckarelz: PKW- & LKW-Lackierung, Unfallinstandsetzung, Beschriftung, Hol- und Bringdienst. Termingerecht, sauber, fair. Jetzt anfragen.",
  "/"
);

const PILLARS = [
  {
    icon: ShieldIcon,
    title: "Qualität ohne Kompromisse",
    text: "Wir verwenden ausschließlich Materialien und Technologien, die von den Herstellern geprüft und freigegeben wurden. Bei der Karosseriereparatur setzen wir auf Original-Ersatzteile.",
  },
  {
    icon: LeafIcon,
    title: "Schonend für die Umwelt",
    text: "Wasserbasierter Lack, eine Lackier- und Trocknungsanlage mit integriertem Abluftsystem, LED-Technik und eigene Photovoltaik – seit Jahren konsequent umgesetzt.",
  },
  {
    icon: KeyIcon,
    title: "Service, der entlastet",
    text: "Kundenfreundliche Öffnungszeiten, feste Termine, transparente Kosten. Auf Wunsch mit Hol- und Bringdienst, Ersatzfahrzeug und Versicherungsabwicklung.",
  },
];

const PROCESS = [
  { title: "Anfragen", text: "Rufen Sie an oder schreiben Sie uns. Gern mit Fotos vom Schaden." },
  { title: "Kalkulation", text: "Wir kalkulieren mit einer von Versicherungen anerkannten Software – schnell und transparent." },
  { title: "Reparatur", text: "Original-Ersatzteile, exakt gemischter Farbton, Lackierung in der modernen Kabine." },
  { title: "Rückgabe", text: "Termingerecht, inklusive Innen- und Außenreinigung Ihres Fahrzeugs." },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-black text-white">
        <Image src={HERO_IMAGE} alt="Fahrzeug in der Autolackiererei Müller in Mosbach" fill priority sizes="100vw" className="hero-drift -z-20 object-cover opacity-70" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/40 to-black/30" />
        <div className="wrap pb-24 pt-40 sm:pb-28 lg:pb-32">
          <p className="hero-rise text-lg font-medium text-white/80 sm:text-xl" style={{ animationDelay: "0.1s" }}>
            Lackierfachbetrieb · Mosbach-Neckarelz · seit 1976
          </p>
          <h1 className="display hero-rise mt-5 max-w-4xl" style={{ animationDelay: "0.25s" }}>
            Ihre Autolackiererei in Mosbach. Wie neu. Pünktlich.
          </h1>
          <p className="hero-rise mt-6 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl" style={{ animationDelay: "0.45s" }}>
            Lackierung, Unfallinstandsetzung und Beschriftung für PKW, LKW und Busse – mit festen Terminen, fairen Preisen und allem, was Sie bei der Versicherung entlastet.
          </p>
          <div className="hero-rise mt-9 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "0.65s" }}>
            <Link href="/kontakt" className="btn btn-primary">Kostenlose Anfrage stellen</Link>
            <a href={`tel:${COMPANY.phoneHref}`} className="btn btn-ghost-light">
              <PhoneIcon /> {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* STATEMENT */}
      <section className="section">
        <div className="wrap-narrow text-center">
          <Reveal>
            <h2 className="h2">Die Zufriedenheit unserer Kunden ist unser oberstes Gebot.</h2>
            <p className="lead mt-7">
              Unser Traditionsunternehmen besteht seit 1976 und ist ein zuverlässiger, professioneller Partner für Ihre Lackierwünsche. Unsere Stärken sind termingerechtes und sauberes Arbeiten – auf Basis von fundiertem, stets aktuell gehaltenem Fachwissen.
            </p>
          </Reveal>
        </div>
      </section>

      {/* LEISTUNGEN */}
      <section className="section-tint section" aria-labelledby="leistungen-h">
        <div className="wrap">
          <Reveal>
            <h2 id="leistungen-h" className="h2 max-w-3xl">Was wir für Ihr Fahrzeug tun.</h2>
            <p className="lead mt-5 max-w-2xl">Vom Kratzer bis zum Großraumfahrzeug: alles aus einer Hand, in unseren eigenen Hallen in Neckarelz.</p>
          </Reveal>
          <div className="mt-12">
            <ServiceGrid />
          </div>
          <Reveal className="mt-10">
            <div className="rounded-3xl bg-white p-7 sm:p-10">
              <h3 className="text-xl sm:text-2xl">Unser Serviceangebot im Überblick</h3>
              <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                {ALL_SERVICES_LIST.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-[17px]">
                    <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-accent" /> {s}
                  </li>
                ))}
              </ul>
              <Link href="/leistungen" className="mt-8 inline-flex items-center gap-1.5 font-medium text-accent hover:underline">
                Alle Leistungen ansehen <ArrowIcon />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WARUM WIR */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <h2 className="h2 max-w-3xl">Ihr Fahrzeug ist bei uns in den besten Händen.</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <div className="h-full rounded-3xl bg-mist p-8">
                  <p.icon className="h-8 w-8 text-accent" />
                  <h3 className="mt-6 text-2xl">{p.title}</h3>
                  <p className="mt-3 text-[17px] leading-relaxed text-mute">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABLAUF – echte Abfolge */}
      <section className="section-tint section" aria-labelledby="ablauf-h">
        <div className="wrap">
          <Reveal>
            <h2 id="ablauf-h" className="h2 max-w-3xl">So läuft Ihre Reparatur ab.</h2>
            <p className="lead mt-5 max-w-2xl">Vier Schritte. Wir übernehmen den Papierkram, Sie bleiben mobil.</p>
          </Reveal>
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((s, i) => (
              <li key={s.title}>
                <Reveal delay={i * 90} className="h-full">
                  <div className="h-full rounded-3xl bg-white p-7">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-[15px] font-semibold text-white">{i + 1}</span>
                    <h3 className="mt-5 text-xl">{s.title}</h3>
                    <p className="mt-2 text-[16px] leading-relaxed text-mute">{s.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* VORHER / NACHHER */}
      <section className="section" aria-labelledby="vn-h">
        <div className="wrap">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 id="vn-h" className="h2">Vorher. Nachher.</h2>
            <p className="lead mt-5">Ziehen Sie den Regler und sehen Sie den Unterschied.</p>
          </Reveal>
          <div className="mx-auto mt-12 max-w-4xl">
            <Reveal>
              <BeforeAfter pairs={BEFORE_AFTER} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* REFERENZEN / GALERIE */}
      <section className="section-tint section" aria-labelledby="ref-h">
        <div className="wrap">
          <Reveal className="max-w-3xl">
            <h2 id="ref-h" className="h2">Referenzen: Arbeiten aus unserer Halle.</h2>
            <p className="lead mt-5">Sportwagen, Nutzfahrzeuge, Möbel und mehr. Ein Auszug aus über 40 Jahren Lackierhandwerk.</p>
          </Reveal>
          <div className="mt-12">
            <Gallery items={GALLERY.slice(0, 9)} categories={GALLERY_CATEGORIES} showFilter={false} />
          </div>
          <div className="mt-10 text-center">
            <Link href="/bildergalerie" className="btn btn-secondary">Komplette Galerie ansehen</Link>
          </div>
        </div>
      </section>

      {/* NACHHALTIGKEIT */}
      <section className="section">
        <div className="wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="h2">Lackieren mit Verantwortung.</h2>
            <p className="lead mt-6">
              Seit 2003 arbeiten wir mit Wasserlack. Es folgten ein Ökoplus-Lackiersystem, LED-Beleuchtung, eine Dachsanierung und 2024 eine eigene Photovoltaik-Anlage. Qualität und Umweltschutz schließen sich bei uns nicht aus.
            </p>
            <Link href="/wir-ueber-uns/firmen-chronik" className="mt-8 inline-flex items-center gap-1.5 font-medium text-accent hover:underline">
              Unsere Firmen-Chronik <ArrowIcon />
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {["2003 · Umstellung auf Wasserlacke", "2005 · Ökoplus-Lackiersystem", "2014 · LED-Beleuchtung", "2024 · Photovoltaik-Anlage"].map((t) => (
                <li key={t} className="flex items-center gap-3 rounded-2xl bg-emerald-50 px-5 py-4 text-[16px] font-medium text-emerald-800">
                  <LeafIcon className="h-5 w-5 shrink-0" /> {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-tint section" aria-labelledby="faq-h">
        <div className="wrap">
          <Reveal className="mb-12 text-center">
            <h2 id="faq-h" className="h2">Häufige Fragen.</h2>
          </Reveal>
          <FAQ />
        </div>
      </section>

      {/* LOKAL */}
      <section className="section">
        <div className="wrap-narrow text-center">
          <Reveal>
            <h2 className="h2">Ihre Lackiererei im Neckar-Odenwald-Kreis.</h2>
            <p className="lead mt-6">
              Unser Betrieb im Hohlweg 30 in Mosbach-Neckarelz ist für Kunden aus der ganzen Region schnell erreichbar – und auf Wunsch holen wir Ihr Fahrzeug ab.
            </p>
            <ul className="mt-8 flex flex-wrap justify-center gap-2">
              {SERVICE_AREA.map((a) => (
                <li key={a} className="rounded-full bg-mist px-4 py-2 text-[15px] text-mute">{a}</li>
              ))}
            </ul>
            <Link href="/autolackiererei-mosbach" className="mt-8 inline-flex items-center gap-1.5 font-medium text-accent hover:underline">
              Mehr über unsere Autolackiererei in Mosbach <ArrowIcon />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* KONTAKT */}
      <section className="section-tint section" aria-labelledby="kontakt-h">
        <div className="wrap grid gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <h2 id="kontakt-h" className="h2">Fragen? Schreiben Sie uns.</h2>
            <p className="lead mt-5">Wir antworten schnell – meist noch am selben Werktag.</p>
            <ul className="mt-8 space-y-2 text-[17px]">
              <li><a className="font-medium text-accent hover:underline" href={`tel:${COMPANY.phoneHref}`}>{COMPANY.phone}</a></li>
              <li><a className="text-mute hover:text-ink" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></li>
              <li className="text-mute">Hohlweg 30, 74821 Mosbach / Neckarelz</li>
            </ul>
          </Reveal>
          <Reveal className="lg:col-span-3" delay={100}>
            <ContactForm compact />
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
