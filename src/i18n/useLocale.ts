"use client";

import { usePathname } from "next/navigation";
import { useCallback } from "react";
import { localeFromPath, localizeHref, type Locale } from "./config";

/** Aktuellt språk, baserat på URL:en (/en/... = engelska). */
export function useLocale(): Locale {
  return localeFromPath(usePathname());
}

/** Returnerar en funktion som gör om interna länkar till rätt språk. */
export function useLocalizedHref() {
  const locale = useLocale();
  return useCallback((href: string) => localizeHref(href, locale), [locale]);
}
