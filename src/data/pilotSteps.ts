import { PilotStep } from "@/types";
import type { Locale } from "@/i18n/config";

export const PILOT_STEPS: PilotStep[] = [
  {
    step: "01",
    title: "Workshop & uppstart",
    subtitle: "Förberedelse och djupdykning i ert erbjudande",
    layoutSide: "left",
    points: [
      "Vi går igenom ert erbjudande, affärsmål och nuläge",
      "Ni håller en presentation så vi förstår erbjudandet fullt ut",
      "Vi säkerställer att vi kan svara på vanliga invändningar i samtal",
      "Vi definierar vad som räknas som ett kvalificerat möte",
    ],
  },
  {
    step: "02",
    title: "Mål & KPI:er",
    subtitle: "Tydliga nyckeltal och förväntansbild",
    layoutSide: "right",
    points: [
      "Vi sätter tydliga mål för testperioden",
      "Vi enas om hur vi mäter resultat",
      "Vi mäter antal möten, kvalitet, show rate och konvertering",
      "Allt dokumenteras och görs tillgängligt i er dashboard",
    ],
  },
  {
    step: "03",
    title: "Målgrupp & beslutsfattare",
    subtitle: "Identifiering av exakt rätt mottagare",
    layoutSide: "left",
    points: [
      "Vi går igenom exakt målgrupp: bransch, roll, storlek och region",
      "Vi tar fram er idealkundprofil (ICP) och kompletterar med vår globala databas",
      "Ni har alltid full insyn i vilka vi kontaktar",
    ],
  },
  {
    step: "04",
    title: "Teknisk setup",
    subtitle: "Infrastruktur, domäner och systemintegration",
    layoutSide: "right",
    points: [
      "Vi integrerar er kalender så möten bokas direkt hos rätt person",
      "Vi sätter upp dedikerade e-postkonton och LinkedIn-profiler för outreach",
      "CRM-integration görs sömlöst där det är relevant (HubSpot, Salesforce etc.)",
    ],
  },
  {
    step: "05",
    title: "Bokningsflöde & uppföljning",
    subtitle: "Aktivt uppsökande arbete och mötesbokning",
    layoutSide: "left",
    points: [
      "Vi sätter rutiner för bokning, bekräftelser och påminnelser",
      "Ni får löpande rapporter — veckovis",
      "Vi följer upp möten för att säkra kvalitet och närvaro",
      "Justeringar görs löpande om något kan förbättras",
      "Ni slipper jaga — vi tar ansvar hela vägen fram till mötet",
    ],
  },
  {
    step: "06",
    title: "Utvärdering & Nästa steg",
    subtitle: "Slutsatser, affärsnytta och rekommendation för skala",
    layoutSide: "right",
    points: [
      "Vi analyserar datan från kampanjen och kopplar till affärsnytta",
      "Vi presenterar en sammanställning: antal möten, kvalitet och utfall",
      "Vi ger en tydlig rekommendation för hur ett fullt samarbete kan se ut",
      "Fokus: hur vi maximerar affärsvärde per investerad krona",
    ],
  },
];

export const PILOT_STEPS_EN: PilotStep[] = [
  {
    step: "01",
    title: "Workshop & kickoff",
    subtitle: "Preparation and a deep dive into your offering",
    layoutSide: "left",
    points: [
      "We review your offering, business goals and current situation",
      "You give us a presentation so we fully understand the offering",
      "We make sure we can handle common objections on calls",
      "We define what counts as a qualified meeting",
    ],
  },
  {
    step: "02",
    title: "Goals & KPIs",
    subtitle: "Clear metrics and aligned expectations",
    layoutSide: "right",
    points: [
      "We set clear goals for the test period",
      "We agree on how results are measured",
      "We track number of meetings, quality, show rate and conversion",
      "Everything is documented and made available in your dashboard",
    ],
  },
  {
    step: "03",
    title: "Audience & decision-makers",
    subtitle: "Pinpointing exactly the right recipients",
    layoutSide: "left",
    points: [
      "We define your exact target audience: industry, role, company size and region",
      "We build your ideal customer profile (ICP) and enrich it with our global database",
      "You always have full visibility into who we contact",
    ],
  },
  {
    step: "04",
    title: "Technical setup",
    subtitle: "Infrastructure, domains and system integration",
    layoutSide: "right",
    points: [
      "We integrate your calendar so meetings are booked directly with the right person",
      "We set up dedicated email accounts and LinkedIn profiles for outreach",
      "Seamless CRM integration where relevant (HubSpot, Salesforce, etc.)",
    ],
  },
  {
    step: "05",
    title: "Booking flow & follow-up",
    subtitle: "Active outreach and appointment setting",
    layoutSide: "left",
    points: [
      "We set up routines for booking, confirmations and reminders",
      "You receive ongoing reports — every week",
      "We follow up on meetings to secure quality and attendance",
      "Adjustments are made continuously whenever something can be improved",
      "No chasing on your end — we take ownership all the way to the meeting",
    ],
  },
  {
    step: "06",
    title: "Evaluation & Next steps",
    subtitle: "Conclusions, business impact and a recommendation for scaling",
    layoutSide: "right",
    points: [
      "We analyze the campaign data and tie it to business impact",
      "We present a summary: number of meetings, quality and outcomes",
      "We give a clear recommendation for what a full partnership could look like",
      "Focus: how we maximize business value per krona invested",
    ],
  },
];

export function getPilotSteps(locale: Locale): PilotStep[] {
  return locale === "en" ? PILOT_STEPS_EN : PILOT_STEPS;
}
