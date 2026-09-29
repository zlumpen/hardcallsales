import React from "react";
import type { Locale } from "@/i18n/config";
import { LinkedClientHero } from "@/components/sections/LinkedClientHero";
import { LinkedClientLogos } from "@/components/sections/LinkedClientLogos";
import { LinkedClientManifesto } from "@/components/sections/LinkedClientManifesto";
import { LinkedClientPlaygroundSection } from "@/components/sections/LinkedClientPlaygroundSection";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function LinkedClientView({ locale }: { locale: Locale }) {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#000000]">
      {/* 1. Hero Section matching 1:1 target visual layout & authentic content */}
      <LinkedClientHero />

      {/* 2. Partner Logos presented cleanly and beautifully without slop */}
      <LinkedClientLogos />

      {/* 3. Typographic Manifesto (Problem & Solution matching Bild 2) */}
      <LinkedClientManifesto />

      {/* 4. Interactive Feature Section (Bild 2 Layout + Bild 1 Playground Window) */}
      <LinkedClientPlaygroundSection />
    </div>
  );
}
