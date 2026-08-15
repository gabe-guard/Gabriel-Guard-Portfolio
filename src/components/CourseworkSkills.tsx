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

export function CourseworkSkills() {
  return (
    <section id="coursework" className="container-wide scroll-mt-24 py-16">
      <FadeUp>
        <p className="eyebrow">Coursework & Skills · 02</p>
        <h2 className="mt-2 font-display text-4xl sm:text-5xl font-extrabold tracking-tight max-w-3xl">
          What I'm studying, and what I can <span className="italic text-primary">build with it.</span>
        </h2>
      </FadeUp>

      <div className="mt-10 grid gap-6 lg:grid-cols-12">
        <FadeUp delay={0.05} className="lg:col-span-7">
          <div className="rounded-lg border border-border bg-card p-6">
            <p className="eyebrow">Relevant coursework</p>
            <div className="mt-4 grid gap-x-8 sm:grid-cols-2">
              {courses.map((c) => (
                <div
                  key={c.code}
                  className="border-b border-border py-2.5 last:border-b-0"
                >
                  <p className="font-display text-sm font-bold tracking-tight">{c.code}</p>
                  <p className="text-[0.8rem] leading-snug text-muted-foreground">{c.name}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        <div className="lg:col-span-5 grid gap-4">
          {classProjects.map((p, i) => (
            <FadeUp key={p.title} delay={0.08 + i * 0.06}>
              <article className="rounded-lg border border-border bg-surface p-5 hover-lift">
                <p className="text-[0.65rem] uppercase tracking-[0.2em] text-accent font-semibold">
                  {p.code} · {p.course}
                </p>
                <h3 className="mt-1.5 font-display text-lg font-bold tracking-tight">{p.title}</h3>
                <p className="mt-1.5 text-[0.82rem] leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>

      <FadeUp delay={0.05}>
        <p className="eyebrow mt-14">Skills</p>
      </FadeUp>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {skillGroups.map((g, i) => (
          <FadeUp key={g.title} delay={0.06 * i}>
            <div className="h-full rounded-lg border border-border bg-card p-5">
              <h3 className="font-display text-lg font-bold tracking-tight">{g.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {g.items.map((s) => (
                  <li
                    key={s}
                    className="rounded-full bg-secondary px-3 py-1 text-[0.72rem] font-medium text-secondary-foreground"
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
