import { Link } from "@tanstack/react-router";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border bg-surface">
      <div className="container-wide py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="font-display text-3xl font-extrabold italic tracking-tight">GABRIEL GUARD</h3>
          <p className="mt-3 max-w-md text-sm text-muted-foreground leading-relaxed">
            Mechanical Engineering @ The University of Texas at Austin. Designer, driver, founder — building things that move.
          </p>
        </div>
        <div>
          <p className="eyebrow mb-3">Reach</p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> <a href="mailto:gcguard1@gmail.com" className="hover:text-primary">gcguard1@gmail.com</a></li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> Austin, TX</li>
            <li className="flex items-center gap-2"><Linkedin className="h-4 w-4 text-accent" /> <a href="#" className="hover:text-primary">LinkedIn</a></li>
            <li className="flex items-center gap-2"><Github className="h-4 w-4 text-accent" /> <a href="#" className="hover:text-primary">GitHub</a></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-3">Pages</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/projects" className="hover:text-primary">Projects</Link></li>
            <li><Link to="/certifications" className="hover:text-primary">Certifications</Link></li>
            <li><Link to="/connect" className="hover:text-primary">Connect</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-wide py-5 flex justify-between text-xs text-muted-foreground">
          <span>© 2026 Gabriel Guard</span>
          <span>Designed & built by Gabriel.</span>
        </div>
      </div>
    </footer>
  );
}
