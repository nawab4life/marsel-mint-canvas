import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — MarselTech" },
      { name: "description", content: "Get in touch with MarselTech for UCC, Security, ID, IT and AV solutions in Dubai." },
      { property: "og:title", content: "Contact Us — MarselTech" },
      { property: "og:description", content: "Get in touch with MarselTech for UCC, Security, ID, IT and AV solutions in Dubai." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="py-20 text-center">
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <p className="mt-4 text-muted-foreground">Content coming soon.</p>
    </div>
  );
}
