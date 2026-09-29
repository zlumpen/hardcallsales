import { ServiceItem } from "@/types";
import type { Locale } from "@/i18n/config";

export const SERVICES: ServiceItem[] = [
  {
    id: "motesbokning",
    number: "01",
    title: "Mötesbokning med beslutsfattare",
    shortDesc: "Vi tar samtalet, du tar mötet. 10–100 bokade möten per månad, hos rätt person.",
    fullDesc:
      "Vi hjälper IT- och SaaS-bolag att boka möten med rätt beslutsfattare — oavsett bransch och land. Våra mötesbokare har i snitt över 10 000 timmars säljerfarenhet. Vi ringer relevanta prospekts med ett skräddarsytt manus baserat på er unika värdeproposition.",
    kicker: "Pilot 3 mån",
    icon: "CalendarCheck",
    isDarkFeatured: true,
    methodology:
      "Strukturerad uppringning kombinerat med djup förståelse för tech-erbjudanden. Vi hanterar invändningar professionellt och kvalificerar varje möte mot era uppsatta kriterier.",
    deliverables: [
      "10–100 kvalificerade möten per månad",
      "Bokas direkt i era säljares kalendrar",
      "Skräddarsydda manus och invändningsmatriser",
      "Ombokningsgaranti vid no-shows utan extra kostnad",
    ],
    tools: ["Google Meet", "Teams", "Calendly", "HubSpot", "Salesforce"],
    targetPersona:
      "VD, CRO & Försäljningschefer på IT/SaaS-bolag som vill fylla kalendrarna med 10–100 kvalificerade beslutsfattare per månad utan intern rekryteringsrisk.",
  },
  {
    id: "kampanjer",
    number: "02",
    title: "Mejl- och LinkedIn-kampanjer",
    shortDesc: "Sekvenser som når 100+ miljoner beslutsfattare.",
    fullDesc:
      "Riktade sekvenser och kampanjer via e-post och LinkedIn som når 100+ miljoner beslutsfattare oavsett bransch och geografi. Vi skapar personaliserade meddelanden med hög relevans och kombinerar detta med vårt eget nätverk på över 70 000 LinkedIn-beslutsfattare.",
    kicker: "100M+ kontakter",
    icon: "Mail",
    methodology:
      "Datadriven copywriting med hyper-personalisering, A/B-testning av ämnesrader och sekvenser, samt avancerad domän- och inbox-uppvärmning för högsta möjliga leveransgrad.",
    deliverables: [
      "Flerstegs e-post- och LinkedIn-sekvenser",
      "A/B-testade copyvarianter optimerade för svar",
      "Domänsäkring med SPF, DKIM och DMARC",
      "Detaljerad svars- och konverteringsanalys",
    ],
    tools: ["LinkedIn Sales Navigator", "Smartlead", "Instantly", "Lemlist"],
    targetPersona:
      "Kommersiella chefer & Growth Leads som vill penetrera nya marknader och nå 100M+ beslutsfattare med hög precision och domänsäkerhet.",
  },
  {
    id: "telefon",
    number: "03",
    title: "Telefonuppföljning och säljstöd",
    shortDesc: "Säljstöd som stänger loopen efter kampanjen.",
    fullDesc:
      "När någon visar intresse i en mejlsekvens eller på LinkedIn tar vårt erfarna säljteam vid och följer upp via telefon. Varma signaler omvandlas snabbt till bokade möten innan intresset svalnar.",
    kicker: "Säljstöd",
    icon: "PhoneCall",
    methodology:
      "Snabb reaktion på köpsignaler (klick, öppningar, LinkedIn-profilvisningar). Våra SDR:er ringer med full kontext om prospektets tidigare interaktion.",
    deliverables: [
      "Uppföljning inom minuter/timmar på varma signaler",
      "Stänger informationsloopar och besvarar frågor",
      "Minskar lead-bortfall med upp till 60 %",
      "Veckovis rapportering av samtalsutfall och feedback",
    ],
    tools: ["Aircall", "Salesloft", "HubSpot Calling", "VoiP"],
    targetPersona:
      "Säljteam med inkommande eller varma leads som behöver korta svarstider och stänga loopen direkt med professionella telefonsamtal.",
  },
  {
    id: "natverk",
    number: "04",
    title: "Nätverksbyggande och prospektering",
    shortDesc: "Prospektering och relationer före pitchen.",
    fullDesc:
      "Vi identifierar relevanta beslutsfattare i er målgrupp och bygger strategiska nätverk på autopilot. Relationer etableras och vårdas innan någon formell säljpitch sker, vilket skapar förtroende och värme.",
    kicker: "Prospektering",
    icon: "Network",
    methodology:
      "Löpande kartläggning av ICP (Ideal Customer Profile) i kombination med mjukt värdeskapande nätverkande. Varje månad adderas hundratals nya relevanta beslutsfattare till ert nätverk.",
    deliverables: [
      "Kontinuerligt inflöde av relevanta nätverkskontakter",
      "Uppbyggnad av varumärkeskännedom hos nyckelpersoner",
      "Segmenterade kontaktlistor exporterade till ert CRM",
      "Full transparens över vilka som kontaktas",
    ],
    tools: ["Apollo.io", "LinkedIn Sales Navigator", "Clay", "ZoomInfo"],
    targetPersona:
      "B2B-techbolag med längre säljcykler som vill bygga förtroende och strategiska relationer med nyckelbeslutsfattare innan pitchen.",
  },
  {
    id: "pilotmodellen",
    number: "05",
    title: "Pilotmodellen",
    statNumber: "10–100",
    statLabel: "möten per månad",
    shortDesc: "Pilotmodellen: sex steg, tre månaders test. Du ser resultatet innan du binder dig.",
    fullDesc:
      "Vår beprövade 3-månaders pilotmodell låter er utvärdera vår förmåga utan långa bindningstider eller stora upfront-investeringar. Vi tar hand om allt från workshop till outreach, bokning och slutlig ROI-utvärdering.",
    kicker: "Ingen bindning",
    icon: "Target",
    isPurpleFeatured: true,
    methodology:
      "Ett 6-stegs strukturerat ramverk som minimerar risk och maximerar transparens. Efter 3 månader har ni exakt data på kostnad per möte och förväntat affärsvärde.",
    deliverables: [
      "3 månaders strukturerad testperiod",
      "Garanterat 10–100 bokade möten per månad",
      "Veckovisa avstämningar och live-rapporter",
      "Omfattande slutrapport med konkreta skalningsrekommendationer",
    ],
    tools: ["Pilot KPI Tracker", "Looker Studio", "Slack Connect", "Notion Hub"],
    targetPersona:
      "Företagsledare och tech-grundare som vill verifiera resultat och ROI under 3 månader innan de binder upp sig för ett långsiktigt samarbete.",
  },
  {
    id: "segmentering",
    number: "06",
    title: "AI-driven segmentering & CRM",
    shortDesc: "Målgrupper som bygger sig själva. Plus CRM-integrering.",
    fullDesc:
      "Vi identifierar köpsignaler som nyckelrekryteringar, teknikskiften, kapitalrundor eller expansion med hjälp av maskininlärning. Samtidigt kopplar vi sömlöst ihop kalendrar och CRM så att allt landar där ni redan arbetar.",
    kicker: "AI & CRM",
    icon: "Workflow",
    methodology:
      "Realtidsövervakning av marknadssignaler i kombination med 2-vägs CRM-synkronisering. Eliminerar dubbelarbete och säkerställer 100 % datakvalitet i ert säljsystem.",
    deliverables: [
      "Dynamiska målgruppslistor baserade på triggers",
      "Tvåvägs integration med HubSpot, Salesforce, Pipedrive",
      "Automatiserad kalenderbokning och mötesbekräftelser",
      "Datarikning med direktnummer och verifierade e-postadresser",
    ],
    tools: ["HubSpot", "Salesforce", "Pipedrive", "Zapier", "Make", "OpenAI"],
    targetPersona:
      "Data- och säljdrivna organisationer som vill automatisera prospektering utifrån skarpa köpsignaler och eliminera manuell CRM-administration.",
  },
];

