import { createFileRoute } from "@tanstack/react-router";
import { SolutionPageTemplate } from "@/components/SolutionPageTemplate";
import heroImage from "@/assets/hero-av.jpg";

export const Route = createFileRoute("/solutions/av")({
  head: () => ({
    meta: [
      { title: "AV Solutions — MarselTech" },
      { name: "description", content: "Meeting rooms, digital signage and audio systems for corporate and hospitality spaces in Dubai." },
      { property: "og:title", content: "AV Solutions — MarselTech" },
      { property: "og:description", content: "Meeting rooms, digital signage and audio systems for corporate and hospitality spaces in Dubai." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AVPage,
});

const subServices = [
  { title: "Meeting Room & Boardroom AV", description: "Displays, microphones, speakers and control systems for productive meetings.", brands: "Multiple" },
  { title: "Digital Signage", description: "Screens, media players and content management for lobbies, retail and public areas.", brands: "Multiple" },
  { title: "Public Address & Paging Systems", description: "Zoned paging, announcements and emergency broadcast systems.", brands: "Multiple" },
  { title: "Audio Systems", description: "Background music, foreground audio and acoustic treatment for commercial spaces.", brands: "Multiple" },
  { title: "Hospitality AV", description: "Guest room entertainment, IPTV and common-area AV for hotels and residences.", brands: "Multiple" },
];

const partners = [
  { name: "LG", description: "Displays and digital signage." },
  { name: "Samsung", description: "Commercial displays and signage solutions." },
  { name: "Crestron", description: "AV control and automation." },
];

const industries = ["Corporate", "Hospitality", "Retail", "Education"];

function AVPage() {
  return (
    <SolutionPageTemplate
      title="AV Solutions"
      tagline="Clear sound and image where it matters"
      overview="Audio-visual systems shape how spaces feel and how meetings run. We design meeting room AV, digital signage and sound systems for corporate, hospitality and retail environments in Dubai."
      image={heroImage}
      imageAlt="Large LED video wall and professional audio system in an auditorium"
      subServices={subServices}
      partners={partners}
      industries={industries}
    />
  );
}
