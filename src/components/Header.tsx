"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { COMPANY, NAV, SERVICES } from "@/lib/data";
import { ChevronIcon, CloseIcon, MenuIcon, PhoneIcon } from "./Icons";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || open ? "bg-white/80 shadow-[0_1px_0_rgba(0,0,0,0.08)] backdrop-blur-xl backdrop-saturate-150" : "bg-transparent"
        }`}
      >
        <div className="wrap flex h-14 items-center justify-between sm:h-16">
          <Link href="/" className="flex items-center gap-2.5 text-[17px] font-semibold tracking-tight" aria-label="Autolackiererei Müller – Startseite">
            <span className="grid h-8 w-8 place-items-center rounded-[9px] bg-ink text-sm text-white" aria-hidden>M</span>
            <span className={scrolled || open || pathnameIsLight(pathname) ? "text-ink" : "text-white"}>Autolackiererei Müller</span>
          </Link>

          <nav aria-label="Hauptnavigation" className="hidden items-center gap-1 lg:flex">
            {NAV.filter((n) => n.href !== "/").map((item) => (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`flex items-center gap-1 rounded-full px-4 py-2 text-[15px] transition-colors ${
                    scrolled || pathnameIsLight(pathname) ? "text-ink/80 hover:text-ink" : "text-white/85 hover:text-white"
                  } ${isActive(item.href) ? "font-semibold" : ""}`}
                >
                  {item.label}
                  {item.children && <ChevronIcon className="h-3.5 w-3.5 opacity-60" />}
                </Link>
                {item.children && (
                  <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <ul className="rounded-3xl bg-white/95 p-2 shadow-[0_20px_60px_-12px_rgba(0,0,0,0.25)] ring-1 ring-black/5 backdrop-blur-xl">
                      {SERVICES.map((s) => (
                        <li key={s.slug}>
                          <Link href={`/leistungen/${s.slug}`} className="block rounded-2xl px-4 py-2.5 text-[15px] text-ink hover:bg-mist">
                            {s.nav}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
            <a href={`tel:${COMPANY.phoneHref}`} className="btn btn-primary ml-3 !min-h-[40px] !px-5 !text-[15px]">
              <PhoneIcon className="h-4 w-4" /> {COMPANY.phone}
            </a>
          </nav>

          <button
            type="button"
            className={`grid h-11 w-11 place-items-center rounded-full lg:hidden ${scrolled || open || pathnameIsLight(pathname) ? "text-ink" : "text-white"}`}
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>

      {/* Mobiles Vollbild-Menü */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl transition-all duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Mobile Navigation" className="flex h-full flex-col overflow-y-auto px-6 pb-10 pt-24">
          <ul className="space-y-1">
            {NAV.map((item, i) => (
              <li
                key={item.href}
                style={{ transitionDelay: open ? `${80 + i * 45}ms` : "0ms" }}
                className={`transition-all duration-500 ${open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
              >
                <Link href={item.href} className="block py-2.5 text-[28px] font-semibold tracking-tight">
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mb-2 ml-1 border-l border-line pl-4">
                    {SERVICES.map((s) => (
                      <li key={s.slug}>
                        <Link href={`/leistungen/${s.slug}`} className="block py-1.5 text-[17px] text-mute">
                          {s.nav}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-auto grid gap-3 pt-8">
            <a href={`tel:${COMPANY.phoneHref}`} className="btn btn-primary">
              <PhoneIcon /> Jetzt anrufen
            </a>
            <Link href="/kontakt" className="btn btn-secondary">
              Anfrage senden
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

// Seiten ohne dunklen Hero haben einen hellen Hintergrund → dunkle Header-Schrift.
function pathnameIsLight(pathname: string) {
  return pathname !== "/";
}
