import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/solutions/security")({
  head: () => ({
    meta: [
      { title: "Security Solutions — MarselTech" },
      { name: "description", content: "CCTV, surveillance and intrusion systems built on Axis, CP Plus and Honeywell for Dubai businesses." },
      { property: "og:title", content: "Security Solutions — MarselTech" },
      { property: "og:description", content: "CCTV, surveillance and intrusion systems built on Axis, CP Plus and Honeywell for Dubai businesses." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SecurityPage,
});

function SecurityPage() {
  return (
    <div className="py-20 text-center">
      <h1 className="text-4xl font-bold">Security Solutions</h1>
      <p className="mt-4 text-muted-foreground">Content coming soon.</p>
    </div>
  );
}
