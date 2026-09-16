import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { ContactBand } from "@/components/ContactBand";
import { serviceAreas } from "@/data/site";
export const Route = createFileRoute("/solutions/")({
  head: () => ({
    meta: [
      { title: "Technology Solutions in Dubai — Marsel Tech" },
      {
        name: "description",
        content:
          "Explore communication, security, access control, IT and audio visual solutions designed and installed by Marsel Tech in Dubai.",
      },
    ],
  }),
  component: SolutionsPage,
});
function SolutionsPage() {
  return (
    <>
      <section className="solutions-intro">
        <div className="shell">
          <p className="eyebrow">OUR AREAS OF EXPERTISE</p>
          <div>
            <h1>
              Five disciplines.
              <br />
              <span>One connected vision.</span>
            </h1>
            <p>
              Technology works best when every part belongs to the same plan. Explore what we can
              bring to your space.
            </p>
          </div>
        </div>
      </section>
      <section className="solution-directory">
        <div className="shell">
          {serviceAreas.map((s, i) => (
            <article className="directory-entry" key={s.slug}>
              <div className="directory-photo">
                <img
                  src={s.image}
                  alt={s.alt}
                  width={1100}
                  height={720}
                  loading={i === 0 ? "eager" : "lazy"}
                />
                <span>
                  0{i + 1} / {s.code}
                </span>
              </div>
              <div className="directory-copy">
                <p className="eyebrow">{s.name}</p>
                <h2>{s.headline}</h2>
                <p>{s.description}</p>
                <Link to={s.to} className="action action-outline">
                  Explore {s.short.toLowerCase()} <ArrowUpRight size={18} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <ContactBand title="One room or an entire building. Let’s find your starting point." />
    </>
  );
}
