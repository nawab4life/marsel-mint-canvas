import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { PartnerLogo } from "@/components/PartnerLogo";
import { PageHero } from "@/components/PageHero";

interface SubService {
  title: string;
  description: string;
  brands?: string;
}

interface SolutionPageTemplateProps {
  title: string;
  tagline: string;
  overview: string;
  image: string;
  imageAlt: string;
  subServices: SubService[];
  partners: { name: string; description: string }[];
  industries: string[];
}

export function SolutionPageTemplate({
  title,
  tagline,
  overview,
  image,
  imageAlt,
  subServices,
  partners,
  industries,
}: SolutionPageTemplateProps) {
  return (
    <>
      {/* Hero — clean, image-forward */}
      <PageHero
        image={image}
        alt={imageAlt}
        eager
        size="large"
        eyebrow="Solutions"
        title={title}
        description={tagline}
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

      {/* Overview band */}
      <section className="border-b border-border bg-foreground py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-lg leading-relaxed text-background/85 sm:text-xl">{overview}</p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What's Included"
            title="A complete solution, broken down by capability"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subServices.map((service, i) => (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
              >
                <div className="absolute inset-x-0 top-0 h-1 scale-x-0 bg-gradient-to-r from-primary to-primary/30 transition-transform duration-300 group-hover:scale-x-100" />
                <span className="text-sm font-semibold tabular-nums text-primary/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-card-foreground">{service.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
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

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Get a quote for {title}
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
