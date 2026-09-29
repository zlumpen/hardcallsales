import type { Metadata } from "next";
import { languageAlternates } from "@/i18n/config";
import { HomeView } from "@/views/HomeView";

export const metadata: Metadata = {
  alternates: languageAlternates("/", "sv"),
};

export default function HomePage() {
  return <HomeView locale="sv" />;
}
