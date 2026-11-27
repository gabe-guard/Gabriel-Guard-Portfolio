import { Link } from "@tanstack/react-router";
import { ArrowUp } from "lucide-react";

export function SiteFooter() {
  return (
    <div className="portfolio-navigation">
      <footer className="site-footer">
        <span>Gabriel Guard</span>
        <div>
          <Link to="/" hash="coursework">Coursework</Link>
          <Link to="/" hash="skills">Skills</Link>
          <Link to="/" hash="hero">Back to top <ArrowUp className="ui-icon" /></Link>
        </div>
      </footer>
    </div>
  );
}
