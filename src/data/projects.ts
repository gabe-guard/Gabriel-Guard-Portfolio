import type React from "react";
import breakdownImg from "@/assets/breakdown-placeholder.png";

import frcImg from "@/assets/downpourmain.jpg";

import valorImg from "@/assets/project-valor.jpg";
import umbraImg from "@/assets/project-umbra.jpg";
import nexusImg from "@/assets/project-nexus.jpg";
import piezoImg from "@/assets/project-piezo.jpg";
import dpcad from "@/assets/downpourcad.png";
import dpwireframe from "@/assets/downpourwireframe.png";
import dp1 from "@/assets/dp1.jpg";
import dp2 from "@/assets/dp2.jpg";
import dp3 from "@/assets/dp3.jpg";
import dp4 from "@/assets/dp4.jpg";
import dl1 from "@/assets/dl1.jpg";

import dp_fullwire from "@/assets/dp_fullwire.png";
import dp_isowire from "@/assets/dp_isowire.png";
import dp_cnc2 from "@/assets/dp_cnc2.jpg";
import dp_parts from "@/assets/dp_parts.png";


export type RichSegment = string | { text: string; href: string };

/** Transparent image with tweakable CSS placement. */
export type BreakdownImage = {
  src: string;
  alt: string;
  /** Inline CSS to fine-tune position/size, e.g. { right: "-4%", bottom: "-18%", width: "55%" } */
  style?: React.CSSProperties;
};

export type Breakdown = {
  hero: {
    blocks: { heading: string; body: string }[];
    image?: BreakdownImage;
  };
  cards: { heading: string; body: string; image?: BreakdownImage }[];
  lineArt?: BreakdownImage;
};


export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  role: string;
  cover: string;
  summary: string;
  /**
   * Extended summary rendered as a non-bold paragraph below the main summary.
   * Mix plain strings and link objects. Example:
   *   details: [
   *     "I built it in ",
   *     { text: "Onshape", href: "https://onshape.com" },
   *     " over six months.",
   *   ]
   * Strings are concatenated as-is — include leading/trailing spaces yourself.
   */
  details?: RichSegment[];
  highlights: string[];
  skills: string[];
  gallery: { src: string; caption: string }[];
  cad?: { label: string; src: string }[];
  links?: { label: string; href: string }[];
  feature?: { title: string; body: string };
  /** Extra process images shown under the interactive CAD toggle. */
  processShots?: { src: string; caption: string }[];
  breakdown?: Breakdown;


};

