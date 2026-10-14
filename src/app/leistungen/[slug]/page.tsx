import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { CheckIcon, ArrowIcon, PhoneIcon } from "@/components/Icons";
import { COMPANY, SERVICES } from "@/lib/data";
import { pageMeta, serviceSchema } from "@/lib/seo";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const s = SERVICES.find((x) => x.slug === params.slug);
  if (!s) return {};
  return pageMeta(s.metaTitle, s.metaDescription, `/leistungen/${s.slug}`);
}

export default function Page({ params }: Props) {
  const idx = SERVICES.findIndex((x) => x.slug === params.slug);
  if (idx < 0) notFound();
  const s = SERVICES[idx];
  const others = SERVICES.filter((x) => x.slug !== s.slug);

  return (
    <>
      <PageHero
        title={s.headline}
        intro={s.teaser}
        crumbs={[
          { name: "Leistungen", path: "/leistungen" },
          { name: s.nav, path: `/leistungen/${s.slug}` },
        ]}
      />

      <section className="section">
        <div className="wrap grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="sheen relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-mist">
              <Image src={s.image} alt={s.imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 540px" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            {s.paragraphs.map((p) => (
              <p key={p} className="mb-5 text-[18px] leading-relaxed text-mute">{p}</p>
            ))}
            <p className="mt-7 text-2xl font-semibold leading-snug tracking-tight">{s.highlight}</p>
            <ul className="mt-8 space-y-3">
              {s.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-[17px]">
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-accent" /> {b}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/kontakt" className="btn btn-primary">Anfrage zu dieser Leistung</Link>
              <a href={`tel:${COMPANY.phoneHref}`} className="btn btn-secondary">
                <PhoneIcon /> {COMPANY.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-tint section">
        <div className="wrap">
          <Reveal>
            <h2 className="h2">Weitere Leistungen.</h2>
          </Reveal>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/leistungen/${o.slug}`} className="group flex items-center justify-between rounded-2xl bg-white px-6 py-5 text-lg font-medium transition-shadow hover:shadow-md">
                  {o.nav}
                  <ArrowIcon className="h-5 w-5 text-accent transition-transform group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection />
      <JsonLd data={serviceSchema(s)} />
    </>
  );
}
