import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/", hash: "coursework", label: "Coursework" },
  { to: "/", hash: "skills", label: "Skills" },
  { to: "/", hash: "certifications", label: "Certifications" },
  { to: "/", hash: "connect", label: "Connect" },
  { to: "/projects", label: "Projects" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-background/80 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container-wide flex items-center justify-between py-5">
        <Link to="/" className="flex items-baseline gap-3 font-display">
          <span className="text-lg font-extrabold tracking-tight italic">GUARD</span>
          <span className="hidden sm:inline text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
            Portfolio · 2026
          </span>
        </Link>
        <nav className="flex items-center gap-0.5 sm:gap-1">
          {nav.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              hash={item.hash}
              className="px-2.5 py-1.5 text-[0.82rem] font-medium text-muted-foreground hover:text-primary transition-colors rounded-full"
              activeOptions={{ exact: item.to === "/", includeHash: true }}
              activeProps={{
                className:
                  "px-2.5 py-1.5 text-[0.82rem] font-semibold text-primary-foreground bg-primary rounded-full",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
