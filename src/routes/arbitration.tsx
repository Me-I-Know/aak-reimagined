import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/aak/SiteHeader";
import { SiteFooter } from "@/components/aak/SiteFooter";
import { Reveal } from "@/components/aak/Reveal";
import { arbitrators, type Arbitrator } from "@/data/arbitrators";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/arbitration")({
  head: () => ({
    meta: [
      { title: "Arbitration and Dispute Resolution | Architectural Association of Kenya" },
      {
        name: "description",
        content:
          "How arbitration works in Kenya's built environment, how to apply for an AAK appointed arbitrator, and the panel of arbitrators affiliated with the Association.",
      },
      {
        property: "og:title",
        content: "Arbitration and Dispute Resolution | Architectural Association of Kenya",
      },
      {
        property: "og:description",
        content:
          "Apply for an AAK appointed arbitrator and read the profiles of the Association's panel.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/arbitration" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Arbitration and Dispute Resolution | Architectural Association of Kenya",
      },
      {
        name: "twitter:description",
        content: "Arbitration guidance, applications and the AAK panel of arbitrators.",
      },
    ],
    links: [{ rel: "canonical", href: "/arbitration" }],
  }),
  component: ArbitrationPage,
});

const steps = [
  {
    title: "An agreement to arbitrate",
    body: "Most construction contracts in Kenya, including the Agreement and Conditions of Contract for Building Works, provide for disputes to be referred to arbitration rather than litigated. That clause is the starting point.",
  },
  {
    title: "A request for appointment",
    body: "Where the parties cannot agree on an arbitrator, either party may apply to the Association. The President appoints from the panel, taking account of the discipline, value and technical character of the dispute.",
  },
  {
    title: "A hearing on the evidence",
    body: "The arbitrator sets directions, receives pleadings and evidence, and hears the parties. Proceedings are private and considerably faster than the courts, and the tribunal already understands the technical subject matter.",
  },
  {
    title: "A binding award",
    body: "The award is final and binding under the Arbitration Act, 1995, and enforceable as a judgment of the High Court. Grounds for setting an award aside are deliberately narrow.",
  },
];

