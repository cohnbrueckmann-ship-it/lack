// Zentrale Inhalte – alle Texte stammen von https://www.lackmueller.biz (Stand der Analyse).

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.lackmueller.biz";

export const COMPANY = {
  name: "Autolackiererei Müller",
  legalName: "Autolackiererei Müller – Nicole Müller-Stapf",
  owner: "Nicole Müller-Stapf",
  street: "Hohlweg 30",
  zip: "74821",
  city: "Mosbach",
  district: "Neckarelz",
  phone: "06261 / 60448",
  phoneHref: "+49626160448",
  mobile: "0178 / 1955290",
  mobileHref: "+491781955290",
  fax: "06261 / 69198",
  email: "kontakt@lackmueller.biz",
  founded: "1976-10-01",
  hours: "Montag – Freitag, 7.30 – 12.00 Uhr und 13.00 – 17.00 Uhr",
  mapsRoute: "https://www.google.com/maps/dir/?api=1&destination=Hohlweg+30,+74821+Mosbach",
} as const;

const IMG = "https://www.lackmueller.biz/files/kunde/inhalt";
export const img = (path: string) => `${IMG}/${path}`;

export const HERO_IMAGE = img("slider/slider_01.jpg");
export const SLIDER_IMAGES = [1, 2, 3, 4, 5, 6, 8, 10, 11, 12].map((n) =>
  img(`slider/slider_${String(n).padStart(2, "0")}.jpg`)
);

export type Service = {
  slug: string;
  title: string;
  nav: string;
  teaser: string;
  headline: string;
  paragraphs: string[];
  highlight: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  metaTitle: string;
  metaDescription: string;
};

