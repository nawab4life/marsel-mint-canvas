import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Video,
  Shield,
  Fingerprint,
  Server,
  Monitor,
  ArrowRight,
  Phone,
  Users,
  Wrench,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { ProcessStep } from "@/components/ProcessStep";
import { PartnerLogo } from "@/components/PartnerLogo";
import { PageHero } from "@/components/PageHero";

import heroHome from "@/assets/hero-home.jpg";
import bannerUcc from "@/assets/banner-ucc.jpg";
import bannerSecurity from "@/assets/banner-security.jpg";
import bannerId from "@/assets/banner-id.jpg";
import bannerIt from "@/assets/banner-it.jpg";
import bannerAv from "@/assets/banner-av.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MarselTech — UCC, Security, IT & AV Solutions in Dubai" },
      { name: "description", content: "MarselTech delivers end-to-end technology integration across UCC, Security, ID, IT and AV for businesses in Dubai." },
      { property: "og:title", content: "MarselTech — UCC, Security, IT & AV Solutions in Dubai" },
      { property: "og:description", content: "MarselTech delivers end-to-end technology integration across UCC, Security, ID, IT and AV for businesses in Dubai." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const solutionBanners = [
  {
    to: "/solutions/ucc",
    image: bannerUcc,
    alt: "Team on a video conference call in a modern glass meeting room",
    eyebrow: "Unified Communications",
    title: "UCC Solutions",
    description: "Video conferencing, VoIP telephony and collaboration systems designed around how your teams actually meet and communicate.",
    icon: Video,
    cta: "Explore UCC",
  },
  {
    to: "/solutions/security",
    image: bannerSecurity,
    alt: "Security operations room with a wall of CCTV monitors",
    eyebrow: "Safety & Surveillance",
    title: "Security Solutions",
    description: "CCTV, intrusion detection and intercom systems with coverage designed for your site layout and risk profile.",
    icon: Shield,
    cta: "Explore Security",
  },
  {
    to: "/solutions/id",
    image: bannerId,
    alt: "Fingerprint biometric access reader at an office entrance",
    eyebrow: "Identity & Access",
    title: "ID Solutions",
    description: "Access control, biometric and time-attendance systems that fit your workforce, policies and compliance needs.",
    icon: Fingerprint,
    cta: "Explore ID",
  },
  {
    to: "/solutions/it",
    image: bannerIt,
    alt: "Engineer walking a data center corridor between server racks",
    eyebrow: "Infrastructure & Support",
    title: "IT Solutions",
    description: "Structured cabling, networks, servers and managed IT support — reliable foundations for your business applications.",
    icon: Server,
    cta: "Explore IT",
  },
  {
    to: "/solutions/av",
    image: bannerAv,
    alt: "Hotel ballroom with a large LED video wall and event lighting",
    eyebrow: "Audio Visual",
    title: "AV Solutions",
    description: "Meeting room AV, digital signage and professional audio for corporate and hospitality spaces — clear sound and image where it matters.",
    icon: Monitor,
    cta: "Explore AV",
  },
];

const whyMarselTech = [
  {
    title: "Direct, Hands-On Delivery",
    description: "You work directly with us from consultation to installation — no layers of account managers.",
    icon: Users,
  },
  {
    title: "Multi-Brand Expertise",
    description: "Trained across Cisco, HID, Axis, Aiphone and CP Plus, so recommendations are need-based, not brand-locked.",
    icon: Shield,
  },
  {
    title: "Full Lifecycle Support",
    description: "Design, procurement, installation, and after-sales support in one relationship.",
    icon: Wrench,
  },
  {
    title: "Dubai-Based, On-Site",
    description: "Physically present for site surveys, installs and support — not a remote reseller.",
    icon: MapPin,
  },
];

const processSteps = [
  { step: 1, title: "Consult", description: "Site visit and discussion to understand your requirements and constraints.", icon: Phone },
  { step: 2, title: "Design", description: "Solution architecture and product selection based on your needs and budget.", icon: Shield },
  { step: 3, title: "Deploy", description: "On-site installation, testing and clean handover.", icon: Wrench },
  { step: 4, title: "Support", description: "After-sales maintenance, troubleshooting and future scalability.", icon: Users },
];




const partners = [
  { name: "Cisco", description: "Unified communications and collaboration infrastructure." },
  { name: "HID", description: "Access control and identity solutions." },
  { name: "Axis", description: "IP video surveillance and network cameras." },
  { name: "Aiphone", description: "Intercom and video door entry systems." },
  { name: "CP Plus", description: "CCTV and surveillance product range." },
  { name: "IRIZ", description: "Specialized security and communication products." },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        image={heroHome}
        alt="MarselTech engineers installing network and rack infrastructure in a Dubai commercial building"
        eager
        size="large"
        eyebrow="Dubai systems integrator"
        title={
          <>
            Technology, <span className="text-primary">engineered on site</span>
          </>
        }
        description="UCC, Security, ID, IT and AV — designed, installed and supported by us."
      >
        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Link to="/contact">Get a Quote</Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="border-background/30 bg-transparent text-background hover:bg-background hover:text-foreground">
          <Link to="/solutions">Explore Solutions</Link>
        </Button>
      </PageHero>

      {/* Trust Bar */}
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Authorized Partner / Reseller For
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 opacity-70 grayscale">
            {["Cisco", "HID", "Axis", "Aiphone", "CP Plus", "IRIZ"].map((brand) => (
              <span key={brand} className="text-lg font-bold text-foreground">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do — solution banners */}
      <section className="bg-foreground py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Do"
            title="Technology integration built around your operations"
            description="Five solution areas, one consistent delivery model — designed, procured, installed and supported in-house."
            dark
          />
          <div className="mt-14 space-y-6">
            {solutionBanners.map((solution) => (
              <Link
                key={solution.to}
                to={solution.to}
                className="group relative isolate flex min-h-[300px] items-end overflow-hidden rounded-2xl border border-background/10 shadow-lg transition-all hover:border-primary/40 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] sm:min-h-[340px]"
              >
                <img
                  src={solution.image}
                  alt={solution.alt}
                  loading="lazy"
                  width={1920}
                  height={768}
                  className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-foreground/95 via-foreground/60 to-foreground/10 transition-opacity duration-500 group-hover:via-foreground/50" />
                <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="flex w-full flex-col gap-5 p-8 sm:flex-row sm:items-end sm:justify-between sm:p-12">
                  <div className="max-w-xl">
                    <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-foreground/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary backdrop-blur-sm">
                      <solution.icon className="h-3.5 w-3.5" />
                      {solution.eyebrow}
                    </p>
                    <h3 className="text-3xl font-bold tracking-tight text-background sm:text-4xl">
                      {solution.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-background/80">
                      {solution.description}
                    </p>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all group-hover:gap-3 group-hover:brightness-110">
                    {solution.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why MarselTech */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why MarselTech"
            title="Honest differentiators, not generic claims"
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyMarselTech.map((item) => (
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

      {/* How We Work */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                align="left"
                eyebrow="How We Work"
                title="A structured process from first call to long-term support"
                description="This is the same process every project follows — it keeps small teams disciplined and clients informed."
              />
              <div className="mt-8">
                <Button asChild variant="outline" className="border-foreground/20 hover:bg-accent">
                  <Link to="/how-we-work">
                    See full process
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div>
              {processSteps.map((step, index) => (
                <ProcessStep key={step.title} {...step} isLast={index === processSteps.length - 1} />
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Partners */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Partners"
            title="We partner with industry-leading platforms"
            description="We are trained on multiple brands so we can recommend the right solution for your needs — not just the one we sell."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner) => (
              <PartnerLogo key={partner.name} {...partner} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Ready to discuss your project?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/90">
            Book a consultation and we'll recommend the right mix of technology for your space and budget.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/contact">Book a Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
              <a href="tel:+971000000000">Call Us</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
