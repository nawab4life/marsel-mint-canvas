import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Hotel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { PageHero } from "@/components/PageHero";
import { PartnerLogo } from "@/components/PartnerLogo";
import { ProjectCard } from "@/components/ProjectCard";
import { FaqSection } from "@/components/FaqSection";
import { getSolution } from "@/data/solutions";

const solution = getSolution("ucc")!;

export const Route = createFileRoute("/solutions/ucc/")({
  head: () => ({
    meta: [
      { title: "UCC Solutions in Dubai — Video Conferencing & VoIP | MarselTech" },
      {
        name: "description",
        content:
          "Unified communications in Dubai: Cisco video conferencing, VoIP telephony, room booking and wireless presentation systems designed, installed and supported by MarselTech.",
      },
      { property: "og:title", content: "UCC Solutions in Dubai — MarselTech" },
      {
        property: "og:description",
        content:
          "Video conferencing, VoIP, unified messaging, room booking and wireless presentation systems for offices across Dubai and the UAE.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/solutions/ucc" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/solutions/ucc" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: solution.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }),
      },
    ],
  }),
  component: UCCPage,
});

const partners = [
  { name: "Cisco", description: "Unified communications and collaboration infrastructure." },
];

const industries = ["Corporate", "Hospitality", "Education", "Healthcare", "Government"];

const projects = [
  {
    title: "Corporate Office — UCC Rollout",
    sector: "Corporate",
    scope: "Deployed video conferencing and VoIP across a multi-floor Dubai office.",
    icon: Building2,
  },
  {
    title: "Hotel Meeting Room Upgrade",
    sector: "Hospitality",
    scope: "Installed wireless presentation and video conferencing in flexible meeting spaces.",
    icon: Hotel,
  },
];

function UCCPage() {
  return (
    <>
      <PageHero
        image={solution.image}
        alt={solution.imageAlt}
        eager
        title="UCC Solutions in Dubai"
        description={
          <>
            <span className="block text-xl font-medium text-primary">
              Reliable collaboration for modern workplaces
            </span>
            <span className="mt-4 block">
              Unified Communications and Collaboration brings voice, video, messaging and
              meeting-room technology into one coherent experience. We survey, design, install and
              support these systems for offices, hotels and campuses across Dubai and the UAE.
            </span>
          </>
        }
      >
        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Link to="/contact">Get a Quote</Link>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="border-background/30 bg-transparent text-background hover:bg-background hover:text-foreground"
        >
          <Link to="/solutions">All Solutions</Link>
        </Button>
      </PageHero>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What's Included"
            title="Five UCC services, delivered as one system"
            description="Each service below has its own page covering scope, features, industries served and common questions."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solution.subServices.map((service) => (
              <Link
                key={service.slug}
                to="/solutions/ucc/$service"
                params={{ service: service.slug }}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-card-foreground">{service.title}</h3>
                <p className="mt-2 flex-1 text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                {service.brands && (
                  <p className="mt-4 text-sm font-medium text-primary">Brands: {service.brands}</p>
                )}
                <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Brands We Deploy" title="Authorized products we design around" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner) => (
              <PartnerLogo key={partner.name} {...partner} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Who It's For" title="Sectors this solution is built to serve" />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="inline-flex items-center rounded-full border border-border bg-card px-5 py-2 text-sm font-medium text-card-foreground"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Related Experience"
            title="Project types we have delivered in this area"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={solution.faqs} title="UCC questions we get asked" />

      <section className="bg-primary py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Get a quote for UCC Solutions
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/90">
            Tell us about your site and requirements. We'll recommend the right products and scope.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="mt-8 bg-background text-foreground hover:bg-background/90"
          >
            <Link to="/contact">
              Get a Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
