import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { FaqSection } from "@/components/FaqSection";
import { getSolution, getSubService } from "@/data/solutions";

export const Route = createFileRoute("/solutions/ucc/$service")({
  loader: ({ params }) => {
    const found = getSubService("ucc", params.service);
    if (!found) throw notFound();
    return { service: found.service };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service not found — MarselTech" }, { name: "robots", content: "noindex" }] };
    }
    const s = loaderData.service;
    return {
      meta: [
        { title: s.metaTitle },
        { name: "description", content: s.metaDescription },
        { property: "og:title", content: s.metaTitle },
        { property: "og:description", content: s.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/solutions/ucc/${params.service}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/solutions/ucc/${params.service}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: s.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }),
        },
      ],
    };
  },
  component: SubServicePage,
  errorComponent: () => <FallbackNotice />,
  notFoundComponent: () => <FallbackNotice />,
});

function FallbackNotice() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Service not found</h1>
        <p className="mt-4 text-muted-foreground">
          This UCC service page isn't available. Browse all UCC services instead.
        </p>
        <Button asChild className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
          <Link to="/solutions/ucc">UCC Solutions</Link>
        </Button>
      </div>
    </section>
  );
}

function SubServicePage() {
  const { service } = Route.useLoaderData();
  const solution = getSolution("ucc")!;
  const others = solution.subServices.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero
        image={solution.image}
        alt={solution.imageAlt}
        eager
        title={service.title}
        description={
          <>
            <span className="block text-xl font-medium text-primary">{service.tagline}</span>
            <span className="mt-4 block">{service.intro}</span>
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
          <Link to="/solutions/ucc">All UCC Services</Link>
        </Button>
      </PageHero>

      <nav aria-label="Breadcrumb" className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-4 text-sm text-muted-foreground sm:px-6 lg:px-8">
          <Link to="/solutions" className="hover:text-primary">
            Solutions
          </Link>
          <span className="mx-2">/</span>
          <Link to="/solutions/ucc" className="hover:text-primary">
            UCC Solutions
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{service.title}</span>
        </div>
      </nav>

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {service.title} in Dubai
            </h2>
            {service.body.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
            {service.brands && (
              <p className="mt-8 text-sm font-medium text-primary">Brands: {service.brands}</p>
            )}
          </div>

          <aside className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-card-foreground">Who it's for</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {service.industries.map((industry) => (
                <span
                  key={industry}
                  className="inline-flex items-center rounded-full border border-border px-4 py-1.5 text-sm text-card-foreground"
                >
                  {industry}
                </span>
              ))}
            </div>
            <Button asChild className="mt-8 w-full bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/contact">
                Request a Site Survey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </aside>
        </div>
      </section>

      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="What's Included" title="Scope of work" />
          <ul className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
            {service.features.map((feature) => (
              <li
                key={feature}
                className="flex gap-3 rounded-lg border border-border bg-card p-4 text-card-foreground shadow-sm"
              >
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqSection faqs={service.faqs} title={`${service.title} — frequently asked questions`} />

      <section className="border-t border-border py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Related" title="Other UCC services" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((other) => (
              <Link
                key={other.slug}
                to="/solutions/ucc/$service"
                params={{ service: other.slug }}
                className="group rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
              >
                <h3 className="font-semibold text-card-foreground">{other.title}</h3>
                <span className="mt-3 inline-flex items-center text-sm font-medium text-primary">
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Get a quote for {service.title}
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/90">
            Tell us about your site and we'll come back with a scoped proposal.
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
