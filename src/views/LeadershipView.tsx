import React from 'react';
import { localizeHref, type Locale } from '@/i18n/config';
import Link from 'next/link';
import { ArrowDown, Sparkles, Calendar, Mail } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { LeadershipCardsSection } from '@/components/sections/LeadershipCardsSection';

// Skickar bilden via Vercels bildoptimering (webp/avif i rätt storlek per skärm)
const opt = (src: string, w: number) => `/_next/image?url=${encodeURIComponent(src)}&w=${w}&q=75`;
const optSet = (src: string, widths: number[]) => widths.map((w) => `${opt(src, w)} ${w}w`).join(", ");

const COPY = {
  sv: {
    heroAlt: 'Hard Call Sales Ledningsarkitektur',
    heroBadge: 'HARD CALL SALES · LEDNING & PARTNERS',
    heroTitle: 'Principer, säljhantverk ',
    heroTitleMuted: '& operativt ledarskap.',
    heroBody:
      'Vi grundade Hard Call Sales för att bevisa att kvalificerade B2B-möten aldrig bygger på slump. Det bygger på tusentals timmar av säljhantverk, absolut transparens och partners som själva leder från frontlinjen.',
    scroll: 'Scrolla för att möta ledningen',
    ctaBadge: 'DIREKTDIALOG MED GRUNDARNA',
    ctaTitle: 'Boka ett strategisamtal direkt med ledningen.',
    ctaBody:
      'Gå igenom er målgrupp, er marknadspotential och hur en tre månaders pilot kan se ut för ert bolag. 20 minuter, 100 % förutsättningslöst.',
    ctaPrimary: 'Boka strategimöte',
    ctaEmail: 'Skicka e-post till ledningen',
  },
  en: {
    heroAlt: 'Hard Call Sales leadership architecture',
    heroBadge: 'HARD CALL SALES · LEADERSHIP & PARTNERS',
    heroTitle: 'Principles, sales craftsmanship ',
    heroTitleMuted: '& operational leadership.',
    heroBody:
      'We founded Hard Call Sales to prove that qualified B2B meetings are never a matter of chance. They are built on thousands of hours of sales craftsmanship, absolute transparency and partners who lead from the front line themselves.',
    scroll: 'Scroll to meet the leadership',
    ctaBadge: 'DIRECT DIALOGUE WITH THE FOUNDERS',
    ctaTitle: 'Book a strategy call directly with leadership.',
    ctaBody:
      'Walk through your target audience, your market potential and what a three-month pilot could look like for your company. 20 minutes, 100% no-obligation.',
    ctaPrimary: 'Book a strategy meeting',
    ctaEmail: 'Email the leadership team',
  },
} as const;

export function LeadershipView({ locale }: { locale: Locale }) {
  const t = COPY[locale];
  return (
    <main className="w-full min-h-screen bg-[#050505] text-white flex flex-col">
      <Header />

      {/* ── 1. FULL EDITORIAL HERO MED HÖGUPPLÖST ARKITEKTURFOTO ── */}
      <section className="relative w-full min-h-[92vh] sm:min-h-screen flex flex-col justify-between overflow-hidden bg-white select-none pt-28 pb-12 sm:pb-16 border-b border-neutral-900">
        {/* Bakgrund: 2.5K Högupplöst arkitekturfoto som ramar in himlen */}
        <img
          src={opt("/images/architecture-skylight-framed.jpg", 1920)}
          srcSet={optSet("/images/architecture-skylight-framed.jpg", [828, 1200, 1920, 2048])}
          sizes="100vw"
          decoding="async"
          alt={t.heroAlt}
          className="absolute inset-0 w-full h-full object-cover object-center brightness-100 contrast-105 pointer-events-none"
        />

        {/* Diskret mjuk bottenövergång till mörka sektionen */}
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent pointer-events-none z-10" />

        {/* Huvudrubrik & Editorial Typografi placerad i den öppna rena himlen */}
        <div className="relative z-20 w-full max-w-[1480px] mx-auto px-6 sm:px-10 lg:px-16 pt-16 sm:pt-24 lg:pt-28 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/10 backdrop-blur-md border border-black/10 text-[11px] font-mono tracking-widest text-neutral-950 uppercase mb-6 sm:mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-neutral-950 animate-pulse" />
            <span>{t.heroBadge}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-[76px] xl:text-[86px] font-medium tracking-tight text-neutral-950 leading-[1.04] max-w-4xl">
            {t.heroTitle}<br />
            <span className="text-neutral-500 font-normal">{t.heroTitleMuted}</span>
          </h1>

          {/* Tydlig och lättläst brödtext med hög kontrast och perfekt radavstånd */}
          <p className="mt-6 sm:mt-8 text-base sm:text-xl lg:text-[21px] text-neutral-800 font-normal max-w-2xl leading-relaxed">
            {t.heroBody}
          </p>
        </div>

        {/* Botten-HUD ovanpå fasaderna */}
        <div className="relative z-20 w-full max-w-[1480px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/90">
          <div className="flex items-center gap-4 uppercase tracking-wider">
            <span>STOCKHOLM (59.33°N)</span>
            <span>·</span>
            <span>SLIEMA, MALTA (35.91°N)</span>
          </div>

          <a
            href="#ledning"
            className="flex items-center gap-2 uppercase tracking-widest text-white hover:text-neutral-300 transition-colors animate-bounce"
          >
            <span>{t.scroll}</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* ── 2. LEDNINGSSEKTIONEN EXAKT SOM PÅ STARTSIDAN (SAMMA BAKGRUND, AURA & KORT) ── */}
      <LeadershipCardsSection />

      {/* ── 3. STRATEGISAMTAL MED LEDNINGEN (BOKA MÖTE CTA) ── */}
      <section className="w-full bg-[#0A0A0A] border-t border-neutral-800 py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-6 sm:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-widest text-neutral-300 uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#7851A9]" />
            <span>{t.ctaBadge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white mb-6">
            {t.ctaTitle}
          </h2>

          <p className="text-neutral-400 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-light">
            {t.ctaBody}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href={localizeHref('/boka-mote', locale)}
              className="inline-flex items-center px-8 py-4 rounded-full bg-white text-black text-sm font-medium uppercase tracking-wider hover:bg-neutral-200 transition-colors shadow-xl"
            >
              <Calendar className="w-4 h-4 mr-2" />
              {t.ctaPrimary}
            </Link>
            <a
              href="mailto:info@hardcallsales.se"
              className="inline-flex items-center px-8 py-4 rounded-full bg-transparent border border-white/20 text-white text-sm font-medium uppercase tracking-wider hover:bg-white/10 transition-colors"
            >
              <Mail className="w-4 h-4 mr-2" />
              {t.ctaEmail}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
