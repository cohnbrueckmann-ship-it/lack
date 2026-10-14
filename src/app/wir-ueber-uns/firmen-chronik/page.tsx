import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import Timeline from "@/components/Timeline";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Firmen-Chronik – 1976 bis heute",
  "Die Geschichte der Autolackiererei Müller in Mosbach-Neckarelz: von der Gründung 1976 über Wasserlack und Ökoplus-System bis zur Photovoltaik-Anlage 2024.",
  "/wir-ueber-uns/firmen-chronik"
);

export default function Page() {
  return (
    <>
      <PageHero
        title="Firmen-Chronik"
        intro="Von der Gründung am 1. Oktober 1976 bis zur eigenen Photovoltaik-Anlage: Stationen eines Handwerksbetriebs, der sich ständig weiterentwickelt."
        crumbs={[
          { name: "Über uns", path: "/wir-ueber-uns" },
          { name: "Firmen-Chronik", path: "/wir-ueber-uns/firmen-chronik" },
        ]}
      />
      <section className="section">
        <div className="wrap">
          <Timeline />
        </div>
      </section>
      <CTASection />
    </>
  );
}
