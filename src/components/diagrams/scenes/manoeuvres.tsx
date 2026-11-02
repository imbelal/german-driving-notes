import {
  Bus,
  C,
  Car,
  Cyclist,
  Label,
  Marker,
  PathArrow,
  Pedestrian,
  RoadCanvas,
  Sign,
  WarningTriangle,
} from '../primitives'
import { RoundaboutBase, UrbanRoad } from '../roads'

export function UTurnDiagram() {
  return (
    <RoadCanvas title="U-turn on a two-way road with a dashed centre line" label="U-turn diagram">
      <UrbanRoad lanesEast={1} lanesWest={1} centerMarking="dashed">
        <PathArrow d="M300 325 L460 325 Q520 325 520 280 Q520 235 460 235 L220 235" color={C.path} />
        <Car x={270} y={325} rotate={90} color={C.ego} dark={C.egoDark} label="You" indicator="left" />
        <g>
          <Sign x={690} y={110} type="autobahn" size={44} />
          <line x1="662" y1="82" x2="718" y2="138" stroke={C.hazard} strokeWidth="5" />
        </g>
        <Label x={690} y={158} text="Never on Autobahn" tone="red" />
        <Label x={400} y={110} text="Only where permitted" tone="amber" />
        <Label x={640} y={430} text="Check all around" />
      </UrbanRoad>
    </RoadCanvas>
  )
}

export function ThreePointDiagram() {
  return (
    <RoadCanvas
      title="Three-point turn shown in three movements on a narrow street"
      label="Three-point turn diagram"
    >
      <rect x="0" y="0" width="800" height="560" fill={C.bg} />
      <rect x="0" y="140" width="800" height="290" fill={C.sidewalk} />
      <rect x="0" y="160" width="800" height="250" fill={C.asphalt} />
      <rect x="0" y="160" width="800" height="10" fill="#94a3b8" opacity="0.5" />
      <rect x="0" y="400" width="800" height="10" fill="#94a3b8" opacity="0.5" />
      <PathArrow d="M270 330 Q360 300 410 250" color={C.path} dashed />
      <PathArrow d="M440 250 Q500 290 530 330" color={C.amber} dashed />
      <PathArrow d="M530 330 Q450 260 330 215" color={C.path} dashed />
      <Car x={230} y={330} rotate={90} color={C.ego} dark={C.egoDark} label="Start" indicator="left" />
      <Car x={420} y={250} rotate={-35} color={C.ego} dark={C.egoDark} ghost />
      <Car x={530} y={330} rotate={-45} color={C.other} ghost />
      <Car x={320} y={212} rotate={-90} color={C.other} ghost label="Final" />
      <Marker x={390} y={266} n={1} />
      <Marker x={512} y={312} n={2} />
      <Marker x={330} y={240} n={3} />
      <Label x={400} y={510} text="1 forward left · 2 reverse right · 3 forward left" />
      <Label x={660} y={180} text="Check all around each phase" tone="amber" />
    </RoadCanvas>
  )
}

export function RoundaboutDiagram() {
  return (
    <RoadCanvas
      title="Entering a roundabout, yielding to circulating traffic and exiting north"
      label="Roundabout diagram"
    >
      <RoundaboutBase>
        <PathArrow
          d="M445 506 L445 455 Q445 422 435 402 A121 121 0 0 0 521 280 A121 121 0 0 0 400 159 L400 70"
          color={C.path}
        />
        <Car x={445} y={506} color={C.ego} dark={C.egoDark} label="You" />
        <Car x={279} y={280} rotate={180} color={C.other} label="Circulating" />
        <PathArrow d="M279 280 Q300 370 350 395" color={C.amber} width={4} dashed />
        <Sign x={540} y={438} type="roundabout" size={44} />
        <Label x={580} y={480} text="Yield to the left" tone="amber" />
        <Label x={640} y={220} text="Signal right to exit" tone="green" />
        <Label x={400} y={64} text="Kreisverkehr" tone="amber" />
      </RoundaboutBase>
    </RoadCanvas>
  )
}

