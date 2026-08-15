import { FadeUp } from "@/components/Parallax";

type Course = { code: string; name: string };
type ClassProject = { code: string; course: string; title: string; description: string };
type SkillGroup = { title: string; items: string[] };

const courses: Course[] = [
  { code: "ME 302", name: "Introduction to Engineering Design & Graphics" },
  { code: "M 408C", name: "Differential & Integral Calculus" },
  { code: "PHY 303K", name: "Engineering Physics I — Mechanics" },
  { code: "CH 301", name: "Principles of Chemistry I" },
  { code: "ME 205", name: "Introduction to Mechanical Engineering" },
  { code: "EM 306", name: "Statics" },
  { code: "ME 209", name: "Engineering Computation" },
  { code: "RHE 306", name: "Rhetoric & Writing" },
];

const classProjects: ClassProject[] = [
  {
    code: "ME 302",
    course: "Engineering Design & Graphics",
    title: "Parametric Assembly Study",
    description:
      "Placeholder — describe the CAD assembly, tolerancing approach, and drawing package produced for this course.",
  },
  {
    code: "ME 205",
    course: "Introduction to Mechanical Engineering",
    title: "Team Design Challenge",
    description:
      "Placeholder — describe the problem statement, your role on the team, and the final prototype outcome.",
  },
  {
    code: "ME 209",
    course: "Engineering Computation",
    title: "Numerical Analysis Tool",
    description:
      "Placeholder — describe the script or model you built and what engineering problem it solved.",
  },
];

const skillGroups: SkillGroup[] = [
  {
    title: "Design & Analysis",
    items: ["Onshape", "SolidWorks", "Fusion 360", "Autodesk Inventor", "FEA / Stress Studies", "GD&T", "Technical Drawings"],
  },
  {
    title: "Software & Data",
    items: ["Python", "MATLAB", "Excel / Sheets", "Java", "Git & GitHub", "Jira", "Figma", "Raspberry Pi"],
  },
  {
    title: "Manufacturing",
    items: ["3-Axis CNC Milling", "Lathe", "FDM & Resin Printing", "Laser Cutting", "Band Saw / Drill Press", "Riveting & Tapping", "Wiring & Soldering"],
  },
];

export function CourseworkSection() {
  return (
    <section id="coursework" className="container-wide scroll-mt-24 py-24">
      <FadeUp>
        <p className="eyebrow">Coursework · 02</p>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl font-extrabold tracking-tight max-w-3xl">
          What I'm studying at <span className="italic text-primary">UT Austin.</span>
        </h2>
      </FadeUp>

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        <FadeUp delay={0.05} className="lg:col-span-1">
          <div className="h-full rounded-2xl border border-border bg-card p-7">
            <p className="eyebrow">Relevant coursework</p>
            <div className="mt-5">
              {courses.map((c) => (
                <div key={c.code} className="border-b border-border py-3 last:border-b-0 last:pb-0">
                  <p className="font-display text-sm font-bold tracking-tight">{c.code}</p>
                  <p className="text-[0.82rem] leading-snug text-muted-foreground">{c.name}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        <div className="lg:col-span-2 grid gap-6">
          {classProjects.map((p, i) => (
            <FadeUp key={p.title} delay={0.08 + i * 0.06}>
              <article className="rounded-2xl border border-border bg-surface p-7 hover-lift">
                <p className="text-[0.68rem] uppercase tracking-[0.2em] text-accent font-semibold">
                  {p.code} · {p.course}
                </p>
                <h3 className="mt-2 font-display text-xl font-bold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground max-w-2xl">
                  {p.description}
                </p>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="container-wide scroll-mt-24 py-24">
      <FadeUp>
        <p className="eyebrow">Skills · 03</p>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl font-extrabold tracking-tight max-w-3xl">
          Tools I can <span className="italic text-primary">build with.</span>
        </h2>
      </FadeUp>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {skillGroups.map((g, i) => (
          <FadeUp key={g.title} delay={0.06 * i}>
            <div className="h-full rounded-2xl border border-border bg-card p-7">
              <h3 className="font-display text-xl font-bold tracking-tight">{g.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li
                    key={s}
                    className="rounded-full bg-secondary px-3.5 py-1.5 text-[0.75rem] font-medium text-secondary-foreground"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
