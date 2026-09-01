import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, PenTool, Package, Wrench, Headphones, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { ProcessStep } from "@/components/ProcessStep";
import { PageHero } from "@/components/PageHero";
import heroProcess from "@/assets/hero-process.jpg";

export const Route = createFileRoute("/how-we-work")({
  head: () => ({
    meta: [
      { title: "How We Work — MarselTech" },
      { name: "description", content: "Discover MarselTech's structured process from consultation to long-term support." },
      { property: "og:title", content: "How We Work — MarselTech" },
      { property: "og:description", content: "Discover MarselTech's structured process from consultation to long-term support." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HowWeWorkPage,
});

const processSteps = [
  { step: 1, title: "Consultation", description: "Site visit and discussion to understand your requirements, constraints and existing infrastructure.", icon: Phone },
  { step: 2, title: "Design", description: "Solution architecture and product selection based on your needs, budget and future growth plans.", icon: PenTool },
  { step: 3, title: "Procurement", description: "Sourcing genuine, warrantied equipment from authorized brands and distributors.", icon: Package },
  { step: 4, title: "Installation & Commissioning", description: "On-site deployment, testing, documentation and handover — clean and complete.", icon: Wrench },
  { step: 5, title: "Support", description: "After-sales maintenance, troubleshooting and future scalability as your needs evolve.", icon: Headphones },
];

function HowWeWorkPage() {
  return (
    <>
      <PageHero
        image={heroProcess}
        alt="Engineer reviewing site drawings during project planning"
        eager
        title="How We Work"
        description="One structured process, from first call to long-term support."
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Process"
            title="Five steps, one accountable team"
          />
          <div className="mt-14">
            {processSteps.map((step, index) => (
              <ProcessStep key={step.title} {...step} isLast={index === processSteps.length - 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <SectionHeading
                align="left"
                eyebrow="What Makes This Different"
                title="Direct communication from quote to installation"
              />
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Most of our clients work with the same engineer from the first site visit through to handover. There are no account-manager layers, no handoff gaps and no blame-shifting when something needs adjusting.
                </p>
                <p>
                  We also keep recommendations honest. Because we are trained across multiple brands, we can choose the product that fits your environment — not the one we are pressured to sell.
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-card p-8 shadow-sm lg:p-12">
              <h3 className="text-xl font-semibold text-card-foreground">Start with a consultation</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Tell us what you're trying to achieve. We'll ask the right questions, visit the site if needed, and give you a clear proposal with product choices and scope.
              </p>
              <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/contact">
                  Book a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
