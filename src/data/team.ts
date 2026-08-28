export type Person = {
  name: string;
  role: string;
  detail?: string;
};

/** National Executive Council, 2025 to 2027 term. */
export const council: Person[] = [
  {
    name: "Arch. George Arabbu Ndege",
    role: "President",
    detail:
      "Took office at the 58th Annual General Meeting in March 2025. Holds a master's degree in architecture, has practised at leading Kenyan firms, lectured at the University of Nairobi and directs Sitescape Studio Limited.",
  },
  {
    name: "Arch. Brenda Nyawara",
    role: "Vice President",
    detail:
      "Architect and curator, previously Vice Chairperson of the Architects Chapter, with a record in public exhibition and design advocacy work.",
  },
  {
    name: "L. Arch. Ruth Wanjiku",
    role: "Honorary Secretary",
    detail:
      "Landscape architect with more than fifteen years in practice and President of the International Federation of Landscape Architects, Africa Region.",
  },
  {
    name: "Arch. Bernard Segecha",
    role: "Assistant Honorary Secretary",
    detail: "Architect serving the council in the 2025 to 2027 term.",
  },
  {
    name: "QS. Diana Musyoka",
    role: "Honorary Treasurer",
    detail:
      "Quantity surveyor with about twenty years in practice and Managing Director of Epic Value Consultants. Previously Treasurer of the Quantity Surveyors Chapter.",
  },
  {
    name: "Eng. Nashon Tambo",
    role: "Honorary Registrar",
    detail: "Engineer serving the council in the 2025 to 2027 term.",
  },
];

/** Chapter chairs, 2025 to 2027 term. */
export const chapterChairs: Person[] = [
  { name: "Arch. Jacqueline Kairu", role: "Chair, Architects Chapter" },
  { name: "QS. Moses Karani", role: "Chairperson, Quantity Surveyors Chapter" },
  { name: "Eng. Muguru Wairimu", role: "Chairperson, Engineers Chapter" },
  { name: "Ndindiri Waweru", role: "Chairperson, Construction Project Managers Chapter" },
  { name: "Christine Muchiri", role: "Chairperson, Town Planners Chapter" },
  { name: "Gladys Njoroge", role: "Chairperson, Environmental Design Consultants Chapter" },
  { name: "Anthony Kimondo", role: "Chairperson, Landscape Architects Chapter" },
  { name: "Daisy Nyeresa", role: "Chairperson, Interior Designers Chapter" },
];

/** Secretariat, the Association's paid staff. */
export const secretariat: Person[] = [
  {
    name: "Jacob Wanyoike Mwangi",
    role: "Chief Executive Officer",
    detail:
      "Leads the secretariat and represents the Association in industry and private sector forums, including work with the Kenya Private Sector Alliance.",
  },
  { name: "Judy Jerotich", role: "Finance and Administration Manager" },
  { name: "Lina Jamwa", role: "Membership and Communication Manager" },
  { name: "James Odongo", role: "Research and Advocacy Manager" },
  { name: "Christine Mwaura", role: "Communication Officer" },
  { name: "Lenah Waweru", role: "Administrative Secretary" },
];

export const pastPresident: Person = {
  name: "Arch. Florence Nyole",
  role: "Immediate Past President, 2023 to 2025",
  detail:
    "The Association's third female President. Handed over at the 58th Annual General Meeting and now serves as an AIA International country representative.",
};
