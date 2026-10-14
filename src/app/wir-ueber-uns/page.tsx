import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { LeafIcon, ShieldIcon, KeyIcon, ArrowIcon } from "@/components/Icons";
import { PARTNERS } from "@/lib/data";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Über uns – Familienbetrieb seit 1976",
  "Die Autolackiererei Müller in Mosbach-Neckarelz: Familienbetrieb seit 1976, geführt von Lackierermeisterin Nicole Müller-Stapf. Qualität, Umweltschutz und verlässlicher Service.",
  "/wir-ueber-uns"
);

const BLOCKS = [
  {
    icon: ShieldIcon,
    title: "Keine Kompromisse.",
    paragraphs: [
      "Wir verwenden ausschließlich Materialien und Technologien, die von den Herstellern sorgfältig geprüft und anschließend freigegeben worden sind – bei uns zählt Qualität.",
      "In puncto Umwelt legen wir Wert auf zeitgemäße Materialien: Gearbeitet wird ausschließlich mit umweltgerechtem, auf Wasser basierendem Lack. Die neueste Generation einer Lackier- und Trocknungsanlage mit integriertem Abluftsystem gewährleistet zudem umweltgerechtes Lackieren.",
    ],
    claim: "Wir schaffen Qualität und schonen die Umwelt – zuverlässig.",
  },
  {
    icon: KeyIcon,
    title: "Unser Service für Sie.",
    paragraphs: [
      "Ihre Zufriedenheit ist unser Ziel. Das Team der Fachlackiererei Müller stellt sich voll und ganz auf Ihre Anforderungen ein. Unser Prinzip: ein flexibler Service, der sich an den Bedürfnissen unserer Kunden orientiert.",
      "Dazu zählen kundenfreundliche Öffnungszeiten, termingerechte Reparatur, direkte Kommunikation und Transparenz bei der Kostenermittlung. Termintreue, Schnelligkeit und Flexibilität – bei Unfallreparatur, Reparaturlackierung oder Beschriftung.",
    ],
    claim: "Flexibel und zuverlässig – vertrauen Sie unserem Service.",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        title="Qualität und Service. Dafür stehen wir."
        intro="Seit der Firmengründung im Jahr 1976 hat sich die Fachlackiererei Müller kontinuierlich weiterentwickelt – mit fundiertem Handwerk, modernsten Standards und einem engagierten Team."
        crumbs={[{ name: "Über uns", path: "/wir-ueber-uns" }]}
      />

      <section className="section">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-mist">
              <Image
                src="https://www.lackmueller.biz/files/kunde/inhalt/wir-ueber-uns/Fassade_1.JPG"
                alt="Betriebsgebäude der Autolackiererei Müller im Hohlweg 30 in Mosbach-Neckarelz"
                fill
                sizes="(max-width: 1024px) 100vw, 540px"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="h2">Wir sind für Sie da – immer.</h2>
            <p className="lead mt-6">
              Unsere Kunden vertrauen uns seit mehr als 40 Jahren in den Bereichen Reparatur und Fahrzeugpflege. Wir stehen mit unserem Namen für Qualität und Service.
            </p>
            <p className="mt-5 text-[17px] leading-relaxed text-mute">
              Seit 2002 führt Nicole Müller-Stapf, Maler- und Lackierermeisterin und staatlich anerkannte Betriebswirtin des Handwerks, den Betrieb, den ihr Vater Willi Müller 1976 gegründet hat.
            </p>
            <Link href="/wir-ueber-uns/firmen-chronik" className="mt-7 inline-flex items-center gap-1.5 font-medium text-accent hover:underline">
              Zur Firmen-Chronik <ArrowIcon />
            </Link>
          </Reveal>
        </div>
      </section>

      {BLOCKS.map((b, i) => (
        <section key={b.title} className={i % 2 === 0 ? "section-tint section" : "section"}>
          <div className="wrap grid gap-10 lg:grid-cols-5 lg:gap-16">
            <Reveal className="lg:col-span-2">
              <b.icon className="h-9 w-9 text-accent" />
              <h2 className="h2 mt-5">{b.title}</h2>
            </Reveal>
            <Reveal className="lg:col-span-3" delay={100}>
              {b.paragraphs.map((p) => (
                <p key={p} className="mb-5 text-[18px] leading-relaxed text-mute">{p}</p>
              ))}
              <p className="mt-6 text-xl font-semibold">{b.claim}</p>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="section">
        <div className="wrap">
          <Reveal className="max-w-3xl">
            <h2 className="h2">Anerkannt von Partnern und Kammer.</h2>
            <p className="lead mt-5">Auszeichnungen und Kooperationen, die für unsere Arbeit sprechen.</p>
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PARTNERS.map((p, i) => (
              <li key={p.name}>
                <Reveal delay={i * 80} className="h-full">
                  <div className="h-full rounded-3xl bg-mist p-7">
                    <p className="text-2xl font-semibold tracking-tight">{p.name}</p>
                    <p className="mt-2 text-mute">{p.note}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
          <Reveal className="mt-8">
            <p className="inline-flex items-center gap-2 text-mute">
              <LeafIcon className="h-5 w-5 text-emerald-600" /> Mit eigener Photovoltaik-Anlage, Wasserlack und LED-Technik.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
