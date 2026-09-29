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
    event: "Mötesbokning mot enterprise-bolag som bidrog till affärer värda över 20 MSEK",
    teaser: "AVEVA Select Scandinavia engagerade oss under en testperiod för mötesbokning mot stora enterprise-bolag. Uppdraget bidrog till affärer värda över 20 miljoner kronor.",
    fullStory: "AVEVA är en global ledare inom industriell mjukvara, med lösningar som används av världens största tillverknings- och energibolag. AVEVA Select Scandinavia – tidigare kända som Wonderware Scandinavia – engagerade oss under en testperiod för mötesbokning mot stora enterprise-bolag. Uppdraget bidrog till affärer värda över 20 miljoner kronor. Samarbetet fortsatte därefter och vår insats rekommenderades vidare, vilket ledde till nya uppdrag.",
    stats: { primary: ">20 MSEK", secondary: "Testperiod", metric: "Rekommenderade oss vidare" },
    deliveryDetails: {
      scope: "Mötesbokning under en testperiod",
      target: "Stora enterprise-bolag",
      outcome: "Affärer värda över 20 MSEK, fortsatt samarbete och nya uppdrag via rekommendation"
    },
    accent: "#7851A9",
    href: "/case",
  },
  {
    id: "monster",
    client: "Monster",
    logo: "/images/logos/logo-monster-white.svg",
    industry: "B2B HR-Tech & Rekrytering",
    event: "Mötesbokning för Monsters svenska säljteam vid lansering av nya tjänster",
    teaser: "I flera omgångar har vi stöttat Monsters svenska säljteam med mötesbokning mot relevanta beslutsfattare, i samband med lanseringen av nya tjänster.",
    fullStory: "Monster är världens största rekryteringsföretag och en pionjär inom digital talent acquisition. I flera omgångar har vi stöttat deras svenska säljteam med mötesbokning mot relevanta beslutsfattare, i samband med lanseringen av nya tjänster. Ett uppdrag där vi kombinerade affärsdriven prospektering med förståelse för komplex B2B-försäljning inom HR-tech.",
    stats: { primary: "Flera omgångar", secondary: "Tjänstelansering", metric: "HR-tech" },
    deliveryDetails: {
      scope: "Mötesbokning i samband med lansering av nya tjänster",
      target: "Relevanta beslutsfattare",
      outcome: "Affärsdriven prospektering med förståelse för komplex B2B-försäljning inom HR-tech"
    },
    accent: "#8B5CF6",
    href: "/case",
  },
  {
    id: "wall-to-wall",
    client: "Wall to Wall Group",
    logo: "/images/logos/logo-wall-to-wall.png",
    industry: "Fastighetsservice & Relining",
    event: "Mötesbokning och kundkontakt för hembesök – Wall to Wall Group och Repipe",
    teaser: "Börsnoterat bolag med 26 dotterbolag i koncernen. Under flera kampanjperioder har vi stöttat deras team med mötesbokning och kundkontakt för hembesök.",
    fullStory: "Wall to Wall Group är ett börsnoterat bolag med 26 dotterbolag i koncernen och verksamhet inom fastighetsservice, renovering och relining. Under flera kampanjperioder har vi stöttat deras team med mötesbokning och kundkontakt för hembesök — för Wall to Wall Group och deras reliningsbolag Repipe. Vi har även haft nöjet att besöka deras huvudkontor i Kristianstad och träffa deras ledning och personal — ett engagerat och professionellt team med stark tillväxt, tydliga processer och fokus på kvalitet i varje uppdrag.",
    stats: { primary: "26 dotterbolag", secondary: "Börsnoterat", metric: "Flera kampanjperioder" },
    deliveryDetails: {
      scope: "Mötesbokning och kundkontakt för hembesök",
      target: "Kunder till Wall to Wall Group och reliningsbolaget Repipe",
      outcome: "Flera kampanjperioder och besök på huvudkontoret i Kristianstad"
    },
    accent: "#0EA5E9",
    href: "/case",
  },
  {
    id: "allt-om-juridik",
    client: "Allt om Juridik",
    logo: "/images/logos/logo-allt-om-juridik.png",
    industry: "Juridiska B2B-tjänster (Blendow Group)",
    event: "Riktade e-postkampanjer och möten med beslutsfattare vid lansering av ny tjänst",
    teaser: "Allt om Juridik är en del av Blendow Group. Vi genomförde riktade e-postkampanjer och bokade möten med beslutsfattare i flera olika branscher, kopplade till lanseringen av deras nya tjänst.",
    fullStory: "Allt om Juridik är en del av Blendow Group – Sveriges största leverantör av juridisk kompetensförsörjning. Inom ramen för vårt samarbete genomförde vi riktade e-postkampanjer och bokade möten med beslutsfattare i flera olika branscher, kopplade till lanseringen av deras nya tjänst. Det var ett mycket givande samarbete där vi inte bara levererade resultat, utan också fick möjlighet att ta del av deras djupa juridiska kompetens och strukturerade arbetssätt.",
    stats: { primary: "Tjänstelansering", secondary: "Blendow Group", metric: "E-post + möten" },
    deliveryDetails: {
      scope: "Riktade e-postkampanjer och mötesbokning",
      target: "Beslutsfattare i flera olika branscher",
      outcome: "Möten kopplade till lanseringen av deras nya tjänst"
    },
    accent: "#E11D48",
    href: "/case",
  },
  {
    id: "idnet",
    client: "IDNet",
    logo: "/images/logos/logo-idnet.png",
    industry: "Detaljhandel & ESL-teknologi",
    event: "Mötesbokning mot aktörer inom detaljhandeln för IDNETs säljteam",
    teaser: "IDNET är en global ledare inom ESL-teknologi (Electronic Shelf Labels). Vi har vid flera tillfällen stöttat deras säljteam med mötesbokning mot aktörer inom detaljhandeln.",
    fullStory: "IDNET är en global ledare inom ESL-teknologi (Electronic Shelf Labels) och erbjuder lösningar som effektiviserar butikskommunikation i realtid. Vi har vid flera tillfällen stöttat deras säljteam med mötesbokning mot aktörer inom detaljhandeln. Samarbetet har varit både givande och inspirerande, och gett oss inblick i en bransch i snabb utveckling.",
    stats: { primary: "Detaljhandel", secondary: "ESL-teknologi", metric: "Flera tillfällen" },
    deliveryDetails: {
      scope: "Mötesbokning för IDNETs säljteam",
      target: "Aktörer inom detaljhandeln",
      outcome: "Återkommande samarbete vid flera tillfällen"
    },
    accent: "#EA580C",
    href: "/case",
  },
  {
    id: "milient",
    client: "Milient Software",
    logo: "/images/logos/logo-milient.png",
    industry: "Tidsrapportering & Projektredovisning SaaS",
    event: "Långsiktigt samarbete med mötesbokning – numera i kombination med AI",
    teaser: "Milient Software är en av Europas ledande aktörer inom tidsrapportering och projektredovisning. Vi har under flera år, och fortsatt idag, stöttat Milient med mötesbokning.",
    fullStory: "Milient Software är en av Europas ledande aktörer inom tidsrapportering och projektredovisning. Genom strategiska sammanslagningar och uppköp har de vuxit till att bli Nordens största leverantör inom sitt segment. Vi har under flera år, och fortsatt idag, stöttat Milient med mötesbokning – numera även i kombination med AI-drivna lösningar. Det är en verklig förmån att få arbeta tätt tillsammans med deras team i ett långsiktigt och utvecklande samarbete.",
    stats: { primary: "Flera år", secondary: "Pågående", metric: "Mötesbokning + AI" },
    deliveryDetails: {
      scope: "Mötesbokning i kombination med AI-drivna lösningar",
      target: "Beslutsfattare hos Milients potentiella kunder",
      outcome: "Ett långsiktigt samarbete som pågår än idag"
    },
    accent: "#8B5CF6",
    href: "/case",
  },
  {
    id: "bumbee-labs",
    client: "Bumbee Labs",
    logo: "/images/logos/logo-bumbee-labs.png",
    industry: "Retailtech & Besöksflödesanalys",
    event: "Mötesbokning i flera länder mot beslutsfattare inom detaljhandeln",
    teaser: "Under en kampanjperiod, när Magnus Johansson – tidigare vd för Coop Sverige – ledde bolaget, stöttade vi Bumbee Labs med mötesbokning i flera olika länder.",
    fullStory: "Bumbee Labs är en ledande aktör inom besöksflödesanalys och retailtech. Under en kampanjperiod, när Magnus Johansson – tidigare vd för Coop Sverige – ledde bolaget, stöttade vi dem med mötesbokning i flera olika länder. Uppdraget genomfördes för deras affärsutvecklingsteam och syftade till att nå ut till rätt beslutsfattare inom detaljhandeln.",
    stats: { primary: "Flera länder", secondary: "Retailtech", metric: "Kampanjperiod" },
    deliveryDetails: {
      scope: "Mötesbokning för affärsutvecklingsteamet",
      target: "Beslutsfattare inom detaljhandeln",
      outcome: "Kampanj i flera olika länder"
    },
    accent: "#F97316",
    href: "/case",
  },
  {
    id: "roima",
    client: "Roima Intelligence",
    logo: "/images/logos/logo-roima.png",
    industry: "Industriell Mjukvara & Digitalisering",
    event: "Rekommenderade till oss av AVEVA – mötesbokning mot strategiska beslutsfattare",
    teaser: "Uppdraget kom till oss via en rekommendation från AVEVA Select Scandinavia, och vi har sedan dess stöttat Roima i flera omgångar med mötesbokning mot strategiska beslutsfattare.",
    fullStory: "Roima Intelligence är en global ledare inom implementering av industriell mjukvara, med fokus på att optimera processer, produktivitet och digital transformation inom tillverkande industri. Uppdraget kom till oss via en rekommendation från AVEVA Select Scandinavia, och vi har sedan dess stöttat Roima i flera omgångar med mötesbokning mot strategiska beslutsfattare.",
    stats: { primary: "Rekommendation", secondary: "Tillverkande industri", metric: "Flera omgångar" },
    deliveryDetails: {
      scope: "Mötesbokning",
      target: "Strategiska beslutsfattare",
      outcome: "Återkommande uppdrag som kom via rekommendation från AVEVA"
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
    event: "Appointment booking to enterprise companies that contributed to deals worth over SEK 20 million",
    teaser: "AVEVA Select Scandinavia engaged us for a trial period of appointment booking targeting large enterprise companies. The assignment contributed to deals worth over SEK 20 million.",
    fullStory: "AVEVA is a global leader in industrial software, with solutions used by the world's largest manufacturing and energy companies. AVEVA Select Scandinavia – formerly known as Wonderware Scandinavia – engaged us for a trial period of appointment booking targeting large enterprise companies. The assignment contributed to deals worth over SEK 20 million. The collaboration continued, and our work was recommended onward, leading to new assignments.",
    stats: { primary: ">SEK 20M", secondary: "Trial period", metric: "Recommended us onward" },
    deliveryDetails: {
      scope: "Appointment booking during a trial period",
      target: "Large enterprise companies",
      outcome: "Deals worth over SEK 20 million, a continued partnership and new assignments through referrals"
    },
    accent: "#7851A9",
    href: "/case",
  },
  {
    id: "monster",
    client: "Monster",
    logo: "/images/logos/logo-monster-white.svg",
    industry: "B2B HR Tech & Recruitment",
    event: "Appointment booking for Monster's Swedish sales team during new service launches",
    teaser: "On several occasions, we have supported Monster's Swedish sales team with appointment booking targeting relevant decision-makers in connection with the launch of new services.",
    fullStory: "Monster is the world's largest recruitment company and a pioneer in digital talent acquisition. On several occasions, we have supported their Swedish sales team with appointment booking targeting relevant decision-makers in connection with the launch of new services. It was an assignment where we combined business-driven prospecting with an understanding of complex B2B sales in HR tech.",
    stats: { primary: "Multiple rounds", secondary: "Service launches", metric: "HR tech" },
    deliveryDetails: {
      scope: "Appointment booking for new service launches",
      target: "Relevant decision-makers",
      outcome: "Business-driven prospecting combined with an understanding of complex B2B sales in HR tech"
    },
    accent: "#8B5CF6",
    href: "/case",
  },
  {
    id: "wall-to-wall",
    client: "Wall to Wall Group",
    logo: "/images/logos/logo-wall-to-wall.png",
    industry: "Property Services & Pipe Relining",
    event: "Appointment booking and customer outreach for home visits – Wall to Wall Group and Repipe",
    teaser: "A publicly listed company with 26 subsidiaries in the group. Throughout multiple campaign periods, we supported their team with appointment booking and customer outreach for home visits.",
    fullStory: "Wall to Wall Group is a publicly listed company with 26 subsidiaries in the group, operating in property services, renovation, and relining. Throughout multiple campaign periods, we supported their team with appointment booking and customer outreach for home visits — for Wall to Wall Group and their relining company Repipe. We also had the pleasure of visiting their headquarters in Kristianstad to meet their management and staff — a highly driven and professional team with strong growth, clear processes, and a consistent focus on quality in every project.",
    stats: { primary: "26 subsidiaries", secondary: "Publicly listed", metric: "Multiple campaign periods" },
    deliveryDetails: {
      scope: "Appointment booking and customer outreach for home visits",
      target: "Customers of Wall to Wall Group and their relining company Repipe",
      outcome: "Multiple campaign periods and a visit to their headquarters in Kristianstad"
    },
    accent: "#0EA5E9",
    href: "/case",
  },
  {
    id: "allt-om-juridik",
    client: "Allt om Juridik",
    logo: "/images/logos/logo-allt-om-juridik.png",
    industry: "B2B Legal Services (Blendow Group)",
    event: "Targeted email campaigns and meetings with decision-makers for a new service launch",
    teaser: "Allt om Juridik is part of Blendow Group. We ran targeted email campaigns and booked meetings with decision-makers across a range of industries in connection with the launch of their new service.",
    fullStory: "Allt om Juridik is part of Blendow Group – Sweden's largest provider of legal expertise and professional development. As part of our collaboration, we ran targeted email campaigns and booked meetings with decision-makers across a range of industries in connection with the launch of their new service. It was a highly rewarding partnership where we not only delivered results, but also gained insight into their deep legal expertise and structured way of working.",
    stats: { primary: "Service launch", secondary: "Blendow Group", metric: "Email + meetings" },
    deliveryDetails: {
      scope: "Targeted email campaigns and appointment booking",
      target: "Decision-makers across a range of industries",
      outcome: "Meetings tied to the launch of their new service"
    },
    accent: "#E11D48",
    href: "/case",
  },
  {
    id: "idnet",
    client: "IDNet",
    logo: "/images/logos/logo-idnet.png",
    industry: "Retail & ESL Technology",
    event: "Appointment booking with retail companies for IDNET's sales team",
    teaser: "IDNET is a global leader in ESL technology (Electronic Shelf Labels). On several occasions, we have supported their sales team with appointment booking targeting retail companies.",
    fullStory: "IDNET is a global leader in ESL technology (Electronic Shelf Labels), offering solutions that streamline in-store communication in real time. On several occasions, we have supported their sales team with appointment booking targeting retail companies. The collaboration has been both rewarding and inspiring, and has given us insight into a rapidly evolving industry.",
    stats: { primary: "Retail", secondary: "ESL technology", metric: "Several occasions" },
    deliveryDetails: {
      scope: "Appointment booking for IDNET's sales team",
      target: "Retail companies",
      outcome: "A recurring partnership on several occasions"
    },
    accent: "#EA580C",
    href: "/case",
  },
  {
    id: "milient",
    client: "Milient Software",
    logo: "/images/logos/logo-milient.png",
    industry: "Time Tracking & Project Accounting SaaS",
    event: "A long-term appointment booking partnership – now combined with AI",
    teaser: "Milient Software is one of Europe's leading providers of time reporting and project accounting. For several years, and still today, we have supported Milient with appointment booking.",
    fullStory: "Milient Software is one of Europe's leading providers of time reporting and project accounting. Through strategic mergers and acquisitions, they have grown to become the largest supplier in their segment in the Nordics. For several years, and still today, we have supported Milient with appointment booking – now also combined with AI-driven solutions. It is a true privilege to work closely with their team in a long-term and developing partnership.",
    stats: { primary: "Several years", secondary: "Ongoing", metric: "Booking + AI" },
    deliveryDetails: {
      scope: "Appointment booking combined with AI-driven solutions",
      target: "Decision-makers at Milient's prospective customers",
      outcome: "A long-term partnership that continues today"
    },
    accent: "#8B5CF6",
    href: "/case",
  },
  {
    id: "bumbee-labs",
    client: "Bumbee Labs",
    logo: "/images/logos/logo-bumbee-labs.png",
    industry: "Retail Tech & Footfall Analytics",
    event: "Appointment booking across several countries with retail decision-makers",
    teaser: "During a campaign period, when Magnus Johansson – former CEO of Coop Sweden – was leading the company, we supported Bumbee Labs with appointment booking across several countries.",
    fullStory: "Bumbee Labs is a leading player in visitor flow analytics and retail tech. During a campaign period, when Magnus Johansson – former CEO of Coop Sweden – was leading the company, we supported them with appointment booking across several countries. The assignment was carried out for their business development team, with the aim of reaching the right decision-makers in the retail sector.",
    stats: { primary: "Several countries", secondary: "Retail tech", metric: "Campaign period" },
    deliveryDetails: {
      scope: "Appointment booking for their business development team",
      target: "Decision-makers in the retail sector",
      outcome: "A campaign across several countries"
    },
    accent: "#F97316",
    href: "/case",
  },
  {
    id: "roima",
    client: "Roima Intelligence",
    logo: "/images/logos/logo-roima.png",
    industry: "Industrial Software & Digitalization",
    event: "Referred to us by AVEVA – appointment booking with strategic decision-makers",
    teaser: "The assignment came to us through a recommendation from AVEVA Select Scandinavia, and since then we have supported Roima on several occasions with appointment booking targeting strategic decision-makers.",
    fullStory: "Roima Intelligence is a global leader in implementing industrial software, focused on optimizing processes, productivity and digital transformation in manufacturing. The assignment came to us through a recommendation from AVEVA Select Scandinavia, and since then we have supported Roima on several occasions with appointment booking targeting strategic decision-makers.",
    stats: { primary: "Referral", secondary: "Manufacturing", metric: "Multiple rounds" },
    deliveryDetails: {
      scope: "Appointment booking",
      target: "Strategic decision-makers",
      outcome: "Recurring assignments that came through a referral from AVEVA"
    },
    accent: "#059669",
    href: "/case",
  },
];

export function getCaseStories(locale: Locale): CaseStory[] {
  return locale === "en" ? HCS_STORIES_EN : HCS_STORIES;
}
