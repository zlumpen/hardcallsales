"use client";

import React from "react";
import Link from "next/link";
import { useLocale, useLocalizedHref } from "@/i18n/useLocale";

const COPY = {
  sv: {
    explore: "UTFORSKA",
    home: "Hem",
    cases: "Case",
    about: "Om oss",
    social: "SOCIALT",
    contact: "KONTAKT",
    homeAria: "Hard Call Sales Hem",
    rights: "© 2026 Hard Call Sales AB. Alla rättigheter förbehållna.",
    privacy: "Integritetspolicy",
    terms: "Villkor",
  },
  en: {
    explore: "EXPLORE",
    home: "Home",
    cases: "Cases",
    about: "About us",
    social: "SOCIAL",
    contact: "CONTACT",
    homeAria: "Hard Call Sales Home",
    rights: "© 2026 Hard Call Sales AB. All rights reserved.",
    privacy: "Privacy policy",
    terms: "Terms",
  },
} as const;

export const CommunityFooter: React.FC = () => {
  const t = COPY[useLocale()];
  const lh = useLocalizedHref();
  return (
    <footer className="w-full bg-[#080808] text-white border-t border-[#1C1C1C] relative overflow-hidden min-h-[620px] flex flex-col justify-between">
      
      {/* Background Layer: Dark Conference Room Image on bottom-left, smoothly shadowed and dissolving into the dark canvas */}
      <div 
        className="absolute left-0 bottom-0 w-[65%] sm:w-[50%] h-[75%] sm:h-[70%] pointer-events-none select-none z-0 mix-blend-screen opacity-50"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'left bottom',
          maskImage: 'radial-gradient(ellipse 90% 80% at 10% 90%, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 10% 90%, black 20%, transparent 80%)',
        }}
      />
      {/* Dark gradient overlays to guarantee seamless shadow blending without hard edges */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#080808]/70 to-[#080808] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#080808]/40 to-[#080808] pointer-events-none z-0" />

      {/* Main Content Container: max-w-[1720px] wide canvas */}
      <div className="max-w-[1720px] w-full mx-auto px-8 sm:px-14 lg:px-20 relative z-10 flex-1 flex flex-col justify-between pt-24 sm:pt-28 pb-12 gap-20 sm:gap-24">
        
        {/* Top Row: 3 navigation columns */}
        <div className="flex flex-col lg:flex-row lg:justify-end items-start gap-12 lg:gap-16 w-full">
          
          {/* Right: 3 Navigation & Info Columns (UTFORSKA, SOCIALT, KONTAKT) pushed far right */}
          <div className="w-full lg:w-auto grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
            
            {/* UTFORSKA */}
            <div>
              <span className="text-[11px] font-mono tracking-widest text-[#777777] uppercase block mb-5">
                {t.explore}
              </span>
              <ul className="space-y-3 text-xs sm:text-[13px] text-[#A8A8A8]">
                <li>
                  <Link href={lh("/")} className="hover:text-white transition-colors">{t.home}</Link>
                </li>

                <li>
                  <Link href={lh("/case")} className="hover:text-white transition-colors">{t.cases}</Link>
                </li>
                <li>
                  <Link href={lh("/om")} className="hover:text-white transition-colors">{t.about}</Link>
                </li>
              </ul>
            </div>

            {/* SOCIALT */}
            <div>
              <span className="text-[11px] font-mono tracking-widest text-[#777777] uppercase block mb-5">
                {t.social}
              </span>
              <ul className="space-y-3 text-xs sm:text-[13px] text-[#A8A8A8]">
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                </li>
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
                </li>
                <li>
                  <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">X</a>
                </li>
              </ul>
            </div>

            {/* KONTAKT */}
            <div className="col-span-2 sm:col-span-1">
              <span className="text-[11px] font-mono tracking-widest text-[#777777] uppercase block mb-5">
                {t.contact}
              </span>
              <div className="text-xs sm:text-[13px] text-[#A8A8A8]">
                <a href="mailto:kontakt@hardcallsales.se" className="hover:text-white transition-colors break-all">
                  kontakt@hardcallsales.se
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Left HARD CALL + Right Copyright & Legal */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pt-14 sm:pt-16 border-t border-white/[0.06]">
          
          {/* Authentic Hard Call Sales Brand Logo on Left */}
          <Link href={lh("/")} className="flex items-center gap-3.5 group" aria-label={t.homeAria}>
            <img
              src="/images/logo/hcs-symbol.png"
              alt="Hard Call Sales"
              className="w-9 h-9 sm:w-10 sm:h-10 object-contain brightness-0 invert opacity-95 group-hover:opacity-100 transition-opacity"
            />
            <img
              src="/images/logo/hcs-wordmark.png"
              alt="The Hard Call Sales Group"
              className="h-5 sm:h-6 w-auto object-contain brightness-0 invert opacity-95 group-hover:opacity-100 transition-opacity"
            />
          </Link>

          {/* Copyright & Legal Links on Right */}
          <div className="text-left sm:text-right flex flex-col gap-1.5 text-xs text-[#6E6E6E]">
            <div>{t.rights}</div>
            <div className="flex items-center justify-start sm:justify-end gap-5 text-[#555555] text-[11px]">
              <Link href={lh("/om")} className="hover:text-white transition-colors">{t.privacy}</Link>
              <Link href={lh("/om")} className="hover:text-white transition-colors">{t.terms}</Link>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};
