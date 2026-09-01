import { createFileRoute } from "@tanstack/react-router";
import { SolutionPageTemplate } from "@/components/SolutionPageTemplate";
import heroImage from "@/assets/hero-security.jpg";

export const Route = createFileRoute("/solutions/security")({
  head: () => ({
    meta: [
      { title: "Security Solutions — MarselTech" },
      { name: "description", content: "CCTV, surveillance and intrusion systems built on Axis, CP Plus and Honeywell for Dubai businesses." },
      { property: "og:title", content: "Security Solutions — MarselTech" },
      { property: "og:description", content: "CCTV, surveillance and intrusion systems built on Axis, CP Plus and Honeywell for Dubai businesses." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SecurityPage,
});

const subServices = [
  { title: "CCTV & Video Surveillance", description: "IP cameras, NVRs and video analytics configured for coverage, retention and remote access.", brands: "Axis, CP Plus" },
  { title: "Access Control", description: "Card, biometric and mobile credential systems to control who enters your premises.", brands: "HID" },
  { title: "Intrusion Detection & Alarms", description: "Perimeter and interior alarm systems with monitoring integration.", brands: "Honeywell" },
  { title: "Intercom & Video Door Entry", description: "Audio and video intercom systems for entry points and reception areas.", brands: "Aiphone" },
  { title: "Integrated Command & Control", description: "Unified security dashboards for larger sites that need centralized monitoring.", brands: "Multiple" },
  { title: "Remote Monitoring & Maintenance", description: "Off-site health checks and troubleshooting to keep systems online.", brands: "Multiple" },
];

const partners = [
  { name: "Axis", description: "IP video surveillance and network cameras." },
  { name: "CP Plus", description: "CCTV and surveillance product range." },
  { name: "HID", description: "Access control and identity solutions." },
  { name: "Aiphone", description: "Intercom and video door entry systems." },
  { name: "Honeywell", description: "Intrusion detection and alarm systems." },
];

const industries = ["Corporate", "Retail", "Hospitality", "Education", "Healthcare"];

function SecurityPage() {
  return (
    <SolutionPageTemplate
      title="Security Solutions"
      tagline="Visible protection, reliable coverage"
      overview="We design security systems that match real site risks — from single retail stores to multi-zone corporate buildings. Our focus is on clear coverage, genuine warranties and systems you can actually operate."
      image={heroImage}
      imageAlt="Security control room with CCTV video wall"
      subServices={subServices}
      partners={partners}
      industries={industries}
    />
  );
}
