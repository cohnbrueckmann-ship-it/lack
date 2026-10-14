import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import JsonLd from "@/components/JsonLd";
import { COMPANY, HERO_IMAGE, SITE_URL } from "@/lib/data";
import { businessSchema, websiteSchema } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Autolackiererei Müller Mosbach – Lackierfachbetrieb seit 1976",
    template: "%s | Autolackiererei Müller Mosbach",
  },
  description:
    "Autolackiererei in Mosbach-Neckarelz: PKW- und LKW-Lackierung, Unfallinstandsetzung, Beschriftung und Hol- und Bringdienst. Fachbetrieb seit 1976 – jetzt Termin anfragen.",
  applicationName: COMPANY.name,
  authors: [{ name: COMPANY.name }],
  keywords: [
    "Autolackiererei Mosbach",
    "Lackiererei Mosbach",
    "Unfallreparatur Mosbach",
    "Fahrzeuglackierung Neckarelz",
    "LKW Lackierung",
    "Karosserie Mosbach",
    "Smart Repair",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE_URL,
    siteName: COMPANY.name,
    title: "Autolackiererei Müller Mosbach – Lackierfachbetrieb seit 1976",
    description: "Lackierung, Unfallinstandsetzung und Beschriftung in Mosbach-Neckarelz.",
    images: [{ url: HERO_IMAGE, width: 1600, height: 900, alt: "Autolackiererei Müller in Mosbach" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  formatDetection: { telephone: true, email: true, address: true },
  other: {
    "geo.region": "DE-BW",
    "geo.placename": "Mosbach",
  },
  // Google Search Console (Verifizierung der bisherigen Website übernommen)
  verification: { google: "tyk2PB025LL51_IexfSErW9boyFLIjt588VL4AuIF_Y" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={inter.variable}>
      <head>
        <noscript>
          <style>{`.reveal,.hero-rise{opacity:1!important;transform:none!important;filter:none!important;animation:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <a
          href="#inhalt"
          className="sr-only z-[60] rounded-full bg-ink px-5 py-3 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Zum Inhalt springen
        </a>
        <Header />
        <main id="inhalt">{children}</main>
        <Footer />
        <StickyCTA />
        <JsonLd data={[businessSchema, websiteSchema]} />
      </body>
    </html>
  );
}
