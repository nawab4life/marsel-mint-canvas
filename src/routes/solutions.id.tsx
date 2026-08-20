import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/solutions/id")({
  head: () => ({
    meta: [
      { title: "ID Solutions — MarselTech" },
      { name: "description", content: "Access control, biometric and time-attendance systems powered by HID for Dubai organizations." },
      { property: "og:title", content: "ID Solutions — MarselTech" },
      { property: "og:description", content: "Access control, biometric and time-attendance systems powered by HID for Dubai organizations." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: IDPage,
});

function IDPage() {
  return (
    <div className="py-20 text-center">
      <h1 className="text-4xl font-bold">ID Solutions</h1>
      <p className="mt-4 text-muted-foreground">Content coming soon.</p>
    </div>
  );
}
