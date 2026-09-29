import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Mail } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { localizeHref, type Locale } from "@/i18n/config";

interface LeaderData {
  name: string;
  role: string;
  tagline: string;
  image: string;
  linkedin: string;
  fullBio: string[];
  specialty: string[];
  meetingCta: {
    title: string;
    description: string;
  };
}

const LEADERS_DATA_SV: Record<string, LeaderData> = {
  malin: {
    name: "Malin Berlin",
    role: "Head of AI Sales",
    tagline: "Ansvarig för kundrelationer i Europa och ledare för det svenska kontoret.",
    image: "/images/team/team-malin.webp",
    linkedin: "https://www.linkedin.com/in/malinberlins/",
    fullBio: [
      "Jag kom ner till Malta i slutet av 2017 med ett tydligt mål: att tjäna ihop till en lägenhet på Östermalm utan lån innan jag fyllde 25.",
      "Efter bara sex månader som mötesbokare på Hard Call Sales blev jag toppsäljare och hade flera månader med över 250 000 kr i provision – vilket gjorde målet allt mer realistiskt.",
      "I mitten av 2023 blev det verklighet. Lägenheten på Östermalm är numera min, och idag ansvarar jag för våra kundrelationer i Europa.",
      "Jag leder det svenska kontoret och jobbar främst med att bygga nya affärsrelationer, utveckla nyckelkunder och teckna nya avtal. På fritiden gillar jag att resa, träna och hänga med vänner eller familjen.",
    ],
    specialty: ["B2B Kundrelationer", "Nyckelavtal & Förhandling", "Pipeline-strategi IT/SaaS"],
    meetingCta: {
      title: "Boka ett strategisamtal direkt med Malin",
      description: "Diskutera er målgrupp, era säljmål och hur en tre månaders pilot kan se ut för ert bolag.",
    },
  },
  pontus: {
    name: "Pontus Bredal-Hansen",
    role: "Grundare & Partner",
    tagline: "Grundare sedan 2017, pipeline-strateg och arkitekten bakom nätverksmodellen.",
    image: "/images/team/team-pontus.webp",
    linkedin: "https://www.linkedin.com/in/pontus-bredal-hansen-51a07a110/",
    fullBio: [
      "Jag har jobbat med försäljning i hela mitt vuxna liv. De sista åren innan vi drog igång Hard Call Sales jobbade jag på ett av Sveriges största mötesbokningsföretag – och efter att ha toppat intäktslistan varje månad i över ett år kände jag att det var dags att bygga något eget.",
      "Tillsammans med Joakim startade jag Hard Call Sales i januari 2017, efter att vi flyttat till Malta och hyrt en av landets största villor som kontor. Ambitionen var enkel: att skapa ett säljbolag med högre kvalitet, mer affärsfokus – och roligare kultur.",
      "Sedan dess har vi bokat tiotusentals möten, representerat världsledande bolag och hjälpt allt från snabbväxande tech-startups till världsledande företag att nå rätt beslutsfattare.",
      "Idag kombinerar vi klassisk mötesbokning med smart AI-prospektering genom bland annat vår partner LinkedClient – och fortsätter utveckla vår modell dagligen. När jag inte jobbar tränar jag thaiboxning, gymmar eller umgås med familjen.",
    ],
    specialty: ["Outbound B2B Metodik", "AI-Prospektering & LinkedIn", "Skalning av Säljkår"],
    meetingCta: {
      title: "Boka ett taktiskt möte med Pontus",
      description: "Gå igenom hur vi bygger upp er säljmaskin och skapar ett ägt nätverk av 70 000+ beslutsfattare.",
    },
  },
  joakim: {
    name: "Joakim Ström",
    role: "Grundare & Operativ chef",
    tagline: "Grundare sedan 2017, operativ ledare och säljkulturens ryggrad.",
    image: "/images/team/team-joakim.webp",
    linkedin: "https://www.linkedin.com/in/joakim-strom-ab5aaa13a/",
    fullBio: [
      "Jag har alltid gillat affärer – redan som liten sålde jag golfbollar jag dykt upp eller samlade pant på festivaler som sjuåring. Jag har inga problem med att jobba sju dagar i veckan om det krävs.",
      "Innan jag startade Hard Call Sales tillsammans med Pontus 2017 hade jag olika säljjobb. Det sista innan vi drog igång var att jobba 300 timmar i månaden i en fabrik. Det var bra betalt, men inte hållbart i längden. Jag har inget emot att jobba hårt – men det får gärna vara roligt också.",
      "Jag har läst över 100 böcker om försäljning, ledarskap och personlig utveckling, och älskar att få fram nya idéer, genomföra dem och se företaget växa. Samtidigt har jag inga problem att sätta mig och kötta samtal en hel dag – man får aldrig glömma var man kommer ifrån.",
      "Sälj är kul när man lyckas – och jag älskar att lyckas. Därför älskar jag försäljning. På fritiden hänger jag med familjen, tar långa promenader med hunden Luna, kör thaiboxning eller dyker efter muränor.",
    ],
    specialty: ["Säljkultur & Träning", "Operativ Samtalskvalitet", "Ledarskap & Execution"],
    meetingCta: {
      title: "Boka ett möte med Joakim",
      description: "Se hur vi tränar våra säljare att hantera era mest komplexa invändningar i skarpa B2B-samtal.",
    },
  },
  johanna: {
    name: "Johanna Glaad",
    role: "Team Lead & Senior Mötesbokare",
    tagline: "Leder dagliga SDR-team och driver kvalitet och show-rate mot nordiska enterprise-konton.",
    image: "/images/team/team-johanna.webp",
    linkedin: "https://www.linkedin.com/in/johanna-glaad-635288156/",
    fullBio: [
      "Johanna leder våra operativa säljteam och kvalitetssäkrar att varje bokat möte uppfyller kundens exakta kravprofil.",
      "Med djup erfarenhet av kvalificerad B2B-prospektering säkerställer hon hög närvaro (show-rate) och strukturerad överlämning till kundernas säljare.",
    ],
    specialty: ["SDR Team Leadership", "Kvalitetsstyrning & Show-rate", "Enterprise Onboarding"],
    meetingCta: {
      title: "Boka möte med Johanna",
      description: "Diskutera hur våra säljteam matchar er målgrupp och hur uppstartsprocessen ser ut.",
    },
  },
  lundin: {
    name: "Joakim Lundin",
    role: "Senior Mötesbokare & Key Account",
    tagline: "Specialist på komplex B2B-mötesbokning mot VD, IT-chefer och industriella beslutsfattare.",
    image: "/images/team/team-lundin.webp",
    linkedin: "https://www.linkedin.com/in/joakim-lundin-44b76410b/",
    fullBio: [
      "Joakim har mångårig erfarenhet av att etablera kontakt med svåråtkomliga C-level-beslutsfattare inom tech och industri.",
      "Han kombinerar teknisk förståelse med stark affärskommunikation och har genererat betydande pipeline-värde för HCS kunder.",
    ],
    specialty: ["C-Level Outreach", "Industriell Tech & IT", "Pipeline-generering"],
    meetingCta: {
      title: "Boka möte med Joakim",
      description: "Hör hur vi tar oss förbi grindvakter och når de högsta beslutsfattarna i er bransch.",
    },
  },
  kevin: {
    name: "Kevin Eriksson",
    role: "Senior Mötesbokare & SDR",
    tagline: "Specialist på datadriven outreach och snabb mötesbokning mot nordiska beslutsfattare.",
    image: "/images/team/team-kevin.webp",
    linkedin: "https://www.linkedin.com/in/kevin-eriksson-b4b401112/",
    fullBio: [
      "Kevin har varit en central del av HCS leveransteam och har bokat hundratals affärskritiska möten för ledande IT- och SaaS-bolag.",
      "Med skarp samtalsmetodik och hög aktivitetsnivå omsätter han kalla kontakter till bokade säljmöten från dag ett.",
    ],
    specialty: ["Outreach & Mötesbokning", "SaaS & Mjukvara", "Snabb Pipeline-uppstart"],
    meetingCta: {
      title: "Boka möte med Kevin",
      description: "Gå igenom hur snabbt vi kan komma igång och börja boka möten för ert erbjudande.",
    },
  },
};

