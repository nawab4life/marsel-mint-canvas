import { createFileRoute } from "@tanstack/react-router";
import { SolutionDetailPage } from "@/components/SolutionDetailPage";
import { getSolution } from "@/data/solutions";
const solution = getSolution("ucc")!;
export const Route = createFileRoute("/solutions/ucc/")({
  head: () => ({
    meta: [
      { title: "UCC Solutions in Dubai — Video Conferencing & VoIP | MarselTech" },
      {
        name: "description",
        content:
          "Unified communications in Dubai: video conferencing, VoIP telephony, unified messaging, room booking and wireless presentation systems designed, installed and supported by MarselTech.",
      },
      { property: "og:title", content: "UCC Solutions in Dubai — MarselTech" },
      {
        property: "og:description",
        content:
          "Video conferencing, VoIP, unified messaging, room booking and wireless presentation systems for offices across Dubai and the UAE.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/solutions/ucc" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/solutions/ucc" }],
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
  component: UCCPage,
});

function UCCPage() {
  return (
    <SolutionDetailPage
      title="UCC Solutions"
      heroTitle="A workplace in conversation."
      heroDescription="Voice, video, messaging and meeting rooms, connected around the way your people work."
      image={solution.image}
      imageAlt="Illustrative video conferencing and collaboration space"
      intro="Good communication starts with a room that works. We bring voice, video, messaging and meeting-room technology together for offices, hotels and campuses across Dubai and the UAE."
      capabilitiesTitle="Bring your conversations together."
      capabilitiesDescription="From the first call to the meeting room, we plan the details that make communication feel natural."
      subServices={solution.subServices}
      scopeTitle="The detail behind better meetings."
      scopeDescription="Your site, working patterns and existing systems shape the final scope."
      scope={[
        "Site survey and room acoustics assessment",
        "Video conferencing for your room sizes",
        "Cloud, on-premise or hybrid IP telephony",
        "Unified messaging and directory integration",
        "Meeting-room booking and calendar integration",
        "Wireless presentation for staff and guests",
        "Cabling, network readiness and PoE planning",
        "User training, handover and ongoing support",
      ]}
      industries={["Corporate", "Hospitality", "Education", "Healthcare", "Government"]}
      faqTitle="Your UCC questions, answered."
      faqs={solution.faqs}
    />
  );
}
