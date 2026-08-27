import type { ReactNode } from "react";

interface PageHeroProps {
  image: string;
  alt: string;
  title: ReactNode;
  /** Short one-line kicker. Keep it brief so the image stays visible. */
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
  size = "default",
}: PageHeroProps) {
  return (
    <section className="relative isolate flex overflow-hidden bg-foreground">
      <img
        src={image}
        alt={alt}
        width={1920}
        height={1088}
        {...(eager ? { fetchPriority: "high" as const } : { loading: "lazy" as const })}
        className="absolute inset-0 -z-10 h-full w-full scale-105 object-cover"
      />
      {/* Keep the photo readable but visible: soft bottom-up wash only */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-foreground via-foreground/55 to-foreground/10" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div
        className={
          size === "large"
            ? "mx-auto flex min-h-[70vh] w-full max-w-7xl items-end px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24 lg:pt-48"
            : "mx-auto flex min-h-[46vh] w-full max-w-7xl items-end px-4 pb-12 pt-28 sm:px-6 lg:px-8 lg:pb-16 lg:pt-36"
        }
      >
        <div className="max-w-2xl">
          {eyebrow && (
            <p className="mb-4 inline-flex items-center rounded-full border border-background/20 bg-background/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-background/90 backdrop-blur-sm">
              {eyebrow}
            </p>
          )}
          <h1
            className={
              size === "large"
                ? "text-4xl font-bold tracking-tight text-background text-balance sm:text-5xl lg:text-6xl"
                : "text-4xl font-bold tracking-tight text-background text-balance sm:text-5xl"
            }
          >
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-xl text-base leading-relaxed text-background/80 sm:text-lg">
              {description}
            </p>
          )}
          {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
        </div>
      </div>
    </section>
  );
}
