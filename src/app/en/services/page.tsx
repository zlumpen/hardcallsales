import React from "react";
import type { Metadata } from "next";
import { languageAlternates } from "@/i18n/config";
import { ServicesView } from "@/views/ServicesView";

export const metadata: Metadata = {
  title: "Our Sales Services — B2B Appointment Setting & Lead Generation",
  description:
    "Six proven ways we fill your pipeline with qualified sales meetings. From AI prospecting and LinkedIn sequences to senior appointment setters and CRM integration.",
  openGraph: {
    title: "Our Sales Services — Hard Call Sales",
    description:
      "Appointment setting with the right decision-makers. 3-month pilot model, 10–100 meetings per month, no lock-in.",
  },
  alternates: languageAlternates("/tjanster", "en"),
};

export default function ServicesPageEn() {
  return <ServicesView locale="en" />;
}
