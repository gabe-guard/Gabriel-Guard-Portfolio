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

export type RichSegment = string | { text: string; href: string };

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
  contribution?: string;
  accomplishments?: string;
  feature?: { title: string; body: string };
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
      "I lead subsystem design for FRC Team 6800, a 35-student competitive robotics team. I drive top-down parametric CAD in Onshape, manage Jira workflows for 120+ purchased and fabricated parts, and oversee a 5-person manufacturing pod. I was also selected to drive the robot — undefeated at the Texas District Championship.",
    details: [
      "Beyond the headline numbers, Downpour was an exercise in disciplined iteration. Every subsystem started as a top-down parametric sketch in ",
      { text: "Onshape", href: "https://onshape.com" },
      ", which let the team branch experimental geometry without breaking the master assembly. This is placeholder copy — swap it for the real story of the build, the failures, the late nights, and the moments that made it click.",
    ],
    contribution:
      "I led the design of Downpour's entire drum shooter assembly from the first CAD model to the final competition robot. This included the drum shooter, feeder rollers, adjustable hood, camera mounts, radio mount, switch mount, and motor packaging. I also designed lightened frame components, managed manufacturing through Jira, created CAM for router parts, and helped oversee routing, lathe work, sandblasting, powder coating, and final assembly. Throughout the season I made small improvements to hood geometry and compression to improve consistency while keeping the original design intact.",
    accomplishments:
      "Downpour became the most successful robot in team history. The robot won the Curie Division at the FIRST Championship and advanced to Einstein. Earlier in the season it won multiple district events and helped Team 6800 finish as FIRST in Texas State Champions. Downpour finished the season with more than sixty official match wins and established Valor as one of the top teams in the world.",
    feature: {
      title: "Drum Shooter Design",
      body: "The shooter was built around a compact drum style design powered by three Kraken X60 motors with two additional Kraken motors driving the feeder. The adjustable hood traveled through about eighty degrees using a high reduction gearbox, allowing accurate control over shot trajectory from different locations on the field. A large focus of the design was packaging. Every motor, sensor, and electrical component fit inside a small footprint while remaining easy to service between matches. The design also emphasized rigidity to maintain shot consistency throughout a demanding competition season.",
    },
    highlights: [
      "FIRST World Championship Curie Division Winner",
      "FIRST In Texas District Championship Finalist",
      "1× Excellence in Engineering Award",
      "1× Industrial Design Award",
    ],
    skills: ["Onshape", "Fusion 360", "VCarve CAM", "Jira", "CNC Router", "Manual Lathe", "Root Cause Analysis"],
    gallery: [
      { src: dp1, caption: "Starting position" },
      { src: dp2, caption: "World Championship" },
      { src: dp3, caption: "State Championship" },
      { src: dp4, caption: "A volley of 'fuel'" },
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
    //Drizzle
    slug: "drizzle-2026",
    title: "Drizzle.",
    tagline: "Design lead for 400 degree turreted ball launcher.",
    category: "Robotics",
    year: "2026",
    role: "Subsystem Design Lead · Driver",
    cover: frcImg,
    summary:
      "tbd",
    details: [
      "tbd",
      { text: "link", href: "https://onshape.com" },
      "tbd",
    ],
    contribution:
      "Drizzle was our first robot built for REBUILT and served as the foundation for many ideas used later on Downpour. I designed the turret, compact shooter, and adjustable hood. One of the biggest challenges was fitting everything inside an extremely small package while maintaining strength and reliability. The turret rings held a seven inch bearing and required precise machining, tapping, and heat fitting to achieve the final assembly.",
    accomplishments:
      "Although Drizzle was eventually replaced by Downpour, it proved many of the concepts that carried through the rest of the season. The robot earned district event wins early in competition and demonstrated the value of the turret architecture before the team shifted toward a new robot design.",
    feature: {
      title: "Turret Design",
      body: "The turret rotated through roughly four hundred degrees while routing every wire through a large cable chain to prevent tangling. The hood was driven by a cycloidal gearbox that provided the torque and precision needed for accurate adjustment. Keeping the mechanism compact was the highest priority. Every component was designed to maximize space without sacrificing strength or serviceability.",
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
    //Deadlock
    slug: "deadlock-2025",
    title: "Deadlock.",
    tagline: "Design lead for climb latching mechanism.",
    category: "Robotics",
    year: "2025",
    role: "Subsystem Design Lead · Driver",
    cover: dl1,
    summary:
      "tbd",
    details: [
      "tbd",
      { text: "link", href: "https://onshape.com" },
      "tbd",
    ],
    contribution:
      "For Deadlock I designed the climb pivot mechanism that connected the climber to the robot. The design needed to handle repeated impacts while remaining compact and easy to manufacture. The final mechanism provided the strength needed for reliable climbs throughout the season.",
    accomplishments:
      "Deadlock won the Tomball District Event, the Manor District Event, the FIRST in Texas State Championship, and reached the Division Finals at the FIRST Championship. It finished with a fifty nine and ten official record and became the most successful robot in team history before Downpour.",
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
      "tbd",
    details: [
      "tbd",
      { text: "link", href: "https://onshape.com" },
      "tbd",
    ],
    contribution:
      "I designed Flatline's complete shooter along with its pivot mechanism. The entire assembly was developed from scratch with the goal of creating a compact system that could score from multiple locations while remaining easy to tune throughout the season.",
    accomplishments:
      "Flatline established many of the engineering standards that carried into later robots. The robot performed consistently throughout the season and became the starting point for several future shooter designs.",
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
    contribution:
      "Over roughly fifty hours I helped create nearly every part of the competition. I designed the full field and game elements in Onshape, wrote the game manual and rules, created the branding in Figma, built presentation material in Canva, managed communication through Discord, secured three hundred dollars in sponsorships from Studica and goBILDA, coordinated judging with students from teams across the country, and helped run the final livestream. The experience taught me how much planning and coordination goes into running an engineering competition beyond simply designing a robot.",
    accomplishments:
      "The challenge received twenty eight submissions from more than sixty students who collectively spent over one thousand hours designing their robots. The awards livestream reached more than seventeen hundred viewers and distributed three hundred dollars in sponsored prizes.",
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
    contribution:
      "The idea came from everyday driving. Traditional sun visors often block the road instead of just the sunlight. I wanted a better solution that preserved visibility while still reducing glare. Since then I have refined the design through multiple prototypes, tested manufacturing methods, and prepared the product for its first production run.",
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
