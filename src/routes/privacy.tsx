import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/aak/SiteHeader";
import { SiteFooter } from "@/components/aak/SiteFooter";
import { LegalPage, type LegalSection } from "@/components/aak/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Architectural Association of Kenya" },
      {
        name: "description",
        content:
          "How the Architectural Association of Kenya collects, uses and safeguards personal data of members, event attendees and website visitors.",
      },
      { property: "og:title", content: "Privacy Policy | Architectural Association of Kenya" },
      {
        property: "og:description",
        content:
          "Data collection, lawful basis, retention and member rights under the Kenya Data Protection Act, 2019.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/privacy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

const sections: LegalSection[] = [
  {
    heading: "Data we collect",
    body: [
      "Membership records: name, registration number, chapter affiliation, postal and email address, telephone number, professional qualifications and subscription history.",
      "Event and training records: registration details, attendance, CPD points accrued and payment references.",
      "Website data: pages requested, browser type, approximate location derived from IP address, and information you submit through enquiry or subscription forms.",
    ],
  },
  {
    heading: "Why we process it",
    body: [
      "To administer membership, verify professional standing and issue certificates that third parties may validate.",
      "To run the Awards of Excellence, chapter activities, continuing professional development and the annual general meeting.",
      "To publish the members directory, distribute Buildpress and circulate policy briefings to those who have subscribed.",
      "To meet statutory reporting obligations and to respond to lawful requests from regulators.",
    ],
  },
  {
    heading: "Lawful basis",
    body: [
      "We rely on the performance of the membership contract, our legitimate interest in representing the built environment professions, compliance with legal obligations, and your consent where it has been specifically requested for marketing communication.",
    ],
  },
  {
    heading: "Sharing",
    body: [
      "We share limited data with the Board of Registration of Architects and Quantity Surveyors and other statutory registration bodies where verification is required, with payment processors and with service providers who host our systems under written instruction.",
      "We do not sell personal data. We do not disclose member contact details to commercial third parties.",
    ],
  },
  {
    heading: "Retention",
    body: [
      "Membership records are retained for the duration of membership and for seven years thereafter to satisfy audit and statutory requirements. Website analytics data is retained for twenty six months. Subscription lists are retained until you unsubscribe.",
    ],
  },
  {
    heading: "Your rights",
    body: [
      "Under the Data Protection Act, 2019 you may request access to your data, ask for correction of inaccurate records, request deletion where retention is no longer required, object to processing based on legitimate interest, and withdraw consent to marketing at any time.",
      "Requests are answered within thirty days. Write to aak@aak.or.ke or to the secretariat at Blue Violets Plaza, 6th Floor, Room 605, Kindaruma Road off Ngong Road, Nairobi.",
    ],
  },
  {
    heading: "Security",
    body: [
      "Access to membership systems is restricted to authorised secretariat staff. Data is transmitted over encrypted connections and backed up on a scheduled basis. Where a breach is likely to affect your rights we will notify you and the Office of the Data Protection Commissioner.",
    ],
  },
  {
    heading: "Cookies",
    body: [
      "The site uses functional cookies required for navigation and session handling, and aggregate measurement cookies that tell us which pages are read. You may block cookies in your browser; core pages will continue to work.",
    ],
  },
  {
    heading: "Changes",
    body: [
      "Amendments to this policy are published on this page with a revised effective date. Material changes affecting members are also circulated by email.",
    ],
  },
];

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <LegalPage
        kicker="Legal"
        title="Privacy Policy"
        standfirst="This policy explains how the Architectural Association of Kenya handles personal data belonging to members, event participants and visitors to this website."
        effective="Effective 1 January 2026"
        sections={sections}
      />
      <SiteFooter />
    </div>
  );
}
