import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/solutions/av")({
  head: () => ({
    meta: [
      { title: "AV Solutions — MarselTech" },
      { name: "description", content: "Meeting rooms, digital signage and audio systems for corporate and hospitality spaces in Dubai." },
      { property: "og:title", content: "AV Solutions — MarselTech" },
      { property: "og:description", content: "Meeting rooms, digital signage and audio systems for corporate and hospitality spaces in Dubai." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AVPage,
});

function AVPage() {
  return (
    <div className="py-20 text-center">
      <h1 className="text-4xl font-bold">AV Solutions</h1>
      <p className="mt-4 text-muted-foreground">Content coming soon.</p>
    </div>
  );
}
