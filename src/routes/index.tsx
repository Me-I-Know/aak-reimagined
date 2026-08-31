import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/aak/SiteHeader";
import { SiteFooter } from "@/components/aak/SiteFooter";
import { Reveal } from "@/components/aak/Reveal";

import heroAwards from "@/assets/about-aak.jpg";
import advocacyPhoto from "@/assets/advocacy.jpg";
import membershipPhoto from "@/assets/membership.jpg";
import reportCover from "@/assets/report-cover.png";
import dmjLogo from "@/assets/dmj-logo.png";

import chArchitects from "@/assets/chapter-architects.webp";
import chQs from "@/assets/chapter-qs.png";
import chPlanners from "@/assets/chapter-planners.jpeg";
import chEngineers from "@/assets/chapter-engineers.png";
import chLandscape from "@/assets/chapter-landscape.jpeg";
import chEnvironmental from "@/assets/chapter-environmental.jpeg";
import chCpm from "@/assets/chapter-cpm.jpeg";
import chInteriors from "@/assets/chapter-interiors.webp";

import awardAgora from "@/assets/award-agora.png";
import awardKigandani from "@/assets/award-kigandani.png";
import awardMombasa from "@/assets/award-mombasa.png";
import awardMzizi from "@/assets/award-mzizi.png";
import awardKaist from "@/assets/award-kaist.png";

import partnerAua from "@/assets/partner-aua.png";
import partnerEaia from "@/assets/partner-eaia.png";
import partnerEbk from "@/assets/partner-ebk.png";
import partnerIfla from "@/assets/partner-ifla.png";
import partnerIsocarp from "@/assets/partner-isocarp.png";
import partnerUia from "@/assets/partner-uia.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Architectural Association of Kenya | AAK Since 1967" },
      {
        name: "description",
        content:
          "AAK unites eight professional chapters of Kenya's built environment. Awards of Excellence 2026, policy briefings, member services and public safety advocacy.",
      },
      { property: "og:title", content: "Architectural Association of Kenya | AAK Since 1967" },
      {
        property: "og:description",
        content:
          "Eight professional chapters advancing integrity, technical excellence and sustainable development across Kenya's built environment.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const chapters = [
  { n: "01", name: "Architects", image: chArchitects },
  { n: "02", name: "Quantity Surveyors", image: chQs },
  { n: "03", name: "Town Planners", image: chPlanners },
  { n: "04", name: "Engineers", image: chEngineers },
  { n: "05", name: "Landscape Architects", image: chLandscape },
  { n: "06", name: "Environmental Design", image: chEnvironmental },
  { n: "07", name: "Construction Project Managers", image: chCpm },
  { n: "08", name: "Interior Designers", image: chInteriors },
];

const briefings = [
  {
    kicker: "Annual Report 2025",
    title: "Status of the Built Environment Report",
    body: "A comprehensive analysis of the trends, challenges and professional opportunities shaping Kenya's construction and urban development landscape.",
  },
  {
    kicker: "Legislation",
    title: "Memorandum on the Finance Bill 2025",
    body: "The Association's formal position on tax proposals affecting professional services, materials and project viability.",
  },
  {
    kicker: "Safety Advocacy",
    title: "Mulika Mjengo: Report Unsafe Buildings",
    body: "A public reporting channel for structures that pose safety risks, backed by technical review from AAK members.",
  },
];

const winners = [
  { category: "Best Student Project", rank: "Winner", title: "The Agora", image: awardAgora },
  {
    category: "Best Student Project",
    rank: "First Runner-Up",
    title: "Kigandani Industrial Hub",
    image: awardKigandani,
  },
  {
    category: "Best Student Project",
    rank: "Second Runner-Up",
    title: "Mombasa Ferry Terminal",
    image: awardMombasa,
  },
  {
    category: "Best Student Project",
    rank: "Honourable Mention",
    title: "Mzizi ECD Centre",
    image: awardMzizi,
  },
  {
    category: "Best Institutional Project",
    rank: "Honourable Mention",
    title: "Kenya Advanced Institute of Science and Technology",
    image: awardKaist,
  },
];