export const SERVICES: Service[] = [
  {
    slug: "pkw-lackierungen",
    title: "PKW-Lackierung",
    nav: "PKW-Lackierungen",
    teaser: "Reparatur- und Komplettlackierung – vom Kratzer bis zum neuen Outfit.",
    headline: "PKW Reparatur- und Komplettlackierung",
    paragraphs: [
      "Im Schadenfall können Sie bei uns Ihren Wagen reparieren lassen. Wir übernehmen für Sie gerne die komplette Schadenabwicklung mit der Versicherung.",
      "Durch modernste Softwarelösungen ist es uns möglich, eine reibungslose und schnelle Schadenabwicklung durchzuführen. Dadurch entlasten wir Sie von vielen Formalitäten.",
      "Denn auch für besondere Ansprüche und Lackarten stehen wir Ihnen mit unserem Know-how gerne zur Seite.",
    ],
    highlight: "Benötigt Ihr Fahrzeug ein neues Outfit, so sind wir der richtige Partner für Sie.",
    bullets: [
      "Reparatur- und Komplettlackierung",
      "Komplette Schadenabwicklung mit der Versicherung",
      "Elektronische Farbtonmessung per Spektrometer",
      "Lackierung mit umweltgerechtem Wasserbasislack",
      "Smart Repair und Kunststoffreparatur",
    ],
    image: img("leistungen/pkw-lackierungen.jpg"),
    imageAlt: "PKW-Lackierung in der Lackierkabine der Autolackiererei Müller in Mosbach",
    metaTitle: "PKW-Lackierung in Mosbach – Reparatur & Komplettlackierung",
    metaDescription:
      "PKW-Lackierung in Mosbach-Neckarelz: Reparatur- und Komplettlackierung mit Wasserbasislack, exakter Farbtonmessung und Schadenabwicklung mit Ihrer Versicherung.",
  },
  {
    slug: "lkw-lackierungen",
    title: "LKW- und Buslackierung",
    nav: "LKW-Lackierungen",
    teaser: "Fahrzeuge bis 15 Meter Länge – „Es gibt nichts, was uns zu groß ist.“",
    headline: "LKW- und Buslackierungen",
    paragraphs: [
      "Durch zwei LKW-Vorbereitungsräume und eine LKW-Lackierkabine ist es uns möglich, sämtliche Fahrzeuge bis 15 Meter Länge in unseren Betriebsräumen nach Ihren besonderen Wünschen zu lackieren.",
    ],
    highlight: "Unser Motto dazu: „Es gibt nichts, was uns zu groß ist.“",
    bullets: [
      "Fahrzeuge bis 15 Meter Länge",
      "Zwei LKW-Vorbereitungsräume",
      "LKW-Kombikabine für Großraumfahrzeuge",
      "Lackierung nach Ihren besonderen Wünschen",
      "Passende Beschriftung aus einer Hand",
    ],
    image: img("leistungen/lkw-lakierung.jpg"),
    imageAlt: "LKW-Lackierung bei der Autolackiererei Müller in Mosbach-Neckarelz",
    metaTitle: "LKW- & Buslackierung in Mosbach – Fahrzeuge bis 15 m",
    metaDescription:
      "LKW- und Buslackierung in Mosbach: Zwei Vorbereitungsräume und eine LKW-Lackierkabine für Fahrzeuge bis 15 Meter Länge. Fachbetrieb seit 1976.",
  },
  {
    slug: "unfallinstandsetzung",
    title: "Unfallinstandsetzung",
    nav: "Unfallinstandsetzung",
    teaser: "Karosseriereparatur mit Original-Ersatzteilen und Hilfe bei der Regulierung.",
    headline: "Unfallinstandsetzung",
    paragraphs: [
      "Eine kleine Ablenkung und schon ist es passiert: ein Unfall. In diesem Fall sind wir für Sie der richtige Ansprechpartner. Wir reparieren Ihr Fahrzeug und unterstützen Sie auch gerne bei der Regulierung Ihres Unfallschadens.",
      "Bei der Karosseriereparatur verwenden wir ausschließlich Original-Ersatzteile.",
    ],
    highlight: "Wenn es also gekracht hat, dann rufen Sie uns an. Wir helfen Ihnen gerne weiter.",
    bullets: [
      "Karosseriereparatur mit Original-Ersatzteilen",
      "Unterstützung bei der Unfallregulierung",
      "Haftpflicht- und Kaskoschäden",
      "Schnelle Schadenkalkulation per anerkannter Software",
      "Hol- und Bringdienst und Ersatzfahrzeug",
    ],
    image: img("leistungen/SchadenKunde.jpg"),
    imageAlt: "Unfallinstandsetzung und Karosseriereparatur in Mosbach",
    metaTitle: "Unfallinstandsetzung in Mosbach – Karosserie & Lack",
    metaDescription:
      "Unfallreparatur in Mosbach-Neckarelz: Karosserie- und Lackinstandsetzung mit Original-Ersatzteilen, Hilfe bei der Regulierung, Hol- und Bringdienst.",
  },
  {
    slug: "beschriftungen",
    title: "Fahrzeugbeschriftung",
    nav: "Beschriftungen",
    teaser: "Entwurf, Erstellung und Montage – Ihr Firmenfahrzeug als Werbemittel.",
    headline: "Beschriftungen",
    paragraphs: [
      "Sie benötigen ein effektives Werbemittel? Wir beschriften individuell für Sie Ihr Firmenfahrzeug nach Ihrer Vorlage oder nach eigenen Ideen. Darüber hinaus werden auch Werbetafeln und dergleichen von uns beschriftet.",
      "Die Lösung aus einer Hand bei uns: Entwurf, Erstellung und Montage.",
    ],
    highlight: "Auffällige und professionelle Werbung, dank uns kein Problem!",
    bullets: [
      "Firmenfahrzeuge nach Ihrer Vorlage oder unseren Ideen",
      "Werbetafeln und Schilder",
      "Entwurf, Erstellung und Montage aus einer Hand",
    ],
    image: img("leistungen/bus-haenger-2017.jpg"),
    imageAlt: "Fahrzeugbeschriftung für Firmenfahrzeuge in Mosbach",
    metaTitle: "Fahrzeugbeschriftung in Mosbach – Entwurf bis Montage",
    metaDescription:
      "Fahrzeugbeschriftung in Mosbach: Entwurf, Erstellung und Montage aus einer Hand für Firmenfahrzeuge, Anhänger und Werbetafeln.",
  },
  {
    slug: "lackierkabine-mischanlage",
    title: "Lackierkabine & Mischanlage",
    nav: "Lackierkabine / Mischanlage",
    teaser: "Farbton auf das Gramm genau – gemessen, gemischt, lackiert.",
    headline: "Lackierkabine und Mischanlage",
    paragraphs: [
      "Mit unserem Spektrometer, aber auch durch das geschulte Auge unserer Mitarbeiter, können wir Ihnen den Farbton Ihres Wagens bestimmen.",
      "Anschließend werden mit Hilfe einer elektronischen Waage die einzelnen Farbnuancen auf das Gramm genau abgewogen und miteinander vermischt, so dass der ermittelte Farbton erstellt werden kann.",
      "Somit kann Ihr Fahrzeug in unserer modernen Lackierkabine mit dem genau ermittelten Farbton auf Wasserbasislack lackiert werden.",
    ],
    highlight: "Technik und geschultes Auge – für einen Farbton, der passt.",
    bullets: [
      "Farbtonbestimmung per Spektrometer",
      "Exaktes Mischen mit elektronischer Waage",
      "Moderne Lackier- und Trocknungsanlage mit Abluftsystem",
      "Zwei Lacksysteme für individuelle Kundenwünsche",
    ],
    image: img("leistungen/pkw-lackierungen.jpg"),
    imageAlt: "Lackierkabine und Mischanlage der Autolackiererei Müller",
    metaTitle: "Lackierkabine & Mischanlage – Farbtonmessung in Mosbach",
    metaDescription:
      "Exakte Farbtonmessung per Spektrometer, Mischen auf das Gramm genau und Lackieren auf Wasserbasislack in der modernen Lackierkabine in Mosbach-Neckarelz.",
  },
  {
    slug: "serviceleistungen",
    title: "Service & Mobilität",
    nav: "Serviceleistungen",
    teaser: "Hol- und Bringdienst, Ersatzfahrzeug und Versicherungsabwicklung.",
    headline: "Serviceleistungen",
    paragraphs: [
      "Bei Bedarf bieten wir Ihnen einen Hol- und Bringservice für Ihr Fahrzeug. Da wir mit ausgewählten Mietwagenfirmen zusammenarbeiten, können Sie für die Reparaturdauer ein Ersatzfahrzeug bei uns in Empfang nehmen. Dadurch bleiben Sie mobil und flexibel für die Dauer der Reparatur.",
      "Wir unterstützen und beraten Sie bei der Abwicklung von Versicherungsschäden, ganz egal, ob im Haftpflichtfall oder bei einem Kaskoschaden. Mithilfe einer brancheneigenen und bei den Versicherungen anerkannten Softwarekalkulation können wir schnell und individuell ein Angebot für Ihren Fahrzeugschaden erstellen.",
    ],
    highlight: "Eine Innen- und Außenreinigung Ihres Fahrzeuges nach der Reparatur ist bei uns selbstverständlich.",
    bullets: [
      "Hol- und Bringdienst bei Bedarf",
      "Ersatzfahrzeug für die Reparaturdauer",
      "Abwicklung von Haftpflicht- und Kaskoschäden",
      "Schnelle Kalkulation mit anerkannter Software",
      "Innen- und Außenreinigung nach der Reparatur",
    ],
    image: img("leistungen/corsa-anhaenger.jpg"),
    imageAlt: "Hol- und Bringservice mit Fahrzeuganhänger der Autolackiererei Müller",
    metaTitle: "Hol- & Bringdienst, Ersatzwagen, Schadenabwicklung – Mosbach",
    metaDescription:
      "Service rund um Ihre Reparatur: Hol- und Bringdienst, Ersatzfahrzeug, Abwicklung von Haftpflicht- und Kaskoschäden und Fahrzeugreinigung in Mosbach.",
  },
];

