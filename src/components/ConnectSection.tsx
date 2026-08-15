import { FadeUp } from "@/components/Parallax";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

const channels = [
  { label: "Phone", value: "+1 (737) 781-9053", href: "tel:+17377819053", external: false },
  { label: "LinkedIn", value: "/in/gabriel-guard", href: "https://www.linkedin.com/in/gabriel-guard", external: true },
  { label: "GitHub", value: "@gabe-guard", href: "https://github.com/gabe-guard", external: true },
  { label: "Location", value: "Austin, TX · UT Austin", href: "#connect", external: false },
];

export function ConnectSection() {
  return (
    <section id="connect" className="container-wide scroll-mt-24 py-24">
      <FadeUp>
        <p className="eyebrow">Connect · 05</p>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
          Let's <span className="italic text-primary">build.</span>
        </h2>
        <p className="mt-5 max-w-2xl text-base text-muted-foreground leading-relaxed">
          I'm always open to research roles, internships, design collaborations, and a good engineering conversation. The fastest way to reach me is email.
        </p>
      </FadeUp>

      <div className="mt-12 grid gap-8 md:grid-cols-12">
        <FadeUp delay={0.05} className="md:col-span-7">
          <a
            href="mailto:gcguard1@gmail.com"
            className="group block h-full rounded-2xl bg-primary p-9 sm:p-12 text-primary-foreground hover-lift relative overflow-hidden"
          >
            <Mail className="h-7 w-7 text-accent" />
            <h3 className="mt-6 font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
              gcguard1@gmail.com
            </h3>
            <p className="mt-3 text-sm text-primary-foreground/70 max-w-sm">
              Write me anything — internships, research, product ideas, robotics questions, or just to say hi.
            </p>
            <ArrowUpRight className="absolute top-8 right-8 h-7 w-7 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </FadeUp>

        <FadeUp delay={0.1} className="md:col-span-5">
          <div className="rounded-2xl border border-border bg-card p-7">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-accent" />
              <p className="font-display text-lg font-bold">Austin, Texas</p>
            </div>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Based in Austin and headed to the UT Austin campus this fall for mechanical engineering.
            </p>
          </div>

          <ul className="mt-5 border-t border-border">
            {channels.map((c) => (
              <li key={c.label} className="border-b border-border">
                <a
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-center justify-between py-3.5 group"
                >
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold text-muted-foreground">
                    {c.label}
                  </span>
                  <span className="text-sm font-medium group-hover:text-primary transition-colors">
                    {c.value}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </FadeUp>
      </div>
    </section>
  );
}
