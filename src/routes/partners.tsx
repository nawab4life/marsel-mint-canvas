import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { PartnerLogo } from "@/components/PartnerLogo";
import { PageHero } from "@/components/PageHero";
import heroPartners from "@/assets/hero-partners.jpg";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners — MarselTech" },
      { name: "description", content: "Meet the technology partners MarselTech works with to deliver the right solution for your needs." },
      { property: "og:title", content: "Partners — MarselTech" },
      { property: "og:description", content: "Meet the technology partners MarselTech works with to deliver the right solution for your needs." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PartnersPage,
});

const partners = [
  { name: "Cisco", description: "Unified communications, collaboration and network infrastructure. We deploy Cisco Webex, VoIP and switching for offices and hospitality clients." },
  { name: "HID", description: "Access control and identity solutions. We use HID readers, controllers and credentials for secure entry and workforce management." },
  { name: "Axis", description: "IP video surveillance and network cameras. Axis is our go-to for reliable, high-quality CCTV deployments." },
  { name: "Aiphone", description: "Intercom and video door entry systems. Aiphone gives us clean audio/video entry solutions for offices and residential buildings." },
  { name: "CP Plus", description: "CCTV and surveillance product range. CP Plus provides cost-effective camera and recorder options for budget-sensitive projects." },
  { name: "IRIZ", description: "Specialized security and communication products. IRIZ extends our options for tailored project requirements." },
];

function PartnersPage() {
  return (
    <>
      <PageHero
        image={heroPartners}
        alt="Business partnership handshake in a technology office"
        eager
        title="Partners"
        description="We partner with and are trained on industry-leading platforms so we can deliver the right solution for your needs — not just the one we sell."
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Technology Partners"
            title="Brands we design, deploy and support"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner) => (
              <PartnerLogo key={partner.name} {...partner} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted/30 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Interested in becoming a partner?
          </h2>
          <p className="mt-4 text-muted-foreground">
            We are always open to relationships with distributors and manufacturers whose products solve real problems for our clients.
          </p>
          <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
