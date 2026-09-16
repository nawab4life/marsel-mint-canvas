import { useId, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MousePointer2 } from "lucide-react";
import { serviceAreas } from "@/data/site";
import { SolutionScene } from "./SolutionScene";
import { project } from "@/lib/isometric";

export type SolutionKind = (typeof serviceAreas)[number]["slug"];
type Point = {
  label: string;
  title: string;
  at: [number, number, number];
  description: string;
  details: string[];
};
const experiences: Record<
  SolutionKind,
  { eyebrow: string; heading: string; caption: string; points: Point[] }
> = {
  ucc: {
    eyebrow: "EXPLORE A COLLABORATION ROOM",
    heading: "Every seat. Part of the conversation.",
    caption: "ILLUSTRATIVE COLLABORATION ROOM",
    points: [
      {
        label: "Video meetings",
        title: "Bring remote people into the room.",
        at: [155, 8, 108],
        description:
          "The display and camera work together so colleagues joining remotely can see the room and contribute to the meeting.",
        details: ["Meeting displays", "Room cameras", "Video conferencing platforms"],
      },
      {
        label: "Room audio",
        title: "Make every voice count.",
        at: [184, 180, 65],
        description:
          "Microphones and speakers are selected around the table, the room size and its acoustics, helping everyone hear and be heard.",
        details: ["Table or ceiling microphones", "Room speakers", "Audio processing"],
      },
      {
        label: "Room booking",
        title: "Know when the room is yours.",
        at: [337, 131, 103],
        description:
          "A booking panel outside the room makes availability visible and gives teams a clear way to reserve their meeting space.",
        details: ["Room availability", "Calendar integration", "Booking panels"],
      },
      {
        label: "Business calling",
        title: "Keep conversations moving.",
        at: [60, 273, 63],
        description:
          "Business telephony connects desk phones and supported applications around your team's calling needs.",
        details: ["IP desk phones", "Business calling", "User configuration"],
      },
      {
        label: "Meeting control",
        title: "Start with a simple touch.",
        at: [255, 244, 64],
        description:
          "An easy-to-reach controller brings meeting functions together, helping people start calls and share content with less setup.",
        details: ["Touch controllers", "Content sharing", "User handover"],
      },
    ],
  },
  security: {
    eyebrow: "EXPLORE A SURVEILLANCE SYSTEM",
    heading: "See the site. Understand the event.",
    caption: "ILLUSTRATIVE SECURITY & MONITORING SYSTEM",
    points: [
      {
        label: "Camera coverage",
        title: "A view of the areas that matter.",
        at: [45, 48, 140],
        description:
          "Camera locations and viewing angles are planned around entrances, circulation routes and the areas you need to monitor.",
        details: ["CCTV camera selection", "Coverage planning", "Installation & positioning"],
      },
      {
        label: "Recording",
        title: "Keep footage organised.",
        at: [273, 38, 72],
        description:
          "Recording equipment and storage are sized around camera count, image settings and the required retention period.",
        details: ["Network video recording", "Storage planning", "Playback configuration"],
      },
      {
        label: "Monitoring",
        title: "Bring the views together.",
        at: [195, 186, 96],
        description:
          "A monitoring workstation gives authorised users a central place to view live cameras and review recorded events.",
        details: ["Live camera views", "Event review", "Authorised operator access"],
      },
      {
        label: "Intercom",
        title: "See who is at the entrance.",
        at: [336, 192, 102],
        description:
          "An entrance intercom connects visitors with the team responsible for responding, with video or audio to suit the location.",
        details: ["Entrance call stations", "Audio / video communication", "Response points"],
      },
      {
        label: "Alarm events",
        title: "Make exceptions visible.",
        at: [64, 285, 83],
        description:
          "Alarm devices and event notifications are configured around the site's requirements and agreed response process.",
        details: ["Alarm devices", "Event notifications", "System testing"],
      },
    ],
  },
  id: {
    eyebrow: "EXPLORE AN ACCESS & IDENTITY SYSTEM",
    heading: "A welcome with the right boundaries.",
    caption: "ILLUSTRATIVE ENTRANCE & ACCESS SYSTEM",
    points: [
      {
        label: "Credentials",
        title: "Give each person the right access.",
        at: [74, 253, 62],
        description:
          "Access credentials connect a person with their assigned permissions, making everyday entry easier to manage.",
        details: ["Cards & credentials", "Permission groups", "Credential enrolment"],
      },
      {
        label: "Access readers",
        title: "Check access at the doorway.",
        at: [237, 60, 89],
        description:
          "Readers are selected for the entrance and the way people use it, with card or biometric options where appropriate.",
        details: ["Card readers", "Biometric options", "Reader positioning"],
      },
      {
        label: "Door control",
        title: "Connect permission to entry.",
        at: [285, 30, 146],
        description:
          "The reader, controller and door hardware work together to manage access, with exit arrangements considered in the design.",
        details: ["Door controllers", "Lock integration", "Exit devices"],
      },
      {
        label: "Visitor entry",
        title: "Make arrival easier to manage.",
        at: [183, 245, 103],
        description:
          "A reception check-in point helps the team manage visitor arrival and provide the appropriate access for their visit.",
        details: ["Visitor check-in", "Temporary credentials", "Reception workflow"],
      },
      {
        label: "Attendance",
        title: "Record arrivals in one place.",
        at: [51, 48, 97],
        description:
          "Attendance terminals capture check-in and check-out events, with reporting configured to suit your organisation.",
        details: ["Attendance terminals", "Entry records", "Reporting setup"],
      },
    ],
  },
  it: {
    eyebrow: "EXPLORE YOUR NETWORK INFRASTRUCTURE",
    heading: "From the rack to every connection.",
    caption: "ILLUSTRATIVE NETWORK & IT INFRASTRUCTURE",
    points: [
      {
        label: "Servers",
        title: "Give your systems a home.",
        at: [72, 54, 132],
        description:
          "Server and rack infrastructure is planned around your applications, equipment and space, with service access considered from the start.",
        details: ["Server infrastructure", "Equipment racks", "Installation & configuration"],
      },
      {
        label: "Switching",
        title: "Connect the devices behind the work.",
        at: [181, 49, 104],
        description:
          "Network switches connect workplace devices and distribute connectivity across the site, with capacity planned for your needs.",
        details: ["Network switching", "Port planning", "Network configuration"],
      },
      {
        label: "Wi-Fi",
        title: "Coverage where people work.",
        at: [305, 106, 155],
        description:
          "Wireless access point locations are planned around the layout, user demand and physical conditions of your space.",
        details: ["Wireless access points", "Coverage planning", "Wireless configuration"],
      },
      {
        label: "Cabling",
        title: "An organised path for every connection.",
        at: [110, 241, 15],
        description:
          "Structured cabling connects the rack to workspace outlets, with labelling and testing to make future maintenance easier.",
        details: ["Structured cabling", "Patch panels & outlets", "Cable testing & labelling"],
      },
      {
        label: "Workplace IT",
        title: "Keep the everyday tools connected.",
        at: [275, 267, 91],
        description:
          "Workplace equipment is brought onto the network and supported as part of an agreed maintenance and assistance scope.",
        details: ["Device connectivity", "IT support", "Maintenance planning"],
      },
    ],
  },
  av: {
    eyebrow: "EXPLORE AN AUDIO VISUAL SPACE",
    heading: "Set the scene. Shape the experience.",
    caption: "ILLUSTRATIVE PRESENTATION & AUDIO VISUAL SPACE",
    points: [
      {
        label: "Visual displays",
        title: "Give your message room to stand out.",
        at: [175, 9, 127],
        description:
          "A large display or projection surface makes shared content the focal point, sized around the space and viewing distances.",
        details: ["Presentation displays", "Projection surfaces", "Viewing-distance planning"],
      },
      {
        label: "Professional audio",
        title: "Sound designed around the audience.",
        at: [42, 58, 114],
        description:
          "Speaker placement and amplification are planned for the room and its intended use, from presentations to background audio.",
        details: ["Professional loudspeakers", "Amplification", "Audio zoning"],
      },
      {
        label: "Projection",
        title: "Make a larger canvas possible.",
        at: [189, 180, 149],
        description:
          "Projector position, image size and ambient light are considered together to create a suitable presentation setup.",
        details: ["Projector selection", "Mounting & alignment", "Source connectivity"],
      },
      {
        label: "Digital signage",
        title: "Put information in the right place.",
        at: [320, 245, 104],
        description:
          "A signage display can welcome visitors or share information at the point where people need it.",
        details: ["Signage screens", "Content playback", "Display scheduling"],
      },
      {
        label: "Room controls",
        title: "Bring the experience within reach.",
        at: [83, 275, 68],
        description:
          "A control interface brings supported AV functions together, giving users a clear way to select sources and adjust the room audio.",
        details: ["Touch control panels", "Source selection", "Volume control"],
      },
    ],
  },
};

