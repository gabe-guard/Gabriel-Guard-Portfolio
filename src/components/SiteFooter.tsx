import { Link } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";

const Github = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.77.11 3.06.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.27 5.69.41.36.78 1.06.78 2.14v3.18c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/></svg>
);
const Linkedin = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9.75h4V21H3V9.75ZM9.5 9.75h3.83v1.54h.05c.53-1 1.84-2.06 3.78-2.06 4.04 0 4.79 2.66 4.79 6.12V21H17.9v-4.93c0-1.18-.02-2.7-1.64-2.7-1.65 0-1.9 1.29-1.9 2.62V21H9.5V9.75Z"/></svg>
);

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
            <li className="flex items-center gap-2"><Linkedin className="h-4 w-4 text-accent" /> <a href="https://www.linkedin.com/in/gabriel-guard" target="_blank" rel="noopener noreferrer" className="hover:text-primary">LinkedIn</a></li>
            <li className="flex items-center gap-2"><Github className="h-4 w-4 text-accent" /> <a href="https://github.com/gabe-guard" target="_blank" rel="noopener noreferrer" className="hover:text-primary">GitHub</a></li>
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
