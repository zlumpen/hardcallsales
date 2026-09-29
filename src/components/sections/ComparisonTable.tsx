"use client";

import React from "react";
import { CheckCircle2, XCircle, TrendingUp, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useLocale, useLocalizedHref } from "@/i18n/useLocale";
import type { Locale } from "@/i18n/config";

interface ComparisonRow {
  dimension: string;
  inHouseTitle: string;
  inHouseDesc: string;
  inHouseIsNegative?: boolean;
  hcsTitle: string;
  hcsDesc: string;
  hcsHighlight?: string;
}

const COMPARISON_DATA_SV: ComparisonRow[] = [
  {
    dimension: "Månadskostnad & TCO",
    inHouseTitle: "85 000 – 120 000 kr / mån",
    inHouseDesc:
      "Per heltidsanställd SDR inkl. grundlön, sociala avgifter (31.42%), tjänstepension, provision, utrustning, arbetsplats och ledningstid.",
    inHouseIsNegative: true,
    hcsTitle: "Fast pilotavgift + Prestation",
    hcsDesc:
      "Transparent modell med förutsägbar månadskostnad baserad på faktiskt levererade, kvalificerade möten. Noll dolda overheadkostnader.",
    hcsHighlight: "Spara 50–65 % i total månadskostnad",
  },
  {
    dimension: "Tid till första mötet (Ramp-up)",
    inHouseTitle: "3 – 6 månader",
    inHouseDesc:
      "Rekryteringsprocess (2–3 mån), onboarding och produktskolning (1–2 mån), samt pipeline-ramp innan de första mötena börjar trilla in.",
    inHouseIsNegative: true,
    hcsTitle: "5 – 10 arbetsdagar",
    hcsDesc:
      "Från genomförd uppstartsworkshop och godkänd ICP är sekvenser, e-postinfrastruktur och telefonsamtal igång omedelbart.",
    hcsHighlight: "Upp till 10x snabbare marknadsinträde",
  },
  {
    dimension: "Tech Stack & Databaser",
    inHouseTitle: "15 000 – 35 000 kr / mån",
    inHouseDesc:
      "Dyra separata licenser för LinkedIn Sales Navigator, Apollo.io, ZoomInfo, e-postdomäner, inbox-warmup och samtalsverktyg.",
    inHouseIsNegative: true,
    hcsTitle: "Allt ingår i samarbetet",
    hcsDesc:
      "Full tillgång till vår globala databas med 100M+ beslutsfattare, LinkedClient AI-agent, uppvärmda domäner och avancerad CRM-synk.",
    hcsHighlight: "0 kr i extra programvarulicenser",
  },
  {
    dimension: "Erfarenhet & Samtalskvalitet",
    inHouseTitle: "Ofta juniora medarbetare (0–2 år)",
    inHouseDesc:
      "Hög personalomsättning (genomsnittlig livslängd för en SDR är 14 månader). Kräver kontinuerlig intern coachning och ledningsresurs.",
    inHouseIsNegative: true,
    hcsTitle: "10 000+ timmars erfarenhet",
    hcsDesc:
      "Seniora B2B- och tech-säljare som behärskar komplex invändningshantering och förstår IT- och SaaS-bolags unika värdeerbjudande.",
    hcsHighlight: "Senior säljkompetens från dag ett",
  },
  {
    dimension: "Affärsrisk & Bindningstid",
    inHouseTitle: "Hög anställningsrisk & LAS",
    inHouseDesc:
      "Fasta anställningsavtal, arbetsgivaransvar, uppsägningstider och hög finansiell risk vid misslyckad rekrytering eller marknadssvängningar.",
    inHouseIsNegative: true,
    hcsTitle: "3 månaders pilot utan bindning",
    hcsDesc:
      "Ni utvärderar faktiskt utfall under 3 månader. Ingen automatisk förlängning. Ombokningsgaranti utan extra kostnad vid no-shows.",
    hcsHighlight: "Fullständig riskeliminering",
  },
  {
    dimension: "Skalbarhet & Flexibilitet",
    inHouseTitle: "Trögrörligt & flaskhalsar",
    inHouseDesc:
      "Att skala upp kräver nya rekryteringsrundor och mer ledning. Att skala ned innebär uppsägningskostnader och förlorad kunskap.",
    inHouseIsNegative: true,
    hcsTitle: "Skala från 10 till 100+ möten",
    hcsDesc:
      "Justera målgrupp, volym och geografiska marknader direkt med ert dedikerade HCS-team efter hand som bolaget växer.",
    hcsHighlight: "Omedelbar elastisk kapacitet",
  },
];

