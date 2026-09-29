"use client";

import React from "react";
import { useLocale } from "@/i18n/useLocale";

const COPY = {
  sv: {
    l1: "Köpare vill förstå värdet innan de pratar med en säljare.",
    l2: "Säljare vill att varje samtal ska starta med ett varmt intresse.",
    l3: "Traditionell kallprospektering saktar ner båda parter.",
    l4: "LinkedClient förändrar detta.",
  },
  en: {
    l1: "Buyers want to understand the value before they talk to a sales rep.",
    l2: "Sales reps want every call to start with genuine, warm interest.",
    l3: "Traditional cold prospecting slows both sides down.",
    l4: "LinkedClient changes that.",
  },
} as const;

export const LinkedClientManifesto: React.FC = () => {
  const t = COPY[useLocale()];
  return (
    <section className="w-full bg-[#000000] text-white py-28 sm:py-36 lg:py-44 relative z-10 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 text-center">
        {/* Typographic Manifesto with stark contrast matching Bild 2 */}
        <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
          {/* White High-Contrast Lines */}
          <p className="text-2xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-white leading-[1.25]">
            {t.l1}
          </p>

          <p className="text-2xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-white leading-[1.25]">
            {t.l2}
          </p>

          {/* Muted Contrast Lines */}
          <div className="pt-4 sm:pt-6 space-y-4 sm:space-y-6">
            <p className="text-2xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-neutral-600 leading-[1.25]">
              {t.l3}
            </p>

            <p className="text-2xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-neutral-500 leading-[1.25]">
              {t.l4}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
