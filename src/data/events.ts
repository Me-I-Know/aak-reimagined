export type EventStatus = "confirmed" | "provisional";

export type AakEvent = {
  /** ISO start date */
  date: string;
  /** ISO end date, when the event runs across several days */
  endDate?: string;
  title: string;
  chapter: string;
  location: string;
  description: string;
  /** confirmed = corroborated by a published AAK source; provisional = calendar listing only */
  status: EventStatus;
  /** Where the entry was taken from */
  source: string;
  /** Link to that source, where one is public */
  sourceUrl?: string;
  /** Any conflict or caveat worth showing on the page */
  note?: string;
};

/**
 * Verified 3 September 2026.
 *
 * "confirmed" entries are corroborated by an AAK-published source
 * (convention.aak.or.ke or the Association's own announcements).
 * "provisional" entries appear only in the 2026 AAK Calendar of Events PDF
 * and have not been re-confirmed with a venue or programme, so they are
 * flagged rather than presented as settled dates.
 */
export const events: AakEvent[] = [
  {
    date: "2026-09-16",
    endDate: "2026-09-19",
    title: "AAK Annual Convention 2026 and Nairobi Biennale of Architecture and Art",
    chapter: "Association wide",
    location: "Diamonds Leisure Beach and Golf Resort, Diani, Kwale County",
    description:
      "Theme: Shifting the Built Environment from Fragility to Resilience. Five plenaries across three days, a Built Environment Baraza, and build tours of Ukunda Airport, Mwache Dam and the Kwale coast, alongside the Grow A Classroom mentorship and the student design awards.",
    status: "confirmed",
    source: "convention.aak.or.ke",
    sourceUrl: "https://convention.aak.or.ke",
    note: "The official convention site gives 16 to 19 September. Third party coverage of the call for abstracts gives 17 to 19 September. Confirm the arrival day with the secretariat before booking travel.",
  },
  {
    date: "2026-10-01",
    title: "Grow A Classroom Project",
    chapter: "Association wide",
    location: "Host school, to be confirmed",
    description:
      "The Association's building corporate social responsibility programme, delivering a completed classroom designed and supervised by member volunteers.",
    status: "provisional",
    source: "2026 AAK Calendar of Events",
  },
  {
    date: "2026-10-10",
    title: "AAK Sports and Wellness Day",
    chapter: "Association wide",
    location: "Nairobi",
    description:
      "Held alongside World Mental Health Day, with fixtures, clinics and a session on practitioner wellbeing in the construction industry.",
    status: "provisional",
    source: "2026 AAK Calendar of Events",
  },
  {
    date: "2026-10-16",
    endDate: "2026-10-19",
    title: "Engineers Chapter BRT Study Visit",
    chapter: "Engineers Chapter",
    location: "Dar es Salaam, Tanzania",
    description:
      "Technical visit to the Dar es Salaam bus rapid transit corridor, examining delivery, operations and lessons for Nairobi's mass transit plans.",
    status: "provisional",
    source: "2026 AAK Calendar of Events",
  },
  {
    date: "2026-10-23",
    title: "Landscape Build Tour 2",
    chapter: "Landscape Architects Chapter",
    location: "Nairobi",
    description:
      "Guided walk through completed landscape works, with the design teams on site to discuss detailing, planting and maintenance.",
    status: "provisional",
    source: "2026 AAK Calendar of Events",
  },
  {
    date: "2026-10-26",
    title: "Urban Thinkers Campus and Student Charrette",
    chapter: "Town Planners Chapter",
    location: "Nairobi",
    description:
      "A UN-Habitat aligned campus combining a planning charrette with student mentorship on urban regeneration proposals.",
    status: "provisional",
    source: "2026 AAK Calendar of Events",
  },
  {
    date: "2026-10-27",
    endDate: "2026-10-30",
    title: "IFLA World Council and Congress",
    chapter: "Landscape Architects Chapter",
    location: "Hong Kong",
    description:
      "AAK's landscape architects attend the International Federation of Landscape Architects world council and congress.",
    status: "provisional",
    source: "2026 AAK Calendar of Events",
  },
  {
    date: "2026-11-06",
    title: "Landscape Architects Breakfast Baraza",
    chapter: "Landscape Architects Chapter",
    location: "Nairobi",
    description:
      "Early morning discussion on practice standards, fee structures and the chapter's registration agenda.",
    status: "provisional",
    source: "2026 AAK Calendar of Events",
  },
  {
    date: "2026-11-07",
    title: "World Town Planners Day Get-Together",
    chapter: "Town Planners Chapter",
    location: "Nairobi",
    description:
      "Marking World Town Planners Day with an address on county spatial planning and a members' social.",
    status: "provisional",
    source: "2026 AAK Calendar of Events",
  },
  {
    date: "2026-11-20",
    title: "End of Year Social",
    chapter: "Association wide",
    location: "Nairobi",
    description:
      "The Association's informal end of year gathering for members, associates and student chapters.",
    status: "provisional",
    source: "2026 AAK Calendar of Events",
  },
  {
    date: "2026-12-01",
    endDate: "2026-12-03",
    title: "College of Fellows Meeting",
    chapter: "College of Fellows",
    location: "AAK Secretariat, Nairobi",
    description:
      "Closing sitting of the year, confirming fellowship elevations and the mentorship calendar for the term ahead.",
    status: "provisional",
    source: "2026 AAK Calendar of Events",
  },
  {
    date: "2026-12-09",
    title: "Status of the Built Environment Report and President's Dinner",
    chapter: "Association wide",
    location: "Nairobi",
    description:
      "Launch of the annual Status of the Built Environment Report, followed by the President's Dinner and the year's honours.",
    status: "provisional",
    source: "2026 AAK Calendar of Events",
  },
];

/** No 2027 dates have been published by the Association at the time of writing. */
export const calendarVerifiedOn = "3 September 2026";
