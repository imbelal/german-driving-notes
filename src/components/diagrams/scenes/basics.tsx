import { C, Car, Cyclist, Label, Marker, PathArrow, RoadCanvas } from '../primitives'
import { UrbanRoad } from '../roads'

export function CockpitDiagram() {
  return (
    <RoadCanvas
      title="Top-down cockpit layout: steering wheel, seats, mirrors and head restraints"
      label="Cockpit drill diagram"
    >
      <rect x="0" y="0" width="800" height="560" fill={C.bg} />
      <rect x="185" y="72" width="430" height="420" rx="70" fill="#e2e8f0" stroke={C.navy} strokeWidth="3" />
      <rect x="215" y="88" width="370" height="52" rx="18" fill="#bfdbfe" opacity="0.9" />
      <rect x="215" y="88" width="370" height="14" rx="7" fill="#93c5fd" opacity="0.7" />
      <rect x="245" y="152" width="310" height="34" rx="10" fill="#334155" />
      <rect x="205" y="148" width="30" height="18" rx="5" fill="#cbd5e1" stroke={C.navy} strokeOpacity="0.3" />
      <rect x="565" y="148" width="30" height="18" rx="5" fill="#cbd5e1" stroke={C.navy} strokeOpacity="0.3" />
      <rect x="365" y="132" width="70" height="14" rx="5" fill="#1f2937" />
      <circle cx="400" cy="232" r="44" fill="none" stroke="#1f2937" strokeWidth="9" />
      <circle cx="400" cy="232" r="13" fill="#1f2937" opacity="0.75" />
      <circle cx="364" cy="232" r="6" fill={C.skin} />
      <circle cx="436" cy="232" r="6" fill={C.skin} />
      <rect x="292" y="294" width="92" height="86" rx="18" fill="#94a3b8" />
      <rect x="416" y="294" width="92" height="86" rx="18" fill="#94a3b8" />
      <rect x="300" y="394" width="200" height="58" rx="18" fill="#94a3b8" />
      <path d="M 330 300 L 388 368" stroke="#f8fafc" strokeWidth="9" opacity="0.85" />
      <path d="M 338 300 L 396 368" stroke={C.navy} strokeWidth="3" opacity="0.35" />
      <circle cx="330" cy="300" r="6" fill="#f8fafc" stroke={C.navy} strokeOpacity="0.3" />
      <Marker x={400} y={232} n={1} />
      <Marker x={400} y={118} n={2} />
      <Marker x={330} y={332} n={3} tone="green" />
      <Marker x={330} y={290} n={4} tone="navy" />
      <Label x={782} y={150} text="Side mirror" anchor="end" />
      <Label x={782} y={196} text="Set before driving" anchor="end" />
      <Label x={400} y={54} text="Interior mirror" />
      <Label x={400} y={524} text="Seat and head restraint" />
      <Label x={782} y={232} text="9 and 3 o’clock" anchor="end" />
      <Label x={782} y={310} text="Belt without twists" anchor="end" />
      <Label x={100} y={250} text="Seat: clutch fully pressed" anchor="start" />
      <line x1="185" y1="250" x2="280" y2="250" stroke={C.navy} strokeWidth="2" strokeDasharray="5 5" />
    </RoadCanvas>
  )
}

export function BlindSpotDiagram() {
  return (
    <RoadCanvas
      title="Mirror coverage and blind spot zones around a car"
      label="Blind spot diagram"
    >
      <UrbanRoad lanesEast={2} lanesWest={1} centerY={280}>
        <polygon points="505,305 250,215 180,250 420,350" fill={C.path} opacity="0.22" />
        <polygon points="505,355 250,445 180,410 420,370" fill={C.path} opacity="0.22" />
        <polygon points="405,350 520,455 330,475 300,375" fill={C.hazard} opacity="0.38" />
        <PathArrow d="M 540 325 L 690 325" color={C.ego} width={4} />
        <Car x={480} y={325} rotate={90} color={C.ego} dark={C.egoDark} label="You" indicator="right" />
        <Car x={390} y={415} rotate={90} color={C.other} label="Hidden" badge="!" />
        <Label x={230} y={245} text="Mirror view" tone="green" />
        <Label x={250} y={470} text="Blind spot" tone="red" />
        <Label x={620} y={410} text="Shoulder check" />
        <line x1="430" y1="368" x2="430" y2="382" stroke={C.hazard} strokeWidth="2" />
      </UrbanRoad>
    </RoadCanvas>
  )
}