export const SERVICES_EN: ServiceItem[] = [
  {
    id: "motesbokning",
    number: "01",
    title: "Meetings with decision-makers",
    shortDesc: "We make the call, you take the meeting. 10–100 booked meetings per month, with the right person.",
    fullDesc:
      "We help IT and SaaS companies book meetings with the right decision-makers — in any industry, in any country. Our appointment setters bring an average of more than 10,000 hours of sales experience. We call relevant prospects using a tailored script built around your unique value proposition.",
    kicker: "3-month pilot",
    icon: "CalendarCheck",
    isDarkFeatured: true,
    methodology:
      "Structured outbound calling combined with a deep understanding of tech offerings. We handle objections professionally and qualify every meeting against the criteria you set.",
    deliverables: [
      "10–100 qualified meetings per month",
      "Booked directly into your sales reps' calendars",
      "Tailored scripts and objection-handling matrices",
      "Rebooking guarantee for no-shows at no extra cost",
    ],
    tools: ["Google Meet", "Teams", "Calendly", "HubSpot", "Salesforce"],
    targetPersona:
      "CEOs, CROs & Sales Directors at IT/SaaS companies who want to fill their calendars with 10–100 qualified decision-makers per month — without the risk of hiring in-house.",
  },
  {
    id: "kampanjer",
    number: "02",
    title: "Email & LinkedIn campaigns",
    shortDesc: "Sequences that reach 100+ million decision-makers.",
    fullDesc:
      "Targeted email and LinkedIn sequences and campaigns that reach 100+ million decision-makers across every industry and geography. We craft highly relevant, personalized messages and combine them with our own network of more than 70,000 LinkedIn decision-makers.",
    kicker: "100M+ contacts",
    icon: "Mail",
    methodology:
      "Data-driven copywriting with hyper-personalization, A/B testing of subject lines and sequences, plus advanced domain and inbox warm-up for the highest possible deliverability.",
    deliverables: [
      "Multi-step email and LinkedIn sequences",
      "A/B-tested copy variants optimized for replies",
      "Domain protection with SPF, DKIM and DMARC",
      "Detailed reply and conversion analytics",
    ],
    tools: ["LinkedIn Sales Navigator", "Smartlead", "Instantly", "Lemlist"],
    targetPersona:
      "Commercial leaders & Growth Leads who want to break into new markets and reach 100M+ decision-makers with high precision and domain security.",
  },
  {
    id: "telefon",
    number: "03",
    title: "Phone follow-up & sales support",
    shortDesc: "Sales support that closes the loop after the campaign.",
    fullDesc:
      "When someone shows interest in an email sequence or on LinkedIn, our experienced sales team takes over and follows up by phone. Warm signals are quickly converted into booked meetings before interest cools off.",
    kicker: "Sales support",
    icon: "PhoneCall",
    methodology:
      "Rapid response to buying signals (clicks, opens, LinkedIn profile views). Our SDRs call with full context on the prospect's previous interactions.",
    deliverables: [
      "Follow-up within minutes/hours on warm signals",
      "Closes information loops and answers questions",
      "Reduces lead drop-off by up to 60%",
      "Weekly reporting on call outcomes and feedback",
    ],
    tools: ["Aircall", "Salesloft", "HubSpot Calling", "VoiP"],
    targetPersona:
      "Sales teams with inbound or warm leads who need fast response times and want to close the loop immediately with professional phone calls.",
  },
  {
    id: "natverk",
    number: "04",
    title: "Networking & prospecting",
    shortDesc: "Prospecting and relationships before the pitch.",
    fullDesc:
      "We identify relevant decision-makers in your target audience and build strategic networks on autopilot. Relationships are established and nurtured before any formal sales pitch takes place, building trust and warmth.",
    kicker: "Prospecting",
    icon: "Network",
    methodology:
      "Ongoing ICP (Ideal Customer Profile) mapping combined with soft, value-driven networking. Every month, hundreds of new relevant decision-makers are added to your network.",
    deliverables: [
      "A steady flow of relevant network connections",
      "Brand awareness built among key stakeholders",
      "Segmented contact lists exported to your CRM",
      "Full transparency into who is being contacted",
    ],
    tools: ["Apollo.io", "LinkedIn Sales Navigator", "Clay", "ZoomInfo"],
    targetPersona:
      "B2B tech companies with longer sales cycles who want to build trust and strategic relationships with key decision-makers before the pitch.",
  },
  {
    id: "pilotmodellen",
    number: "05",
    title: "Pilot model",
    statNumber: "10–100",
    statLabel: "meetings per month",
    shortDesc: "The pilot model: six steps, a three-month test. You see the results before you commit.",
    fullDesc:
      "Our proven 3-month pilot model lets you evaluate what we can deliver without long lock-in periods or large upfront investments. We handle everything from workshop to outreach, booking and the final ROI evaluation.",
    kicker: "No lock-in",
    icon: "Target",
    isPurpleFeatured: true,
    methodology:
      "A structured 6-step framework that minimizes risk and maximizes transparency. After 3 months you have exact data on cost per meeting and expected business value.",
    deliverables: [
      "3-month structured test period",
      "Guaranteed 10–100 booked meetings per month",
      "Weekly check-ins and live reports",
      "Comprehensive final report with concrete scaling recommendations",
    ],
    tools: ["Pilot KPI Tracker", "Looker Studio", "Slack Connect", "Notion Hub"],
    targetPersona:
      "Business leaders and tech founders who want to verify results and ROI over 3 months before committing to a long-term partnership.",
  },
  {
    id: "segmentering",
    number: "06",
    title: "AI-driven segmentation & CRM",
    shortDesc: "Audiences that build themselves. Plus CRM integration.",
    fullDesc:
      "Using machine learning, we identify buying signals such as key hires, technology shifts, funding rounds or expansion. At the same time, we seamlessly connect calendars and CRM so everything lands where you already work.",
    kicker: "AI & CRM",
    icon: "Workflow",
    methodology:
      "Real-time monitoring of market signals combined with two-way CRM sync. Eliminates duplicate work and ensures 100% data quality in your sales system.",
    deliverables: [
      "Dynamic audience lists based on triggers",
      "Two-way integration with HubSpot, Salesforce, Pipedrive",
      "Automated calendar booking and meeting confirmations",
      "Data enrichment with direct dials and verified email addresses",
    ],
    tools: ["HubSpot", "Salesforce", "Pipedrive", "Zapier", "Make", "OpenAI"],
    targetPersona:
      "Data- and sales-driven organizations that want to automate prospecting based on sharp buying signals and eliminate manual CRM admin.",
  },
];

export function getServices(locale: Locale): ServiceItem[] {
  return locale === "en" ? SERVICES_EN : SERVICES;
}
