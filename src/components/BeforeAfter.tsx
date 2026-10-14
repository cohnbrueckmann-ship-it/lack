"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

type Pair = { before: string; after: string; title: string; text: string };

function Slider({ pair }: { pair: Pair }) {
  const box = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const move = useCallback((clientX: number) => {
    const el = box.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  }, []);

  return (
    <figure>
      <div
        ref={box}
        className="relative aspect-[4/3] w-full touch-pan-y focus-within:ring-4 focus-within:ring-accent/50 select-none overflow-hidden rounded-3xl bg-ink shadow-[0_30px_80px_-30px_rgba(0,0,0,0.45)] sm:aspect-[16/10]"
        onPointerDown={(e) => {
          dragging.current = true;
          (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
          move(e.clientX);
        }}
        onPointerMove={(e) => dragging.current && move(e.clientX)}
        onPointerUp={() => (dragging.current = false)}
        onPointerCancel={() => (dragging.current = false)}
      >
        <Image src={pair.after} alt={`${pair.title} – nachher`} fill sizes="(max-width: 1024px) 100vw, 1000px" className="object-cover" draggable={false} />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Image src={pair.before} alt={`${pair.title} – vorher`} fill sizes="(max-width: 1024px) 100vw, 1000px" className="object-cover" draggable={false} />
        </div>

        <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-black/55 px-3.5 py-1.5 text-sm font-medium text-white backdrop-blur">Vorher</span>
        <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-black/55 px-3.5 py-1.5 text-sm font-medium text-white backdrop-blur">Nachher</span>

        <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.5)]" style={{ left: `${pos}%` }}>
          <span className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-ink shadow-xl">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="m9 7-5 5 5 5M15 7l5 5-5 5" />
            </svg>
          </span>
        </div>

        {/* Tastatur- und Screenreader-Bedienung */}
        <input
          type="range"
          min={0}
          max={100}
          value={Math.round(pos)}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={`Vergleichsregler ${pair.title}: Anteil Vorher-Bild`}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          style={{ pointerEvents: "none" }}
        />
      </div>
      <figcaption className="mt-5 text-center">
        <p className="text-lg font-semibold">{pair.title}</p>
        <p className="mt-1 text-mute">{pair.text}</p>
      </figcaption>
    </figure>
  );
}

export default function BeforeAfter({ pairs }: { pairs: Pair[] }) {
  return (
    <div className="grid gap-12">
      {pairs.map((p) => (
        <Slider key={p.title} pair={p} />
      ))}
    </div>
  );
}
