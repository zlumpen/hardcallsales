import type { Metadata } from "next";
import { languageAlternates } from "@/i18n/config";
import { CaseView } from "@/views/CaseView";

export const metadata: Metadata = {
  title: "Case Studies & Documented Results — AVEVA, Monster, IDNet and more",
  description:
    "See how we've helped leading IT and SaaS companies generate more than 20 MSEK in new business and book hundreds of qualified meetings with the right decision-makers.",
  openGraph: {
    title: "Case Studies & Documented Results — Hard Call Sales",
    description:
      "Proof, not promises. Documented results for AVEVA, Monster, IDNet, Wall to Wall Group, Allt om Juridik and NordTech Solutions.",
  },
  alternates: languageAlternates("/case", "en"),
};

export default function CasesPageEn() {
  return <CaseView locale="en" />;
}
