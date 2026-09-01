import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { PageHero } from "@/components/PageHero";
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
          "Unified communications in Dubai: video conferencing, VoIP telephony, unified messaging, room booking and wireless presentation systems designed, installed and supported by MarselTech.",
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

const industries = ["Corporate", "Hospitality", "Education", "Healthcare", "Government"];

const outcomes = [
  { value: "1", label: "Single platform for voice, video and messaging" },
  { value: "5", label: "Core capabilities delivered as one system" },
  { value: "360°", label: "Survey, design, install, train and support" },
];

const scope = [
  "Site survey and room acoustics assessment",
  "Video conferencing systems for rooms of every size",
  "Cloud, on-premise or hybrid IP telephony with number porting",
  "Unified messaging, presence and directory integration",
  "Meeting-room booking panels with calendar synchronisation",
  "Wireless presentation for staff and guest devices",
  "Cabling, network readiness and PoE planning",
  "User training, handover documentation and ongoing support",
];

function UCCPage() {
  return (
    <>
      <PageHero
        image={solution.image}
        alt={solution.imageAlt}
        eager
        eyebrow="Solutions"
        title="UCC Solutions in Dubai"
        description="Voice, video, messaging and meeting rooms — unified into one reliable workplace experience."
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

      {/* Intro band */}
      <section className="border-b border-border bg-foreground py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-background/85 sm:text-xl">
            Unified Communications and Collaboration brings voice, video, messaging and meeting-room
            technology into one coherent experience. We survey, design, install and support these
            systems for offices, hotels and campuses across Dubai and the UAE.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {outcomes.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-background/15 bg-background/5 p-6 text-center backdrop-blur-sm"
              >
                <p className="text-4xl font-bold tracking-tight text-primary">{item.value}</p>
                <p className="mt-2 text-sm leading-relaxed text-background/70">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What's Included"
            title="Five UCC capabilities, delivered as one system"
            description="Each capability is designed, installed and supported end to end — then combined into a single collaboration environment."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solution.subServices.map((service, i) => (
              <div
                key={service.slug}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
              >
                <div className="absolute inset-x-0 top-0 h-1 scale-x-0 bg-gradient-to-r from-primary to-primary/30 transition-transform duration-300 group-hover:scale-x-100" />
                <span className="text-sm font-semibold tabular-nums text-primary/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-card-foreground">{service.title}</h3>
                <p className="mt-2 flex-1 text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope of work */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeading
                align="left"
                eyebrow="Scope of Work"
                title="What a typical UCC engagement covers"
                description="Every project is scoped to your site, but most deployments include the following."
              />
              <Button asChild size="lg" className="mt-8">
                <Link to="/contact">
                  Request a site survey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {scope.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-xl border border-border bg-card p-4 text-card-foreground shadow-sm transition-colors hover:border-primary/40"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Who It's For" title="Sectors this solution is built to serve" />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="inline-flex items-center rounded-full border border-border bg-card px-5 py-2 text-sm font-medium text-card-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={solution.faqs} title="UCC questions we get asked" />

      <section className="relative overflow-hidden bg-primary py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Get a quote for UCC Solutions
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/90">
            Tell us about your site and requirements. We'll recommend the right scope.
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
