import { NavItem, FooterColumn } from "@/types";
import type { Locale } from "@/i18n/config";

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: "Start", href: "/" },
  { label: "LinkedClient", href: "/linkedclient", badge: "AI" },
  { label: "Case", href: "/case" },
  { label: "Ledning", href: "/ledning" },
  { label: "Jobba hos oss", href: "/jobba-hos-oss" },
];

export const PRIMARY_CTA: NavItem = {
  label: "Boka ett möte",
  href: "/boka-mote",
  isButton: true,
};

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Navigering",
    links: [
      { label: "Startsida", href: "/" },
      { label: "Tjänster", href: "/tjanster" },
      { label: "LinkedClient AI", href: "/linkedclient" },
      { label: "Case", href: "/case" },
      { label: "Om oss", href: "/om" },
      { label: "Jobba hos oss", href: "/jobba-hos-oss" },
      { label: "Boka möte", href: "/boka-mote" },
    ],
  },
  {
    title: "Våra Tjänster",
    links: [
      { label: "Mötesbokning med beslutsfattare", href: "/tjanster#motesbokning" },
      { label: "Mejl- & LinkedIn-kampanjer", href: "/tjanster#kampanjer" },
      { label: "Telefonuppföljning & säljstöd", href: "/tjanster#telefon" },
      { label: "Nätverksbyggande & prospektering", href: "/tjanster#natverk" },
      { label: "AI-driven segmentering", href: "/tjanster#segmentering" },
      { label: "Kalender- & CRM-integrering", href: "/tjanster#integration" },
    ],
  },
  {
    title: "Kontakt & Hubbar",
    links: [
      { label: "+46 70 850 63 04", href: "tel:+46708506304", isExternal: true },
      { label: "info@hardcallsales.se", href: "mailto:info@hardcallsales.se", isExternal: true },
      { label: "Sliema, Malta (Mayflower Mansions, 12th Floor)", href: "/om#kontor" },
      { label: "Stockholm, Sverige", href: "/om#kontor" },
    ],
  },
];

export const COMPANY_INFO = {
  name: "Hard Call Sales",
  legalName: "Hard Call Sales AB",
  tagline: "Vi bygger B2B-pipelines för IT- och SaaS-bolag — snabbt.",
  description: "Specialister på B2B-leadgenerering, kalla samtal och AI-driven mötesbokning med beslutsfattare i Norden och globalt.",
  phone: "+46 70 850 63 04",
  phoneFormatted: "+46 70 850 63 04",
  email: "info@hardcallsales.se",
  addressMalta: "Mayflower Mansions, 12th Floor, Sliema, Malta",
  addressStockholm: "Stockholm, Sverige",
  hours: "Vardagar 08:00 – 17:00 CET",
  copyright: `© ${new Date().getFullYear()} Hard Call Sales. Alla rättigheter förbehållna.`,
};

// ── English ─────────────────────────────────────────────────
// Länkarna anges med svenska sökvägar; komponenterna översätter dem med localizeHref().
export const MAIN_NAV_ITEMS_EN: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "LinkedClient", href: "/linkedclient", badge: "AI" },
  { label: "Cases", href: "/case" },
  { label: "Leadership", href: "/ledning" },
  { label: "Careers", href: "/jobba-hos-oss" },
];

export const PRIMARY_CTA_EN: NavItem = {
  label: "Book a meeting",
  href: "/boka-mote",
  isButton: true,
};

export const getMainNav = (locale: Locale) => (locale === "en" ? MAIN_NAV_ITEMS_EN : MAIN_NAV_ITEMS);
export const getPrimaryCta = (locale: Locale) => (locale === "en" ? PRIMARY_CTA_EN : PRIMARY_CTA);