export const projects: Project[] = [
  {
    // Downpour
    slug: "downpour-2026",
    title: "Downpour.",
    tagline: "Design lead for a world-championship competitive robot.",
    category: "Robotics",
    year: "2026",
    role: "Subsystem Design Lead · Driver",
    cover: frcImg,
    summary:
      "Downpour was our robot for the 2026 FIRST Robotics Competition game Rebuilt. The robot marked a milestone in our team's history, winning the Curie Division at the World Championship and competing in playoff matches on the Einsteins field. Downpour also featured at the Texas District Championship winning runner-up on its debut. The robot earned the Excellence in Engineering Award and Industrial Design Award.",
    details: [
      "Downpour was designed for a fast paced 3v3 game where robots collect foam balls, called \"fuel\", and score them in a hexagonal goal or \"hub\". As a mechanical design lead, I designed the Shooter Subsystem to launch the fuel into the goal. Iterating off of my previous turreted design, that shot a single stream of fuel, Downpour's shooter was designed to launch volleys of fuel using a full-width drum shooter.",
    ],
    feature: {
      title: "Drum Shooter Design",
      body: "The Shooter Subsystem is made up of three sub-assemblies which I designed using Onshape, including a superstructure, variable hood, and \"feeder\". The superstructure, constructed from a rigid tab-and-slot aluminum assembly, housed much of the robot's electronics including the power switch, radio, and cameras. Additionally, the structure packaged the 5 Kraken x60 motors used to power the shooter. One of the motors, linked to the hood via belts, controlled the pitch of the hood, allowing the robot to adjust its shot angle according to the distance between the robot and the goal. Three more motors powered the aluminum drum flywheel and polycarbonate back-rollers. Coated in rubber grip tape, these rollers minimized slip while maximizing moment of inertia. This helped maintain consistent wheel speed and reduced motor strain as the system worked to reach and maintain its PID targets during fuel launches. The remaining 2 motors were used to feed fuel from the robot's hopper into the shooter, agitating fuel and pulling it through the system.\n\nOnce the design was complete, parts were converted into manufacturing tickets in Jira to be claimed by members of the manufacturing team. All parts were designed with manufacturing in mind, using features such as tab and slot joints with machining and powder coating tolerances accounted for. Modular subsections also allowed us to add more motors or flywheel mass without redesigning the entire assembly. Using Jira, I ordered COTS parts and verified critical dimensions of parts manufactured in-house. Additionally, I oversaw the powdercoating of parts ensuring that each part was painted the correct color to remain true to the original design.\n\nOnce all parts were fabricated, labeled, and verified, I began assembly. Once the subsystem was constructed I worked with the electrical and software teams to integrate the shooter into the rest of the robot. This included providing wiring diagrams and gear ratios to convert motor rotations to mechanical output in code.",
    },
    highlights: [
      "FIRST World Championship Curie Division Winner",
      "FIRST In Texas District Championship Finalist",
      "1× Excellence in Engineering Award",
      "1× Industrial Design Award",
    ],
    skills: ["Onshape", "Fusion 360", "VCarve CAM", "Jira", "CNC Router", "Manual Lathe", "Root Cause Analysis"],
    gallery: [
      { src: dp1, caption: "World Finals" },
      { src: dp2, caption: "World Championship" },
      { src: dp3, caption: "State Championship" },
      { src: dp4, caption: "A volley of 'fuel'" },
    ],
    cad: [
      { label: "Isolated", src: dp_fullwire },
      { label: "Powertrain", src: dp_isowire },
    ],
    links: [
      { label: "CAD Release", href: "https://www.chiefdelphi.com/t/frc-6800-valor-2026-robot-cad-release/520715" },
      { label: "Behind the Bumpers", href: "https://www.youtube.com/watch?v=mPNj9xn-3dk" },
      { label: "Worlds Finals", href: "https://www.youtube.com/watch?v=8blsQjuCjso" },
    ],
    processShots: [
      { src: dp_cnc2, caption: "Alumnium shooter parts machined on Laguna IQ CNC" },
      { src: dp_parts, caption: "Post-processed and sandblasted parts prepared for powdercoating" },
    ],
  },

  {
    //Drizzle
    slug: "drizzle-2026",
    title: "Drizzle.",
    tagline: "Design lead for 400 degree turreted ball launcher.",
    category: "Robotics",
    year: "2026",
    role: "Subsystem Design Lead · Driver",
    cover: frcImg,
    summary:
      "Drizzle was our first robot for the 2026 FIRST Robotics Competition game Rebuilt. The robot debuted at the FIT Space City District Event winning the competition and earning the Excellence in Engineering Award. The robot later won the FIT Manor District Event and was awarded the Engineering Inspiration Award.",
    details: [
      "Similar to our second robot Downpour, Drizzle was designed for a fast paced 3v3 game where robots collect foam balls, called \"fuel\", and score them in a hexagonal goal or \"hub\". As a mechanical design lead, I designed the Turret and Shooter Subsystems to launch the fuel into the goal from anywhere on the field. Using a turret and adjustable hood, I was able to design a ball launcher that could shoot from any distance both stationary and while moving.",
    ],
    feature: {
      title: "Turret Design",
      body: "The Turret Subsystem was made up of a rotating turret, compact shooter, and adjustable hood which I designed using Onshape. The turret was limited to roughly 400 degrees of rotation and used bi-directional cable chain to route wiring between the rotating and stationary sections. The turret rings were designed around a 7 inch diameter bearing and required precise machining, tapping, and heat shrinking to assemble the components together. The compact packaging of the turret and shooter mechanism allowed the shooter to rotate without taking up unnecessary space on the robot. The hood used a cycloidal drive to provide torque and precision required to adjust the launch angle.\n\nPackaging was the main constraint throughout the design. The turret has to fit the bearing, drive system, shooter, hood, motors, and cable chain within a limited footprint while maintaining enough clearance for the full range of motion. I designed the turret rings and mounting interfaces around the manufacturing process, accounting for machining tolerances and the fit between the bearing and surrounding components so the turret could be assembled and serviced without removing the entire mechanism.\n\nOnce the design was complete, I worked with the manufacturing team to machine and assemble the turret components. The rings required precision machining and tapping, while the bearing interfaces used heat fitting to achieve the required fit. After fabrication, I assembled the turret and shooter and worked with the electrical and software teams to integrate the rotating mechanism, including routing the wiring through the cable chain and providing the mechanical details needed to control the turret and hood.",
    },
    processShots: [
      { src: breakdownImg, caption: "Placeholder — turret ring machining." },
      { src: breakdownImg, caption: "Placeholder — cycloidal hood drive." },
    ],


    highlights: [
      "2× District Event Winner",
      "2× Excellence in Engineering Award",
      "1× Engineering Inspiration Award",
    ],
    skills: ["Onshape", "Fusion 360", "VCarve CAM", "Jira", "CNC Router", "Manual Lathe", "Root Cause Analysis"],
    gallery: [
      { src: frcImg, caption: "Competition robot — full assembly" },
    ],
    cad: [
      { label: "Isolated", src: dpcad },
      { label: "Powertrain", src: dpwireframe },
    ],
    links: [
      { label: "Onshape CAD", href: "https://onshape.com" },
      { label: "Technical Write-up", href: "https://onshape.com" },
      { label: "Build Video", href: "https://onshape.com" },
    ],
  },
  {
    //Deadlock
    slug: "deadlock-2025",
    title: "Deadlock.",
    tagline: "Design lead for climb latching mechanism.",
    category: "Robotics",
    year: "2025",
    role: "Subsystem Design Lead · Driver",
    cover: dl1,
    summary:
      "For Deadlock I designed the climb pivot mechanism that connected the climber to the robot. The design needed to handle repeated impacts while remaining compact and easy to manufacture. The final mechanism provided the strength needed for reliable climbs throughout the season.",
    details: [
      "Deadlock won the Tomball District Event, the Manor District Event, the FIRST in Texas State Championship, and reached the Division Finals at the FIRST Championship. It finished with a fifty nine and ten official record and became the most successful robot in team history before Downpour.",
    ],
    feature: {
      title: "Climb Mechanism",
      body: "The pivot was designed to transfer large climbing loads into the robot frame while minimizing weight. A simple design reduced manufacturing time and improved reliability during repeated climbing cycles. The focus was durability instead of unnecessary complexity.",
    },
    highlights: [
      "2× District Event Winner",
      "2× Excellence in Engineering Award",
      "1× Engineering Inspiration Award",
    ],
    skills: ["Onshape", "Fusion 360", "VCarve CAM", "Jira", "CNC Router", "Manual Lathe", "Root Cause Analysis"],
    gallery: [
      { src: dl1, caption: "Competition robot — full assembly" },
    ],
    cad: [
      { label: "Isolated", src: dpcad },
      { label: "Powertrain", src: dpwireframe },
    ],
    links: [
      { label: "Onshape CAD", href: "https://onshape.com" },
      { label: "Technical Write-up", href: "https://onshape.com" },
      { label: "Build Video", href: "https://onshape.com" },
    ],
  },
  {
    //Flatline
    slug: "flatline-2024",
    title: "Flatline.",
    tagline: "Design lead for pivoting disk launcher.",
    category: "Robotics",
    year: "2024",
    role: "Subsystem Design Lead",
    cover: frcImg,
    summary:
      "I designed Flatline's complete shooter along with its pivot mechanism. The entire assembly was developed from scratch with the goal of creating a compact system that could score from multiple locations while remaining easy to tune throughout the season.",
    details: [
      "Flatline established many of the engineering standards that carried into later robots. The robot performed consistently throughout the season and became the starting point for several future shooter designs.",
    ],
    feature: {
      title: "Double Sided Shooter",
      body: "One of the defining features of the shooter was its ability to score from either side, giving the robot more options when navigating defense. The wheels applied controlled spin to stabilize the game piece in flight and improve shot consistency. A built in chain tensioning system allowed quick adjustments between matches without disassembling the mechanism.",
    },
    highlights: [
      "2× District Event Winner",
      "2× Excellence in Engineering Award",
      "1× Engineering Inspiration Award",
    ],
    skills: ["Onshape", "Fusion 360", "VCarve CAM", "Jira", "CNC Router", "Manual Lathe", "Root Cause Analysis"],
    gallery: [
      { src: frcImg, caption: "Competition robot — full assembly" },
    ],
    cad: [
      { label: "Isolated", src: dpcad },
      { label: "Powertrain", src: dpwireframe },
    ],
    links: [
      { label: "Onshape CAD", href: "https://onshape.com" },
      { label: "Technical Write-up", href: "https://onshape.com" },
      { label: "Build Video", href: "https://onshape.com" },
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
      "The Valor CAD Challenge was an online engineering competition that I co organized to give students around the world a realistic robotics design experience outside of the normal competition season. Participants completed engineering work under deadlines and presented their solutions to a panel of experienced judges.",
    details: [
      "Over roughly fifty hours I helped create nearly every part of the competition. I designed the full field and game elements in Onshape, wrote the game manual and rules, created the branding in Figma, built presentation material in Canva, managed communication through Discord, secured three hundred dollars in sponsorships from Studica and goBILDA, coordinated judging with students from teams across the country, and helped run the final livestream. The challenge received twenty eight submissions from more than sixty students who collectively spent over one thousand hours designing their robots, and the awards livestream reached more than seventeen hundred viewers while distributing three hundred dollars in sponsored prizes.",
    ],
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
    links: [
      { label: "Onshape CAD", href: "https://onshape.com" },
      { label: "Technical Write-up", href: "https://onshape.com" },
      { label: "Build Video", href: "https://onshape.com" },
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
      "Umbra is a transparent vehicle sun visor that improves visibility while reducing glare during sunrise and sunset. Every component was designed in Onshape before being manufactured using 3D printing and laser cutting. The project gave me experience designing a product that could move beyond a prototype and toward production through our own LLC.",
    details: [
      "The idea came from everyday driving. Traditional sun visors often block the road instead of just the sunlight. I wanted a better solution that preserved visibility while still reducing glare. Since then I have refined the design through multiple prototypes, tested manufacturing methods, and prepared the product for its first production run.",
    ],
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
    links: [
      { label: "Onshape CAD", href: "https://onshape.com" },
      { label: "Technical Write-up", href: "https://onshape.com" },
      { label: "Build Video", href: "https://onshape.com" },
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
    links: [
      { label: "Onshape CAD", href: "https://onshape.com" },
      { label: "Technical Write-up", href: "https://onshape.com" },
      { label: "Build Video", href: "https://onshape.com" },
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
    links: [
      { label: "Onshape CAD", href: "https://onshape.com" },
      { label: "Technical Write-up", href: "https://onshape.com" },
      { label: "Build Video", href: "https://onshape.com" },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
