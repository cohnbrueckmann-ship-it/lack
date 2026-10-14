import type { Metadata } from "next";
import BeforeAfter from "@/components/BeforeAfter";
import CTASection from "@/components/CTASection";
import Gallery from "@/components/Gallery";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { BEFORE_AFTER, GALLERY, GALLERY_CATEGORIES } from "@/lib/data";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Bildergalerie & Referenzen – Lackierarbeiten aus Mosbach",
  "Referenzen und Vorher-Nachher-Vergleiche der Autolackiererei Müller: Sportwagen, Nutzfahrzeuge, Anhänger, Motorräder und Möbel.",
  "/bildergalerie"
);

export default function Page() {
  return (
    <>
      <PageHero
        title="Bildergalerie"
        intro="Referenzen aus über 40 Jahren Lackierhandwerk: von Sportwagen über Nutzfahrzeuge bis zu Möbeln."
        crumbs={[{ name: "Bildergalerie", path: "/bildergalerie" }]}
      />

      <section className="section">
        <div className="wrap">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="h2">Vorher. Nachher.</h2>
          </Reveal>
          <div className="mx-auto max-w-4xl">
            <BeforeAfter pairs={BEFORE_AFTER} />
          </div>
        </div>
      </section>

      <section className="section-tint section">
        <div className="wrap">
          <Reveal className="mb-10 max-w-3xl">
            <h2 className="h2">Unsere Referenzen.</h2>
            <p className="lead mt-5">Tippen Sie ein Bild an, um es zu vergrößern.</p>
          </Reveal>
          <Gallery items={GALLERY} categories={GALLERY_CATEGORIES} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
