import React from "react";
import type { Metadata } from "next";
import { languageAlternates } from "@/i18n/config";
import { CareersView } from "@/views/CareersView";

export const metadata: Metadata = {
  title: "Jobba hos oss – Karriär inom B2B-försäljning",
  description:
    "Bli en del av Hard Call Sales i Stockholm eller på Malta. Fast lön + provision för Nordens främsta B2B-säljare och talanger. Ansök direkt – svar inom 24–48h.",
  openGraph: {
    title: "Jobba hos oss | Hard Call Sales",
    description:
      "Prestation före adjektiv – ett äkta säljhantverk. Ansök till Hard Call Sales i Stockholm eller på Malta.",
  },
  alternates: languageAlternates("/jobba-hos-oss", "sv"),
};

export default function CareersPage() {
  return <CareersView locale="sv" />;
}
