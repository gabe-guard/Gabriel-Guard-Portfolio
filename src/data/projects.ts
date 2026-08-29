import type React from "react";
import breakdownImg from "@/assets/breakdown-placeholder.png";

import frcImg from "@/assets/downpourmain.jpg";

import drTitle from "@/assets/dr_title.png";
import vccTitle from "@/assets/vcc_title.png";
import dpcad from "@/assets/downpourcad.png";
import dpwireframe from "@/assets/downpourwireframe.png";
import dp1 from "@/assets/dp1.jpg";
import dp2 from "@/assets/dp2.jpg";
import dp3 from "@/assets/dp3.jpg";
import dp4 from "@/assets/dp4.jpg";
import dl1 from "@/assets/dl1.jpg";
import dlTitle2 from "@/assets/dl_title2.png";

import dp_fullwire from "@/assets/dp_fullwire.png";
import dp_isowire from "@/assets/dp_isowire.png";
import dp_cnc2 from "@/assets/dp_cnc2.jpg";
import dp_parts from "@/assets/dp_parts.png";

import swTitle from "@/assets/sw_title.png";
import swWire from "@/assets/sw_wire.png";
import swMaster from "@/assets/sw_master.png";
import swWide from "@/assets/sw_wide.png";
import swUpright from "@/assets/sw_upright.png";
import swMasterGif from "@/assets/sw_master.gif.asset.json";

import vccStackUp from "@/assets/VCC 2025 STACK UP.pdf";

import flTitle from "@/assets/fl_title.png";
import flat1 from "@/assets/flat1.png";
import flat2 from "@/assets/flat2.png";
import flat3 from "@/assets/flat3.png";
import flat5 from "@/assets/flat5.jpg";
import flat6 from "@/assets/flat6.jpg";

import su1 from "@/assets/su1.png";
import su2 from "@/assets/su2.png";
import su3 from "@/assets/su3.png";
import su4 from "@/assets/su4.png";


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
    /** Image rendered below the text blocks in the left column (e.g. the suspension gif). */
    underText?: BreakdownImage;
  };