const partners = [
  { name: "Africa Union of Architects", short: "AUA", logo: partnerAua },
  { name: "East Africa Institute of Architects", short: "EAIA", logo: partnerEaia },
  { name: "Engineers Board of Kenya", short: "EBK", logo: partnerEbk },
  { name: "International Federation of Landscape Architects", short: "IFLA", logo: partnerIfla },
  { name: "International Society of City and Regional Planners", short: "ISOCARP", logo: partnerIsocarp },
  { name: "International Union of Architects", short: "UIA", logo: partnerUia },
];

function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <SiteHeader />

      <main id="main" className="mx-auto max-w-7xl px-6 py-12">
        {/* Lead: Awards call for entries + briefings rail */}
        <section className="grid grid-cols-1 gap-12 border-b border-border pb-16 lg:grid-cols-12">
          <div className="flex flex-col lg:col-span-8">
            <Reveal className="label mb-4 inline-flex items-center gap-3 text-aak-red">
              <span className="block h-px w-8 bg-aak-red" />
              Open Call for Submissions
            </Reveal>
            <Reveal
              as="h1"
              delay={120}
              className="mb-8 font-serif text-5xl leading-[1.05] tracking-tight lg:text-7xl"
            >
              AAK &ndash; Basco Duracoat Awards of Excellence in Architecture 2026
            </Reveal>

            <Reveal delay={220} className="mb-4">
              <img
                src={heroAwards}
                alt="AAK members gathered at an association event in Nairobi"
                className="aspect-[2/1] w-full object-cover"
                width={1200}
                height={600}
              />
            </Reveal>
            <p className="label mb-8 text-ink/50">
              Plate 01 &nbsp;/&nbsp; Members of the Association, Nairobi
            </p>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <p className="font-serif text-lg leading-relaxed text-ink/85">
                Submit a completed project built between 2020 and 2025 across nine categories,
                including Residential, Commercial, Hospitality and Institutional.
              </p>
              <div className="flex flex-col justify-end">
                <p className="label mb-2">Submission Deadline</p>
                <p className="mb-6 font-serif text-3xl">18 March 2026</p>
                <a
                  href="https://aak.or.ke/aak-awards-honours/"
                  className="label w-fit bg-ink px-6 py-3 text-paper hover:bg-aak-red"
                >
                  Submit an Entry
                </a>
              </div>
            </div>
          </div>

          <div className="border-border pl-0 lg:col-span-4 lg:border-l lg:pl-12">
            <h2 className="mb-8 font-serif text-2xl">Latest Briefings</h2>
            <div className="space-y-10">
              {briefings.map((item, i) => (
                <Reveal key={item.title} delay={i * 90} className="group">
                  <span className="label mb-2 block text-ink/50">{item.kicker}</span>
                  <h3 className="mb-2 font-sans text-lg leading-tight font-semibold group-hover:text-aak-red">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink/70">{item.body}</p>
                </Reveal>
              ))}
            </div>
            <a
              href="https://aak.or.ke/reports"
              className="label mt-10 inline-block border-b border-ink pb-1"
            >
              All Publications
            </a>
          </div>
        </section>

        {/* Chapters */}
        <section className="py-20">
          <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="mb-4 font-serif text-4xl">Professional Chapters</h2>
              <p className="max-w-md text-ink/65">
                Eight distinct disciplines united under one association to uphold professional
                integrity and technical excellence.
              </p>
            </div>
            <a
              href="https://aak.or.ke/members-directory"
              className="label w-fit border-b border-ink pb-1"
            >
              Members Directory
            </a>
          </div>

          <Reveal variant="rule" className="mb-0 h-px w-full bg-ink/20" />

          <div className="grid grid-cols-2 border-l border-border lg:grid-cols-4">
            {chapters.map((chapter) => (
              <a
                key={chapter.n}
                href="https://aak.or.ke/about-us#chapters"
                className="group relative flex aspect-square flex-col justify-between border-r border-b border-border p-6 lg:p-8"
              >
                <img
                  src={chapter.image}
                  alt={`${chapter.name} chapter of AAK`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-0 grayscale group-hover:opacity-100"
                />
                <span className="label relative z-10 text-ink/50 group-hover:text-paper">
                  {chapter.n}
                </span>
                <span className="relative z-10 font-serif text-xl leading-tight group-hover:text-paper lg:text-2xl">
                  {chapter.name}
                </span>
                <span className="absolute inset-0 z-[5] bg-ink-deep/0 group-hover:bg-ink-deep/65" />
              </a>
            ))}
          </div>
        </section>

        {/* Awards roll */}
        <section className="-mx-6 bg-paper-dim px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="label mb-4 block text-aak-red">Recognising Professional Mastery</span>
                <h2 className="font-serif text-4xl">Awards Roll, 2025</h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-ink/70">
                Projects honoured at the most recent Awards of Excellence, judged across student,
                institutional and commercial categories.
              </p>
            </div>

            <div className="grid grid-cols-1 divide-y divide-ink/10 border-y border-ink/15 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-5 lg:divide-x lg:divide-y-0">
              {winners.map((w, i) => (
                <Reveal key={w.title} delay={i * 70} className="p-6 first:pl-0 lg:last:pr-0">
                  <img
                    src={w.image}
                    alt={w.title}
                    loading="lazy"
                    className="mb-5 aspect-[4/3] w-full bg-paper object-contain"
                  />
                  <span className="label block text-ink/50">{w.category}</span>
                  <span className="label mt-1 block text-aak-red">{w.rank}</span>
                  <h3 className="mt-3 font-serif text-lg leading-snug">{w.title}</h3>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Featured firm */}
        <section className="py-24">
          <div className="flex flex-col gap-16 lg:flex-row">
            <div className="lg:w-1/3">
              <span className="label mb-6 inline-block bg-ink px-2 py-1 text-paper">
                Feature Firm
              </span>
              <h2 className="mb-6 font-serif text-5xl leading-[1.05]">DMJ Architects</h2>
              <p className="mb-8 text-sm leading-relaxed text-ink/80">
                Founded by Robert Marshall in 1965, DMJ Architects is a Nairobi based practice
                renowned for exceptional design in sensitive environmental landscapes, from the
                Serengeti National Park to the Kenyan coast.
              </p>
              <ul className="space-y-4 border-t border-border pt-8">
                <li className="flex items-baseline justify-between gap-4">
                  <span className="label">Galleria Gardens</span>
                  <span className="text-xs text-ink/50">Large Scale Residential</span>
                </li>
                <li className="flex items-baseline justify-between gap-4">
                  <span className="label">Swiss Chancery</span>
                  <span className="text-xs text-ink/50">Award of Excellence</span>
                </li>
                <li className="flex items-baseline justify-between gap-4">
                  <span className="label">Buffalo Mall</span>
                  <span className="text-xs text-ink/50">Naivasha, Kenya</span>
                </li>
              </ul>
              <img src={dmjLogo} alt="DMJ Architects" className="mt-10 h-16 w-auto" loading="lazy" />
            </div>

            <div className="grid grid-cols-2 gap-4 lg:w-2/3">
              <Reveal>
                <img
                  src={membershipPhoto}
                  alt="AAK build tour with members on site"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
                <p className="label mt-3 text-ink/50">Plate 02 / AAK Build Tour</p>
              </Reveal>
              <div className="flex flex-col gap-4">
                <Reveal delay={120}>
                  <img
                    src={advocacyPhoto}
                    alt="AAK advocacy session with built environment professionals"
                    loading="lazy"
                    className="aspect-square w-full object-cover"
                  />
                  <p className="label mt-3 text-ink/50">Plate 03 / Advocacy Session</p>
                </Reveal>
                <blockquote className="flex flex-grow flex-col justify-center bg-aak-red p-8 text-paper">
                  <p className="mb-4 font-serif text-2xl leading-snug italic">
                    &ldquo;Practice in sensitive landscapes demands restraint before it demands
                    invention.&rdquo;
                  </p>
                  <cite className="label not-italic">DMJ Architects, Nairobi</cite>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Initiatives */}
        <section className="grid grid-cols-1 gap-12 border-b border-border py-24 md:grid-cols-2">
          <Reveal>
            <span className="label mb-4 block text-ink/50">2019</span>
            <h2 className="mb-6 border-b border-ink pb-3 font-serif text-2xl">
              Safari Green Building Index
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-ink/70">
              A national sustainability rating system developed for African climatic and economic
              conditions, guiding certification for new and retrofitted buildings.
            </p>
            <a href="https://aak.or.ke/safari-green-building-index/" className="label text-aak-red">
              View Guidelines
            </a>
          </Reveal>
          <Reveal delay={90}>
            <span className="label mb-4 block text-ink/50">2025</span>
            <h2 className="mb-6 border-b border-ink pb-3 font-serif text-2xl">
              Grow A Classroom
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-ink/70">
              A professional corporate responsibility programme improving public school
              infrastructure, delivered by member volunteers across the country.
            </p>
            <a href="https://aak.or.ke/grow-a-classroom/" className="label text-aak-red">
              Explore the Project
            </a>
          </Reveal>
          <Reveal delay={180}>
            <span className="label mb-4 block text-ink/50">2026</span>
            <h2 className="mb-6 border-b border-ink pb-3 font-serif text-2xl">
              Mulika Mjengo
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-ink/70">
              A public safety channel for reporting buildings that pose structural risk, with
              technical assessment coordinated through the Association.
            </p>
            <a href="https://aak.or.ke/mulika-mjengo/" className="label text-aak-red">
              Report a Concern
            </a>
          </Reveal>
          <Reveal delay={270}>
            <span className="label mb-4 block text-ink/50">Guidance</span>
            <h2 className="mb-6 border-b border-ink pb-3 font-serif text-2xl">
              Healthy Homes Guidelines
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-ink/70">
              Residential design standards addressing ventilation, daylight, sanitation and
              material selection for Kenyan housing.
            </p>
            <a href="https://aak.or.ke/healthy-homes-guidelines/" className="label text-aak-red">
              Read the Guidelines
            </a>
          </Reveal>
        </section>

        {/* Reports ledger */}
        <section className="py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <img
                src={reportCover}
                alt="Cover of the Status of the Built Environment Report 2025"
                loading="lazy"
                className="w-full max-w-xs object-contain"
              />
            </div>
            <div className="lg:col-span-8">
              <h2 className="mb-8 font-serif text-4xl">Reports &amp; Publications</h2>
              <div className="divide-y divide-border border-y border-border">
                {[
                  ["Annual Report 2025", "Status of the Built Environment Report", "PDF"],
                  ["Policy Paper", "Memorandum on the Finance Bill 2025", "PDF"],
                  ["Governance", "AAK AGM Report 2025", "PDF"],
                  ["Journal", "Buildpress Magazine 2025", "PDF"],
                ].map(([kicker, title, format]) => (
                  <a
                    key={title}
                    href="https://aak.or.ke/reports"
                    className="group grid grid-cols-12 items-baseline gap-4 py-6"
                  >
                    <span className="label col-span-12 text-ink/50 sm:col-span-3">{kicker}</span>
                    <span className="col-span-12 font-serif text-lg group-hover:text-aak-red sm:col-span-7">
                      {title}
                    </span>
                    <span className="label col-span-12 text-ink/50 sm:col-span-2 sm:text-right">
                      {format}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Member services strip */}
        <section className="-mx-6 bg-aak-red px-6 py-10 text-paper">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="label text-paper/85">Verification and Member Services</h2>
            <div className="flex flex-wrap gap-8">
              <a
                href="https://aak.or.ke/validate-certificate"
                className="label border-b border-paper/50 pb-1 hover:border-paper"
              >
                Validate Certificate
              </a>
              <a
                href="https://aak.or.ke/members-directory"
                className="label border-b border-paper/50 pb-1 hover:border-paper"
              >
                Members Directory
              </a>
              <a
                href="https://aak.or.ke/wp-login.php"
                className="label border-b border-paper/50 pb-1 hover:border-paper"
              >
                Member Portal
              </a>
            </div>
          </div>
        </section>

        {/* Partners marquee */}
        <section className="py-16">
          <h2 className="label mb-8 text-ink/45">Institutional Partners</h2>
          <div className="overflow-hidden border-y border-border py-8">
            <div className="marquee-track flex w-max items-center gap-20">
              {[...partners, ...partners].map((p, i) => (
                <img
                  key={`${p.short}-${i}`}
                  src={p.logo}
                  alt={p.name}
                  loading="lazy"
                  className="h-10 w-auto grayscale opacity-60"
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
