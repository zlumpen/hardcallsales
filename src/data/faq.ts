import { FaqItem } from "@/types";
import type { Locale } from "@/i18n/config";

export const FAQS: FaqItem[] = [
  {
    question: "Hur snabbt kommer vi igång med en pilot?",
    answer:
      "Efter genomförd uppstartsworkshop och godkänd ICP (Ideal Customer Profile) sätter vi upp teknisk infrastruktur, kalenderkopplingar och manus. Kampanjerna och telefonsamtalen startar normalt inom 5–10 arbetsdagar.",
    category: "Pilotmodellen",
  },
  {
    question: "Vad händer om ett bokat möte inte dyker upp (no-show)?",
    answer:
      "Vi tar fullt ansvar hela vägen fram till genomfört möte. Om en beslutsfattare uteblir följer vårt team upp och bokar om mötet utan någon extra kostnad för er.",
    category: "Pilotmodellen",
  },
  {
    question: "Binder vi upp oss på lång tid?",
    answer:
      "Nej. Vår pilotmodell löper över exakt 3 månader utan automatisk förlängning. Efter perioden gör vi en gemensam utvärdering av ROI och ni väljer fritt om och hur ni vill skala vidare.",
    category: "Pilotmodellen",
  },
  {
    question: "Hur definieras ett kvalificerat möte?",
    answer:
      "Under uppstartsworkshopen fastställer vi tillsammans era exakta kvalificeringskriterier (t.ex. företagsstorlek, roll/titel, omsättning, teknikstack och intresseområde). Endast möten som uppfyller samtliga krav räknas i leveransen.",
    category: "Pilotmodellen",
  },
  {
    question: "Vad är LinkedClient och hur samverkar det med era säljare?",
    answer:
      "LinkedClient är en banbrytande AI-Sales agent som analyserar profiler, köpsignaler och skickar personaliserade sekvenser via LinkedIn och mejl. När agenten öppnar en dialog tar våra seniora säljare vid via telefon för att kvalificera och boka mötet i er kalender.",
    category: "Tjänster",
  },
  {
    question: "Vilka CRM-system kan ni integrera med?",
    answer:
      "Vi integrerar sömlöst med alla ledande CRM-plattformar, inklusive HubSpot, Salesforce, Pipedrive, Microsoft Dynamics och Upsales, samt kalendrar som Google Calendar och Microsoft Outlook.",
    category: "Teknik & Integration",
  },
  {
    question: "Vem äger datan och kontakterna som tas fram under kampanjen?",
    answer:
      "Ni äger 100 % av all målgruppsdata, e-postlistor, anteckningar och kontaktuppgifter som genereras under samarbetet. All information exporteras direkt till ert CRM.",
    category: "Allmänt",
  },
  {
    question: "Hur ser prismodellen ut?",
    answer:
      "Vi tillämpar en transparent modell anpassad för tech- och SaaS-bolag med en fast uppstarts- och driftavgift kombinerat med resultatbaserad ersättning per levererat kvalificerat möte.",
    category: "Allmänt",
  },
];

// Kategori-id:n är svenska och identiska i båda språken (används för filtrering).
export const FAQS_EN: FaqItem[] = [
  {
    question: "How quickly can we get a pilot up and running?",
    answer:
      "Once the kickoff workshop is complete and the ICP (Ideal Customer Profile) is approved, we set up the technical infrastructure, calendar integrations and scripts. Campaigns and calls normally go live within 5–10 business days.",
    category: "Pilotmodellen",
  },
  {
    question: "What happens if a booked meeting doesn't show up (no-show)?",
    answer:
      "We take full responsibility all the way until the meeting takes place. If a decision-maker doesn't show, our team follows up and rebooks the meeting at no extra cost to you.",
    category: "Pilotmodellen",
  },
  {
    question: "Are we locked into a long-term commitment?",
    answer:
      "No. Our pilot model runs for exactly 3 months with no automatic renewal. After the period, we jointly evaluate the ROI and you are free to decide whether and how to scale further.",
    category: "Pilotmodellen",
  },
  {
    question: "How is a qualified meeting defined?",
    answer:
      "During the kickoff workshop, we define your exact qualification criteria together (e.g. company size, role/title, revenue, tech stack and area of interest). Only meetings that meet every requirement count toward delivery.",
    category: "Pilotmodellen",
  },
  {
    question: "What is LinkedClient and how does it work with your sales reps?",
    answer:
      "LinkedClient is a groundbreaking AI sales agent that analyzes profiles and buying signals and sends personalized sequences via LinkedIn and email. Once the agent opens a conversation, our senior sales reps take over by phone to qualify and book the meeting in your calendar.",
    category: "Tjänster",
  },
  {
    question: "Which CRM systems can you integrate with?",
    answer:
      "We integrate seamlessly with all leading CRM platforms, including HubSpot, Salesforce, Pipedrive, Microsoft Dynamics and Upsales, as well as calendars such as Google Calendar and Microsoft Outlook.",
    category: "Teknik & Integration",
  },
  {
    question: "Who owns the data and contacts generated during the campaign?",
    answer:
      "You own 100% of all audience data, email lists, notes and contact details generated during the partnership. All information is exported directly to your CRM.",
    category: "Allmänt",
  },
  {
    question: "What does the pricing model look like?",
    answer:
      "We use a transparent model tailored to tech and SaaS companies: a fixed setup and operating fee combined with performance-based compensation per qualified meeting delivered.",
    category: "Allmänt",
  },
];

export function getFaqs(locale: Locale): FaqItem[] {
  return locale === "en" ? FAQS_EN : FAQS;
}
