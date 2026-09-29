"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { alternatePath, localeFromPath, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

/** SV | EN – leder till samma sida på det andra språket. */
export const LanguageSwitch: React.FC<{ className?: string }> = ({ className }) => {
  const pathname = usePathname() || "/";
  const current = localeFromPath(pathname);

  const item = (locale: Locale, label: string) => {
    const active = current === locale;
    return (
      <Link
        href={alternatePath(pathname, locale)}
        hrefLang={locale}
        aria-current={active ? "true" : undefined}
        aria-label={locale === "sv" ? "Svenska" : "English"}
        className={cn(
          "transition-colors duration-200",
          active ? "text-white" : "text-[#6E6E6E] hover:text-white"
        )}
      >
        {label}
      </Link>
    );
  };

  return (
    <div
      className={cn(
        "flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider select-none",
        className
      )}
    >
      {item("sv", "SV")}
      <span className="text-white/15 font-normal">|</span>
      {item("en", "EN")}
    </div>
  );
};