const LEADERS_DATA_EN: Record<string, LeaderData> = {
  malin: {
    name: "Malin Berlin",
    role: "Head of AI Sales",
    tagline: "Responsible for client relationships in Europe and head of the Swedish office.",
    image: "/images/team/team-malin.webp",
    linkedin: "https://www.linkedin.com/in/malinberlins/",
    fullBio: [
      "I came down to Malta at the end of 2017 with a clear goal: to earn enough to buy an apartment in Östermalm without a mortgage before I turned 25.",
      "After just six months as an appointment setter at Hard Call Sales, I became a top seller and had several months with over SEK 250,000 in commission – which made the goal more and more realistic.",
      "In mid-2023 it became reality. The apartment in Östermalm is now mine, and today I'm responsible for our client relationships in Europe.",
      "I lead the Swedish office and mainly work on building new business relationships, developing key accounts and signing new agreements. In my free time I like to travel, work out and spend time with friends or family.",
    ],
    specialty: ["B2B Client Relationships", "Key Accounts & Negotiation", "IT/SaaS Pipeline Strategy"],
    meetingCta: {
      title: "Book a strategy call directly with Malin",
      description: "Discuss your target audience, your sales goals and what a three-month pilot could look like for your company.",
    },
  },
  pontus: {
    name: "Pontus Bredal-Hansen",
    role: "Founder & Partner",
    tagline: "Founder since 2017, pipeline strategist and the architect behind the network model.",
    image: "/images/team/team-pontus.webp",
    linkedin: "https://www.linkedin.com/in/pontus-bredal-hansen-51a07a110/",
    fullBio: [
      "I've worked in sales my entire adult life. In the last few years before we launched Hard Call Sales, I worked at one of Sweden's largest appointment-setting companies – and after topping the revenue list every month for over a year, I felt it was time to build something of my own.",
      "Together with Joakim, I started Hard Call Sales in January 2017, after we had moved to Malta and rented one of the country's largest villas as our office. The ambition was simple: to create a sales company with higher quality, a stronger business focus – and a more fun culture.",
      "Since then we've booked tens of thousands of meetings, represented world-leading companies and helped everyone from fast-growing tech startups to world-leading enterprises reach the right decision-makers.",
      "Today we combine classic appointment setting with smart AI prospecting through, among others, our partner LinkedClient – and we keep developing our model every day. When I'm not working, I train Muay Thai, hit the gym or spend time with my family.",
    ],
    specialty: ["Outbound B2B Methodology", "AI Prospecting & LinkedIn", "Scaling Sales Teams"],
    meetingCta: {
      title: "Book a tactical meeting with Pontus",
      description: "Walk through how we build your sales machine and create an owned network of 70,000+ decision-makers.",
    },
  },
  joakim: {
    name: "Joakim Ström",
    role: "Founder & COO",
    tagline: "Founder since 2017, operational leader and the backbone of our sales culture.",
    image: "/images/team/team-joakim.webp",
    linkedin: "https://www.linkedin.com/in/joakim-strom-ab5aaa13a/",
    fullBio: [
      "I've always loved business – as a kid I sold golf balls I'd dived up, and at seven I collected bottle deposits at festivals. I have no problem working seven days a week if that's what it takes.",
      "Before I started Hard Call Sales with Pontus in 2017, I had various sales jobs. The last one before we got going was working 300 hours a month in a factory. It paid well, but it wasn't sustainable in the long run. I don't mind working hard – but it should be fun too.",
      "I've read over 100 books on sales, leadership and personal development, and I love coming up with new ideas, executing them and watching the company grow. At the same time, I have no problem sitting down and grinding through calls all day – you should never forget where you came from.",
      "Sales is fun when you succeed – and I love succeeding. That's why I love sales. In my free time I hang out with my family, take long walks with our dog Luna, do Muay Thai or dive for moray eels.",
    ],
    specialty: ["Sales Culture & Training", "Operational Call Quality", "Leadership & Execution"],
    meetingCta: {
      title: "Book a meeting with Joakim",
      description: "See how we train our sales reps to handle your most complex objections in live B2B calls.",
    },
  },
  johanna: {
    name: "Johanna Glaad",
    role: "Team Lead & Senior Appointment Setter",
    tagline: "Leads daily SDR teams and drives quality and show rate for Nordic enterprise accounts.",
    image: "/images/team/team-johanna.webp",
    linkedin: "https://www.linkedin.com/in/johanna-glaad-635288156/",
    fullBio: [
      "Johanna leads our operational sales teams and quality-assures that every booked meeting meets the client's exact requirements profile.",
      "With deep experience in qualified B2B prospecting, she ensures a high attendance rate (show rate) and a structured handover to our clients' sales reps.",
    ],
    specialty: ["SDR Team Leadership", "Quality Management & Show Rate", "Enterprise Onboarding"],
    meetingCta: {
      title: "Book a meeting with Johanna",
      description: "Discuss how our sales teams match your target audience and what the onboarding process looks like.",
    },
  },
  lundin: {
    name: "Joakim Lundin",
    role: "Senior Appointment Setter & Key Account",
    tagline: "Specialist in complex B2B appointment setting with CEOs, IT managers and industrial decision-makers.",
    image: "/images/team/team-lundin.webp",
    linkedin: "https://www.linkedin.com/in/joakim-lundin-44b76410b/",
    fullBio: [
      "Joakim has many years of experience establishing contact with hard-to-reach C-level decision-makers in tech and industry.",
      "He combines technical understanding with strong business communication and has generated significant pipeline value for HCS clients.",
    ],
    specialty: ["C-Level Outreach", "Industrial Tech & IT", "Pipeline Generation"],
    meetingCta: {
      title: "Book a meeting with Joakim",
      description: "Hear how we get past gatekeepers and reach the most senior decision-makers in your industry.",
    },
  },
  kevin: {
    name: "Kevin Eriksson",
    role: "Senior Appointment Setter & SDR",
    tagline: "Specialist in data-driven outreach and fast appointment setting with Nordic decision-makers.",
    image: "/images/team/team-kevin.webp",
    linkedin: "https://www.linkedin.com/in/kevin-eriksson-b4b401112/",
    fullBio: [
      "Kevin has been a central part of the HCS delivery team and has booked hundreds of business-critical meetings for leading IT and SaaS companies.",
      "With a sharp calling methodology and a high activity level, he turns cold contacts into booked sales meetings from day one.",
    ],
    specialty: ["Outreach & Appointment Setting", "SaaS & Software", "Fast Pipeline Launch"],
    meetingCta: {
      title: "Book a meeting with Kevin",
      description: "Walk through how quickly we can get started and begin booking meetings for your offering.",
    },
  },
};