export function RoundaboutMultiDiagram() {
  return (
    <RoadCanvas
      title="Multi-lane roundabout: choose the correct lane before entering"
      label="Multi-lane roundabout diagram"
    >
      <RoundaboutBase>
        <PathArrow
          d="M445 506 L445 455 Q445 422 435 402 A121 121 0 0 0 521 280 L650 280"
          color={C.path}
        />
        <PathArrow
          d="M355 506 L355 455 Q355 422 368 404 Q382 390 400 380 A100 100 0 0 0 500 280 A100 100 0 0 0 400 180 A100 100 0 0 0 300 280 L160 280"
          color={C.amber}
        />
        <Car x={445} y={506} color={C.ego} dark={C.egoDark} label="Right lane" />
        <Car x={355} y={506} color={C.other} ghost label="Left lane" />
        <Label x={620} y={330} text="First exit: right lane" tone="green" />
        <Label x={170} y={330} text="Later exit: left lane" tone="amber" />
        <Label x={400} y={64} text="Choose before entering" />
      </RoundaboutBase>
    </RoadCanvas>
  )
}

export function AutobahnMergeDiagram() {
  return (
    <RoadCanvas
      title="Merging from the acceleration lane into Autobahn traffic"
      label="Autobahn merging diagram"
    >
      <UrbanRoad oneWay lanesEast={3} centerY={280}>
        <path d="M0 415 L0 505 L430 505 Q510 505 570 415 Z" fill={C.asphalt} />
        <line x1="0" y1="505" x2="430" y2="505" stroke={C.line} strokeWidth="2.5" opacity="0.6" />
        <line x1="0" y1="415" x2="500" y2="415" stroke={C.line} strokeWidth="2" opacity="0.45" />
        <PathArrow
          d="M240 470 Q420 470 500 435 Q555 408 585 370 L700 370"
          color={C.path}
        />
        <Car x={190} y={470} rotate={90} color={C.ego} dark={C.egoDark} label="You" indicator="left" />
        <Car x={330} y={370} rotate={90} color={C.other} label="Traffic on Autobahn" />
        <Car x={710} y={370} rotate={90} color={C.other} />
        <Car x={560} y={280} rotate={90} color={C.other} />
        <Label x={180} y={540} text="Acceleration lane" tone="amber" />
        <Label x={620} y={440} text="Match the speed" tone="green" />
        <Label x={400} y={112} text="Priority: traffic already on the Autobahn" />
      </UrbanRoad>
    </RoadCanvas>
  )
}

export function AutobahnExitDiagram() {
  return (
    <RoadCanvas
      title="Leaving the Autobahn using the deceleration lane"
      label="Autobahn exit diagram"
    >
      <UrbanRoad oneWay lanesEast={2} centerY={280}>
        <path d="M480 370 L800 370 L800 505 L700 505 Q570 505 480 370 Z" fill={C.asphalt} />
        <line x1="480" y1="370" x2="800" y2="370" stroke={C.line} strokeWidth="2" opacity="0.35" />
        <path d="M480 370 Q570 505 700 505" fill="none" stroke={C.line} strokeWidth="2.5" opacity="0.65" />
        <PathArrow
          d="M290 325 L470 325 Q555 325 610 390 Q650 440 710 470 L780 470"
          color={C.path}
        />
        <Car x={250} y={325} rotate={90} color={C.ego} dark={C.egoDark} label="You" indicator="right" />
        <Car x={650} y={235} rotate={90} color={C.other} label="Through traffic" />
        <Sign x={720} y={150} type="speed-80" size={46} />
        <Label x={720} y={202} text="Exit speed" tone="amber" />
        <Label x={630} y={540} text="Deceleration lane" tone="green" />
        <Label x={650} y={315} text="Brake only here" tone="amber" />
      </UrbanRoad>
    </RoadCanvas>
  )
}

export function RettungsgasseDiagram() {
  return (
    <RoadCanvas
      title="Rettungsgasse between the leftmost lane and the next lane on a three-lane Autobahn"
      label="Rettungsgasse diagram"
    >
      <UrbanRoad oneWay lanesEast={3} centerY={280}>
        <rect x="0" y="205" width="800" height="120" fill={C.path} opacity="0.12" />
        <PathArrow d="M160 265 L690 265" color={C.amber} dashed width={5} />
        <Car x={200} y={170} rotate={90} color={C.other} />
        <Car x={470} y={170} rotate={90} color={C.other} />
        <Car x={730} y={170} rotate={90} color={C.other} />
        <Car x={300} y={350} rotate={90} color={C.other} />
        <Car x={590} y={350} rotate={90} color={C.other} />
        <Car x={200} y={390} rotate={90} color={C.other} />
        <Car x={480} y={390} rotate={90} color={C.other} />
        <Car x={730} y={390} rotate={90} color={C.other} />
        <g transform="translate(470 265)">
          <rect x="-36" y="-17" width="72" height="34" rx="7" fill="#f8fafc" stroke="#1f2937" strokeWidth="1.5" />
          <rect x="-8" y="-17" width="34" height="34" rx="5" fill="#f8fafc" stroke="#1f2937" strokeWidth="1.5" />
          <rect x="14" y="-11" width="14" height="12" rx="2" fill="#bfdbfe" />
          <rect x="-28" y="-11" width="14" height="12" rx="2" fill="#bfdbfe" />
          <rect x="-36" y="8" width="72" height="5" fill={C.hazard} />
          <rect x="-24" y="-9" width="12" height="7" rx="2" fill="#3b82f6" />
          <circle cx="-18" cy="-17" r="4" fill="#3b82f6" />
        </g>
        <Label x={470} y={215} text="Emergency vehicle" tone="amber" />
        <Label x={180} y={105} text="Left lane goes left" tone="green" />
        <Label x={640} y={468} text="All other lanes go right" tone="green" />
        <Label x={400} y={540} text="Rettungsgasse: keep it open" tone="navy" />
      </UrbanRoad>
    </RoadCanvas>
  )
}

