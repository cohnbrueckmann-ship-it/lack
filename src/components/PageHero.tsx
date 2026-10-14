import Link from "next/link";
import JsonLd from "./JsonLd";
import { breadcrumbSchema } from "@/lib/seo";

export default function PageHero({
  title,
  intro,
  crumbs,
}: {
  title: string;
  intro?: string;
  crumbs: { name: string; path: string }[];
}) {
  const all = [{ name: "Start", path: "/" }, ...crumbs];
  return (
    <section className="bg-mist pb-14 pt-28 sm:pb-20 sm:pt-36">
      <div className="wrap">
        <nav aria-label="Brotkrumen" className="mb-6 text-sm text-mute">
          <ol className="flex flex-wrap items-center gap-x-2">
            {all.map((c, i) => (
              <li key={c.path} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden>/</span>}
                {i < all.length - 1 ? (
                  <Link href={c.path} className="hover:text-ink">{c.name}</Link>
                ) : (
                  <span aria-current="page" className="text-ink">{c.name}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="display max-w-4xl">{title}</h1>
        {intro && <p className="lead mt-6 max-w-2xl">{intro}</p>}
      </div>
      <JsonLd data={breadcrumbSchema(all)} />
    </section>
  );
}
