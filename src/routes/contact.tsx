import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import heroContact from "@/assets/hero-contact.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — MarselTech" },
      { name: "description", content: "Get in touch with MarselTech for UCC, Security, ID, IT and AV solutions in Dubai." },
      { property: "og:title", content: "Contact Us — MarselTech" },
      { property: "og:description", content: "Get in touch with MarselTech for UCC, Security, ID, IT and AV solutions in Dubai." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "+971 00 000 0000",
    href: "tel:+971000000000",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@marseltech.ae",
    href: "mailto:info@marseltech.ae",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Dubai, United Arab Emirates",
    href: "#",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Sunday — Thursday, 9:00 AM — 6:00 PM GST",
    href: "#",
  },
];

function ContactPage() {
  return (
    <>
      <PageHero
        image={heroContact}
        alt="Modern technology company reception in Dubai"
        eager
        title="Contact Us"
        description="Get in touch for a consultation, quote or support request. We'll respond as quickly as we can."
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Send a Message"
                title="Tell us about your project"
              />
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            <div>
              <SectionHeading
                align="left"
                eyebrow="Contact Details"
                title="Reach us directly"
              />
              <div className="mt-8 space-y-6">
                {contactDetails.map((detail) => (
                  <a
                    key={detail.label}
                    href={detail.href}
                    className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/30"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <detail.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{detail.label}</p>
                      <p className="mt-0.5 font-medium text-card-foreground">{detail.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-10 rounded-xl border border-border bg-muted/50 p-4">
                <p className="text-sm text-muted-foreground">
                  Map embed will appear here once the exact Dubai location is confirmed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