export const ALL_SERVICES_LIST = [
  "PKW- und LKW-Lackierung",
  "Unfallinstandsetzung",
  "Industrie- und Kleinteile-Lackierung",
  "Möbel-Lackierung",
  "Smart Repair",
  "Elektronische Farbtonmessung",
  "Kunststoffreparatur",
  "Autoglas-Service",
  "Beschriftung",
  "Hol- und Bringdienst",
  "Schadenkalkulation mit modernster Software",
];

export const CHRONICLE = [
  { year: "1976", text: "Gründung des Unternehmens am 1.10.1976 durch Maler- und Lackierermeister Willi Müller." },
  { year: "1980", text: "Neubau in Mosbach-Neckarelz, Hohlweg 30 (heutiger Standort). Werkhalle mit 8 Vorbereitungsplätzen, Lackierkabine mit Trockenofen und eine LKW-Kombikabine für Großraumfahrzeuge." },
  { year: "1987", text: "Anbau einer 2. LKW-Vorbereitungshalle, eines Spengler- und eines Beschriftungsraumes." },
  { year: "1990", text: "Tod des Gründers Willi Müller. Weiterführung durch Ilse Müller, Tochter Nicole Müller-Stapf und die Mitarbeiter." },
  { year: "1992", text: "Nicole Müller-Stapf besteht die Maler- und Lackierermeisterprüfung." },
  { year: "1996", text: "Abschluss des Abendstudiums zum staatl. anerkannten Betriebswirt des Handwerks." },
  { year: "2002", text: "Übernahme des Betriebes durch Nicole Müller-Stapf, Maler- und Lackierermeisterin." },
  { year: "2003", text: "Modernisierung von Empfang und Büro. Umstellung auf umweltfreundliche Wasserlacke.", tag: "Nachhaltigkeit" },
  { year: "2005", text: "Einbau eines Ökoplus-Lackiersystems zur Reduzierung des Energieverbrauchs.", tag: "Nachhaltigkeit" },
  { year: "2008", text: "Einführung eines zweiten Lacksystems, um Kundenbedürfnissen noch besser gerecht zu werden." },
  { year: "2010", text: "Umbau der Sozialräume zu modernen Räumlichkeiten für das Wohlbefinden der Mitarbeiter." },
  { year: "2011", text: "Kooperation mit AVIS und SIXT als Partnerbetrieb." },
  { year: "2012", text: "Umbau der Absauganlage zur Umweltschonung und Prävention der Mitarbeitergesundheit." },
  { year: "2013", text: "Anschaffung eines Autoanhängers zur Beförderung von Kundenfahrzeugen." },
  { year: "2014", text: "Umstellung auf LED-Beleuchtung in Arbeitsvorbereitung, Finishbereich und Büro.", tag: "Nachhaltigkeit" },
  { year: "2015", text: "Mitgliedsbetrieb bei ColorMotion zur Erhöhung der Kundenzufriedenheit und Mitarbeiterqualifikation." },
  { year: "2016", text: "40-jähriges Betriebsjubiläum." },
  { year: "2017", text: "Neugestaltung der Betriebsfassade mit neuem Firmenlogo und Außenbeleuchtung." },
  { year: "2018", text: "Austausch der Firmeninnenbeleuchtung in LED-Technik.", tag: "Nachhaltigkeit" },
  { year: "2019", text: "Dachsanierung zur Verringerung notwendiger fossiler Brennstoffe.", tag: "Nachhaltigkeit" },
  { year: "2021", text: "Auszeichnung durch die Handwerkskammer Mannheim für hervorragende Ausbildungsleistungen." },
  { year: "2024", text: "Installation einer Photovoltaik-Anlage zur Produktion von sauberem, umweltfreundlichem Strom.", tag: "Nachhaltigkeit" },
];

