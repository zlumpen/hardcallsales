import React from "react";
import type { Metadata } from "next";
import { languageAlternates } from "@/i18n/config";
import { ServicesView } from "@/views/ServicesView";

export const metadata: Metadata = {
  title: "Våra Säljtjänster — Mötesbokning B2B & Leadgenerering | Hard Call Sales",
  description:
    "Sex beprövade sätt vi fyller er pipeline med kvalificerade säljmöten. Från AI-prospektering och LinkedIn-sekvenser till seniora mötesbokare och CRM-integration.",
  openGraph: {
    title: "Våra Säljtjänster — Hard Call Sales",
    description:
      "Mötesbokning med rätt beslutsfattare. 3-månaders pilotmodell, 10–100 möten per månad, ingen bindningstid.",
  },
  alternates: languageAlternates("/tjanster", "sv"),
};

export default function ServicesPage() {
  return <ServicesView locale="sv" />;
}
