"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, CheckCircle2, Sparkles, Shield, Clock, Calendar, ArrowRight } from "lucide-react";
import { BookingForm } from "@/components/sections/BookingForm";
import { openCalModal, DEFAULT_CAL_LINK } from "@/components/cal/CalProvider";
import { localizeHref, type Locale } from "@/i18n/config";

const COPY = {
  sv: {
    back: "Tillbaka till startsidan",
    eyebrow: "STRATEGISAMTAL · BOKA MÖTE",
    titleStart: "Boka ett möte med ",
    titleMuted: "vår säljledning.",
    lead: "Välj vad ni vill uppnå och lämna era uppgifter. Vi återkommer inom 24 timmar för att gå igenom er målgrupp och hur en 3-månaders pilot kan se ut för er.",
    calendarCta: "Välj tid direkt i kalendern",
    orForm: "eller fyll i specifikationen nedan ↓",
    trust1: "100 % förutsättningslöst",
    trust2: "Svar inom 24h",
    trust3: "Ingen bindningstid",
    loading: "Laddar formulär...",
  },
  en: {
    back: "Back to home",
    eyebrow: "STRATEGY CALL · BOOK A MEETING",
    titleStart: "Book a meeting with ",
    titleMuted: "our sales leadership.",
    lead: "Choose what you want to achieve and leave your details. We'll get back to you within 24 hours to walk through your target audience and what a 3-month pilot could look like for you.",
    calendarCta: "Pick a time in the calendar",
    orForm: "or fill in the brief below ↓",
    trust1: "100% no-obligation",
    trust2: "Reply within 24h",
    trust3: "No lock-in",
    loading: "Loading form...",
  },
} as const;

function BookingFormWithParams() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service") || "";
  return <BookingForm initialService={serviceParam} />;
}

export function BookingView({ locale }: { locale: Locale }) {
  const t = COPY[locale];
  return (
    <div className="w-full min-h-screen bg-[#0A0A0A] text-white pt-28 sm:pt-36 pb-24 relative overflow-hidden select-none">
      {/* Ambient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Navigation Back Link */}
        <div className="mb-8 sm:mb-12">
          <Link
            href={localizeHref("/", locale)}
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-400 hover:text-white uppercase transition-colors"
          >
            <ArrowLeft size={14} />
            <span>{t.back}</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-[11px] font-mono tracking-widest text-neutral-300 uppercase mb-6">
            <Sparkles className="w-3 h-3 text-[#7851A9]" />
            <span>{t.eyebrow}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.05] mb-6">
            {t.titleStart}<br className="hidden sm:block" />
            <span className="text-neutral-400 font-normal">{t.titleMuted}</span>
          </h1>

          <p className="text-neutral-300 text-base sm:text-xl font-normal leading-relaxed max-w-2xl">
            {t.lead}
          </p>

          {/* Quick Direct Calendar Modal Booking Option */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <button
              type="button"
              onClick={() => openCalModal()}
              data-cal-link={DEFAULT_CAL_LINK}
              data-cal-config='{"layout":"month_view","theme":"dark"}'
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-neutral-200 transition-all shadow-lg cursor-pointer"
            >
              <Calendar size={15} />
              <span>{t.calendarCta}</span>
              <ArrowRight size={14} />
            </button>
            <span className="text-xs font-mono text-neutral-400">{t.orForm}</span>
          </div>

          {/* 3 Trust Signals */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-10 pt-8 mt-8 border-t border-white/10 text-xs font-mono text-neutral-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-emerald-400" />
              <span>{t.trust1}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-neutral-400" />
              <span>{t.trust2}</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-neutral-400" />
              <span>{t.trust3}</span>
            </div>
          </div>
        </div>

        {/* Dedicated Full-Page Form Container */}
        <div className="w-full max-w-4xl mx-auto">
          <Suspense fallback={<div className="h-96 flex items-center justify-center text-neutral-500 font-mono">{t.loading}</div>}>
            <BookingFormWithParams />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