export type GalleryItem = { file: string; alt: string; category: string };
const ref = (file: string) => img(`referenzen/${encodeURIComponent(file)}`);

export const GALLERY_CATEGORIES = ["Alle", "Sport- & Premiumwagen", "Nutzfahrzeuge", "Möbel & Kleinteile", "Weitere Arbeiten"];

export const GALLERY: GalleryItem[] = [
  { file: ref("Porsche_rot_neu.jpg"), alt: "Porsche nach der Lackierung in Rot", category: "Sport- & Premiumwagen" },
  { file: ref("Porsche_black-.JPG"), alt: "Porsche in Schwarz lackiert", category: "Sport- & Premiumwagen" },
  { file: ref("Porsche_gre-.JPG"), alt: "Porsche in Grün lackiert", category: "Sport- & Premiumwagen" },
  { file: ref("Porsche_yellow-.JPG"), alt: "Porsche in Gelb lackiert", category: "Sport- & Premiumwagen" },
  { file: ref("R8.jpg"), alt: "Audi R8 Lackierung", category: "Sport- & Premiumwagen" },
  { file: ref("R8_Felgen.jpg"), alt: "Audi R8 mit lackierten Felgen", category: "Sport- & Premiumwagen" },
  { file: ref("Maybach.jpg"), alt: "Maybach Lackierung", category: "Sport- & Premiumwagen" },
  { file: ref("Reinmuth_Kuhlanhanger 015.jpg"), alt: "Lackierter Kühlanhänger", category: "Nutzfahrzeuge" },
  { file: ref("lackiererei-mueller-haenger.jpg"), alt: "Lackierter und beschrifteter Anhänger", category: "Nutzfahrzeuge" },
  { file: ref("Sattler_Fiat 011.jpg"), alt: "Lackiertes und beschriftetes Nutzfahrzeug", category: "Nutzfahrzeuge" },
  { file: ref("Ludascher_baumann 010.jpg"), alt: "Fahrzeugbeschriftung für einen Firmenkunden", category: "Nutzfahrzeuge" },
  { file: ref("stuhl-lackierung.jpg"), alt: "Lackierter Stuhl", category: "Möbel & Kleinteile" },
  { file: ref("motorrad.jpg"), alt: "Lackiertes Motorrad", category: "Möbel & Kleinteile" },
  { file: ref("Flieger.jpg"), alt: "Lackierarbeit an einem Flugzeug-Modell", category: "Weitere Arbeiten" },
  { file: ref("DB 012.jpg"), alt: "Lackierarbeit an einem Nutzfahrzeug", category: "Weitere Arbeiten" },
  { file: ref("022_14A.jpg"), alt: "Lackierarbeit der Autolackiererei Müller", category: "Weitere Arbeiten" },
  { file: ref("026_7A.jpg"), alt: "Lackierarbeit der Autolackiererei Müller", category: "Weitere Arbeiten" },
  { file: ref("040_1.jpg"), alt: "Lackierarbeit der Autolackiererei Müller", category: "Weitere Arbeiten" },
  { file: ref("Aufnahme_0080.jpg"), alt: "Fahrzeug nach der Lackierung", category: "Weitere Arbeiten" },
  { file: ref("Aufnahme_0111.jpg"), alt: "Fahrzeug nach der Lackierung", category: "Weitere Arbeiten" },
  { file: ref("Aufnahme_0114.jpg"), alt: "Fahrzeug nach der Lackierung", category: "Weitere Arbeiten" },
];

