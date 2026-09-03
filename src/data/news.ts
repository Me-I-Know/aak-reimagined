export type NewsItem = {
  slug: string;
  title: string;
  /** ISO date of publication */
  date: string;
  kicker: string;
  /** Short summary used on the index and in social previews */
  summary: string;
  /** Full body, one string per paragraph */
  body: string[];
  /** Where the Association originally published the statement */
  sourceLabel: string;
  sourceUrl: string;
};

/**
 * AAK does not run a newsroom on aak.or.ke. Statements are published through
 * the Association's LinkedIn channel and as PDFs under the resource sections.
 * Each entry below links back to the original AAK posting.
 * Compiled 3 September 2026.
 */
export const news: NewsItem[] = [
  {
    slug: "statement-nairobi-biennale-2026",
    title: "Official statement on the Nairobi Biennale 2026",
    date: "2026-08-06",
    kicker: "Statement",
    summary:
      "The Association issued a clarifying statement on the Nairobi Biennale 2026 addressed to partners, participants and sponsors.",
    body: [
      "The Architectural Association of Kenya issued an official statement on the Nairobi Biennale of Architecture and Art 2026, addressed to partners, participating practices and sponsors.",
      "The statement sets out the Association's position on the organisation of the Biennale and the arrangements under which partners and exhibitors are engaged.",
      "Partners and sponsors with questions on participation should write to the secretariat at aak@aak.or.ke. The full statement is published on the Association's LinkedIn channel.",
    ],
    sourceLabel: "AAK on LinkedIn, 6 August 2026",
    sourceUrl:
      "https://www.linkedin.com/posts/architectural-association-of-kenya_aak-has-issued-an-official-statement-regarding-activity-7491013866089390080-Z48H",
  },
  {
    slug: "statement-odpp-charges-manzi-towers",
    title: "Statement on the ODPP charges in the Manzi Towers collapse case",
    date: "2026-06-06",
    kicker: "Statement",
    summary:
      "AAK responded to charges filed by the Office of the Director of Public Prosecutions over the Manzi Towers building collapse.",
    body: [
      "Following charges filed by the Office of the Director of Public Prosecutions in connection with the Manzi Towers building collapse, the Architectural Association of Kenya issued a statement setting out its position on accountability in the case.",
      "The Association has consistently held that responsibility for building failures must be established on the evidence, and that registered professionals, contractors and approving authorities each carry duties that the law already defines.",
      "The full statement is published on the Association's LinkedIn channel.",
    ],
    sourceLabel: "AAK on LinkedIn, 6 June 2026",
    sourceUrl:
      "https://www.linkedin.com/posts/architectural-association-of-kenya_statement-on-the-odpp-charges-in-the-manziltowers-activity-7469110811022598144-B60E",
  },
  {
    slug: "ppp-bill-2026-stakeholder-forum",
    title: "AAK at the stakeholder forum on the Public-Private Partnerships Bill, 2026",
    date: "2026-07-29",
    kicker: "Advocacy",
    summary:
      "The Association took part in the stakeholder engagement forum at KICC on the Public-Private Partnerships Bill, 2026 and its draft regulations.",
    body: [
      "The Architectural Association of Kenya participated in the stakeholder engagement forum on the Public-Private Partnerships Bill, 2026 and its accompanying regulations, held at the Kenyatta International Convention Centre.",
      "The Association's advocacy work on legislation runs through written memoranda as well as forum participation. Memoranda on pending bills are published under the Association's Bills section.",
    ],
    sourceLabel: "AAK on LinkedIn, 29 July 2026",
    sourceUrl:
      "https://www.linkedin.com/posts/architectural-association-of-kenya_yesterday-the-association-participated-in-activity-7488194185708290050-fken",
  },
  {
    slug: "nairobi-biennale-announcement",
    title: "AAK to host the first Nairobi Biennale of Architecture and Art",
    date: "2026-07-28",
    kicker: "Announcement",
    summary:
      "The Association announced the first Nairobi Biennale of Architecture and Art, held in September 2026 alongside the Annual Convention.",
    body: [
      "The Architectural Association of Kenya announced that it will host the first Nairobi Biennale of Architecture and Art in September 2026, staged alongside the Association's Annual Convention.",
      "The Biennale brings exhibitions, pavilions and public programmes to the convention week, opening the Association's proceedings to a wider audience across the built and natural environment sectors.",
    ],
    sourceLabel: "AAK on LinkedIn, 28 July 2026",
    sourceUrl:
      "https://www.linkedin.com/posts/architectural-association-of-kenya_the-nairobi-biennale-activity-7487814666165932032-MaVy",
  },
  {
    slug: "call-for-abstracts-convention-2026",
    title: "Call for abstracts: AAK Annual Convention 2026",
    date: "2026-05-18",
    kicker: "Call for entries",
    summary:
      "An open call for research and practice abstracts under the convention theme, Shifting the Built Environment from Fragility to Resilience.",
    body: [
      "The Association opened a call for abstracts for the 2026 Annual Convention, inviting professionals and researchers to submit work under the theme Shifting the Built Environment from Fragility to Resilience.",
      "Accepted abstracts are presented across the convention's plenary sessions in Diani in September 2026.",
    ],
    sourceLabel: "AAK on LinkedIn, 18 May 2026",
    sourceUrl:
      "https://www.linkedin.com/posts/architectural-association-of-kenya_call-for-abstracts-share-your-research-and-activity-7462066115158990848-Sb0U",
  },
];

export type PressKitItem = {
  title: string;
  description: string;
  href: string;
};

export const pressKit: PressKitItem[] = [
  {
    title: "BuildPress Magazine",
    description:
      "The Association's flagship publication. Back issues, including the Kisumu convention edition, are published as downloadable PDFs.",
    href: "https://aak.or.ke/buildpress-magazine/",
  },
  {
    title: "Status of the Built Environment",
    description:
      "Annual sector reports from 2019 onwards, the Association's principal reference on the state of the industry.",
    href: "https://aak.or.ke/status-of-the-built-environment/",
  },
  {
    title: "Opinion editorials",
    description:
      "Position pieces from the Association on development control, school dormitory safety and other sector questions.",
    href: "https://aak.or.ke/opinion-editorials/",
  },
  {
    title: "Memoranda on bills",
    description:
      "The Association's written submissions on pending legislation, including the Finance Bills of 2025 and 2026.",
    href: "https://aak.or.ke/bills/",
  },
  {
    title: "General downloads",
    description:
      "Partnership decks, health and safety material and technical papers, including the Convention and Biennale partnership pack.",
    href: "https://aak.or.ke/general-downloads/",
  },
  {
    title: "Media enquiries",
    description:
      "Interview requests, image permissions and comment from the President or Chief Executive are handled by the secretariat.",
    href: "mailto:aak@aak.or.ke",
  },
];
