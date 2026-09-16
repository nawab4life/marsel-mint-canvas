import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, MoveUpRight } from "lucide-react";
import { ConnectedWorkplace } from "@/components/ConnectedWorkplace";
import { SolutionsExplorer } from "@/components/SolutionsExplorer";
import { PartnersStrip } from "@/components/PartnersStrip";
import { ContactBand } from "@/components/ContactBand";
import { serviceAreas, deliverySteps } from "@/data/site";
import heroUcc from "@/assets/banner-ucc.jpg";
import heroHome from "@/assets/hero-home.jpg";
import heroAv from "@/assets/banner-av.jpg";
import heroId from "@/assets/hero-id.jpg";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marsel Tech — Connected Workplaces & Technology Integration in Dubai" },
      {
        name: "description",
        content:
          "Communication, security, access control, IT and audio visual systems, designed, installed and supported by Marsel Tech in Dubai.",
      },
      { property: "og:title", content: "Marsel Tech — Better spaces. Smarter connections." },
      {
        property: "og:description",
        content: "Technology integration for people, spaces and businesses in Dubai.",
      },
    ],
  }),
  component: HomePage,
});
const applications = [
  {
    image: heroUcc,
    name: "The connected office",
    category: "CORPORATE",
    text: "Meet, collaborate and move through your workplace with technology that works together.",
    tags: "Communication · IT · Access",
    to: "/solutions/ucc",
  },
  {
    image: heroAv,
    name: "A more welcoming stay",
    category: "HOSPITALITY",
    text: "Connect guest spaces, meeting facilities and the systems that support your team.",
    tags: "Audio visual · IT · Security",
    to: "/solutions/av",
  },
  {
    image: heroId,
    name: "Smarter shared spaces",
    category: "EDUCATION & HEALTHCARE",
    text: "Plan for secure entry, clear communication and dependable connectivity.",
    tags: "Access · Security · IT",
    to: "/solutions/id",
  },
] as const;
function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="live-dot" /> TECHNOLOGY INTEGRATION / DUBAI
            </p>
            <h1>
              Better spaces.
              <br />
              Smarter
              <br />
              <span className="hero-highlight">connections.</span>
            </h1>
            <p className="hero-description">
              Bring your people, spaces and systems together. Technology designed, installed and
              supported by Marsel Tech.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="action">
                Discuss your project <ArrowUpRight size={19} />
              </Link>
              <a href="#our-solutions" className="text-link">
                Explore solutions <ArrowDown size={17} />
              </a>
            </div>
            <div className="hero-note">
              <span /> ONE PARTNER. FROM FIRST PLAN TO WHAT’S NEXT.
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-frame">
              <img
                src={heroUcc}
                width={1400}
                height={1200}
                fetchPriority="high"
                alt="Illustrative modern workplace with a connected meeting room"
              />
              <span className="hero-photo-label">SPACES THAT WORK TOGETHER</span>
              <div className="hero-image-marker" aria-hidden="true">
                <span />
                <span />
              </div>
            </div>
            <div className="hero-floating-card">
              <div className="connection-mark" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
              <div>
                <span>CONNECTED BY DESIGN</span>
                <p>
                  Everything in its place.
                  <br />
                  Every system in sync.
                </p>
              </div>
              <MoveUpRight size={23} strokeWidth={1.4} />
            </div>
            <span className="hero-side-note">CREATE. DESIGN. ACCELERATE.</span>
          </div>
        </div>
      </section>
      <nav className="service-rail" aria-label="Our five solution areas">
        <div className="shell">
          {serviceAreas.map((s) => (
            <Link key={s.slug} to={s.to}>
              <s.icon size={20} strokeWidth={1.5} />
              <span>{s.short}</span>
              <ArrowUpRight size={15} />
            </Link>
          ))}
        </div>
      </nav>
      <PartnersStrip />
      <SolutionsExplorer />
      <ConnectedWorkplace />
      <section className="section-space approach-section">
        <div className="shell approach-grid">
          <div className="approach-photo">
            <img
              src={heroHome}
              alt="Illustrative technology installation environment"
              width={1100}
              height={900}
              loading="lazy"
            />
            <span className="photo-caption">PLANNED WITH CARE. DELIVERED ON SITE.</span>
          </div>
          <div className="approach-copy">
            <p className="eyebrow">THE MARSEL TECH APPROACH</p>
            <h2>
              Good technology.
              <br />A team that
              <br />
              sees it through.
            </h2>
            <p>
              We bring communication, security, access, IT and AV into one coordinated scope, with
              direct involvement from the first conversation to installation and support.
            </p>
            <div className="principle-list">
              {[
                [
                  "Built around your space",
                  "We start with your site, your workflows and the people using it.",
                ],
                [
                  "The right systems, working together",
                  "Product choices are considered as part of the whole environment.",
                ],
                [
                  "A clear path from plan to handover",
                  "Design, sourcing, installation and support in one relationship.",
                ],
              ].map(([title, desc]) => (
                <div key={title}>
                  <Check size={17} />
                  <div>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/how-we-work" className="text-link">
              Get to know our approach <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section-space application-section">
        <div className="shell">
          <div className="section-top">
            <div>
              <p className="eyebrow">BUILT AROUND YOUR WORLD</p>
              <h2>
                Different spaces.
                <br />
                Shared possibilities.
              </h2>
            </div>
            <p>
              Explore how the right mix of systems can support the way your environment operates.
            </p>
          </div>
          <div className="application-grid">
            {applications.map((a) => (
              <Link to={a.to} key={a.name} className="application-card">
                <div className="application-image">
                  <img
                    src={a.image}
                    alt={`Illustrative application: ${a.name}`}
                    width={900}
                    height={700}
                    loading="lazy"
                  />
                  <span>{a.category}</span>
                  <ArrowUpRight className="application-arrow" />
                </div>
                <h3>{a.name}</h3>
                <p>{a.text}</p>
                <span className="application-tags">{a.tags}</span>
              </Link>
            ))}
          </div>
          <p className="application-disclosure">
            Illustrative applications showing how our solutions can be combined.
          </p>
        </div>
      </section>
      <section className="section-space process-teaser">
        <div className="shell">
          <div className="section-top">
            <div>
              <p className="eyebrow">FROM IDEA TO EVERYDAY</p>
              <h2>A clear way forward.</h2>
            </div>
            <Link to="/how-we-work" className="text-link">
              Our full process <ArrowRight size={18} />
            </Link>
          </div>
          <div className="process-track">
            {deliverySteps.map((s, i) => (
              <div key={s.title}>
                <span className="process-number">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.deliverable}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
