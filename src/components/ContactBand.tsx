import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
export function ContactBand({
  title = "A better-connected space starts with a conversation.",
}: {
  title?: string;
}) {
  return (
    <section className="contact-band">
      <div className="shell contact-band-inner">
        <div>
          <p className="eyebrow">LET’S BUILD WHAT’S NEXT</p>
          <h2>{title}</h2>
        </div>
        <Link to="/contact" className="round-link" aria-label="Discuss your project">
          <ArrowUpRight size={45} strokeWidth={1.3} />
        </Link>
      </div>
    </section>
  );
}