/** Optional vertically-stacked captioned images shown on the right of the hero card. */
  stack?: ({ src: string; alt: string; caption: string } | { row: { src: string; alt: string; caption: string }[] })[];
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
  /**
   * Bottom media section: embedded video on the left, downloadable PDF on the right.
   */
  media?: { videoUrl: string; pdf: { src: string; label: string } };

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
    cover: drTitle,
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
      { src: drTitle, caption: "Drizzle — full robot render" },
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
    slug: "solidworks-practice",
    title: "SolidWorks Practice.",
    tagline: "Transitioning from Onshape to SolidWorks",
    category: "Design",
    year: "2025",
    role: "Self Development",
    cover: swTitle,
    summary:
      "  After four years of working primarily in Onshape, I started learning SolidWorks to prepare for future engineering opportunities where it is commonly used. To make the transition more practical, I decided to design an SAE style race car assembly consisting of a chassis and suspension. This gave me a project to work through SolidWorks' workflow while applying mechanical design concepts I already understood from robotics.",
    details: [
      "  I used the chassis and suspension as a way to learn SolidWorks while designing a complete vehicle assembly. I gained experience with SolidWorks' weldments, custom weldment profiles, and 3D sketches while also learning more about suspension geometry and variables such as camber. The project helped me understand how SolidWorks approaches assemblies and design workflows differently from the Onshape workflow I was used to.",
    ],
    feature: {
      title: "Parametric Modeling",
      body: " To begin the chassis, I created a master sketch with a driver model to establish the overall ergonomics of the car. Once the side profile had the proportions I wanted, I added cross sections at the locations where the outer edges of the frame would run. I then added braces between the main tubes to improve the structure while keeping the frame layout simple. \n\nI created a custom weldment profile and used SolidWorks Weldments to turn the 3D sketches into structural tubes. The tubes had to be trimmed using weldment corner treatment and trim tools so that they did not interfere with each other and could be manufactured. I tried to avoid difficult geometries such as four way tube intersections and instead designed the frame around simpler joints that would be easier to fabricate. \n\nAfter establishing the chassis hardpoints, I began working on the suspension geometry. I used this part of the project to learn the major components of a suspension system and how variables such as camber affect handling and cornering. From there, I developed a geometry intended to keep the car level relative to the ground while naturally changing camber as the suspension moved through a turn. \n\nI was not able to finish the suspension master sketch, but I completed a rough version of the geometry and began designing a simple upright. I used the upright to practice SolidWorks part modeling and design for manufacturing, applying the same approach I use in robotics by considering how the part would actually be machined and assembled rather than only focusing on the CAD geometry.",
    },
    highlights: [
      "Independent modeling practice",
      "Learned custom weldmetns profiles",
      "Practiced 3D sketching",
    ],
    skills: ["SolidWorks", "Parametric Modeling", "Assembly Mates"],
    gallery: [
      { src: swTitle, caption: "Placeholder — chassis title render." },
      { src: swWire, caption: "Placeholder — chassis wireframe." },
    ],
    links: [
      { label: "Portfolio Folder", href: "https://onshape.com" },
      { label: "Practice Log", href: "https://onshape.com" },
    ],
    processShots: [
      { src: breakdownImg, caption: "Placeholder — part studio screenshot" },
      { src: breakdownImg, caption: "Placeholder — assembly mate study" },
    ],
    breakdown: {
      hero: {
        blocks: [
{
            heading: "Master Sketch",
            body: "To begin the chassis, I created a master sketch with a driver model to establish the overall ergonomics of the car. Once the side profile had the proportions I wanted, I added cross sections at the locations where the outer edges of the frame would run. I then added braces between the main tubes to improve the structure while keeping the frame layout simple.",
          },
          {
            heading: "Weldments",
            body: "I created a custom weldment profile and used SolidWorks Weldments to turn the 3D sketches into structural tubes. The tubes had to be trimmed using weldment corner treatment and trim tools so that they did not interfere with each other and could be manufactured. I tried to avoid difficult geometries such as four way tube intersections and instead designed the frame around simpler joints that would be easier to fabricate.",
          },
          {
            heading: "Suspension Geometry",
            body: "After establishing the chassis hardpoints, I began working on the suspension geometry. I used this part of the project to learn the major components of a suspension system and how variables such as camber affect handling and cornering. From there, I developed a geometry intended to keep the car level relative to the ground while naturally changing camber as the suspension moved through a turn.",
          },
          {
            heading: "Upright Design",
            body: "I was not able to finish the suspension master sketch, but I completed a rough version of the geometry and began designing a simple upright. I used the upright to practice SolidWorks part modeling and design for manufacturing, applying the same approach I use in robotics by considering how the part would actually be machined and assembled rather than only focusing on the CAD geometry.",
          },
        ],
      },
stack: [
        { src: swMaster, alt: "Chassis master sketch", caption: "Placeholder — master sketch overview." },
        { src: swWide, alt: "Chassis wide view", caption: "Placeholder — wide chassis view." },
        {
          row: [
            { src: swMasterGif.url, alt: "Suspension geometry animation", caption: "Placeholder — dynamic suspension geometry." },
            { src: swUpright, alt: "Upright design", caption: "Placeholder — upright part design." },
          ],
        },
      ],
      cards: [],
    },
  },
  {
    //Deadlock
    slug: "deadlock-2025",
    title: "Deadlock.",
    tagline: "Climber and pivot design for a championship climbing robot.",
    category: "Robotics",
    year: "2025",
    role: "Subsystem Design Lead · Driver",
    cover: dlTitle2,
    summary:
      "Deadlock was our robot for the 2025 FIRST Robotics Competition game REEFSCAPE. The game centered around scoring coral on a reef and ended with robots climbing onto hanging cages. Deadlock won two district events and the Texas District Championship in a clean sweep. The robot also received three Industrial Design Awards and one Autonomous Award. I spent the season designing and fabricating mechanisms for Deadlock and had the opportunity to drive the robot throughout the season.",
    details: [
      "I worked on the climber, which was designed to grapple onto a cage hanging from a chain and lift the entire robot off the ground. I designed the latch mechanism and pivot system around the forces generated during the climb, using motor curves and lever arm calculations to determine the required torque. I also calculated the robot's center of gravity during the climb to make sure the robot would remain balanced once it was hanging from the cage. The final design helped Deadlock rank in the top three robots in the world for climb EPA (Estimated Points Added, a measure of how much a robot's climbing performance contributed to its overall match performance).",
    ],
    feature: {
      title: "Climb Mechanism",
      body: "The climber went through several prototypes as we tested different ways to reliably engage the cage. The original design used an active latch with powered rollers to pull the cage into the mechanism. After testing, I changed the design to a passive latch with a larger contact surface. This made the mechanism easier to line up with the cage and removed the need to actively control the latch during the climb. Motor curve and lever arm calculations were used to size the pivot gearbox around the torque required to lift the robot.\n\nThe pivot location was selected using center of gravity calculations to keep the robot balanced while hanging from the cage. I first 3D printed the mechanism to test the geometry and mounting points before moving to machined aluminum for the final design. The final assembly was designed in Onshape and manufactured through our shop. I oversaw the manufacturing process, managed the BOM, and tracked parts through Jira before assembling the entire climber subsystem myself.",
    },
    highlights: [
      "2× District Event Winner",
      "Texas District Championship Winner",
      "3× Industrial Design Award",
      "1× Autonomous Award",
      "Top 3 world climb EPA",
    ],
    skills: ["Onshape", "Motor Curve Analysis", "Lever Arm Calculations", "Center of Gravity Analysis", "Jira", "CNC Machining", "3D Printing", "Manual Assembly"],
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
    tagline: "Two-sided pivoting shooter for a rookie-season robot.",
    category: "Robotics",
    year: "2024",
    role: "Subsystem Design Lead",
cover: flTitle,
    summary:
      "Flatline was our robot for the 2024 FIRST Robotics Competition game CRESCENDO. The game centered around collecting foam disks called “notes” and scoring them in the Speaker and Amp before climbing the Stage at the end of the match. Flatline received two Industrial Design Awards and an Excellence in Engineering Award during the season. I was a rookie on the team and worked as the sole designer of the shooter in Onshape before overseeing its fabrication and assembly.",
    details: [
      "I designed the shooter as a two sided system that could launch notes from either end of the robot. The design went through two major iterations, starting with a low pivot and four independently driven flywheels before moving to a lighter high pivot design with a split axle. The final shooter could rotate to shoot in any direction while maintaining a compact package and minimal spin up time. The shooter also integrated directly with our intake, allowing the robot to collect and shoot notes from either side.",
    ],
    feature: {
      title: "Double Sided Shooter",
      body: "The first shooter used four independently driven flywheels to launch the note, with a pair of motors powering the roller that pushed the note into the wheels. Running the flywheels at independent velocities allowed us to control the amount of spin applied to the note and improve its stability in flight. A rack and pinion mechanism controlled the pitch of the shooter, allowing it to pivot while keeping the flywheel assembly compact.\n\nThe second iteration moved to a higher pivot and a split axle design that allowed the shooter to rotate from above the assembly. A gearbox connected to the pivot through a chain controlled the rotation, while a built in chain tensioner allowed the chain to be tightened between matches without disassembling the mechanism. The shooter superstructure also housed the climber and other mechanisms while mounting directly to the intake on either side of the robot. The final design could take shots from anywhere in the close zone with minimal flywheel spin up time.\n\nI designed both iterations in Onshape and used Jira to oversee fabrication and track the parts inventory after completing the CAD. The final shooter was manufactured using a combination of powder coating, CNC routing, lathe work, milling, and 3D printing. I worked with four other students during assembly to build the shooter and mount it to the robot. The mounting system was designed as a modular interface so the completed shooter could be installed on the robot without rebuilding the surrounding structure.",
    },
    highlights: [
      "2× Industrial Design Award",
      "1× Excellence in Engineering Award",
    ],
    skills: ["Onshape", "Jira", "CNC Routing", "Manual Lathe", "Milling", "3D Printing", "Powder Coating", "Modular Assembly"],
gallery: [
      { src: flat1, caption: "Flatline — CAD render" },
      { src: flat2, caption: "Flatline — shooter detail" },
      { src: flat3, caption: "Flatline — mechanism view" },
      { src: flat5, caption: "Flatline — build photo" },
      { src: flat6, caption: "Flatline — robot detail" },
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
    cover: vccTitle,
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
      { src: su1, caption: "CAD Challenge submission" },
      { src: su2, caption: "CAD Challenge submission" },
      { src: su3, caption: "CAD Challenge submission" },
      { src: su4, caption: "CAD Challenge submission" },
    ],
links: [
      { label: "Onshape CAD", href: "https://onshape.com" },
      { label: "Technical Write-up", href: "https://onshape.com" },
      { label: "Build Video", href: "https://onshape.com" },
    ],
    media: {
      videoUrl: "https://www.youtube.com/embed/qjLuDLwSYGI?si=u9VznB1GNOrXcM-N",
      pdf: {
        src: vccStackUp,
        label: "VCC 2025 Stack Up",
      },
    },
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
