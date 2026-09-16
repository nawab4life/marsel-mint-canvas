import { project } from "@/lib/isometric";
import type { ReactNode } from "react";
import type { SolutionKind } from "./SolutionExperience";

// A shared projection keeps the illustration language consistent; each solution
// has its own spatial composition, equipment and selectable component groups.
const pts = (...vertices: [number, number, number][]) =>
  vertices.map((v) => project(...v).join(",")).join(" ");
const lime = "#c3f05c";
function Box({
  x,
  y,
  z = 0,
  w,
  d,
  h,
  light = false,
  accent = false,
}: {
  x: number;
  y: number;
  z?: number;
  w: number;
  d: number;
  h: number;
  light?: boolean;
  accent?: boolean;
}) {
  const edge = accent ? lime : light ? "#b1bda6" : "#62705b";
  return (
    <g stroke={edge} strokeWidth={accent ? 2.4 : 0.8} strokeLinejoin="round">
      <polygon
        points={pts([x, y, z + h], [x + w, y, z + h], [x + w, y + d, z + h], [x, y + d, z + h])}
        fill={accent ? "#a9cc76" : light ? "#e1e6d6" : "#65755a"}
      />
      <polygon
        points={pts([x, y + d, z], [x + w, y + d, z], [x + w, y + d, z + h], [x, y + d, z + h])}
        fill={light ? "#b7c3a5" : "#2c3b2d"}
      />
      <polygon
        points={pts([x + w, y, z], [x + w, y + d, z], [x + w, y + d, z + h], [x + w, y, z + h])}
        fill={light ? "#919f82" : "#1c2a20"}
      />
    </g>
  );
}
function Face({
  x,
  y,
  z,
  w,
  h,
  fill,
  stroke = "none",
}: {
  x: number;
  y: number;
  z: number;
  w: number;
  h: number;
  fill: string;
  stroke?: string;
}) {
  return (
    <polygon
      points={pts([x, y, z], [x + w, y, z], [x + w, y, z + h], [x, y, z + h])}
      fill={fill}
      stroke={stroke}
      strokeWidth="2"
    />
  );
}
function Screen({
  x,
  y,
  z,
  w,
  h,
  active = false,
  mode = "content",
}: {
  x: number;
  y: number;
  z: number;
  w: number;
  h: number;
  active?: boolean;
  mode?: "content" | "meeting" | "cctv";
}) {
  return (
    <g>
      <Face x={x} y={y} z={z} w={w} h={h} fill="#18291f" stroke={active ? lime : "#8fa27b"} />
      {mode !== "content" ? (
        [0, 1, 2, 3].map((i) => {
          const sx = x + 7 + (i % 2) * (w / 2 - 3),
            sz = z + 7 + Math.floor(i / 2) * (h / 2 - 3);
          return (
            <g key={i}>
              <Face
                x={sx}
                y={y + 1}
                z={sz}
                w={w / 2 - 11}
                h={h / 2 - 11}
                fill={i % 2 ? "#638257" : "#435f46"}
              />
              {mode === "meeting" ? (
                <>
                  <ellipse
                    cx={project(sx + w / 5, y + 2, sz + h / 5)[0]}
                    cy={project(sx + w / 5, y + 2, sz + h / 5)[1]}
                    rx={w / 23}
                    ry={h / 11}
                    fill="#c2d1b2"
                  />
                  <Face x={sx + w / 9} y={y + 2} z={sz + 3} w={w / 5} h={h / 10} fill="#9ab589" />
                </>
              ) : (
                <>
                  <Face x={sx + 5} y={y + 2} z={sz + 5} w={w / 5} h={h / 7} fill="#7e9575" />
                  <path
                    d={`M${project(sx + 6, y + 3, sz + h / 3)}l14 8`}
                    stroke={lime}
                    strokeWidth="2"
                  />
                </>
              )}
            </g>
          );
        })
      ) : (
        <>
          <Face x={x + 9} y={y + 1} z={z + h * 0.52} w={w * 0.65} h={h * 0.12} fill="#b9d896" />
          <Face x={x + 9} y={y + 1} z={z + h * 0.3} w={w * 0.44} h={h * 0.06} fill="#76976a" />
          <Face x={x + 9} y={y + 1} z={z + h * 0.17} w={w * 0.55} h={h * 0.04} fill="#76976a" />
        </>
      )}
    </g>
  );
}
function Room({ children, wall = true }: { children: ReactNode; wall?: boolean }) {
  return (
    <>
      <ellipse cx="450" cy="502" rx="315" ry="67" fill="#0c160f" opacity=".6" />
      <Box x={0} y={0} z={-12} w={350} d={350} h={12} light />
      {[50, 100, 150, 200, 250, 300].map((n) => (
        <g key={n} stroke="#7e9075" strokeWidth=".65" opacity=".6">
          <polyline points={pts([n, 0, 0], [n, 350, 0])} />
          <polyline points={pts([0, n, 0], [350, n, 0])} />
        </g>
      ))}
      {wall && (
        <>
          <Face x={0} y={0} z={0} w={350} h={155} fill="#ced7c2" />
          <polygon
            points={pts([0, 0, 0], [0, 350, 0], [0, 350, 155], [0, 0, 155])}
            fill="#93a487"
          />
          <polyline
            points={pts([0, 350, 156], [0, 0, 156], [350, 0, 156])}
            fill="none"
            stroke="#e3ebd9"
            strokeWidth="3"
          />
        </>
      )}
      {children}
    </>
  );
}
function Seat({ x, y }: { x: number; y: number }) {
  return (
    <>
      <Box x={x + 7} y={y + 6} w={20} d={22} h={22} />
      <Box x={x} y={y} z={22} w={36} d={35} h={8} />
      <Box x={x} y={y} z={30} w={36} d={7} h={26} />
    </>
  );
}
function Rack({ x, y, active = false }: { x: number; y: number; active?: boolean }) {
  return (
    <>
      <Box x={x} y={y} w={65} d={50} h={132} accent={active} />
      {[0, 1, 2, 3, 4, 5].map((n) => (
        <g key={n}>
          <Face x={x + 7} y={y + 51} z={15 + n * 17} w={49} h={11} fill="#17251c" />
          <circle
            cx={project(x + 14, y + 52, 20 + n * 17)[0]}
            cy={project(x + 14, y + 52, 20 + n * 17)[1]}
            r="2.3"
            fill={lime}
          />
          <Face x={x + 25} y={y + 52} z={18 + n * 17} w={24} h={3} fill="#647a58" />
        </g>
      ))}
    </>
  );
}
function Cable({
  vertices,
  active = false,
}: {
  vertices: [number, number, number][];
  active?: boolean;
}) {
  return (
    <polyline
      points={pts(...vertices)}
      fill="none"
      stroke="#c3f05c"
      strokeWidth="2"
      strokeDasharray="5 7"
      className={`connection-line ${active ? "connection-active" : ""}`}
      style={{ opacity: active ? 1 : 0.3 }}
    />
  );
}
function Ucc({ n }: { n: number }) {
  return (
    <Room>
      <Screen x={62} y={6} z={58} w={190} h={90} active={n === 0} mode="meeting" />
      <Box x={143} y={8} z={47} w={28} d={12} h={8} accent={n === 0} />
      <circle cx={project(157, 21, 51)[0]} cy={project(157, 21, 51)[1]} r="3" fill={lime} />
      <Box x={319} y={35} w={17} d={92} h={145} light />
      <Screen x={326} y={130} z={73} w={18} h={26} active={n === 2} />
      {[112, 196, 280].map((y) => (
        <Seat key={y} x={80} y={y} />
      ))}
      <Box x={144} y={94} w={16} d={195} h={55} />
      <Box x={225} y={94} w={16} d={195} h={55} />
      <Box x={130} y={80} z={55} w={125} d={233} h={8} light />
      {[125, 219].map((y) => (
        <Box key={y} x={181} y={y} z={63} w={17} d={17} h={5} accent={n === 1} />
      ))}
      <Box x={214} y={254} z={63} w={29} d={24} h={4} accent={n === 4} />
      <Box x={28} y={260} w={48} d={45} h={50} light />
      <Box x={34} y={266} z={50} w={33} d={25} h={8} accent={n === 3} />
      <Screen x={41} y={277} z={59} w={16} h={13} active={n === 3} />
      <Cable
        vertices={[
          [154, 22, 48],
          [154, 51, 4],
          [191, 51, 4],
          [191, 176, 64],
        ]}
        active={n === 1 || n === 0}
      />
      <Cable
        vertices={[
          [191, 219, 68],
          [229, 272, 68],
        ]}
        active={n === 4}
      />
    </Room>
  );
}
function Security({ n }: { n: number }) {
  return (
    <Room>
      <Box x={24} y={18} z={125} w={12} d={20} h={9} />
      <Box x={28} y={34} z={127} w={33} d={20} h={13} light accent={n === 0} />
      <polygon
        points={pts([46, 58, 128], [25, 177, 1], [153, 214, 1])}
        fill={lime}
        opacity={n === 0 ? 0.15 : 0.045}
      />
      <Box x={242} y={28} w={63} d={45} h={64} />
      {[0, 1, 2].map((i) => (
        <Box key={i} x={247} y={28} z={64 + i * 9} w={53} d={42} h={6} accent={n === 1} />
      ))}
      <Box x={108} y={141} w={164} d={67} h={54} light />
      <Screen x={112} y={160} z={58} w={145} h={79} active={n === 2} mode="cctv" />
      <Box x={152} y={183} z={54} w={58} d={17} h={3} />
      <Seat x={170} y={234} />
      <Box x={322} y={140} w={14} d={78} h={143} light />
      <Screen x={315} y={220} z={85} w={24} h={33} active={n === 3} />
      <Box x={38} y={282} w={16} d={15} h={90} />
      <Box x={32} y={278} z={73} w={29} d={22} h={30} light accent={n === 4} />
      <Cable
        vertices={[
          [52, 50, 122],
          [85, 80, 3],
          [259, 80, 3],
          [263, 50, 69],
        ]}
        active={n === 0 || n === 1}
      />
      <Cable
        vertices={[
          [259, 69, 70],
          [280, 118, 3],
          [208, 170, 55],
        ]}
        active={n === 2}
      />
      <Cable
        vertices={[
          [54, 291, 75],
          [82, 287, 3],
          [205, 211, 3],
        ]}
        active={n === 4}
      />
    </Room>
  );
}
function Identity({ n }: { n: number }) {
  return (
    <Room>
      <Face x={205} y={8} z={0} w={115} h={150} fill="#344c38" stroke="#aabf96" />
      <Face x={214} y={10} z={9} w={93} h={130} fill="#64816a" />
      <Face x={277} y={12} z={58} w={5} h={20} fill="#d4e1c8" />
      <Box x={263} y={12} z={132} w={40} d={10} h={8} accent={n === 2} />
      <Box x={217} y={62} w={18} d={18} h={88} />
      <Screen x={211} y={82} z={72} w={30} h={29} active={n === 1} />
      <Screen x={33} y={8} z={67} w={50} h={55} active={n === 4} />
      <Box x={32} y={247} w={65} d={58} h={48} light />
      <Box x={46} y={250} z={48} w={32} d={20} h={3} light accent={n === 0} />
      <Face
        x={48}
        y={272}
        z={55}
        w={31}
        h={20}
        fill="#e2eacf"
        stroke={n === 0 ? lime : "#9daf8d"}
      />
      <Face x={52} y={273} z={59} w={8} h={10} fill="#7c9964" />
      <Box x={128} y={201} w={105} d={90} h={64} light />
      <Screen x={157} y={241} z={67} w={61} h={44} active={n === 3} />
      <Box x={150} y={303} w={155} d={8} h={3} />
      <Cable
        vertices={[
          [66, 280, 1],
          [112, 317, 1],
          [277, 224, 1],
          [274, 28, 1],
        ]}
        active={n === 0 || n === 2}
      />
      <Cable
        vertices={[
          [227, 69, 84],
          [240, 51, 9],
          [278, 29, 9],
        ]}
        active={n === 1}
      />
    </Room>
  );
}
function Infrastructure({ n }: { n: number }) {
  return (
    <Room wall={false}>
      <Cable
        vertices={[
          [95, 100, 2],
          [95, 229, 2],
          [260, 229, 2],
          [260, 276, 56],
        ]}
        active={n === 3}
      />
      <Cable
        vertices={[
          [170, 100, 2],
          [170, 142, 2],
          [302, 142, 2],
          [302, 112, 144],
        ]}
        active={n === 2}
      />
      <Cable
        vertices={[
          [95, 92, 7],
          [164, 92, 7],
        ]}
        active={n === 0 || n === 1}
      />
      <Rack x={37} y={29} active={n === 0} />
      <Rack x={143} y={28} active={n === 1} />
      <Box x={298} y={83} w={5} d={5} h={146} />
      <Box x={276} y={75} z={145} w={49} d={40} h={5} light accent={n === 2} />
      {[22, 37, 52].map((r) => (
        <ellipse
          key={r}
          cx={project(301, 96, 154)[0]}
          cy={project(301, 96, 154)[1]}
          rx={r}
          ry={r * 0.47}
          fill="none"
          stroke={lime}
          strokeWidth="1.5"
          opacity={n === 2 ? 0.75 : 0.2}
        />
      ))}
      <Box x={212} y={243} w={100} d={71} h={51} light />
      <Screen x={230} y={264} z={56} w={70} h={48} active={n === 4} />
      <Box x={239} y={291} z={51} w={51} d={17} h={3} />
      <Seat x={232} y={316} />
      <Box x={73} y={235} w={54} d={22} h={7} light accent={n === 3} />
      {[0, 1, 2, 3].map((i) => (
        <Box key={i} x={79 + i * 10} y={239} z={7} w={6} d={9} h={2} />
      ))}
    </Room>
  );
}
function AudioVisual({ n }: { n: number }) {
  return (
    <Room>
      <Box x={30} y={12} w={290} d={93} h={12} />
      <Screen x={77} y={8} z={52} w={222} h={108} active={n === 0} />
      {[30, 318].map((x) => (
        <g key={x}>
          <Box x={x} y={42} w={9} d={9} h={72} />
          <Box x={x - 9} y={35} z={72} w={28} d={23} h={63} accent={n === 1} />
          <Face x={x - 5} y={59} z={78} w={20} h={49} fill="#19251d" />
        </g>
      ))}
      <Box x={171} y={152} z={131} w={47} d={38} h={14} light accent={n === 2} />
      <polygon
        points={pts([190, 155, 132], [82, 12, 58], [288, 12, 58], [288, 12, 153], [82, 12, 153])}
        fill={lime}
        opacity={n === 2 ? 0.12 : 0.035}
      />
      {[145, 210, 275].map((y) => (
        <g key={y}>
          {[114, 185].map((x) => (
            <Seat key={x} x={x} y={y} />
          ))}
        </g>
      ))}
      <Box x={302} y={237} w={39} d={30} h={9} />
      <Box x={317} y={242} z={9} w={9} d={9} h={91} />
      <Screen x={297} y={259} z={46} w={52} h={94} active={n === 3} />
      <Box x={42} y={252} w={42} d={39} h={61} light />
      <Box x={45} y={255} z={61} w={36} d={29} h={4} accent={n === 4} />
      <Cable
        vertices={[
          [62, 268, 65],
          [62, 225, 3],
          [45, 110, 3],
          [45, 59, 86],
        ]}
        active={n === 1 || n === 4}
      />
    </Room>
  );
}
const scenes = { ucc: Ucc, security: Security, id: Identity, it: Infrastructure, av: AudioVisual };
const labels = {
  ucc: "Isometric collaboration room with video display, microphones, booking panel, desk phone and touch controller",
  security:
    "Isometric surveillance setup with camera coverage, recorder, monitoring screens, intercom and alarm",
  id: "Isometric access-controlled entrance with credentials, reader, door hardware, reception and attendance terminal",
  it: "Isometric network infrastructure with server rack, switches, wireless access point, cabling and workstation",
  av: "Isometric presentation space with large display, loudspeakers, projector, signage and control lectern",
};
export function SolutionScene({
  solution,
  selected,
}: {
  solution: SolutionKind;
  selected: number;
}) {
  const Scene = scenes[solution];
  return (
    <svg viewBox="0 0 900 620" role="img" aria-label={labels[solution]}>
      <Scene n={selected} />
    </svg>
  );
}
