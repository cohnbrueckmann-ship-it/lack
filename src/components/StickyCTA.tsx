import Link from "next/link";
import { COMPANY } from "@/lib/data";
import { PhoneIcon } from "./Icons";

/** Feste Aktionsleiste – nur auf Mobilgeräten sichtbar (Anrufen / Anfrage). */
export default function StickyCTA() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-white/85 px-4 pt-3 backdrop-blur-xl lg:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
        <a href={`tel:${COMPANY.phoneHref}`} className="btn btn-primary !min-h-[46px] !px-4 !text-[16px]">
          <PhoneIcon className="h-4 w-4" /> Anrufen
        </a>
        <Link href="/kontakt" className="btn btn-secondary !min-h-[46px] !px-4 !text-[16px]">
          Anfrage senden
        </Link>
      </div>
    </div>
  );
}
