import { Reveal } from "@/components/aak/Reveal";

export type LegalSection = {
  heading: string;
  body: string[];
};

type LegalPageProps = {
  kicker: string;
  title: string;
  standfirst: string;
  effective: string;
  sections: LegalSection[];
};

export function LegalPage({ kicker, title, standfirst, effective, sections }: LegalPageProps) {
  return (
    <main id="main" className="mx-auto max-w-7xl px-6 pt-16 pb-28">
      <header className="grid grid-cols-1 gap-10 border-b border-ink/15 pb-14 md:grid-cols-12">
        <div className="md:col-span-8">
          <Reveal>
            <p className="label mb-6 text-aak-red">{kicker}</p>
            <h1 className="font-serif text-5xl leading-[1.05] md:text-7xl">{title}</h1>
          </Reveal>
        </div>
        <div className="md:col-span-4 md:pt-4">
          <Reveal delay={120}>
            <p className="text-base leading-relaxed text-ink/70">{standfirst}</p>
            <p className="label mt-6 text-ink/40">{effective}</p>
          </Reveal>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-x-12 md:grid-cols-12">
        <nav aria-label="Sections" className="md:col-span-3 md:sticky md:top-28 md:self-start">
          <ol className="mt-12 space-y-3 border-l border-ink/15 pl-5 text-xs leading-relaxed text-ink/50">
            {sections.map((section, index) => (
              <li key={section.heading}>
                <a href={`#s-${index + 1}`} className="hover:text-aak-red">
                  <span className="mr-3 tabular-nums text-ink/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {section.heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="md:col-span-9">
          {sections.map((section, index) => (
            <section
              key={section.heading}
              id={`s-${index + 1}`}
              className="grid scroll-mt-28 grid-cols-1 gap-4 border-b border-ink/10 py-12 md:grid-cols-12 md:gap-8"
            >
              <div className="md:col-span-4">
                <Reveal>
                  <p className="label mb-2 text-ink/30">{String(index + 1).padStart(2, "0")}</p>
                  <h2 className="font-serif text-2xl leading-tight">{section.heading}</h2>
                </Reveal>
              </div>
              <div className="space-y-5 md:col-span-8">
                {section.body.map((paragraph) => (
                  <Reveal key={paragraph.slice(0, 24)}>
                    <p className="max-w-prose text-[15px] leading-[1.75] text-ink/75">
                      {paragraph}
                    </p>
                  </Reveal>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
