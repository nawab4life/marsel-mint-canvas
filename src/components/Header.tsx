import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { MarselLogo } from "./MarselLogo";
import { serviceAreas } from "@/data/site";
export function Header() {
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const solutionsRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    setOpen(false);
    setSolutionsOpen(false);
  }, [pathname]);
  useEffect(() => {
    function dismiss(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) {
        setSolutionsOpen(false);
        setOpen(false);
      }
    }
    document.addEventListener("pointerdown", dismiss);
    return () => document.removeEventListener("pointerdown", dismiss);
  }, []);
  return (
    <header
      ref={headerRef}
      className="site-header"
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          if (solutionsOpen) {
            setSolutionsOpen(false);
            solutionsRef.current?.focus();
          } else {
            setOpen(false);
            toggleRef.current?.focus();
          }
        }
      }}
    >
      <div className="shell header-inner">
        <Link to="/" aria-label="Marsel Tech home" className="logo-link">
          <MarselLogo />
        </Link>
        <button
          ref={toggleRef}
          className="mobile-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="primary-nav"
          className={`primary-nav ${open ? "nav-open" : ""}`}
          aria-label="Main navigation"
        >
          <Link to="/" aria-current={pathname === "/" ? "page" : undefined} className="nav-link">
            Home
          </Link>
          <div
            className="solutions-nav"
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) setSolutionsOpen(false);
            }}
          >
            <button
              ref={solutionsRef}
              className={`nav-link ${pathname.startsWith("/solutions") ? "nav-current" : ""}`}
              aria-expanded={solutionsOpen}
              aria-controls="solutions-menu"
              onClick={() => setSolutionsOpen(!solutionsOpen)}
            >
              Solutions <ChevronDown size={14} className={solutionsOpen ? "rotate-180" : ""} />
            </button>
            {solutionsOpen && (
              <div id="solutions-menu" className="solutions-menu">
                <Link to="/solutions" className="menu-overview">
                  Explore all solutions <ArrowUpRight size={17} />
                </Link>
                {serviceAreas.map((s) => (
                  <Link key={s.slug} to={s.to}>
                    <s.icon size={18} />
                    <span>{s.name}</span>
                    <ArrowUpRight size={14} />
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            to="/how-we-work"
            aria-current={pathname === "/how-we-work" ? "page" : undefined}
            className="nav-link"
          >
            Our approach
          </Link>
          <Link
            to="/contact"
            aria-current={pathname === "/contact" ? "page" : undefined}
            className="nav-link"
          >
            Contact
          </Link>
          <Link to="/contact" className="action action-small header-cta">
            Let’s talk <ArrowUpRight size={17} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
