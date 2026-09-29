"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { RotateCcw, Mic, ArrowUp, Users, Send, Clock, UserCheck } from "lucide-react";
import { useLocale } from "@/i18n/useLocale";
import type { Locale } from "@/i18n/config";

interface Scenario {
  id: string;
  tabTitle: string;
  tabSubtitle: string;
  icon: React.ReactNode;
  prospectName: string;
  prospectRole: string;
  agentInitialMessage: string;
  prospectReply: string;
  agentReply: string;
}

const SCENARIO_ICONS: Record<string, React.ReactNode> = {
  networking: <Users className="w-4 h-4 text-[#38BDF8]" />,
  cold_prospecting: <Send className="w-4 h-4 text-[#38BDF8]" />,
  followup: <Clock className="w-4 h-4 text-[#38BDF8]" />,
  network_outreach: <UserCheck className="w-4 h-4 text-[#38BDF8]" />,
};

const SCENARIOS_SV: Omit<Scenario, "icon">[] = [
  {
    id: "networking",
    tabTitle: "Nätverksbyggande",
    tabSubtitle: "500–1 000 nya relevanta kontakter / månad",
    prospectName: "David Lindgren",
    prospectRole: "COO, Industriell Automation",
    agentInitialMessage:
      "Hej David! Följer er expansion inom industriell automation. Knyter gärna kontakt här på LinkedIn för att följa er resa och utbyta erfarenheter.",
    prospectReply:
      "Tack David! Godkänner gärna. Ser att ni jobbar med flera bolag i vår sektor.",
    agentReply:
      "Verkligen. Många i din roll märker att marknaden kräver mer proaktivitet just nu. Har du tid för en 10-minuters digital kaffe nästa vecka?",
  },
  {
    id: "cold_prospecting",
    tabTitle: "Kall Prospektering",
    tabSubtitle: "Kvalificerar intresse och bryter isen 24/7",
    prospectName: "Helena Sjöberg",
    prospectRole: "Head of Sales, Enterprise B2B",
    agentInitialMessage:
      "Hej Helena! Såg att ni rekryterar säljare. Nyfiken på hur ni säkerställer att seniora säljare hinner ta kundmöten istället för manuell research?",
    prospectReply:
      "Vi har redan verktyg för leadlistor och kör ganska mycket själva just nu.",
    agentReply:
      "Full förståelse. Vår AI-agent kvalificerar och bokar mötet direkt i kalendern — säljarna slipper listorna. Låter 10 minuter tisdag rimligt för att se skillnaden?",
  },
  {
    id: "followup",
    tabTitle: "Mötesuppföljning",
    tabSubtitle: "Återaktiverar dialoger med perfekt tajming",
    prospectName: "Johan Wallin",
    prospectRole: "VD, Tillverkande Industri",
    agentInitialMessage:
      "Hej Johan! Vi pratades vid kring er pipeline inför budgetrundan. Hur landade prioriteringarna för Q2?",
    prospectReply:
      "Budgeten är på plats nu, men har fullt upp med lanseringen de närmsta två veckorna.",
    agentReply:
      "Grattis till budgeten Johan! Då stör jag inte under lanseringen. Jag reserverar preliminärt torsdag den 24:e när dammet lagt sig. Funkar 13:00?",
  },
  {
    id: "network_outreach",
    tabTitle: "Outreach mot Nuvarande Nätverk",
    tabSubtitle: "Aktiverar 15 000–30 000 uppbyggda kontakter",
    prospectName: "Marcus Berg",
    prospectRole: "Head of Partnerships, Tech",
    agentInitialMessage:
      "Hej Marcus! Såg att ni rullade ut ert nya erbjudande. Vi hjälpte nyligen flera i ditt nätverk att aktivera slumrande kontakter till skarpa möten.",
    prospectReply:
      "Låter intressant faktiskt. Hur ser upplägget ut?",
    agentReply:
      "Vår AI scannar dina kontakter efter köpsignaler och skickar träffsäker dialog. Skickade en 1-minuts video till din inkorg — har du 10 minuter på torsdag?",
  },
];

