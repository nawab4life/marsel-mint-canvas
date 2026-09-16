import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FaqSection } from "@/components/FaqSection";
import { ContactBand } from "@/components/ContactBand";
import { ConnectedWorkplace } from "@/components/ConnectedWorkplace";
import type { Faq, SubService } from "@/data/solutions";
import { serviceAreas } from "@/data/site";
interface SolutionDetailPageProps {
  title: string;
  heroTitle: string;
  heroDescription: string;
  image: string;
  imageAlt: string;
  intro: string;
  capabilitiesTitle: string;
  capabilitiesDescription: string;
  subServices: Pick<SubService, "slug" | "title" | "description">[];
  scopeTitle: string;
  scopeDescription: string;
  scope: string[];
  industries: string[];
  faqTitle: string;
  faqs: Faq[];
}
export function SolutionDetailPage({
  title,
  heroTitle,
  heroDescription,
  image,
  imageAlt,
  intro,
  capabilitiesTitle,
  capabilitiesDescription,
  subServices,
  scopeTitle,
  scopeDescription,
  scope,
  industries,
  faqTitle,
  faqs,
}: SolutionDetailPageProps) {
  const service =
    serviceAreas.find((s) => title.toLowerCase().startsWith(s.slug)) || serviceAreas[0];
  return (
    <>
      <PageHero
        image={image}
        alt={imageAlt}
        eager
        eyebrow={`${service.code} / CONNECTED BY DESIGN`}
        title={heroTitle}
        description={heroDescription}
      >
        <Link to="/contact" className="action">
          Discuss your project <ArrowUpRight size={18} />
        </Link>
        <a href="#capabilities" className="text-link">
          Explore capabilities <ArrowDown size={16} />
        </a>
      </PageHero>
      <nav className="detail-nav" aria-label="Solution page sections">
        <div className="shell">
          <span>{service.short}</span>
          <a href="#capabilities">Capabilities</a>
          <a href="#connected-workplace">In your space</a>
          <a href="#scope">Our scope</a>
          <a href="#questions">FAQs</a>
        </div>
      </nav>
      <section className="section-space" id="capabilities">
        <div className="shell">
          <div className="detail-intro">
            <p className="eyebrow">THE BIGGER PICTURE</p>
            <p>{intro}</p>
          </div>
          <div className="capabilities-heading">
            <h2>{capabilitiesTitle}</h2>
            <p>{capabilitiesDescription}</p>
          </div>
          <div className="capability-list">
            {subServices.map((s, i) => (
              <div key={s.slug}>
                <span>0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <Check size={18} aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <ConnectedWorkplace
        key={service.slug}
        initial={service.slug}
        heading={`${service.short}, in your space.`}
      />
      <section className="section-space scope-section" id="scope">
        <div className="shell scope-grid">
          <div>
            <p className="eyebrow">FROM SURVEY TO SUPPORT</p>
            <h2>{scopeTitle}</h2>
            <p>{scopeDescription}</p>
            <Link to="/contact" className="action action-dark">
              Request a site survey <ArrowUpRight size={18} />
            </Link>
          </div>
          <ul>
            {scope.map((item) => (
              <li key={item}>
                <Check size={17} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="sector-band">
        <div className="shell">
          <p className="eyebrow">DESIGNED FOR YOUR ENVIRONMENT</p>
          <div>
            {industries.map((i) => (
              <span key={i}>{i}</span>
            ))}
          </div>
        </div>
      </section>
      <div id="questions">
        <FaqSection faqs={faqs} title={faqTitle} />
      </div>
      <ContactBand title={`Let’s plan your ${service.short.toLowerCase()} solution.`} />
    </>
  );
}
