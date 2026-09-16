import { Video, ShieldCheck, Fingerprint, Network, Monitor } from "lucide-react";
import uccImage from "@/assets/banner-ucc.jpg";
import securityImage from "@/assets/banner-security.jpg";
import idImage from "@/assets/banner-id.jpg";
import itImage from "@/assets/banner-it.jpg";
import avImage from "@/assets/banner-av.jpg";
export const siteContact = {
  email: "sales@marseltech.com",
  phone: "+971 50 692 8507",
  phoneHref: "tel:+971506928507",
  location: "Dubai, United Arab Emirates",
};
export const serviceAreas = [
  {
    slug: "ucc",
    code: "UCC",
    name: "Communication & collaboration",
    short: "Communication",
    headline: "Bring every conversation together.",
    description:
      "Video meetings, business telephony and room booking, connected around the way your team works.",
    image: uccImage,
    alt: "Illustrative workplace with a video meeting in progress",
    icon: Video,
    to: "/solutions/ucc",
  },
  {
    slug: "security",
    code: "SEC",
    name: "Security & surveillance",
    short: "Security",
    headline: "A clearer picture of your premises.",
    description:
      "CCTV, alarms and intercom planned around your entrances, daily activity and areas that need protection.",
    image: securityImage,
    alt: "Illustrative security monitoring room",
    icon: ShieldCheck,
    to: "/solutions/security",
  },
  {
    slug: "id",
    code: "ID",
    name: "Access & identity",
    short: "Access & identity",
    headline: "The right access. In the right hands.",
    description:
      "Access control, credentials and attendance systems that make it easier to manage who goes where.",
    image: idImage,
    alt: "Illustrative biometric entrance reader",
    icon: Fingerprint,
    to: "/solutions/id",
  },
  {
    slug: "it",
    code: "IT",
    name: "IT infrastructure",
    short: "IT infrastructure",
    headline: "The foundation for everything else.",
    description:
      "Networks, cabling, servers and support that keep your workplace technology connected and maintainable.",
    image: itImage,
    alt: "Illustrative network infrastructure and server racks",
    icon: Network,
    to: "/solutions/it",
  },
  {
    slug: "av",
    code: "AV",
    name: "Audio visual experiences",
    short: "Audio visual",
    headline: "Make every space an experience.",
    description:
      "Displays, professional sound and intuitive room controls for meeting spaces, hospitality and public areas.",
    image: avImage,
    alt: "Illustrative hospitality space with an audio visual installation",
    icon: Monitor,
    to: "/solutions/av",
  },
] as const;
// Populate with approved logo files supplied by the business. Empty = hidden.
export const partnerLogos: { name: string; src: string }[] = [];
export const deliverySteps = [
  {
    title: "Understand",
    detail: "We start with your space, your people and what needs to work better.",
    deliverable: "Site survey & requirements",
  },
  {
    title: "Design",
    detail: "We bring the systems together in a plan shaped around your priorities and budget.",
    deliverable: "System design & clear scope",
  },
  {
    title: "Source",
    detail:
      "Equipment is selected to suit the design, with warranty and support considered from the start.",
    deliverable: "Equipment selection & procurement",
  },
  {
    title: "Install",
    detail: "We install, configure and test the system, then show your team how to use it.",
    deliverable: "Commissioning & handover",
  },
  {
    title: "Support",
    detail: "Maintenance and support are planned around your environment as your needs evolve.",
    deliverable: "Ongoing care & future upgrades",
  },
];
