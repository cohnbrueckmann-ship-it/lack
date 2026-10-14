import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Payload = Record<string, unknown>;
const str = (v: unknown, max = 2000) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as Payload | null;
  if (!body) return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });

  // Spam-Schutz: Honeypot gefüllt oder in < 2,5 s abgeschickt → still verwerfen
  if (str(body.website) || Number(body.elapsed) < 2500) return NextResponse.json({ ok: true });

  const name = str(body.name, 120);
  const email = str(body.email, 200);
  const phone = str(body.phone, 60);
  const topic = str(body.topic, 120);
  const vehicle = str(body.vehicle, 160);
  const message = str(body.message, 4000);

  if (!name || !message) return NextResponse.json({ error: "Bitte Name und Nachricht angeben." }, { status: 422 });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ error: "Bitte eine gültige E-Mail-Adresse angeben." }, { status: 422 });
  if (!body.consent) return NextResponse.json({ error: "Bitte stimmen Sie der Datenverarbeitung zu." }, { status: 422 });

  const text = [
    "Neue Anfrage über die Website",
    "",
    `Name: ${name}`,
    `E-Mail: ${email}`,
    `Telefon: ${phone || "–"}`,
    `Anliegen: ${topic || "–"}`,
    `Fahrzeug: ${vehicle || "–"}`,
    "",
    message,
  ].join("\n");

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    // Entwicklung ohne Mail-Anbieter: Anfrage nur in der Server-Konsole ausgeben.
    console.info("[contact] RESEND_API_KEY fehlt – Anfrage nicht versendet:\n" + text);
    return NextResponse.json({ ok: true, dev: true });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM ?? "Website <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO ?? "kontakt@lackmueller.biz"],
      reply_to: email,
      subject: `Anfrage: ${topic || "Kontaktformular"} – ${name}`,
      text,
    }),
  });

  if (!res.ok) {
    console.error("[contact] Resend-Fehler", res.status, await res.text().catch(() => ""));
    return NextResponse.json({ error: "Die Nachricht konnte nicht zugestellt werden." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
