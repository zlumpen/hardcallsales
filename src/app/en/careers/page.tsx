import React from "react";
import type { Metadata } from "next";
import { languageAlternates } from "@/i18n/config";
import { CareersView } from "@/views/CareersView";

export const metadata: Metadata = {
  title: "Careers – Work in B2B Sales",
  description:
    "Join Hard Call Sales in Stockholm or Malta. Base salary + commission for the Nordics' finest B2B sales reps and talent. Apply directly – reply within 24–48h.",
  openGraph: {
    title: "Careers | Hard Call Sales",
    description:
      "Performance over adjectives – a true sales craft. Apply to Hard Call Sales in Stockholm or Malta.",
  },
  alternates: languageAlternates("/jobba-hos-oss", "en"),
};

export default function CareersPageEn() {
  return <CareersView locale="en" />;
}
