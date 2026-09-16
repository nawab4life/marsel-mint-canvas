import { createFileRoute } from "@tanstack/react-router";
import { SolutionDetailPage } from "@/components/SolutionDetailPage";
import { getSolution } from "@/data/solutions";

const solution = getSolution("av")!;

export const Route = createFileRoute("/solutions/av")({
  head: () => ({
    meta: [
      { title: "AV Solutions in Dubai — Meeting Rooms & Digital Signage | MarselTech" },
      {
        name: "description",
        content:
          "Audio-visual solutions in Dubai: meeting room and boardroom AV, digital signage, public address, commercial audio and hospitality AV, installed and supported by MarselTech.",
      },
      { property: "og:title", content: "AV Solutions in Dubai — MarselTech" },
      {
        property: "og:description",
        content:
          "Meeting room AV, digital signage, public address and commercial audio for corporate, hospitality and retail spaces across Dubai and the UAE.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/solutions/av" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/solutions/av" }],
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
  component: AVPage,
});

const scope = [
  "Room-by-room survey covering acoustics, sightlines and lighting",
  "Display, projection and video wall sizing per viewing distance",
  "Microphone and loudspeaker design with coverage modelling",
  "Simple control interfaces staff can use without training",
  "Digital signage players, content management and scheduling",
  "Zoned public address, paging and emergency announcement",
  "Containment, power and mounting coordinated with fit-out",
  "Commissioning, staff training and post-handover support",
];

function AVPage() {
  return (
    <SolutionDetailPage
      title="AV Solutions"
      heroTitle="Make your space speak."
      heroDescription="Clear sound, sharp image and controls people can actually use — in every room you run."
      image={solution.image}
      imageAlt={solution.imageAlt}
      intro="Audio-visual systems shape how a space feels and how meetings run. We design meeting room AV, digital signage, paging and commercial audio for corporate, hospitality and retail environments — commissioned properly and handed over with training."
      capabilitiesTitle="Sound, vision and simple control."
      capabilitiesDescription="Each capability is designed, installed and supported end to end, then combined into a consistent experience across the building."
      subServices={solution.subServices}
      scopeTitle="What a typical AV engagement covers"
      scopeDescription="Every project is scoped to your spaces, but most deployments include the following."
      scope={scope}
      industries={["Corporate", "Hospitality", "Retail", "Education", "Healthcare", "Government"]}
      faqTitle="AV questions we get asked"
      faqs={solution.faqs}
    />
  );
}
