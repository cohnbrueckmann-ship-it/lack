import { CHRONICLE } from "@/lib/data";
import { LeafIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Timeline() {
  return (
    <ol className="relative mx-auto max-w-3xl border-l border-line pl-8 sm:pl-12">
      {CHRONICLE.map((c) => (
        <li key={c.year} className="relative pb-10 last:pb-0">
          <span aria-hidden className={`absolute -left-[37px] top-2 h-3 w-3 rounded-full ring-4 ring-white sm:-left-[53px] ${c.tag ? "bg-emerald-500" : "bg-ink"}`} />
          <Reveal>
            <p className="text-3xl font-semibold tracking-tight sm:text-4xl">{c.year}</p>
            <p className="mt-2 text-[17px] leading-relaxed text-mute">{c.text}</p>
            {c.tag && (
              <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
                <LeafIcon className="h-4 w-4" /> {c.tag}
              </p>
            )}
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
