import type { ReactNode } from "react";
interface PageHeroProps {
  image: string;
  alt: string;
  title: ReactNode;
  description?: ReactNode;
  eyebrow?: string;
  eager?: boolean;
  children?: ReactNode;
  size?: "default" | "large";
}
export function PageHero({
  image,
  alt,
  title,
  description,
  eyebrow,
  eager = false,
  children,
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="shell page-hero-grid">
        <div className="page-hero-copy">
          <p className="eyebrow">{eyebrow || "MARSEL TECH / DUBAI"}</p>
          <h1>{title}</h1>
          {description && <p>{description}</p>}
          {children && <div className="page-hero-actions">{children}</div>}
        </div>
        <div className="page-hero-image">
          <img
            src={image}
            alt={alt}
            width={1200}
            height={800}
            {...(eager ? { fetchPriority: "high" as const } : { loading: "lazy" as const })}
          />
          <span className="image-corner" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
