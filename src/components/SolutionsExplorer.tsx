import { useId, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { serviceAreas } from "@/data/site";
export function SolutionsExplorer() {
  const [active, setActive] = useState(0);
  const panelId = useId();
  const service = serviceAreas[active]!;
  return (
    <section className="section-space" id="our-solutions">
      <div className="shell">
        <div className="section-top">
          <div>
            <p className="eyebrow">WHAT WE BRING TO YOUR SPACE</p>
            <h2>
              Every system.
              <br />
              One clear plan.
            </h2>
          </div>
          <p>
            Five areas of expertise, brought together around your business. From a single meeting
            room to an entire workplace.
          </p>
        </div>
        <div className="solutions-explorer">
          <div className="solution-choices" aria-label="Explore our services">
            {serviceAreas.map((s, i) => (
              <button
                key={s.slug}
                className={active === i ? "solution-choice choice-active" : "solution-choice"}
                aria-pressed={active === i}
                aria-controls={panelId}
                onClick={() => setActive(i)}
              >
                <span className="choice-number">0{i + 1}</span>
                <span>{s.name}</span>
                <ArrowUpRight size={22} strokeWidth={1.5} />
              </button>
            ))}
            <Link to="/solutions" className="text-link all-solutions">
              All solutions <ArrowRight size={17} />
            </Link>
          </div>
          <div className="solution-feature" id={panelId} aria-live="polite">
            <img src={service.image} alt={service.alt} width={1100} height={700} loading="lazy" />
            <div className="solution-feature-copy">
              <span className="eyebrow">{service.code} SOLUTIONS</span>
              <h3>{service.headline}</h3>
              <p>{service.description}</p>
              <Link to={service.to} className="text-link">
                Explore this solution <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
