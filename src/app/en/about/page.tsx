import React from "react";
import type { Metadata } from "next";
import { languageAlternates } from "@/i18n/config";
import { AboutView } from "@/views/AboutView";

export const metadata: Metadata = {
  title: "About Us & the Team — The people behind the calls",
  description:
    "Get to know Hard Call Sales. We combine world-leading AI technology and LinkedClient with senior B2B sales reps from our hubs in Stockholm and Sliema, Malta.",
  openGraph: {
    title: "About Us — Hard Call Sales",
    description:
      "We're building the future of B2B sales. Numbers before adjectives, 100% transparency and hubs in Stockholm & Malta.",
  },
  alternates: languageAlternates("/om", "en"),
};

export default function AboutPageEn() {
  return <AboutView locale="en" />;
}
