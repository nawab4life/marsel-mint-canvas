import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Phone } from "lucide-react";
import { MarselLogo } from "./MarselLogo";
import { serviceAreas, siteContact } from "@/data/site";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" aria-label="Marsel Tech home">
              <MarselLogo />
            </Link>
            <p>
              Technology that brings your
              <br />
              people, spaces and systems together.
            </p>
            <span className="location-dot">{siteContact.location}</span>
          </div>
          <div>
            <p className="footer-label">EXPLORE</p>
            <Link to="/">Home</Link>
            <Link to="/solutions">Our solutions</Link>
            <Link to="/how-we-work">Our approach</Link>
            <Link to="/partners">Partners</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div>
            <p className="footer-label">WHAT WE DO</p>
            {serviceAreas.map((s) => (
              <Link key={s.slug} to={s.to}>
                {s.short}
              </Link>
            ))}
          </div>
          <div className="footer-connect">
            <p className="footer-label">HAVE A PROJECT IN MIND?</p>
            <a href={`mailto:${siteContact.email}`}>
              {siteContact.email}
              <ArrowUpRight size={18} />
            </a>
            <a href={siteContact.phoneHref} className="footer-phone">
              <Phone size={16} />
              {siteContact.phone}
            </a>
            <p>
              Tell us what you’re planning.
              <br />
              We’ll help you find the right starting point.
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Marsel Tech. All rights reserved.</span>
          <span>CREATE. DESIGN. ACCELERATE.</span>
        </div>
      </div>
    </footer>
  );
}
