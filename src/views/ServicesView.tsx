import React from "react";
import type { Locale } from "@/i18n/config";
import { ServicesHero } from "@/components/sections/ServicesHero";
import { ServicesDeepDive } from "@/components/sections/ServicesDeepDive";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { PilotTimeline } from "@/components/sections/PilotTimeline";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { CtaBanner } from "@/components/sections/CtaBanner";

const COPY = {
  sv: {
    faqTitle: "Vanliga frågor om våra säljtjänster & leverans",
    faqSubtitle:
      "Här besvarar vi de vanligaste funderingarna kring hur en pilot fungerar, hur möten kvalificeras och vad som händer vid no-shows.",
    ctaEyebrow: "Redo att fylla kalendern?",
    ctaTitle: "Vill du se hur många möten vi kan boka i er bransch?",
    ctaSubtitle:
      "Efter tre månaders pilot vet ni exakt vad ett samarbete genererar i pipeline och stängda affärer. Ingen långsiktig bindning under testet.",
    ctaButton: "Boka ett förutsättningslöst möte",
  },
  en: {
    faqTitle: "Frequently asked questions about our sales services & delivery",
    faqSubtitle:
      "Here we answer the most common questions about how a pilot works, how meetings are qualified and what happens with no-shows.",
    ctaEyebrow: "Ready to fill your calendar?",
    ctaTitle: "Want to see how many meetings we can book in your industry?",
    ctaSubtitle:
      "After a three-month pilot, you'll know exactly what a partnership generates in pipeline and closed deals. No long-term commitment during the test.",
    ctaButton: "Book a no-obligation meeting",
  },
} as const;

export function ServicesView({ locale }: { locale: Locale }) {
  const t = COPY[locale];
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* 1. Hero Section */}
      <ServicesHero />

      {/* 2. Comprehensive Deep-Dive into all 6 Core Services */}
      <ServicesDeepDive />

      {/* 3. In-House SDR vs Hard Call Sales Comparison Matrix */}
      <ComparisonTable />

      {/* 4. Embedded 6-Step Pilot Timeline & Methodology */}
      <PilotTimeline />

      {/* 5. Service & Delivery FAQ Accordion */}
      <FaqAccordion
        title={t.faqTitle}
        subtitle={t.faqSubtitle}
        defaultCategory="Tjänster"
        theme="dark"
      />

      {/* 6. High-Conversion Final CTA Banner */}
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
