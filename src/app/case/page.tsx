import type { Metadata } from "next";
import { languageAlternates } from "@/i18n/config";
import { CaseView } from "@/views/CaseView";

export const metadata: Metadata = {
  title: "Case & Dokumenterade Resultat — AVEVA, Monster, IDNet m.fl. | Hard Call Sales",
  description:
    "Se hur vi hjälpt ledande IT- och SaaS-bolag att generera över 20 MSEK i nya affärer och boka hundratals kvalificerade möten med rätt beslutsfattare.",
  openGraph: {
    title: "Case & Dokumenterade Resultat — Hard Call Sales",
    description:
      "Bevisen, inte löftena. Dokumenterade resultat för AVEVA, Monster, IDNet, Wall to Wall Group, Allt om Juridik och NordTech Solutions.",
  },
  alternates: languageAlternates("/case", "sv"),
};

export default function CasePage() {
  return <CaseView locale="sv" />;
}
