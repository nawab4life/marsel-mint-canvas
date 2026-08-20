import { Link } from "@tanstack/react-router";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { PartnerLogo } from "@/components/PartnerLogo";

interface SubService {
  title: string;
  description: string;
  brands?: string;
}

interface ProjectExample {
  title: string;
  sector: string;
  scope: string;
  icon: LucideIcon;
}

interface SolutionPageTemplateProps {
  title: string;
  tagline: string;
  overview: string;
  subServices: SubService[];
  partners: { name: string; description: string }[];
  industries: string[];
  projects?: ProjectExample[];
}

export function SolutionPageTemplate({
  title,
  tagline,
  overview,
  subServices,
  partners,
  industries,
  projects,
}: SolutionPageTemplateProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-muted/30 py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {title}
            </h1>
            <p className="mt-4 text-xl text-primary font-medium">{tagline}</p>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{overview}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/contact">Get a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-foreground/20 hover:bg-accent">
                <Link to="/solutions">All Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-services */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What's Included"
            title="A complete solution, broken down by capability"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subServices.map((service) => (
              <div key={service.title} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-card-foreground">{service.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{service.description}</p>
                {service.brands && (
                  <p className="mt-4 text-sm font-medium text-primary">Brands: {service.brands}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Brands We Deploy"
            title="Authorized products we design around"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner) => (
              <PartnerLogo key={partner.name} {...partner} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Who It's For"
            title="Sectors this solution is built to serve"
          />
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

      {/* Project examples */}
      {projects && projects.length > 0 && (
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
      )}

      {/* CTA */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Get a quote for {title}
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/90">
            Tell us about your site and requirements. We'll recommend the right products and scope.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8 bg-background text-foreground hover:bg-background/90">
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
