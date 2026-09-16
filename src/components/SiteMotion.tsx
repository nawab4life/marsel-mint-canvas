import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

// Progressive enhancement: content is always visible before JS and without
// animation support. Each element animates once per route entry, not per scroll.
export function SiteMotion() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!("IntersectionObserver" in window) || !Element.prototype.animate) return;
    const animations = new Set<Animation>();
    let observer: IntersectionObserver | undefined;
    let frame = 0;
    const stop = () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    };
    const start = () => {
      stop();
      if (preference.matches) return;
      frame = requestAnimationFrame(() => {
        observer = new IntersectionObserver(
          (entries) => {
            let sequence = 0;
            for (const entry of entries) {
              if (!entry.isIntersecting) continue;
              observer?.unobserve(entry.target);
              // Never animate a control out from under keyboard focus.
              if (entry.target.contains(document.activeElement)) continue;
              const animation = entry.target.animate(
                [
                  { opacity: 0, transform: "translateY(16px)" },
                  { opacity: 1, transform: "translateY(0)" },
                ],
                {
                  duration: 620,
                  delay: Math.min(sequence++, 3) * 45,
                  easing: "cubic-bezier(.22,1,.36,1)",
                  fill: "backwards",
                },
              );
              animations.add(animation);
              animation.onfinish = () => animations.delete(animation);
            }
          },
          { threshold: 0.08 },
        );
        document
          .querySelectorAll(
            "main .hero-copy, main .hero-visual, main .page-hero-copy, main .page-hero-image, main .section-top, main .approach-photo, main .approach-copy, main .application-card, main .directory-entry, main .capability-list > div, main .delivery-list > div, main .workplace-model, main .workplace-panel, main .contact-copy, main .contact-form-panel, main .contact-band-inner",
          )
          .forEach((element) => observer?.observe(element));
      });
    };
    start();
    preference.addEventListener("change", start);
    return () => {
      stop();
      preference.removeEventListener("change", start);
    };
  }, [pathname]);
  return null;
}
