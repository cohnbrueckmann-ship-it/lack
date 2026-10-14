"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { GalleryItem } from "@/lib/data";
import { CloseIcon } from "./Icons";

export default function Gallery({ items, categories, showFilter = true }: { items: GalleryItem[]; categories: string[]; showFilter?: boolean }) {
  const [cat, setCat] = useState("Alle");
  const [active, setActive] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  const list = useMemo(() => (cat === "Alle" ? items : items.filter((i) => i.category === cat)), [items, cat]);

  const close = useCallback(() => {
    setActive(null);
    lastFocus.current?.focus();
  }, []);
  const step = useCallback(
    (d: number) => setActive((i) => (i === null ? i : (i + d + list.length) % list.length)),
    [list.length]
  );

  useEffect(() => {
    if (active === null) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, step]);

  const current = active !== null ? list[active] : null;

  return (
    <div>
      {showFilter && (
        <div className="no-scrollbar -mx-5 mb-8 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0" role="tablist" aria-label="Galerie filtern">
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={cat === c}
              onClick={() => setCat(c)}
              className={`shrink-0 whitespace-nowrap rounded-full px-5 py-2.5 text-[15px] font-medium transition-colors ${
                cat === c ? "bg-ink text-white" : "bg-ink/[0.07] text-ink hover:bg-ink/[0.12]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      )}

      <ul className="columns-2 gap-3 sm:columns-3 sm:gap-4">
        {list.map((it, i) => (
          <li key={it.file} className="mb-3 break-inside-avoid sm:mb-4">
            <button
              type="button"
              onClick={(e) => {
                lastFocus.current = e.currentTarget;
                setActive(i);
              }}
              className="sheen group block w-full overflow-hidden rounded-2xl bg-mist"
              aria-label={`Bild vergrößern: ${it.alt}`}
            >
              <Image
                src={it.file}
                alt={it.alt}
                width={800}
                height={600}
                sizes="(max-width: 640px) 50vw, 33vw"
                className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <div role="dialog" aria-modal="true" aria-label="Bildansicht" className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md" onClick={close}>
          <button ref={closeRef} onClick={close} className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-white/15 text-white hover:bg-white/25" aria-label="Schließen">
            <CloseIcon />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); step(-1); }}
            className="absolute left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-2xl text-white hover:bg-white/25"
            aria-label="Vorheriges Bild"
          >
            ‹
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); step(1); }}
            className="absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-2xl text-white hover:bg-white/25"
            aria-label="Nächstes Bild"
          >
            ›
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={current.file} alt={current.alt} className="max-h-[86vh] max-w-full rounded-2xl object-contain" onClick={(e) => e.stopPropagation()} />
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-2 text-sm text-white">
            {current.alt} · {active! + 1}/{list.length}
          </p>
        </div>
      )}
    </div>
  );
}
