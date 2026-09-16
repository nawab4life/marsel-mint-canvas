import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";

// Progressive enhancement: content is always visible before JS and without
// animation support. Each element animates once per route entry, not per scroll.
export function SiteMotion() {
  const [paused, setPaused] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  useEffect(() => {
    document.documentElement.dataset["motion"] = paused ? "paused" : "playing";
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!("IntersectionObserver" in window) || !Element.prototype.animate) return;
    const animations = new Set<Animation>();
    let observer: IntersectionObserver | undefined;
    let frame = 0;
    let additions: MutationObserver | undefined;
    const stop = () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
      additions?.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    };
    const start = () => {
      stop();
      if (preference.matches || paused) return;
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
                  { opacity: 0, transform: "translateY(32px)" },
                  { opacity: 1, transform: "translateY(0)" },
                ],
                {
                  duration: 900,
                  delay: Math.min(sequence++, 3) * 90,
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
        const seen = new WeakSet<Element>();
        const register = () =>
          document
            .querySelectorAll(
              "main .partner-card, main .partner-logo-tile, main .partners-intro, main .hero-copy, main .hero-visual, main .page-hero-copy, main .page-hero-image, main .section-top, main .approach-photo, main .approach-copy, main .application-card, main .directory-entry, main .capability-list > div, main .delivery-list > div, main .workplace-model, main .workplace-panel, main .contact-copy, main .contact-form-panel, main .contact-band-inner",
            )
            .forEach((element) => {
              if (!seen.has(element)) {
                seen.add(element);
                observer?.observe(element);
              }
            });
        register();
        additions = new MutationObserver(register);
        const main = document.querySelector("main");
        if (main) additions.observe(main, { childList: true, subtree: true });
      });
    };
    start();
    preference.addEventListener("change", start);
    return () => {
      stop();
      preference.removeEventListener("change", start);
    };
  }, [pathname, paused]);
  return (
    <button
      className="motion-toggle"
      type="button"
      aria-pressed={paused}
      onClick={() => setPaused(!paused)}
      aria-label={paused ? "Resume animations" : "Pause animations"}
    >
      <span aria-hidden="true">{paused ? "▶" : "Ⅱ"}</span>
      {paused ? "Resume motion" : "Pause motion"}
    </button>
  );
}
