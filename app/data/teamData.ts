// Import flags as React components
import { 
  BD, IN, MW, SL, NP, CM, NG, GH, TH, CN, LK 
} from 'country-flag-icons/react/3x2'; // 3x2 aspect ratio

// OR for square flags (1x1):
// import { BD, IN, MW, SL, NP, CM, NG, GH, TH, CN, LK } from 'country-flag-icons/react/1x1';

// Team member type
interface TeamMember {
  name: string;
  role: string;
  country: string;
  color: string;
  bg: string;
  desc?: string;
}

export const leaders = [
  {
    name: "Richard Tripura",
    role: "Founder & CEO",
    country: "Bangladesh",
    flag: BD, // Direct component reference
    color: "text-(--primary)",
    bg: "bg-(--primary)/10",
    desc: "Leads company vision, client relationships, and business strategy with 6+ years in tech.",
  },
  {
    name: "Ritesh Gharti",
    role: "CTO",
    country: "India",
    flag: IN,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    desc: "Oversees all technical architecture, AI research, and engineering best practices.",
  },
  {
    name: "Clinton Tripura",
    role: "Head of Design",
    country: "Bangladesh",
    flag: BD,
    color: "text-green-400",
    bg: "bg-green-500/10",
    desc: "Creates beautiful, intuitive user experiences for web and mobile products.",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Priya Sharma",
    role: "Academic Lead",
    country: "India",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    name: "Kitress Monyozo",
    role: "Marketing",
    country: "Malawi",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    name: "Arnold Chisisito",
    role: "R&D",
    country: "Malawi",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
  },
  {
    name: "Steven Ansumana",
    role: "Country Head",
    country: "Sierra Leone",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    name: "Abhishek",
    role: "Developer",
    country: "Nepal",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  {
    name: "Stiphan",
    role: "Engineer",
    country: "Cameroon",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
  {
    name: "Dimaji",
    role: "Developer",
    country: "Nigeria",
    color: "text-rose-400",
    bg: "bg-rose-500/10",
  },
  {
    name: "Sinepolo",
    role: "Designer",
    country: "Ghana",
    color: "text-teal-400",
    bg: "bg-teal-500/10",
  },
  {
    name: "Malvi",
    role: "Developer",
    country: "Thailand",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    name: "Priyanka",
    role: "Researcher",
    country: "Tibet",
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
  {
    name: "Zairam",
    role: "Engineer",
    country: "Sri Lanka",
    color: "text-lime-400",
    bg: "bg-lime-500/10",
  },
];

// Country code to flag component mapping
const flagMap: Record<string, React.ComponentType<{ className?: string }>> = {
  bangladesh: BD,
  india: IN,
  malawi: MW,
  "sierra leone": SL,
  nepal: NP,
  cameroon: CM,
  nigeria: NG,
  ghana: GH,
  thailand: TH,
  tibet: CN, // Tibet uses China flag
  "sri lanka": LK,
};