import { Mail } from "lucide-react";
import { siteContact } from "@/data/site";

export function FloatingContact() {
  const message = "Hello Marsel Tech, I'd like to discuss a project.";
  const whatsappHref = `https://wa.me/${siteContact.whatsappNumber}?text=${encodeURIComponent(message)}`;
  const emailHref = `mailto:${siteContact.email}?subject=${encodeURIComponent("Project enquiry — Marsel Tech")}`;
  return (
    <nav className="floating-contact" aria-label="Quick contact">
      <a
        className="floating-contact-button floating-whatsapp"
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Marsel Tech on WhatsApp (opens in a new tab)"
      >
        <svg viewBox="0 0 24 24" width="25" height="25" fill="none" aria-hidden="true">
          <path
            d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.5L3 20.8l1.5-4.7a8.5 8.5 0 1 1 16-4.3Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="m8.2 7.1 1.4-.2 1.1 2.6-.9 1.1c.7 1.5 1.8 2.5 3.3 3.2l1.1-1 2.6 1.2-.2 1.4c-.2 1-1.3 1.5-2.2 1.2-3.7-1-6.5-3.8-7.5-7.3-.3-1 .3-2 1.3-2.2Z"
            fill="currentColor"
          />
        </svg>
        <span className="floating-contact-label" aria-hidden="true">
          WhatsApp us
        </span>
      </a>
      <a
        className="floating-contact-button floating-email"
        href={emailHref}
        aria-label="Email Marsel Tech sales"
      >
        <Mail size={23} strokeWidth={1.7} aria-hidden="true" />
        <span className="floating-contact-label" aria-hidden="true">
          Email us
        </span>
      </a>
    </nav>
  );
}
