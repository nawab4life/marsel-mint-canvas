import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/solutions/it")({
  head: () => ({
    meta: [
      { title: "IT Solutions — MarselTech" },
      { name: "description", content: "Network infrastructure, servers and managed IT support for Dubai businesses." },
      { property: "og:title", content: "IT Solutions — MarselTech" },
      { property: "og:description", content: "Network infrastructure, servers and managed IT support for Dubai businesses." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ITPage,
});

function ITPage() {
  return (
    <div className="py-20 text-center">
      <h1 className="text-4xl font-bold">IT Solutions</h1>
      <p className="mt-4 text-muted-foreground">Content coming soon.</p>
    </div>
  );
}
