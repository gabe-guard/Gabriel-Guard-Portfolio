import { createFileRoute } from "@tanstack/react-router";
import { FadeUp } from "@/components/Parallax";
import { Award, CheckCircle2, Clock } from "lucide-react";

export const Route = createFileRoute("/certifications")({
  component: Certifications,
  head: () => ({
    meta: [
      { title: "Certifications — Gabriel Guard" },
      { name: "description", content: "Professional certifications held and in progress." },
      { property: "og:title", content: "Certifications — Gabriel Guard" },
      { property: "og:description", content: "Autodesk Inventor, OSHA 10, Microsoft Office, Onshape, SolidWorks." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/certifications" }],
  }),
});

type Cert = { name: string; issuer: string; status: "Earned" | "In Progress" };

const certs: Cert[] = [
  { name: "Onshape Associate", issuer: "Onshape", status: "Earned" },
  { name: "Autodesk Inventor", issuer: "Autodesk", status: "Earned" },
  { name: "OSHA 10 — General Industry", issuer: "OSHA", status: "Earned" },
  { name: "Microsoft Office Associate", issuer: "Microsoft (Excel · Word · PowerPoint)", status: "Earned" },
  { name: "Onshape Professional", issuer: "PTC Onshape", status: "In Progress" },
  { name: "SolidWorks Professional", issuer: "Dassault Systèmes", status: "In Progress" },
];

function Certifications() {
  return (
    <section className="container-wide pt-20 pb-24">
      <FadeUp>
        <p className="eyebrow">Index · Certifications</p>
        <h1 className="mt-3 font-display text-6xl sm:text-7xl font-extrabold tracking-tight">
          On the <span className="italic text-primary">record.</span>
        </h1>
<p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Certifications I've earned or am actively working toward.
        </p>
      </FadeUp>

      <ul className="mt-16 border-t border-border">
        {certs.map((c, i) => (
          <FadeUp key={c.name} delay={i * 0.05}>
            <li className="flex items-center justify-between gap-6 py-7 border-b border-border group">
              <div className="flex items-start gap-5">
                <div className="rounded-full bg-secondary p-3 group-hover:bg-accent/30 transition-colors">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">{c.name}</h2>
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
