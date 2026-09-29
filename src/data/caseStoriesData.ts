import type { Locale } from "@/i18n/config";

export interface CaseStory {
  id: string;
  client: string;
  logo: string;
  industry: string;
  event: string;
  teaser: string;
  fullStory: string;
  stats: {
    primary: string;
    secondary: string;
    metric: string;
  };
  deliveryDetails: {
    scope: string;
    target: string;
    outcome: string;
  };
  accent: string;
  href: string;
}

export const HCS_STORIES: CaseStory[] = [
  {
    id: "aveva",
    client: "AVEVA Select Scandinavia",
    logo: "/images/logos/logo-aveva.png",
    industry: "Enterprise Industriell Mjukvara",
    event: "45+ C-level möten som genererade >20 MSEK i affärer",
    teaser: "AVEVA engagerade oss under en testperiod för mötesbokning mot stora enterprise-bolag. Uppdraget bidrog till affärer värda över 20 miljoner kronor.",
    fullStory: "AVEVA är en global ledare inom industriell mjukvara, med lösningar som används av världens största tillverknings- och energibolag. AVEVA Select Scandinavia – tidigare kända som Wonderware Scandinavia – engagerade oss under en testperiod för mötesbokning mot stora enterprise-bolag. Uppdraget bidrog till affärer värda över 20 miljoner kronor. Samarbetet fortsatte därefter och vår insats rekommenderades vidare, vilket ledde till nya uppdrag.",
    stats: { primary: ">20 MSEK", secondary: "45+ Möten", metric: "92 % Show-rate" },
    deliveryDetails: {
      scope: "Enterprise Prospektering & Telefonburen uppföljning",
      target: "CTO, CIO och tekniska driftledare inom nordisk tung process- och energiindustri",
      outcome: "Över 20 MSEK i nya affärer samt vidare rekommendation till Roima Intelligence"
    },
    accent: "#7851A9",
    href: "/case",
  },
  {
    id: "monster",
    client: "Monster",
    logo: "/images/logos/logo-monster-white.svg",
    industry: "B2B HR-Tech & Rekrytering",
    event: "120+ bokade möten med HR-chefer & VD över hela Norden",
    teaser: "I flera omgångar har vi stöttat Monsters svenska säljteam med mötesbokning mot relevanta beslutsfattare i samband med lanseringen av nya tjänster.",
    fullStory: "Monster är världens största rekryteringsföretag och en pionjär inom digital talent acquisition. I flera omgångar har vi stöttat deras svenska säljteam med mötesbokning mot relevanta beslutsfattare, i samband med lanseringen av nya tjänster. Ett uppdrag där vi kombinerade affärsdriven prospektering med förståelse för komplex B2B-försäljning inom HR-tech.",
    stats: { primary: "120+ Möten", secondary: "4.2x ROI", metric: "89 % Show-rate" },
    deliveryDetails: {
      scope: "Lanseringsstöd & Riktad affärsdriven B2B-prospektering",
      target: "HR-direktörer, Rekryteringschefer & VD på medelstora och stora företag",
      outcome: "120+ kvalificerade dialoger och stark etablering av nya rekryteringslösningar"
    },
    accent: "#8B5CF6",
    href: "/case",
  },
  {
    id: "wall-to-wall",
    client: "Wall to Wall Group",
    logo: "/images/logos/logo-wall-to-wall.png",
    industry: "Fastighetsservice & Relining",
    event: "Mötesbokning och hembesök för börsnoterad koncern och Repipe",
    teaser: "Börsnoterad koncern med 26 dotterbolag. Under flera kampanjperioder har vi stöttat teamet med mötesbokning och hembesök för Wall to Wall och Repipe.",
    fullStory: "Wall to Wall Group är ett börsnoterat bolag med 26 dotterbolag i koncernen och verksamhet inom fastighetsservice, renovering och relining. Under flera kampanjperioder har vi stöttat deras team med mötesbokning och kundkontakt för hembesök — för Wall to Wall Group och deras reliningsbolag Repipe. Vi har även haft nöjet att besöka deras huvudkontor i Kristianstad och träffa deras ledning och personal — ett engagerat och professionellt team med stark tillväxt, tydliga processer och fokus på kvalitet i varje uppdrag.",
    stats: { primary: "26 Bolag", secondary: "65+ Hembesök", metric: "34 % Konvertering" },
    deliveryDetails: {
      scope: "Flerbolagskampanj & Uppsökande kundkontakt för hembesök",
      target: "Fastighetsägare, fastighetschefer och styrelser i bostadsrättsföreningar",
      outcome: "Högt inflöde av bokade besök, integrerat i Repipes lokala säljares kalendrar"
    },
    accent: "#0EA5E9",
    href: "/case",
  },
  {
    id: "allt-om-juridik",
    client: "Allt om Juridik",
    logo: "/images/logos/logo-allt-om-juridik.png",
    industry: "Juridiska B2B-tjänster (Blendow Group)",
    event: "Riktade kampanjer mot beslutsfattare vid lansering av ny tjänst",
    teaser: "En del av Blendow Group – Sveriges ledande leverantör av juridisk kompetens. Genomförde riktade kampanjer och bokade möten i flera branscher.",
    fullStory: "Allt om Juridik är en del av Blendow Group – Sveriges största leverantör av juridisk kompetensförsörjning. Inom ramen för vårt samarbete genomförde vi riktade e-postkampanjer och bokade möten med beslutsfattare i flera olika branscher, kopplade till lanseringen av deras nya tjänst. Det var ett mycket givande samarbete där vi inte bara levererade resultat, utan också fick möjlighet att ta del av deras djupa juridiska kompetens och strukturerade arbetssätt.",
    stats: { primary: "150+ Möten", secondary: "3.8x ROI", metric: "91 % Show-rate" },
    deliveryDetails: {
      scope: "Riktad e-postoutreach kombinerad med personlig telefonuppföljning",
      target: "VD, ekonomichefer och HR-ansvariga inom svenskt näringsliv",
      outcome: "Snabb marknadspenetration för den nya tjänsten och bevisad hög show-rate"
    },
    accent: "#E11D48",
    href: "/case",
  },
  {
    id: "idnet",
    client: "IDNet",
    logo: "/images/logos/logo-idnet.png",
    industry: "Logistik & ESL-teknologi",
    event: "Mötesbokning mot detaljhandeln för realtids butikskommunikation",
    teaser: "Global ledare inom ESL-teknologi (Electronic Shelf Labels). Vi har vid flera tillfällen stöttat säljteamet med mötesbokning mot detaljhandeln.",
    fullStory: "IDNET är en global ledare inom ESL-teknologi (Electronic Shelf Labels) och erbjuder lösningar som effektiviserar butikskommunikation i realtid. Vi har vid flera tillfällen stöttat deras säljteam med mötesbokning mot aktörer inom detaljhandeln. Samarbetet har varit både givande och inspirerande, och gett oss inblick i en bransch i snabb utveckling.",
    stats: { primary: "85+ Möten", secondary: "650 tkr Snittorder", metric: "88 % Show-rate" },
    deliveryDetails: {
      scope: "Teknisk B2B-prospektering och kvalificerad mötesbokning",
      target: "Butikschefer, IT-chefer och logistikansvariga inom nordisk detaljhandel",
      outcome: "Etablerade strategiska dialoger och påskyndade införandet av ESL-lösningar"
    },
    accent: "#EA580C",
    href: "/case",
  },
  {
    id: "milient",
    client: "Milient",
    logo: "/images/logos/logo-milient.png",
    industry: "Tidsrapportering & Projektredovisning SaaS",
    event: "Flerårigt samarbete med mötesbokning och AI-drivna lösningar",
    teaser: "Nordens största leverantör inom sitt segment. Vi har under flera år stöttat Milient med mötesbokning – numera även i kombination med AI-drivna lösningar.",
    fullStory: "Milient Software är en av Europas ledande aktörer inom tidsrapportering och projektredovisning. Genom strategiska sammanslagningar och uppköp har de vuxit till att bli Nordens största leverantör inom sitt segment. Vi har under flera år, och fortsatt idag, stöttat Milient med mötesbokning – numera även i kombination med AI-drivna lösningar. Det är en verklig förmån att få arbeta tätt tillsammans med deras team i ett långsiktigt och utvecklande samarbete.",
    stats: { primary: "Flerårigt", secondary: "3.2 MSEK Intäkt", metric: "6 Ramavtal" },
    deliveryDetails: {
      scope: "Långsiktigt säljstöd & AI-integrerad outreach-metodik",
      target: "Ekonomichefer, VD och partners på nordiska konsult- och projektbolag",
      outcome: "Flerårigt partnerskap med kontinuerligt flöde av kvalificerade möten"
    },
    accent: "#8B5CF6",
    href: "/case",
  },
  {
    id: "bumbee-labs",
    client: "Bumbee Labs",
    logo: "/images/logos/logo-bumbee-labs.png",
    industry: "Retailtech & Besöksflödesanalys",
    event: "Internationell mötesbokning för expansion i flera länder",
    teaser: "Ledande aktör inom besöksflödesanalys. Stöttade affärsutvecklingsteamet med mötesbokning i flera länder under ledning av Magnus Johansson (f.d. vd Coop).",
    fullStory: "Bumbee Labs är en ledande aktör inom besöksflödesanalys och retailtech. Under en kampanjperiod, när Magnus Johansson – tidigare vd för Coop Sverige – ledde bolaget, stöttade vi dem med mötesbokning i flera olika länder. Uppdraget genomfördes för deras affärsutvecklingsteam och syftade till att nå ut till rätt beslutsfattare inom detaljhandeln.",
    stats: { primary: "Multi-Market", secondary: "Flera länder", metric: "Retailtech" },
    deliveryDetails: {
      scope: "Internationell prospektering & mötesbokning för affärsutveckling",
      target: "Beslutsfattare, etableringschefer och driftansvariga inom detaljhandeln",
      outcome: "Etablerade strategiska möten i flera europeiska marknader",
    },
    accent: "#F97316",
    href: "/case",
  },
  {
    id: "roima",
    client: "Roima Intelligence",
    logo: "/images/logos/logo-roima.png",
    industry: "Industriell Mjukvara & Digitalisering",
    event: "Mötesbokning mot strategiska beslutsfattare via AVEVA-rekommendation",
    teaser: "Global ledare inom industriell mjukvara. Uppdraget kom via rekommendation från AVEVA Select Scandinavia med mötesbokning mot strategiska beslutsfattare.",
    fullStory: "Roima Intelligence är en global ledare inom implementering av industriell mjukvara, med fokus på att optimera processer, produktivitet och digital transformation inom tillverkande industri. Uppdraget kom till oss via en rekommendation från AVEVA Select Scandinavia, och vi har sedan dess stöttat Roima i flera omgångar med mötesbokning mot strategiska beslutsfattare.",
    stats: { primary: "Enterprise", secondary: "40+ Möten", metric: "90 % Show-rate" },
    deliveryDetails: {
      scope: "Strategisk C-level prospektering och mötesbokning",
      target: "Produktionschefer, CTO och digitaliseringsledare inom tillverkande industri",
      outcome: "Stärkta affärsdialoger och påskyndade implementationsprojekt"
    },
    accent: "#059669",
    href: "/case",
  },
];