const SCENARIOS_EN: Omit<Scenario, "icon">[] = [
  {
    id: "networking",
    tabTitle: "Network Building",
    tabSubtitle: "500–1,000 new relevant connections / month",
    prospectName: "David Lindgren",
    prospectRole: "COO, Industrial Automation",
    agentInitialMessage:
      "Hi David! I've been following your expansion in industrial automation. I'd love to connect here on LinkedIn to follow your journey and swap insights.",
    prospectReply:
      "Thanks! Happy to accept. I see you work with several companies in our sector.",
    agentReply:
      "We do. Many people in your role are noticing that the market demands more proactivity right now. Do you have time for a 10-minute virtual coffee next week?",
  },
  {
    id: "cold_prospecting",
    tabTitle: "Cold Prospecting",
    tabSubtitle: "Qualifies interest and breaks the ice 24/7",
    prospectName: "Helena Sjöberg",
    prospectRole: "Head of Sales, Enterprise B2B",
    agentInitialMessage:
      "Hi Helena! I saw you're hiring sales reps. Curious how you make sure your senior reps have time for customer meetings instead of manual research?",
    prospectReply:
      "We already have tools for lead lists and handle quite a lot of it ourselves right now.",
    agentReply:
      "Totally understand. Our AI agent qualifies prospects and books the meeting straight into the calendar, so your reps never touch the lists. Would 10 minutes on Tuesday work to see the difference?",
  },
  {
    id: "followup",
    tabTitle: "Meeting Follow-up",
    tabSubtitle: "Reactivates conversations with perfect timing",
    prospectName: "Johan Wallin",
    prospectRole: "CEO, Manufacturing",
    agentInitialMessage:
      "Hi Johan! We spoke about your pipeline ahead of the budget round. How did the Q2 priorities land?",
    prospectReply:
      "The budget is in place now, but I'm swamped with the launch for the next two weeks.",
    agentReply:
      "Congrats on the budget, Johan! I won't interrupt during the launch. I'll tentatively reserve Thursday the 24th, once the dust has settled. Does 1:00 PM work?",
  },
  {
    id: "network_outreach",
    tabTitle: "Outreach to Your Existing Network",
    tabSubtitle: "Activates 15,000–30,000 established connections",
    prospectName: "Marcus Berg",
    prospectRole: "Head of Partnerships, Tech",
    agentInitialMessage:
      "Hi Marcus! I saw you rolled out your new offering. We recently helped several people in your network turn dormant connections into real meetings.",
    prospectReply:
      "Actually, that sounds interesting. How does it work?",
    agentReply:
      "Our AI scans your connections for buying signals and sends precisely targeted messages. I just sent a 1-minute video to your inbox. Do you have 10 minutes on Thursday?",
  },
];

const SCENARIOS: Record<Locale, Omit<Scenario, "icon">[]> = { sv: SCENARIOS_SV, en: SCENARIOS_EN };

const COPY = {
  sv: {
    badge: "Autonomt nätverksbyggande & mötesbokning",
    heading: "Bygg ett nätverk av 15 000–30 000 relevanta beslutsfattare",
    introPre: "LinkedClient bygger ditt nätverk successivt med ",
    introStrong: "500–1 000 nya relevanta kontakter i månaden",
    introPost: ". På 2–3 år har ni en egen affärstillgång på 15 000–30 000 kvalificerade B2B-relationer. Du skräddarsyr alla interaktioner och kontaktpunkter helt efter era egna affärsmål.",
    stat1Value: "+500–1 000",
    stat1Label: " nya kontakter/mån",
    stat2Value: "15 000–30 000",
    stat2Label: " på 2–3 år",
    stat3: "100% skräddarsydda kontaktpunkter",
    footnote: "Varje scenario konfigureras med era unika målgrupper, tonalitet och konverteringsmål — AI-agenten sköter dialogen, era säljare tar över när mötet är bokat.",
    orbAlt: "Sales Agent Orb",
    agentName: "Sales Agent",
    playground: "Playground · ",
    replay: "Spela upp sekvens igen",
    thinking: "Thinking...",
    askAgent: "Ask the agent",
    voice: "Röststyrning",
    send: "Skicka meddelande",
  },
  en: {
    badge: "Autonomous network building & appointment setting",
    heading: "Build a network of 15,000–30,000 relevant decision-makers",
    introPre: "LinkedClient grows your network steadily with ",
    introStrong: "500–1,000 new relevant connections per month",
    introPost: ". Within 2–3 years you own a business asset of 15,000–30,000 qualified B2B relationships. Every interaction and touchpoint is tailored entirely to your own business goals.",
    stat1Value: "+500–1,000",
    stat1Label: " new connections/mo",
    stat2Value: "15,000–30,000",
    stat2Label: " in 2–3 years",
    stat3: "100% tailored touchpoints",
    footnote: "Every scenario is configured around your unique audiences, tone of voice and conversion goals. The AI agent handles the conversation; your reps take over once the meeting is booked.",
    orbAlt: "Sales agent orb",
    agentName: "Sales Agent",
    playground: "Playground · ",
    replay: "Replay sequence",
    thinking: "Thinking...",
    askAgent: "Ask the agent",
    voice: "Voice control",
    send: "Send message",
  },
} as const;

