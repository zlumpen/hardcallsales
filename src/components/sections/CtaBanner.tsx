"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { useLocale, useLocalizedHref } from "@/i18n/useLocale";

const COPY = {
  sv: {
    buttonLabel: "Boka ett möte",
    line1: "Redo att fylla kalendern?",
    line2: "Boka ett möte med oss först.",
  },
  en: {
    buttonLabel: "Book a meeting",
    line1: "Ready to fill your calendar?",
    line2: "Book a meeting with us first.",
  },
} as const;

export interface CtaBannerProps {
  titleLine1?: string;
  titleLine2?: string;
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  buttonLabel?: string;
  buttonHref?: string;
  theme?: "dark" | "paper";
  className?: string;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({
  titleLine1,
  titleLine2,
  title,
  subtitle,
  eyebrow,
  buttonLabel,
  buttonHref = "/boka-mote",
}) => {
  const t = COPY[useLocale()];
  const lh = useLocalizedHref();
  const label = buttonLabel ?? t.buttonLabel;
  const line1 = titleLine1 || title || t.line1;
  const line2 = titleLine2 || (title ? "" : t.line2);
  return (
    <section className="w-full bg-[#0A0A0A] text-white py-28 sm:py-36 border-t border-[#1C1C1C] relative overflow-hidden">
      <Container size="wide">
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          
          <h2 className="text-3xl sm:text-5xl lg:text-[48px] font-bold tracking-tight text-white leading-tight mb-8 sm:mb-10">
            {line1} {line2 && <><br />{line2}</>}
          </h2>

          <Link
            href={lh(buttonHref)}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#7851A9] hover:bg-[#684196] text-white font-semibold text-base transition-all group shadow-md"
          >
            <span>{label}</span>
            <div className="w-8 h-8 rounded-full bg-[#0A0A0A] flex items-center justify-center text-white">
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>

        </div>
      </Container>
    </section>
  );
};
