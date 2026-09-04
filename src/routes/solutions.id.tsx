import { createFileRoute } from "@tanstack/react-router";
import { SolutionDetailPage } from "@/components/SolutionDetailPage";
import { getSolution } from "@/data/solutions";

const solution = getSolution("id")!;

export const Route = createFileRoute("/solutions/id")({
  head: () => ({
    meta: [
      { title: "ID & Access Control Solutions in Dubai | MarselTech" },
      {
        name: "description",
        content:
          "ID solutions in Dubai: access control, time and attendance, visitor management, biometric identification and on-site card issuance, designed and supported by MarselTech.",
      },
      { property: "og:title", content: "ID Solutions in Dubai — MarselTech" },
      {
        property: "og:description",
        content:
          "Access control, time-attendance, visitor management, biometrics and badge issuance for organisations across Dubai and the UAE.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/solutions/id" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/solutions/id" }],
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
  component: IDPage,
});

const outcomes = [
  { value: "1", label: "One credential for doors, attendance and visitor flow" },
  { value: "5", label: "Core capabilities delivered as one identity system" },
  { value: "360°", label: "Survey, design, install, train and support" },
];

const scope = [
  "Door schedule, zoning and access policy workshop",
  "Controllers, readers and credential technology selection",
  "Biometric enrolment with encrypted template handling",
  "Time and attendance rules mapped to payroll and HR exports",
  "Visitor pre-registration, badge printing and host notifications",
  "On-site card issuance, encoding and artwork setup",
  "Integration with CCTV, intrusion and building systems",
  "Administrator training, documentation and ongoing support",
];

function IDPage() {
  return (
    <SolutionDetailPage
      title="ID Solutions"
      heroTitle="ID & Access Solutions in Dubai"
      heroDescription="Control who goes where, when and for how long — without adding friction to the working day."
      image={solution.image}
      imageAlt={solution.imageAlt}
      intro="Identity systems decide who enters, what they can reach and how that is recorded. We design access control, attendance, visitor management and credential issuance as one policy-driven platform for offices, campuses and facilities across Dubai and the UAE."
      outcomes={outcomes}
      capabilitiesTitle="Five identity capabilities, delivered as one system"
      capabilitiesDescription="Each capability is designed, installed and supported end to end, then unified under a single credential and policy set."
      subServices={solution.subServices}
      scopeTitle="What a typical ID engagement covers"
      scopeDescription="Every project is scoped to your policies and site, but most deployments include the following."
      scope={scope}
      industries={["Corporate", "Education", "Healthcare", "Retail", "Government", "Logistics"]}
      faqTitle="ID and access questions we get asked"
      faqs={solution.faqs}
    />
  );
}
