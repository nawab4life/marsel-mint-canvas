import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { siteContact } from "@/data/site";
export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Let’s Talk About Your Project — Marsel Tech" },
      {
        name: "description",
        content:
          "Contact Marsel Tech in Dubai to discuss communication, security, access, IT and audio visual solutions for your space.",
      },
    ],
  }),
  component: ContactPage,
});
function ContactPage() {
  return (
    <section className="contact-page">
      <div className="shell contact-layout">
        <div className="contact-copy">
          <p className="eyebrow">LET’S START SOMETHING</p>
          <h1>
            What’s next
            <br />
            for your space?
          </h1>
          <p>
            Tell us what you’re planning, improving or trying to solve. We’ll help you find the
            right starting point.
          </p>
          <div className="contact-direct">
            <Mail size={20} />
            <div>
              <span>EMAIL US DIRECTLY</span>
              <a href={`mailto:${siteContact.email}`}>
                {siteContact.email}
                <ArrowUpRight size={20} />
              </a>
            </div>
          </div>
          <div className="contact-location">
            <MapPin size={18} />
            <span>{siteContact.location}</span>
          </div>
          <div className="contact-help">
            <span>GOOD TO INCLUDE</span>
            <p>
              Your type of space, the systems you need and your expected timeline. Early ideas are
              welcome too.
            </p>
          </div>
        </div>
        <div className="contact-form-panel">
          <p className="eyebrow">YOUR PROJECT, IN A FEW DETAILS</p>
          <h2>Let’s get connected.</h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
