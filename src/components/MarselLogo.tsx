export function MarselLogo({
  className = "",
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <span className={`brand-logo ${onDark ? "brand-logo-plate" : ""} ${className}`}>
      <img
        src="/brand/marsel-tech-logo.png"
        width={731}
        height={208}
        alt="Marsel Tech — Create. Design. Accelerate."
      />
    </span>
  );
}