export const BEFORE_AFTER = [
  {
    before: ref("Porsche_rot_alt.jpg"),
    after: ref("Porsche_rot_neu.jpg"),
    title: "Porsche – Neulackierung in Rot",
    text: "Vorher verblasster, abgenutzter Lack. Nachher tiefer, gleichmäßiger Glanz.",
  },
];

export const FAQ = [
  {
    q: "Bis zu welcher Länge können Sie LKW und Busse lackieren?",
    a: "Durch zwei LKW-Vorbereitungsräume und eine LKW-Lackierkabine lackieren wir sämtliche Fahrzeuge bis 15 Meter Länge in unseren Betriebsräumen.",
  },
  {
    q: "Übernehmen Sie die Abwicklung mit meiner Versicherung?",
    a: "Ja. Wir unterstützen und beraten Sie bei der Abwicklung von Versicherungsschäden, ob Haftpflichtfall oder Kaskoschaden. Mit einer bei den Versicherungen anerkannten Softwarekalkulation erstellen wir schnell ein individuelles Angebot.",
  },
  {
    q: "Bekomme ich während der Reparatur ein Ersatzfahrzeug?",
    a: "Wir arbeiten mit ausgewählten Mietwagenfirmen zusammen. So können Sie für die Reparaturdauer ein Ersatzfahrzeug bei uns in Empfang nehmen und bleiben mobil.",
  },
  {
    q: "Holen Sie mein Fahrzeug auch ab?",
    a: "Bei Bedarf bieten wir einen Hol- und Bringservice für Ihr Fahrzeug an. Sprechen Sie uns einfach darauf an.",
  },
  {
    q: "Welche Ersatzteile und Lacke verwenden Sie?",
    a: "Bei der Karosseriereparatur verwenden wir ausschließlich Original-Ersatzteile. Gearbeitet wird mit umweltgerechtem Wasserbasislack; Materialien und Technologien sind von den Herstellern geprüft und freigegeben.",
  },
  {
    q: "Wie genau wird der Farbton meines Fahrzeugs getroffen?",
    a: "Wir bestimmen den Farbton mit einem Spektrometer und dem geschulten Auge unserer Mitarbeiter. Die Farbanteile werden mit einer elektronischen Waage auf das Gramm genau gemischt.",
  },
  {
    q: "Wann haben Sie geöffnet?",
    a: "Montag bis Freitag von 7.30 bis 12.00 Uhr und von 13.00 bis 17.00 Uhr. Sie finden uns im Hohlweg 30 in Mosbach-Neckarelz.",
  },
  {
    q: "Wird mein Fahrzeug nach der Reparatur gereinigt?",
    a: "Ja, eine Innen- und Außenreinigung Ihres Fahrzeugs nach der Reparatur ist bei uns selbstverständlich.",
  },
];

