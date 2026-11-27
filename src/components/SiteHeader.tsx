import { Link } from "@tanstack/react-router";
import { useState } from "react";
import "@/home.css";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="portfolio-navigation sticky top-0 z-50">
      <nav id="site-nav" aria-label="Primary navigation" className={open ? "menu-open" : undefined}
        onKeyDown={(event) => { if (event.key === "Escape") close(); }}>
        <Link className="nav-logo" to="/" aria-label="Gabriel Guard home" onClick={close}>GG<span>Gabriel Guard</span></Link>
        <button className="nav-toggle" type="button" aria-controls="primary-navigation" aria-expanded={open}
          onClick={() => setOpen(!open)}>Menu <span aria-hidden="true">{open ? "−" : "+"}</span></button>
        <ul className="nav-links" id="primary-navigation">
          <li><Link to="/projects" onClick={close}>Projects</Link></li>
          <li><Link to="/" hash="experience" activeOptions={{ exact: true, includeHash: true }} onClick={close}>Experience</Link></li>
          <li><Link to="/" hash="about" activeOptions={{ exact: true, includeHash: true }} onClick={close}>About</Link></li>
          <li><a href="/GabrielGuardResume.pdf" target="_blank" rel="noopener noreferrer" onClick={close}>Resume</a></li>
        </ul>
      </nav>
    </header>
  );
}
