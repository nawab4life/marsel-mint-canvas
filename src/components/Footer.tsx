import { Link } from "@tanstack/react-router";
import { MarselLogo } from "./MarselLogo";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  company: [
    { to: "/about", label: "About Us" },
    { to: "/how-we-work", label: "How We Work" },
    { to: "/partners", label: "Partners" },
    { to: "/contact", label: "Contact" },
  ],
  solutions: [
    { to: "/solutions/ucc", label: "UCC Solutions" },
    { to: "/solutions/security", label: "Security Solutions" },
    { to: "/solutions/id", label: "ID Solutions" },
    { to: "/solutions/it", label: "IT Solutions" },
    { to: "/solutions/av", label: "AV Solutions" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <MarselLogo />
            <p className="text-sm text-muted-foreground leading-relaxed">
              End-to-end technology integration across UCC, Security, ID, IT and AV — from consultation to after-sales support.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Dubai, United Arab Emirates</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+971000000000" className="hover:text-primary transition-colors">
                  +971 00 000 0000
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:info@marseltech.ae" className="hover:text-primary transition-colors">
                  info@marseltech.ae
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} MarselTech. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