const COMPARISON_DATA_EN: ComparisonRow[] = [
  {
    dimension: "Monthly cost & TCO",
    inHouseTitle: "85 000 – 120 000 kr / mo",
    inHouseDesc:
      "Per full-time SDR, including base salary, payroll taxes (31.42%), occupational pension, commission, equipment, workspace and management time.",
    inHouseIsNegative: true,
    hcsTitle: "Fixed pilot fee + Performance",
    hcsDesc:
      "A transparent model with a predictable monthly cost based on qualified meetings actually delivered. Zero hidden overhead.",
    hcsHighlight: "Save 50–65% in total monthly cost",
  },
  {
    dimension: "Time to first meeting (Ramp-up)",
    inHouseTitle: "3 – 6 months",
    inHouseDesc:
      "Recruitment (2–3 months), onboarding and product training (1–2 months), plus pipeline ramp before the first meetings start coming in.",
    inHouseIsNegative: true,
    hcsTitle: "5 – 10 business days",
    hcsDesc:
      "Once the kickoff workshop is done and the ICP is approved, sequences, email infrastructure and calling go live immediately.",
    hcsHighlight: "Up to 10x faster market entry",
  },
  {
    dimension: "Tech Stack & Databases",
    inHouseTitle: "15 000 – 35 000 kr / mo",
    inHouseDesc:
      "Expensive separate licenses for LinkedIn Sales Navigator, Apollo.io, ZoomInfo, email domains, inbox warm-up and calling tools.",
    inHouseIsNegative: true,
    hcsTitle: "Everything included",
    hcsDesc:
      "Full access to our global database of 100M+ decision-makers, the LinkedClient AI agent, warmed-up domains and advanced CRM sync.",
    hcsHighlight: "0 kr in extra software licenses",
  },
  {
    dimension: "Experience & Call Quality",
    inHouseTitle: "Often junior staff (0–2 years)",
    inHouseDesc:
      "High staff turnover (the average SDR tenure is 14 months). Requires continuous internal coaching and management resources.",
    inHouseIsNegative: true,
    hcsTitle: "10,000+ hours of experience",
    hcsDesc:
      "Senior B2B and tech sellers who master complex objection handling and understand the unique value proposition of IT and SaaS companies.",
    hcsHighlight: "Senior sales expertise from day one",
  },
  {
    dimension: "Business Risk & Commitment",
    inHouseTitle: "High employment risk & Swedish labor law (LAS)",
    inHouseDesc:
      "Permanent employment contracts, employer liability, notice periods and high financial risk if a hire fails or the market shifts.",
    inHouseIsNegative: true,
    hcsTitle: "3-month pilot with no lock-in",
    hcsDesc:
      "You evaluate actual results over 3 months. No automatic renewal. Rebooking guarantee for no-shows at no extra cost.",
    hcsHighlight: "Complete risk elimination",
  },
  {
    dimension: "Scalability & Flexibility",
    inHouseTitle: "Slow to adapt & bottlenecks",
    inHouseDesc:
      "Scaling up requires new hiring rounds and more management. Scaling down means termination costs and lost knowledge.",
    inHouseIsNegative: true,
    hcsTitle: "Scale from 10 to 100+ meetings",
    hcsDesc:
      "Adjust audience, volume and geographic markets directly with your dedicated HCS team as your company grows.",
    hcsHighlight: "Instant elastic capacity",
  },
];

const COMPARISON_DATA: Record<Locale, ComparisonRow[]> = {
  sv: COMPARISON_DATA_SV,
  en: COMPARISON_DATA_EN,
};

const COPY = {
  sv: {
    badge: "Ekonomisk Jämförelse",
    introLine1: "Att bygga och drifta en egen intern sälj- och mötesbokningsfunktion innebär dolda kostnader, lång ramp-up och hög personalrisk.",
    introLine2: "Här är den konkreta skillnaden i siffror och resultat.",
    colDimension: "Jämförelsepunkt",
    colInHouse: "Intern SDR-funktion (In-house)",
    summaryLabel: "Slutsats & Besparing",
    summaryTitle: "Genom HCS sparar ni 60 %+ av uppstartskostnaden och eliminerar 100 % av rekryteringsrisken.",
    summaryText: "Ni får en komplett säljrigg med 100M+ databas, AI-outreach och seniora mötesbokare klara att leverera möten inom 10 dagar.",
    ctaPrimary: "Boka strategisamtal",
    ctaSecondary: "Läs om LinkedClient AI",
  },
  en: {
    badge: "Financial Comparison",
    introLine1: "Building and running your own in-house sales and appointment-setting function comes with hidden costs, a long ramp-up and high staffing risk.",
    introLine2: "Here is the concrete difference in numbers and results.",
    colDimension: "Comparison point",
    colInHouse: "Internal SDR team (In-house)",
    summaryLabel: "Bottom line & Savings",
    summaryTitle: "With HCS you save 60%+ of the startup cost and eliminate 100% of the recruitment risk.",
    summaryText: "You get a complete sales engine with a 100M+ database, AI outreach and senior appointment setters ready to deliver meetings within 10 days.",
    ctaPrimary: "Book a strategy call",
    ctaSecondary: "Read about LinkedClient AI",
  },
} as const;

