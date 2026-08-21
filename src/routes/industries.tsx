import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, ShoppingBag, Hotel, GraduationCap, Stethoscope, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { IndustryCard } from "@/components/IndustryCard";
import { PageHero } from "@/components/PageHero";
import heroIndustries from "@/assets/hero-industries.jpg";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve — MarselTech" },
      { name: "description", content: "MarselTech serves Corporate, Retail, Hospitality, Education and Healthcare sectors in Dubai." },
      { property: "og:title", content: "Industries We Serve — MarselTech" },
      { property: "og:description", content: "MarselTech serves Corporate, Retail, Hospitality, Education and Healthcare sectors in Dubai." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: IndustriesPage,
});

const industries = [
  {
    title: "Corporate / Enterprise Offices",
    description: "Meeting room AV, UCC, network infrastructure, access control and CCTV for offices of all sizes.",
    solutions: ["UCC", "Security", "ID", "IT", "AV"],
    icon: Building2,
  },
  {
    title: "Retail",
    description: "Surveillance, access control, digital signage and network connectivity for stores and malls.",
    solutions: ["Security", "ID", "AV", "IT"],
    icon: ShoppingBag,
  },
  {
    title: "Hospitality",
    description: "Guest room entertainment, meeting room AV, digital signage, Wi-Fi and security for hotels.",
    solutions: ["AV", "IT", "Security", "UCC"],
    icon: Hotel,
  },
  {
    title: "Education",
    description: "Classroom AV, access control, time-attendance, CCTV and campus networks for schools and universities.",
    solutions: ["AV", "ID", "Security", "IT"],
    icon: GraduationCap,
  },
  {
    title: "Healthcare",
    description: "Secure access control, surveillance, intercom and network infrastructure for clinics and medical facilities.",
    solutions: ["Security", "ID", "IT", "UCC"],
    icon: Stethoscope,
  },
];

function IndustriesPage() {
  return (
    <>
      <PageHero
        image={heroIndustries}
        alt="Hospital, hotel and campus interiors served by MarselTech"
        eager
        title="Industries We Serve"
        description="We tailor our solutions to the operational realities of each sector — from office meeting rooms to hotel guest experiences."
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Sectors"
            title="Where MarselTech adds value"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <IndustryCard key={industry.title} {...industry} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Not sure which solution fits your sector?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/90">
            We'll help you match the right technology to your industry's requirements and compliance context.
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
