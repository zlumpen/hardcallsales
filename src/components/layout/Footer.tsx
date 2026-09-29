"use client";

import React from "react";
import Link from "next/link";
import { useLocale, useLocalizedHref } from "@/i18n/useLocale";
import { Container } from "@/components/ui/Container";

export const Footer: React.FC = () => {
  const en = useLocale() === "en";
  const lh = useLocalizedHref();
  return (
    <footer className="w-full bg-[#0A0A0A] text-[#A8A8A8] border-t border-[#1C1C1C] py-8 sm:py-10">
      <Container size="wide">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs sm:text-[13px]">
          
          {/* Copyright / Attribution */}
          <div className="text-[#6E6E6E] font-normal">
            Hard Call Sales — Stockholm & Malta
          </div>

          {/* Sitemaps Links in a clean horizontal row */}
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">

            <Link href={lh("/linkedclient")} className="text-[#8E8E8E] hover:text-white transition-colors">
              LinkedClient
            </Link>
            <Link href={lh("/case")} className="text-[#8E8E8E] hover:text-white transition-colors">
              {en ? "Cases" : "Case"}
            </Link>
            <Link href={lh("/ledning")} className="text-[#8E8E8E] hover:text-white transition-colors">
              {en ? "Leadership" : "Ledning"}
            </Link>
            <Link href={lh("/jobba-hos-oss")} className="text-[#8E8E8E] hover:text-white transition-colors">
              {en ? "Careers" : "Jobba hos oss"}
            </Link>
            <Link href={lh("/boka-mote")} className="text-[#8E8E8E] hover:text-white transition-colors">
              {en ? "Book a meeting" : "Boka möte"}
            </Link>
          </nav>

        </div>
      </Container>
    </footer>
  );
};
