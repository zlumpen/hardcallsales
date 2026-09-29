"use client";

import { useEffect } from "react";
import { useLocale } from "./useLocale";

/** Sätter <html lang> till rätt språk när man byter mellan /en och svenska sidor. */
export function HtmlLang() {
  const locale = useLocale();
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  return null;
}
