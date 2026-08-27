import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/aak/SiteHeader";
import { SiteFooter } from "@/components/aak/SiteFooter";
import { LegalPage, type LegalSection } from "@/components/aak/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use | Architectural Association of Kenya" },
      {
        name: "description",
        content:
          "Conditions governing use of the AAK website, member services, certificate validation, the members directory and published materials.",
      },
      { property: "og:title", content: "Terms of Use | Architectural Association of Kenya" },
      {
        property: "og:description",
        content:
          "Conditions of use for AAK online services, publications, directory data and awards submissions.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/terms" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

const sections: LegalSection[] = [
  {
    heading: "Acceptance",
    body: [
      "By using this website or any service reached through it you accept these terms. If you are using member services on behalf of a firm, you confirm you are authorised to bind that firm.",
    ],
  },
  {
    heading: "The Association",
    body: [
      "The Architectural Association of Kenya is a professional body established in 1967 bringing together eight chapters of the built environment. Nothing on this site constitutes registration with a statutory board, and membership of the Association is distinct from statutory registration.",
    ],
  },
  {
    heading: "Member accounts",
    body: [
      "You are responsible for the accuracy of the information in your membership record and for keeping your portal credentials confidential. Notify the secretariat immediately if you believe your account has been used without your authority.",
      "Membership benefits, including directory listing and certificate validation, are available only while subscriptions are current.",
    ],
  },
  {
    heading: "Certificate validation and directory",
    body: [
      "Validation results reflect the state of our records at the time of the query and are provided for verification purposes only. The directory may not be copied, scraped or used to compile mailing lists or any commercial database.",
    ],
  },
  {
    heading: "Publications and intellectual property",
    body: [
      "Buildpress, awards material, technical guidance, reports and the contents of this site are the property of the Association or its contributors. You may read, print and quote short extracts with attribution. Republication, resale or systematic reproduction requires written permission.",
      "Photographs of projects remain the property of their authors and are reproduced here with permission for the purposes stated.",
    ],
  },
  {
    heading: "Awards submissions",
    body: [
      "Entries to the Awards of Excellence are governed by the published call for entries. Entrants warrant that they hold the rights to submitted material and grant the Association a licence to reproduce it in awards publications, exhibitions and press coverage.",
    ],
  },
  {
    heading: "Payments",
    body: [
      "Subscriptions, event fees and award entry fees are payable in advance and are not refundable once a service has been delivered or a place confirmed, except where the Association cancels the activity.",
    ],
  },
  {
    heading: "Acceptable use",
    body: [
      "Do not interfere with the operation of the site, attempt unauthorised access, upload malicious code, or submit content that is unlawful, defamatory or infringes the rights of others.",
    ],
  },
  {
    heading: "Third party links",
    body: [
      "This site links to the AAK Sacco, BuildHub and partner organisations. Those services are operated independently and are governed by their own terms.",
    ],
  },
  {
    heading: "Liability",
    body: [
      "Content is provided for general information. Technical guidance does not replace project specific professional advice. To the extent permitted by law the Association is not liable for loss arising from reliance on the site or from interruption to online services.",
    ],
  },
  {
    heading: "Governing law",
    body: [
      "These terms are governed by the laws of Kenya and disputes fall under the jurisdiction of the Kenyan courts. Queries may be addressed to aak@aak.or.ke.",
    ],
  },
];

function TermsPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <LegalPage
        kicker="Legal"
        title="Terms of Use"
        standfirst="These conditions govern access to this website, to AAK member services and to material published by the Association."
        effective="Effective 1 January 2026"
        sections={sections}
      />
      <SiteFooter />
    </div>
  );
}
