import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Shield, Users, Wrench, MapPin, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { PageHero } from "@/components/PageHero";
import heroAbout from "@/assets/hero-about.jpg";

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

const approachItems = [
  {
    title: "Vendor-Agnostic Recommendations",
    description: "We are not locked to one manufacturer. We choose products based on your environment, budget and long-term needs.",
    icon: Shield,
  },
  {
    title: "Direct Client Relationships",
    description: "You deal directly with the person scoping, installing and supporting the system — not a rotating account team.",
    icon: Users,
  },
  {
    title: "Hands-On Project Ownership",
    description: "We take responsibility for design, procurement, installation and after-sales support from start to finish.",
    icon: Wrench,
  },
];

const certifications = [
  "Cisco",
  "HID",
  "Axis",
  "Aiphone",
  "CP Plus",
];

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        image={heroAbout}
        alt="Dubai skyline at dusk"
        eager
        title="About MarselTech"
        description="MarselTech has spent the past two years delivering Unified Communications, Security, ID, IT and AV solutions to businesses across Dubai — handling every stage from consultation to after-sales support."
      />

      {/* Who We Are */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Who We Are"
                title="A Dubai-based integrator focused on outcomes, not headcount"
                description="We are a small, hands-on team that designs, procures, installs and supports technology systems for offices, retail, hospitality and other commercial spaces in the UAE."
              />
              <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Our model is simple: understand the site, recommend the right mix of products, install cleanly, and stay reachable for support. We do not outsource the relationship — you work with the same people from the first site visit through to handover.
                </p>
                <p>
                  Being small means we are responsive. Being trained across multiple leading brands means our recommendations are driven by your needs, not a sales quota.
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-muted/50 p-8 lg:p-12">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                MT
              </div>
              <h3 className="mt-6 text-2xl font-bold text-foreground">Founder & Lead Engineer</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                The business is led by an engineer with deep industry experience across security, communications and IT infrastructure. This technical foundation shapes how we scope projects — we focus on what will actually work on your site, not what looks good on paper.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                A professional headshot and full bio will be added here once provided.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Approach"
            title="How we think about every project"
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {approachItems.map((item) => (
              <div key={item.title} className="rounded-xl bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Certifications & Authorizations"
            title="Brands we are trained and authorized to deploy"
            description="We hold manufacturer training and reseller authorizations where applicable. Where formal certification is in progress, we are transparent about it."
          />
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {certifications.map((brand) => (
              <div
                key={brand}
                className="flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-card-foreground"
              >
                <Award className="h-4 w-4 text-primary" />
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Let's discuss your project
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/90">
            Tell us what you're trying to solve and we'll give you an honest assessment of scope, products and budget.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8 bg-background text-foreground hover:bg-background/90">
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
