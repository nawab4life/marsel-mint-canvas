import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — MarselTech" },
      { name: "description", content: "Explore MarselTech's solutions: UCC, Security, ID, IT and AV systems for Dubai businesses." },
      { property: "og:title", content: "Solutions — MarselTech" },
      { property: "og:description", content: "Explore MarselTech's solutions: UCC, Security, ID, IT and AV systems for Dubai businesses." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <div className="py-20 text-center">
      <h1 className="text-4xl font-bold">Solutions</h1>
      <p className="mt-4 text-muted-foreground">Content coming soon.</p>
    </div>
  );
}
