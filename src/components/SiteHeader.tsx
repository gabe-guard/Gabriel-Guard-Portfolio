import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/", hash: "coursework", label: "Coursework" },
  { to: "/", hash: "skills", label: "Skills" },
  { to: "/", hash: "certifications", label: "Certifications" },
  { to: "/", hash: "connect", label: "Connect" },
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
      className={`sticky top-0 z-50 border-b border-border transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-background/95" : "bg-background"
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
              className="border-b border-transparent px-2.5 py-1.5 font-interface text-[0.62rem] uppercase tracking-[0.04em] text-muted-foreground hover:border-primary hover:text-primary transition-colors"
              activeOptions={{ exact: item.to === "/", includeHash: true }}
              activeProps={{
                className:
                  "border-b border-primary px-2.5 py-1.5 font-interface text-[0.62rem] uppercase tracking-[0.04em] font-medium text-primary",
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
