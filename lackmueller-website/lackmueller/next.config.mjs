/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    // Bilder der bisherigen Website. Empfehlung: nach /public/images kopieren
    // und die Pfade in src/lib/data.ts anpassen.
    remotePatterns: [{ protocol: "https", hostname: "www.lackmueller.biz" }],
  },
  async redirects() {
    // Alte Contao-URLs (.html) dauerhaft auf die neuen Seiten umleiten – erhält das SEO-Ranking.
    const map = [
      ["/willkommen.html", "/"],
      ["/wir-ueber-uns.html", "/wir-ueber-uns"],
      ["/wir-ueber-uns/firmen-chronik.html", "/wir-ueber-uns/firmen-chronik"],
      ["/leistungen.html", "/leistungen"],
      ["/leistungen/:slug.html", "/leistungen/:slug"],
      ["/bildergalerie.html", "/bildergalerie"],
      ["/stellenangebote.html", "/stellenangebote"],
      ["/kontakt.html", "/kontakt"],
      ["/impressum.html", "/impressum"],
      ["/datenschutz.html", "/datenschutz"],
      ["/sitemap.html", "/"],
    ];
    return map.map(([source, destination]) => ({ source, destination, permanent: true }));
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};
export default nextConfig;
