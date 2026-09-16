import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import { partnerLogos } from "@/data/partners";
import { ContactBand } from "@/components/ContactBand";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Our Technology Partners — Marsel Tech" },
      {
        name: "description",
        content:
          "Explore the technology brands Marsel Tech works with: Axis, HID, CP PLUS, Cisco, IRIZ ID and Aiphone, across security, access and network infrastructure.",
      },
    ],
  }),
  component: PartnersPage,
});
function PartnersPage() {
  return (
    <>
      <section className="partners-intro">
        <div className="shell">
          <p className="eyebrow">OUR PARTNERS / CONNECTED BY DESIGN</p>
          <div className="partners-intro-grid">
            <h1>
              The right technology.
              <br />
              <span>The right fit.</span>
            </h1>
            <div>
              <p>
                We work with technology brands across security, identity and connectivity. Our role
                is to bring the right elements together around your space, your people and the way
                you work.
              </p>
              <a href="#partner-directory" className="text-link">
                Explore our partners <ArrowDown size={17} />
              </a>
            </div>
          </div>
          <div className="partners-intro-rule">
            <span>TECHNOLOGY PARTNERS</span>
            <span>PLANNED. INTEGRATED. SUPPORTED.</span>
          </div>
        </div>
      </section>
      <section
        className="section-space partner-directory"
        id="partner-directory"
        aria-label="Our technology partners"
      >
        <div className="shell partner-card-grid">
          {partnerLogos.map((p, i) => (
            <article className="partner-card" id={p.slug} key={p.slug}>
              <div className="partner-card-top">
                <span>0{i + 1}</span>
                <a
                  href={p.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${p.name}'s official website (opens in a new tab)`}
                >
                  <ArrowUpRight size={19} />
                </a>
              </div>
              <div className="partner-card-logo">
                <img
                  src={p.src}
                  alt={p.name}
                  width={p.width}
                  height={90}
                  style={{ width: p.width }}
                  loading="lazy"
                />
              </div>
              <h2 className="sr-only">{p.name}</h2>
              <p className="partner-specialism">{p.category}</p>
              <p className="partner-description">{p.description}</p>
              <Link to={p.to} className="text-link">
                {p.solution} <ArrowUpRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className="partner-approach section-space">
        <div className="shell partner-approach-grid">
          <div>
            <p className="eyebrow">THE MARSEL TECH CONNECTION</p>
            <h2>
              More than a product.
              <br />A considered solution.
            </h2>
            <p>
              A brand is one part of the picture. We plan how the technology fits your environment,
              how the systems work together and how your team will use them every day.
            </p>
          </div>
          <div className="partner-principles">
            {[
              [
                "Selected for your space",
                "We start with the site, the brief and your priorities, then identify suitable equipment.",
              ],
              [
                "Designed to work together",
                "Connections, compatibility and the user experience are considered as part of the system design.",
              ],
              [
                "Supported from the start",
                "Installation, testing, handover and the agreed support scope form part of the project conversation.",
              ],
            ].map(([title, description]) => (
              <div key={title}>
                <Check size={20} />
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactBand title="Have a brand or a system in mind? Let’s talk." />
    </>
  );
}
