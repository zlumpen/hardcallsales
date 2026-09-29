import React from "react";
import type { Metadata } from "next";
import { languageAlternates } from "@/i18n/config";
import { BookingView } from "@/views/BookingView";

export const metadata: Metadata = {
  title: "Boka ett möte med vår säljledning",
  description:
    "Boka ett förutsättningslöst strategisamtal. Vi återkommer inom 24 timmar för att gå igenom er målgrupp och hur en 3-månaders pilot kan se ut för er. Ingen bindningstid.",
  openGraph: {
    title: "Boka ett möte med vår säljledning | Hard Call Sales",
    description:
      "Välj tid direkt i kalendern eller lämna era uppgifter – svar inom 24h, 100 % förutsättningslöst och ingen bindningstid.",
  },
  alternates: languageAlternates("/boka-mote", "sv"),
};

export default function BookingPage() {
  return <BookingView locale="sv" />;
}
