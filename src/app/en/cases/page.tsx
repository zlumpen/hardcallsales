import type { Metadata } from "next";
import { languageAlternates } from "@/i18n/config";
import { CaseView } from "@/views/CaseView";

export const metadata: Metadata = {
  title: "Case Studies & Documented Results — AVEVA, Monster, IDNet and more",
  description:
    "See how we have helped leading companies book meetings with the right decision-makers – including appointment booking that contributed to deals worth over SEK 20 million for AVEVA.",
  openGraph: {
    title: "Case Studies & Documented Results — Hard Call Sales",
    description:
      "Proof, not promises. Documented results for AVEVA, Monster, IDNet, Wall to Wall Group, Allt om Juridik, Milient and Roima Intelligence.",
  },
  alternates: languageAlternates("/case", "en"),
};

export default function CasesPageEn() {
  return <CaseView locale="en" />;
}
