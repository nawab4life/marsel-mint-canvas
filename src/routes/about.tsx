import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — MarselTech" },
      { name: "description", content: "Learn about MarselTech, a Dubai-based systems integrator delivering UCC, Security, ID, IT and AV solutions." },
      { property: "og:title", content: "About Us — MarselTech" },
      { property: "og:description", content: "Learn about MarselTech, a Dubai-based systems integrator delivering UCC, Security, ID, IT and AV solutions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="py-20 text-center">
      <h1 className="text-4xl font-bold">About Us</h1>
      <p className="mt-4 text-muted-foreground">Content coming soon.</p>
    </div>
  );
}
