import { useId, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MousePointer2, Plus } from "lucide-react";
import { serviceAreas } from "@/data/site";

const zones = [
  {
    slug: "ucc",
    x: 31,
    y: 46,
    label: "The meeting room",
    description:
      "A room where everyone can see, hear and contribute. Displays, cameras, microphones and room booking are planned as one experience.",
    details: ["Video conferencing", "Room booking", "Business telephony"],
  },
  {
    slug: "security",
    x: 80,
    y: 31,
    label: "The bigger picture",
    description:
      "Cameras and monitoring connect entrances, shared spaces and site boundaries, giving your team a clearer view of what matters.",
    details: ["Camera coverage", "Central monitoring", "Alarms & intercom"],
  },
  {
    slug: "id",
    x: 73,
    y: 70,
    label: "A smarter welcome",
    description:
      "Manage the journey from the front door to restricted areas, with access rules and credentials that fit the people using your building.",
    details: ["Door access", "Visitor entry", "Time & attendance"],
  },
  {
    slug: "it",
    x: 58,
    y: 30,
    label: "Behind every connection",
    description:
      "Structured cabling, switching and wireless coverage provide the foundation that your workplace systems depend on.",
    details: ["Networks & Wi-Fi", "Servers & cabling", "Managed IT support"],
  },
  {
    slug: "av",
    x: 45,
    y: 72,
    label: "Spaces that communicate",
    description:
      "Help people find their way, share information and enjoy the space through digital signage, professional audio and intuitive controls.",
    details: ["Digital signage", "Professional audio", "Room controls"],
  },
] as const;

function WorkplaceScene({ active }: { active: string }) {
  const glow = (slug: string) => (active === slug ? "#c3f05c" : "#7b856d");
  return (
    <svg
      viewBox="0 0 900 620"
      role="img"
      aria-label="Illustrative office showing a meeting room, camera, network cabinet, reception and entrance"
    >
      <defs>
        <pattern
          id="floor-grid"
          width="44"
          height="44"
          patternUnits="userSpaceOnUse"
          patternTransform="matrix(1 .57 -1 .57 450 142)"
        >
          <path d="M44 0H0V44" fill="none" stroke="#798377" strokeWidth=".55" />
        </pattern>
        <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#fff" stopOpacity=".3" />
          <stop offset="1" stopColor="#fff" stopOpacity=".03" />
        </linearGradient>
      </defs>
      <ellipse cx="451" cy="488" rx="335" ry="78" fill="#080d09" opacity=".38" />
      <path d="M100 340L450 140L800 340L450 540Z" fill="#a1aa98" />
      <path d="M100 340L450 140L800 340L450 540Z" fill="url(#floor-grid)" />
      <path d="M100 340L450 540L450 554L100 353Z" fill="#6f7964" />
      <path d="M450 540L800 340L800 353L450 554Z" fill="#4d5746" />
      <path d="M100 340V204L450 4V140Z" fill="#c0c8b7" />
      <path d="M450 4L800 204V340L450 140Z" fill="#e4e7dc" />
      <path d="M100 204L450 4L800 204" fill="none" stroke="#fafcf5" strokeWidth="5" />
      <path d="M124 310V216L423 46V137Z" fill="#849480" />
      <path d="M140 291V222L411 68V137Z" fill="#687964" />
      {[194, 256, 318, 380].map((x) => (
        <path
          key={x}
          d={`M${x} ${324 - x * 0.57}V${416 - x * 0.57}`}
          stroke="#bdc8b5"
          strokeWidth="4"
        />
      ))}
      <path d="M482 72L767 235V277L482 114Z" fill="#d0d6c7" />
      <path d="M505 99L740 233" stroke="#b7c0ac" strokeWidth="2" />
      {/* Glass meeting-room enclosure. */}
      <path
        d="M130 355V264L312 160L312 252Z"
        fill="url(#glass)"
        stroke="#e1ead8"
        strokeWidth="1.6"
      />
      <path
        d="M312 160L479 255V346L312 252Z"
        fill="url(#glass)"
        stroke="#e1ead8"
        strokeWidth="1.6"
      />
      <path d="M130 264L298 361L479 255" fill="none" stroke="#f0f3e9" strokeWidth="3" />
      <path d="M298 361V452" stroke="#e1ead8" strokeWidth="2" />
      <path
        d="M162 259L162 205L270 144L270 198Z"
        fill="#253326"
        stroke={glow("ucc")}
        strokeWidth="3"
      />
      <path d="M174 246V213L258 165V197Z" fill="#586f45" />
      <path d="M184 233L203 222M215 215L247 197" stroke="#b0d489" strokeWidth="6" />
      <path d="M205 337L281 293L413 368L337 412Z" fill="#eff0df" stroke="#66755b" strokeWidth="2" />
      <path d="M205 337V345L337 420V412Z" fill="#b7bda7" />
      <path d="M337 412L413 368V376L337 420Z" fill="#838f72" />
      {[
        [219, 325],
        [260, 349],
        [301, 373],
        [291, 309],
        [332, 333],
        [373, 357],
      ].map(([x = 0, y = 0], i) => (
        <g key={i}>
          <path d={`M${x} ${y}l18 -10l16 9l-18 11Z`} fill="#354b36" />
          <path d={`M${x} ${y}v12l16 9v-12Z`} fill="#26372a" />
        </g>
      ))}
      <path d="M301 337L325 324L341 333L317 347Z" fill="#253326" />
      <path d="M311 338L327 329" stroke={glow("ucc")} strokeWidth="2" />
      {/* Network cabinet. */}
      <path d="M482 197L523 173L568 199L527 223Z" fill="#3d4b37" />
      <path d="M482 197V280L527 307V223Z" fill="#1b281d" />
      <path d="M527 223L568 199V282L527 307Z" fill="#30422d" />
      {[0, 1, 2, 3, 4].map((n) => (
        <g key={n}>
          <path d={`M488 ${209 + n * 14}l32 19`} stroke="#67785a" strokeWidth="4" />
          <circle cx="494" cy={212 + n * 14} r="2" fill={glow("it")} />
        </g>
      ))}
      {/* Open workstations. */}
      {[
        [584, 307],
        [650, 345],
        [516, 346],
      ].map(([x = 0, y = 0], i) => (
        <g key={i}>
          <path d={`M${x} ${y}l58 -33l61 35l-58 33Z`} fill="#dde1cf" />
          <path d={`M${x} ${y}v9l61 35v-9Z`} fill="#8d997e" />
          <path d={`M${x + 26} ${y - 3}v-34l34 20v34Z`} fill="#2e402e" />
          <path d={`M${x + 30} ${y - 9}v-20l26 15v20Z`} fill="#719150" />
        </g>
      ))}
      {/* Reception signage and access lane. */}
      <path d="M362 445V383L396 403V465Z" fill="#26352b" stroke={glow("av")} strokeWidth="2" />
      <path d="M369 431V400L389 412V443Z" fill="#8cb25f" />
      <path d="M455 454L516 419L580 456L519 491Z" fill="#eff1e5" />
      <path d="M455 454V482L519 519V491Z" fill="#bbc5ab" />
      <path d="M519 491L580 456V484L519 519Z" fill="#8d9a7b" />
      <path d="M473 474L504 492" stroke={glow("av")} strokeWidth="4" />
      <path d="M626 420V384L642 393V429Z" fill="#35462f" />
      <path d="M670 394V358L686 367V403Z" fill="#35462f" />
      <path
        d="M642 401L670 385V406L642 422Z"
        fill="url(#glass)"
        stroke={glow("id")}
        strokeWidth="2"
      />
      <circle cx="634" cy="398" r="3" fill={glow("id")} />
      {/* Camera and planted corners. */}
      <path d="M745 218V198L715 181" fill="none" stroke="#4d5b48" strokeWidth="5" />
      <path d="M705 173L726 185L711 194L690 182Z" fill="#f1f4e8" />
      <circle cx="701" cy="183" r="4" fill={glow("security")} />
      {[
        [168, 385],
        [736, 325],
      ].map(([x = 0, y = 0], i) => (
        <g key={i}>
          <path d={`M${x - 9} ${y}l3 22h15l3 -22Z`} fill="#c4caae" />
          <ellipse cx={x + 2} cy={y - 7} rx="18" ry="25" fill="#58764b" />
          <ellipse cx={x - 7} cy={y - 19} rx="9" ry="18" fill="#71935c" />
        </g>
      ))}
      <path
        d="M518 301L448 341L339 280"
        className={`connection-line ${active === "ucc" ? "connection-active" : ""}`}
      />
      <path
        d="M541 299L707 206"
        className={`connection-line ${active === "security" ? "connection-active" : ""}`}
      />
      <path
        d="M535 310L670 387"
        className={`connection-line ${active === "id" ? "connection-active" : ""}`}
      />
      <path
        d="M530 315L440 367L378 437"
        className={`connection-line ${active === "av" ? "connection-active" : ""}`}
      />
    </svg>
  );
}

