import type { ReactNode } from "react";

interface PageHeroProps {
  image: string;
  alt: string;
  title: ReactNode;
  description?: ReactNode;
  eager?: boolean;
  children?: ReactNode;
  size?: "default" | "large";
}

export function PageHero({
  image,
  alt,
  title,
  description,
  eager = false,
  children,
  size = "default",
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-foreground">
      <img
        src={image}
        alt={alt}
        width={1920}
        height={1088}
        {...(eager ? { fetchPriority: "high" as const } : { loading: "lazy" as const })}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-foreground via-foreground/80 to-foreground/30" />
      <div
        className={
          size === "large"
            ? "mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8 lg:py-40"
            : "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
        }
      >
        <div className="max-w-3xl">
          <h1
            className={
              size === "large"
                ? "text-4xl font-bold tracking-tight text-background sm:text-5xl lg:text-6xl"
                : "text-4xl font-bold tracking-tight text-background sm:text-5xl"
            }
          >
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-lg leading-relaxed text-background/80">{description}</p>
          )}
          {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
        </div>
      </div>
    </section>
  );
}
