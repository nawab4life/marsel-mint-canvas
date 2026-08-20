import { createFileRoute, Link } from "@tanstack/react-router";
import { Video, Shield, Fingerprint, Server, Monitor, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { SolutionCard } from "@/components/SolutionCard";

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

const solutions = [
  {
    to: "/solutions/ucc",
    title: "UCC Solutions",
    description: "Video conferencing, VoIP & collaboration systems for modern offices. We design around how your teams actually meet and communicate.",
    icon: Video,
  },
  {
    to: "/solutions/security",
    title: "Security Solutions",
    description: "CCTV, surveillance & intrusion systems built on Axis, CP Plus & Honeywell. Coverage designed for your site layout and risk profile.",
    icon: Shield,
  },
  {
    to: "/solutions/id",
    title: "ID Solutions",
    description: "Access control, biometric & time-attendance systems powered by HID. Identity management that fits your workforce and policies.",
    icon: Fingerprint,
  },
  {
    to: "/solutions/it",
    title: "IT Solutions",
    description: "Network infrastructure, servers & managed IT support. Reliable foundations for the applications your business depends on.",
    icon: Server,
  },
  {
    to: "/solutions/av",
    title: "AV Solutions",
    description: "Meeting rooms, digital signage & audio systems for corporate and hospitality spaces. Clear sound and image where it matters.",
    icon: Monitor,
  },
];

function SolutionsPage() {
  return (
    <>
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Solutions
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              At MarselTech, a solution is a complete system — not just a box. Every project is evaluated against reliability, scalability, security and budget-fit before we recommend a product mix.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Deliver"
            title="Five solution areas, one consistent delivery model"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <SolutionCard key={solution.to} {...solution} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted/30 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Not sure which solution you need?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Book a free consultation and we'll help you identify the right technology mix for your site.
          </p>
          <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to="/contact">
              Book a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