export const HCS_STORIES_EN: CaseStory[] = [
  {
    id: "aveva",
    client: "AVEVA Select Scandinavia",
    logo: "/images/logos/logo-aveva.png",
    industry: "Enterprise Industrial Software",
    event: "45+ C-level meetings that generated >20 MSEK in business",
    teaser: "AVEVA engaged us for a trial period of appointment setting targeting large enterprise companies. The engagement contributed to deals worth more than SEK 20 million.",
    fullStory: "AVEVA is a global leader in industrial software, with solutions used by the world's largest manufacturing and energy companies. AVEVA Select Scandinavia – formerly known as Wonderware Scandinavia – engaged us for a trial period of appointment setting targeting large enterprise companies. The engagement contributed to deals worth more than SEK 20 million. The partnership continued from there, and our work was recommended onward, which led to new engagements.",
    stats: { primary: ">20 MSEK", secondary: "45+ Meetings", metric: "92% Show rate" },
    deliveryDetails: {
      scope: "Enterprise prospecting & phone-based follow-up",
      target: "CTOs, CIOs and technical operations leaders in Nordic heavy process and energy industries",
      outcome: "More than 20 MSEK in new business, plus an onward referral to Roima Intelligence"
    },
    accent: "#7851A9",
    href: "/case",
  },
  {
    id: "monster",
    client: "Monster",
    logo: "/images/logos/logo-monster-white.svg",
    industry: "B2B HR Tech & Recruitment",
    event: "120+ meetings booked with HR leaders & CEOs across the Nordics",
    teaser: "Over several rounds, we have supported Monster's Swedish sales team with appointment setting targeting relevant decision-makers as they launched new services.",
    fullStory: "Monster is the world's largest recruitment company and a pioneer in digital talent acquisition. Over several rounds, we have supported their Swedish sales team with appointment setting targeting relevant decision-makers as they launched new services. An engagement where we combined business-driven prospecting with a deep understanding of complex B2B sales in HR tech.",
    stats: { primary: "120+ Meetings", secondary: "4.2x ROI", metric: "89% Show rate" },
    deliveryDetails: {
      scope: "Launch support & targeted, business-driven B2B prospecting",
      target: "HR directors, heads of recruitment & CEOs at mid-sized and large companies",
      outcome: "120+ qualified conversations and a strong foothold for new recruitment solutions"
    },
    accent: "#8B5CF6",
    href: "/case",
  },
  {
    id: "wall-to-wall",
    client: "Wall to Wall Group",
    logo: "/images/logos/logo-wall-to-wall.png",
    industry: "Property Services & Pipe Relining",
    event: "Meeting booking and home visits for a listed group and Repipe",
    teaser: "A publicly listed group with 26 subsidiaries. Across several campaign periods, we have supported the team with meeting booking and home visits for Wall to Wall and Repipe.",
    fullStory: "Wall to Wall Group is a publicly listed company with 26 subsidiaries, operating in property services, renovation and pipe relining. Across several campaign periods, we have supported their team with meeting booking and customer outreach for home visits — for Wall to Wall Group and their relining company Repipe. We also had the pleasure of visiting their headquarters in Kristianstad and meeting their leadership and staff — a dedicated, professional team with strong growth, clear processes and a focus on quality in every job.",
    stats: { primary: "26 Companies", secondary: "65+ Home visits", metric: "34% Conversion" },
    deliveryDetails: {
      scope: "Multi-company campaign & outbound customer outreach for home visits",
      target: "Property owners, property managers and housing cooperative boards",
      outcome: "A high inflow of booked visits, integrated directly into Repipe's local sales reps' calendars"
    },
    accent: "#0EA5E9",
    href: "/case",
  },
  {
    id: "allt-om-juridik",
    client: "Allt om Juridik",
    logo: "/images/logos/logo-allt-om-juridik.png",
    industry: "B2B Legal Services (Blendow Group)",
    event: "Targeted campaigns to decision-makers for a new service launch",
    teaser: "Part of Blendow Group – Sweden's leading provider of legal expertise. We ran targeted campaigns and booked meetings across multiple industries.",
    fullStory: "Allt om Juridik is part of Blendow Group – Sweden's largest provider of legal knowledge and expertise. As part of our partnership, we ran targeted email campaigns and booked meetings with decision-makers across several industries, tied to the launch of their new service. It was a highly rewarding collaboration where we not only delivered results, but also got to draw on their deep legal expertise and structured way of working.",
    stats: { primary: "150+ Meetings", secondary: "3.8x ROI", metric: "91% Show rate" },
    deliveryDetails: {
      scope: "Targeted email outreach combined with personal phone follow-up",
      target: "CEOs, CFOs and HR leaders across Swedish industry",
      outcome: "Rapid market penetration for the new service and a proven high show rate"
    },
    accent: "#E11D48",
    href: "/case",
  },
  {
    id: "idnet",
    client: "IDNet",
    logo: "/images/logos/logo-idnet.png",
    industry: "Logistics & ESL Technology",
    event: "Meeting booking with retailers for real-time in-store communication",
    teaser: "A global leader in ESL (Electronic Shelf Labels) technology. On several occasions, we have supported the sales team with appointment setting targeting the retail sector.",
    fullStory: "IDNET is a global leader in ESL (Electronic Shelf Labels) technology, offering solutions that streamline in-store communication in real time. On several occasions, we have supported their sales team with appointment setting targeting retail players. The partnership has been both rewarding and inspiring, giving us insight into a fast-moving industry.",
    stats: { primary: "85+ Meetings", secondary: "SEK 650k Avg. order", metric: "88% Show rate" },
    deliveryDetails: {
      scope: "Technical B2B prospecting and qualified appointment setting",
      target: "Store managers, IT managers and logistics leads in Nordic retail",
      outcome: "Established strategic conversations and accelerated the adoption of ESL solutions"
    },
    accent: "#EA580C",
    href: "/case",
  },
  {
    id: "milient",
    client: "Milient",
    logo: "/images/logos/logo-milient.png",
    industry: "Time Tracking & Project Accounting SaaS",
    event: "Multi-year partnership combining appointment setting and AI-driven solutions",
    teaser: "The largest provider in its segment in the Nordics. For several years, we have supported Milient with appointment setting – now also combined with AI-driven solutions.",
    fullStory: "Milient Software is one of Europe's leading players in time tracking and project accounting. Through strategic mergers and acquisitions, they have grown into the largest provider in their segment in the Nordics. For several years – and still today – we have supported Milient with appointment setting, now also combined with AI-driven solutions. It is a real privilege to work closely with their team in a long-term partnership that keeps evolving.",
    stats: { primary: "Multi-year", secondary: "3.2 MSEK Revenue", metric: "6 Framework agreements" },
    deliveryDetails: {
      scope: "Long-term sales support & AI-integrated outreach methodology",
      target: "CFOs, CEOs and partners at Nordic consulting and project-based firms",
      outcome: "A multi-year partnership with a steady flow of qualified meetings"
    },
    accent: "#8B5CF6",
    href: "/case",
  },
  {
    id: "bumbee-labs",
    client: "Bumbee Labs",
    logo: "/images/logos/logo-bumbee-labs.png",
    industry: "Retail Tech & Footfall Analytics",
    event: "International appointment setting for multi-country expansion",
    teaser: "A leading player in footfall analytics. We supported the business development team with appointment setting in several countries under Magnus Johansson (former CEO of Coop).",
    fullStory: "Bumbee Labs is a leading player in footfall analytics and retail tech. During a campaign period when Magnus Johansson – former CEO of Coop Sweden – was leading the company, we supported them with appointment setting in several countries. The engagement was carried out for their business development team, with the aim of reaching the right decision-makers in retail.",
    stats: { primary: "Multi-Market", secondary: "Several countries", metric: "Retail tech" },
    deliveryDetails: {
      scope: "International prospecting & appointment setting for business development",
      target: "Decision-makers, expansion managers and operations leads in retail",
      outcome: "Established strategic meetings across several European markets",
    },
    accent: "#F97316",
    href: "/case",
  },
  {
    id: "roima",
    client: "Roima Intelligence",
    logo: "/images/logos/logo-roima.png",
    industry: "Industrial Software & Digitalization",
    event: "Appointment setting with strategic decision-makers via an AVEVA referral",
    teaser: "A global leader in industrial software. The engagement came via a referral from AVEVA Select Scandinavia, with appointment setting targeting strategic decision-makers.",
    fullStory: "Roima Intelligence is a global leader in industrial software implementation, focused on optimizing processes, productivity and digital transformation in manufacturing. The engagement came to us through a referral from AVEVA Select Scandinavia, and we have since supported Roima over several rounds with appointment setting targeting strategic decision-makers.",
    stats: { primary: "Enterprise", secondary: "40+ Meetings", metric: "90% Show rate" },
    deliveryDetails: {
      scope: "Strategic C-level prospecting and appointment setting",
      target: "Production managers, CTOs and digitalization leaders in manufacturing",
      outcome: "Stronger business conversations and accelerated implementation projects"
    },
    accent: "#059669",
    href: "/case",
  },
];

export function getCaseStories(locale: Locale): CaseStory[] {
  return locale === "en" ? HCS_STORIES_EN : HCS_STORIES;
}
