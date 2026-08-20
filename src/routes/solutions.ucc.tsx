import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/solutions/ucc")({
  head: () => ({
    meta: [
      { title: "UCC Solutions — MarselTech" },
      { name: "description", content: "Video conferencing, VoIP and unified collaboration systems for modern offices in Dubai." },
      { property: "og:title", content: "UCC Solutions — MarselTech" },
      { property: "og:description", content: "Video conferencing, VoIP and unified collaboration systems for modern offices in Dubai." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: UCCPage,
});

function UCCPage() {
  return (
    <div className="py-20 text-center">
      <h1 className="text-4xl font-bold">UCC Solutions</h1>
      <p className="mt-4 text-muted-foreground">Content coming soon.</p>
    </div>
  );
}
