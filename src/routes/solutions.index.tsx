import { createFileRoute, Link } from "@tanstack/react-router";
import { Video, Shield, Fingerprint, Server, Monitor, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { PageHero } from "@/components/PageHero";
import heroSolutions from "@/assets/hero-solutions.jpg";
import imgUcc from "@/assets/hero-ucc.jpg";
import imgSecurity from "@/assets/hero-security.jpg";
import imgId from "@/assets/hero-id.jpg";
import imgIt from "@/assets/hero-it.jpg";
import imgAv from "@/assets/hero-av.jpg";
import { SolutionCard } from "@/components/SolutionCard";

export const Route = createFileRoute("/solutions/")({
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
    image: imgUcc,
    title: "UCC Solutions",
    description: "Video conferencing, VoIP & collaboration systems for modern offices. We design around how your teams actually meet and communicate.",
    icon: Video,
  },
  {
    to: "/solutions/security",
    image: imgSecurity,
    title: "Security Solutions",
    description: "CCTV, surveillance & intrusion systems built on Axis, CP Plus & Honeywell. Coverage designed for your site layout and risk profile.",
    icon: Shield,
  },
  {
    to: "/solutions/id",
    image: imgId,
    title: "ID Solutions",
    description: "Access control, biometric & time-attendance systems powered by HID. Identity management that fits your workforce and policies.",
    icon: Fingerprint,
  },
  {
    to: "/solutions/it",
    image: imgIt,
    title: "IT Solutions",
    description: "Network infrastructure, servers & managed IT support. Reliable foundations for the applications your business depends on.",
    icon: Server,
  },
  {
    to: "/solutions/av",
    image: imgAv,
    title: "AV Solutions",
    description: "Meeting rooms, digital signage & audio systems for corporate and hospitality spaces. Clear sound and image where it matters.",
    icon: Monitor,
  },
];

function SolutionsPage() {
  return (
    <>
      <PageHero
        image={heroSolutions}
        alt="Network switch, IP camera, access reader, IP phone and fiber cabling"
        eager
        size="large"
        eyebrow="What we deliver"
        title="Solutions"
        description="Complete systems — designed, installed and supported."
      />

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
