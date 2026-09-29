import React from "react";
import type { Metadata } from "next";
import { languageAlternates } from "@/i18n/config";
import { AboutView } from "@/views/AboutView";

export const metadata: Metadata = {
  title: "Om Oss & Teamet — Människorna bakom samtalen",
  description:
    "Lär känna Hard Call Sales. Vi kombinerar världsledande AI-teknologi och LinkedClient med seniora B2B-säljare från våra hubbar i Stockholm och Sliema, Malta.",
  openGraph: {
    title: "Om Oss — Hard Call Sales",
    description:
      "Vi bygger framtidens B2B-försäljning. Siffror före adjektiv, 100 % transparens och hubbar i Stockholm & Malta.",
  },
  alternates: languageAlternates("/om", "sv"),
};

export default function AboutPage() {
  return <AboutView locale="sv" />;
}
