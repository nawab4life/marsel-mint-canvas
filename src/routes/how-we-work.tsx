import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/how-we-work")({
  head: () => ({
    meta: [
      { title: "How We Work — MarselTech" },
      { name: "description", content: "Discover MarselTech's structured process from consultation to long-term support." },
      { property: "og:title", content: "How We Work — MarselTech" },
      { property: "og:description", content: "Discover MarselTech's structured process from consultation to long-term support." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HowWeWorkPage,
});

function HowWeWorkPage() {
  return (
    <div className="py-20 text-center">
      <h1 className="text-4xl font-bold">How We Work</h1>
      <p className="mt-4 text-muted-foreground">Content coming soon.</p>
    </div>
  );
}
