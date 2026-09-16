import { partnerLogos } from "@/data/site";
export function PartnersStrip() {
  if (!partnerLogos.length) return null;
  return (
    <section className="partner-strip" aria-label="Technology partners">
      <div className="shell">
        <p className="eyebrow">OUR TECHNOLOGY PARTNERS</p>
        <div className="partner-logos">
          {partnerLogos.map((p) => (
            <img key={p.name} src={p.src} alt={p.name} width={180} height={80} loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  );
}
