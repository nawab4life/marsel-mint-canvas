import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { partnerLogos } from "@/data/partners";
export function PartnersStrip() {
  return (
    <section className="partners-home" aria-label="Technology partners">
      <div className="shell">
        <div className="partners-home-heading">
          <div>
            <p className="eyebrow">OUR TECHNOLOGY PARTNERS</p>
            <h2>Good technology. Connected with purpose.</h2>
          </div>
          <Link to="/partners" className="text-link">
            Meet our partners <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="partners-logo-grid">
          {partnerLogos.map((p) => (
            <Link
              key={p.slug}
              to="/partners"
              hash={p.slug}
              className="partner-logo-tile"
              aria-label={`Learn about ${p.name}`}
            >
              <img
                src={p.src}
                alt={p.name}
                style={{ width: p.width }}
                width={p.width}
                height={72}
                loading="lazy"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
