import { createFileRoute } from "@tanstack/react-router";
import { SolutionDetailPage } from "@/components/SolutionDetailPage";
import { getSolution } from "@/data/solutions";

const solution = getSolution("security")!;

export const Route = createFileRoute("/solutions/security")({
  head: () => ({
    meta: [
      { title: "Security Systems in Dubai — CCTV & Access Control | MarselTech" },
      {
        name: "description",
        content:
          "Security systems in Dubai: CCTV and video surveillance, access control, intrusion alarms, intercom and centralised monitoring — surveyed, installed and supported by MarselTech.",
      },
      { property: "og:title", content: "Security Solutions in Dubai — MarselTech" },
      {
        property: "og:description",
        content:
          "CCTV, access control, intrusion detection, intercom and remote monitoring for premises across Dubai and the UAE.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/solutions/security" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/solutions/security" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: solution.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }),
      },
    ],
  }),
  component: SecurityPage,
});

const outcomes = [
  { value: "24/7", label: "Coverage designed around real site risk, not camera counts" },
  { value: "6", label: "Core capabilities delivered as one security system" },
  { value: "360°", label: "Survey, design, install, train and support" },
];

const scope = [
  "Site risk survey with camera positions and coverage mapping",
  "IP camera, NVR and storage sizing for required retention",
  "Access control doors, readers, credentials and zoning rules",
  "Intrusion detection for perimeter and interior areas",
  "Intercom and video door entry at gates and reception",
  "Network, PoE and containment planning with clean cable finishing",
  "Central monitoring dashboards and operator training",
  "Preventive maintenance, remote health checks and support response",
];

function SecurityPage() {
  return (
    <SolutionDetailPage
      title="Security Solutions"
      heroTitle="Security Systems in Dubai"
      heroDescription="Surveillance, access, alarms and monitoring — engineered around how your site actually works."
      image={solution.image}
      imageAlt={solution.imageAlt}
      intro="We design security systems that match real site risks — from single retail units to multi-zone corporate buildings. Cameras, access, alarms and intercom are planned together so your team monitors one coherent system instead of four disconnected ones."
      outcomes={outcomes}
      capabilitiesTitle="Six security capabilities, delivered as one system"
      capabilitiesDescription="Each capability is surveyed, installed and supported end to end, then integrated into a single monitoring environment."
      subServices={solution.subServices}
      scopeTitle="What a typical security engagement covers"
      scopeDescription="Every project is scoped to your premises, but most deployments include the following."
      scope={scope}
      industries={["Corporate", "Retail", "Hospitality", "Education", "Healthcare", "Logistics"]}
      faqTitle="Security questions we get asked"
      faqs={solution.faqs}
    />
  );
}
