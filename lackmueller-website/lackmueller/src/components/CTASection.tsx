import Link from "next/link";
import { COMPANY } from "@/lib/data";
import { PhoneIcon } from "./Icons";
import Reveal from "./Reveal";

export default function CTASection({
  title = "Unfall oder Lackwunsch? Wir kümmern uns.",
  text = "Schildern Sie uns kurz Ihr Anliegen. Wir erstellen schnell eine Kalkulation und übernehmen auf Wunsch die Abwicklung mit Ihrer Versicherung.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-16 text-center text-white sm:px-14 sm:py-24">
            <div aria-hidden className="pointer-events-none absolute -top-1/2 left-1/2 h-[120%] w-[90%] -translate-x-1/2 rounded-full bg-accent/30 blur-[120px]" />
            <div className="relative">
              <h2 className="h2 mx-auto max-w-3xl">{title}</h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">{text}</p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/kontakt" className="btn btn-primary w-full sm:w-auto">Kostenlose Anfrage stellen</Link>
                <a href={`tel:${COMPANY.phoneHref}`} className="btn btn-ghost-light w-full sm:w-auto">
                  <PhoneIcon className="h-5 w-5" /> {COMPANY.phone}
                </a>
              </div>
              <p className="mt-6 text-sm text-white/50">Mo – Fr 7.30 – 12.00 und 13.00 – 17.00 Uhr · Hohlweg 30, Mosbach-Neckarelz</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
