import React from "react";
import type { Locale } from "@/i18n/config";
import { AboutHero } from "@/components/sections/AboutHero";
import { CompanyStory } from "@/components/sections/CompanyStory";
import { CoreValues } from "@/components/sections/CoreValues";
import { LeadershipGrid } from "@/components/sections/LeadershipGrid";
import { DualHubPresence } from "@/components/sections/DualHubPresence";
import { CareerTeaser } from "@/components/sections/CareerTeaser";
import { CtaBanner } from "@/components/sections/CtaBanner";

const COPY = {
  sv: {
    ctaEyebrow: "Redo att lära känna oss närmare?",
    ctaTitle: "Lär känna oss över ett förutsättningslöst möte",
    ctaSubtitle:
      "Vi visar hur vår pilotmodell fungerar i praktiken och presenterar en analys av er marknadspotential. 20 minuter, inga förpliktelser.",
    ctaButton: "Boka ett introduktionsmöte",
  },
  en: {
    ctaEyebrow: "Ready to get to know us better?",
    ctaTitle: "Get to know us in a no-obligation meeting",
    ctaSubtitle:
      "We'll show you how our pilot model works in practice and present an analysis of your market potential. 20 minutes, no obligations.",
    ctaButton: "Book an intro meeting",
  },
} as const;

export function AboutView({ locale }: { locale: Locale }) {
  const t = COPY[locale];
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* 1. Hero Section */}
      <AboutHero />

      {/* 2. Company Story & Mission (Traditional to Hybrid AI Outreach) */}
      <CompanyStory />

      {/* 3. Core Values (4 Pillars: Resultat, Transparens, Precision, Partnerskap) */}
      <CoreValues />

      {/* 4. Leadership & Team Grid with Detailed Profiles & LinkedIn Links */}
      <LeadershipGrid />

      {/* 5. Dual Hub Presence (Stockholm HQ & Sliema Malta Hub) */}
      <DualHubPresence />

      {/* 6. Career Teaser (Link to /jobba-hos-oss) */}
      <CareerTeaser />

      {/* 7. High-Conversion Final CTA Banner */}
      <CtaBanner
        eyebrow={t.ctaEyebrow}
        title={t.ctaTitle}
        subtitle={t.ctaSubtitle}
        buttonLabel={t.ctaButton}
        buttonHref="/boka-mote"
      />
    </div>
  );
}