export function OvertakingDiagram() {
  return (
    <RoadCanvas
      title="Overtaking a slower vehicle on a two-way road using the left lane"
      label="Overtaking diagram"
    >
      <UrbanRoad lanesEast={1} lanesWest={1} centerMarking="dashed">
        <PathArrow
          d="M280 325 L360 325 Q415 325 435 280 L470 235 L650 235 Q700 235 720 280 L740 325 L790 325"
          color={C.path}
        />
        <Car x={230} y={325} rotate={90} color={C.ego} dark={C.egoDark} label="You" indicator="left" />
        <Car x={510} y={325} rotate={90} color={C.other} label="Slower vehicle" />
        <Label x={400} y={170} text="Oncoming lane must be clear" tone="amber" />
        <Label x={650} y={180} text="Return right when safe" tone="green" />
        <Marker x={430} y={270} n={1} />
      </UrbanRoad>
    </RoadCanvas>
  )
}

export function OvertakeCyclistDiagram() {
  return (
    <RoadCanvas
      title="Overtaking a cyclist with at least 1.5 metres in town and 2 metres outside"
      label="Overtaking a cyclist diagram"
    >
      <UrbanRoad lanesEast={1} lanesWest={1} centerMarking="dashed">
        <PathArrow
          d="M280 325 L360 325 Q415 325 435 280 L470 235 L640 235 Q690 235 710 280 L730 325 L790 325"
          color={C.path}
        />
        <Car x={230} y={325} rotate={90} color={C.ego} dark={C.egoDark} label="You" indicator="left" />
        <Cyclist x={550} y={352} rotate={90} />
        <line x1="610" y1="352" x2="610" y2="240" stroke={C.path} strokeWidth="2.5" />
        <line x1="600" y1="240" x2="620" y2="240" stroke={C.path} strokeWidth="2.5" />
        <line x1="600" y1="352" x2="620" y2="352" stroke={C.path} strokeWidth="2.5" />
        <Label x={610} y={218} text="1.5 m town · 2 m outside" tone="green" />
        <Label x={400} y={170} text="Only if oncoming is clear" tone="amber" />
        <Label x={550} y={410} text="Never squeeze past" tone="red" />
      </UrbanRoad>
    </RoadCanvas>
  )
}

export function EmergencyBrakingDiagram() {
  return (
    <RoadCanvas
      title="Emergency braking for a pedestrian stepping into the road"
      label="Emergency braking diagram"
    >
      <UrbanRoad lanesEast={1} lanesWest={1} centerMarking="solid">
        <PathArrow d="M300 325 L520 325" color={C.hazard} dashed width={5} />
        <line x1="300" y1="310" x2="500" y2="310" stroke="#1f2937" strokeWidth="6" opacity="0.5" strokeDasharray="18 5" />
        <line x1="300" y1="340" x2="500" y2="340" stroke="#1f2937" strokeWidth="6" opacity="0.5" strokeDasharray="18 5" />
        <Car x={250} y={325} rotate={90} color={C.ego} dark={C.egoDark} label="You" />
        <Pedestrian x={575} y={320} scale={1.25} />
        <circle cx="575" cy="325" r="32" fill={C.hazard} opacity="0.18" />
        <Marker x={522} y={325} n={1} tone="red" />
        <Label x={430} y={410} text="Brake hard and keep steering" tone="red" />
        <Label x={660} y={440} text="Secure the scene afterwards" />
        <Label x={660} y={180} text="Look where you want to go" tone="amber" />
      </UrbanRoad>
    </RoadCanvas>
  )
}

