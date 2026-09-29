import React from "react";
import type { Metadata } from "next";
import { languageAlternates } from "@/i18n/config";
import { LinkedClientView } from "@/views/LinkedClientView";

export const metadata: Metadata = {
  title: "LinkedClient — Autonom AI-Säljagent för B2B",
  description:
    "Världens första AI-Sales agent som kombinerar autonom AI-prospektering och hyper-personaliserad kontakt med seniora säljares telefonavslut. Certifierad partner.",
  openGraph: {
    title: "LinkedClient — Er autonoma AI-säljagent för B2B | Hard Call Sales",
    description:
      "Automatiserad prospektering mot 100M+ beslutsfattare kombinerat med telefonavslut av erfarna säljare. Boka live-demo idag.",
  },
  alternates: languageAlternates("/linkedclient", "sv"),
};

export default function LinkedClientPage() {
  return <LinkedClientView locale="sv" />;
}
