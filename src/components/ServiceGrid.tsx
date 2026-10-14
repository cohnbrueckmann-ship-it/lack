import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/lib/data";
import { ArrowIcon } from "./Icons";
import Reveal from "./Reveal";

export default function ServiceGrid({ limit }: { limit?: number }) {
  const list = limit ? SERVICES.slice(0, limit) : SERVICES;
  return (
    <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-6">
      {list.map((s, i) => {
        const big = i < 2; // Zwei große Kacheln oben, vier kleinere darunter
        return (
          <li key={s.slug} className={big ? "lg:col-span-3" : "lg:col-span-2"}>
            <Reveal delay={(i % 3) * 80} className="h-full">
              <Link
                href={`/leistungen/${s.slug}`}
                className="sheen group relative flex h-full min-h-[300px] flex-col justify-end overflow-hidden rounded-[1.75rem] bg-ink text-white sm:min-h-[340px]"
              >
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="relative p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-[28px]">{s.title}</h3>
                  <p className="mt-2 max-w-md text-[16px] leading-snug text-white/75">{s.teaser}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[15px] font-medium">
                    Mehr erfahren <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          </li>
        );
      })}
    </ul>
  );
}