function ApplyDialog() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Dialog onOpenChange={(open) => !open && setSubmitted(false)}>
      <DialogTrigger className="label inline-block bg-ink px-6 py-3 text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aak-red">
        Apply for Arbitration
      </DialogTrigger>
      <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto rounded-none border-border bg-paper text-ink">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl font-normal">
            Application for appointment of an arbitrator
          </DialogTitle>
          <DialogDescription className="text-sm text-ink/70">
            Give the Association enough detail to appoint an arbitrator with the right discipline
            and experience. The secretariat will respond with the appointment fee and next steps.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="border-t border-border pt-6">
            <p className="text-sm leading-relaxed text-ink/75">
              Your details have been prepared for the secretariat. Send them to{" "}
              <a href="mailto:aak@aak.or.ke" className="border-b border-aak-red">
                aak@aak.or.ke
              </a>{" "}
              with a copy of the contract and the arbitration clause, and the appointment will be
              placed before the President.
            </p>
          </div>
        ) : (
          <form
            className="space-y-5 border-t border-border pt-6"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <Field id="applicant" label="Applicant name" />
              <Field id="organisation" label="Organisation" required={false} />
              <Field id="email" label="Email address" type="email" />
              <Field id="phone" label="Telephone" type="tel" required={false} />
            </div>
            <Field id="respondent" label="Other party to the dispute" />
            <Field id="project" label="Project or contract name" />
            <div>
              <label htmlFor="discipline" className="label mb-2 block text-ink/60">
                Discipline required
              </label>
              <select
                id="discipline"
                name="discipline"
                className="w-full border border-input bg-paper px-3 py-2.5 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aak-red"
              >
                <option>Architecture</option>
                <option>Quantity surveying</option>
                <option>Engineering</option>
                <option>Construction project management</option>
                <option>Town planning</option>
                <option>Any suitable discipline</option>
              </select>
            </div>
            <div>
              <label htmlFor="summary" className="label mb-2 block text-ink/60">
                Nature of the dispute
              </label>
              <textarea
                id="summary"
                name="summary"
                required
                rows={5}
                className="w-full border border-input bg-paper px-3 py-2.5 text-sm leading-relaxed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aak-red"
              />
            </div>
            <button
              type="submit"
              className="label bg-ink px-6 py-3 text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aak-red"
            >
              Submit application
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Field({
  id,
  label,
  type = "text",
  required = true,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="label mb-2 block text-ink/60">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="w-full border border-input bg-paper px-3 py-2.5 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aak-red"
      />
    </div>
  );
}

function ArbitratorCard({ person, index }: { person: Arbitrator; index: number }) {
  return (
    <Dialog>
      <DialogTrigger className="group block w-full border border-border bg-paper p-6 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aak-red">
        <p className="label text-ink/35">{String(index + 1).padStart(2, "0")}</p>
        <h3 className="mt-3 font-serif text-xl leading-snug">{person.name}</h3>
        {person.chapter && <p className="label mt-2 text-aak-red">{person.chapter}</p>}
        <p className="mt-4 text-sm leading-relaxed text-ink/65">
          {[person.position, person.organization].filter(Boolean).join(", ")}
        </p>
        <p className="mt-4 text-xs uppercase tracking-[0.14em] text-ink/45">
          {person.expertise.join(" / ")}
        </p>
        <span className="label mt-5 inline-block border-b border-aak-red pb-0.5">
          Read profile
        </span>
      </DialogTrigger>
      <DialogContent className="max-h-[85vh] max-w-3xl overflow-y-auto rounded-none border-border bg-paper text-ink">
        <DialogHeader>
          <DialogTitle className="font-serif text-3xl font-normal leading-tight">
            {person.name}
          </DialogTitle>
          <DialogDescription className="label text-aak-red">
            {[person.chapter, person.years].filter(Boolean).join(" • ")}
          </DialogDescription>
        </DialogHeader>

        <dl className="grid grid-cols-1 gap-x-8 gap-y-4 border-y border-border py-5 text-sm sm:grid-cols-2">
          {person.position && <Meta term="Position" value={person.position} />}
          {person.organization && <Meta term="Organisation" value={person.organization} />}
          {person.aakNumber && <Meta term="AAK number" value={person.aakNumber} />}
          {person.registration && <Meta term="Registration" value={person.registration} />}
          {person.ciarbNumber && <Meta term="CIArb number" value={person.ciarbNumber} />}
          {person.bodies && <Meta term="Bodies" value={person.bodies} />}
        </dl>

        <Block title="Areas of expertise" items={person.expertise} />
        <Block title="Qualifications" items={person.qualifications} />
        <Block title="Professional memberships" items={person.memberships} />
        <Block title="Profile" items={person.profile} prose />
        <Block title="ADR training and experience" items={person.adr} />

        <p className="mt-2 text-xs leading-relaxed text-ink/50">
          Contact details are withheld. Appointments and enquiries are handled by the AAK
          secretariat.
        </p>
      </DialogContent>
    </Dialog>
  );
}

function Meta({ term, value }: { term: string; value: string }) {
  return (
    <div>
      <dt className="label text-ink/40">{term}</dt>
      <dd className="mt-1 text-ink/80">{value}</dd>
    </div>
  );
}

function Block({ title, items, prose }: { title: string; items: string[]; prose?: boolean }) {
  if (!items.length) return null;
  return (
    <section className="mt-6">
      <h4 className="label mb-3 text-ink/40">{title}</h4>
      {prose ? (
        <div className="space-y-3">
          {items.map((p) => (
            <p key={p.slice(0, 40)} className="text-sm leading-relaxed text-ink/75">
              {p}
            </p>
          ))}
        </div>
      ) : (
        <ul className="space-y-2">
          {items.map((item) => (
            <li
              key={item.slice(0, 40)}
              className="border-b border-border pb-2 text-sm leading-relaxed text-ink/75"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

function ArbitrationPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <main>
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <Reveal>
              <p className="label mb-6 text-aak-red">Dispute Resolution</p>
              <h1 className="max-w-4xl font-serif text-4xl leading-[1.08] tracking-tight md:text-6xl">
                Arbitration in the built environment
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink/70">
                Arbitration is a private determination of a dispute by a tribunal the parties
                themselves have agreed to. In construction it is the ordinary route: the issues are
                technical, the record is documentary, and the parties usually need an answer while
                the works are still on site. The Association maintains a panel of arbitrators drawn
                from its chapters and appoints from it on application.
              </p>
              <div className="mt-10">
                <ApplyDialog />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <h2 className="label mb-10 text-ink/50">How it applies</h2>
            <ol className="border-t border-border">
              {steps.map((step, i) => (
                <li key={step.title}>
                  <Reveal className="grid grid-cols-1 gap-6 border-b border-border py-10 md:grid-cols-12">
                    <p className="label text-ink/35 md:col-span-1">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="font-serif text-2xl leading-snug md:col-span-4">{step.title}</h3>
                    <p className="max-w-2xl text-sm leading-relaxed text-ink/70 md:col-span-7">
                      {step.body}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="label mb-3 text-ink/50">Panel of arbitrators</h2>
          <p className="mb-10 max-w-2xl text-sm leading-relaxed text-ink/65">
            {arbitrators.length} members affiliated with the Association. Select a name for the full
            profile, qualifications and dispute resolution training. Contact details are held by the
            secretariat and are not published.
          </p>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {arbitrators.map((person, i) => (
              <li key={person.name}>
                <ArbitratorCard person={person} index={i} />
              </li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
