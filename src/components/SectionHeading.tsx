interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`section-heading ${align === "center" ? "heading-center" : ""} ${dark ? "heading-dark" : ""}`}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
