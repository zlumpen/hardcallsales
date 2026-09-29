// ─────────────────────────────────────────────────────────────
// Språkinställningar för hardcallsales.com
// Svenska (sv) ligger på roten: /, /tjanster, /ledning ...
// Engelska (en) ligger under /en: /en, /en/services, /en/leadership ...
// ─────────────────────────────────────────────────────────────

export type Locale = "sv" | "en";
export const LOCALES: Locale[] = ["sv", "en"];
export const DEFAULT_LOCALE: Locale = "sv";
export const SITE_URL = "https://hardcallsales.com";

/** Svensk sökväg → engelsk sökväg (första segmentet). */
export const ROUTE_MAP: Record<string, string> = {
  "/": "/en",
  "/tjanster": "/en/services",
  "/ledning": "/en/leadership",
  "/case": "/en/cases",
  "/boka-mote": "/en/book-a-meeting",
  "/om": "/en/about",
  "/jobba-hos-oss": "/en/careers",
  "/linkedclient": "/en/linkedclient",
};

const EN_TO_SV: Record<string, string> = Object.fromEntries(
  Object.entries(ROUTE_MAP).map(([sv, en]) => [en, sv])
);

export function localeFromPath(pathname: string | null | undefined): Locale {
  if (!pathname) return DEFAULT_LOCALE;
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "sv";
}

function splitHref(href: string) {
  const m = href.match(/^([^?#]*)([?#].*)?$/);
  return { path: m?.[1] || "/", rest: m?.[2] || "" };
}

/**
 * Översätter en intern (svensk) länk till rätt språk.
 * localizeHref("/tjanster#kampanjer", "en") → "/en/services#kampanjer"
 * Externa länkar (http, mailto, tel) lämnas orörda.
 */
export function localizeHref(href: string, locale: Locale): string {
  if (!href || !href.startsWith("/") || href.startsWith("//")) return href;
  if (locale === "sv") return href;
  if (href === "/en" || href.startsWith("/en/") || href.startsWith("/en#")) return href;
  const { path, rest } = splitHref(href);
  const clean = path.length > 1 ? path.replace(/\/$/, "") : path;
  if (ROUTE_MAP[clean]) return ROUTE_MAP[clean] + rest;
  // Undersidor, t.ex. /ledning/malin → /en/leadership/malin
  const seg = "/" + clean.split("/")[1];
  if (ROUTE_MAP[seg]) return ROUTE_MAP[seg] + clean.slice(seg.length) + rest;
  return href; // okänd sida (t.ex. /images/...) – lämna som den är
}

/** Samma sida på det andra språket (för SV | EN-knappen). */
export function alternatePath(pathname: string, target: Locale): string {
  const current = localeFromPath(pathname);
  if (current === target) return pathname;
  if (target === "en") return localizeHref(pathname, "en");
  // en → sv
  const clean = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  if (EN_TO_SV[clean]) return EN_TO_SV[clean];
  const parts = clean.split("/"); // ["", "en", "leadership", "malin"]
  const seg = "/" + parts.slice(1, 3).join("/");
  if (EN_TO_SV[seg]) return EN_TO_SV[seg] + clean.slice(seg.length);
  return "/";
}

/** hreflang-alternativ för metadata. svPath = den svenska sökvägen. */
export function languageAlternates(svPath: string, locale: Locale) {
  const enPath = localizeHref(svPath, "en");
  return {
    canonical: locale === "en" ? enPath : svPath,
    languages: { sv: svPath, en: enPath, "x-default": svPath },
  };
}
