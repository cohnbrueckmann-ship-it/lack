import Link from "next/link";
import { COMPANY, SERVICES } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-mist pb-28 pt-16 text-[15px] text-mute lg:pb-12">
      <div className="wrap">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <p className="text-lg font-semibold text-ink">Autolackiererei Müller</p>
            <p className="mt-3 leading-relaxed">
              Ihr Lackierfachbetrieb in Mosbach-Neckarelz. Seit 1976 für Lack, Karosserie und Fahrzeugpflege.
            </p>
            <p className="mt-4 leading-relaxed">
              {COMPANY.street}
              <br />
              {COMPANY.zip} {COMPANY.city} / {COMPANY.district}
            </p>
          </div>

          <div>
            <p className="font-semibold text-ink">Leistungen</p>
            <ul className="mt-3 space-y-2">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/leistungen/${s.slug}`} className="hover:text-ink">
                    {s.nav}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold text-ink">Unternehmen</p>
            <ul className="mt-3 space-y-2">
              <li><Link href="/wir-ueber-uns" className="hover:text-ink">Über uns</Link></li>
              <li><Link href="/wir-ueber-uns/firmen-chronik" className="hover:text-ink">Firmen-Chronik</Link></li>
              <li><Link href="/autolackiererei-mosbach" className="hover:text-ink">Autolackiererei Mosbach</Link></li>
              <li><Link href="/bildergalerie" className="hover:text-ink">Bildergalerie</Link></li>
              <li><Link href="/stellenangebote" className="hover:text-ink">Stellenangebote</Link></li>
              <li><Link href="/kontakt" className="hover:text-ink">Kontakt</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-ink">Erreichbar</p>
            <ul className="mt-3 space-y-2">
              <li><a href={`tel:${COMPANY.phoneHref}`} className="hover:text-ink">Tel. {COMPANY.phone}</a></li>
              <li><a href={`tel:${COMPANY.mobileHref}`} className="hover:text-ink">Mobil {COMPANY.mobile}</a></li>
              <li><a href={`mailto:${COMPANY.email}`} className="hover:text-ink">{COMPANY.email}</a></li>
              <li className="pt-1 leading-relaxed">Mo – Fr<br />7.30 – 12.00 Uhr<br />13.00 – 17.00 Uhr</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Autolackiererei Müller · Mosbach</p>
          <ul className="flex gap-5">
            <li><Link href="/impressum" className="hover:text-ink">Impressum</Link></li>
            <li><Link href="/datenschutz" className="hover:text-ink">Datenschutz</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
