import { Link } from "@tanstack/react-router";
import { MarselLogo } from "./MarselLogo";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  company: [
    { to: "/", label: "Home" },
    { to: "/how-we-work", label: "How We Work" },
    { to: "/solutions", label: "Solutions" },
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
    <footer className="relative overflow-hidden bg-[oklch(0.21_0.04_145)] text-white">
      {/* subtle emerald glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(60% 80% at 15% 0%, oklch(0.35 0.10 145 / 0.55), transparent 70%), radial-gradient(50% 70% at 100% 100%, oklch(0.30 0.08 145 / 0.45), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <MarselLogo />
            <p className="text-sm leading-relaxed text-white/70">
              End-to-end technology integration across UCC, Security, ID, IT and AV — from consultation to after-sales support.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/70 hover:text-[oklch(0.85_0.15_145)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/70 hover:text-[oklch(0.85_0.15_145)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Contact</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[oklch(0.75_0.15_145)]" />
                <span>Dubai, United Arab Emirates</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-[oklch(0.75_0.15_145)]" />
                <a href="tel:+971000000000" className="hover:text-[oklch(0.85_0.15_145)] transition-colors">
                  +971 00 000 0000
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-[oklch(0.75_0.15_145)]" />
                <a href="mailto:info@marseltech.ae" className="hover:text-[oklch(0.85_0.15_145)] transition-colors">
                  info@marseltech.ae
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} MarselTech. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-white/60 hover:text-[oklch(0.85_0.15_145)] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-white/60 hover:text-[oklch(0.85_0.15_145)] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