export function ConnectedWorkplace({
  initial = "ucc",
  heading = "One space. Everything connected.",
}: {
  initial?: string;
  heading?: string;
}) {
  const [active, setActive] = useState(zones.find((z) => z.slug === initial) || zones[0]);
  const panelId = useId();
  const service = serviceAreas.find((s) => s.slug === active.slug)!;
  return (
    <section className="connected-section" id="connected-workplace">
      <div className="shell">
        <div className="section-top">
          <div>
            <p className="eyebrow">EXPLORE A CONNECTED WORKPLACE</p>
            <h2>{heading}</h2>
          </div>
          <p className="interaction-hint">
            <MousePointer2 size={16} /> Select a system to see how it fits.
          </p>
        </div>
        <div className="workplace-grid">
          <div className="workplace-model">
            <WorkplaceScene active={active.slug} />
            {zones.map((zone, i) => (
              <button
                key={zone.slug}
                className={`hotspot ${zone.slug === active.slug ? "hotspot-active" : ""}`}
                style={{ left: `${zone.x}%`, top: `${zone.y}%` }}
                aria-label={`Explore ${serviceAreas[i]!.short}`}
                aria-pressed={active.slug === zone.slug}
                aria-controls={panelId}
                onClick={() => setActive(zone)}
              >
                <Plus size={17} />
                <span>{serviceAreas[i]!.short}</span>
              </button>
            ))}
            <span className="model-caption">ILLUSTRATIVE WORKPLACE / SELECT A CONNECTION</span>
          </div>
          <div className="workplace-panel" id={panelId} aria-live="polite">
            <span className="system-code">
              <service.icon size={19} /> {service.code} /{" "}
              {String(zones.indexOf(active) + 1).padStart(2, "0")}
            </span>
            <h3 key={active.slug} className="motion-swap">
              {active.label}
            </h3>
            <p key={`${active.slug}-description`} className="motion-swap">
              {active.description}
            </p>
            <ul>
              {active.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <Link to={service.to} className="text-link">
              Explore {service.short.toLowerCase()} <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
        <div className="system-selector" aria-label="Workplace systems">
          {zones.map((zone, i) => (
            <button
              key={zone.slug}
              aria-pressed={active.slug === zone.slug}
              aria-controls={panelId}
              onClick={() => setActive(zone)}
            >
              <span>0{i + 1}</span>
              {serviceAreas[i]!.short}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
