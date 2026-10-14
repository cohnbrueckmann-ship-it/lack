import { FAQ as ITEMS } from "@/lib/data";
import JsonLd from "./JsonLd";
import { faqSchema } from "@/lib/seo";

export default function FAQ() {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-line border-y border-line">
      {ITEMS.map((f) => (
        <details key={f.q} className="group py-1">
          <summary className="flex min-h-[64px] cursor-pointer items-center justify-between gap-6 py-4 text-left text-lg font-medium sm:text-xl">
            {f.q}
            <span className="faq-plus grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ink/[0.07] text-xl leading-none transition-transform duration-300" aria-hidden>+</span>
          </summary>
          <p className="pb-6 pr-10 text-[17px] leading-relaxed text-mute">{f.a}</p>
        </details>
      ))}
      <JsonLd data={faqSchema} />
    </div>
  );
}
