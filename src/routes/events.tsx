import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/aak/SiteHeader";
import { SiteFooter } from "@/components/aak/SiteFooter";
import { Reveal } from "@/components/aak/Reveal";
import { events } from "@/data/events";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events Calendar | Architectural Association of Kenya" },
      {
        name: "description",
        content:
          "Upcoming AAK events, chapter CPDs, build tours, conventions and the annual awards calendar, listed from the nearest date onwards.",
      },
      { property: "og:title", content: "Events Calendar | Architectural Association of Kenya" },
      {
        property: "og:description",
        content:
          "Conventions, chapter CPDs, build tours and awards across the AAK calendar, listed from the nearest date onwards.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/events" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Events Calendar | Architectural Association of Kenya" },
      {
        name: "twitter:description",
        content: "Upcoming AAK conventions, chapter CPDs, build tours and awards.",
      },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: EventsPage,
});

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function parts(iso: string) {
  const segments = iso.split("-");
  return {
    y: Number(segments[0] ?? 0),
    m: Number(segments[1] ?? 1) - 1,
    d: Number(segments[2] ?? 1),
  };
}

function monthName(index: number) {
  return MONTHS[index] ?? "";
}

function formatRange(date: string, endDate?: string) {
  const a = parts(date);
  if (!endDate) return `${a.d} ${monthName(a.m)} ${a.y}`;
  const b = parts(endDate);
  if (a.m === b.m && a.y === b.y) return `${a.d} to ${b.d} ${monthName(a.m)} ${a.y}`;
  return `${a.d} ${monthName(a.m)} to ${b.d} ${monthName(b.m)} ${b.y}`;
}

function EventsPage() {
  const today = new Date().toISOString().slice(0, 10);
  const upcoming = events
    .filter((e) => (e.endDate ?? e.date) >= today)
    .sort((a, b) => a.date.localeCompare(b.date));
  const list = upcoming.length ? upcoming : [...events].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <main>
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <Reveal>
              <p className="label mb-6 text-aak-red">Calendar</p>
              <h1 className="max-w-4xl font-serif text-4xl leading-[1.08] tracking-tight md:text-6xl">
                Upcoming events
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink/70">
                Chapter continuing professional development, build tours, conventions and awards,
                listed from the nearest date onwards. Dates follow the published Association
                calendar and may be revised by the secretariat.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="label mb-10 text-ink/50">
            {upcoming.length ? `${list.length} events scheduled` : "Recent events"}
          </h2>
          <ol className="border-t border-border">
            {list.map((event) => (
              <li key={`${event.date}-${event.title}`}>
                <Reveal className="grid grid-cols-1 gap-6 border-b border-border py-10 md:grid-cols-12">
                  <div className="md:col-span-3">
                    <p className="font-serif text-2xl leading-tight">
                      {formatRange(event.date, event.endDate)}
                    </p>
                    <p className="label mt-3 text-aak-red">{event.chapter}</p>
                  </div>
                  <div className="md:col-span-6">
                    <h3 className="font-serif text-2xl leading-snug md:text-3xl">{event.title}</h3>
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink/70">
                      {event.description}
                    </p>
                  </div>
                  <div className="md:col-span-3">
                    <p className="label mb-2 text-ink/40">Location</p>
                    <p className="text-sm leading-relaxed text-ink/70">{event.location}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>

          <p className="mt-12 max-w-2xl text-sm leading-relaxed text-ink/60">
            To confirm attendance, register interest or propose a chapter event, write to{" "}
            <a href="mailto:aak@aak.or.ke" className="border-b border-aak-red text-ink">
              aak@aak.or.ke
            </a>
            .
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
