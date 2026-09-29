import type { Metadata } from "next";
import { languageAlternates } from "@/i18n/config";
import { CaseView } from "@/views/CaseView";

export const metadata: Metadata = {
  title: "Case & Dokumenterade Resultat — AVEVA, Monster, IDNet m.fl.",
  description:
    "Se hur vi hjälpt ledande bolag att boka möten med rätt beslutsfattare – bland annat mötesbokning som bidrog till affärer värda över 20 MSEK för AVEVA.",
  openGraph: {
    title: "Case & Dokumenterade Resultat — Hard Call Sales",
    description:
      "Bevisen, inte löftena. Dokumenterade resultat för AVEVA, Monster, IDNet, Wall to Wall Group, Allt om Juridik, Milient och Roima Intelligence.",
  },
  alternates: languageAlternates("/case", "sv"),
};

export default function CasePage() {
  return <CaseView locale="sv" />;
}
