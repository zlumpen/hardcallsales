"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    lenisRef.current = lenis;
    lenis.on("scroll", ScrollTrigger.update);

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);

    // Klick på en länk till startsidan (logga, "Start" m.m.) när man redan är
    // på startsidan: scrolla mjukt längst upp i stället för att inget händer.
    const handleHomeClick = (e: MouseEvent) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as HTMLElement | null)?.closest?.("a");
      if (!a || a.target === "_blank") return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== "/" || url.hash) return;
      if (window.location.pathname !== "/") return; // annan sida: Next navigerar som vanligt
      e.preventDefault();
      lenis.scrollTo(0, { duration: 1 });
    };
    // capture-fas: körs före Next.js Link-hanteraren
    document.addEventListener("click", handleHomeClick, true);

    return () => {
      document.removeEventListener("click", handleHomeClick, true);
      lenis.destroy();
      lenisRef.current = null;
      gsap.ticker.remove(updateTicker);
    };
  }, []);

  // Vid byte av sida: börja alltid längst upp (om ingen #ankare anges).
  useEffect(() => {
    if (window.location.hash) return;
    lenisRef.current?.scrollTo(0, { immediate: true, force: true });
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{children}</>;
};
