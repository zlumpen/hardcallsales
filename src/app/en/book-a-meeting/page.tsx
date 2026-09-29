import React from "react";
import type { Metadata } from "next";
import { languageAlternates } from "@/i18n/config";
import { BookingView } from "@/views/BookingView";

export const metadata: Metadata = {
  title: "Book a meeting with our sales leadership",
  description:
    "Book a no-obligation strategy call. We'll get back to you within 24 hours to walk through your target audience and what a 3-month pilot could look like for you. No lock-in.",
  openGraph: {
    title: "Book a meeting with our sales leadership | Hard Call Sales",
    description:
      "Pick a time in the calendar or leave your details: reply within 24h, 100% no-obligation and no lock-in.",
  },
  alternates: languageAlternates("/boka-mote", "en"),
};

export default function BookingPageEn() {
  return <BookingView locale="en" />;
}