export const ComparisonTable: React.FC = () => {
  const locale = useLocale();
  const t = COPY[locale];
  const lh = useLocalizedHref();
  const rows = COMPARISON_DATA[locale];
  return (
    <section id="jamforelse" className="w-full bg-[#FAFAFA] text-[#0F0F0F] py-20 sm:py-28 border-b border-[#E6E6E6] relative scroll-mt-20">
      <Container size="wide">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <Badge variant="partner" size="md" className="mb-4">
            <TrendingUp size={13} className="text-[#7851A9] mr-1" />
            <span>{t.badge}</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F0F0F] mb-4">
            In-house SDR vs Hard Call Sales
          </h2>
          <p className="text-base sm:text-lg text-[#6E6E6E] leading-relaxed">
            {t.introLine1}
            {" "}
            {t.introLine2}
          </p>
        </div>

        {/* Comparison Matrix Table */}
        <div className="rounded-3xl bg-white border border-[#E6E6E6] shadow-xl overflow-hidden mb-12">
          
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 bg-[#F2F2F2] border-b border-[#E6E6E6] p-4 sm:p-6 text-sm font-bold">
            <div className="md:col-span-4 text-[#0F0F0F] uppercase tracking-wider text-xs">
              {t.colDimension}
            </div>
            <div className="hidden md:block md:col-span-4 text-[#6E6E6E] uppercase tracking-wider text-xs">
              {t.colInHouse}
            </div>
            <div className="hidden md:block md:col-span-4 text-[#7851A9] uppercase tracking-wider text-xs font-bold">
              Hard Call Sales (Pilot & Partner)
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-[#E6E6E6]">
            {rows.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 p-5 sm:p-8 hover:bg-[#F9F9F9] transition-colors gap-4 md:gap-6 items-start"
              >
                {/* Dimension Column */}
                <div className="md:col-span-4">
                  <span className="text-base sm:text-lg font-bold text-[#0F0F0F] block">
                    {row.dimension}
                  </span>
                  {row.hcsHighlight && (
                    <span className="inline-block mt-2 px-2.5 py-1 rounded-md bg-[#7851A9]/10 text-[#7851A9] text-xs font-semibold">
                      {row.hcsHighlight}
                    </span>
                  )}
                </div>

                {/* In-House Column */}
                <div className="md:col-span-4 p-4 rounded-xl bg-red-500/[0.04] border border-red-500/10 md:bg-transparent md:border-none md:p-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <XCircle size={16} className="text-red-500 shrink-0" />
                    <span className="text-sm font-bold text-[#2A2A2A]">
                      {row.inHouseTitle}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#6E6E6E] leading-relaxed">
                    {row.inHouseDesc}
                  </p>
                </div>

                {/* HCS Column */}
                <div className="md:col-span-4 p-4 rounded-xl bg-[#7851A9]/[0.06] border border-[#7851A9]/20 md:p-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 size={16} className="text-[#7851A9] shrink-0" />
                    <span className="text-sm font-bold text-[#0F0F0F]">
                      {row.hcsTitle}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                    {row.hcsDesc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Summary Value Banner Card */}
        <div className="rounded-2xl sm:rounded-3xl bg-[#0A0A0A] text-white p-6 sm:p-10 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck size={18} className="text-[#7851A9]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#B89FE0]">
                {t.summaryLabel}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              {t.summaryTitle}
            </h3>
            <p className="text-xs sm:text-sm text-[#A8A8A8]">
              {t.summaryText}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 shrink-0 w-full lg:w-auto">
            <Button
              href={lh("/boka-mote")}
              variant="primary"
              size="md"
              hasArrow
              fullWidth
            >
              {t.ctaPrimary}
            </Button>
            <Button
              href={lh("/linkedclient")}
              variant="secondary"
              size="md"
              fullWidth
            >
              {t.ctaSecondary}
            </Button>
          </div>
        </div>

      </Container>
    </section>
  );
};
