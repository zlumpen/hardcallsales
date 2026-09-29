"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useLocale, useLocalizedHref } from "@/i18n/useLocale";

const COPY = {
  sv: {
    breadcrumbAria: "Brödsmulor",
    home: "Startsida",
    current: "Tjänster",
    badge1: "Våra Säljtjänster",
    badge2: "End-to-End B2B Säljexekvering",
    titleStart: "Sex sätt vi fyller er pipeline med",
    titleHighlight: "kvalificerade möten",
    subtitleLine1: "Från AI-driven målgruppsanalys och LinkedIn-sekvenser till kalla samtal och kalenderbokningar.",
    subtitleLine2: "Vi hanterar hela prospekterings- och mötesbokningskedjan så era säljare kan fokusera på att stänga affärer.",
    ctaPrimary: "Boka strategisamtal",
    ctaSecondary: "Jämför In-house vs HCS",
    stat1Label: "Möten per månad i piloten",
    stat2Label: "Beslutsfattare i global databas",
    stat3Value: "10 000+",
    stat3Label: "Timmars erfarenhet per säljare",
    stat4Label: "Fast anställnings- & rekryteringsrisk",
  },
  en: {
    breadcrumbAria: "Breadcrumb",
    home: "Home",
    current: "Services",
    badge1: "Our Sales Services",
    badge2: "End-to-End B2B Sales Execution",
    titleStart: "Six ways we fill your pipeline with",
    titleHighlight: "qualified meetings",
    subtitleLine1: "From AI-driven audience analysis and LinkedIn sequences to cold calling and calendar bookings.",
    subtitleLine2: "We run the entire prospecting and appointment-setting chain so your sales reps can focus on closing deals.",
    ctaPrimary: "Book a strategy call",
    ctaSecondary: "Compare In-house vs HCS",
    stat1Label: "Meetings per month during the pilot",
    stat2Label: "Decision-makers in our global database",
    stat3Value: "10,000+",
    stat3Label: "Hours of experience per sales rep",
    stat4Label: "Permanent hiring & recruitment risk",
  },
} as const;

export const ServicesHero: React.FC = () => {
  const t = COPY[useLocale()];
  const lh = useLocalizedHref();
  return (
    <section className="relative w-full pt-12 pb-20 sm:pt-16 sm:pb-28 overflow-hidden bg-[#0A0A0A] text-white border-b border-[#2B2B2B]">
      <Container size="wide" className="relative z-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label={t.breadcrumbAria} className="flex items-center gap-2 text-xs sm:text-sm text-[#A8A8A8] mb-8">
          <Link href={lh("/")} className="hover:text-white transition-colors">
            {t.home}
          </Link>
          <span className="text-[#6E6E6E]">/</span>
          <span className="text-[#B89FE0] font-medium">{t.current}</span>
        </nav>

        {/* Hero Content */}
        <div className="max-w-4xl">
          {/* Eyebrow badge */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6">
            <Badge variant="purple-soft" size="md">
              <Sparkles size={13} className="text-[#7851A9] mr-1" />
              <span>{t.badge1}</span>
            </Badge>
            <Badge variant="glass" size="md">
              <Zap size={13} className="text-[#B89FE0] mr-1" />
              <span>{t.badge2}</span>
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-6">
            {t.titleStart}{" "}
            <span className="text-[#7851A9] drop-shadow-[0_0_25px_rgba(120,81,169,0.35)]">
              {t.titleHighlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-[#A8A8A8] font-normal leading-relaxed mb-10 max-w-3xl">
            {t.subtitleLine1}
            {" "}
            {t.subtitleLine2}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14">
            <Button
              href={lh("/boka-mote")}
              variant="primary"
              size="lg"
              hasArrow
            >
              {t.ctaPrimary}
            </Button>
            <Button
              href="#jamforelse"
              variant="secondary"
              size="lg"
            >
              {t.ctaSecondary}
            </Button>
          </div>

          {/* Key Stat Badges Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-8 border-t border-white/10">
            <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <div className="text-xl sm:text-2xl font-bold font-mono text-white mb-1">
                10–100
              </div>
              <div className="text-xs text-[#A8A8A8] font-medium leading-tight">
                {t.stat1Label}
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <div className="text-xl sm:text-2xl font-bold font-mono text-white mb-1">
                100M+
              </div>
              <div className="text-xs text-[#A8A8A8] font-medium leading-tight">
                {t.stat2Label}
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <div className="text-xl sm:text-2xl font-bold font-mono text-white mb-1">
                {t.stat3Value}
              </div>
              <div className="text-xs text-[#A8A8A8] font-medium leading-tight">
                {t.stat3Label}
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <div className="text-xl sm:text-2xl font-bold font-mono text-[#B89FE0] mb-1">
                0 kr
              </div>
              <div className="text-xs text-[#A8A8A8] font-medium leading-tight">
                {t.stat4Label}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
