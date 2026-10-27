import { createFileRoute } from "@tanstack/react-router";
import { FadeUp } from "@/components/Parallax";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/connect")({
  component: Connect,
  head: () => ({
    meta: [
      { title: "Connect — Gabriel Guard" },
      { name: "description", content: "Reach Gabriel Guard via email, LinkedIn, or GitHub." },
      { property: "og:title", content: "Connect — Gabriel Guard" },
      { property: "og:description", content: "Email, LinkedIn, GitHub, and more." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/connect" }],
  }),
});

const channels = [
  { label: "Email", value: "gcguard1@gmail.com", href: "mailto:gcguard1@gmail.com", external: false },
  { label: "Phone", value: "+1 (737) 781-9053", href: "tel:+17377819053", external: false },
  { label: "LinkedIn", value: "/in/gabriel-guard", href: "https://www.linkedin.com/in/gabriel-guard", external: true },
  { label: "GitHub", value: "@gabe-guard", href: "https://github.com/gabe-guard", external: true },
  { label: "Location", value: "Austin, TX · UT Austin", href: "#", external: false },
];

function Connect() {
  return (
    <section className="container-wide pt-20 pb-24">
      <FadeUp>
        <p className="eyebrow">Index · Connect</p>
        <h1 className="mt-3 font-display text-6xl sm:text-7xl font-extrabold tracking-tight">
          Let's <span className="italic text-primary">build.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          I'm always open to research roles, internships, design collaborations, and a good engineering conversation. The fastest way to reach me is email.
        </p>
      </FadeUp>

      <div className="mt-16 grid gap-10 md:grid-cols-12">
        <FadeUp delay={0.05} className="md:col-span-7">
          <a
            href="mailto:gcguard1@gmail.com"
            className="group block rounded-3xl bg-primary p-10 sm:p-14 text-primary-foreground hover-lift relative overflow-hidden"
          >
            <Mail className="h-7 w-7 text-accent" />
            <h2 className="mt-6 font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
              gcguard1@gmail.com
            </h2>
            <p className="mt-3 text-sm text-primary-foreground/70 max-w-sm">
              Write me anything — internships, research, product ideas, robotics questions, or just to say hi.
            </p>
            <ArrowUpRight className="absolute top-8 right-8 h-7 w-7 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </FadeUp>

        <FadeUp delay={0.1} className="md:col-span-5">
          <div className="rounded-3xl border border-border bg-card p-8">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-accent" />
              <p className="font-display text-xl font-bold">Austin, Texas</p>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Based in Austin and headed to the UT Austin campus this fall for mechanical engineering.
            </p>
          </div>

          <ul className="mt-6 border-t border-border">
            {channels.slice(1).map((c) => (
              <li key={c.label} className="border-b border-border">
                <a
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-center justify-between py-4 group"
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
