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
  Building2,
  ShoppingBag,
  Hotel,
  GraduationCap,
  Stethoscope,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { ProcessStep } from "@/components/ProcessStep";
import { PartnerLogo } from "@/components/PartnerLogo";
import { IndustryCard } from "@/components/IndustryCard";
import { HeroSlider } from "@/components/HeroSlider";

import heroHome from "@/assets/hero-home.jpg";
import bannerUcc from "@/assets/banner-ucc.jpg";
import bannerSecurity from "@/assets/banner-security.jpg";
import bannerId from "@/assets/banner-id.jpg";
import bannerIt from "@/assets/banner-it.jpg";
import bannerAv from "@/assets/banner-av.jpg";
import logoCisco from "@/assets/logo-cisco.png";
import logoHid from "@/assets/logo-hid.png";
import logoAxis from "@/assets/logo-axis.png";
import logoAiphone from "@/assets/logo-aiphone.png";
import logoCpPlus from "@/assets/logo-cpplus.png";
import logoIriz from "@/assets/logo-iriz.png";

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
  { name: "Cisco", logo: logoCisco, description: "Unified communications, collaboration and network infrastructure." },
  { name: "HID", logo: logoHid, description: "Access control, credentials and identity management solutions." },
  { name: "Axis", logo: logoAxis, description: "IP video surveillance and network cameras." },
  { name: "Aiphone", logo: logoAiphone, description: "Intercom and video door entry systems." },
  { name: "CP Plus", logo: logoCpPlus, description: "CCTV and surveillance product range." },
  { name: "IRIZ", logo: logoIriz, description: "Specialized security and communication products." },
];

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

const heroSlides = [
  {
    image: heroHome,
    alt: "MarselTech engineers installing network and rack infrastructure in a Dubai commercial building",
    eyebrow: "Dubai systems integrator",
    title: "Technology,",
    highlight: "engineered on site",
    description: "UCC, Security, ID, IT and AV — designed, installed and supported by us.",
    primaryCta: { label: "Get a Quote", to: "/contact" },
    secondaryCta: { label: "Explore Solutions", to: "/solutions" },
  },
  ...solutionBanners.map((s) => ({
    image: s.image,
    alt: s.alt,
    eyebrow: s.eyebrow,
    icon: s.icon,
    title: s.title,
    description: s.description,
    primaryCta: { label: s.cta, to: s.to },
    secondaryCta: { label: "Get a Quote", to: "/contact" },
  })),
];

function HomePage() {
  return (
    <>
      {/* Hero slider */}
      <HeroSlider slides={heroSlides} />

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


      {/* Industries */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Solutions tailored to the realities of each sector"
            description="From corporate offices to hospitals, we design around how each environment actually operates."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <IndustryCard key={industry.title} {...industry} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/contact">
                Discuss Your Sector
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
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
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/contact">
                Talk to Our Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-[oklch(0.16_0.01_145)] py-16 lg:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(60% 80% at 50% 0%, oklch(0.45 0.13 145 / 0.35), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to discuss your project?
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Book a consultation and we'll recommend the right mix of technology for your space and budget.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/contact">Book a Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/25 bg-transparent text-white hover:bg-white/10">
              <a href="tel:+971000000000">Call Us</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
