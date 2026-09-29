import React from "react";
import type { Metadata } from "next";
import { languageAlternates } from "@/i18n/config";
import { LinkedClientView } from "@/views/LinkedClientView";

export const metadata: Metadata = {
  title: "LinkedClient — Autonomous AI Sales Agent for B2B",
  description:
    "The world's first AI sales agent, combining autonomous AI prospecting and hyper-personalized outreach with phone closing by senior sales reps. Certified partner.",
  openGraph: {
    title: "LinkedClient — Your autonomous AI sales agent for B2B | Hard Call Sales",
    description:
      "Automated prospecting across 100M+ decision-makers, combined with phone closing by experienced sales reps. Book a live demo today.",
  },
  alternates: languageAlternates("/linkedclient", "en"),
};

export default function LinkedClientPageEn() {
  return <LinkedClientView locale="en" />;
}
