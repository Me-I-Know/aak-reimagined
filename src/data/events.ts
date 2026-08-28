export type AakEvent = {
  /** ISO start date */
  date: string;
  /** ISO end date, when the event runs across several days */
  endDate?: string;
  title: string;
  chapter: string;
  location: string;
  description: string;
};

/**
 * Drawn from the published 2026 AAK Calendar of Events, the AAK Annual
 * Convention programme and the Nairobi Biennale announcement.
 */
export const events: AakEvent[] = [
  {
    date: "2026-09-01",
    title: "College of Fellows Meeting",
    chapter: "College of Fellows",
    location: "AAK Secretariat, Nairobi",
    description:
      "Quarterly sitting of the College of Fellows, reviewing nominations, mentorship placements and counsel to the National Executive Council.",
  },
  {
    date: "2026-09-07",
    endDate: "2026-09-10",
    title: "Commonwealth Association of Architects General Assembly 2026",
    chapter: "Architects Chapter",
    location: "Auckland, New Zealand",
    description:
      "AAK joins the CAA General Assembly, where member institutes set the validation agenda for architectural education across the Commonwealth.",
  },
  {
    date: "2026-09-07",
    endDate: "2026-09-11",
    title: "Nairobi Biennale of Architecture and Art",
    chapter: "Association wide",
    location: "ASK Jamhuri Showgrounds, Nairobi",
    description:
      "Fifty four pavilions under the theme Shifting the Centre: From Fragility to Resilience. Exhibitions, workshops and public programmes convening the built and natural environment sectors.",
  },
  {
    date: "2026-09-11",
    title: "Landscape Architects Student Mentorship II",
    chapter: "Landscape Architects Chapter",
    location: "Nairobi",
    description:
      "Second mentorship sitting pairing landscape architecture students with practising members for portfolio review and site work.",
  },
  {
    date: "2026-09-17",
    endDate: "2026-09-19",
    title: "AAK Annual Convention 2026",
    chapter: "Association wide",
    location: "Diamond Leisure Beach and Golf Resort, Diani",
    description:
      "Three days of papers, panels and site tours drawn from the open call for abstracts, closing with the presidential address.",
  },
  {
    date: "2026-10-01",
    title: "Grow A Classroom Project",
    chapter: "Association wide",
    location: "Host school, to be confirmed",
    description:
      "The Association's building corporate social responsibility programme, delivering a completed classroom designed and supervised by member volunteers.",
  },
  {
    date: "2026-10-10",
    title: "AAK Sports and Wellness Day",
    chapter: "Association wide",
    location: "Nairobi",
    description:
      "Held alongside World Mental Health Day, with fixtures, clinics and a session on practitioner wellbeing in the construction industry.",
  },
  {
    date: "2026-10-16",
    endDate: "2026-10-19",
    title: "Engineers Chapter BRT Study Visit",
    chapter: "Engineers Chapter",
    location: "Dar es Salaam, Tanzania",
    description:
      "Technical visit to the Dar es Salaam bus rapid transit corridor, examining delivery, operations and lessons for Nairobi's mass transit plans.",
  },
  {
    date: "2026-10-23",
    title: "Landscape Build Tour 2",
    chapter: "Landscape Architects Chapter",
    location: "Nairobi",
    description:
      "Guided walk through completed landscape works, with the design teams on site to discuss detailing, planting and maintenance.",
  },
  {
    date: "2026-10-26",
    title: "Urban Thinkers Campus and Student Charrette",
    chapter: "Town Planners Chapter",
    location: "Nairobi",
    description:
      "A UN-Habitat aligned campus combining a planning charrette with student mentorship on urban regeneration proposals.",
  },
  {
    date: "2026-10-27",
    endDate: "2026-10-30",
    title: "IFLA World Council and Congress",
    chapter: "Landscape Architects Chapter",
    location: "Hong Kong",
    description:
      "AAK's landscape architects attend the International Federation of Landscape Architects world council and congress.",
  },
  {
    date: "2026-11-06",
    title: "Landscape Architects Breakfast Baraza",
    chapter: "Landscape Architects Chapter",
    location: "Nairobi",
    description:
      "Early morning discussion on practice standards, fee structures and the chapter's registration agenda.",
  },
  {
    date: "2026-11-07",
    title: "World Town Planners Day Get-Together",
    chapter: "Town Planners Chapter",
    location: "Nairobi",
    description:
      "Marking World Town Planners Day with an address on county spatial planning and a members' social.",
  },
  {
    date: "2026-11-20",
    title: "End of Year Social",
    chapter: "Association wide",
    location: "Nairobi",
    description:
      "The Association's informal end of year gathering for members, associates and student chapters.",
  },
  {
    date: "2026-11-27",
    title: "AAK Sacco Mbuzi Event",
    chapter: "AAK Sacco",
    location: "Nairobi",
    description:
      "Sacco members meet ahead of the financial year close for a briefing on dividends, products and the loan book.",
  },
  {
    date: "2026-12-01",
    endDate: "2026-12-03",
    title: "College of Fellows Meeting",
    chapter: "College of Fellows",
    location: "AAK Secretariat, Nairobi",
    description:
      "Closing sitting of the year, confirming fellowship elevations and the mentorship calendar for the term ahead.",
  },
  {
    date: "2026-12-09",
    title: "Status of the Built Environment Report and President's Dinner",
    chapter: "Association wide",
    location: "Nairobi",
    description:
      "Launch of the annual Status of the Built Environment Report, followed by the President's Dinner and the year's honours.",
  },
];
