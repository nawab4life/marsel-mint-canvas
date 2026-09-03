import { useCallback, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight, type LucideIcon } from "lucide-react";

export interface HeroSlide {
  image: string;
  alt: string;
  eyebrow: string;
  icon?: LucideIcon;
  title: string;
  highlight?: string;
  description: string;
  primaryCta: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
}

interface HeroSliderProps {
  slides: HeroSlide[];
  interval?: number;
}

export function HeroSlider({ slides, interval = 6000 }: HeroSliderProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (next: number) => setActive((next + slides.length) % slides.length),
    [slides.length],
  );

  useEffect(() => {
    if (paused || slides.length < 2) return;
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), interval);
    return () => clearInterval(id);
  }, [paused, slides.length, interval]);

  return (
    <section
      className="relative isolate overflow-hidden bg-foreground"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="MarselTech solutions"
    >
      {slides.map((slide, index) => (
        <img
          key={slide.image}
          src={slide.image}
          alt={slide.alt}
          width={1920}
          height={1088}
          {...(index === 0
            ? { fetchPriority: "high" as const }
            : { loading: "lazy" as const })}
          aria-hidden={index !== active}
          className={`absolute inset-0 -z-10 h-full w-full object-cover transition-all duration-[1200ms] ease-out ${
            index === active ? "scale-105 opacity-100" : "scale-100 opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-foreground via-foreground/60 to-foreground/15" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-foreground/80 via-foreground/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="mx-auto flex min-h-[70vh] w-full max-w-7xl items-end px-4 pb-24 pt-32 sm:px-6 lg:px-8 lg:pb-28 lg:pt-48">
        {slides.map((slide, index) => {
          const Icon = slide.icon;
          if (index !== active) return null;
          return (
            <div key={slide.eyebrow} className="max-w-2xl animate-fade-in">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-background/90 backdrop-blur-sm">
                {Icon && <Icon className="h-3.5 w-3.5 text-primary" />}
                {slide.eyebrow}
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-background text-balance sm:text-5xl lg:text-6xl">
                {slide.title}
                {slide.highlight && (
                  <>
                    {" "}
                    <span className="text-primary">{slide.highlight}</span>
                  </>
                )}
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-background/80 sm:text-lg">
                {slide.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to={slide.primaryCta.to}
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:gap-3 hover:brightness-110"
                >
                  {slide.primaryCta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                {slide.secondaryCta && (
                  <Link
                    to={slide.secondaryCta.to}
                    className="inline-flex items-center rounded-md border border-background/30 px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-background hover:text-foreground"
                  >
                    {slide.secondaryCta.label}
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="absolute inset-x-0 bottom-6 z-10 mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.eyebrow}
              type="button"
              onClick={() => go(index)}
              aria-label={`Show ${slide.eyebrow}`}
              aria-current={index === active}
              className={`h-1.5 rounded-full transition-all ${
                index === active
                  ? "w-10 bg-primary"
                  : "w-5 bg-background/40 hover:bg-background/70"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => go(active - 1)}
            aria-label="Previous slide"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-background/25 bg-background/10 text-background backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => go(active + 1)}
            aria-label="Next slide"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-background/25 bg-background/10 text-background backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
