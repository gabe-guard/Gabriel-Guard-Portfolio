import frcImg from "@/assets/downpourmain.jpg";
import valorImg from "@/assets/project-valor.jpg";
import umbraImg from "@/assets/project-umbra.jpg";
import nexusImg from "@/assets/project-nexus.jpg";
import piezoImg from "@/assets/project-piezo.jpg";
import cadIsolated from "@/assets/cad-isolated.jpg";
import cadPowertrain from "@/assets/cad-powertrain.jpg";
import dpcad from "@/assets/downpourcad.jpg";
import dpwireframe from "@/assets/downpourwireframe.jpg";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  role: string;
  cover: string;
  summary: string;
  highlights: string[];
  skills: string[];
  gallery: { src: string; caption: string }[];
  cad?: { label: string; src: string }[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "downpour-2026",
    title: "Downpour.",
    tagline: "Design lead for a world-championship competitive robot.",
    category: "Robotics",
    year: "2026",
    role: "Subsystem Design Lead · Driver",
    cover: frcImg,
    summary:
      "I lead subsystem design for FRC Team 6800, a 35-student competitive robotics team. I drive top-down parametric CAD in Onshape, manage Jira workflows for 120+ purchased and fabricated parts, and oversee a 5-person manufacturing pod. I was also selected to drive the robot — undefeated at the Texas District Championship.",
    highlights: [
      "FIRST World Championship Curie Division Winner",
      "FIRST In Texas District Championship Finalist",
      "2× District Event Winner",
      "2× Excellence in Engineering Award",
      "1× Engineering Inspiration Award",
      "1× Industrial Design Award",
    ],
    skills: ["Onshape", "Fusion 360", "VCarve CAM", "Jira", "CNC Router", "Manual Lathe", "Root Cause Analysis"],
    gallery: [
      { src: frcImg, caption: "Competition robot — full assembly" },
      { src: cadPowertrain, caption: "Shooter powertrain — belt + gear stack" },
      { src: cadIsolated, caption: "Shooter — isolated frame view" },
    ],
    cad: [
      { label: "Isolated", src: dpcad },
      { label: "Powertrain", src: dpwireframe },
    ],
  },
  {
    slug: "valor-cad-challenge",
    title: "Valor CAD Challenge.",
    tagline: "An online FTC design challenge built from the ground up.",
    category: "Event · Design",
    year: "2024 — Present",
    role: "Lead Organizer",
    cover: valorImg,
    summary:
      "I organized an online FTC robotics design challenge that drew 117 participants from around the world. I designed and CAD-modeled a mock FTC field, authored a 15-page mock game manual, judged 28 submissions for practicality, and livestreamed the sponsored awards ceremony to 750 viewers.",
    highlights: [
      "117 participants worldwide",
      "15-page mock game manual",
      "28 submissions judged",
      "750-viewer livestream ceremony",
    ],
    skills: ["Onshape", "Event Production", "Technical Writing", "Livestream Direction", "Sponsor Relations"],
    gallery: [
      { src: valorImg, caption: "Mock FTC field render" },
    ],
  },
  {
    slug: "umbra-design",
    title: "Umbra Design LLC.",
    tagline: "A translucent sun visor — concept, company, and product.",
    category: "Product · Entrepreneurship",
    year: "2024 — Present",
    role: "Founder",
    cover: umbraImg,
    summary:
      "I founded Umbra Design LLC to bring a proprietary translucent car sun visor from concept to production. I led a 4-person team through design, fabrication, branding, and a $1,000 fundraising round, and am currently pursuing a utility patent.",
    highlights: [
      "Founded LLC, pursuing utility patent",
      "Built brand identity in Figma",
      "Fundraised $1,000 for marketing & inventory",
      "3D printing, laser cutting, manual assembly",
    ],
    skills: ["Product Design", "Figma", "3D Printing", "Laser Cutting", "Brand Identity", "Fundraising"],
    gallery: [
      { src: umbraImg, caption: "Translucent visor prototype" },
    ],
  },
  {
    slug: "nexus-ai",
    title: "Nexus AI.",
    tagline: "Teaching machine learning with block-based code.",
    category: "Software · Education",
    year: "2023 — Present",
    role: "Co-founder",
    cover: nexusImg,
    summary:
      "Nexus AI is an educational platform that teaches machine learning through block-based coding. I co-founded the project, designed the UI graphics in Figma, and advanced it to the Greater Austin Regional Science and Engineering Fair.",
    highlights: [
      "Advanced to Greater Austin Regional Science & Engineering Fair",
      "Designed full UI system in Figma",
      "Block-based ML learning approach",
    ],
    skills: ["Figma", "UI Design", "Machine Learning", "Education Design"],
    gallery: [
      { src: nexusImg, caption: "Block-based interface concept" },
    ],
  },
  {
    slug: "piezoelectric-research",
    title: "Piezoelectric 3D Printing.",
    tagline: "Cost-effective piezoelectric fabrication through void reduction.",
    category: "Research",
    year: "2024 — Present",
    role: "Independent Researcher",
    cover: piezoImg,
    summary:
      "I'm developing a piezoelectric sensor for structural health monitoring using consumer-grade 3D printers. The work spans custom G-code generation, an accessible electronic poling process, and a Raspberry Pi-based data acquisition system for measuring sensitivity.",
    highlights: [
      "Custom G-code for consumer 3D printers",
      "Accessible electronic poling method",
      "Raspberry Pi DAQ for sensitivity testing",
      "30+ research hours invested",
    ],
    skills: ["G-code", "Raspberry Pi", "DAQ Design", "Material Science", "Research"],
    gallery: [
      { src: piezoImg, caption: "Print process — close detail" },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
