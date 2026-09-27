"use client";

import React, { useEffect } from "react";

interface AuraBackgroundProps {
  projectId?: string;
  className?: string;
  opacity?: number;
  speedScale?: number;
  /**
   * false = lättviktig statisk gradient i stället för WebGL-scenen.
   * Använd animerad aura högst en gång per sida (t.ex. i hero) – varje
   * Unicorn Studio-scen är en fullskärms-WebGL-canvas som ritas varje frame.
   */
  animated?: boolean;
}

export const AuraBackground: React.FC<AuraBackgroundProps> = ({
  projectId = "yWZ2Tbe094Fsjgy9NRnD", // Dark full-page aura project by default
  className = "",
  opacity = 0.5,
  speedScale = 0.3,
  animated = true,
}) => {
  useEffect(() => {
    if (!animated) return;

    const adjustSpeed = () => {
      if (window.UnicornStudio?.scenes) {
        window.UnicornStudio.scenes.forEach((scene: any) => {
          if (scene?.layers) {
            scene.layers.forEach((l: any) => {
              if (typeof l.speed === "number") {
                if (l._originalSpeed === undefined) {
                  l._originalSpeed = l.speed;
                }
                l.speed = l._originalSpeed * speedScale;
              }
            });
          }
        });
      }
    };

    // Dynamically load UnicornStudio script if not already present
    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false };
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
      script.async = true;
      script.onload = () => {
        if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init?.();
          window.UnicornStudio.isInitialized = true;
          setTimeout(adjustSpeed, 350);
          setTimeout(adjustSpeed, 1000);
        }
      };
      document.body.appendChild(script);
    } else if (window.UnicornStudio && typeof window.UnicornStudio.init === "function") {
      window.UnicornStudio.init();
      setTimeout(adjustSpeed, 350);
      setTimeout(adjustSpeed, 1000);
    }
  }, [projectId, speedScale, animated]);

  // Blur-filter ovanpå en animerad canvas tvingar webbläsaren att räkna om
  // oskärpan på hela ytan varje frame – vi tar bort det här centralt.
  const safeClassName = className.replace(/\bblur-\[[^\]]*\]|\bblur(-\w+)?\b/g, "").trim();

  if (!animated) {
    return (
      <div
        className={`absolute inset-0 pointer-events-none overflow-hidden ${safeClassName}`}
        style={{ opacity }}
        aria-hidden="true"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 25% 30%, rgba(120,81,169,0.55) 0%, rgba(120,81,169,0) 70%)," +
              "radial-gradient(50% 45% at 80% 70%, rgba(90,70,160,0.45) 0%, rgba(90,70,160,0) 70%)," +
              "radial-gradient(40% 35% at 55% 50%, rgba(200,190,230,0.12) 0%, rgba(200,190,230,0) 70%)",
          }}
        />
      </div>
    );
  }

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden transition-opacity duration-1000 ${safeClassName}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <div
        data-us-project={projectId}
        // Prestanda: rendera i halv upplösning, 1x dpi och 30 fps (bakgrunden är
        // mjuk/suddig så skillnaden syns inte), starta först när den syns och
        // stäng av på mobil.
        data-us-scale="0.5"
        data-us-dpi="1"
        data-us-fps="30"
        data-us-lazyload="true"
        data-us-disablemobile="true"
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
};

declare global {
  interface Window {
    UnicornStudio?: {
      isInitialized?: boolean;
      init?: () => void;
      scenes?: any[];
    };
  }
}