export const LEADER_SLUGS = ["malin", "pontus", "joakim", "johanna", "lundin", "kevin"] as const;

export function getLeader(slug: string, locale: Locale): LeaderData | undefined {
  return (locale === "en" ? LEADERS_DATA_EN : LEADERS_DATA_SV)[slug];
}

const COPY = {
  sv: {
    back: "Tillbaka till Ledning & Team",
    connect: "CONNECTA MED",
    expertise: "Expertis & Ansvarsområden",
    personal: "PERSONLIG KONTAKT",
    bookWith: "Boka möte med",
    email: "Skicka e-post",
  },
  en: {
    back: "Back to Leadership & Team",
    connect: "CONNECT WITH",
    expertise: "Expertise & Responsibilities",
    personal: "PERSONAL CONTACT",
    bookWith: "Book a meeting with",
    email: "Send an email",
  },
} as const;

export function LeaderProfileView({ slug, locale }: { slug: string; locale: Locale }) {
  const leader = getLeader(slug, locale);
  const t = COPY[locale];

  if (!leader) {
    notFound();
  }

  return (
    <main className="w-full min-h-screen bg-[#0A0A0A] text-white">
      <Header />

      {/* ── Breadcrumb & Back button ── */}
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-12 pt-32 sm:pt-40 pb-8">
        <Link
          href={localizeHref("/#ledning", locale)}
          className="inline-flex items-center text-xs font-mono tracking-widest text-neutral-400 hover:text-white transition-colors uppercase group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          {t.back}
        </Link>
      </div>

      {/* ── Hero Profile Section ── */}
      <section className="w-full max-w-6xl mx-auto px-6 sm:px-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Vänster: Stor bild + Socials */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-[#141414] shadow-2xl">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-full object-cover object-center grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
            </div>

            <div className="mt-6 flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <span className="text-xs font-mono text-neutral-400">{t.connect} {leader.name.split(" ")[0].toUpperCase()}</span>
              <a
                href={leader.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono text-white transition-colors"
              >
                <svg className="w-3.5 h-3.5 mr-1.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.49 1.49 0 0 0 1.49-1.48 1.5 1.5 0 0 0-1.49-1.5 1.5 1.5 0 0 0-1.5 1.5c0 .82.68 1.48 1.5 1.48m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Höger: Bio & Specialiteter */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase block mb-3">
              {leader.role}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-6">
              {leader.name}
            </h1>
            <p className="text-lg sm:text-xl text-neutral-300 font-light leading-relaxed mb-8 pb-8 border-b border-white/10">
              {leader.tagline}
            </p>

            {/* Story Paragraphs */}
            <div className="space-y-5 text-neutral-400 text-sm sm:text-base leading-relaxed font-normal">
              {leader.fullBio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>


            {/* Specialties */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-3">
                {t.expertise}
              </span>
              <div className="flex flex-wrap gap-2">
                {leader.specialty.map((spec) => (
                  <span
                    key={spec}
                    className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-300 font-mono"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── Dedikerad Boka Möte CTA Längst ner ── */}
      <section className="w-full bg-[#111111] border-t border-white/10 py-20 sm:py-28">
        <div className="w-full max-w-4xl mx-auto px-6 sm:px-12 text-center">
          <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase block mb-4">
            {t.personal}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white mb-6">
            {leader.meetingCta.title}
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 max-w-xl mx-auto mb-10 leading-relaxed font-light">
            {leader.meetingCta.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href={localizeHref("/boka-mote", locale)}
              className="inline-flex items-center px-8 py-4 rounded-full bg-white text-black text-sm font-medium uppercase tracking-wider hover:bg-neutral-200 transition-colors shadow-lg"
            >
              <Calendar className="w-4 h-4 mr-2" />
              {t.bookWith} {leader.name.split(" ")[0]}
            </Link>
            <a
              href="mailto:info@hardcallsales.se"
              className="inline-flex items-center px-8 py-4 rounded-full bg-transparent border border-white/20 text-white text-sm font-medium uppercase tracking-wider hover:bg-white/10 transition-colors"
            >
              <Mail className="w-4 h-4 mr-2" />
              {t.email}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
