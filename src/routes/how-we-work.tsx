import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ContactBand } from "@/components/ContactBand";
import { deliverySteps } from "@/data/site";
import heroProcess from "@/assets/hero-process.jpg";
export const Route = createFileRoute("/how-we-work")({
  head: () => ({
    meta: [
      { title: "Our Approach — Marsel Tech, Dubai" },
      {
        name: "description",
        content:
          "Meet Marsel Tech's approach to technology integration: understand, design, source, install and support.",
      },
    ],
  }),
  component: ApproachPage,
});
function ApproachPage() {
  return (
    <>
      <PageHero
        image={heroProcess}
        alt="Illustrative technology planning and installation environment"
        title="From the first plan to what’s next."
        description="A considered approach to technology. A clear path from understanding your space to supporting the systems in it."
        eyebrow="GET TO KNOW MARSEL TECH"
        eager
      >
        <Link to="/contact" className="action">
          Start a conversation <ArrowUpRight size={18} />
        </Link>
      </PageHero>
      <section className="section-space">
        <div className="shell about-intro">
          <div>
            <p className="eyebrow">WHO WE ARE</p>
            <h2>
              Your space.
              <br />
              Our shared focus.
            </h2>
          </div>
          <div>
            <p>
              Marsel Tech is a Dubai-based technology integrator bringing communication, security,
              access, IT and audio visual systems together for business environments.
            </p>
            <p>
              Our role is to understand what your space needs, coordinate the right systems and see
              the work through. We consider the day-to-day experience alongside the equipment behind
              it.
            </p>
          </div>
        </div>
      </section>
      <section className="delivery-section section-space">
        <div className="shell">
          <div className="section-top">
            <div>
              <p className="eyebrow">HOW WE GET THERE</p>
              <h2>
                Clear steps.
                <br />
                Connected thinking.
              </h2>
            </div>
            <p>
              Each stage gives you a clearer picture of the scope, the decisions and what happens
              next.
            </p>
          </div>
          <div className="delivery-list">
            {deliverySteps.map((s, i) => (
              <div key={s.title}>
                <span className="delivery-number">0{i + 1}</span>
                <h3>{s.title}</h3>
                <div>
                  <p>{s.detail}</p>
                  <span className="deliverable">
                    <Check size={13} />
                    {s.deliverable}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="shell expectation-grid">
          <div>
            <p className="eyebrow">WHAT YOU CAN EXPECT</p>
            <h2>Clarity at every stage.</h2>
          </div>
          <div>
            {[
              [
                "A scope you can understand",
                "You know what is included and how the proposed systems fit your requirements.",
              ],
              [
                "Decisions grounded in your environment",
                "Your site, working patterns and budget guide the design and equipment choices.",
              ],
              [
                "A considered handover",
                "Testing, documentation and user guidance help your team make the most of the system.",
              ],
            ].map(([title, body]) => (
              <div key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactBand title="Tell us what needs to work better." />
    </>
  );
}
