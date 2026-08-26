import { createFileRoute } from "@tanstack/react-router";
import { Building2, Hotel } from "lucide-react";
import { SolutionPageTemplate } from "@/components/SolutionPageTemplate";
import heroImage from "@/assets/hero-ucc.jpg";

export const Route = createFileRoute("/solutions/ucc")({
  head: () => ({
    meta: [
      { title: "UCC Solutions — MarselTech" },
      { name: "description", content: "Video conferencing, VoIP and unified collaboration systems for modern offices in Dubai." },
      { property: "og:title", content: "UCC Solutions — MarselTech" },
      { property: "og:description", content: "Video conferencing, VoIP and unified collaboration systems for modern offices in Dubai." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: UCCPage,
});

const subServices = [
  { title: "Video Conferencing Systems", description: "Room-based and personal video conferencing endpoints designed for clear, reliable meetings.", brands: "Cisco" },
  { title: "VoIP & IP Telephony", description: "Cloud and on-premise phone systems with call routing, voicemail and integration to collaboration platforms.", brands: "Cisco" },
  { title: "Unified Messaging & Collaboration", description: "Integrated chat, email, voice and video workflows that reduce context switching.", brands: "Cisco" },
  { title: "Meeting Room Booking Systems", description: "Room scheduling panels and software to reduce double-bookings and improve space use.", brands: "Multiple" },
  { title: "Wireless Presentation Systems", description: "Cable-free screen sharing for meeting rooms and huddle spaces.", brands: "Multiple" },
];

const partners = [
  { name: "Cisco", description: "Unified communications and collaboration infrastructure." },
];

const industries = ["Corporate", "Hospitality", "Education", "Healthcare"];

const projects = [
  {
    title: "Corporate Office — UCC Rollout",
    sector: "Corporate",
    scope: "Deployed video conferencing and VoIP across a multi-floor Dubai office.",
    icon: Building2,
  },
  {
    title: "Hotel Meeting Room Upgrade",
    sector: "Hospitality",
    scope: "Installed wireless presentation and video conferencing in flexible meeting spaces.",
    icon: Hotel,
  },
];

function UCCPage() {
  return (
    <SolutionPageTemplate
      title="UCC Solutions"
      tagline="Reliable collaboration for modern workplaces"
      overview="Unified Communications and Collaboration (UCC) brings together voice, video, messaging and meeting-room technology into one coherent experience. We design, install and support these systems for offices and commercial spaces across Dubai."
      image={heroImage}
      imageAlt="Corporate meeting room with video conferencing and unified communications equipment"
      subServices={subServices}
      partners={partners}
      industries={industries}
      projects={projects}
    />
  );
}
