import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve — MarselTech" },
      { name: "description", content: "MarselTech serves Corporate, Retail, Hospitality, Education and Healthcare sectors in Dubai." },
      { property: "og:title", content: "Industries We Serve — MarselTech" },
      { property: "og:description", content: "MarselTech serves Corporate, Retail, Hospitality, Education and Healthcare sectors in Dubai." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <div className="py-20 text-center">
      <h1 className="text-4xl font-bold">Industries We Serve</h1>
      <p className="mt-4 text-muted-foreground">Content coming soon.</p>
    </div>
  );
}
