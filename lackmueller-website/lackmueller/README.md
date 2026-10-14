# Autolackiererei Müller – Next.js Website

Next.js 14 (App Router) · React 18 · Tailwind CSS 3 · TypeScript

## Start

```bash
npm install
cp .env.example .env.local   # RESEND_API_KEY eintragen (Kontaktformular)
npm run dev                  # http://localhost:3000
npm run build && npm start   # Produktion
```

## Struktur

| Route | Inhalt |
|---|---|
| `/` | Startseite (Hero, Trust, Leistungen, Ablauf, Vorher/Nachher, Referenzen, FAQ, Kontakt) |
| `/autolackiererei-mosbach` | Lokale SEO-Landingpage |
| `/leistungen`, `/leistungen/[slug]` | Übersicht + 6 Leistungsseiten |
| `/wir-ueber-uns`, `/wir-ueber-uns/firmen-chronik` | Unternehmen, Chronik 1976–2024 |
| `/bildergalerie` | Vorher-Nachher + filterbare Galerie mit Lightbox |
| `/stellenangebote` | Stelle inkl. JobPosting-Schema |
| `/kontakt`, `/api/contact` | Kontaktformular (Honeypot, Zeit-Check, Resend) |
| `/impressum`, `/datenschutz` | Rechtliches (Mustertexte prüfen!) |

Alle Texte und Bild-URLs stehen zentral in `src/lib/data.ts`. Alte `.html`-URLs werden in `next.config.mjs` per 301 umgeleitet.

## Vor dem Livegang

1. Bilder von der alten Website nach `public/images/` kopieren und in `src/lib/data.ts` ersetzen (aktuell Hotlinks auf lackmueller.biz).
2. Geo-Koordinaten in `src/lib/seo.ts` ergänzen, Google-Business-Profil verknüpfen (`sameAs`).
3. Impressum (USt-IdNr., Kammer) und Datenschutz rechtlich prüfen lassen.
4. Echte Kundenbewertungen ergänzen (siehe Hinweis in der Antwort) – erst dann `aggregateRating` im Schema.
5. `JOB_DATE_POSTED` in `stellenangebote/page.tsx` pflegen.