export function LanePositionDiagram() {
  return (
    <RoadCanvas
      title="Keeping a centred lane position while passing a cyclist"
      label="Lane position diagram"
    >
      <UrbanRoad lanesEast={1} lanesWest={1} centerY={280}>
        <Car x={310} y={325} rotate={90} color={C.ego} dark={C.egoDark} label="You" />
        <PathArrow d="M 360 325 L 540 325" color={C.ego} width={3} arrow={false} opacity={0.5} />
        <Cyclist x={590} y={348} rotate={90} />
        <line x1="520" y1="352" x2="520" y2="304" stroke={C.path} strokeWidth="2.5" />
        <line x1="510" y1="304" x2="530" y2="304" stroke={C.path} strokeWidth="2.5" />
        <line x1="510" y1="352" x2="530" y2="352" stroke={C.path} strokeWidth="2.5" />
        <Label x={520} y={286} text="1.5 m in town" tone="green" />
        <Label x={190} y={430} text="Lane centre" />
        <line x1="310" y1="372" x2="310" y2="410" stroke={C.navy} strokeWidth="2" strokeDasharray="5 5" />
        <line x1="310" y1="410" x2="500" y2="410" stroke={C.navy} strokeWidth="2" strokeDasharray="5 5" />
        <Label x={610} y={430} text="2 m outside town" />
      </UrbanRoad>
    </RoadCanvas>
  )
}

export function LaneChangeDiagram() {
  return (
    <RoadCanvas title="Changing from the left lane to the right lane" label="Lane change diagram">
      <UrbanRoad oneWay lanesEast={2} centerY={280} centerMarking="dashed">
        <Car x={250} y={235} rotate={90} color={C.ego} dark={C.egoDark} label="You" indicator="right" />
        <PathArrow d="M 300 235 Q 390 235 420 280 T 520 325" color={C.path} />
        <Car x={660} y={325} rotate={90} color={C.other} label="Target lane" />
        <polygon points="270,275 380,345 300,365 230,305" fill={C.hazard} opacity="0.3" />
        <Marker x={380} y={242} n={1} />
        <Marker x={430} y={278} n={2} />
        <Marker x={300} y={300} n={3} tone="red" />
        <Label x={290} y={380} text="Mirror → signal → shoulder" />
        <Label x={660} y={390} text="Keep speed steady" />
      </UrbanRoad>
    </RoadCanvas>
  )
}

export function MotorwayLaneChangeDiagram() {
  return (
    <RoadCanvas
      title="Changing to the left lane on a three-lane Autobahn"
      label="Motorway lane change diagram"
    >
      <UrbanRoad oneWay lanesEast={3} centerY={280} hardShoulder>
        <Car x={230} y={280} rotate={90} color={C.ego} dark={C.egoDark} label="You" indicator="left" />
        <PathArrow d="M 280 280 Q 370 280 400 235 T 520 190" color={C.path} />
        <Car x={640} y={190} rotate={90} color={C.other} label="Closing fast" />
        <Car x={560} y={370} rotate={90} color={C.other} ghost />
        <polygon points="250,215 360,180 380,215 270,245" fill={C.hazard} opacity="0.3" />
        <Marker x={330} y={240} n={1} />
        <Label x={250} y={440} text="Check closing speed" />
        <Label x={640} y={150} text="Gap must be safe" tone="amber" />
        <Label x={400} y={500} text="Keep right unless overtaking" />
      </UrbanRoad>
    </RoadCanvas>
  )
}