export function BreakdownDiagram() {
  return (
    <RoadCanvas
      title="Breakdown on the hard shoulder with hazard lights and a warning triangle"
      label="Breakdown diagram"
    >
      <UrbanRoad lanesEast={1} lanesWest={1} centerY={260} hardShoulder>
        <Car x={500} y={390} rotate={90} color={C.ego} dark={C.egoDark} label="You" indicator="hazard" />
        <WarningTriangle x={230} y={400} scale={0.85} />
        <line x1="540" y1="448" x2="800" y2="448" stroke="#94a3b8" strokeWidth="6" />
        {Array.from({ length: 6 }).map((_, i) => (
          <rect key={i} x={556 + i * 42} y="448" width="5" height="22" fill="#64748b" />
        ))}
        <Pedestrian x={700} y={488} color="#f59e0b" scale={1.1} />
        <line x1="290" y1="408" x2="440" y2="408" stroke={C.amber} strokeWidth="2.5" strokeDasharray="7 6" />
        <Label x={230} y={466} text="Warning triangle" tone="amber" />
        <Label x={690} y={535} text="Wait behind the barrier" />
        <Label x={400} y={140} text="Hazard lights first" tone="red" />
        <Label x={590} y={340} text="Hard shoulder" tone="navy" />
        <Marker x={500} y={390} n={1} tone="red" />
      </UrbanRoad>
    </RoadCanvas>
  )
}

export function ParallelParkingDiagram() {
  return (
    <RoadCanvas
      title="Parallel parking between two parked cars"
      label="Parallel parking diagram"
    >
      <UrbanRoad lanesEast={1} lanesWest={1} centerY={260} hardShoulder>
        <Car x={380} y={390} rotate={90} color={C.other} label="Parked" />
        <Car x={710} y={390} rotate={90} color={C.other} label="Parked" />
        <Car x={690} y={310} rotate={90} color={C.ego} dark={C.egoDark} label="You" indicator="right" />
        <PathArrow d="M650 310 Q600 315 580 350 L550 390" color={C.path} dashed />
        <Car x={530} y={390} rotate={90} color={C.ego} dark={C.egoDark} ghost label="Final" />
        <Marker x={690} y={310} n={1} />
        <Marker x={583} y={352} n={2} />
        <Marker x={530} y={390} n={3} tone="green" />
        <Label x={180} y={440} text="Parking lane" tone="navy" />
        <Label x={600} y={490} text="Reverse at about 45°" />
        <Label x={640} y={250} text="Check the blind spot" tone="amber" />
      </UrbanRoad>
    </RoadCanvas>
  )
}

export function HillParkingDiagram() {
  return (
    <RoadCanvas
      title="Parking downhill on a slope with the front wheels turned toward the kerb"
      label="Hill parking diagram"
    >
      <rect x="0" y="0" width="800" height="560" fill={C.bg} />
      <path d="M0 300 L800 368 L800 448 L0 380 Z" fill={C.asphalt} />
      <path d="M0 380 L800 448 L800 476 L0 408 Z" fill={C.sidewalk} />
      {Array.from({ length: 22 }).map((_, i) => (
        <line
          key={i}
          x1={i * 38}
          y1={382 + i * 3.1}
          x2={i * 38}
          y2={410 + i * 3.1}
          stroke="#94a3b8"
          strokeWidth="2"
          opacity="0.55"
        />
      ))}
      <line x1="0" y1="300" x2="800" y2="368" stroke={C.line} strokeWidth="3" opacity="0.7" />
      <g transform="translate(360 330) rotate(4.8)">
        <ellipse cx="0" cy="25" rx="92" ry="13" fill="#0f172a" opacity="0.16" />
        <rect x="-88" y="-34" width="176" height="48" rx="13" fill={C.ego} stroke="#0f172a" strokeOpacity="0.25" strokeWidth="1.5" />
        <path d="M -54 -34 L -32 -68 L 34 -68 L 58 -34 Z" fill={C.egoDark} />
        <rect x="-28" y="-62" width="46" height="20" rx="4" fill="#dbeafe" />
        <rect x="24" y="-62" width="26" height="20" rx="4" fill="#dbeafe" />
        <rect x="74" y="-20" width="10" height="9" rx="3" fill="#fef3c7" />
        <rect x="-84" y="-20" width="10" height="9" rx="3" fill="#ef4444" />
        <circle cx="-50" cy="15" r="19" fill="#1f2937" />
        <circle cx="-50" cy="15" r="8" fill="#cbd5e1" />
        <ellipse cx="54" cy="15" rx="10" ry="19" fill="#1f2937" />
        <circle cx="54" cy="15" r="5" fill="#cbd5e1" />
      </g>
      <circle cx="415" cy="349" r="30" fill="none" stroke={C.amber} strokeWidth="3" strokeDasharray="7 5" />
      <Label x={640} y={292} text="Front wheels turned to kerb" tone="amber" />
      <line x1="560" y1="300" x2="438" y2="342" stroke={C.amber} strokeWidth="2.5" />
      <PathArrow d="M120 520 L690 520" color={C.amber} width={5} />
      <Label x={405} y={552} text="Downhill" tone="amber" />
      <Label x={380} y={120} text="Downhill: reverse gear + handbrake" />
      <Label x={380} y={162} text="Uphill: first gear, wheels away from kerb" />
      <Label x={380} y={205} text="Always secure the car before leaving" tone="navy" />
    </RoadCanvas>
  )
}

