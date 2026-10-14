import { PARTNERS } from "@/lib/data";

const FACTS = [
  { big: "Seit 1976", small: "Familienbetrieb mit über 40 Jahren Erfahrung" },
  { big: "Bis 15 m", small: "LKW- und Buslackierung im eigenen Haus" },
  { big: "100 % Wasserlack", small: "Umweltgerecht und herstellergeprüft" },
  { big: "Eigener Strom", small: "Photovoltaik-Anlage seit 2024" },
];

export default function TrustStrip() {
  return (
    <section aria-label="Warum Kunden uns vertrauen" className="border-b border-line bg-white">
      <div className="wrap py-10 sm:py-14">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
          {FACTS.map((f) => (
            <div key={f.big}>
              <dt className="text-2xl font-semibold tracking-tight sm:text-[28px]">{f.big}</dt>
              <dd className="mt-1 text-[15px] leading-snug text-mute">{f.small}</dd>
            </div>
          ))}
        </dl>
        <ul className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-8 text-[15px] text-mute">
          {PARTNERS.map((p) => (
            <li key={p.name}>
              <span className="font-semibold text-ink">{p.name}</span> · {p.note}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
