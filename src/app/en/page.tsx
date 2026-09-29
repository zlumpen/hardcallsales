import type { Metadata } from "next";
import { languageAlternates } from "@/i18n/config";
import { HomeView } from "@/views/HomeView";

export const metadata: Metadata = {
  title: { absolute: "Hard Call Sales — We build B2B pipelines for IT & SaaS" },
  description:
    "Specialists in B2B lead generation, appointment setting and cold calling for IT and SaaS companies. A 3-month pilot model with 10–100 meetings per month, no long-term lock-in.",
  alternates: languageAlternates("/", "en"),
};

export default function HomePageEn() {
  return <HomeView locale="en" />;
}