export const LinkedClientPlaygroundSection: React.FC = () => {
  const locale = useLocale();
  const t = COPY[locale];
  const scenarios: Scenario[] = SCENARIOS[locale].map((sc) => ({ ...sc, icon: SCENARIO_ICONS[sc.id] }));
  const [activeScenarioId, setActiveScenarioId] = useState<string>("networking");
  // animStage: 0: reset, 1: msg1 visible, 2: msg2 visible, 2.5: thinking, 3: msg3 visible
  const [animStage, setAnimStage] = useState<number>(3);
  const activeScenario = scenarios.find((s) => s.id === activeScenarioId) || scenarios[0];
  const timersRef = useRef<NodeJS.Timeout[]>([]);

  const clearAllTimers = () => {
    timersRef.current.forEach((t) => clearTimeout(t));
    timersRef.current = [];
  };

  const startSequentialAnimation = () => {
    clearAllTimers();
    setAnimStage(0);

    const t1 = setTimeout(() => setAnimStage(1), 150);
    const t2 = setTimeout(() => setAnimStage(2), 700);
    const t3 = setTimeout(() => setAnimStage(2.5), 1250);
    const t4 = setTimeout(() => setAnimStage(3), 1900);

    timersRef.current = [t1, t2, t3, t4];
  };

  const handleScenarioClick = (id: string) => {
    if (id === activeScenarioId) {
      startSequentialAnimation();
      return;
    }
    setActiveScenarioId(id);
    startSequentialAnimation();
  };

  useEffect(() => {
    return () => clearAllTimers();
  }, []);

  return (
    <section id="playground" className="w-full bg-[#000000] text-white py-20 sm:py-28 lg:py-36 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Top Header: Network Growth & Tailored Touchpoints */}
        <div className="mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-neutral-300 text-xs font-mono mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
            <span>{t.badge}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end">
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-normal tracking-tight text-white leading-[1.14]">
                {t.heading}
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                {t.introPre}<strong className="text-white font-medium">{t.introStrong}</strong>{t.introPost}
              </p>
            </div>
          </div>

          {/* Quick Stats Banner */}
          <div className="flex flex-wrap items-center gap-3 pt-6 mt-6 border-t border-white/[0.08] text-xs font-mono text-neutral-400">
            <span className="text-[#38BDF8] font-semibold">{t.stat1Value}</span>{t.stat1Label}
            <span className="text-white/20">•</span>
            <span className="text-white font-semibold">{t.stat2Value}</span>{t.stat2Label}
            <span className="text-white/20">•</span>
            <span className="text-emerald-400">{t.stat3}</span>
          </div>
        </div>

        {/* Main Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: 4 Real Commercial Scenarios */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-3 sm:space-y-4">
              {scenarios.map((scenario) => {
                const isActive = scenario.id === activeScenarioId;
                return (
                  <button
                    key={scenario.id}
                    type="button"
                    onClick={() => handleScenarioClick(scenario.id)}
                    className={`w-full text-left py-4 px-5 rounded-2xl transition-all duration-300 flex flex-col gap-1 group border cursor-pointer ${
                      isActive
                        ? "bg-white/[0.07] border-white/20 shadow-lg"
                        : "bg-white/[0.02] border-transparent hover:bg-white/[0.04] hover:border-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2.5">
                        {scenario.icon}
                        <span className={`text-base sm:text-lg tracking-tight ${isActive ? "font-medium text-white" : "font-normal text-neutral-400"}`}>
                          {scenario.tabTitle}
                        </span>
                      </div>
                      <span className={`w-2 h-2 rounded-full transition-all ${isActive ? "bg-[#38BDF8] scale-100 shadow-[0_0_8px_#38BDF8]" : "bg-neutral-600 scale-75 opacity-0 group-hover:opacity-40"}`} />
                    </div>
                    <p className={`text-xs pl-6 font-light transition-colors ${isActive ? "text-neutral-300" : "text-neutral-500"}`}>
                      {scenario.tabSubtitle}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Bottom Footnote */}
            <div className="pt-6 border-t border-white/[0.08]">
              <p className="text-xs sm:text-sm text-neutral-500 font-light leading-relaxed">
                {t.footnote}
              </p>
            </div>
          </div>

          {/* Right Column: 1:1 Recreation of Bild 1 with Sequential Soft Fade-in */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-[560px] h-[540px] sm:h-[560px] flex flex-col justify-between rounded-[32px] bg-[#0C0E14] border border-white/[0.12] p-6 sm:p-7 shadow-[0_30px_90px_rgba(0,0,0,0.95)] relative overflow-hidden">
              
              {/* Ambient Light Bleed on Left Edge */}
              <div className="absolute top-1/3 left-[-30px] w-24 h-48 bg-white/[0.06] blur-2xl rounded-full pointer-events-none" />

              {/* Playground Header */}
              <div className="flex items-center justify-between pb-5 mb-4 border-b border-white/[0.08] relative z-10 flex-shrink-0">
                <div className="flex items-center gap-3">
                  {/* Chrome Orb Avatar */}
                  <div className="relative w-8 h-8 rounded-full overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.25)] flex-shrink-0">
                    <Image
                      src="/images/agent-orb-clean.png"
                      alt={t.orbAlt}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-white tracking-tight leading-none mb-1">
                      {t.agentName}
                    </h3>
                    <p className="text-[11px] font-light text-neutral-400 leading-none">
                      {t.playground}{activeScenario.tabTitle}
                    </p>
                  </div>
                </div>

                {/* Replay Sequence Button */}
                <button
                  type="button"
                  onClick={startSequentialAnimation}
                  className="text-neutral-400 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/[0.06]"
                  title={t.replay}
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              {/* Message Stream: Sequential Soft Fade-in (100% Static Container with Zero Layout Shift) */}
              <div className="flex-1 min-h-0 flex flex-col justify-start space-y-3.5 relative z-10">
                
                {/* Message 1: Agent Initial Outreach */}
                <div
                  className={`flex items-start gap-3 transition-all duration-400 ease-out ${
                    animStage >= 1
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-1.5 pointer-events-none"
                  }`}
                >
                  <div className="relative w-6 h-6 rounded-full overflow-hidden flex-shrink-0 mt-0.5 opacity-85">
                    <Image
                      src="/images/agent-orb-clean.png"
                      alt={t.orbAlt}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="text-xs sm:text-[13px] text-neutral-200 font-light leading-relaxed bg-white/[0.04] p-3.5 rounded-2xl rounded-tl-sm border border-white/[0.06] max-w-[85%]">
                    {activeScenario.agentInitialMessage}
                  </div>
                </div>

                {/* Message 2: Prospect Response (Right Aligned) */}
                <div
                  className={`flex justify-end transition-all duration-400 ease-out ${
                    animStage >= 2
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-1.5 pointer-events-none"
                  }`}
                >
                  <div className="max-w-[82%] rounded-2xl rounded-tr-sm bg-[#161922] border border-white/[0.08] p-3.5 text-xs sm:text-[13px] text-neutral-200 font-light leading-relaxed shadow-lg">
                    <div className="text-[10px] font-mono text-neutral-500 mb-1">
                      {activeScenario.prospectName} · {activeScenario.prospectRole}
                    </div>
                    {activeScenario.prospectReply}
                  </div>
                </div>

                {/* Message 3 Slot: Occupies stable height; Thinking indicator overlays smoothly */}
                <div className="relative flex items-start">
                  
                  {/* Thinking Indicator (Only visible during stage 2.5, perfectly positioned with zero layout shift) */}
                  <div
                    className={`absolute left-0 top-0 flex items-start gap-3 transition-opacity duration-200 pointer-events-none z-10 ${
                      animStage === 2.5 ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="relative w-6 h-6 rounded-full overflow-hidden flex-shrink-0 mt-0.5 opacity-85">
                      <Image
                        src="/images/agent-orb-clean.png"
                        alt={t.orbAlt}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="text-xs sm:text-[13px] text-neutral-400 font-light flex items-center gap-2 py-2 px-3 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
                      <span>{t.thinking}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
                    </div>
                  </div>

                  {/* Message 3: Agent Follow-up / Objection Handling */}
                  <div
                    className={`flex items-start gap-3 w-full transition-all duration-400 ease-out ${
                      animStage >= 3
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-1.5 pointer-events-none"
                    }`}
                  >
                    <div className="relative w-6 h-6 rounded-full overflow-hidden flex-shrink-0 mt-0.5 opacity-85">
                      <Image
                        src="/images/agent-orb-clean.png"
                        alt={t.orbAlt}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="text-xs sm:text-[13px] text-neutral-200 font-light leading-relaxed bg-white/[0.04] p-3.5 rounded-2xl rounded-tl-sm border border-white/[0.06] max-w-[85%]">
                      {activeScenario.agentReply}
                    </div>
                  </div>

                </div>

              </div>

              {/* Bottom Input Bar */}
              <div className="relative z-10 flex-shrink-0 pt-3">
                <div className="w-full rounded-full bg-[#12151D] border border-white/[0.09] px-4 py-2.5 flex items-center justify-between text-neutral-400 shadow-inner">
                  <span className="text-xs sm:text-[13px] font-light text-neutral-500">
                    {t.askAgent}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="text-neutral-400 hover:text-white transition-colors p-1"
                      aria-label={t.voice}
                    >
                      <Mic className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={startSequentialAnimation}
                      className="w-6 h-6 rounded-full bg-[#1F2430] border border-white/10 text-white flex items-center justify-center hover:bg-[#282F3E] transition-colors"
                      aria-label={t.send}
                    >
                      <ArrowUp className="w-3.5 h-3.5 text-neutral-300" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
