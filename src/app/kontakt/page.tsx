import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/Icons";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { COMPANY } from "@/lib/data";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Kontakt & Anfahrt – Autolackiererei Müller Mosbach",
  "Kontakt zur Autolackiererei Müller, Hohlweg 30, 74821 Mosbach-Neckarelz. Telefon 06261 / 60448. Öffnungszeiten Mo–Fr 7.30–12.00 und 13.00–17.00 Uhr. Anfrage online senden.",
  "/kontakt"
);

export default function Page() {
  return (
    <>
      <PageHero
        title="Kontakt"
        intro="Rufen Sie uns an oder schreiben Sie uns. Wir kalkulieren schnell und beraten Sie persönlich."
        crumbs={[{ name: "Kontakt", path: "/kontakt" }]}
      />

      <section className="section">
        <div className="wrap grid gap-10 lg:grid-cols-5 lg:gap-14">
          <div className="space-y-5 lg:col-span-2">
            <Reveal>
              <div className="rounded-3xl bg-mist p-7">
                <h2 className="text-2xl">Autolackiererei Müller</h2>
                <ul className="mt-6 space-y-5 text-[17px]">
                  <li className="flex gap-4">
                    <PinIcon className="mt-0.5 h-6 w-6 shrink-0 text-accent" />
                    <address className="not-italic leading-relaxed">
                      {COMPANY.street}
                      <br />
                      {COMPANY.zip} {COMPANY.city} / {COMPANY.district}
                    </address>
                  </li>
                  <li className="flex gap-4">
                    <PhoneIcon className="mt-0.5 h-6 w-6 shrink-0 text-accent" />
                    <span className="leading-relaxed">
                      <a href={`tel:${COMPANY.phoneHref}`} className="font-medium hover:text-accent">{COMPANY.phone}</a>
                      <br />
                      <a href={`tel:${COMPANY.mobileHref}`} className="text-mute hover:text-accent">Mobil {COMPANY.mobile}</a>
                      <br />
                      <span className="text-mute">Fax {COMPANY.fax}</span>
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <MailIcon className="mt-0.5 h-6 w-6 shrink-0 text-accent" />
                    <a href={`mailto:${COMPANY.email}`} className="hover:text-accent">{COMPANY.email}</a>
                  </li>
                  <li className="flex gap-4">
                    <ClockIcon className="mt-0.5 h-6 w-6 shrink-0 text-accent" />
                    <span className="leading-relaxed">
                      <strong className="font-semibold">Öffnungszeiten</strong>
                      <br />
                      Mo – Fr 7.30 – 12.00 Uhr
                      <br />
                      und 13.00 – 17.00 Uhr
                    </span>
                  </li>
                </ul>
                <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  <a href={`tel:${COMPANY.phoneHref}`} className="btn btn-primary">Jetzt anrufen</a>
                  <a href={COMPANY.mapsRoute} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    Route planen
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-3" delay={100}>
            <h2 className="mb-6 text-2xl sm:text-3xl">Anfrage senden</h2>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
