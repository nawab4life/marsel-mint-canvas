import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners — MarselTech" },
      { name: "description", content: "Meet the technology partners MarselTech works with to deliver the right solution for your needs." },
      { property: "og:title", content: "Partners — MarselTech" },
      { property: "og:description", content: "Meet the technology partners MarselTech works with to deliver the right solution for your needs." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PartnersPage,
});

function PartnersPage() {
  return (
    <div className="py-20 text-center">
      <h1 className="text-4xl font-bold">Partners</h1>
      <p className="mt-4 text-muted-foreground">Content coming soon.</p>
    </div>
  );
}
