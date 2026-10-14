import type { Metadata } from "next";
import { COMPANY, FAQ, HERO_IMAGE, SERVICES, SITE_URL } from "./data";

export function pageMeta(title: string, description: string, path: string): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: COMPANY.name,
      locale: "de_DE",
      type: "website",
      images: [{ url: HERO_IMAGE, width: 1600, height: 900, alt: COMPANY.name }],
    },
    twitter: { card: "summary_large_image", title, description, images: [HERO_IMAGE] },
  };
}

const address = {
  "@type": "PostalAddress",
  streetAddress: COMPANY.street,
  postalCode: COMPANY.zip,
  addressLocality: `${COMPANY.city}-${COMPANY.district}`,
  addressRegion: "Baden-Württemberg",
  addressCountry: "DE",
};

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["AutoBodyShop", "LocalBusiness"],
  "@id": `${SITE_URL}/#business`,
  name: COMPANY.name,
  legalName: COMPANY.legalName,
  url: SITE_URL,
  image: HERO_IMAGE,
  logo: `${SITE_URL}/icon.svg`,
  description:
    "Fachlackiererei in Mosbach-Neckarelz seit 1976: PKW- und LKW-Lackierung, Unfallinstandsetzung, Beschriftung, Smart Repair und Hol- und Bringdienst.",
  telephone: "+49626160448",
  faxNumber: "+49626169198",
  email: COMPANY.email,
  foundingDate: COMPANY.founded,
  founder: { "@type": "Person", name: "Willi Müller" },
  employee: { "@type": "Person", name: COMPANY.owner, jobTitle: "Inhaberin, Maler- und Lackierermeisterin" },
  address,
  // TODO: Exakte Koordinaten aus Google Maps ergänzen: geo: { "@type": "GeoCoordinates", latitude: …, longitude: … }
  hasMap: COMPANY.mapsRoute,
  priceRange: "€€",
  currenciesAccepted: "EUR",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "12:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "13:00",
      closes: "17:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Mosbach" },
    { "@type": "AdministrativeArea", name: "Neckar-Odenwald-Kreis" },
    { "@type": "City", name: "Obrigheim" },
    { "@type": "City", name: "Buchen (Odenwald)" },
    { "@type": "City", name: "Eberbach" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Leistungen der Autolackiererei Müller",
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, url: `${SITE_URL}/leistungen/${s.slug}` },
    })),
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+49626160448",
    contactType: "customer service",
    areaServed: "DE",
    availableLanguage: "German",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: COMPANY.name,
  inLanguage: "de-DE",
  publisher: { "@id": `${SITE_URL}/#business` },
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

export function serviceSchema(s: (typeof SERVICES)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.headline,
    serviceType: s.title,
    description: s.metaDescription,
    url: `${SITE_URL}/leistungen/${s.slug}`,
    image: s.image,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: { "@type": "City", name: "Mosbach" },
  };
}
