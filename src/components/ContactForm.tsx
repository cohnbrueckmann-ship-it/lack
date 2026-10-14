"use client";

import { useRef, useState } from "react";
import { CheckIcon } from "./Icons";

const TOPICS = [
  "Unfallschaden / Reparatur",
  "Lackierung PKW",
  "LKW- / Buslackierung",
  "Beschriftung",
  "Smart Repair / Kleinschaden",
  "Sonstiges",
];

type Status = "idle" | "sending" | "ok" | "error";

export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const startedAt = useRef<number>(Date.now());

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, elapsed: Date.now() - startedAt.current }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Senden fehlgeschlagen.");
      setStatus("ok");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Senden fehlgeschlagen.");
    }
  }

  if (status === "ok") {
    return (
      <div role="status" className="rounded-3xl bg-white p-10 text-center shadow-sm ring-1 ring-black/5">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent text-white">
          <CheckIcon className="h-7 w-7" />
        </span>
        <h3 className="mt-5 text-2xl">Anfrage gesendet</h3>
        <p className="mt-2 text-mute">Danke! Wir melden uns schnellstmöglich bei Ihnen – in der Regel noch am selben Werktag.</p>
        <button type="button" className="btn btn-secondary mt-6" onClick={() => setStatus("idle")}>
          Weitere Anfrage stellen
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-9" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-[15px] font-medium">Name *</label>
          <input id="name" name="name" required autoComplete="name" className="field" placeholder="Ihr Name" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-[15px] font-medium">Telefon</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className="field" placeholder="Für Rückruf" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className="mb-1.5 block text-[15px] font-medium">E-Mail *</label>
          <input id="email" name="email" type="email" required autoComplete="email" className="field" placeholder="name@beispiel.de" />
        </div>
        {!compact && (
          <>
            <div>
              <label htmlFor="topic" className="mb-1.5 block text-[15px] font-medium">Anliegen</label>
              <select id="topic" name="topic" className="field" defaultValue={TOPICS[0]}>
                {TOPICS.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="vehicle" className="mb-1.5 block text-[15px] font-medium">Fahrzeug (Marke, Modell)</label>
              <input id="vehicle" name="vehicle" className="field" placeholder="z. B. VW Golf 7" />
            </div>
          </>
        )}
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-[15px] font-medium">Ihre Nachricht *</label>
          <textarea id="message" name="message" required rows={compact ? 4 : 5} className="field resize-y" placeholder="Beschreiben Sie kurz den Schaden oder Ihr Vorhaben." />
        </div>

        {/* Honeypot – für Menschen unsichtbar */}
        <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        <label className="flex items-start gap-3 text-[15px] leading-snug text-mute sm:col-span-2">
          <input type="checkbox" name="consent" required className="mt-0.5 h-5 w-5 shrink-0 rounded accent-[#0071e3]" />
          <span>
            Ich stimme zu, dass meine Angaben zur Bearbeitung der Anfrage gespeichert und verarbeitet werden. Details in der{" "}
            <a href="/datenschutz" className="text-accent underline underline-offset-2">Datenschutzerklärung</a>. *
          </span>
        </label>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-5 rounded-2xl bg-red-50 px-4 py-3 text-[15px] text-red-700">
          {message} Bitte versuchen Sie es erneut oder rufen Sie uns an: 06261 / 60448.
        </p>
      )}

      <button type="submit" disabled={status === "sending"} className="btn btn-primary mt-7 w-full disabled:opacity-60 sm:w-auto">
        {status === "sending" ? "Wird gesendet …" : "Anfrage senden"}
      </button>
      <p className="mt-4 text-sm text-mute">Kostenlos und unverbindlich. Pflichtfelder sind mit * markiert.</p>
    </form>
  );
}
