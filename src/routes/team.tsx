import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/aak/SiteHeader";
import { SiteFooter } from "@/components/aak/SiteFooter";
import { Reveal } from "@/components/aak/Reveal";
import { council, chapterChairs, secretariat, pastPresident, type Person } from "@/data/team";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Council and Secretariat | Architectural Association of Kenya" },
      {
        name: "description",
        content:
          "The AAK National Executive Council for the 2025 to 2027 term, the eight chapter chairs and the secretariat staff who run the Association day to day.",
      },
      {
        property: "og:title",
        content: "Council and Secretariat | Architectural Association of Kenya",
      },
      {
        property: "og:description",
        content:
          "Officers of the National Executive Council, chapter chairs and the AAK secretariat.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/team" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Council and Secretariat | Architectural Association of Kenya",
      },
      {
        name: "twitter:description",
        content: "Officers, chapter chairs and staff of the Architectural Association of Kenya.",
      },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: TeamPage,
});

function PersonRow({ person, index }: { person: Person; index: number }) {
  return (
    <Reveal className="grid grid-cols-1 gap-4 border-b border-border py-8 md:grid-cols-12">
      <p className="label pt-1 text-ink/35 md:col-span-1">
        {String(index + 1).padStart(2, "0")}
      </p>
      <div className="md:col-span-4">
        <h3 className="font-serif text-xl leading-snug md:text-2xl">{person.name}</h3>
        <p className="label mt-2 text-aak-red">{person.role}</p>
      </div>
      <div className="md:col-span-7">
        {person.detail ? (
          <p className="max-w-2xl text-sm leading-relaxed text-ink/70">{person.detail}</p>
        ) : (
          <p className="text-sm leading-relaxed text-ink/45">
            Serving the 2025 to 2027 term. Full profile available from the secretariat.
          </p>
        )}
      </div>
    </Reveal>
  );
}

function TeamPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <main>
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <Reveal>
              <p className="label mb-6 text-aak-red">Governance</p>
              <h1 className="max-w-4xl font-serif text-4xl leading-[1.08] tracking-tight md:text-6xl">
                Council and secretariat
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink/70">
                The Association is directed by an elected National Executive Council, supported by
                the chairs of its eight professional chapters and run day to day by a paid
                secretariat at Blue Violets Plaza in Nairobi.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="label mb-10 text-ink/50">National Executive Council, 2025 to 2027</h2>
          <div className="border-t border-border">
            {council.map((p, i) => (
              <PersonRow key={p.name} person={p} index={i} />
            ))}
          </div>
        </section>

        <section className="bg-paper-dim">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <h2 className="label mb-10 text-ink/50">Chapter chairs</h2>
            <div className="border-t border-border">
              {chapterChairs.map((p, i) => (
                <PersonRow key={p.name} person={p} index={i} />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="label mb-10 text-ink/50">Secretariat</h2>
          <div className="border-t border-border">
            {secretariat.map((p, i) => (
              <PersonRow key={p.name} person={p} index={i} />
            ))}
          </div>
        </section>

        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <h2 className="label mb-8 text-ink/50">Immediate past president</h2>
            <Reveal className="max-w-3xl">
              <h3 className="font-serif text-2xl md:text-3xl">{pastPresident.name}</h3>
              <p className="label mt-3 text-aak-red">{pastPresident.role}</p>
              <p className="mt-5 text-sm leading-relaxed text-ink/70">{pastPresident.detail}</p>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
