import { FadeUp } from "@/components/Parallax";
import { Award, CheckCircle2, Clock } from "lucide-react";

type Cert = { name: string; issuer: string; status: "Earned" | "In Progress" };

export const certs: Cert[] = [
  { name: "Onshape Associate", issuer: "Onshape", status: "Earned" },
  { name: "Autodesk Inventor", issuer: "Autodesk", status: "Earned" },
  { name: "OSHA 10 — General Industry", issuer: "OSHA", status: "Earned" },
  { name: "Microsoft Office Associate", issuer: "Microsoft (Excel · Word · PowerPoint)", status: "Earned" },
  { name: "Onshape Professional", issuer: "PTC Onshape", status: "In Progress" },
  { name: "SolidWorks Professional", issuer: "Dassault Systèmes", status: "In Progress" },
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="container-wide scroll-mt-24 py-24">
      <FadeUp>
        <p className="eyebrow">Certifications · 04</p>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
          On the <span className="italic text-primary">record.</span>
        </h2>
<p className="mt-5 max-w-2xl text-base text-muted-foreground leading-relaxed">
          Certifications I've earned or am actively working toward.
        </p>
      </FadeUp>

      <ul className="mt-12 border-t border-border">
        {certs.map((c, i) => (
          <FadeUp key={c.name} delay={i * 0.05}>
            <li className="flex items-center justify-between gap-6 py-6 border-b border-border group">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-secondary p-2.5 group-hover:bg-accent/30 transition-colors">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight">{c.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
                </div>
              </div>
              <span
                className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] shrink-0 ${
                  c.status === "Earned"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-primary border border-border"
                }`}
              >
                {c.status === "Earned" ? <CheckCircle2 className="h-3.5 w-3.5" /> : <Clock className="h-3.5 w-3.5" />}
                {c.status}
              </span>
            </li>
          </FadeUp>
        ))}
      </ul>
    </section>
  );
}