// Einzugsgebiet für lokale SEO (Orte im Umkreis von Mosbach).
export const SERVICE_AREA = [
  "Mosbach",
  "Neckarelz",
  "Diedesheim",
  "Obrigheim",
  "Neckarzimmern",
  "Haßmersheim",
  "Billigheim",
  "Aglasterhausen",
  "Binau",
  "Elztal",
  "Buchen (Odenwald)",
  "Eberbach",
  "Neunkirchen",
  "Schefflenz",
  "Walldürn",
  "Neckar-Odenwald-Kreis",
];

export const PARTNERS = [
  { name: "AVIS", note: "Partnerbetrieb seit 2011" },
  { name: "SIXT", note: "Partnerbetrieb seit 2011" },
  { name: "ColorMotion", note: "Mitgliedsbetrieb seit 2015" },
  { name: "Handwerkskammer Mannheim", note: "Auszeichnung Ausbildung 2021" },
];

export const NAV = [
  { href: "/", label: "Start" },
  { href: "/wir-ueber-uns", label: "Über uns" },
  { href: "/leistungen", label: "Leistungen", children: true },
  { href: "/bildergalerie", label: "Galerie" },
  { href: "/stellenangebote", label: "Karriere" },
  { href: "/kontakt", label: "Kontakt" },
];