export function CrosswalkDiagram() {
  return (
    <RoadCanvas
      title="Approaching a zebra crossing while a pedestrian crosses"
      label="Pedestrian crossing diagram"
    >
      <UrbanRoad lanesEast={1} lanesWest={1} centerMarking="solid">
        {Array.from({ length: 8 }).map((_, i) => (
          <rect key={i} x={400} y={200 + i * 21} width={70} height={10} rx={2} fill={C.line} />
        ))}
        <PathArrow d="M250 325 L370 325" color={C.path} />
        <rect x="376" y="280" width="8" height="90" fill={C.line} />
        <Car x={200} y={325} rotate={90} color={C.ego} dark={C.egoDark} label="You" />
        <Pedestrian x={435} y={255} scale={1.2} />
        <PathArrow d="M435 220 L435 352" color={C.ped} width={3} dashed opacity={0.7} />
        <Car x={670} y={235} rotate={-90} color={C.other} label="Stopped" />
        <Label x={610} y={175} text="Pedestrians have priority" tone="red" />
        <Label x={640} y={430} text="No overtaking at crossings" tone="amber" />
        <Marker x={370} y={325} n={1} tone="green" />
      </UrbanRoad>
    </RoadCanvas>
  )
}

export function SchoolBusDiagram() {
  return (
    <RoadCanvas
      title="School bus with flashing hazard lights and children nearby"
      label="School bus diagram"
    >
      <UrbanRoad lanesEast={1} lanesWest={1} centerMarking="solid">
        <Bus x={530} y={325} rotate={90} hazard />
        <PathArrow d="M280 325 L410 325" color={C.path} />
        <Car x={220} y={325} rotate={90} color={C.ego} dark={C.egoDark} label="You" />
        <Pedestrian x={620} y={360} scale={1.05} />
        <Pedestrian x={660} y={300} scale={0.9} />
        <Pedestrian x={600} y={260} scale={0.85} />
        <Label x={530} y={200} text="Flashing hazard lights" tone="amber" />
        <Label x={300} y={450} text="No overtaking" tone="red" />
        <Label x={650} y={450} text="Walking speed" tone="amber" />
        <Marker x={410} y={325} n={1} tone="red" />
      </UrbanRoad>
    </RoadCanvas>
  )
}

export function WinterDiagram() {
  return (
    <RoadCanvas
      title="Winter driving with a long following distance and snow on the road"
      label="Winter driving diagram"
    >
      <UrbanRoad lanesEast={1} lanesWest={1} centerMarking="solid" snow>
        <Car x={200} y={325} rotate={90} color={C.ego} dark={C.egoDark} label="You" />
        <Car x={600} y={325} rotate={90} color={C.other} label="Keep distance" />
        <line x1="280" y1="368" x2="550" y2="368" stroke={C.navy} strokeWidth="2.5" />
        <line x1="280" y1="356" x2="280" y2="380" stroke={C.navy} strokeWidth="2.5" />
        <line x1="550" y1="356" x2="550" y2="380" stroke={C.navy} strokeWidth="2.5" />
        <Label x={415} y={398} text="Double or more distance" tone="navy" />
        <Sign x={720} y={150} type="speed-80" size={44} />
        <Label x={720} y={204} text="Adapt to conditions" tone="amber" />
        {[
          [120, 130],
          [300, 100],
          [500, 140],
          [680, 100],
          [90, 500],
          [740, 510],
        ].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="3.5" fill="#f8fafc" opacity="0.9" />
        ))}
        <Label x={150} y={230} text="Clear windows and lights" />
        <Label x={650} y={430} text="Winter tyres" tone="green" />
      </UrbanRoad>
    </RoadCanvas>
  )
}
