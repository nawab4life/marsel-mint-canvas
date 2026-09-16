import { createFileRoute } from "@tanstack/react-router";
import { SolutionDetailPage } from "@/components/SolutionDetailPage";
import { getSolution } from "@/data/solutions";

const solution = getSolution("it")!;

export const Route = createFileRoute("/solutions/it")({
  head: () => ({
    meta: [
      { title: "IT Infrastructure & Managed IT Support in Dubai | MarselTech" },
      {
        name: "description",
        content:
          "IT solutions in Dubai: structured network cabling, servers and storage, managed IT support, cloud backup and IT security — designed, installed and maintained by MarselTech.",
      },
      { property: "og:title", content: "IT Solutions in Dubai — MarselTech" },
      {
        property: "og:description",
        content:
          "Network cabling, servers and storage, managed support, cloud backup and IT security for businesses across Dubai and the UAE.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/solutions/it" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/solutions/it" }],
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
  component: ITPage,
});

const scope = [
  "Infrastructure audit and as-built documentation review",
  "Structured cabling with certified and tested links",
  "Switching, wireless coverage and network segmentation",
  "Server, virtualisation and storage sizing",
  "Cloud and on-premise backup with tested restores",
  "Endpoint protection, patching and email security",
  "Migration planning with minimal downtime windows",
  "Managed support, monitoring and help desk under SLA",
];

function ITPage() {
  return (
    <SolutionDetailPage
      title="IT Solutions"
      heroTitle="A stronger foundation. Every day."
      heroDescription="Cabling, servers, backup and day-to-day support — one dependable foundation for everything else."
      image={solution.image}
      imageAlt={solution.imageAlt}
      intro="Every other system on site depends on the network beneath it. We build and maintain that layer — structured cabling, switching, servers, backup and security — then keep it running under a support agreement with clear response times."
      capabilitiesTitle="Keep your business connected."
      capabilitiesDescription="Each capability is designed, installed and supported end to end, then documented so your environment stays maintainable."
      subServices={solution.subServices}
      scopeTitle="What a typical IT engagement covers"
      scopeDescription="Every project is scoped to your environment, but most deployments include the following."
      scope={scope}
      industries={["Corporate", "Healthcare", "Education", "Retail", "Logistics", "Hospitality"]}
      faqTitle="IT questions we get asked"
      faqs={solution.faqs}
    />
  );
}