export function SolutionExperience({ solution }: { solution: SolutionKind }) {
  const [selected, setSelected] = useState(0);
  const panelId = useId();
  const content = experiences[solution];
  const point = content.points[selected]!;
  const service = serviceAreas.find((s) => s.slug === solution)!;
  return (
    <section className="connected-section solution-experience" id="connected-workplace">
      <div className="shell">
        <div className="section-top">
          <div>
            <p className="eyebrow">{content.eyebrow}</p>
            <h2>{content.heading}</h2>
          </div>
          <p className="interaction-hint">
            <MousePointer2 size={16} /> Select a component to explore.
          </p>
        </div>
        <div className="workplace-grid">
          <div className="workplace-model solution-model">
            <div className="solution-scene">
              <SolutionScene solution={solution} selected={selected} />
              {content.points.map((item, i) => {
                const [x, y] = project(...item.at);
                return (
                  <button
                    key={item.label}
                    className={`hotspot ${selected === i ? "hotspot-active" : ""}`}
                    style={{ left: `${x / 9}%`, top: `${y / 6.2}%` }}
                    aria-label={`Explore ${item.label}`}
                    aria-pressed={selected === i}
                    aria-controls={panelId}
                    onClick={() => setSelected(i)}
                  >
                    {i + 1}
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
            <span className="model-caption">{content.caption}</span>
          </div>
          <div className="workplace-panel" id={panelId} aria-live="polite" aria-atomic="true">
            <span className="system-code">
              <service.icon size={19} /> {service.code} / {String(selected + 1).padStart(2, "0")}
            </span>
            <h3 key={selected} className="motion-swap">
              {point.title}
            </h3>
            <p key={`${selected}-description`} className="motion-swap">
              {point.description}
            </p>
            <ul>
              {point.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <Link to="/contact" className="text-link">
              Discuss your {service.code === "SEC" ? "security" : service.code} project{" "}
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
        <div className="system-selector" aria-label={`${service.name} components`}>
          {content.points.map((item, i) => (
            <button
              key={item.label}
              aria-pressed={selected === i}
              aria-controls={panelId}
              onClick={() => setSelected(i)}
            >
              <span>0{i + 1}</span>
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
